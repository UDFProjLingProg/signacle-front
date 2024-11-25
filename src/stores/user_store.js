
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

            if (localApiToken != '' && localLastLoginTime != '') {
                const currentTime = Date.now()
                const timeDifference = currentTime - parseInt(localLastLoginTime, 10)

                console.log(localLastLoginTime);
                console.log(typeof(localApiToken));
                
                if (timeDifference > 3 * 60 * 60 * 1000 || (localApiToken == "null" || timeDifference == null)) {
                    this.logout()
                }
                else {               
                    this.apiToken = localApiToken
                }
            }
        },

        saveUserToken(token) {
            const currentTime = Date.now
            localStorage.setItem('apiToken', token)
            localStorage.setItem('lastLoginTime', currentTime.toString())
            this.apiToken = token  
            this.lastLoginTime = currentTime  
        },

        logout() {
            localStorage.setItem('apiToken', '');
            localStorage.setItem('lastLoginTime', ''); // Remove o timestamp
            this.apiToken = null;
            this.lastLoginTime = null;
        }
    },
})