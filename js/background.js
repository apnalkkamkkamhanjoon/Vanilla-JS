const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chooseImages = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chooseImages}`;

document.body.appendChild(backgroundImage);