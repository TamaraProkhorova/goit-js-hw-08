import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form = document.querySelector('form'), 
input = document.querySelector('input'), 
textarea = document.querySelector('textarea'),

form.addEventListener('input', throttle(storageFormData, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

function storageFormData(e) { 
    formData[e.target.name] = e.target.value; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) { 
    e.preventDefault(); 
        
    const savedDatas = JSON.parse(localStorage.getItem(STORAGE_KEY)); 
    console.log(savedDatas); 
    
    e.currentTarget.reset(); 
    localStorage.removeItem(STORAGE_KEY); 
    formData = {};
}

function populateForm() { 
    if (localStorage.getItem(STORAGE_KEY)) {  
        input.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email || ''; 
        textarea.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message || ''; 
        }
    }




