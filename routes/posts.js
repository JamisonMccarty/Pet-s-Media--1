const express = require('express')
const router = express.Router()
const multer = require("multer")
const upload = multer({ dest: "public/uploads/" })
const { storage } = require("../middleware/multer")
const postsController = require('../controllers/posts') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Post Routes
router.get("/:id", ensureAuth, postsController.getPost)

router.post("/createPost", upload.single("file"), postsController.createPost)

// These need to be created in the post controller before being put here or else it all breaks -JM

// router.put("/likePost/:id", postsController.likePost)

// router.delete("/deletePost/:id", postsController.deletePost)

module.exports = router
