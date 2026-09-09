# beyzadebaklava.de — v2.0

## GÜNCELLEME — CRISPY ASIAN RAPORUNDAN ESİNLENEN PREMIUM DOKUNUŞLAR

Renk paleti/oyuncu tonu değil, altındaki **yapısal fikirler** Beyzade'nin
kendi kimliğine (koyu yeşil/altın, zarif serif) uyarlandı:

1. **Kayan yazı şeridi (marquee)**: hero'nun altında ve sipariş
   bölümünden önce, altın renkli, ince italik yazıyla akan iki şerit
   eklendi (ürün adları + "El yapımı · Her gün taze · Nesillerdir
   gelen gelenek" gibi kısa vurgular).
2. **Rozet/mühür hatası düzeltildi**: "Neden Beyzade" bölümündeki 4
   ikondan ikisi (Seçme Malzeme / Özel Anlar İçin) birbirinin AYNISI
   bir kalp ikonuydu — fark edilmemiş bir hataydı. Artık 4'ü de
   birbirinden farklı, ince altın çerçeveli birer "mühür": fıstık
   dalı, açık kitap, 8 köşeli yıldız, çay bardağı.
3. **Dairesel imza rozeti**: Ana sayfa hero görselinin köşesine,
   ince altın çerçeveli dairesel bir "Türkiye'nin Tatlısı" fotoğrafı
   bindirildi — vitrin fotoğrafının yanında küçük bir "mühür" gibi
   duruyor.
4. **Dönen damga**: Hikayemiz bölümündeki fotoğrafın köşesine,
   yavaşça dönen, kenarında "TRADITION IN JEDER SCHICHT · SEIT
   OFFENBACH ·" yazan ince bir SVG damga eklendi — sayfa durağan
   değil, "canlı" bir imza hissi veriyor.
5. **Pill butonlar**: Tüm butonlar (CTA'lar, kategori sekmeleri,
   sipariş kartı butonları) artık tam yuvarlak kenarlı — kartlar ve
   fotoğraflar hâlâ keskin köşeli, bilinçli bir kontrast.
6. **Bölüm renk ritmi** gözden geçirildi — koyu/açık geçişler daha
   bilinçli akıyor.

---

# beyzadebaklava.de — v1.9

## GÜNCELLEME — GERÇEK TELEFON NUMARASI EKLENDİ

`06997 317 676` numarası şu 5 yere eklendi (hepsi `tel:+496997317676`
linkiyle tıklanabilir):
- Sipariş bölümü "Telefon" kartı (DE+TR) — buton artık "numarayı
  mağazadan öğrenin" değil, doğrudan numarayı gösteriyor ve arıyor
- Footer iletişim bilgisi (DE+TR)
- Impressum sayfasındaki Kontakt bölümü
- JSON-LD (`telephone` alanı) — Google'da arama sonuçlarında/haritada
  doğru numara çıkması için

**Not:** Bu bir sabit hat numarası (069 Frankfurt/Offenbach bölge kodu)
— WhatsApp linkleri hâlâ ayrı bir mobil numara gerektiriyor, o
placeholder (`491511106060X`) yerinde duruyor.

---

# beyzadebaklava.de — v1.8

## GÜNCELLEME — HAMBURGER MENÜ HATASI DÜZELTİLDİ

**Kök neden bulundu:** `.topbar`'da duran `backdrop-filter:blur(6px)`
özelliği, CSS spesifikasyonuna göre içindeki `position:fixed`
elemanları (mobil menü de dahil) artık ekrana göre değil, o ince
topbar kutusuna göre konumlandırıyordu. Sonuç: menü ya hiç görünmüyor
ya da anlamsız/kırpılmış bir alanda beliriyordu — bu, benim önceki
turda eklediğim animasyonlu ikondan değil, v1'den beri var olan bir
CSS tuzağından kaynaklanıyordu.

**Çözüm:** `backdrop-filter` kaldırıldı, üst bar hâlâ aynı koyu/şeffaf
görünümde (opaklık .94 → .97 ile telafi edildi, blur olmadan da
temiz duruyor). Menü artık tüm ekranı düzgün kaplıyor.

---

# beyzadebaklava.de — v1.7

## GÜNCELLEME — MOBİL ODAKLI YÜKSELTME

Kod tabanını satır satır gözden geçirip mobil deneyimi somut olarak
güçlendirdim:

1. **Dokunma geri bildirimi**: Buton, kategori sekmesi, fiyat linki,
   sipariş kartı, SSS başlığı ve WhatsApp balonuna dokunulduğunda artık
   hafif bir "basılma" animasyonu var (`@media (hover:none)`) — mobilde
   her tıklama "canlı" hissettiriyor.
2. **Hamburger menü baştan yapıldı**: Eski "☰" karakteri yerine artık
   3 çizgiden X'e dönüşen animasyonlu bir ikon var; menü açıkken arka
   plan kaymıyor (scroll kilidi eklendi); menünün içine büyük bir
   "WhatsApp'tan Sipariş" butonu eklendi — menüyü açan kişi direkt
   sipariş verebiliyor.
3. **Kategori sekmeleri (Baklava/Kek/Börek…) artık scroll-snap'li** ve
   dokunma alanı büyütüldü (min. 44px) — kaydırırken sekmeler yerine
   "oturuyor", daha kontrollü hissettiriyor.
4. **Bölüm boşlukları mobilde sıkılaştırıldı**: masaüstünde güzel duran
   88px üst/alt boşluk, telefonda gereksiz kaydırmaya sebep oluyordu;
   640px altı ekranlarda 56px'e indi.
5. **WhatsApp balonu artık iPhone'un alt "home" çizgisinin altına
   girmiyor** (safe-area-inset desteği eklendi).
6. **Marka logosu/yazısı çok küçük ekranlarda (< 380px) küçültüldü** —
   eski hâliyle bazı eski/küçük telefonlarda üst bar sıkışabiliyordu.
7. **Hero, sipariş kartları ve değer rozetleri** için mobile-özel daha
   sıkı padding değerleri eklendi; hero butonları çok küçük ekranlarda
   tam genişlik, alt alta diziliyor (yan yana sıkışıp okunmaz hâle
   gelmiyor).

**BONUS — fark ettiğim bir hata**: `og:image` (WhatsApp/Instagram'da
link paylaşınca görünen önizleme görseli) hâlâ geçen turlarda sildiğim
eski `antep-serisi.webp` dosyasına işaret ediyordu — yani biri linki
paylaşsa önizleme resmi hiç çıkmayacaktı. Bunu düzelttim ve önizleme
görseli olarak artık mağaza vitrini fotoğrafını kullanıyor.

---

# beyzadebaklava.de — v1.6

## GÜNCELLEME (bu turda eklenenler)

1. **"Fiyat için sorunuz" artık tıklanabilir** — her üründeki fiyat
   etiketi (40 kart × 2 dil) artık gerçek bir link, doğrudan WhatsApp'a
   gidiyor (hazır bir karşılama metniyle). Hover'da ok işareti kayıyor.
   **ÖNEMLİ:** Bu link hâlâ `wa.me/491511106060X` placeholder numarasını
   kullanıyor — sondaki "X" gerçek bir numara DEĞİL, v1 iskeletinden
   kalma bir yer tutucu. Gerçek WhatsApp numaranı verirsen tek seferde
   (5 farklı yerde) değiştiririm.
2. **Sütlü Tatlılar görseli değişti** — eski hâli çok düşük çözünürlüklü
   bir şeritten (180px yükseklik) zorla genişletildiği için bulanık
   duruyordu; orijinal poster görselinden temiz bir "Kazandibi" karesi
   çıkarıldı, kart normal boy/oranlara döndürüldü (artık `span-all`
   değil).
3. **Hikayemiz bölümü görseli değişti** — katmer yerine, hiç logo/metin
   kalıntısı olmayan, yuvarlak tepside ortada fıstık sepetiyle sunulan
   çok daha editoryal bir baklava tepsisi fotoğrafı kullanıldı.
4. **Google Maps eklendi**: paylaştığın share.google linki footer'a
   ("Google Maps"/"Google Haritalar") ve "Route planen"/"Yol tarifi al"
   butonlarına eklendi (önceden generic bir maps.google arama linkiydi).
   **TikTok zaten sitede vardı** (footer + JSON-LD) — @beyzadebaklava,
   senin verdiğin linkle aynı hesap, ek işlem gerekmedi. Facebook için
   net bir sayfa linki bulamadım (sadece tek bir fotoğraf paylaşımı
   linki çıktı arama sonuçlarında) — gerçek sayfa linkini verirsen
   ekleyebilirim.

`assets/img/products/`: 44 dosya, sıfır eksik referans (script ile
doğrulandı).

---

# beyzadebaklava.de — v1.5

## GÜNCELLEME (bu turda eklenenler)

Yeni gönderdiğin "logolu*" ön ekli görseller — hepsi arka planı
kaldırılmış (gerçek şeffaflık), üzerinde tutarlı küçük bir logo
etiketi olan versiyonlar — şu ürünlerin yerine kullanıldı (otomatik
üzerine yazma, HTML değişmedi): Katmer (hikaye bölümü — özellikle
istediğin "daha premium foto"), Çiğköfte, Dubai Çikolatası (hem kart
hem Aschaffenburg görseli), Gözleme, Kız İsteme Tepsisi, Kadayıf
Rulo, Şişe Meyve Suyu, Baby Shower Pastası, Düğün Pastası, Fındıklı
Pasta, Meyveli Pasta, Klasik Hediye Kutusu, Baklava Hediye Kutusu,
Baklava Sortiment (artık açık kutu kompozisyonu), Çikolata Kutusu,
Baklava+Dondurma.

**Yeni eklenen:** Mermer Kek (Kek & Cheesecake sekmesine 5. kart).

**KALDIRILDI — kalitesiz bulduğun görseller:** Maden Suyu Çeşitleri
ve Taze Sıkılmış Meyve Suları banner kartları (eski poster-kırpma,
üzerinde çok metin/rozet vardı) tamamen kaldırıldı. Bunların yerine
iyi bir banner alternatifi gelmediği için "İçecekler" sekmesi de
kaldırıldı; şişelenmiş meyve suyu kartı (artık yeni, temiz logolu
görselle) Tatlılar sekmesine taşındı.

`assets/img/products/` yine sadece kullanılan dosyaları içeriyor:
64 → 44 dosya (script ile doğrulanan sıfır eksik referans).

---

# beyzadebaklava.de — v1.4

## GÜNCELLEME (bu turda eklenenler)

GitHub üzerinden tek seferde en fazla 100 dosya yüklenebildiği için,
`assets/img/products/` klasöründeki **kullanılmayan 57 dosya silindi**
(103 → 46 dosya). Silinenler: eski poster-kırpma görselleri (kurabiye,
lokum, waffel, mineralwasser, frische-saefte, milchdesserts,
obstteller, bayrak-baklava, vegan-baklava, vegan-torte,
turkiye-pasta*, tuzlular-yeni, soguk-baklava, baklava-fan,
baklava-sarma-tepsi, kadayif-sarma, baklava-kesit-transparent, box-set,
glutensiz, borek-cesitleri*, borek-tabak, tema-pasta-1/2/3, dondurma,
kahve, kiz-isteme-*), her ürünün artık kullanılmayan "büyük" (-sm
olmayan) versiyonları (baklava-dondurma, dugun-pastasi, gozleme,
cigkofte, turkiye-pasta-fussball, kek-*, profiterol-kule,
meyve-suyu-sise, pasta-babyshower, cikolata-kutusu, hediye-kutusu,
kruvasan) ve hiç kullanılmamış olanlar (hikaye-ambiyans,
kahvalti-sofrasi-2, magaza-vitrini-sm).

Silme öncesi script ile HTML'deki her `src` yolu tek tek doğrulandı —
sıfır eksik referans kaldı. Şu an klasörde sadece gerçekten
kullanılan 46 dosya var.

---

# beyzadebaklava.de — v1.3

## GÜNCELLEME (bu turda eklenenler)

**BOZUK GÖRSEL BULGUSU:** Ekran görüntülerinde gösterdiğin siteye
(hmgsacademy.com üzerinde önizleme) göre Kek & Cheesecake kartları ile
Profiterol/Şişe Meyve Suyu kartlarının görselleri YÜKLENMİYORDU (sadece
alt metni görünüyordu). Bu turda o dosyaları (`kek-cikolata-sm.webp`,
`kek-findikli-sm.webp`, `kek-meyveli-sm.webp`, `kek-limon-sm.webp`,
`profiterol-kule-sm.webp`, `meyve-suyu-sise-sm.webp`) tek tek açıp
doğruladım — hepsi geçerli, sorunsuz WebP dosyaları ve HTML'deki her
`src` yolu bu zip içinde karşılığını buluyor (script ile çift kontrol
edildi). Yani **sorun bu zip'te değil** — hmgsacademy.com'a yüklerken
bu 6 dosyanın atlanmış/yüklenmemiş olması muhtemel. Bu zip'i olduğu
gibi yeniden yükleyip tekrar kontrol etmen gerekiyor.

**Premium yükseltme (Burak'ın gönderdiği gerçek mağaza/kahvaltı
görselleriyle):**
- Hero görseli değişti: eski ürün kolajı yerine artık gerçek mağaza
  vitrini fotoğrafı (Beyzade tabelası arka planda görünüyor)
- YENİ bölüm "Unser Laden / Mağazamız": vitrinin tam boy fotoğrafı +
  adres + "Route planen" butonu — Bestellen'den önce eklendi
- YENİ bölüm "Frühstück / Kahvaltı Sofrası": tamamen farklı bir hizmet
  olarak tanıtıldı (2-10 kişilik, önceden sipariş, WhatsApp CTA) —
  ürün gridine değil, Aschaffenburg gibi ayrı bir editoryal bölüme
  konuldu çünkü bu bir "ürün" değil bir "deneyim/hizmet"
- Tatlılar sekmesine "Pistazien-Croissant" eklendi
- Hediye kutusu görseli, kurdeleli kutu+poşet+meyve suyu şişesi olan
  daha zengin bir kompozisyonla değişti (otomatik, dosya adı aynı)
- Nav menüsüne "Unser Laden / Mağazamız" linki eklendi

**Henüz yapılmadı:** Tam bir görsel kimlik/tasarım sistemi revizyonu
(renk paleti, tipografi, layout mimarisi) — Burak "çok kalitesiz"
dediği için bunun ayrıca değerlendirilmesi gerekiyor; bu tur içerik ve
hero/vitrine odaklı hızlı ama etkili bir yükseltmeydi, kapsamlı bir
tasarım yenilemesi değil.

---

# beyzadebaklava.de — v1.2

## GÜNCELLEME (bu turda eklenenler)

Burak'ın toplu gönderdiği 76 AI-üretimi görselden 23 tanesi seçilip işlendi
(çoğu zaten temiz stüdyo çekimi kalitesindeydi, ekstra kırpma gerekmedi).

**ÖNEMLİ UYARI — sahte logo:** Bu 76 görselin çoğunda ChatGPT'nin kendi
ürettiği, gerçek Beyzade logosuyla BİREBİR UYUŞMAYAN bir "BEYZADE" rozeti var
(farklı font, farklı ikon oranı — gerçek logo `Logo.png`'de duruyor). Burak
"görsel kalitesi iyiyse dert etme" dedi, o yüzden bu turda düzeltilmedi —
ama marka tutarlılığı için ileride fark edilmesi gereken bir nokta.

**Otomatik değişen (aynı dosya adıyla üzerine yazıldı, HTML değişmedi):**
turkiye-pasta, dugun-pastasi, baklava-dondurma, dubai-cikolata, gozleme,
cigkofte, katmer, lokum — hepsi çok daha yüksek kaliteli yeni görsellerle
değişti.

**Yeni eklenen ürün kartları:**
- Baklava: Kadayıf Rulo, Baklava Sarma, Baklava Çeşitleri, + gerçek şeffaf
  arka planlı bir "kesit" makro görseliyle "Katman Katman El İşçiliği"
  vurgu kartı (bu görselin arka planı orijinalde damalı/checker desenliydi,
  scipy ile bağlı bileşen analizi yapılıp gerçek şeffaflığa çevrildi)
- YENİ sekme "Kek & Cheesecake": Çikolatalı Pasta, Fındıklı Pasta,
  Meyveli Pasta, Limonlu Cheesecake
- Torten: Kutlama Pastaları (baby shower/doğum günü teması)
- Tatlılar: Profiterol
- Getränke: Şişe Meyve Suyu (Nar/Portakal/Elma)
- Hediye Kutuları: Baklava kutusu görseli yenilendi, Çikolata Kutusu eklendi

**Kullanılmadı / beklemede:** `hikaye-ambiyans` görseli (çay eşliğinde
ambiyans çekimi) işlendi ama henüz siteye yerleştirilmedi — Hikayemiz
bölümüne ikinci görsel olarak eklenebilir, layout değişikliği gerektiriyor.

---

# beyzadebaklava.de — v1.1

## GÜNCELLEME (bu turda eklenenler)

Burak'ın gönderdiği 14 yeni poster görselinden temiz "hero" kareler
çıkarıldı (birkaç deneme-yanılma turu ile — çoğunda ilk kırpma denemesinde
hâlâ kalıntı Almanca metin/rozet vardı, ikinci/üçüncü turda temizlendi)
ve sitede yeni ürün kartları olarak kullanıldı:

- **Baklava sekmesi:** Soğuk Baklava, Baklava (VEGAN etiketli), Türkiye'nin
  Tatlısı (bayrak desenli, "SEZONLUK" etiketli)
- **Börek sekmesi:** eski düşük kaliteli börek görseli, yeni temiz
  görselle (`tuzlular-yeni`) değiştirildi
- **Pasta sekmesi:** Türkiye Pastası (bayrak+cami silüeti), Nice
  Zaferlere Pastası (milli takım temalı — jenerik forma/top, kulüp
  logosu yok), Pasta (VEGAN etiketli)
- **YENİ sekme "Tatlılar & Meyve":** Kurabiye, Lokum, Waffle, Meyve
  Tabakları, Sütlü Tatlılar (geniş banner formatında)
- **YENİ sekme "İçecekler":** Maden Suyu Çeşitleri, Taze Sıkılmış Meyve
  Suları (ikisi de geniş banner formatında — kare karta sıkıştırmak
  görüntüyü bozacağı için CSS'e `.thumb-wide` + `.span-all` eklendi)

**One_Piece_Pasta.png KULLANILMADI** — aynı gerekçeyle (aşağıdaki madde 3,
telifli karakter/franchise riski). Türkiye Pastası'ndaki milli takım
forması jenerik (sadece "10" numarası, kulüp logosu yok) olduğu için
o kullanıldı.

**Hâlâ yapılmadı / dikkat:** Bu turdaki kırpmalar görsel olarak kontrol
edildi ama siteye tam render halinde (canlı tarayıcıda) test edilmedi —
yayına almadan önce bir ekran görüntüsü turu önerilir. Ayrıca birkaç
görselde (Kurabiye, Soğuk Baklava, Waffle, Maden Suyu, Meyve Suyu)
köşede hâlâ çok küçük bir kalp ikonu/metin kırıntısı kalmış olabilir —
göz ardı edilebilir seviyede ama mükemmel değil.

---

# beyzadebaklava.de — v1 (iskelet)

## Bu paket ne içeriyor
Statik HTML/CSS/JS site. DE ana dil + /tr/ Türkçe. EME'S DÖNER HAUS ile
aynı mimari: framework yok, tek CSS dosyası, WhatsApp sabit sipariş
butonu, FAQ, Impressum/Datenschutz placeholder'lı, sitemap+robots (AI
arama botlarına bilinçli izin).

Palet: koyu yeşil (#0e2f22) + sıcak altın (#c9a04a) + fildişi (#f7f2e6).
Tipografi: Cormorant Garamond (başlık) + Work Sans (gövde), ikisi de
latin-extended, Türkçe karakterlerde font fallback sorunu yok.

## AÇIKÇA PLACEHOLDER / EKSİK — YAYINA ALMADAN ÖNCE TAMAMLANMALI

1. **Ürün görselleri geçici kalitede.** Burak'ın gönderdiği 20 görsel
   zaten bitmiş Instagram poster tasarımıydı (üstünde Almanca metin,
   rozet basılı). Bu pakette her posterden en az metinli bölge kırpılıp
   kart görseli olarak kullanıldı, AMA çoğunda hâlâ kalıntı metin/rozet
   parçası görünüyor (Antep serisi, Börek, Dubai çikolatası, Verlobungstablett
   gibi). Bu görseller GEÇİCİDİR. Burak'a önceden verilen 46 kalemlik
   prompt setiyle üretilecek temiz, metinsiz "hero" görseller geldiğinde
   assets/img/products/ altındaki ilgili dosyalar birebir aynı isimle
   değiştirilmeli (kod tarafında hiçbir değişiklik gerekmez).

2. **Düğün pastası görseli DİKKAT gerektiriyor.** Orijinal poster gerçek
   bir çiftin adını ve düğün tarihini taşıyordu ("Yusuf & Meryem,
   23.08.26"). Bu bilgi tamamen kırpılıp çıkarıldı, şu an sitede sadece
   isimsiz bir kek+çiçek görüntüsü var. YİNE DE: bu görsel gerçek bir
   müşterinin siparişi olabilir, marketing görseli olarak kullanmadan
   önce Burak'ın işletmeden onay alması önerilir.

3. **10 tema hiç kullanılmadı** (Dark dizisi, Spider-Man, One Piece,
   Pokémon, Bayern München, Borussia Dortmund, Galatasaray, Fenerbahçe,
   Trabzonspor, Beşiktaş) — marka/telif hakkı riski nedeniyle. Onun
   yerine "Themen-Torten nach Wunsch" (İsteğe Özel Temalı Pasta) diye
   nötr, görselsiz bir kart eklendi. Karar değişirse bu karta görsel
   eklenebilir ama telifli karakter/logo İÇERMEYEN bir görsel olmalı.

4. **Fiyat YOK, bilerek.** Gerçek fiyat bilgisi hâlâ gelmedi, bu yüzden
   her ürün kartında "Preis auf Anfrage" / "Fiyat için sorunuz" yazıyor.
   EME'S'te fiyat tahmini yapılıp sonradan düzeltilmek zorunda kalınmıştı
   — o hatayı burada tekrarlamamak için hiç tahmin yapılmadı. Gerçek
   fiyatlar gelince (a) kart başına fiyat gösterilebilir, veya (b) bu
   model bilerek korunabilir (WhatsApp'a yönlendirme, EME'S'teki gibi).

5. **Impressum/Datenschutz tamamen PLATZHALTER.** Yetkili kişi, vergi no,
   ticaret sicili, telefon, e-posta — hiçbiri yok. Sayfalar `noindex`
   işaretli ve içinde sarı uyarı kutucuklarıyla "PLATZHALTER" yazıyor.
   Bu bilgiler gelmeden site canlıya alınmamalı (EME'S'teki aynı hatanın
   tekrarı olur, üstelik oradaki analizde de bu konu risk olarak
   işaretlenmişti).

6. **Telefon numarası ve WhatsApp numarası PLATZHALTER/tahmini.**
   `tel:PLATZHALTER` ve `wa.me/491511106060X` — ikisi de gerçek numara
   ile değiştirilmeli. WhatsApp linkindeki numara eski sitenin
   denetiminden alınan numaraya benziyor ama TEYİT EDİLMEDİ.

7. **Aschaffenburg bölümü tarih içermiyor** — açılış tarihi netleşince
   eklenebilir.

8. **Logo yazı olarak kuruldu, görsel logo dosyası kullanılmadı** çünkü
   posterlerin içine gömülü, ayrı şeffaf dosya yok. Eğer ileride ayrı
   bir "beyzade" wordmark dosyası gelirse, .brand-word CSS sınıfının
   yerine <img> konabilir.

## Sonraki adımlar (öncelik sırasıyla)
1. Impressum bilgileri + telefon/WhatsApp numarası — YASAL ZORUNLULUK
2. Gerçek ürün görselleri (46 kalemlik prompt setinden üretilenler)
3. Gerçek fiyat/ürün açıklaması listesi
4. Wedding cake görseli için işletmeden kullanım onayı
5. Aschaffenburg açılış tarihi netleşince ilgili bölüm güncellenir
