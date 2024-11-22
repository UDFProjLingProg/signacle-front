
export function useManageComposable() {
    const userStore = piniaUserStore()

    async function fetchAllCourses() {
        try {
            const response = await $fetch('/course/all', {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'GET'
            })

            if (response) {
                return response
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    async function deleteTopicById(id) {
        if (userStore.apiToken) {
            try {
                await $fetch(`/topics/${id}`, {
                    baseURL: useRuntimeConfig().public.backend_url,
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${userStore.apiToken}`,
                    }
                })
            }
            catch(e) {
                console.log(e);
            }
        }
    } 

    return {
        fetchAllCourses,
        deleteTopicById
    }
}