// Función para agregar productos de bebé al DOM
let babiesContainer = document.getElementById("babies");

function babiesRender() {
	productsArray.forEach(product => {
		let category = product.categoria;
		let imagen = product.imgUrl;
		let name = product.nombre;
		let price = product.pvp;

		if(category == "Bebés") {
		let div = document.createElement("div");
		div.classList.add("babies-product");
		div.innerHTML = `
					<img src=${/*"."+*/imagen}>
					<p class="babies-product__name">${name}</p>
					<p class="babies-product__price">$${price}</p>
		`;

		babiesContainer.appendChild(div);
		}
	})
}

babiesRender();