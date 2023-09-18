const p = document.querySelector("p");
const span = document.querySelector("span");
const diceBtn = document.querySelector(".dice");
const url = "https://api.adviceslip.com/advice";

const arr = [];

const getData = () => {
	let id = 0;
	// let text = "";
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			id = data.slip.id
			text = data.slip.advice
			if (Number(span.innerText) == id) {
				getData();
			} else {
				arr.push(data.slip);
			}
		})
		.catch(() => console.error("Byk"));

		if(arr.length == 5){
			clearInterval(fillArr)
		}
		console.log(arr)
};



const render = (a, b) => {
	span.innerText = a;
	p.innerText = b;
};

function rollAnimation() {
	diceBtn.classList.add("roll");
	setTimeout(() => diceBtn.classList.remove("roll"), "800");
}


const fillArr = setInterval(getData, 2600);



// window.addEventListener("load",getData);
// getData();

// diceBtn.addEventListener("click", getData);
