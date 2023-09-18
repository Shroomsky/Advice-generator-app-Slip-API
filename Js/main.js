const p = document.querySelector("p");
const span = document.querySelector("span");
const diceBtn = document.querySelector(".dice");
const url = "https://api.adviceslip.com/advice";

const getData = () => {
	let id = 0;
	let text = "";
	rollAnimation();
	fetch(url)
	.then((res) => res.json())
	.then((data) => {
		id = data.slip.id;
		text = data.slip.advice;
		if (Number(span.innerText) == id) {
			getData();
		} else {
			render(id, text);
		}
		});
};

const render = (a, b) => {
	span.innerText = a;
	p.innerText = b;
};

function rollAnimation() {
	diceBtn.classList.add("roll");
	setTimeout(() => diceBtn.classList.remove("roll"), "800");
}


getData();

diceBtn.addEventListener("click", getData);
