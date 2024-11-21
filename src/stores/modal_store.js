export const piniaModalStore = defineStore('modalStore', {
    state: () => ({
        idTopic: '',
        idCourse: '',
    }),

    actions: {
        saveIdTopic(id) {
          this.idTopic = id  
        },

        saveIdCourse(id) {
            this.idCourse = id
        },

        clearIds() {
            this.idCourse = '',
            this.idTopic = ''
        }
    }
}) 