const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, '/db/contacts.json');
// Path using resolve()
// const contactsPathResolve = path.resolve('./db/contacts.json');

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

console.log(contactsPath);
console.log(contactsPathResolve);
