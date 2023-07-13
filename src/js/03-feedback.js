
import throttle from 'lodash.throttle'; 

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form message'),

}



refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", onTextareaInput);

function onFormSubmit(evt) { 
    evt.preventDefault();
    evt.currentTarget.reset();
}


function onTextareaInput(evt) {
    const message = evt.currentTarget.value;

    localStorage.setItem("feedback-form-state", massage);
}
