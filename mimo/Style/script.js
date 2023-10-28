const el= document.querySelector("p");

function toggleBold(){
    el.classList.toggle("bold");
}

function toggleItalic(){
    el.classList.toggle("italic");

}
function toggleUnderline(){
    el.classList.toggle("underline");
}

function toggleMonospace(){
    el.classList.toggle("grey-text");
    el.classList.toggle("mono");
}

function removeFormat(){
    el.classList.remove("bold", "italic", "underline", "grey-text", "mono");
}