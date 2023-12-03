import multer from "multer";

const maxSize = 2* 1024 * 1024;

let storage = multer.diskStorage({

    destination: (req, file, callback)=>{
        callback(null, __dirname+"/uploads");
    },

    filename(req, file, callback) {
        console.log(file.originalname);
        callback(null, file.originalname);
    },




});

export const uploadFile = multer({
    storage: storage,
    limits: {fileSize: maxSize}
})