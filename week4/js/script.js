function setT(){
    let div = document.querySelector("#image");
    let img = document.querySelectorAll(".preview");
    div.setAttribute("tabindex",0);
    for (let i = 0; i < 6;i++) {
        img[i].setAttribute("tabindex",i+1);
    }
}

function upDate(previewPic){
    let div = document.querySelector("#image");
    div.innerHTML = previewPic.getAttribute("alt");
    div.style.backgroundImage = "url('" + previewPic.src + "')";
	}

function unDo(){
    let div = document.querySelector("#image");
    div.innerHTML = "Hover over an image below to display here.";
    div.style.backgroundColor = "#8e68ff";
    div.style.backgroundImage = "url('')";
	}