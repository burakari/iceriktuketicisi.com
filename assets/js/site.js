(function(){
  // Çözümlü sorular: seçeneğe dokununca doğru/yanlış göster, çözümü aç
  document.addEventListener('click', function(e){
    var b = e.target.closest && e.target.closest('.opt');
    if(!b) return;
    var q = b.closest('.ex');
    if(!q || q.getAttribute('data-done')) return;
    var ans = q.getAttribute('data-answer'), pick = b.getAttribute('data-key');
    q.setAttribute('data-done','1');
    q.querySelectorAll('.opt').forEach(function(o){
      o.disabled = true;
      if(o.getAttribute('data-key') === ans) o.classList.add('is-right');
    });
    if(pick !== ans) b.classList.add('is-wrong');
    var fb = q.querySelector('.fb');
    if(fb) fb.textContent = pick === ans ? 'Doğru. Çözümü kendi yolunuzla karşılaştırın.' : 'Doğru cevap ' + ans + '. Çözümü inceleyin.';
    var d = q.querySelector('details');
    if(d) d.open = true;
  });

  // WhatsApp mesaj hazırlayıcı
  var N = '905010727223';
  document.querySelectorAll('[data-composer]').forEach(function(c){
    var link = c.querySelector('[data-wa]'), out = c.querySelector('.preview');
    function build(){
      var v = function(n){ var x = c.querySelector('input[name$="-' + n + '"]:checked'); return x ? x.value : ''; };
      var lv = v('seviye'), d = v('ders'), s = v('sekil');
      var msg = (lv || d || s) ? 'Merhaba, ' + (lv ? lv + ' ' : '') + (s ? s + ' ' : '') + (d || 'özel ders') + ' hakkında bilgi almak istiyorum.' : 'Merhaba, Care Akademi’de özel ders hakkında bilgi almak istiyorum.';
      link.href = 'https://wa.me/' + N + '?text=' + encodeURIComponent(msg);
      if(out) out.textContent = '“' + msg + '”';
    }
    c.addEventListener('change', build);
  });

  // Okuma ilerleme çubuğu (yalnızca yazı sayfalarında)
  var bar = document.querySelector('.progress span'), art = document.querySelector('article.prose');
  if(bar && art){
    var tick = false;
    var upd = function(){ var r = art.getBoundingClientRect(), h = r.height - innerHeight * .6; var p = Math.min(1, Math.max(0, -r.top / (h > 0 ? h : 1))); bar.style.transform = 'scaleX(' + p + ')'; tick = false; };
    addEventListener('scroll', function(){ if(!tick){ tick = true; requestAnimationFrame(upd); } }, {passive:true}); upd();
  }

  // Bağlantıyı kopyala
  document.addEventListener('click', function(e){
    var c = e.target.closest && e.target.closest('[data-copy]'); if(!c) return;
    var u = c.getAttribute('data-copy'), done = function(){ c.classList.add('copied'); c.lastChild.textContent = 'Kopyalandı'; };
    if(navigator.clipboard){ navigator.clipboard.writeText(u).then(done); } else { var t = document.createElement('textarea'); t.value = u; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); done(); }
  });

  // Blog kategori filtresi
  document.querySelectorAll('.filter').forEach(function(fl){
    var scope = document.querySelector(fl.getAttribute('data-target')) || document;
    fl.addEventListener('click', function(e){
      var b = e.target.closest('button'); if(!b) return;
      fl.querySelectorAll('button').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var k = b.getAttribute('data-f');
      scope.querySelectorAll('li[data-cat]').forEach(function(li){ li.hidden = k !== 'all' && (' ' + li.getAttribute('data-cat') + ' ').indexOf(' ' + k + ' ') < 0; });
      scope.querySelectorAll('.grp').forEach(function(g){ var ul = g.nextElementSibling; g.hidden = ul && !ul.querySelector('li[data-cat]:not([hidden])'); });
    });
  });
})();
