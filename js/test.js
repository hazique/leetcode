const buttons = document.querySelectorAll(".button");
const displayCell = document.getElementById("display");

buttons.forEach(button => {
	if (button.innerText !== "Random" && button.innerText !== "Start"){
		button.onclick = function(e) {
			const buttonValue = e.target.innerText;
			displayCell.innerText += buttonValue ;		
		}
	}	
});

document.getElementById("random").onclick = async function(e){
	const response = await fetch("https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new")
	const randomNum = await response.json();
	displayCell.innerText = randomNum;
}

