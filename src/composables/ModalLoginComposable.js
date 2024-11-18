export function useModalComposable() {
    let loading = ref(false)
    let email = ref("")
    let password = ref("")
    const userStore = piniaUserStore()

    async function login(userEmail, userPassword, toast) {
        try {
            loading.value = true
        
            const body = {
                email: userEmail,
                password: userPassword
            }
    
            const res = await $fetch("/auth/authenticate", {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'POST',
                body: body
            })
    
            if (res.token) {
                userStore.saveUserToken(res.token)
            }
            loading.value = false
            toast.show()
        } catch(e) {
            loading.value = false
            toast.show()
        }   
    }

    return {
        email,
        password,
        loading,
        login
    }
}