import { writeFileSync } from 'fs';

const today = new Date().toISOString().split('T')[0];

const urls = [
    { loc: 'https://tom-fourneaux.fr/',                   changefreq: 'monthly', priority: '1.0' },
    { loc: 'https://tom-fourneaux.fr/competences',        changefreq: 'monthly', priority: '0.8' },
    { loc: 'https://tom-fourneaux.fr/projets',            changefreq: 'monthly', priority: '0.9' },
    { loc: 'https://tom-fourneaux.fr/me_contacter',       changefreq: 'monthly', priority: '0.8' },
    { loc: 'https://tom-fourneaux.fr/mentions_legales',   changefreq: 'monthly', priority: '0.2' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `    <url>
        <loc>${u.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${u.changefreq}</changefreq>
        <priority>${u.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

writeFileSync('public/sitemap.xml', xml);
console.log(`sitemap.xml generated — lastmod: ${today}`);
