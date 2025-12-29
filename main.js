// Mobile nav toggle
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

// Scroll animations
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

// Catalog data structure for on-page browsing (index.html):
// collections → categories → products (used by the homepage only).
const detailedCatalog = {
  collections: {
    maternity: {
      id: "maternity",
      title: "Women’s Wear",
      description:
        "Wholesale women’s wear including ethnic, western, fusion, maternity wear and feeding gowns—designed for premium retail floors and online boutiques.",
      categories: {
        "ethnic-wear": {
          id: "ethnic-wear",
          title: "Ethnic Wear",
          products: [
            {
              id: "w-ethnic-kurta-set",
              name: "Embroidered Kurta Set",
              fabric: "Rayon with embroidery detailing",
              sizes: ["S", "M", "L", "XL", "XXL"],
              moq: "60 units per colour",
              description:
                "Premium rayon kurta set with intricate embroidery and a flattering straight cut, ideal for festive and everyday ethnic collections.",
              image:
                "https://images.pexels.com/photos/6311647/pexels-photo-6311647.jpeg?auto=compress&cs=tinysrgb&w=800",
            },
          ],
        },
        "western-wear": {
          id: "western-wear",
          title: "Western Wear",
          products: [
            {
              id: "luna-wrap",
              name: "Luna Wrap Midi Dress",
              fabric: "Matte poly crepe, 180 GSM",
              sizes: ["XS", "S", "M", "L", "XL", "XXL"],
              moq: "40 units per colour",
              description:
                "A refined wrap midi dress with clean lines and modern proportions, designed for day-to-evening western wear racks.",
              image:
                "https://images.pexels.com/photos/7671244/pexels-photo-7671244.jpeg?auto=compress&cs=tinysrgb&w=800",
            },
          ],
        },
        "fusion-wear": {
          id: "fusion-wear",
          title: "Fusion Wear",
          products: [
            {
              id: "w-fusion-dress",
              name: "Draped Fusion Dress",
              fabric: "Viscose blend with soft sheen",
              sizes: ["S", "M", "L", "XL"],
              moq: "50 units per colour",
              description:
                "A hybrid draped dress combining ethnic drape with western ease, perfect for modern fusion capsules and occasion edits.",
              image:
                "https://images.pexels.com/photos/6311577/pexels-photo-6311577.jpeg?auto=compress&cs=tinysrgb&w=800",
            },
          ],
        },
        "maternity-wear": {
          id: "maternity-wear",
          title: "Maternity Wear",
          products: [
            {
              id: "halo-maternity",
              name: "Halo Maternity Maxi",
              fabric: "Cotton with elastane stretch panels",
              sizes: ["M", "L", "XL", "2XL", "3XL"],
              moq: "35 units per colour",
              description:
                "Full-length maternity maxi with gentle stretch, bump-friendly waist, and nursing access options for long-wear comfort.",
              image:
                "https://images.pexels.com/photos/3738086/pexels-photo-3738086.jpeg?auto=compress&cs=tinysrgb&w=800",
            },
          ],
        },
        "feeding-gowns": {
          id: "feeding-gowns",
          title: "Feeding Gowns",
          products: [
            {
              id: "zipless-feeding-gown",
              name: "Zipless Feeding Gown",
              fabric: "Bamboo cotton blend",
              sizes: ["S", "M", "L", "XL"],
              moq: "50 units",
              description:
                "Soft bamboo cotton feeding gown with concealed access and no hard trims, crafted for hospital stays and at-home wear.",
              image:
                "https://images.pexels.com/photos/6311576/pexels-photo-6311576.jpeg?auto=compress&cs=tinysrgb&w=800",
            },
          ],
        },
      },
    },
    regular: {
      id: "regular",
      title: "Men’s Wear",
      description:
        "Wholesale men’s wear including shirts, pants, T-shirts and loungewear, calibrated for comfort, durability, and repeat seasonal orders.",
      categories: {
        shirts: {
          id: "shirts",
          title: "Shirts",
          products: [
            {
              id: "m-oxford-shirt",
              name: "Classic Oxford Shirt",
              fabric: "100% cotton oxford",
              sizes: ["38", "40", "42", "44", "46"],
              moq: "80 units per colour",
              description:
                "Timeless oxford shirt with structured collar and clean finishing, designed as a core menswear essential for formal and smart casual edits.",
              image:
                "",
            },
          ],
        },
        pants: {
          id: "pants",
          title: "Pants",
          products: [
            {
              id: "m-tailored-trouser",
              name: "Tailored Cotton Trouser",
              fabric: "Cotton-rich twill with stretch",
              sizes: ["30", "32", "34", "36", "38"],
              moq: "80 units per colour",
              description:
                "Tailored cotton-rich trousers with subtle stretch and durable construction, ideal for corporate, retail, and uniform pairings.",
              image:
                "",
            },
          ],
        },
        tshirts: {
          id: "tshirts",
          title: "T-Shirts",
          products: [
            {
              id: "m-crew-tee",
              name: "Premium Crew Neck Tee",
              fabric: "Single jersey cotton",
              sizes: ["S", "M", "L", "XL", "XXL"],
              moq: "100 units per colour",
              description:
                "Premium crew neck T-shirt with a refined neck rib and clean hems, suited for both standalone retail and branding/uniform programs.",
              image:
                "",
            },
          ],
        },
        loungewear: {
          id: "loungewear",
          title: "Loungewear",
          products: [
            {
              id: "m-lounge-set",
              name: "Cotton Lounge Set",
              fabric: "Brushed cotton jersey",
              sizes: ["S", "M", "L", "XL"],
              moq: "60 sets per colour",
              description:
                "Relaxed loungewear set with a soft hand-feel and easy fit, designed for at-home comfort and resort capsules.",
              image:
                "",
            },
          ],
        },
      },
    },
    casual: {
      id: "casual",
      title: "Kids Wear",
      description:
        "Kids wear across boys, girls, newborns and muslin products, produced with safety-first trims and soft, parent-approved fabrics.",
      categories: {
        "boys-wear": {
          id: "boys-wear",
          title: "Boys Wear",
          products: [
            {
              id: "k-boys-shirt-set",
              name: "Boys Shirt & Shorts Set",
              fabric: "Cotton poplin and twill",
              sizes: ["2Y", "3Y", "4Y", "5Y", "6Y", "8Y"],
              moq: "80 sets per colour story",
              description:
                "Smart yet playful shirt and shorts set for boys, engineered for durability and repeat wear in active wardrobes.",
              image:
                "",
            },
          ],
        },
        "girls-wear": {
          id: "girls-wear",
          title: "Girls Wear",
          products: [
            {
              id: "k-girls-party-dress",
              name: "Girls Party Dress",
              fabric: "Poly satin with soft lining",
              sizes: ["2Y", "3Y", "4Y", "5Y", "6Y", "8Y"],
              moq: "70 units per colour",
              description:
                "Occasion-ready girls’ party dress with soft lining and thoughtful trims, crafted for birthdays, celebrations, and festive edits.",
              image:
                "",
            },
          ],
        },
        "newborn-wear": {
          id: "newborn-wear",
          title: "Newborn Wear",
          products: [
            {
              id: "k-newborn-set",
              name: "Newborn Essentials Set",
              fabric: "Organic cotton interlock",
              sizes: ["0-3M", "3-6M"],
              moq: "100 sets",
              description:
                "Soft newborn essentials set with envelope necklines and minimal seams, suitable for hospital gifting and baby boutiques.",
              image:
                "",
            },
          ],
        },
        "muslin-products": {
          id: "muslin-products",
          title: "Muslin Products",
          products: [
            {
              id: "k-muslin-jabla",
              name: "Muslin Jabla & Swaddle",
              fabric: "100% cotton muslin",
              sizes: ["Free Size"],
              moq: "120 pieces (assorted prints)",
              description:
                "Breathable muslin jablas and swaddles in coordinated prints, designed for newborn comfort and easy gifting displays.",
              image:
                "",
            },
          ],
        },
      },
    },
    ethnic: {
      id: "ethnic",
      title: "Medical Textiles",
      description:
        "Medical textiles with a focus on hygiene, durability, and wearer comfort—built for hospitals, clinics, and healthcare brands.",
      categories: {
        scrubs: {
          id: "scrubs",
          title: "Scrubs",
          products: [
            {
              id: "med-scrub-set",
              name: "Unisex Scrub Set",
              fabric: "Poly-cotton blend with easy-care finish",
              sizes: ["XS", "S", "M", "L", "XL", "XXL"],
              moq: "80 sets per colour",
              description:
                "Lightweight yet durable scrub set with functional pockets and easy-care fabric, ideal for hospital and clinic uniforms.",
              image:
                "",
            },
          ],
        },
        "hospital-gowns": {
          id: "hospital-gowns",
          title: "Hospital Gowns",
          products: [
            {
              id: "med-hospital-gown",
              name: "Patient Hospital Gown",
              fabric: "Cotton-rich plain weave",
              sizes: ["Standard", "Plus"],
              moq: "100 units",
              description:
                "Comfortable hospital gown with secure closures and coverage, manufactured for large-volume healthcare procurement.",
              image:
                "",
            },
          ],
        },
        "ot-uniforms": {
          id: "ot-uniforms",
          title: "OT Uniforms",
          products: [
            {
              id: "med-ot-uniform",
              name: "OT Tunic & Trouser Set",
              fabric: "Antimicrobial treated blend",
              sizes: ["S", "M", "L", "XL", "XXL"],
              moq: "80 sets per colour",
              description:
                "Theatre-ready OT uniform with easy movement and clean, minimal styling to suit high-sterility environments.",
              image:
                "",
            },
          ],
        },
        disposables: {
          id: "disposables",
          title: "Disposables",
          products: [
            {
              id: "med-disposable-gown",
              name: "Disposable Isolation Gown",
              fabric: "Non-woven medical-grade material",
              sizes: ["Universal"],
              moq: "500 units",
              description:
                "Single-use isolation gown engineered for hygiene-critical areas, with reliable coverage and easy disposal.",
              image:
                "",
            },
          ],
        },
      },
    },
    party: {
      id: "party",
      title: "Uniforms",
      description:
        "Structured uniforms for schools, corporates, colleges and institutions, balancing comfort with a polished, consistent appearance.",
      categories: {
        "school-uniforms": {
          id: "school-uniforms",
          title: "School Uniforms",
          products: [
            {
              id: "uni-school-set",
              name: "School Shirt & Trouser Set",
              fabric: "Poly-viscose blend",
              sizes: ["24", "26", "28", "30", "32", "34"],
              moq: "150 sets per school",
              description:
                "Long-wear school uniform set with strong seams and colour-fast fabric, suitable for institutional supply programs.",
              image:
                "",
            },
          ],
        },
        "corporate-uniforms": {
          id: "corporate-uniforms",
          title: "Corporate Uniforms",
          products: [
            {
              id: "uni-corporate-shirt",
              name: "Corporate Formal Shirt",
              fabric: "Blended shirting with easy-care finish",
              sizes: ["S", "M", "L", "XL", "XXL"],
              moq: "120 units per style",
              description:
                "Corporate-ready formal shirt tailored for brand consistency and comfort, ideal for front-office and hospitality teams.",
              image:
                "",
            },
          ],
        },
        "college-uniforms": {
          id: "college-uniforms",
          title: "College Uniforms",
          products: [
            {
              id: "uni-college-kit",
              name: "College Uniform Kit",
              fabric: "Poly-cotton suiting and shirting",
              sizes: ["XS", "S", "M", "L", "XL"],
              moq: "100 kits per institution",
              description:
                "Coordinated college uniform kit developed for campus programs, with fabrics chosen for daily wear and easy maintenance.",
              image:
                "",
            },
          ],
        },
      },
    },
    seasonal: {
      id: "seasonal",
      title: "Loungewear",
      description:
        "Soft, comfort-focused loungewear including pyjama sets, leggings, feeding gowns and long T-shirts, ideal for at-home and resort capsules.",
      categories: {
        "pyjama-sets": {
          id: "pyjama-sets",
          title: "Pyjama Sets",
          products: [
            {
              id: "lw-pyjama-set",
              name: "Cotton Pyjama Set",
              fabric: "Woven cotton with soft wash",
              sizes: ["S", "M", "L", "XL", "XXL"],
              moq: "80 sets per print story",
              description:
                "Two-piece cotton pyjama set with relaxed fit and soft washed finish, created for loungewear capsules and gifting programs.",
              image:
                "",
            },
          ],
        },
        "cloud-bump-leggings": {
          id: "cloud-bump-leggings",
          title: "Cloud Bump Leggings",
          products: [
            {
              id: "lw-bump-leggings",
              name: "Cloud Bump Leggings",
              fabric: "High-stretch knit with soft hand-feel",
              sizes: ["M", "L", "XL", "2XL"],
              moq: "60 units per colour",
              description:
                "Ultra-soft maternity leggings with high-rise bump support, designed to pair with feeding gowns and long tops.",
              image:
                "",
            },
          ],
        },
        "lounge-feeding-gowns": {
          id: "lounge-feeding-gowns",
          title: "Feeding Gowns",
          products: [
            {
              id: "lw-feeding-gown",
              name: "Zipless Lounge Feeding Gown",
              fabric: "Bamboo-blend jersey",
              sizes: ["S", "M", "L", "XL"],
              moq: "50 units per colour",
              description:
                "Lounge-first feeding gown with stretch jersey and neat concealed access, ideal for maternity and nursing wear capsules.",
              image:
                "",
            },
          ],
        },
        "long-tshirts": {
          id: "long-tshirts",
          title: "Long T-Shirts",
          products: [
            {
              id: "lw-long-tee",
              name: "Oversized Long T-Shirt",
              fabric: "Cotton jersey",
              sizes: ["Free Size", "Plus"],
              moq: "70 units per print",
              description:
                "Relaxed long T-shirt silhouette that works as loungewear, maternity layering, or casual daily wear.",
              image:
                "",
            },
          ],
        },
      },
    },
  },
};

// Build an index of products for quick lookup by id (for product detail view)
const productIndex = {};

Object.values(detailedCatalog.collections).forEach((collection) => {
  Object.values(collection.categories).forEach((category) => {
    category.products.forEach((product) => {
      productIndex[product.id] = {
        ...product,
        collectionTitle: collection.title,
        categoryTitle: category.title,
      };
    });
  });
});

// Elements for the dynamic collection → category → product flow
const collectionsOverviewSection = document.getElementById(
  "collections-overview"
);
const collectionListingSection = document.getElementById("collection-listing");
const collectionTitleEl = document.getElementById("activeCollectionTitle");
const collectionDescriptionEl = document.getElementById(
  "activeCollectionDescription"
);
const backToCollectionsEl = document.getElementById("backToCollections");
const categoryGrid = document.getElementById("categoryGrid");
const productsList = document.getElementById("productsList");

let currentCollectionId = null;
let currentCategoryId = null;

// Render category buttons/cards when a collection is opened
function renderCategories(collectionId) {
  const collection = detailedCatalog.collections[collectionId];
  if (!collection || !categoryGrid || !collectionListingSection) return;

  currentCollectionId = collectionId;
  currentCategoryId = null;

  if (collectionTitleEl) {
    collectionTitleEl.textContent = collection.title;
  }
  if (collectionDescriptionEl) {
    collectionDescriptionEl.textContent = collection.description;
  }

  const categories = Object.values(collection.categories);
  categoryGrid.innerHTML = categories
    .map(
      (cat) => `
      <button
        class="category-chip"
        data-category="${cat.id}"
        type="button"
      >
        ${cat.title}
      </button>
    `
    )
    .join("");

  if (collectionsOverviewSection) {
    collectionsOverviewSection.classList.add("is-hidden");
  }
  collectionListingSection.classList.remove("is-hidden");
  collectionListingSection.scrollIntoView({ behavior: "smooth", block: "start" });

  // Clear any previous products grid
  if (productsList) {
    productsList.innerHTML =
      '<p class="empty-state">Select a category to view wholesale products.</p>';
  }
}

// Render products for a specific category
function renderProducts(collectionId, categoryId) {
  const collection = detailedCatalog.collections[collectionId];
  if (!collection || !productsList) return;
  const category = collection.categories[categoryId];
  if (!category) return;

  currentCategoryId = categoryId;

  const items = category.products;
  if (!items.length) {
    productsList.innerHTML =
      '<p class="empty-state">Products will be added to this category soon. Please check back or send us an enquiry.</p>';
    return;
  }

  productsList.innerHTML = items
    .map(
      (p) => `
    <article class="product-card" data-product="${p.id}">
      <div class="product-image-wrap">
        <img
          src="${p.image}"
          alt="${p.name}"
          class="product-thumb"
          loading="lazy"
        />
      </div>
      <div class="product-overlay product-overlay--light">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <button class="text-link open-product" data-product="${p.id}">
          View details →
        </button>
      </div>
    </article>
  `
    )
    .join("");
}

// Wire up "Open collection" buttons to render categories
document.querySelectorAll(".open-collection").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const collectionId = btn.getAttribute("data-collection");
    if (!collectionId) return;
    e.preventDefault();
    renderCategories(collectionId);
  });
});

// Category click handling (category chips)
if (categoryGrid) {
  categoryGrid.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest(".category-chip");
    if (!btn) return;
    const categoryId = btn.getAttribute("data-category");
    if (!categoryId || !currentCollectionId) return;

    renderProducts(currentCollectionId, categoryId);
  });
}

// Optional: Back link to show all collections again
if (backToCollectionsEl) {
  backToCollectionsEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (collectionsOverviewSection) {
      collectionsOverviewSection.classList.remove("is-hidden");
      collectionsOverviewSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (collectionListingSection) {
      collectionListingSection.classList.add("is-hidden");
    }
  });
}

// Product detail population
const detailImage = document.getElementById("detailImage");
const detailCollection = document.getElementById("detailCollection");
const detailHeading = document.getElementById("product-detail-heading");
const detailDescription = document.getElementById("detailDescription");
const detailFabric = document.getElementById("detailFabric");
const detailSizes = document.getElementById("detailSizes");
const detailColours = document.getElementById("detailColours");
const detailMOQ = document.getElementById("detailMOQ");
const detailNotes = document.getElementById("detailNotes");

function setProductDetail(productId) {
  const p = productIndex[productId];
  if (!p) return;

  if (detailImage) {
    // Reset class and set background image from product data
    detailImage.className = "product-detail-image";
    detailImage.style.backgroundImage = `url("${p.image}")`;
  }
  if (detailCollection) {
    detailCollection.textContent = p.collectionTitle || "";
  }
  if (detailHeading) {
    detailHeading.textContent = p.name;
  }
  if (detailDescription) {
    detailDescription.textContent =
      "Full wholesale specification for this style is outlined below. Detailed line sheets are available on request.";
  }
  if (detailFabric) {
    detailFabric.textContent = p.fabric;
  }
  if (detailSizes) {
    detailSizes.textContent = Array.isArray(p.sizes)
      ? p.sizes.join(", ")
      : p.sizes;
  }
  if (detailColours) {
    detailColours.textContent = p.colours || "Available in curated colour stories.";
  }
  if (detailMOQ) {
    detailMOQ.textContent = p.moq;
  }
  if (detailNotes) {
    detailNotes.textContent = p.notes;
  }

  const detailSection = document.getElementById("product-detail");
  if (detailSection) {
    detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Delegate product clicks (featured grid + dynamic listing)
document.addEventListener("click", (e) => {
  const target = e.target;
  if (!(target instanceof HTMLElement)) return;
  const productBtn = target.closest(".open-product");
  if (productBtn) {
    const productId = productBtn.getAttribute("data-product");
    if (productId) {
      e.preventDefault();
      setProductDetail(productId);
    }
  }
});

// Enquiry form handling
const enquiryForm = document.getElementById("enquiryForm");
const formSuccess = document.getElementById("formSuccess");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;
    enquiryForm
      .querySelectorAll("[required]")
      .forEach((field) => field.classList.remove("form-error"));

    enquiryForm.querySelectorAll("[required]").forEach((field) => {
      if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement))
        return;
      if (!field.value.trim()) {
        valid = false;
        field.classList.add("form-error");
      }
    });

    if (!valid) {
      if (formSuccess) {
        formSuccess.textContent =
          "Please complete the required fields before submitting.";
        formSuccess.style.color = "#d16060";
      }
      return;
    }

    enquiryForm.reset();
    if (formSuccess) {
      formSuccess.textContent =
        "Thank you. Our wholesale team will respond with catalogues and pricing within 1–2 business days.";
      formSuccess.style.color = "#3c7a4e";
    }
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// --------------------------------------------------------------------
// Cross-page master catalog (collections → products) for new flow:
// collections.html → products.html → product-detail.html
// --------------------------------------------------------------------

const catalog = {
  womens: {
    slug: "womens",
    title: "Women’s Wear",
    image: "assets/img/collections/womens.jpg",
    description:
      "Wholesale women’s wear including feeding kurtas, maternity dresses and coordinated sets, tailored for modern retail and bulk sourcing.",
    products: [
      {
        slug: "feeding-kurta",
        name: "Feeding Kurta",
        image: "assets/img/products/feeding-kurta.jpg",
        shortDesc: "Comfort-first feeding kurta for everyday maternity wear in retail and hospital settings.",
        description:
          "A soft, breathable feeding kurta engineered for pregnancy, nursing and postpartum comfort. Crafted in cotton / bamboo-rich fabrics, it is ideal for maternity boutiques, hospital gift shops and online retailers seeking reliable, repeatable wholesale maternity options.",
        fabric: "Cotton / Bamboo",
        sizes: "S–XXL",
        moq: "50 pieces",
      },
      {
        slug: "maternity-dress",
        name: "Maternity Dress",
        image: "assets/img/products/maternity-dress.jpg",
        shortDesc:
          "Soft, breathable maternity dress for pregnancy and postpartum wardrobes.",
        description:
          "A flowy maternity dress with gentle stretch and thoughtful patterning to accommodate the bump across trimesters. Designed for wholesale buyers looking for premium maternity silhouettes that photograph well and deliver repeat sales on the shop floor.",
        fabric: "Bamboo Cotton",
        sizes: "S–XXL",
        moq: "50 pieces",
      },
      {
        slug: "Twinning Combo",
        name: "Twinning Combo",
        image: "assets/img/products/maternity-dress.jpg",
        shortDesc:
          "Soft, breathable maternity dress for pregnancy and postpartum wardrobes.",
        description:
          "A flowy maternity dress with gentle stretch and thoughtful patterning to accommodate the bump across trimesters. Designed for wholesale buyers looking for premium maternity silhouettes that photograph well and deliver repeat sales on the shop floor.",
        fabric: "Bamboo Cotton",
        sizes: "S–XXL",
        moq: "50 pieces",
      },
      {
        slug: "Tunics",
        name: "Tunics",
        image: "assets/img/products/maternity-dress.jpg",
        shortDesc:
          "Soft, breathable maternity dress for pregnancy and postpartum wardrobes.",
        description:
          "A flowy maternity dress with gentle stretch and thoughtful patterning to accommodate the bump across trimesters. Designed for wholesale buyers looking for premium maternity silhouettes that photograph well and deliver repeat sales on the shop floor.",
        fabric: "Bamboo Cotton",
        sizes: "S–XXL",
        moq: "50 pieces",
      },
      {
        slug: "Co-Ord Set",
        name: "Co-Ord Set",
        image: "assets/img/products/maternity-dress.jpg",
        shortDesc:
          "Soft, breathable maternity dress for pregnancy and postpartum wardrobes.",
        description:
          "A flowy maternity dress with gentle stretch and thoughtful patterning to accommodate the bump across trimesters. Designed for wholesale buyers looking for premium maternity silhouettes that photograph well and deliver repeat sales on the shop floor.",
        fabric: "Bamboo Cotton",
        sizes: "S–XXL",
        moq: "50 pieces",
      },
      {
        slug: "Suit Set",
        name: "Suit Set",
        image: "assets/img/products/maternity-dress.jpg",
        shortDesc:
          "Soft, breathable maternity dress for pregnancy and postpartum wardrobes.",
        description:
          "A flowy maternity dress with gentle stretch and thoughtful patterning to accommodate the bump across trimesters. Designed for wholesale buyers looking for premium maternity silhouettes that photograph well and deliver repeat sales on the shop floor.",
        fabric: "Bamboo Cotton",
        sizes: "S–XXL",
        moq: "50 pieces",
      },
      {
        slug: "Festive Wear",
        name: "Festive Wear",
        image: "assets/img/products/maternity-dress.jpg",
        shortDesc:
          "Soft, breathable maternity dress for pregnancy and postpartum wardrobes.",
        description:
          "A flowy maternity dress with gentle stretch and thoughtful patterning to accommodate the bump across trimesters. Designed for wholesale buyers looking for premium maternity silhouettes that photograph well and deliver repeat sales on the shop floor.",
        fabric: "Bamboo Cotton",
        sizes: "S–XXL",
        moq: "50 pieces",
      },
      {
        slug: "Kaftan",
        name: "Kaftan",
        image: "assets/img/products/maternity-dress.jpg",
        shortDesc:
          "Soft, breathable maternity dress for pregnancy and postpartum wardrobes.",
        description:
          "A flowy maternity dress with gentle stretch and thoughtful patterning to accommodate the bump across trimesters. Designed for wholesale buyers looking for premium maternity silhouettes that photograph well and deliver repeat sales on the shop floor.",
        fabric: "Bamboo Cotton",
        sizes: "S–XXL",
        moq: "50 pieces",
      },
    ],
  },
  lounge: {
    slug: "lounge",
    title: "Lounge Wear",
    image: "assets/img/collections/lounge.jpg",
    description:
      "Loungewear built around softness, ease and all-day comfort for resort, home and maternity capsules.",
    products: [
      {
        slug: "pyjama-sets",
        name: "Pyjama Sets",
        image: "assets/img/products/pyjama-sets.jpg",
        shortDesc:
          "Two-piece cotton pyjama sets designed for relaxed at-home and resort wear.",
        description:
          "Lightweight cotton pyjama sets with relaxed fits and soft washes, created to sit in sleepwear, resort and gifting capsules. Ideal for retailers seeking consistent sizing, colour stories and long-run wholesale loungewear programs.",
        fabric: "Woven Cotton",
        sizes: "S–XXL",
        moq: "60 sets",
      },
      {
        slug: "zipless-feeding-gown",
        name: "Zipless Feeding Gown",
        image: "assets/img/products/zipless-feeding-gown.jpg",
        shortDesc:
          "Zip-free feeding gown with concealed access for nursing comfort.",
        description:
          "A bamboo-blend lounge gown featuring discreet nursing access without bulky zips. Built for maternity-focused retailers and hospital suppliers looking for premium yet practical postnatal loungewear in bulk.",
        fabric: "Bamboo Cotton Jersey",
        sizes: "S–XL",
        moq: "50 pieces",
      },
      {
        slug: "cloud-bump-leggings",
        name: "Cloud Bump Leggings",
        image: "assets/img/products/pyjama-sets.jpg",
        shortDesc:
          "Two-piece cotton pyjama sets designed for relaxed at-home and resort wear.",
        description:
          "Lightweight cotton pyjama sets with relaxed fits and soft washes, created to sit in sleepwear, resort and gifting capsules. Ideal for retailers seeking consistent sizing, colour stories and long-run wholesale loungewear programs.",
        fabric: "Woven Cotton",
        sizes: "S–XXL",
        moq: "60 sets",
      },
      {
        slug: "long-tshirt",
        name: "Long T-Shirt",
        image: "assets/img/products/pyjama-sets.jpg",
        shortDesc:
          "Two-piece cotton pyjama sets designed for relaxed at-home and resort wear.",
        description:
          "Lightweight cotton pyjama sets with relaxed fits and soft washes, created to sit in sleepwear, resort and gifting capsules. Ideal for retailers seeking consistent sizing, colour stories and long-run wholesale loungewear programs.",
        fabric: "Woven Cotton",
        sizes: "S–XXL",
        moq: "60 sets",
      },
    ],
  },
  kids: {
    slug: "kids",
    title: "Kids Wear",
    image: "assets/img/collections/kids.jpg",
    description:
      "Newborn and kids wear with safety-first trims and soft fabrics for bulk baby and kids collections.",
    products: [
        {
          slug: "nappy",
          name: "Baby Nappy",
          image: "assets/img/products/nappy.jpg",
          shortDesc:
            "Soft reusable nappies designed for newborn comfort.",
          description:
            "Baby nappies developed with skin-friendly fabrics for extended wear. Suitable for hospital kits and baby care brands.",
          fabric: "Cotton Terry",
          sizes: "Newborn",
          moq: "150 pieces",
        },
        {
          slug: "Swaddles",
          name: "Swaddles",
          image: "assets/img/products/short-set.jpg",
          shortDesc:
            "Two-piece short sets for everyday baby wear.",
          description:
            "Breathable short sets designed for comfort and durability. Suitable for bulk retail programs.",
          fabric: "Cotton Jersey",
          sizes: "6–24M",
          moq: "80 sets",
        },
        {
          slug: "rompers",
          name: "Rompers",
          image: "assets/img/products/rompers.jpg",
          shortDesc:
            "All-in-one rompers for newborn and infant wear.",
          description:
            "Comfortable rompers designed for easy dressing and movement. Ideal for baby boutiques and gifting collections.",
          fabric: "Organic Cotton",
          sizes: "0–12M",
          moq: "100 pieces",
        },
        {
          slug: "Wipes",
          name: "Wipes",
          image: "assets/img/products/bath-towel.jpg",
          shortDesc:
            "Soft hooded bath towels for newborn care.",
          description:
            "Highly absorbent baby towels crafted for gentle drying and warmth post-bath.",
          fabric: "Terry Cotton",
          sizes: "Universal",
          moq: "120 pieces",
        },
        {
          slug: "Short Set",
          name: "Short Set",
          image: "assets/img/products/bath-towel.jpg",
          shortDesc:
            "Soft hooded bath towels for newborn care.",
          description:
            "Highly absorbent baby towels crafted for gentle drying and warmth post-bath.",
          fabric: "Terry Cotton",
          sizes: "Universal",
          moq: "120 pieces",
        },
        {
          slug: "Frock",
          name: "Frock",
          image: "assets/img/products/bath-towel.jpg",
          shortDesc:
            "Soft hooded bath towels for newborn care.",
          description:
            "Highly absorbent baby towels crafted for gentle drying and warmth post-bath.",
          fabric: "Terry Cotton",
          sizes: "Universal",
          moq: "120 pieces",
        },
        {
          slug: "onesies",
          name: "One Sies",
          image: "assets/img/products/bath-towel.jpg",
          shortDesc:
            "Soft hooded bath towels for newborn care.",
          description:
            "Highly absorbent baby towels crafted for gentle drying and warmth post-bath.",
          fabric: "Terry Cotton",
          sizes: "Universal",
          moq: "120 pieces",
        },
        {
          slug: "Caps",
          name: "Caps",
          image: "assets/img/products/bath-towel.jpg",
          shortDesc:
            "Soft hooded bath towels for newborn care.",
          description:
            "Highly absorbent baby towels crafted for gentle drying and warmth post-bath.",
          fabric: "Terry Cotton",
          sizes: "Universal",
          moq: "120 pieces",
        },
        {
          slug: "Mitten & Botty Set",
          name: "Mitten & Botty Set",
          image: "assets/img/products/bath-towel.jpg",
          shortDesc:
            "Soft hooded bath towels for newborn care.",
          description:
            "Highly absorbent baby towels crafted for gentle drying and warmth post-bath.",
          fabric: "Terry Cotton",
          sizes: "Universal",
          moq: "120 pieces",
        },
        {
          slug: "Bath Towels",
          name: "Bath Towels",
          image: "assets/img/products/bath-towel.jpg",
          shortDesc:
            "Soft hooded bath towels for newborn care.",
          description:
            "Highly absorbent baby towels crafted for gentle drying and warmth post-bath.",
          fabric: "Terry Cotton",
          sizes: "Universal",
          moq: "120 pieces",
        },
        {
          slug: "Jabla",
          name: "Jabla",
          image: "assets/img/products/bath-towel.jpg",
          shortDesc:
            "Soft hooded bath towels for newborn care.",
          description:
            "Highly absorbent baby towels crafted for gentle drying and warmth post-bath.",
          fabric: "Terry Cotton",
          sizes: "Universal",
          moq: "120 pieces",
        }
    ],
  },
  mens: {
    slug: "mens",
    title: "Men’s Wear",
    image: "assets/img/collections/mens.jpg",
    description:
      "Structured yet easy menswear for standalone retail, corporate programs and lounge capsules.",
    products: [
      {
        slug: "shirt",
        name: "Shirt",
        image: "assets/img/products/oxford-shirt.jpg",
        shortDesc:
          "Classic oxford shirt calibrated for both retail and uniform rollouts.",
        description:
          "A timeless oxford shirt with sharp collar, clean front and balanced length. Designed for wholesale buyers managing menswear floors, corporate accounts and institutional shirt programs.",
        fabric: "100% Cotton Oxford",
        sizes: "38–46",
        moq: "80 pieces per colour",
      },
      {
        slug: "Pant",
        name: "Pant",
        image: "assets/img/products/cotton-trouser.jpg",
        shortDesc:
          "Tailored cotton trousers with subtle stretch and durable seams.",
        description:
          "Versatile cotton trousers with a modern straight fit and reinforced seams, suitable for both retail cabinets and corporate uniform deployments.",
        fabric: "Cotton-Rich Twill with Stretch",
        sizes: "30–38",
        moq: "80 pieces per colour",
      },
      {
        slug: "Lounge Wear",
        name: "Lounge Wear",
        image: "assets/img/products/oxford-shirt.jpg",
        shortDesc:
          "Classic oxford shirt calibrated for both retail and uniform rollouts.",
        description:
          "A timeless oxford shirt with sharp collar, clean front and balanced length. Designed for wholesale buyers managing menswear floors, corporate accounts and institutional shirt programs.",
        fabric: "100% Cotton Oxford",
        sizes: "38–46",
        moq: "80 pieces per colour",
      },
      {
        slug: "T-shirt",
        name: "T - Shirt",
        image: "assets/img/products/oxford-shirt.jpg",
        shortDesc:
          "Classic oxford shirt calibrated for both retail and uniform rollouts.",
        description:
          "A timeless oxford shirt with sharp collar, clean front and balanced length. Designed for wholesale buyers managing menswear floors, corporate accounts and institutional shirt programs.",
        fabric: "100% Cotton Oxford",
        sizes: "38–46",
        moq: "80 pieces per colour",
      },
    ],
  },
  uniforms: {
    slug: "uniforms",
    title: "Uniforms",
    image: "assets/img/collections/uniforms.jpg",
    description:
      "Corporate, admin, school and security uniforms designed for consistency and daily wear.",
    products: [
      {
        slug: "corporate-Uniform",
        name: "Corporate Uniform",
        image: "assets/img/products/corporate-shirt.jpg",
        shortDesc:
          "Easy-care corporate shirt for front-office and hospitality teams.",
        description:
          "A polished formal shirt produced in bulk for corporate and hospitality clients. The easy-care fabric and stable colours make it ideal for long-term uniform programs and brand rollouts.",
        fabric: "Blended Shirting with Easy-Care Finish",
        sizes: "S–XXL",
        moq: "120 pieces per style",
      },
      {
        slug: "school-uniform",
        name: "School Uniform",
        image: "assets/img/products/school-uniform-set.jpg",
        shortDesc:
          "Durable school shirt and trouser/skirt sets for institutional supply.",
        description:
          "Hard-wearing school uniform sets engineered for frequent washing and year‑round use. Ideal for distributors and institutions seeking reliable, repeatable uniform manufacturing partners.",
        fabric: "Poly-Viscose Blend",
        sizes: "24–34",
        moq: "150 sets per school",
      },
      {
        slug: "Admin-uniform",
        name: "Admin Uniform",
        image: "assets/img/products/school-uniform-set.jpg",
        shortDesc:
          "Durable school shirt and trouser/skirt sets for institutional supply.",
        description:
          "Hard-wearing school uniform sets engineered for frequent washing and year‑round use. Ideal for distributors and institutions seeking reliable, repeatable uniform manufacturing partners.",
        fabric: "Poly-Viscose Blend",
        sizes: "24–34",
        moq: "150 sets per school",
      },
      {
        slug: "Security-uniform",
        name: "Security Uniform",
        image: "assets/img/products/school-uniform-set.jpg",
        shortDesc:
          "Durable school shirt and trouser/skirt sets for institutional supply.",
        description:
          "Hard-wearing school uniform sets engineered for frequent washing and year‑round use. Ideal for distributors and institutions seeking reliable, repeatable uniform manufacturing partners.",
        fabric: "Poly-Viscose Blend",
        sizes: "24–34",
        moq: "150 sets per school",
      },
    ],
  },
  hospital: {
    slug: "hospital",
    title: "Hospital Uniforms",
    image: "assets/img/collections/hospital.jpg",
    description:
      "Hospital and clinical uniforms that balance hygiene, practicality and wearer comfort.",
    products: [
      {
        slug: "patient-gown",
        name: "Patient Gown (Unisex)",
        image: "assets/img/products/patient-gown.jpg",
        shortDesc:
          "Unisex hospital patient gown designed for coverage and easy handling.",
        description:
          "A unisex patient gown cut for easy dressing, secure fastening and modest coverage. Engineered for hospital procurement teams looking for dependable, bulk-manufactured gowns.",
        fabric: "Cotton-Rich Plain Weave",
        sizes: "Standard, Plus",
        moq: "100 pieces",
      },
      {
        slug: "Delivery Gowns",
        name: "Delivery Gowns",
        image: "assets/img/products/scrub-suit.jpg",
        shortDesc:
          "Lightweight scrub suit with functional pockets for medical staff.",
        description:
          "A classic scrub suit with V-neck top and straight trouser, equipped with functional pockets and easy-care fabric. Built for clinics, hospitals and healthcare distributors operating at volume.",
        fabric: "Poly-Cotton Blend",
        sizes: "XS–XXL",
        moq: "80 sets per colour",
      },
      {
        slug: "Scrub Suit",
        name: "Scrub Suit",
        image: "assets/img/products/scrub-suit.jpg",
        shortDesc:
          "Lightweight scrub suit with functional pockets for medical staff.",
        description:
          "A classic scrub suit with V-neck top and straight trouser, equipped with functional pockets and easy-care fabric. Built for clinics, hospitals and healthcare distributors operating at volume.",
        fabric: "Poly-Cotton Blend",
        sizes: "XS–XXL",
        moq: "80 sets per colour",
      },
      {
        slug: "OT Scrubs",
        name: "OT Scrubs",
        image: "assets/img/products/scrub-suit.jpg",
        shortDesc:
          "Lightweight scrub suit with functional pockets for medical staff.",
        description:
          "A classic scrub suit with V-neck top and straight trouser, equipped with functional pockets and easy-care fabric. Built for clinics, hospitals and healthcare distributors operating at volume.",
        fabric: "Poly-Cotton Blend",
        sizes: "XS–XXL",
        moq: "80 sets per colour",
      },
    ],
  },
};

// Build a simple product index for cross-page lookup in product-detail.html
const simpleProductIndex = {};

Object.values(catalog).forEach((collection) => {
  collection.products.forEach((product) => {
    simpleProductIndex[product.slug] = {
      ...product,
      collectionSlug: collection.slug,
      collectionTitle: collection.title,
    };
  });
});

// Helper: get query param
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// -----------------------------
// collections.html behaviour
// -----------------------------

const collectionsPageGrid = document.getElementById("collectionsGrid");

if (collectionsPageGrid) {
  // Render main collection cards using the master catalog
  collectionsPageGrid.innerHTML = Object.values(catalog)
    .map(
      (col) => `
        <article class="card collection-card" data-collection-slug="${col.slug}">
          <div class="collection-card-image-wrap">
            <img
              src="${col.image}"
              alt="${col.title}"
              class="collection-card-image"
              loading="lazy"
            />
          </div>
          <div class="card-body">
            <h2 class="collection-card-title">${col.title}</h2>
            <p class="collection-card-text">${col.description}</p>
            <a
              href="products.html?collection=${encodeURIComponent(col.slug)}"
              class="btn ghost"
            >
              View Products →
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

// -----------------------------
// products.html behaviour
// -----------------------------

const productsPageContainer = document.getElementById("productsPage");

if (productsPageContainer) {
  const collectionSlug = getQueryParam("collection");
  const collection = collectionSlug ? catalog[collectionSlug] : null;

  const titleEl = document.getElementById("productsCollectionTitle");
  const descEl = document.getElementById("productsCollectionDescription");
  const gridEl = document.getElementById("productsGrid");
  const prevCollectionLink = document.getElementById("prevCollectionLink");
  const nextCollectionLink = document.getElementById("nextCollectionLink");

  if (!collection) {
    if (titleEl) titleEl.textContent = "Collection not found";
    if (descEl)
      descEl.textContent =
        "The requested wholesale collection could not be located. Please return to the collections catalogue and choose a valid category.";
    if (gridEl) {
      gridEl.innerHTML =
        '<p class="empty-state">No products available for this reference.</p>';
    }
  } else {
    if (titleEl) titleEl.textContent = collection.title;
    if (descEl) descEl.textContent = collection.description;
    if (gridEl) {
      gridEl.innerHTML = collection.products
        .map(
          (p) => `
          <article class="product-card products-page-card">
            <div class="product-image-wrap">
              <img
                src="${p.image}"
                alt="${p.name}"
                class="product-thumb"
                loading="lazy"
              />
            </div>
            <div class="product-overlay product-overlay--light">
              <h3>${p.name}</h3>
              <p>${p.shortDesc}</p>
              <a
                href="product-detail.html?product=${encodeURIComponent(
                  p.slug
                )}&collection=${encodeURIComponent(collection.slug)}"
                class="text-link"
              >
                View Details →
              </a>
            </div>
          </article>
        `
        )
        .join("");
    }

    // Previous / Next collection navigation using catalog order
    const orderedCollections = Object.keys(catalog);
    const currentIndex = orderedCollections.indexOf(collection.slug);

    if (prevCollectionLink) {
      if (currentIndex > 0) {
        const prevSlug = orderedCollections[currentIndex - 1];
        const prevCol = catalog[prevSlug];
        prevCollectionLink.href =
          "products.html?collection=" + encodeURIComponent(prevSlug);
        prevCollectionLink.textContent = prevCol
          ? prevCol.title
          : "Previous Collection";
        prevCollectionLink.classList.remove("pager-link--disabled");
      } else {
        prevCollectionLink.href = "#";
        prevCollectionLink.textContent = "";
        prevCollectionLink.classList.add("pager-link--disabled");
      }
    }

    if (nextCollectionLink) {
      if (currentIndex > -1 && currentIndex < orderedCollections.length - 1) {
        const nextSlug = orderedCollections[currentIndex + 1];
        const nextCol = catalog[nextSlug];
        nextCollectionLink.href =
          "products.html?collection=" + encodeURIComponent(nextSlug);
        nextCollectionLink.textContent = nextCol
          ? nextCol.title
          : "Next Collection";
        nextCollectionLink.classList.remove("pager-link--disabled");
      } else {
        nextCollectionLink.href = "#";
        nextCollectionLink.textContent = "";
        nextCollectionLink.classList.add("pager-link--disabled");
      }
    }
  }
}

// -----------------------------
// product-detail.html behaviour
// -----------------------------

const productDetailPage = document.getElementById("productDetailPage");

if (productDetailPage) {
  const productSlug = getQueryParam("product");
  const product = productSlug ? simpleProductIndex[productSlug] : null;

  const nameEl = document.getElementById("pdName");
  const imageEl = document.getElementById("pdImage");
  const descEl = document.getElementById("pdDescription");
  const fabricEl = document.getElementById("pdFabric");
  const sizesEl = document.getElementById("pdSizes");
  const moqEl = document.getElementById("pdMOQ");
  const breadcrumbEl = document.getElementById("pdBreadcrumb");
  const waLink = document.getElementById("whatsappEnquiry");
  const prevProductLink = document.getElementById("prevProductLink");
  const nextProductLink = document.getElementById("nextProductLink");

  if (!product) {
    if (nameEl) nameEl.textContent = "Product not found";
    if (descEl)
      descEl.textContent =
        "The requested wholesale product could not be found. Please return to the products catalogue and select a valid style.";
  } else {
    if (nameEl) nameEl.textContent = product.name;
    if (imageEl) {
      imageEl.src = product.image;
      imageEl.alt = product.name;
    }
    if (descEl) descEl.textContent = product.description;
    if (fabricEl) fabricEl.textContent = product.fabric;
    if (sizesEl) sizesEl.textContent = product.sizes;
    if (moqEl) moqEl.textContent = product.moq;
    if (breadcrumbEl) {
      breadcrumbEl.textContent = `${product.collectionTitle} • Wholesale Product`;
    }

    if (waLink) {
      const phone = "919655502923"; // TODO: replace with your actual WhatsApp number
      const message = `Hello, I am interested in the following wholesale product:

Product: ${product.name}
Collection: ${product.collectionTitle}
Fabric: ${product.fabric}
MOQ: ${product.moq}

Please share pricing and catalogue.`;

      const url =
        "https://wa.me/" +
        encodeURIComponent(phone) +
        "?text=" +
        encodeURIComponent(message);
      waLink.href = url;
    }

    // Previous / Next product navigation (within same collection)
    const col = catalog[product.collectionSlug];
    if (col && Array.isArray(col.products)) {
      const idx = col.products.findIndex((p) => p.slug === product.slug);

      if (prevProductLink) {
        if (idx > 0) {
          const prevProduct = col.products[idx - 1];
          prevProductLink.href =
            "product-detail.html?product=" +
            encodeURIComponent(prevProduct.slug) +
            "&collection=" +
            encodeURIComponent(col.slug);
          prevProductLink.textContent = prevProduct.name;
          prevProductLink.classList.remove("pager-link--disabled");
        } else {
          prevProductLink.href = "#";
          prevProductLink.textContent = "";
          prevProductLink.classList.add("pager-link--disabled");
        }
      }

      if (nextProductLink) {
        if (idx > -1 && idx < col.products.length - 1) {
          const nextProduct = col.products[idx + 1];
          nextProductLink.href =
            "product-detail.html?product=" +
            encodeURIComponent(nextProduct.slug) +
            "&collection=" +
            encodeURIComponent(col.slug);
          nextProductLink.textContent = nextProduct.name;
          nextProductLink.classList.remove("pager-link--disabled");
        } else {
          nextProductLink.href = "#";
          nextProductLink.textContent = "";
          nextProductLink.classList.add("pager-link--disabled");
        }
      }
    }
  }
}

