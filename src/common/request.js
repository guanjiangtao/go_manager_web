import axios from 'axios';
import qs from 'qs';

const path = "http://localhost:8080/v1/manager/";

axios.defaults.withCredentials = true; //意思是携带cookie信息,保持session的一致性

/**
 * 基础请求服务
 */
class Request {

    createAxios(url, headers = {}) {
        this.axios = axios.create({
            timeout: 10000,
            headers: headers,
        })
    }

    async request(url, data, type = 'GET', isFile = false) {
        let headers = {};
        if (type.toUpperCase() === 'POST') {
            headers = {
                'Content-Type': isFile ? 'multipart/form-data' : 'application/x-www-form-urlencoded'
            }
        }
        // 文件下载单独处理
        if (type.toUpperCase() === 'GET' && isFile) {
            headers = {
                'Content-Type': 'multipart/form-data',
            }
            this.createAxios();
            return await this.file(url);
        }

        this.createAxios(headers);
        // 防止匹配失败
        if (type.toUpperCase() === 'GET') {
            const requestUrl = qs.stringify(data);
            if (requestUrl === '') {
                return await this.get(url);
            }
            return await this.get(`${url}?${requestUrl}`);
        }
        return await this.post(url, data);
    }

    /**
     * get方法
     */
    async get(url) {
        return await axios.get(path + url);
    }
    /**
     * post方法
     */
    async post(url, data) {
        return await axios.post(path + url, data);
    }

    async file(url) {
        return axios({
            method: 'get',
            url: path + url,
            responseType: 'blob',
        });
    }
}


const service = new Request();

export default service;