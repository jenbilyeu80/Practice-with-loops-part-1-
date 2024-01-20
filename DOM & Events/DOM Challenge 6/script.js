const img = documnet.querySelector("button");

function like(){
    documnet.querySelector("p").innerHTML = "Liked";
}
img.ondblclick = like; 