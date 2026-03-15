export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
    },
    sitemap: 'https://delice-menu.vercel.app/sitemap.xml', // استبدل بالدومين الخاص بك
  }
}