
import throttle from 'lodash.throttle'; 
const STORAGE_KEY = "feedback-form-state"
let formData = {};
const LS = localStorage;
const form = document.querySelector('.feedback-form');


// get data from imputs


form.addEventListener('input',throttle(onTextareaInput),500);
form.addEventListener("submit",  onFormSubmit);
function onTextareaInput (evt) {
    formData[evt.target.name] = evt.target.value;
    LS.setItem(STORAGE_KEY, JSON.stringify(formData));
}
// restore data from inputs
if (LS.getItem(STORAGE_KEY)) {
    formData = JSON.parse(LS.getItem(STORAGE_KEY));
    for (let key in formData) {
        form.elements[key].value = formData[key];
  }
   
}


function onFormSubmit(evt) { 
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log(formData)
}
