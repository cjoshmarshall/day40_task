const createFolder=(dirPath)=>{
    fs.mkdirSync(process.cwd()+dirPath,{recursive:true},(err)=>{
        if(err){
            console.error("An error occurred",err);
        }else{
            console.log("Your Folder is created");
        }
    })
}

const createFile=(filePath,fileContent)=>{
    fs.writeFile(filePath,fileContent,(err)=>{
        if(err){
            console.error("An error occurred",err);
        }else{
            console.log("Your File is created");
        }
    })
}

const path="/my-new-folder/and-my-extra-folder";
const content="content of my new file"

createFolder(path);
createFile(path,content);