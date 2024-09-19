const fs = require('fs');

const readStream = fs.createReadStream('./docs/docs3.txt', { encoding: 'utf8'})
const writeStream =fs.createWriteStream('./docs/docs4.txt');
// readStream.on('data', (chunk) =>{
//     console.log("-----------------------------------------New Chunk----------------------------------------------------------");
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK \n')
//     writeStream.write(chunk)
// })

//                      OR

readStream.pipe(writeStream)