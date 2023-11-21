//MARK: == 文章编辑页面 的渲染逻辑.js ==

// 将数据库文章集合的构造函数导入到当前文件中
import { Article } from '../../model/articleDB.js'

export default async function article_edit(req, res){

	// 标识 标识当前访问的是文章管理页面
	req.app.locals.currentLink = 'article';


	// 获取到地址栏中的id参数
	const { message, id } = req.query;

	// 如果当前传递了id参数
	if (id) {
		// 修改操作
		let user = await Article.findOne({_id: id});

		// 渲染用户编辑页面(修改)
		res.render('admin/article-edit.art', {
			message: message,
			user: user,
			link: '/admin/article-edit?id=' + id,
			button: '修改'
		});

	}else {
		// 添加操作
		res.render('admin/article-edit', {
			message: message,
			link: '/admin/article-edit',
			button: '添加'
		});
	}

}