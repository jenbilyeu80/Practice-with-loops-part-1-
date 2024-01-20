const terms = document.getElementsByTagName("textarea")[0];

function checkReading(){
    const read = terms.scrollHeight-Math.round(terms.scrollTop) === terms.clientHeight;
    if(read){
        document.getElementsByTagName("p")[0].innerHTML= "Thank You";
    }
}
terms.onscroll = checkReading; 