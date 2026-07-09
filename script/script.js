// load categories
const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

// load plants

const loadPlants = (id, makeActive = true) => {
  // Show spinner while loading and hide plant container
  document.getElementById("plant-container").classList.add("hidden");
  document.getElementById("loading-spinner").classList.remove("hidden");

  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  if (makeActive) {
    //Get all category buttons
    const categoryBtns = document.querySelectorAll(".btn-category");

    //remove active class from other buttons
    categoryBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    //   find clicked button
    const currentBtn = document.getElementById(`category-btn-${id}`);
    //added active class on button
    currentBtn.classList.add("active");
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

//load plants details

const loadPlantsDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoodsDetails(data.plants));
};

// display categories  and  plants

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  categories.forEach((category) => {
    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = ` 
                <li>
                  <button id="category-btn-${category.id}"  onclick="loadPlants(${category.id})"
                    class="w-full text-[#1F2937] rounded-lg text-center lg:text-left px-3 py-2 rounded-mb btn-category"
                  >
                    ${category.category_name}
                  </button>
                </li>`;

    categoryContainer.append(categoryBtn);
  });
};

//display plants

const displayPlants = (plants) => {
  const plantContainer = document.getElementById("plant-container");
  plantContainer.innerHTML = "";

  plants.forEach((plant) => {
    const plantCard = document.createElement("div");
    plantCard.innerHTML = ` 
            <div onclick="loadPlantsDetails(${plant.id})" class="bg-white rounded-lg p-3">
              <div class=""><img src="${plant.image}" alt="" class="w-full h-46 rounded-lg object-cover"></div>
              <div class="space-y-3">
                <h2 class="mt-3 text-base font-semibold">${plant.name}</h2>
                <p class="text-sm text-[#1F2937]">
                  ${plant.description}
                </p>
                <div class="flex justify-between mb-3 font-semibold text-sm">
                  <span class="bg-[#DCFCE7] rounded-xl py-1 px-2"
                    >${plant.category}</span
                  >
                  <p>৳<span>${plant.price}</span></p>
                </div>
              </div>
              <button
                class="btn w-full bg-[#15803D] p-3 text-white rounded-full"
              >
                Add To Cart
              </button>
            </div>`;

    plantContainer.append(plantCard);
  });
  //   Show plant container  while loading and hide spinner
  document.getElementById("plant-container").classList.remove("hidden");
  document.getElementById("loading-spinner").classList.add("hidden");
};

// display modal
const displayFoodsDetails = (plant) => {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = ` 
            <div onclick="loadPlantsDetails(${plant.id})" class="bg-white rounded-lg p-3">
              <div class=""><img src="${plant.image}" alt="" class="w-full h-46 rounded-lg object-cover"></div>
              <div class="space-y-3">
                <h2 class="mt-3 text-base font-semibold">${plant.name}</h2>
                <p class="text-sm text-[#1F2937]">
                  ${plant.description}
                </p>
                <div class="flex justify-between mb-3 font-semibold text-sm">
                  <span class="bg-[#DCFCE7] rounded-xl py-1 px-2"
                    >${plant.category}</span
                  >
                  <p>৳<span>${plant.price}</span></p>
                </div>
              </div>
              
            </div>`;
  const showModal = document.getElementById("plants_modal");
  showModal.showModal();
};

loadCategories();
loadPlants(9, false);
