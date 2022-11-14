import request from '@/utils/request'

// const api_name = '/admin/vod/teacher'

export default {
    pageList(current,limit,searchObj) {
        return request({
            url: `/admin/vod/teacher/findQueryPage/${current}/${limit}`,
            method: 'post',
            data: searchObj
            // params
          })
    },

    removeTeacherId(id) {
        return request({
            url: `/admin/vod/teacher/remove/${id}`,
            method: 'delete'
          })
    },

    saveTeacher(teacher) {
        return request({
            url: `/admin/vod/teacher/saveTeacher`,
            method: 'post',
            data: teacher
          })
    },

    getTeacherById(id) {
        return request({
            url: `/admin/vod/teacher/getTeacher/${id}`,
            method: 'get'
          })
    },

    updateTeacher(teacher) {
        return request({
            url: `/admin/vod/teacher/updateTeacher`,
            method: 'post',
            data:teacher
          })
    },

    batchRemove(idList) {
        return request({
            url: `/admin/vod/teacher/removeBatch`,
            method: 'delete',
            data:idList
        })
    },

    list() {
        return request({
            url: `/admin/vod/teacher/findAll`,
            method: 'get'
        })
    }
}

