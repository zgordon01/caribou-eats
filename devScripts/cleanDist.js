let rimraf = require('rimraf');

rimraf('./dist/', err => {
    if (err) {
        console.warn(err);
    }
    console.log('Deleted dist');
});
