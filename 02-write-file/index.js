const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'text.txt');
const stream = fs.createWriteStream(file);
const { stdout, stdin } = process;

stdout.write('Введите текст');
stdin.on('data', chunk => {
  const text = chunk.toString();
  stream.write(chunk)
});