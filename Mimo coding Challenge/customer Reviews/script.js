const sendReview = () => {
    const text =
    document.querySelector("#addedReviews");
    const reviewInput =
    document.querySelector("#input-textarea").ariaValue;
    text.innerHTML = reviewInput + ':' + reviewTextarea;
};