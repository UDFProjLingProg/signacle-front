
export const piniaUserStore = defineStore('piniaUser', {
    state: () => ({
        apiToken: null,
        lastLoginTime: null
    }),

    actions: {
        checkUserToken() {
            const localApiToken = localStorage.getItem('apiToken')
            const localLastLoginTime = localStorage.getItem('lastLoginTime')
            console.log(typeof(localApiToken))
            console.log(typeof(this.apiToken))
            

            if (localApiToken != '' && localLastLoginTime != '') {
                console.log("Passou da validação");
                console.log(localApiToken);
                console.log(localLastLoginTime);
                const currentTime = Date.now()
                const timeDifference = currentTime - parseInt(localLastLoginTime, 10)

                if (timeDifference > 3 * 60 * 60 * 1000) {
                    console.log("Logout");
                    this.logout()
                }
                else {
                    console.log("Ta tudo certo");
                    
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