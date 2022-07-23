import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default {
    pafeList(current,limit,searchObj) {
        return request({
            url: `/admin/vod/teacher/findQueryPage/${current}/${limit}`,
            method: 'get',
            data: searchObj
            // params
          })
    }
}

