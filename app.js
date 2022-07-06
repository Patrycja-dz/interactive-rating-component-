{

    const qId = (id) => document.getElementById(id)
    const qsAll = (selectors) => document.querySelectorAll(selectors)
    const ce = (tag) => document.createElement(tag)

    const getIndexOfChosenRating = () => {
        const allRatingsStars = qsAll('.rating-item');
        allRatingsStars.forEach((star, index) => chosenRating(star, index))

    }

    const chosenRating = (element, index) => {
        let result = index + 1;
        element.addEventListener('click', (e) => {
            e.stopPropagation();
            createThanksForRatingModal(result)
        })
        
    }

    const submitRating = () => {
        const submitBtn = qId('js-submit');
   
    }

    const createThanksForRatingModal = (result) =>{
        const section = ce('section');
        section.classList.add('thanks-state');
        section.style.height='230px'

        const paragraph = ce('p')
        paragraph.textContent = `you selected ${result} from 5`
        section.appendChild(paragraph)
        console.log(paragraph)
    }
    createThanksForRatingModal()

    submitRating()
    getIndexOfChosenRating()





}