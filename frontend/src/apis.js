const baseUrl = 'http://localhost:8000/';

const chnnelApi = baseUrl + 'api/v1/channel';
const categoryApi = baseUrl + 'api/v1/category';
const userApi = baseUrl + 'api/v1/user';
const notificationApi = baseUrl + 'api/v1/notification';
const notificationByUserApi = (id) => baseUrl + 'api/v1/notification/'+id;


export {
    chnnelApi,
    userApi,
    categoryApi,
    notificationApi,
    notificationByUserApi
}