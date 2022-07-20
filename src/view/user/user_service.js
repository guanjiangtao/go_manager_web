import service from "@/common/request";


export class UserService {

    /**
     * getUserById 根据Id获取用户信息
     * @param data 用户信息
     */
    static getUserById(data) {
        return service.request("GetUserById", data)
    }

    /**
     * deleteUserById
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static deleteUserById(data) {
        return service.request("GetUserById", data)
    }

    static getUserByPageDto(data) {
        return service.request("getUserByPageDto", data)
    }
}