document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const color = document.getElementById("color").value.slice(1);
  const schemeType = document.getElementById("color-combinations").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color}&mode=${schemeType}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      const colorsDiv = document.getElementById("colors");
      colorsDiv.innerHTML = "";

      data.colors.forEach((colorObj) => {
        const colorContainer = document.createElement("div");
        colorContainer.style.textAlign = "center";

        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = colorObj.hex.value;

        const hexCode = document.createElement("p");
        hexCode.textContent = colorObj.hex.value;
        hexCode.style.color = "#000";
        hexCode.style.marginTop = "5px";

        colorContainer.appendChild(colorBox);
        colorContainer.appendChild(hexCode);

        colorsDiv.appendChild(colorContainer);
      });
    })
    .catch((error) => console.error("Error fetching color scheme:", error));
});
