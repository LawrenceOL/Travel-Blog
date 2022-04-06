const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root server page!'))
router.get('/posts', controllers.getAllPosts)
router.get('/posts/:id', controllers.getPostById)
router.post('/comment', controllers.addComment)

module.exports = router
