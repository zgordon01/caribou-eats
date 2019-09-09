let rimraf = require('rimraf');

rimraf('./dev-dist/', err => {
    if (err) {
        console.warn(err);
    }
    console.log('Deleted dev-dist');
});
