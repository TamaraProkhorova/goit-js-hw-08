import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const refs = {
 form: document.querySelector('form'), 
 input: document.querySelector('input'), 
 textarea: document.querySelector('textarea'),
}

refs.form.addEventListener('input', throttle(storageFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateForm();

function storageFormData(e) { 
    formData[e.target.name] = e.target.value; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) { 
    e.preventDefault(); 
    if (refs.input.value === "" || refs.textarea.value === "") {
                 return alert(`Всі поля повинні бути заповнені`);
             }
        
    const savedDatas = JSON.parse(localStorage.getItem(STORAGE_KEY)); 
    console.log(savedDatas); 
    
    e.currentTarget.reset(); 
    localStorage.removeItem(STORAGE_KEY); 
    formData = {};
}

function populateForm() { 
    if (localStorage.getItem(STORAGE_KEY)) {  
        refs.input.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email || ''; 
        refs.textarea.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message || ''; 
        }
    }




