const yaml = require('js-yaml');
const fs = require('fs');

const dataDirectory = './src/data/';
const generatedDataDirectory = './src/generatedData/';
const inputs = ['candidates', 'topics', 'plans'];

const updateData = input => {
  try {
    const doc = yaml.safeLoad(
      fs.readFileSync(`${dataDirectory + input}.yml`, 'utf8')
    );
    fs.writeFileSync(
      `${generatedDataDirectory + input}.json`,
      JSON.stringify(doc, null, 2)
    );
    console.log(`New ${input}.json generated`);
  } catch (e) {
    console.log(`Data update for ${input}.json failed: ${e}`);
  }
};

const beginTheWatch = input => {
  updateData(input);
  if (process.argv.includes('--watch')) {
    console.log(`Watching ${input}.yml for changes...`);
    fs.watch(`${dataDirectory + input}.yml`, { encoding: 'utf8' }, () => {
      console.log(`Updating ${dataDirectory + input}.json data...`);
      updateData(input);
    });
  }
};

console.log('Removing old data.');
fs.access(generatedDataDirectory, err => {
  if (err) {
    fs.mkdirSync(generatedDataDirectory);
  }
});

inputs.forEach(input => {
  fs.access(`${generatedDataDirectory + input}.json`, err => {
    if (err) {
      console.log(`No ${input}.json found, creating from scratch.`);
      beginTheWatch(input);
    } else {
      fs.unlink(`${generatedDataDirectory + input}.json`, err => {
        if (err) throw err;
        console.log(`Old ${input}.json deleted.`);
        beginTheWatch(input);
      });
    }
  });
});
