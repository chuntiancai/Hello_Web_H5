//MARK: == 文章编辑页面 的渲染逻辑.js ==

export default async function article_edit(req, res){

	// 标识 标识当前访问的是文章管理页面
	req.app.locals.currentLink = 'article';

	res.render('admin/article-edit.art');
}