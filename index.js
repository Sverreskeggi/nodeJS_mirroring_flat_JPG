const { log } = require('console');
const fs = require('fs');
// const Jimp = require('jimp') ;

// async function reverseImageJpg(saveFile) {
//   const image = await Jimp.read('0ov4a.jpg');
//   image.flip(true, false, function(err){
//      if (err) throw err;
//   })
//   .write(`mirror_${saveFile}`);
// }

const recurseFolder = (path) => {
  fs.readdir(path, (err, files) => {
    if (err) throw err;
    
    for (let file of files) {
      fs.stat(path, (errStat, status) => { 
        if (errStat) throw errStat;

        if (status.isDirectory()) {
          console.log(`Folder: ${file}`);
          recurseFolder(`${path}/${file}`);
        } else {
          console.log(`File: ${file}`);
        }
      });
    }
  });
}

recurseFolder('oven/');