var title = document.getElementById("title");
var image = document.getElementById("image");
var options = document.getElementById("options");

function strand()
{
	title.innerHTML = "Het strand";
	image.src = "img/beach.jpg";
	image.setAttribute("onclick", "alert('Maarten is tof')");
}

function huis()
{
	title.innerHTML = "Eng huis";
	image.src = "img/house.jpg";
}