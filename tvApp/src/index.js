var mouseX = 0, mouseY = 0;
const mouseMoveStep = 10;
var mulHorizontal = 0, mulVertical = 0;

function updateText(query, value) {
	const element = document.querySelectorAll(query);
	if (element && element.length > 0) {
		element[0].innerText = value;
	} else {
		console.log("Not found object to update");
	}
}

window.addEventListener("load", function () {

	document.addEventListener('mousemove', function (event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
		updateText("span.x-coor", mouseX);
		updateText("span.y-coor", mouseY);
	});

	document.addEventListener("keydown", (event) => {
		switch (event.key) {
			case "Enter":
				updateText("span.clicked", true);
				break;
			case "ArrowUp":
				mulVertical = -1;
				break;
			case "ArrowDown":
				mulVertical = 1;
				break;
			case "ArrowLeft":
				mulHorizontal = -1;
				break;
			case "ArrowRight":
				mulHorizontal = 1;
				break;
			default:
				break;
		}
	});
	document.addEventListener("keyup", (event) => {
		switch (event.key) {
			case "Enter":
				updateText("span.clicked", false);
				break;
			case "ArrowUp":
			case "ArrowDown":
			case "ArrowLeft":
			case "ArrowRight":
				mulHorizontal = mulVertical = 0;
				break;
			default:
				break;
		}
	});

	const linkInterval = setInterval(
		() => {
			// send coords and ok-status
		},
		500);
});