let restaurants = [];
let cartItems = [];

function init (){
	let req = new XMLHttpRequest();
	let dropdownOptions = document.getElementById("dropdown");
	let defaultOption = document.createElement("option");
	defaultOption.innerHTML = "Select A Restaurant";
	dropdownOptions.appendChild(defaultOption);


	req.onreadystatechange = function(){
		if(this.status === 200 && this.readyState === 4){
			restaurants = JSON.parse(req.responseText);
			console.log(restaurants);

			restaurants.forEach(option =>{
				console.log(option.name);
				let myOption = document.createElement("option");
				myOption.value = option.name;
				myOption.innerHTML = option.name;
				dropdownOptions.appendChild(myOption);
			});
		}
	};

	req.open("GET", "http://localhost:3000/rest");
	req.send();
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
				console.log("selecting rest:");
				console.log(option);
				let newMenu = createMenu(option);
				menu.innerHTML = "";
				menu.appendChild(newMenu);
			}
		});

	}


}

/// ------------------------- This function is used to generate a new menu based on the selected restaurant
function createMenu(rest){
	console.log(rest.min_order);

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
	min_order.innerHTML = "Minimum Order Price: $" + rest.min_order;
	min_order.id = "minOrder";
	min_order.value = rest.min_order;
	delivery_charge.innerHTML = "Delivery Charge: $" + rest.delivery_charge;
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
			price.innerHTML ="$ "+ y.price;
			addToCartButton.src = "http://localhost:3000/assets/add";
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
	let rest = document.getElementById("dropdown").value;
	let subtotal = document.getElementById("subtotal").value;
	let minOrder = document.getElementById("minOrder").value;
	let msg = document.getElementById("msg");

	console.log(subtotal);
	console.log(minOrder);
	if(subtotal > minOrder){
		let req = new XMLHttpRequest();

		req.onreadystatechange = function(){
			if(this.status === 200 && this.readyState === 4){}
			console.log(req.responseText);
		};

		req.open("POST", 'http://localhost:3000/order');
		req.send(JSON.stringify(cartItems)+ "!" + rest);
		alert("Your Order has been placed!");
		cartItems = [];
		changeRest();
	}
	else {
		msg.innerHTML = "Your order is under the minimum value, Add $" + (minOrder-subtotal) + " more to place Order";
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
		price.innerHTML = "Cost: $" + (x.price * x.quantity);
		remove.addEventListener("click", handleRemoveCart);
		remove.src = "http://localhost:3000/assets/remove";
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
	sub.innerHTML = "Subtotal: $" + subTotal;

	let delivery = document.createElement("h5");
	delivery.innerHTML = "Delivery Charge: $" + deliveryCharge;

	let tax = document.createElement("h5");
	let taxCalc = (subTotal + deliveryCharge)*0.1;
	tax.innerHTML= "Tax: $" + taxCalc;

	let total = document.createElement("h3");
	let totalCalc = subTotal + deliveryCharge + taxCalc;
	total.innerHTML = "Total: $" + totalCalc;

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

