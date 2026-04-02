for (let i = 0; i < 100; i++) {
  fetch("https://picsum.photos/200/300")
    .then((res) => {
      let img = document.createElement("img");
      img.src = res.url;
      document.body.appendChild(img);
    });
}