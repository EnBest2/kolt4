let categories = JSON.parse(localStorage.getItem("categories")) || ["Étel", "Lakhatás", "Szórakozás"];
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addCategory() {
    const newCategory = document.getElementById("newCategory").value;
    if (!newCategory || categories.includes(newCategory)) return;

    categories.push(newCategory);
    localStorage.setItem("categories", JSON.stringify(categories));
    updateCategoryList();
}

function updateCategoryList() {
    const categorySelect = document.getElementById("category");
    categorySelect.innerHTML = '<option value="bevétel">💰 Bevétel</option><option value="kiadás">🛒 Kiadás</option><option value="megtakarítás">🏦 Megtakarítás</option>';
    
    categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = `📌 ${cat}`;
        categorySelect.appendChild(option);
    });
}

updateCategoryList();
