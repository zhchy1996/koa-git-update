const exec = require('child_process').exec
const send = require('../lib/send-mail');

exec('bash ../sh/build.sh',(err,stdout,stderr) => {
    if (stderr || err) {
        console.error(stderr || err)
        send('error', stderr)
    } else {
        console.log(stdout)
    }
});