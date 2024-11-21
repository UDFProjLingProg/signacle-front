
export function useTopicoComposable() {
    const loading = ref(false)
    const toastStore = piniaToastStore()
    const userStore = piniaUserStore()

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

    async function fetchTopicContent(topicId, toast) {
        loading.value = true

        try {
            const res = await $fetch(`/sign/topic-id/${topicId}`, {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'GET',
            })

            if (res) {
                loading.value = false
                console.log(res);
                
                toastStore.setToast('Conteúdos buscados com sucesso!', 'success')
                toast.show()
                return res
            }

            loading.value =  false
        } catch (e) {
            loading.value =  false
            toastStore.setToast('Erro ao buscar conteúdos!', 'danger')
            toast.show()
        }
    }

    async function addNewSignToTopic(signBody, toast) {
        loading.value = false
        const userToken = userStore.apiToken

        try {
            const res = await $fetch('/sign', {
                baseURL: useRuntimeConfig().public.backend_url,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${userToken}` 
                },
                body: signBody
            })

            if (res) {
                loading.value = false
                toastStore.setToast('Conteúdo adicionado com sucesso!', 'success')
                toast.show()
            }
            
            loading.value =  false
        } catch (e) {
            console.log(e);
            
            loading.value =  false
            toastStore.setToast('Erro ao adicionar conteúdo!', 'danger')
            toast.show()
        }
    }

    return {
        loading,
        fetchTopicsById,
        fetchTopicContent,
        addNewSignToTopic
    }
}
