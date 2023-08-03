// select all the elements from the document
let form = document.querySelector('form');
let ul = document.querySelector('ul');

// create label elements
let nameLabel = document.createElement('label');
let contactLabel = document.createElement('label');

// create input elements
let nameInput = document.createElement('input');
let contactInput = document.createElement('input');

// create div elements
let nameDiv = document.createElement('div');
let contactDiv = document.createElement('div');

// create button element
let btn = document.createElement('button');

// set attributes on elements
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Please, Enter Your Babes Name');
nameInput.setAttribute('required', "");
nameInput.setAttribute('name', 'name');

// set attributes on the contact element
contactInput.setAttribute('type', 'number');
contactInput.setAttribute('placeholder', 'Enter Your Babes Phone Number');
contactInput.setAttribute('name', 'contact');
contactInput.setAttribute('required', '');

// add text to the labels
nameLabel.innerText = 'Babes Name';
contactLabel.innerText = 'Babes Contact';

// add text to the buttons
btn.innerText = 'Add Babes';

// attach the created element to the form
nameLabel.appendChild(nameInput);
nameDiv.appendChild(nameLabel);

contactLabel.appendChild(contactInput);
contactDiv.appendChild(contactLabel);

form.appendChild(nameDiv);
form.appendChild(contactDiv);
form.appendChild(btn);

// create babes element
let createBabes = (name, contact) => {
  let babesItem = document.createElement('li');
  let babesHeading = document.createElement('h2');
  let babesPara = document.createElement('p');
  let babesBtn = document.createElement('button');

  // add content to the element
  babesHeading.textContent = name;
  babesPara.textContent = contact;
  babesBtn.textContent = 'Remove Babes';

  // add class to the button
  babesBtn.setAttribute('class', 'removeBtn');

  // attach the element to the DOM
  babesHeading.appendChild(babesPara);
  babesItem.appendChild(babesHeading);
  babesItem.appendChild(babesBtn);
  ul.appendChild(babesItem);

  // remove item from klist on button click
  removeBabes(babesItem, babesBtn);
};

// clear form field when submitting
let clearForm = () => {
  form.reset();
};

// get the value from input on btn click
let handleFormSubmit = (event) => {
  event.preventDefault();
  let babesName = event.currentTarget.name.value;
  let babesContact = event.currentTarget.contact.value;

  // call create items
  createBabes(babesName, babesContact);

  // Clear field values
  clearForm();
};

// submit form
form.addEventListener('submit', (e) => handleFormSubmit(e));

// remove babes on the button click
let removeBabes = (item, btn) => {
  btn.addEventListener('click', () => {
    ul.removeChild(item);
  });
};


// css styling
let body = document.querySelector('body');
body.setAttribute('class', 'body_container');

nameInput.setAttribute('class', 'inputFields');
contactInput.setAttribute('class', 'inputStyling');

// label styling
nameLabel.setAttribute('class', 'labelContent');
contactLabel.setAttribute('class', 'labelContent');

btn.setAttribute('class', 'addBtn');

