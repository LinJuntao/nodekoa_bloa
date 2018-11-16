module.exports = {
    /**判断是否已经登录 */
    //已经登录
    checkLogin: (ctx) => {
        if (ctx.session && ctx.session.user) {
            ctx.redirect('/posts');
            return false;
        }
        return true;
    },
    //没有登录
    checkLoginNot: (ctx) => {
        if (!ctx.session || !ctx.session.user) {
            ctx.redirect('/signin');
            return false;
        }
        return true;
    }

}