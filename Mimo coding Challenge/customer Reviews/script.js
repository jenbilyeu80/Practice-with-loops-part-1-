const sendReview = () => {
    const text =
    document.querySelector("#addedReviews");
    const reviewInput =
    document.querySelector("#input-text").value;
    const reviewTextarea=document.querySelector("#input-textarea").value;
    text.innerHTML = reviewInput + ':' + reviewTextarea;
};