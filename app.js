const qs = (selector) => document.querySelector(selector)
const qsAll = (selectors) => document.querySelectorAll(selectors)
const ce = (tag) => document.createElement(tag)

const getIndexOfChosenRating = () => {
    const allRatingsStars = qsAll('.rating-item');
    allRatingsStars.forEach((star, index) => chosenRating(star, index))
}

const chosenRating = (element, index) => {
    let result = index + 1;
    element.addEventListener('click', () => {
        element.style.backgroundColor = '#fb7413';
        console.log(result)
        feedback(result)
    })
}
const feedback = (rate) => {
    let feedbackText = document.getElementById('selected-rating');
    feedbackText.textContent = `You selected ${rate} out of 5`
}

const submitRating = (e) => {
    changeView()
    
}

const changeView = () => {
    const ratingSection = qs('.rating');
    ratingSection.classList.add('hidden');
    const summarySection = qs('.feedback');
    summarySection.classList.add('visible');
}
const submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener('click', (submitRating))








getIndexOfChosenRating()