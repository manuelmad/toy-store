
// Array de categorías que se llena verificando el array de objetos de productos
let categories = [];

productsArray.forEach(product => {
	let check = product.categoria;
	console.log(check);
	let check2 = categories.find(item => item.category == check);
	console.log(check2);
	if(!check2) {
		let url;
		if(check == "Bebés") {
			url = './imgs/categories/baby.png';
		} else if(check == "Libros didácticos") {
			url = './imgs/categories/books.png';
		} else if(check == "Niño Toddler") {
			url = './imgs/categories/boy.png';
		} else if(check == "Niña Toddler") {
			url = './imgs/categories/girl.png';
		} else if(check == "Hogar y Escolar") {
			url = './imgs/categories/school.png';
		} else if(check == "Peluches") {
			url = './imgs/categories/bear.png';
		}
		categories.push({category: check, imgUrl: url/*product.imgUrl*/});
	}
});

console.log('categories', categories);


// Función para agregar contenedores de categorías al DOM
let collectionsContainer = document.getElementById("collections");

function collectionsRender() {
	categories.forEach(category => {
		let categoria = category.category;
		let imagen = category.imgUrl;

		let urlCategory;

		if(categoria == "Bebés") {
			urlCategory = "./collections/babies.html";
		}

		let article = document.createElement("article");
		article.innerHTML = `
			<a href=${urlCategory}>
				<div>
					<img src=${imagen}>
				</div>
				<p>${categoria}</p>
			</a>
		`;
		

		collectionsContainer.appendChild(article);
	})
}

collectionsRender();

// Función para agregar productos de tendencias al DOM
let trendsContainer = document.getElementById("trending-products__container");

function trendsRender() {
	productsArray.forEach(product => {
		let isTrend = product.trend;
		let imagen = product.imgUrl;
		let name = product.nombre;
		let price = product.pvp;

		if(isTrend) {
		let div = document.createElement("div");
		div.classList.add("trending-product");
		div.innerHTML = `
					<img src=${imagen}>
					<p class="trending-product__name">${name}</p>
					<p class="trending-product__price">$${price}</p>
		`;

		trendsContainer.appendChild(div);
		}
	})
}

trendsRender();


// Función que muestra y oculta el modal de búsqueda
const search_icon_container = document.getElementById("search_icon-container");
//search_icon_container.addEventListener("click", openSearch);

const search_section = document.getElementById("search_section");
search_section.style.display = "none";
/*
function openSearch() {
	if(search_section.style.display == "none") {
		search_section.style.display = "block";
	} else if(search_section.style.display == "block") {
		search_section.style.display = "none";
	}
}*/


// Función para relizar la búsqueda por precio
const price_button = document.getElementById("price_button");
price_button.addEventListener('click', searchByPrice);

let productsArrayByPrice = [];

function searchByPrice() {
	productsArrayByPrice = [];
	const price_min = document.getElementById("searchByCost_min").value;
	const price_max = document.getElementById("searchByCost_max").value;

	productsArray.forEach(product => {
		if(product.pvp >= price_min && product.pvp <= price_max) {
			productsArrayByPrice.push(product);
		}
	});

	console.log('productsArrayByPrice', productsArrayByPrice);
}


// Función para cerrar el modal de búsqueda con la X
const close_search = document.getElementById("close_search");
close_search.addEventListener("click", closeSearch);

function closeSearch() {
	if(search_section.style.display == "block") {
		search_section.style.display = "none";
	}
}