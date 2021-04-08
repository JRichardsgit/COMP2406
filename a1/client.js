let aragorn = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			10: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			11: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			12: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			13: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			14: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}	
	}
};

let legolas = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_charge: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: { 
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

let frodo = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_charge: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: { 
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
			
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};

let restaurants = [aragorn, legolas, frodo];
let cartItems = [];

function init (){

	let dropdownOptions = document.getElementById("dropdown");
	let defaultOption = document.createElement("option");
	defaultOption.innerHTML = "Select A Restaurant";
	dropdownOptions.appendChild(defaultOption);

	restaurants.forEach(option =>{
		let myOption = document.createElement("option");
		myOption.value = option.name;
		myOption.innerHTML = option.name;
		dropdownOptions.appendChild(myOption);
	});

}

function changeRest() {

	//---------check if cart has any items before reloading new restaurant
	if(cartItems.length > 0 ) {
		if (confirm("You have items on your order, are you sure you want to Continue?")) {

			let selected = document.getElementById("dropdown");
			let menu = document.getElementById("menu");
			cartItems = [];
			if(!selected.value){ selected.value = legolas};			//set legolas as default option if none selected

			restaurants.forEach((option) => {
				if (option.name === selected.value) {
					let newMenu = createMenu(option);
					menu.innerHTML = "";
					menu.appendChild(newMenu);						// load new menu
				}
			});

		}
	}
	//if no items in cart switch
	else {
		let selected = document.getElementById("dropdown");
		let menu = document.getElementById("menu");
		restaurants.forEach((option) => {
			if (option.name === selected.value) {
				let newMenu = createMenu(option);
				menu.innerHTML = "";
				menu.appendChild(newMenu);
			}
		});

	}


}

/// ------------------------- This function is used to generate a new menu based on the selected restaurant
function createMenu(rest){

	//--------Clear any old data----------
	let sections = document.getElementById("sections");
	sections.class = "sections";
	sections.innerHTML = "";
	let menuItems = document.getElementById("menuItems");
	menuItems.innerHTML = "";

	//-----------create elements for title, min price, and delivery charge
	let menu = document.createElement("div");
	let title = document.createElement("h2");
	let min_order = document.createElement("p");
	let delivery_charge = document.createElement("p");
	menu.class = "menu";
	title.innerHTML = rest.name;
	min_order.innerHTML = "Minimum Order Price: $" + rest.min_order.toFixed(2);
	min_order.id = "minOrder";
	min_order.value = rest.min_order;
	delivery_charge.innerHTML = "Delivery Charge: $" + rest.delivery_charge.toFixed(2);
	delivery_charge.id ="delivery_charge";
	menu.appendChild(title);
	menu.appendChild(min_order);
	menu.appendChild(delivery_charge);

//-----------create Sections list and make them bookmark to the respective menu item
	let sectionList = document.createElement("ul");
	Object.keys(rest.menu).forEach(x =>{
		let listItem = document.createElement("li");
		let bookmark = document.createElement("a");
		bookmark.class = "bookmark";
		bookmark.href="#"+x;
		bookmark.innerHTML=x;
		listItem.appendChild(bookmark);
		sectionList.appendChild(listItem);
		sections.appendChild(sectionList);
	});
	menu.appendChild(sections);

//--------create elements for individual menu items



	Object.keys(rest.menu).forEach(x =>{
		let segment = document.createElement("div");
		segment.id = x;
		segment.class = "menuItems";
		let segmentName = document.createElement("h3");
		segmentName.innerHTML = x;
		segment.appendChild(segmentName);
		Object.values(rest.menu[x]).forEach(y =>{

			let item = document.createElement("div");
			let name = document.createElement("h4");
			let description = document.createElement("p");
			let price = document.createElement("p");
			let addToCartButton = document.createElement("img");
			item.id= y.name;
			name.innerHTML = y.name ;
			description.innerHTML = y.description;
			price.innerHTML ="$ "+ y.price.toFixed(2);
			addToCartButton.src = "./assets/add.jpg";
			addToCartButton.height = 20;
			addToCartButton.width = 20;
			addToCartButton.alt = y.name;
			addToCartButton.addEventListener("click", handleAddToCart);


			name.appendChild(addToCartButton);
			item.appendChild(name);
			item.appendChild(description);
			item.appendChild(price);
			segment.appendChild(item);

		});

		menuItems.appendChild(segment);
	});

	menu.appendChild(menuItems);

	//------create order section


	menu.appendChild(createOrder(rest));

	return(menu);

}



function handleOrderButton() {
	let subtotal = document.getElementById("subtotal").value;
	let minOrder = document.getElementById("minOrder").value;
	let msg = document.getElementById("msg");

	console.log(subtotal);
	console.log(minOrder);
	if(subtotal > minOrder){
		alert("Your Order has been placed!");
		cartItems = [];
		changeRest();
	}
	else {
		msg.innerHTML = "Your order is under the minimum value, Add $" + (minOrder-subtotal).toFixed(2) + " more to place Order";
	}

}

//-----------removes cart items from cart and re -renders the menu with updated cart items

function handleRemoveCart() {
	let itemName = this.getAttribute('alt');
	cartItems.forEach(item => {
		if (item.name === itemName) {
			item.quantity = item.quantity  - 1;
			if(item.quantity <= 0 ){
				cartItems.splice(cartItems.indexOf(item), 1);
			}
		}

	});


	let selected = document.getElementById("dropdown");
	let menu = document.getElementById("menu");
	restaurants.forEach((option) => {
		if (option.name === selected.value) {
			let newMenu = createMenu(option);
			menu.innerHTML = "";
			menu.appendChild(newMenu);
		}
	});

}

//---------when an item is added to cart this function is called and it updates cart items and re-renders the menu with updated cart items

function handleAddToCart(){
	let itemName = this.getAttribute('alt');
	let newItem = document.getElementById(itemName);
	let price = newItem.childNodes[2].innerHTML.split(" ")[1];
	let found = false;
	cartItems.forEach(item => {

		if (item.name === itemName) {
			item.quantity = item.quantity +1;
			found = true;
		}
	});
	if(!found)
		cartItems.push({name: itemName, price: parseFloat(price), quantity: 1});

	console.log(cartItems);

	let selected = document.getElementById("dropdown");
	let menu = document.getElementById("menu");
	restaurants.forEach((option) => {
		if (option.name === selected.value) {
			let newMenu = createMenu(option);
			menu.innerHTML = "";
			menu.appendChild(newMenu);
		}
	});

}

//---------this function is used to generate the order section of the menu based on the current data in cartItems

function createOrder(rest) {
	let order = document.createElement("div");
	order.id="order";
	order.class = "order";
	let deliveryCharge = rest.delivery_charge;


	let subTotal = 0;
	order.innerHTML = "";

	cartItems.forEach(x =>{
		let item = document.createElement("div");
		let name = document.createElement("h5");
		let price = document.createElement("p");
		let quantity = document.createElement("p");
		let remove = document.createElement("img");
		name.innerHTML = x.name + " ";
		quantity.innerHTML = "Qty: " + x.quantity;
		price.innerHTML = "Cost: $" + (x.price * x.quantity).toFixed(2);
		remove.addEventListener("click", handleRemoveCart);
		remove.src = "./assets/remove.jpg";
		remove.class = "removeButton";
		remove.width = 15;
		remove.height = 15;
		remove.alt = x.name;
		name.appendChild(remove);
		item.appendChild(name);
		item.appendChild(quantity);
		item.appendChild(price);


		order.appendChild(item);

		subTotal = subTotal + x.price * x.quantity;
	});

	//-------display order summary section

	let sub = document.createElement("h4");
	sub.id= "subtotal";
	sub.value = subTotal;
	sub.innerHTML = "Subtotal: $" + subTotal.toFixed(2);

	let delivery = document.createElement("h5");
	delivery.innerHTML = "Delivery Charge: $" + deliveryCharge.toFixed(2);

	let tax = document.createElement("h5");
	let taxCalc = (subTotal + deliveryCharge)*0.1;
	tax.innerHTML= "Tax: $" + taxCalc.toFixed(2);

	let total = document.createElement("h3");
	let totalCalc = subTotal + deliveryCharge + taxCalc;
	total.innerHTML = "Total: $" + totalCalc.toFixed(2);

	let placeOrder= document.createElement("button");
	placeOrder.onclick=handleOrderButton;
	placeOrder.innerHTML = "place Order";

	let msg = document.createElement("p");
	msg.id = "msg";

	order.appendChild(sub);
	order.appendChild(delivery);
	order.appendChild(tax);
	order.appendChild(total);
	order.appendChild(placeOrder);
	order.appendChild(msg);

return(order);

}

