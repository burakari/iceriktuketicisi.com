# regaipogretmen.com — v2

Statik site (HTML + CSS + az JS). Derleme gerektirmez; bu klasörün içeriğini olduğu gibi yayınlayın.

## GitHub Pages
1. Bu klasörün İÇERİĞİNİ reponun köküne yükleyin (`CNAME`, `.nojekyll`, `favicon.ico` dahil). Eski sürümün dosyalarını tamamen silip yenisini koyun.
2. Settings → Pages → Branch: `main` / `(root)`.
3. DNS: `regaipogretmen.com` için GitHub Pages A kayıtları, `www` için CNAME. Ardından “Enforce HTTPS”.

## Yayından sonra
- Google Search Console → `https://regaipogretmen.com/sitemap.xml` gönderin.
- Google Business Profile (hizmet bölgeli işletme: Eskişehir) açın, web sitesi olarak bu adresi girin, logo olarak `icon-512.png` kullanın.
- GA4 ölçüm kimliği alındığında her sayfanın `<head>` kısmındaki yorum satırının yerine etiketi ekleyin.

## Marka dosyaları
- `/assets/brand/logo.svg`, `logo-beyaz.svg`, `isaret.svg`
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`, `site.webmanifest`
- Her sayfanın paylaşım görseli: `/assets/og/*.png` (WhatsApp ve sosyal medya önizlemesi)

## Yapı
- `/` ana sayfa · `/<ders>-ozel-ders/` 6 hizmet sayfası · `/cozumlu-sorular/` 23 soru · `/blog/` 10 yazı · `/iletisim/`
- `llms.txt`: yapay zekâ arama motorları için özet (GEO)
- Yazı tipi: STIX Two (SIL OFL), Türkçe karakterlere göre alt kümelenmiş WOFF2
