import { getCollection } from 'astro:content';
import { teams } from '../lib/teams.js';

export async function GET(context) {
  const articles = await getCollection('articles');
  const site = context.site?.toString().replace(/\/$/, '') || 'https://24segundos.netlify.app';

  const staticPages = [
    '',
    '/noticias',
    '/equipos',
    '/estadisticas',
    '/clasificaciones',
    '/calendario',
    '/categoria/nba',
    '/categoria/rumores',
    '/categoria/traspasos',
    '/categoria/playoffs',
    '/categoria/draft',
    '/categoria/opinion',
  ];

  const articleUrls = articles.map(a => ({
    loc: `${site}/noticias/${a.slug}/`,
    lastmod: new Date(a.data.date).toISOString().split('T')[0],
  }));

  const teamUrls = teams.map(t => ({
    loc: `${site}/equipos/${t.id.toLowerCase()}/`,
  }));

  const staticUrls = staticPages.map(p => ({ loc: `${site}${p}` }));

  const all = [...staticUrls, ...articleUrls, ...teamUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(u => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
