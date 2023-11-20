//MARK: == 文章列表页面 的渲染逻辑.js ==

// 将文章集合的构造函数导入到当前文件中
import { Article } from '../../model/articleDB.js'
// 导入mongoose-sex-page模块,实现数据库的分页功能
import pagination from 'mongoose-sex-page'

export default async function article(req, res){
	// 接收客户端传递过来的页码
	const page = req.query.page;

	// 标识 标识当前访问的是文章管理页面
	req.app.locals.currentLink = 'article';

	// page 指定当前页
	// suze 指定每页显示的数据条数
	// display 指定客户端要显示的页码数量
	// exec 向数据库中发送查询请求
	// 查询所有文章数据
	let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();

	// res.send(articles);

	// 渲染文章列表页面模板
	res.render('admin/article.art', {
		articles: articles
	});
}