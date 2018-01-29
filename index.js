const md5  = require('md5');
const fs = require('fs');

fs.readFile('contacts.csv', 'utf8', (err, contents) => {
  const emails = contents.split('\n');
  const hashes = emails.map(md5);
  const str = hashes.join('\n');
  fs.writeFile('contacts_hashed.csv', str, (err) => {
    console.log(err);
  })
});
