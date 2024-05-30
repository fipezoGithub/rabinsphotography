const multer = require("multer");

const avatarUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const fileName = file.originalname.replace(/\s+/g, "");
      cb(null, file.fieldname + "-" + uniqueSuffix + "-" + fileName);
    },
  }),
}).single("avatar");

module.exports = avatarUpload;
