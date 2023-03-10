const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, '/db/contacts.json');

// Alternate path using resolve()
// const contactsPath = path.resolve('./db/contacts.json');

// Operations
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const contactById = contacts.find((contact) => contact.id === id);
  return contactById;
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);

  const contactToDelete = contacts[index];

  if (index > 0) {
    contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
  }
  return contactToDelete;
};

const addContact = async (name, email, phone) => {
  const newContact = { id: nanoid(4), name, email, phone };
  const contacts = await listContacts();
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
