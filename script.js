fetch("https://picsum.photos/200/300")
  .then((res) => {
    let img1 = document.createElement("img");
    img1.src = res.url;
    img1.style.margin = "10px";
    document.body.appendChild(img1);
  });


// Image 2
fetch("https://picsum.photos/200/300")
  .then((res) => {
    let img2 = document.createElement("img");
    img2.src = res.url;
    img2.style.margin = "10px";
    document.body.appendChild(img2);
  });


// Image 3
fetch("https://picsum.photos/200/300")
  .then((res) => {
    let img3 = document.createElement("img");
    img3.src = res.url;
    img3.style.margin = "10px";
    document.body.appendChild(img3);
  });