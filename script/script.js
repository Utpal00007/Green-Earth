// load categories
const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

// display categories

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  categories.forEach((category) => {
    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = ` 
                <li>
                  <button
                    class="w-full text-[#1F2937] rounded-lg text-center lg:text-left px-3 py-2 rounded-mb"
                  >
                    ${category.category_name}
                  </button>
                </li>`;

    categoryContainer.append(categoryBtn);
  });
};

loadCategories();
