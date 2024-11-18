
export const piniaUserStore = defineStore('piniaUser', {
    state: () => ({
        apiToken: ''
    }),

    actions: {
        saveUserToken(token) {
            this.apiToken = token
        }
    }
})