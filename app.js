const prompt = require('prompt');
prompt.get(['name', 'age'], (err, result) => {
    console.log(result.name);
    console.log(result.age);
})