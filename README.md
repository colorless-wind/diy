# 农业银行宠物卡

## 运行
```
npm install
npm run serve
```
## 打包
```
npm run build
```

### config配置
```
const imgUrl = 'https://aeweb.goldpac.cn';  //生产服务器
//生产
const proxyUrl =  process.env.NODE_ENV === 'development' ? '/api':'https://aeweb.goldpac.cn'; 
const getUrl =  process.env.NODE_ENV === 'development' ? '/api':'https://aeweb.goldpac.cn'; 

//网申
const keyurl = 'https://wx.abchina.com/CreditCard/netBank/webank/applyCard.aspx?id=null&q=direct&'  //生产地址
```

### 版本日志

v2.1  2021/6/8

### 项目地址
https://aeweb.goldpac.cn
