"use strict";
const restaurants = [
  {
    name: "Pizza Palace",
    rating: 4.5,
    location: "Tbilisi",
    meals: [
      { name: "Margherita", price: 10 },
      { name: "Pepperoni", price: 12 },
      { name: "BBQ Chicken Pizza", price: 14 },
    ],
  },
  {
    name: "Burger Barn",
    rating: 4.2,
    location: "Kutaisi",
    meals: [
      { name: "Cheeseburger", price: 8 },
      { name: "Double Burger", price: 12 },
      { name: "Fries", price: 3 },
    ],
  },
  {
    name: "Sushi World",
    rating: 4.8,
    location: "Batumi",
    meals: [
      { name: "Salmon Roll", price: 15 },
      { name: "Tuna Nigiri", price: 12 },
      { name: "Miso Soup", price: 5 },
    ],
  },
  {
    name: "Pasta Point",
    rating: 4.3,
    location: "Tbilisi",
    meals: [
      { name: "Spaghetti Carbonara", price: 11 },
      { name: "Fettuccine Alfredo", price: 12 },
      { name: "Lasagna", price: 13 },
    ],
  },
  {
    name: "Grill House",
    rating: 4.4,
    location: "Zugdidi",
    meals: [
      { name: "Grilled Chicken", price: 13 },
      { name: "BBQ Ribs", price: 18 },
      { name: "Grilled Vegetables", price: 9 },
    ],
  },
  {
    name: "Cafe Mocha",
    rating: 4.0,
    location: "Tbilisi",
    meals: [
      { name: "Cappuccino", price: 3 },
      { name: "Latte", price: 3 },
      { name: "Croissant", price: 2.5 },
    ],
  },
  {
    name: "Taco Town",
    rating: 4.5,
    location: "Batumi",
    meals: [
      { name: "Beef Taco", price: 5 },
      { name: "Chicken Taco", price: 5 },
      { name: "Veggie Taco", price: 4 },
    ],
  },
  {
    name: "Seafood Shack",
    rating: 4.7,
    location: "Poti",
    meals: [
      { name: "Grilled Salmon", price: 16 },
      { name: "Shrimp Pasta", price: 14 },
      { name: "Fried Calamari", price: 12 },
    ],
  },

  {
    name: "Ice Cream Corner",
    rating: 4.4,
    location: "Batumi",
    meals: [
      { name: "Vanilla Scoop", price: 2 },
      { name: "Chocolate Scoop", price: 2 },
      { name: "Strawberry Sundae", price: 3 },
    ],
  },
  {
    name: "Mediterraneo",
    rating: 4.7,
    location: "Tbilisi",
    meals: [
      { name: "Greek Salad", price: 8 },
      { name: "Falafel Wrap", price: 7 },
      { name: "Hummus Plate", price: 6 },
    ],
  },
  {
    name: "Bistro 21",
    rating: 4.2,
    location: "Kutaisi",
    meals: [
      { name: "Club Sandwich", price: 7 },
      { name: "Caesar Salad", price: 8 },
      { name: "Tomato Soup", price: 5 },
    ],
  },
  {
    name: "Donut Dreams",
    rating: 4.5,
    location: "Rustavi",
    meals: [
      { name: "Glazed Donut", price: 2 },
      { name: "Chocolate Donut", price: 2.5 },
      { name: "Sprinkle Donut", price: 2 },
    ],
  },
  {
    name: "Rustavi Grill",
    rating: 4.4,
    location: "Rustavi",
    meals: [
      { name: "Grilled Steak", price: 15 },
      { name: "BBQ Ribs", price: 18 },
      { name: "Grilled Vegetables", price: 8 },
    ],
  },
  {
    name: "Batumi Bistro",
    rating: 4.5,
    location: "Batumi",
    meals: [
      { name: "Seafood Paella", price: 20 },
      { name: "Grilled Octopus", price: 22 },
      { name: "Mussels in Garlic Sauce", price: 15 },
    ],
  },
  {
    name: "Tbilisi Sushi House",
    rating: 4.6,
    location: "Tbilisi",
    meals: [
      { name: "Salmon Nigiri", price: 12 },
      { name: "Tuna Roll", price: 10 },
      { name: "Dragon Roll", price: 14 },
    ],
  },
  {
    name: "Kutaisi Cafe & Grill",
    rating: 4.2,
    location: "Kutaisi",
    meals: [
      { name: "Grilled Chicken", price: 9 },
      { name: "Lamb Chops", price: 14 },
      { name: "Vegetable Skewers", price: 6 },
    ],
  },
  {
    name: "Rustavi Pizza & Pasta",
    rating: 4.3,
    location: "Rustavi",
    meals: [
      { name: "Spaghetti Carbonara", price: 11 },
      { name: "Four Cheese Pizza", price: 12 },
      { name: "Lasagna", price: 13 },
    ],
  },
];

let users = [];
let cart = [];
const locationInput = document.querySelector("#location-input input");
const findBtn = document.getElementById("find-btn");
const userLocationBtn = document.getElementById("user-location");
const localContainerId = "local-restaurants";
const cartModal = document.getElementById("cart-modal");
const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const cartBtn = document.querySelector(".view-cart a");
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const closeButtons = document.querySelectorAll(".modal .close");
const submitSignUp = document.querySelector(".signup-submit");
const submitLogIn = document.querySelector(".login-submit");
const userStatus = document.querySelector(".user-status");
const cartItemsContainer = document.getElementById("cart-items");
const checkoutBtn = document.querySelector(".checkout-btn");
const checkoutForm = document.getElementById("checkout-form");
const viewRestaurantsBtn = document.querySelector(".view-restaurants");
const allRestaurantsContainer = document.getElementById("all-restaurants");

class Restaurant {
  constructor(restaurants) {
    this.restaurants = restaurants;
  }

  displayRestaurant(containerId, filterFn = () => true) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    const filtered = this.restaurants.filter(filterFn);

    if (filtered.length === 0) {
      container.innerHTML = "<p>No restaurants found for this location</p>";
      return;
    }

    filtered.forEach((restaurant, index) => {
      const card = document.createElement("div");
      card.classList.add("restaurant-card");
      card.innerHTML = `
        <div class="restaurant-info">
          <h3>${restaurant.name}</h3>
          <div class="rating">⭐ ${restaurant.rating}</div>
          <p class="location">🗺️ ${restaurant.location}</p>
          <button class="view-btn" data-index="${index}">View Menu</button>
        </div>
      `;
      container.appendChild(card);
    });

    this.addModalEvents(containerId, filtered);
  }

  addModalEvents(containerId, filteredRestaurants) {
    const container = document.getElementById(containerId);
    const modal = document.getElementById("menu-modal");
    const modalName = document.getElementById("modal-restaurant-name");
    const modalMeals = document.getElementById("modal-meals");
    const modalClose = modal.querySelector(".close-modal");

    const viewButtons = container.querySelectorAll(".view-btn");
    viewButtons.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
        const restaurant = filteredRestaurants[i];
        modalName.textContent = restaurant.name;
        modalMeals.innerHTML = restaurant.meals
          .map((meal) => {
            if (typeof meal === "object")
              return `<li>${meal.name} -- ${meal.price} Lari <button class="add-to-cart-btn" data-meal="Meal Name">Add To Cart</button></li>`;
          })
          .join("");
      });
    });

    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

const restaurantsList = new Restaurant(restaurants);

restaurantsList.displayRestaurant(
  "popular-restaurants",
  (r) => r.rating >= 4.5
);

restaurantsList.displayRestaurant("all-restaurants");

findBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const location = locationInput.value.trim().toLowerCase();
  if (!location) {
    alert("Please enter a location.");
    return;
  }

  restaurantsList.displayRestaurant(
    localContainerId,
    (r) => r.location.toLowerCase().trim() === location
  );
});

userLocationBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&accept-language=en`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const city = (data.address.city || data.address.town)
            .toLowerCase()
            .trim();

          if (!city) {
            alert("Could not find your city.");
            return;
          }

          restaurantsList.displayRestaurant(
            localContainerId,
            (r) => r.location.toLowerCase().trim() === city
          );
        })
        .catch((err) => {
          console.error("Error fetching location data", err);
          alert("Could not get your city");
        });
    },
    (error) => {
      console.error("Cannot get your location:", error);
      alert("Unable to retrieve your location");
    }
  );
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const li = e.target.closest("li");

    if (!li) return;
    const mealName = li.firstChild.textContent.trim();

    const modal = document.getElementById("menu-modal");
    const restaurantName = modal
      .querySelector("#modal-restaurant-name")
      .textContent.trim();

    cart.push({ meal: mealName, restaurant: restaurantName });
    console.log(cart);
  }
});

viewRestaurantsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  allRestaurantsContainer.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const viewHome = document.querySelector(".view-home");

viewHome.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
});

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartModal.style.display = "flex";
});

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
  submitLogIn.addEventListener("click", function (e) {
    e.preventDefault(); // prevent page refresh if form
    const inputs = loginModal.querySelectorAll("input");
    const email = inputs[0].value;
    const password = inputs[1].value;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      console.log("Login successful! Welcome", user.fullName);
      loginModal.style.display = "none";

      userStatus.className = "user-status success show";
      userStatus.textContent = `Logged in successfully! Welcome back, ${user.fullName}`;

      document.querySelector(".auth-buttons").style.display = "none";
    } else {
      console.log("Login failed! Invalid email or password.");
      userStatus.className = "user-status error show";
      userStatus.textContent = "Login failed! Invalid email or password.";
    }
  });
});

signupBtn.addEventListener("click", () => {
  signupModal.style.display = "flex";
  submitSignUp.addEventListener("click", function (e) {
    e.preventDefault();
    const inputs = signupModal.querySelectorAll("input");
    const fullName = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;

    users.push({ fullName, email, password });
    console.log(users);
    signupModal.style.display = "none";

    userStatus.className = "user-status success show";
    userStatus.textContent = `Signed up successfully! Welcome, ${fullName}`;
  });
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

function renderCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
    checkoutBtn.style.display = "none";
    return;
  }

  checkoutBtn.style.display = "block";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.meal}</strong>
      <em>(${item.restaurant})</em>
      <button class="remove-btn" data-index="${index}">❌</button>
    `;
    cartItemsContainer.appendChild(li);
  });

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      cart.splice(idx, 1);
      renderCart();
    });
  });
}

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  renderCart();
  checkoutForm.style.display = "none";
  cartModal.style.display = "flex";
});

checkoutBtn.addEventListener("click", () => {
  checkoutForm.style.display = "block";
});

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = document.getElementById("delivery-location").value;
  const payment = document.querySelector("input[name='payment']:checked").value;

  alert(`Order confirmed ✅
Location: ${location}
Payment: ${payment}`);

  cart = [];
  renderCart();
  checkoutForm.style.display = "none";
  cartModal.style.display = "none";
});
