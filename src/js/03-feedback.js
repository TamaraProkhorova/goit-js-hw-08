import throttle from 'lodash.throttle';
const form = document.querySelector('form');

const STORAGE_KEY = "feedback-form-state";


const formData = {};
populateForm();

form.addEventListener('input', throttle(event =>{
    formData[event.target.name] = event.target.value;
// console.log(formData)
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData), 500)
}))

form.addEventListener('submit', onFormSubmit);
function onFormSubmit (event){
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
}

function populateForm(){
    const savedData = JSON.parse(localStorage.setItem(STORAGE_KEY));
    console.log(savedData);
    input.value = JSON.parse(localStorage.setItem(formData)).email || '';
    textarea.value = JSON.parse(localStorage.setItem(formData)).message || '';
    }




