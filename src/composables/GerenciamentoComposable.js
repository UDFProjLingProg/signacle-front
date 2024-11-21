
export function useGerenciamentoComposable() {
    const userStore = piniaUserStore()

    async function fetchAllData() {
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
        try {
            await $fetch(`/topics/${id}`, {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${userStore.getApiToken}`,
                }
            })
        }
        catch(e) {
            console.log(e);
        }
    } 

    return {
        fetchAllData,
        deleteTopicById
    }
}