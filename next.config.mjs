export default {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/catalog',
        permanent: true, // ou false se não for permanente
      },
    ]
  },
}