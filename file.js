var fs = require('fs');

// fs file system
// cria arquivo

/*fs.writeFile('data.txt',"Hello word exemplo create file", function(err){
  if(err){
    throw err;
  }
});*/

// ler arquivo

/* fs.readFile('data.txt',function(err,data){
  if(err){
    throw err;
  }

  console.log(data.toString('utf8'));
})*/

// ler todos arquivos do diretorio setado.

/*fs.readdir('.',function(error,files){
  if(error){
    throw err;
  }
  for(var file in files){
    console.log(files[file]);
  }
})*/

// Ler todos arquivos do diretorio setado com base no filter
fs.readdirSync('.').filter(function(file){
  return (file.endsWith('.js'));
}).forEach(function(file){
  console.log(file);
})
