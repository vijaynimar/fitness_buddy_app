import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Define the folder where uploaded files will be stored
const uploadDir = path.join(__dirname, '../uploads');

// Check if the uploads folder exists, and create it if it doesn't
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up the storage configuration for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Define where to store files
  },
  filename: (req, file, cb) => {
    // Name the file with a timestamp to avoid name collisions
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

export const uploadFile = upload.single('file'); // 'file' is the form field name
