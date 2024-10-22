/**
 * Middleware que força o scroll até o topo da página nas mudanças de rota, se necessário.
 */
export default defineNuxtRouteMiddleware((to, from) => {
  useNuxtApp().hook('page:finish', () => {
    // Executando apenas no navegador (client)
    if (to.path !== from.path && process.client) {
      // Se o usuário clicou em Voltar, rola a página anterior até o ponto onde estava
      if (history.state.scroll) {
        window.scrollTo(history.state.scroll)
      } else {
        window.scrollTo(0, 0)
      }
    }
  })
})
