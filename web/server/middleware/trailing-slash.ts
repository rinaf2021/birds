export default defineEventHandler((event) => {
  const rawPath = event.path

  if (
    rawPath.startsWith('/api') ||
    rawPath.includes('.') ||
    rawPath === '/'
  ) {
    return
  }

  let cleanPath = rawPath.replace(/\/{2,}/g, '/')

  if (cleanPath !== '/' && !cleanPath.endsWith('/')) {
    cleanPath = `${cleanPath}/`
  }

  if (rawPath !== cleanPath) {
    return sendRedirect(event, cleanPath, 301)
  }
})