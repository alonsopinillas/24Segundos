import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles');
  const sorted = articles.sort((a, b) =>
    new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );

  return rss({
    title: '24 Segundos · Noticias NBA en Español',
    description: 'El mejor sitio de noticias NBA en español. Resultados, análisis, traspasos y estadísticas.',
    site: context.site,
    items: sorted.map(article => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: `/noticias/${article.slug}/`,
      categories: [article.data.category],
      author: article.data.author,
    })),
    customData: `<language>es</language>`,
  });
}
