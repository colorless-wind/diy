'use strict'

import axios from 'axios'
import Toasted from 'vue-toasted';
import Vue from 'vue'
import router from '../router.js'
const config = require('./config.js')
let Base64 = require('js-base64').Base64;
import md5 from 'js-md5';
let sha256 = require("js-sha256").sha256
import CryptoJS from 'crypto-js'
import { uuid } from 'vue-uuid';
axios.interceptors.request.use(config => {
    // loading
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

function checkStatus(response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        
        return response.data
        // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    // 异常状态下，把错误信息返回去
    if(!response){
        return {
            status: -404,
            msg: '请求终止'
        }
    }
    return {
        status: -404,
        msg: '网络异常'
    }
}

function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        Vue.toasted.show(res.msg, {
          theme: "toasted-primary",
          position: "center",
          duration: 2000,
        });
    }
    if (res.data && (!res.data.success)) {
        //console.log(res.data.resultmsg)
    }
    return res
}
const appid = 'abc-management'; //appid 正式环境
const secret = '12345678'; //秘钥 正式环境
export default {
    post(url, data,that) {
        const CancelToken = axios.CancelToken;
        const timestamp = Date.parse(new Date())
        const nonce = uuid.v1()
        const appid_obj={
            'appid':appid,
            'nonce':nonce,
            'timestamp':timestamp
        }
        var SIGN_Data = {}
        var SIGN = ''
        // 生成签名
        if(data)SIGN_Data = JSON.parse(JSON.stringify(data))
        if(data instanceof FormData){
            var jsonData = {};
            data.forEach((value, key) =>{
            // jsonData[key] = value
             if(key!='file')jsonData[key] = value
            })
            SIGN_Data = jsonData
        }
        Object.assign(SIGN_Data,appid_obj)
        var newkey = Object.keys(SIGN_Data).sort();
        for (var i = 0; i < newkey.length; i++) {
            var _and = '&'
            if(i==newkey.length-1)_and=''
            SIGN = SIGN + newkey[i]+'='+ SIGN_Data[newkey[i]]+_and
        }
        // console.log(SIGN)
        let SIGNS = Base64.encode(SIGN); // base64 转码
        let hash = CryptoJS.HmacSHA256(SIGNS,secret);
        SIGNS =CryptoJS.enc.Hex.stringify(hash);
        // SIGNS = sha256(SIGNS,secret)
        console.log(SIGNS)
        return axios({
            method: 'post',
            baseURL: config.HOST,
            url,
            data: data,
            timeout: 20000,
            // headers: {
            //     'timestamp':timestamp,
            //     "appid": appid,
            //     'nonce':nonce,
            //     "signature": SIGNS,
            // },
            cancelToken: new CancelToken(function executor(c) {
                if(that)that.cancel = c;
            })
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
    get(url, params) {
        const CancelToken = axios.CancelToken;
        const timestamp = Date.parse(new Date())
        const nonce = uuid.v1()
        const appid_obj={
            'appid':appid,
            'nonce':nonce,
            'timestamp':timestamp
        }
        var SIGN = ''
        var SIGN_Data = {}
        // // 生成签名
        if(params)SIGN_Data = JSON.parse(JSON.stringify(params))
        if(params instanceof FormData){
            var jsonData = {};
            SIGN_Data.forEach((value, key) => jsonData[key] = value)
            SIGN_Data = jsonData
        }
        Object.assign(SIGN_Data,appid_obj)
        var newkey = Object.keys(SIGN_Data).sort();
        for (var i = 0; i < newkey.length; i++) {
            var _and = '&'
            if(i==newkey.length-1)_and=''
            SIGN = SIGN + newkey[i]+'='+ SIGN_Data[newkey[i]]+_and
        }
        console.log(SIGN)
        let SIGNS = Base64.encode(SIGN); // base64 转码
        let hash = CryptoJS.HmacSHA256(SIGNS,secret);
        SIGNS =CryptoJS.enc.Hex.stringify(hash);
        // SIGNS = sha256(SIGNS)
        console.log(SIGNS)
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                baseURL: config.GET,
                url,
                // headers:{
                //     'timestamp':timestamp,
                //     "appid": appid,
                //     'nonce':nonce,
                //     "signature": SIGNS,
                // },
                params: params,
                timeout: 20000,
            }).then(
                (response) => {
                    resolve(response)
                    return checkStatus(response)
                }
            ).then(
                (res) => {
                    return checkCode(res)
                }
            )
        })
    }
}