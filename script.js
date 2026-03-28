let heading = document.createElement("h1");
heading.innerText = "My Image Gallery 🚀";
heading.style.textAlign = "center";
document.body.appendChild(heading);


let para = document.createElement("p");
para.innerText = "This gallery is created using JavaScript DOM manipulation.";
para.style.textAlign = "center";
document.body.appendChild(para);


let images = [
  "https://global.discourse-cdn.com/sitepoint/original/3X/b/5/b59a78e2ed76c705f3c0dcb300f3f222aefdcd99.png",
  "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/13995/images/C2GPC1ZSsqJfE7mzrmAV_4-pillars-of-teamwork.jpeg",
  "https://t3.ftcdn.net/jpg/16/93/52/74/360_F_1693527478_Li1dICP6Ovueidc11g7jTsSa1wxXBKut.jpg"
];


let container = document.createElement("div");
container.style.textAlign = "center";


images.forEach((img) => {
  let image = document.createElement("img");
  image.src = img;
  image.style.width = "200px";
  image.style.margin = "10px";
  image.style.borderRadius = "10px";
  container.appendChild(image);
});


document.body.appendChild(container);