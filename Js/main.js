const p = document.querySelector("p");
const span = document.querySelector("span");
const diceBtn = document.querySelector(".dice");
const url = "https://api.adviceslip.com/advice";

const getData = () => {
    let id = 0;
	let advice = "";
	fetch(url)
    .then((res) => res.json())
    .then((data) => {
        id = data.slip.id;
        advice = data.slip.advice;
        span.innerText = id;
        p.innerText = advice;
    });
    rollAnimation();
};


const rollAnimation = () => {
    diceBtn.classList.add("roll");
    setTimeout(() => diceBtn.classList.remove("roll"), "800");
};
getData();

diceBtn.addEventListener("click", getData);
