
//生产
// const proxyUrl =  process.env.NODE_ENV === 'development' ? 'http://umvweb.goldpac.cn':'http://umvweb.goldpac.cn'; 
// const getUrl =  process.env.NODE_ENV === 'development' ? 'http://umvweb.goldpac.cn':'http://umvweb.goldpac.cn'; 
// const proxyUrl =  process.env.NODE_ENV === 'development' ? 'https://show.umvcard.com/gftgapi':'https://show.umvcard.com/gftgapi'; 
// const getUrl =  process.env.NODE_ENV === 'development' ? 'https://show.umvcard.com/gftgapi':'https://show.umvcard.com/gftgapi'; 
// const proxyUrl =  process.env.NODE_ENV === 'development' ? 'http://10.165.60.116:9501':'http://10.165.60.116:9501'; 
// const getUrl =  process.env.NODE_ENV === 'development' ? 'http://10.165.60.116:9501':'http://10.165.60.116:9501'; 

// const proxyUrl =  process.env.NODE_ENV === 'development' ? 'http://10.165.60.39:9501':'http://10.165.60.39:9501'; 
// const getUrl =  process.env.NODE_ENV === 'development' ? 'http://10.165.60.39:9501':'http://10.165.60.39:9501'; 

// const proxyUrl =  process.env.NODE_ENV === 'development' ? 'http://10.165.60.116:9501':'http://10.165.60.116:9501'; 
// const getUrl =  process.env.NODE_ENV === 'development' ? 'http://10.165.60.116:9501':'http://10.165.60.116:9501'; 

// const proxyUrl =  process.env.NODE_ENV === 'development' ? 'https://cpc.goldpac.cn/dpApi':'https://cpc.goldpac.cn/dpApi'; 
// const getUrl =  process.env.NODE_ENV === 'development' ? 'https://cpc.goldpac.cn/dpApi':'https://cpc.goldpac.cn/dpApi'; 

// const proxyUrl =  process.env.NODE_ENV === 'development' ? 'http://10.165.60.116:19903':'http://10.165.60.116:19903'; 
// const getUrl =  process.env.NODE_ENV === 'development' ? 'http://10.165.60.116:19903':'http://10.165.60.116:19903'; 
const runtimeConfig = (typeof window !== 'undefined' && window.config) ? window.config : {};
const proxyUrl = runtimeConfig.baseUrl || 'https://cpc.goldpac.cn/cardGatewaybackend/gateway/api'; 
const getUrl = proxyUrl; 

const apiMode = runtimeConfig.apiMode || 'real'; // real | demo
const demoDelayMs = runtimeConfig.demoDelayMs || 300;
const demoImageBaseUrl = runtimeConfig.demoImageBaseUrl || '';
// const imageBaseUrl = apiMode === 'demo' ? demoImageBaseUrl : 'http://10.165.60.116:8443';
const imageBaseUrl = apiMode === 'demo' ? demoImageBaseUrl : (runtimeConfig.baseImageUrl || 'https://cpc.goldpac.cn');

/**@event 本地跨域  */
const HOST = process.env.NODE_ENV === 'development' ? proxyUrl : proxyUrl
const GET = process.env.NODE_ENV === 'development' ? getUrl : getUrl

/**@event 抛出  */
module.exports.proxyUrl = proxyUrl
module.exports.HOST = HOST
module.exports.GET = GET
module.exports.isDev = false  //vconsole 开关
module.exports.edition = 'v1.0';  //版本号
module.exports.apiMode = apiMode
module.exports.demoDelayMs = demoDelayMs
module.exports.demoImageBaseUrl = demoImageBaseUrl
module.exports.imageBaseUrl = imageBaseUrl
module.exports.isDemo = apiMode === 'demo'