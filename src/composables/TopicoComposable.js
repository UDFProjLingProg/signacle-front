
export function useTopicoComposable() {
    let loading = ref(false)

    async function fetchTopicsById(idCourse) {
        try {
            loading.value = true
            
            const res = await $fetch(`/topics/course-id/${idCourse}`, {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'GET',
            })
    
            if (res) {
                loading.value = false
                return res
            }

            loading.value = false
        } catch(e) {
            console.log(e);
        }   
    }

    return {
        loading,
        fetchTopicsById
    }
}
