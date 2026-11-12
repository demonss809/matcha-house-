// MATCHA HOUSE - PRODUCT DATABASE

const drinks = [
  {
    id: 1,
    name: "Strawberry Matcha",
    category: "Frutal",
    description: "Fresa con matcha cremoso.",
    ingredients: "Matcha, leche, puré de fresa y hielo.",
    flavor: "Dulce y frutal.",
    combinations: "Vainilla, crema fría y fresas.",
    preparation: "Prepara el matcha con agua. Agrega puré de fresa, hielo y leche."
  },
  {
    id: 2,
    name: "Mango Matcha",
    category: "Frutal",
    description: "Una mezcla tropical.",
    ingredients: "Matcha, mango, leche y hielo.",
    flavor: "Tropical y dulce.",
    combinations: "Coco y vainilla.",
    preparation: "Licúa el mango, coloca hielo y leche y termina con matcha."
  },
  {
    id: 3,
    name: "Blueberry Matcha",
    category: "Frutal",
    description: "Arándanos y té verde.",
    ingredients: "Matcha, arándanos, leche y hielo.",
    flavor: "Frutal y ligeramente ácido.",
    combinations: "Miel y vainilla.",
    preparation: "Machaca los arándanos, agrega leche, hielo y matcha."
  },
  {
    id: 4,
    name: "Raspberry Matcha",
    category: "Frutal",
    description: "Frambuesa y matcha.",
    ingredients: "Matcha, frambuesas, leche y hielo.",
    flavor: "Ácido y dulce.",
    combinations: "Vainilla y chocolate blanco.",
    preparation: "Prepara un puré de frambuesa, agrega leche y matcha."
  },
  {
    id: 5,
    name: "Peach Matcha",
    category: "Frutal",
    description: "Durazno con té verde.",
    ingredients: "Matcha, durazno, leche y hielo.",
    flavor: "Suave y refrescante.",
    combinations: "Miel y vainilla.",
    preparation: "Tritura el durazno y mezcla con leche, hielo y matcha."
  },
  {
    id: 6,
    name: "Banana Matcha",
    category: "Frutal",
    description: "Plátano y matcha cremoso.",
    ingredients: "Matcha, plátano, leche y hielo.",
    flavor: "Cremoso y suave.",
    combinations: "Canela y crema de cacahuate.",
    preparation: "Licúa el plátano con leche y agrega el matcha."
  },
  {
    id: 7,
    name: "Coconut Matcha",
    category: "Tropical",
    description: "Una bebida con coco.",
    ingredients: "Matcha, leche de coco y hielo.",
    flavor: "Tropical y delicado.",
    combinations: "Vainilla y miel.",
    preparation: "Agrega leche de coco, hielo y matcha."
  },
  {
    id: 8,
    name: "Pineapple Matcha",
    category: "Tropical",
    description: "Piña con matcha.",
    ingredients: "Matcha, piña, agua y hielo.",
    flavor: "Ácido y refrescante.",
    combinations: "Coco y limón.",
    preparation: "Prepara jugo de piña, añade hielo y matcha."
  },
  {
    id: 9,
    name: "Passion Fruit Matcha",
    category: "Tropical",
    description: "Maracuyá y matcha.",
    ingredients: "Matcha, maracuyá, leche y hielo.",
    flavor: "Tropical y ácido.",
    combinations: "Miel y coco.",
    preparation: "Coloca la pulpa de maracuyá, hielo, leche y matcha."
  },
  {
    id: 10,
    name: "Lychee Matcha",
    category: "Tropical",
    description: "Lichi y té verde.",
    ingredients: "Matcha, lichi, leche y hielo.",
    flavor: "Floral y dulce.",
    combinations: "Vainilla y agua de coco.",
    preparation: "Tritura el lichi y mezcla con leche, hielo y matcha."
  },
  {
    id: 11,
    name: "Vanilla Matcha",
    category: "Cremoso",
    description: "Vainilla y matcha.",
    ingredients: "Matcha, leche, vainilla y hielo.",
    flavor: "Dulce y aromático.",
    combinations: "Canela y miel.",
    preparation: "Mezcla vainilla con leche y agrega el matcha."
  },
  {
    id: 12,
    name: "White Chocolate Matcha",
    category: "Cremoso",
    description: "Chocolate blanco y matcha.",
    ingredients: "Matcha, leche y chocolate blanco.",
    flavor: "Dulce y cremoso.",
    combinations: "Fresa y vainilla.",
    preparation: "Derrite el chocolate en leche y agrega matcha."
  },
  {
    id: 13,
    name: "Caramel Matcha",
    category: "Cremoso",
    description: "Caramelo con matcha.",
    ingredients: "Matcha, leche, caramelo y hielo.",
    flavor: "Dulce y tostado.",
    combinations: "Vainilla y crema fría.",
    preparation: "Coloca caramelo en el vaso, agrega leche, hielo y matcha."
  },
  {
    id: 14,
    name: "Brown Sugar Matcha",
    category: "Cremoso",
    description: "Azúcar mascabado y matcha.",
    ingredients: "Matcha, leche, azúcar mascabado y hielo.",
    flavor: "Dulce y acaramelado.",
    combinations: "Tapioca y canela.",
    preparation: "Mezcla mascabado con agua, agrega leche, hielo y matcha."
  },
  {
    id: 15,
    name: "Honey Matcha",
    category: "Cremoso",
    description: "Miel y matcha.",
    ingredients: "Matcha, leche, miel y hielo.",
    flavor: "Suave y dulce.",
    combinations: "Canela y vainilla.",
    preparation: "Disuelve miel en leche y añade matcha."
  },
  {
    id: 16,
    name: "Pistachio Matcha",
    category: "Cremoso",
    description: "Pistache con matcha.",
    ingredients: "Matcha, leche y pasta de pistache.",
    flavor: "Tostado y cremoso.",
    combinations: "Chocolate blanco y vainilla.",
    preparation: "Mezcla la pasta de pistache con leche y añade matcha."
  },
  {
    id: 17,
    name: "Chocolate Matcha",
    category: "Especial",
    description: "Chocolate y matcha.",
    ingredients: "Matcha, leche y chocolate.",
    flavor: "Intenso y cremoso.",
    combinations: "Vainilla y crema batida.",
    preparation: "Prepara una base de chocolate con leche y termina con matcha."
  },
  {
    id: 18,
    name: "Oreo Matcha",
    category: "Especial",
    description: "Galleta y matcha.",
    ingredients: "Matcha, leche y galletas de chocolate.",
    flavor: "Dulce y crujiente.",
    combinations: "Crema batida y chocolate.",
    preparation: "Tritura las galletas, agrega leche, hielo y matcha."
  },
  {
    id: 19,
    name: "Tiramisu Matcha",
    category: "Especial",
    description: "Un postre convertido en bebida.",
    ingredients: "Matcha, leche, mascarpone y cacao.",
    flavor: "Cremoso y delicado.",
    combinations: "Vainilla y cacao.",
    preparation: "Prepara la crema de mascarpone, incorpora leche y matcha."
  },
  {
    id: 20,
    name: "Ube Matcha",
    category: "Especial",
    description: "Ube y matcha.",
    ingredients: "Matcha, leche y puré de ube.",
    flavor: "Dulce y suave.",
    combinations: "Coco y vainilla.",
    preparation: "Mezcla el ube con leche, agrega hielo y matcha."
  }
];

// IMAGEN GENERAL TEMPORAL
// Puedes sustituir estas imágenes por fotografías propias.

const defaultImage =
  "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=700";

const grid = document.getElementById("productGrid");
const modal = document.getElementById("drinkModal");
const modalDetails = document.getElementById("modalDetails");

let activeCategory = "Todos";
let favorites = [];
let favoritesOnly = false;

// MOSTRAR BEBIDAS

function renderDrinks() {
  const search = document
    .getElementById("searchInput")
    .value.toLowerCase();

  const filtered = drinks.filter(drink => {
    const matchesCategory =
      activeCategory === "Todos" ||
      drink.category === activeCategory;

    const matchesSearch =
      drink.name.toLowerCase().includes(search) ||
      drink.ingredients.toLowerCase().includes(search);

    const matchesFavorite =
      !favoritesOnly || favorites.includes(drink.id);

    return matchesCategory && matchesSearch && matchesFavorite;
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML =
      "<p>No encontramos bebidas. Prueba otra búsqueda.</p>";
    return;
  }

  filtered.forEach(drink => {
    const saved = favorites.includes(drink.id);

    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <img
        class="product-image"
        src="${defaultImage}"
        alt="${drink.name}"
        loading="lazy"
      >

      <div class="product-info">
        <span class="product-category">${drink.category}</span>

        <h3 class="product-name">${drink.name}</h3>

        <p class="product-description">
          ${drink.description}
        </p>

        <div class="card-bottom">
          <span class="details-link">VER RECETA ↗</span>

          <button
            class="favorite ${saved ? "saved" : ""}"
            aria-label="Agregar a favoritos"
            aria-pressed="${saved}"
            data-favorite="${drink.id}"
          >
            ${saved ? "♥" : "♡"}
          </button>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      openDetails(drink.id);
    });

    card.querySelector(".favorite").addEventListener("click", event => {
      event.stopPropagation();
      toggleFavorite(drink.id);
    });

    grid.appendChild(card);
  });
}

// ABRIR RECETA

function openDetails(id) {
  const drink = drinks.find(item => item.id === id);

  modalDetails.innerHTML = `
    <img
      src="${defaultImage}"
      alt="${drink.name}"
      class="modal-image"
    >

    <span class="eyebrow">${drink.category}</span>

    <h2>${drink.name}</h2>

    <p>${drink.description}</p>

    <h3>INGREDIENTES</h3>
    <p>${drink.ingredients}</p>

    <h3>PERFIL DE SABOR</h3>
    <p>${drink.flavor}</p>

    <h3>COMBINACIONES RECOMENDADAS</h3>
    <p>${drink.combinations}</p>

    <h3>PREPARACIÓN</h3>
    <p>${drink.preparation}</p>

    <button
      class="main-button"
      id="modalFavorite"
      type="button"
    >
      ${favorites.includes(id) ? "♥ GUARDADO" : "♡ AGREGAR A FAVORITOS"}
    </button>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.getElementById("modalFavorite").addEventListener("click", () => {
    toggleFavorite(id);
    openDetails(id);
  });
}

// CERRAR VENTANA

function closeDetails() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("closeModal")
  .addEventListener("click", closeDetails);

modal.addEventListener("click", event => {
  if (event.target === modal) closeDetails();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeDetails();
});

// FAVORITOS

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
  } else {
    favorites.push(id);
  }

  document.getElementById("favoriteCount").textContent =
    favorites.length;

  renderDrinks();
}

document.getElementById("favoritesButton")
  .addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    activeCategory = "Todos";

    document.querySelectorAll(".filter").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.category === "Todos"
      );
    });

    document.getElementById("menu")
      .scrollIntoView({ behavior: "smooth" });

    renderDrinks();
  });

// FILTROS

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    favoritesOnly = false;

    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderDrinks();
  });
});

// BUSCADOR

document.getElementById("searchInput")
  .addEventListener("input", renderDrinks);

// PERSONALIZADOR

document.getElementById("createDrink")
  .addEventListener("click", () => {
    const base = document.getElementById("base").value;
    const milk = document.getElementById("milk").value;
    const sweetness = document.getElementById("sweetness").value;
    const ice = document.getElementById("ice").value;
    const topping = document.getElementById("topping").value;

    const result = document.getElementById("creationResult");

    result.innerHTML = `
      <strong>¡Tu matcha está listo!</strong><br><br>

      🍵 Bebida: ${base}<br>
      🥛 Leche: ${milk}<br>
      🍯 Dulzor: ${sweetness}<br>
      🧊 Hielo: ${ice}<br>
      🧋 Topping: ${topping}<br><br>

      ¡Esta es tu combinación personalizada!
    `;

    result.classList.add("show");
  });

// INICIAR PÁGINA

renderDrinks();