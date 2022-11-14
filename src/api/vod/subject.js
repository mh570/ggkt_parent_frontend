import request from '@/utils/request'

// const api_name = '/admin/vod/teacher'

export default {
    getChildList(id) {
        return request({
            url: `/admin/vod/subject/getChildSubject/${id}`,
            method: 'get'
          })
    }
}

