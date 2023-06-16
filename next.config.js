/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tasks',
        destination: 'http://host:port/task'
      },
      {
        source: '/create-task',
        destination: 'http://host:port/task'
      },
      {
        source: '/update-task/:id',
        destination: 'http://host:port/task/:id'
      },
      {
        source: '/delete-task/:id',
        destination: 'http://host:port/task/:id'
      }
    ]
  }
}

module.exports = nextConfig
