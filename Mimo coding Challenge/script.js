const username="Sheryll";

function share(){
    const postText = 
    document.getElementById("postText").Value;
    const posts = document.getElementById("posts");
    posts.innerHTML = posts.innerHTML + "<br>";
    posts.innerHTML = posts.innerHTML + username + ":" + postText;

}