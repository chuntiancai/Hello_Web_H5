export default defineEventHandler((event) => {
    console.log('请求了nuxt的login～',event._path)
    return {
      hello: 'world login'
    }
  })