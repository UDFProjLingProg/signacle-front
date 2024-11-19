
export function useTopicoComposable() {
    let loading = ref(false)

    async function fetchTopicsById(idCourse) {
        try {
            loading.value = true
            
            const res = await $fetch(`/topics/courseid/${idCourse}`, {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'GET',
            })
    
            if (res) {
                loading.value = false
                return res
            }
        } catch(e) {
            console.log(e);
        }   
    }

    return {
        loading,
        fetchTopicsById
    }
}
