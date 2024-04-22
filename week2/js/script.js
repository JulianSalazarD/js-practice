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