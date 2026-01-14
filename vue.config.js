// vue.config.js
const path = require('path');
// const config = require('./src/utils/config.js');

//引入path模块
function resolve(dir) {
	return path.join(__dirname, dir)
}
//扩充知识点
//__dirname 表示当前文件所在的目录的绝对路径
//__filename 表示当前文件的绝对路径
//module.filename ==== __filename 等价
//process.cwd() 返回运行当前脚本的工作目录的路径
//process.chdir() 改变工作目录
module.exports = {
//   publicPath: '/card/diy/',
  publicPath: './',
	//基本路径
	// baseUrl: '/gftg', // 根路径  ./表示静态相对路径  /项目/ 服务器上的相对路径 
	// baseUrl: '/card/diy/', // 根路径  ./表示静态相对路径  /项目/ 服务器上的相对路径 
	baseUrl: './', // 根路径  ./表示静态相对路径  /项目/ 服务器上的相对路径 
	//输出文件目录
	outputDir: 'dist', //构建输出目录
	assetsDir: 'assets', //静态资源目录（js,css,img,fonts）
	// use the full build with in-browser compiler? https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
	//	compiler: false,
	// eslint-loader 是否在保存的时候检查
	lintOnSave: false,

	// webpack配置 see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md 
	chainWebpack: (config) => { //设置路径别名
		config.resolve.alias
			.set('@', resolve('src'))
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'))
			.set('views', resolve('src/views'))
	},
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'development') {
			config.devtool = 'source-map'
			// mutate config for production...
		}
	},
	// vue-loader 配置项 https://vue-loader.vuejs.org/en/options.html
	//	vueLoader: {},  、、打开会报错
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: false,
	// css相关配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: process.env.NODE_ENV === 'development' ? false : true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {},
		// 启用 CSS modules for all css / pre-processor files.
		modules: false,
		loaderOptions: {
			postcss: {
				// 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
				plugins: [
					require("postcss-px2rem")({
						remUnit: 37.5
					})
				]
			}
		}
	},
	// use thread-loader for babel & TS in production build  enabled by default if the machine has more than 1 cores
	//	parallel: require('os').cpus().length > 1,
	// 是否启用dll See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
	//	dll: false,
	// PWA 插件相关配置  see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: { // 配置favicon
		iconPaths: {
			favicon32: 'favicon.ico',
			favicon16: 'favicon.ico',
			appleTouchIcon: 'favicon.ico',
			maskIcon: 'favicon.ico',
			msTileImage: 'favicon.ico'
		}
	},
	// webpack-dev-server 相关配置
	devServer: {
		//open: process.platform === 'darwin', //是否自动启动服务器
		open: true,
		// host: '172.20.10.3',
		port: 80,
		hotOnly: false,
		proxy: { //代理路径
			//配置跨域
			"/api": {
				target: "http://umvweb.goldpac.cn",   //测试环境
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}, 
		before: app => { }
	},
	// 第三方插件配置
	pluginOptions: {
		// ...
	}
}