
import 'flowbite';


import { Modal } from 'flowbite'

const $modalElement = document.querySelector('#modalEl');

const modalOptions = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    }
}

const modal = new Modal($modalElement, modalOptions);

modal.show();

// const ItemBtn = document.querySelector('.item-btn')
// const itemValue = document.getElementById('item-textarea')

// ItemBtn.addEventListener('click', ()=>{
//   console.log('success')
//   if (itemValue.value == '') {
//     setTimeout(() => {
//       itemValue.setAttribute('placeholder', 'Write a text')
//   }, 2000);

//   } else {
//     let itemDiv = document.createElement('div');
//   itemDiv.classList.add('flex, items-center, mb-4')

//   let itemInput = document.createElement('input');
//   itemInput.setAttribute('type', 'checkbox')
//   itemInput.setAttribute('id', 'default-checkbox')
//   itemInput.setAttribute('value', '')
//   itemInput.classList.add('w-4', 'h-4', 'text-blue-600', 'bg-gray-100', 'border-gray-300', 'rounded', 'focus:ring-blue-500', 'dark:focus:ring-blue-600', 'dark:ring-offset-gray-800', 'focus:ring-2', 'dark:bg-gray-700', 'dark:border-gray-600');
  
//   let itemLabel = document.createElement('label');
//   itemLabel.setAttribute('for', 'default=checkbox')
//   itemLabel.classList.add('ml-2', 'text-sm', 'font-medium', 'text-black-900', 'dark:text-black-300')
//   itemLabel.innerText = 'Sample Item';

//   itemDiv.appendChild(itemInput);
//   itemDiv.appendChild(itemLabel);
//   }


  
// })