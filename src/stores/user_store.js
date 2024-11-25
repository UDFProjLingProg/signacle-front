
export const piniaUserStore = defineStore('piniaUser', {
    state: () => ({
        apiToken: null,
        lastLoginTime: null,
        currentUserDetails: {}
    }),

    actions: {
        checkUserToken() {
            const localApiToken = localStorage.getItem('apiToken')
            const localLastLoginTime = localStorage.getItem('lastLoginTime')
            const jsonUser = localStorage.getItem('currentUserDetails')
            const localCurrentUserDetauls = JSON.parse(jsonUser)
            

            if (localApiToken != '' && localLastLoginTime != '' && localCurrentUserDetauls != '') {
                const currentTime = Date.now()
                const timeDifference = currentTime - parseInt(localLastLoginTime, 10)
                
                if (timeDifference > 3 * 60 * 60 * 1000 || (localApiToken == "null" || timeDifference == null)) {
                    this.logout()
                }
                else {               
                    this.apiToken = localApiToken
                    this.currentUserDetails = localCurrentUserDetauls
                }
            }
        },

        saveUserToken(token, userDetails) {
            const currentTime = Date.now()
            localStorage.setItem('apiToken', token)
            localStorage.setItem('lastLoginTime', currentTime)
            localStorage.setItem('currentUserDetails', JSON.stringify(userDetails))
            this.apiToken = token  
            this.lastLoginTime = currentTime  
            this.currentUserDetails = userDetails
        },

        logout() {
            localStorage.setItem('apiToken', '');
            localStorage.setItem('lastLoginTime', ''); // Remove o timestamp
            localStorage.setItem('currentUserDetails', ''); // Remove o timestamp
            this.apiToken = null;
            this.lastLoginTime = null;
        }
    },
})