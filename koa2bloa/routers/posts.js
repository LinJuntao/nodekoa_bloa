const router = require('koa-router')();
const controll = require('../controll/c_posts.js')

// 重置到文章页
router.get('/', controll.getRedirectPosts)
// 文章页
router.get('/posts', controll.getPosts)
// 首页分页，每次输出10条
router.post('/posts/page', controll.postPostsPage)
// 个人文章分页，每次输出10条
router.post('/posts/self/page', controll.postSelfPage)
// 单篇文章页
router.get('/posts/:postId', controll.getSinglePosts)
// 发表文章页面
router.get('/create', controll.getCreate)
// post 发表文章
router.post('/create', controll.postCreate)
// 发表评论
router.post('/:postId', controll.postComment)
// 编辑单篇文章页面
router.get('/posts/:postId/edit', controll.getEditPage)
// post 编辑单篇文章
router.post('/posts/:postId/edit', controll.postEditPage)
// 删除单篇文章
router.post('/posts/:postId/remove', controll.postDeletePost)
// 删除评论
router.post('/posts/:postId/comment/:commentId/remove', controll.postDeleteComment)
// 评论分页
router.post('/posts/:postId/commentPage', controll.postCommentPage)

module.exports = router