const { exec } = require("child_process");
novavariavel = "valor teste";

exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    //console.log(`stdout: ${stdout}`);
    novavariavel =(`stdout: ${stdout}`);
    console.log(novavariavel)
});


