/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tasks',
        destination: 'http://localhost:3001/task'
      },
      {
        source: '/create-task',
        destination: 'http://localhost:3001/task'
      },
      {
        source: '/update-task/:id',
        destination: 'http://localhost:3001/task/:id'
      },
      {
        source: '/delete-task/:id',
        destination: 'http://localhost:3001/task/:id'
      }
    ]
  }
}

module.exports = nextConfig
