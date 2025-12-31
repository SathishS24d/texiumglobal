// Mobile nav toggle (re-use behaviour from main site)
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
}

// Scroll animations (same pattern as main.js)
const animateItems = document.querySelectorAll("[data-animate]");

if ("IntersectionObserver" in window && animateItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animateItems.forEach((el) => observer.observe(el));
} else {
  animateItems.forEach((el) => el.classList.add("in-view"));
}

// -----------------------------
// Wholesale collections schema
// -----------------------------
// All main collections and their categories (including nested subcategories).

const wholesaleCollections = {
  womens: {
    id: "womens",
    title: "Women’s Wear",
    description:
      "",
    categories: [
      { name: "Feeding Kurta" },
      { name: "Maternity Dress" },
      { name: "Twinning Combo" },
      { name: "Tunics" },
      { name: "Co-ord Set" },
      { name: "Suit Set" },
      { name: "Festive Wear" },
      { name: "Kaftan" },
      {
        name: "Intimate Wear",
        subcategories: [
          "Padded Bra",
          "Non-Padded Bra",
          "Lounge Bra",
          "Bump Support Panty",
          "Boy Shorts",
          "Hipster Panty",
        ],
      },
    ],
  },
  lounge: {
    id: "lounge",
    title: "Lounge Wear",
    description:
      "",
    categories: [
      { name: "Pyjama Sets" },
      { name: "Zipless Feeding Gowns" },
      { name: "Cloud Bump Leggings" },
      { name: "Long T-Shirts" },
    ],
  },
  kids: {
    id: "kids",
    title: "Kids Wear",
    description:
      "",
    categories: [
      { name: "Nappy" },
      { name: "Swaddles" },
      { name: "Jabla" },
      { name: "Mitten & Booty Set" },
      { name: "Rompers" },
      { name: "Bath Towels" },
      { name: "Caps" },
      { name: "Onesies" },
      { name: "Frock" },
      { name: "Short Set" },
      { name: "Wipes" },
    ],
  },
  mens: {
    id: "mens",
    title: "Men’s Wear",
    description:
      "",
    categories: [
      { name: "Pants" },
      { name: "Shirts" },
      { name: "Lounge Wear" },
      { name: "T-Shirts" },
    ],
  },
  uniforms: {
    id: "uniforms",
    title: "Uniforms",
    description:
      "",
    categories: [
      { name: "Corporate Uniform" },
      { name: "Admin Uniform" },
      { name: "School Uniform" },
      { name: "Security Uniform" },
    ],
  },
  hospital: {
    id: "hospital",
    title: "Hospital Uniforms",
    description:
      "",
    categories: [
      { name: "Patient Gown (Unisex)" },
      { name: "Delivery Gowns" },
      { name: "Scrub Suit" },
      { name: "OT Scrubs" },
    ],
  },
};

// -----------------------------
// DOM references
// -----------------------------

const collectionsGridSection = document.getElementById("collectionsGridSection");
const collectionsGrid = document.getElementById("collectionsGrid");
const collectionDetailSection = document.getElementById("collectionDetailSection");
const collectionCategories = document.getElementById("collectionCategories");
const collectionDetailHeading = document.getElementById("collectionDetailHeading");
const collectionDetailDescription = document.getElementById(
  "collectionDetailDescription"
);
const detailEyebrow = document.getElementById("detailEyebrow");
const backToCollectionsPage = document.getElementById("backToCollectionsPage");

let activeCollectionId = null;

// -----------------------------
// Rendering helpers
// -----------------------------

/**
 * Render the main collection cards from the wholesaleCollections object.
 */
function renderMainCollections() {
  if (!collectionsGrid) return;

  const entries = Object.values(wholesaleCollections);

  collectionsGrid.innerHTML = entries
    .map(
      (collection) => `
        <article class="card collection-card" data-collection-id="${collection.id}">
          <div class="card-body">
            <h2 class="collection-card-title">${collection.title}</h2>
            <p class="collection-card-text">
              ${collection.description}
            </p>
            <button
              type="button"
              class="btn ghost collection-view-btn"
              data-collection-id="${collection.id}"
            >
              View categories →
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

/**
 * Render subcategories for a given collection id.
 * Each category is an article with h3; categories with subcategories get
 * an expandable nested list.
 */
function renderCollectionDetail(collectionId) {
  const collection = wholesaleCollections[collectionId];
  if (!collection || !collectionCategories) return;

  activeCollectionId = collectionId;

  if (collectionDetailHeading) {
    collectionDetailHeading.textContent = collection.title;
  }
  if (collectionDetailDescription) {
    collectionDetailDescription.textContent = collection.description;
  }
  if (detailEyebrow) {
    detailEyebrow.textContent = "Collection • " + collection.title;
  }

  collectionCategories.innerHTML = collection.categories
    .map((cat, index) => {
      const hasNested = Array.isArray(cat.subcategories) && cat.subcategories.length > 0;
      const nestedId = `nested-${collection.id}-${index}`;

      const nestedHtml = hasNested
        ? `
          <button
            class="text-link nested-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="${nestedId}"
          >
            View inner categories →
          </button>
          <div
            class="nested-list"
            id="${nestedId}"
            hidden
          >
            <ul>
              ${cat.subcategories
                .map(
                  (item) => `
                    <li>${item}</li>
                  `
                )
                .join("")}
            </ul>
          </div>
        `
        : "";

      return `
        <article class="card category-card--detail" data-category-name="${cat.name}">
          <div class="card-body">
            <h3>${cat.name}</h3>
            <p class="category-lead">
              ${
                hasNested
                  ? "A structured sub‑category with nested intimatewear lines ready to be expanded into detailed product grids."
                  : "A focused wholesale category ready to be extended with style‑level details and MOQ guidance."
              }
            </p>
            ${nestedHtml}
          </div>
        </article>
      `;
    })
    .join("");

  // Transition: hide grid, show detail
  if (collectionsGridSection) {
    collectionsGridSection.classList.add("is-hidden");
  }
  if (collectionDetailSection) {
    collectionDetailSection.classList.remove("is-hidden");
    collectionDetailSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// -----------------------------
// Event wiring
// -----------------------------

// Handle clicks on main collection cards / buttons
if (collectionsGrid) {
  collectionsGrid.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const button = target.closest("[data-collection-id]");
    if (!button) return;

    const collectionId = button.getAttribute("data-collection-id");
    if (!collectionId) return;

    renderCollectionDetail(collectionId);
  });
}

// Back link to all collections
if (backToCollectionsPage) {
  backToCollectionsPage.addEventListener("click", (event) => {
    event.preventDefault();
    if (collectionDetailSection) {
      collectionDetailSection.classList.add("is-hidden");
    }
    if (collectionsGridSection) {
      collectionsGridSection.classList.remove("is-hidden");
      collectionsGridSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

// Nested category toggles (Intimate Wear inner list, etc.)
if (collectionCategories) {
  collectionCategories.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const toggle = target.closest(".nested-toggle");
    if (!toggle) return;

    const controlsId = toggle.getAttribute("aria-controls");
    if (!controlsId) return;
    const panel = document.getElementById(controlsId);
    if (!panel) return;

    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));

    if (isExpanded) {
      panel.hidden = true;
      panel.classList.remove("nested-list--open");
    } else {
      panel.hidden = false;
      // Triggering transition
      requestAnimationFrame(() => {
        panel.classList.add("nested-list--open");
      });
    }
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Initial render
renderMainCollections();


