// Prototipo (clase) para crear productos
class Productos {
	constructor({
		nombre,
		categoria,
		cantidad,
		exhibicion,
		costo,
		pvp,
		total,
		imgUrl,
		trend = false,
	}) {
		this.nombre = nombre;
		this.categoria = categoria;
		this.cantidad = cantidad;
		this.exhibicion = exhibicion;
		this.costo = costo;
		this.pvp = pvp;
		this.total = this.cantidad * this.pvp;
		this.imgUrl = imgUrl;
		this.trend = trend;
	}
}


// Objetos de cada producto, instancias de la clase.
const Kid_Kraft = new Productos({
	nombre: "Kid Kraft Cooking Fun Activite Center",
	categoria: "Bebés",
	cantidad: 2,
	exhibicion: 0,
	costo: 120,
	pvp: 150,
	imgUrl: "https://live.staticflickr.com/65535/52938842990_f46703e08e_m.jpg",
});
console.log('Kid_Kraft', Kid_Kraft);


const Baby_Gym = new Productos({
	nombre: "Baby Gym",
	categoria: "Bebés",
	cantidad: 1,
	exhibicion: 0,
	costo: 0, 
	pvp: 60,
	imgUrl: "https://live.staticflickr.com/65535/52938457676_b0246f0247_m.jpg",
	trend: true
});
console.log('Baby_Gym', Baby_Gym);

const Little_People  = new Productos({
	nombre: "Little People Big Animal Train",
	categoria: "Bebés",
	cantidad: 1,
	exhibicion: 0,
	costo: 60,
	pvp: 70,
	imgUrl: "https://live.staticflickr.com/65535/52937866617_21df533a1b_m.jpg",
});
console.log('Little_People', Little_People);

const Double_Sided = new Productos({
	nombre: "Double Sided Tabletop Easel",
	categoria: "Libros didácticos",
	cantidad: 1,
	exhibicion: 0,
	pvp: 70,
	imgUrl: "./imgs/products/double-sized-tabletop-easel.jpg",
	trend: true
});
console.log('Double_Sided', Double_Sided);

const Lego_Classic = new Productos({
	nombre: "Lego Classic (1500 Piezas)",
	categoria: "Libros didácticos",
	cantidad: 1,
	exhibicion: 0,
	pvp: 70,
	imgUrl: "./imgs/products/lego-classic-1500-pieces.jpg",
});
console.log('Lego_Classic', Lego_Classic);

const Jenga = new Productos({
	nombre: "Jenga",
	categoria: "Libros didácticos",
	cantidad: 1,
	exhibicion: 0,
	pvp: 45,
	imgUrl: "./imgs/products/jenga.jpg",
});
console.log('Jenga', Jenga);

const Jurassic_World = new Productos({
	nombre: "Jurassic World Indominus Rex",
	categoria: "Niño Toddler",
	cantidad: 1,
	exhibicion: 1,
	pvp: 145,
	imgUrl: "./imgs/products/indominus-rex.jpg",
});
console.log('Jurassic_World', Jurassic_World);

const Smashers_Dino = new Productos({
	nombre: "Smashers Dino Island Giant Skull",
	categoria: "Niño Toddler",
	cantidad: 1,
	exhibicion: 1,
	pvp: 60,
	imgUrl: "./imgs/products/smashers-dino-island-giant-skull.jpg",
});
console.log('Smashers_Dino', Smashers_Dino);

const Dinosaur_Action = new Productos({
	nombre: "Dinosaur Action 6 pack",
	categoria: "Niño Toddler",
	cantidad: 2,
	exhibicion: 0,
	pvp: 50,
	imgUrl: "./imgs/products/dinosaur-action-6-pack.jpg",
	trend: true
});
console.log('Dinosaur_Action', Dinosaur_Action);

const Unicorn_Life = new Productos({
	nombre: "Unicorn Life Sized Stuffed Animal",
	categoria: "Niña Toddler",
	cantidad: 1,
	exhibicion: 1,
	pvp: 170,
	imgUrl: "./imgs/products/life-sized-stuffed-animal.jpg",
	trend: true
});
console.log('Unicorn_Life', Unicorn_Life);

const LOL_4 = new Productos({
	nombre: "LOL 4 in 1 Plane",
	categoria: "Niña Toddler",
	cantidad: 1,
	exhibicion: 1,
	pvp: 140,
	imgUrl: "./imgs/products/lol-4-in-1-plane.jpg",
});
console.log('LOL_4', LOL_4);

const LITTLE_TWIN = new Productos({
	nombre: "LITTLE TWIN STAR MAKEUP",
	categoria: "Niña Toddler",
	cantidad: 1,
	exhibicion: 1,
	pvp: 130,
	imgUrl: "./imgs/products/little-twin-star-makeup.jpg",
});
console.log('LITTLE_TWIN', LITTLE_TWIN);

const Pillowfort = new Productos({
	nombre: "Pillowfort Letter Board",
	categoria: "Hogar y Escolar",
	cantidad: 2,
	exhibicion: 0,
	pvp: 35,
	imgUrl: "./imgs/products/pillowfort-letter-board.jpg",
});
console.log('Pillowfort', Pillowfort);

const Pillowfort_Dino = new Productos({
	nombre: "Pillowfort Letter Board Dino",
	categoria: "Hogar y Escolar",
	cantidad: 1,
	exhibicion: 0,
	pvp: 35,
	imgUrl: "./imgs/products/pillowfort-letter-board-dino.jpg",
	trend: true
});
console.log('Pillowfort_Dino', Pillowfort_Dino);

const The_Diffuser = new Productos({
	nombre: "FAO Misty The Diffuser",
	categoria: "Hogar y Escolar",
	cantidad: 1,
	exhibicion: 0,
	pvp: 75,
	imgUrl: "./imgs/products/fao-misty-the-diffuser.jpg",
});
console.log('The_Diffuser', The_Diffuser);

const Perrito_Beige = new Productos({
	nombre: "Perrito Beige",
	categoria: "Peluches",
	cantidad: 1,
	exhibicion: 0,
	pvp: 12,
	imgUrl: "./imgs/products/perrito-beige.jpg",
});
console.log('Perrito_Beige', Perrito_Beige);

const Spark_Plush_Collectible = new Productos({
	nombre: "Spark Plush Collectible",
	categoria: "Peluches",
	cantidad: 1,
	exhibicion: 0,
	pvp: 12,
	imgUrl: "./imgs/products/spark-plush-collectible.jpg",
});
console.log('Spark_Plush_Collectible', Spark_Plush_Collectible);

const Dinosaurio = new Productos({
	nombre: "Dinosaurio",
	categoria: "Peluches",
	cantidad: 2,
	exhibicion: 0,
	pvp: 12,
	imgUrl: "./imgs/products/dinosaurio.jpg",
	trend: true
});
console.log('Dinosaurio', Dinosaurio);


// Array de productos
let productsArray = [Kid_Kraft, Baby_Gym, Little_People, Double_Sided, Lego_Classic, Jenga, Jurassic_World, Smashers_Dino, Dinosaur_Action, Unicorn_Life, LOL_4, LITTLE_TWIN, Pillowfort, Pillowfort_Dino, The_Diffuser, Perrito_Beige, Spark_Plush_Collectible, Dinosaurio];
console.log('productsArray', productsArray);