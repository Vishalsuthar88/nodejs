const fs = require('fs');

// read file

// fs.readFile('./docs/docs1.txt', (err, data) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log(data.toString());
// })

// write file

// fs.writeFile('./docs/docs1.txt', 'hello, this file has been written', () =>{
//     console.log("file was written");
// })
// fs.writeFile('./docs/docs2.txt', 'hello, this file has been written again', () =>{
//     console.log("file was written");
// })

// directories

// if(!fs.existsSync('./newFolder')){

//     fs.mkdir('./newFolder', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("folder created");
//     })
// } else {
//     fs.rmdir('./newFolder', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Folder removed")
//     })
// }


// delete file

if(fs.existsSync('./docs/deletefile.txt')) {
    fs.unlink('./docs/deletefile.txt', (err)=>{
        if(err){
        console.log(err);
        }
    })
    console.log("file deleted")
}