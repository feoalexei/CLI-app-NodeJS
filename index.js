const operations = require('./contacts');
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await operations.listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contact = await operations.getContactById(id);
      console.table(contact);
      break;

    case 'add':
      const newContact = await operations.addContact(name, email, phone);
      console.table(newContact);
      break;

    case 'remove':
      const deletedContact = await operations.removeContact(id);
      console.table(deletedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
