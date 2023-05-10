export default defineEventHandler((event) => {
    return { msg: `Hello ${event.context.params?.name}!` }
})
