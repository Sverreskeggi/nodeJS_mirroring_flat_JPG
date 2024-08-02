const fs = require('fs');

const Jimp = require('jimp') ;

async function reverseImageJpg(path, file) {
  console.log('input file: ', path + file);
  
  const image = await Jimp.read(`${path}${file}`);
  image.flip(true, false, function(err){
     if (err) throw err;
  })
  .write(`${path}mirror_${file}`);
}

const recurseFolder = async (path) => {
  fs.readdir(path, (err, files) => {
    if (err) throw err;
    
    for (let file of files) {
      fs.stat(`${path}${file}`, (errStat, status) => { 
        if (errStat) throw errStat;

        if (status.isFile()) {
            reverseImageJpg(path, file)
        } 
      });
    }
  });
}


recurseFolder('../oven/Печка вид/');
recurseFolder('../oven/Печка дополнительно/');
recurseFolder('../oven/Печка изменения для работы камина/');
recurseFolder('../oven/Печка порядовка/');