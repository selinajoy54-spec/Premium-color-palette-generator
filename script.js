const palette = document.getElementById("palette");

const colorCollection = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#F7B731",
    "#A55EEA",
    "#26DE81",
    "#FD9644",
    "#FC5C65",
    "#20BF6B",
    "#8854D0",
    "#0FB9B1",
    "#EB3B5A",
    "#3867D6",
    "#FA8231",
    "#2D98DA",
    "#F8EFBA",
    "#E056FD",
    "#7BED9F",
    "#70A1FF",
    "#FF9FF3",
    "#00D2D3",
    "#FF9F43",
    "#54A0FF",
    "#5F27CD",
    "#10AC84",
    "#EE5253",
    "#222F3E",
    "#F368E0"
];

function getRandomColor() {
    return colorCollection[
        Math.floor(Math.random() * colorCollection.length)
    ];
}

function showToast(message){

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

function copyColor(color){

    navigator.clipboard.writeText(color);

    showToast(color + " Copied!");
}

function generatePalette(){

    palette.innerHTML = "";

    let usedColors = [];

    while(usedColors.length < 6){

        let color = getRandomColor();

        if(!usedColors.includes(color)){
            usedColors.push(color);
        }
    }

    usedColors.forEach(color => {

        const card = document.createElement("div");

        card.classList.add("color-card");
        card.style.background = color;

        card.innerHTML = `
            <div class="color-info">
                <div class="color-code">${color}</div>
                <div class="copy-text">Click to Copy</div>
            </div>
        `;

        card.addEventListener("click", () => {
            copyColor(color);
        });

        palette.appendChild(card);

    });
}

generatePalette();

document.addEventListener("keydown", function(event){

    if(event.code === "Space"){
        event.preventDefault();
        generatePalette();
    }

});