//Side Navbar
const sidenavbar = document.getElementById("sidenavbar");
const menuicon = document.getElementById("menuicon");
const closenavbar = document.getElementById("closenavbar");

menuicon.addEventListener("click", () => {
  sidenavbar.style.right = "0";
});

closenavbar.addEventListener("click", () => {
  sidenavbar.style.right = "-50%";
});

// Collections Page

//Filter box

//search
const search = document.getElementById("searchInput");
const productsList = document.querySelectorAll(
  "#productsContainer .collection-product",
);
search.addEventListener("keyup", function (event) {
  const enteredValue = event.target.value.toUpperCase();

  for (let i = 0; i < productsList.length; i++) {
    const productName = productsList[i]
      .querySelector("h3")
      .textContent.toUpperCase();

    if (productName.indexOf(enteredValue) < 0) {
      productsList[i].style.display = "none";
    } else {
      productsList[i].style.display = "block";
    }
  }
});

//Filter
const products = document.querySelectorAll(
  "#productsContainer .collection-product",
);
const occasions = document.querySelectorAll(".occasion");
console.log(occasions);
occasions.forEach(function (checkbox) {
  checkbox.addEventListener("change", function (event) {
    const selected = [];
    occasions.forEach(function (cb) {
      if (cb.checked) {
        selected.push(cb.value.toUpperCase());
      }
    });
    products.forEach(function (product) {
      const text = product.textContent.toUpperCase();
      const matchOccasions = selected.length === 0;
      selected.forEach(function (value) {
        if (text.indexOf(value) !== -1) {
          matchOccasions = true;
        }
      });
      product.style.display = matchOccasions ? "block" : "none";
    });
  });
});
const color = document.querySelectorAll(".colors");
console.log(color);
color.forEach(function (checkbox) {
  checkbox.addEventListener("change", function (event) {
    const selected = [];
    color.forEach(function (cb) {
      if (cb.checked) {
        selected.push(cb.value.toUpperCase());
      }
    });
    products.forEach(function (product) {
      const text = product.textContent.toUpperCase();
      const matchColors = selected.length === 0;
      selected.forEach(function (value) {
        if (text.indexOf(value) !== -1) {
          matchColors = true;
        }
      });
      product.style.display = matchColors ? "block" : "none";
    });
  });
});
const categorys = document.querySelectorAll(".category");
console.log(categorys);
categorys.forEach(function (checkbox) {
  checkbox.addEventListener("change", function (event) {
    const selected = [];
    categorys.forEach(function (cb) {
      if (cb.checked) {
        selected.push(cb.value.toUpperCase());
      }
    });
    products.forEach(function (product) {
      const text = product.textContent.toUpperCase();
      const matchCategorys = selected.length === 0;
      selected.forEach(function (value) {
        if (text.indexOf(value) !== -1) {
          matchCategorys = true;
        }
      });
      product.style.display = matchCategorys ? "block" : "none";
    });
  });
});

const prices = document.querySelectorAll(".price");
console.log(prices);
prices.forEach(function (checkbox) {
  checkbox.addEventListener("change", function (event) {
    const selected = [];
    prices.forEach(function (cb) {
      if (cb.checked) {
        selected.push(cb.value.toUpperCase());
      }
    });
    products.forEach(function (product) {
      const text = product.textContent.toUpperCase();
      const matchPrices = selected.length === 0;
      selected.forEach(function (value) {
        if (text.indexOf(value) !== -1) {
          matchPrices = true;
        }
      });
      product.style.display = matchPrices ? "block" : "none";
    });
  });
});
