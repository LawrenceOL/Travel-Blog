const { Router } = require('express');
const controllers = require('../controllers')
const PostSchema = require('../models/recipes')
const router = Router();

router.get('/', (req, res) => res.send('This is root server page!'))
router.get('/api/post', controllers.getAllPosts)
router.get('/api/comment', controllers.getAllComments)
router.post('/api/comment' , controllers.addComment)

module.exports = router;