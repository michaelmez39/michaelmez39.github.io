import { website } from '$lib/info';

export async function GET() {
    const headers = new Headers({
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    });
    const body: string = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
    <url>
      <loc>${website}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>${website}/about</loc>
      <changefreq>yearly</changefreq>
    </url>
    <url>
      <loc>${website}/projects</loc>
      <changefreq>yearly</changefreq>
    </url>
    <url>
      <loc>${website}/resume</loc>
      <changefreq>yearly</changefreq>
    </url>
    <url>
      <loc>${website}/thoughts</loc>
      <changefreq>monthly</changefreq>
    </url>
    </urlset>`;
    return new Response(body, {headers});
  }