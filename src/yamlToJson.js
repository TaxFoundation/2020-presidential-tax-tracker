const yaml = require('js-yaml');
const fs = require('fs');

const dataDirectory = './src/data/';
const inputs = ['candidates', 'topics', 'plans'];

const updateData = input => {
  try {
    const doc = yaml.safeLoad(
      fs.readFileSync(`${dataDirectory + input}.yml`, 'utf8')
    );
    fs.writeFileSync(
      `${dataDirectory + input}.json`,
      JSON.stringify(doc, null, 2)
    );
    console.log(`${input}.json updated`);
  } catch (e) {
    console.log(`Data update for ${dataDirectory + input}.json failed: ${e}`);
  }
};

const beginTheWatch = input => {
  updateData(input);
  if (process.argv.includes('--watch')) {
    fs.watch(`${dataDirectory + input}.yml`, { encoding: 'utf8' }, () => {
      console.log(`Updating ${dataDirectory + input}.json data...`);
      updateData(input);
    });
  }
};

console.log('Removing old data.');
inputs.forEach(input => {
  fs.access(`${dataDirectory + input}.json`, err => {
    if (err) {
      console.log(
        `No ${dataDirectory + input}.json found, creating from scratch.`
      );
      beginTheWatch(input);
    } else {
      fs.unlink(`${dataDirectory + input}.json`, err => {
        if (err) throw err;
        console.log(`Old ${dataDirectory + input}.json deleted.`);
        beginTheWatch(input);
      });
    }
  });
});
