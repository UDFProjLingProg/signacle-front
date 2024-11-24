
export function useUsersComposable() {
    const userStore = piniaUserStore()

    async function getUsers() {
        try {
            const res = await $fetch('/users', {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${userStore.apiToken}`
                }
            })
    
            if (res) {
                return res
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function inviteUserByEmail(body) {
        try {
            await $fetch('/auth/register-user', {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'POST',
                body: body,
                headers: {
                    'Authorization': `Bearer ${userStore.apiToken}`
                }
            })
        } catch (e) {
            console.log(e);
        }
    } 

    async function signupNewUser(body) {
        try {
            await $fetch('/auth/register', {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'POST',
            })
        } catch (e) {
            console.log(e);
        }
    }

    async function deleteUserById(userId) {
        try {
            await $fetch(`/users/${userId}`, {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${userStore.apiToken}`
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    return {
        getUsers,
        inviteUserByEmail,
        deleteUserById,
        signupNewUser
    }
}