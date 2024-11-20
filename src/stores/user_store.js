
export const piniaUserStore = defineStore('piniaUser', {
    state: () => ({
        apiToken: null
    }),

    actions: {
        checkUserToken() {
            const localApiToken = localStorage.getItem('apiToken')
            if (localApiToken) {
                this.apiToken = localApiToken
            }
        },

        saveUserToken(token) {
            localStorage.setItem('apiToken', token)
            this.apiToken = token  
        },

        logout() {
            localStorage.setItem('apiToken', null)
            this.apiToken = null
        }
    },
})