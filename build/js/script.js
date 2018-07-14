function createCats(param) {
	var cats = document.querySelector("#templateCat")
	var main = document.querySelector(".gallery__items")
	var newCat = cats.content.cloneNode(true);
	newCat.querySelector('.name__cat').textContent = param.name;
	newCat.querySelector('.kitty__price').textContent = param.price;
	newCat.querySelector('.kitty__image').removeAttribute("src");
	newCat.querySelector('.kitty__image').setAttribute("src", param.img_url);
	newCat.querySelector('.kitty__category').textContent = param.category;
	main.appendChild(newCat)
}
var result = []
var arr = []
function ei(){
	for(var m=0;m<result.length;m++){
	result[m]
	}
}

console.log(result)
function unique() {
	nextInput:
	for (var i = 0; i < arr.length; i++) {
		var str = arr[i];
		for (var j = 0; j < result.length; j++) {
			if (result[j] == str) continue nextInput;
		}
		result.push(str);
	}
	return result
}

fetch('https://ma-cats-api.herokuapp.com/api/cats')
	.then(
		function (response) {
			response.json().then(function (data) {
				delete data.info;
				for (var key in data) {
					for (var i in data[key]) {
						createCats(data[key][i]);
						arr.push(data[key][i].category);
						unique();
					}
				}
				ei();
			});
		}
	)
	.catch(function (err) {
		console.log('Fetch Error :-S', err);
	});

	var disableButton = false;
	var button = document.querySelector(".request");
	button.addEventListener("click", function(){
		if (disableButton) return;
		disableButton = true;
		fetch('https://ma-cats-api.herokuapp.com/api/cats/?page=2')
		.then(
			function (response) {
				response.json().then(function (data) {
					delete data.info;
					disableButton = false;
				});
			}
		)
		.catch(function (err) {
			console.log('Fetch Error :-S', err);
		});
	})

