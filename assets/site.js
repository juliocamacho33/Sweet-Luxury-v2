/* =========================================================
   Sweet Luxury v2 — comportamiento compartido
   Header, menú móvil, tema claro/oscuro, video del hero y carruseles.
   ========================================================= */
(function(){
  var root = document.documentElement;

  function t(key, fallback){
    return window.SLI18N ? window.SLI18N.t(key) : fallback;
  }

  function syncThemeAria(){
    var btn = document.getElementById('theme-toggle');
    if(!btn) return;
    var isDark = root.getAttribute('data-theme') === 'dark';
    var key = isDark ? 'theme_toggle_aria_light' : 'theme_toggle_aria';
    btn.setAttribute('data-i18n-aria', key);
    btn.setAttribute('aria-label', t(key, isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'));
  }

  function wireRail(rail){
    var id = rail.id;
    var prev = document.querySelector('[data-rail-prev="' + id + '"]');
    var next = document.querySelector('[data-rail-next="' + id + '"]');
    if(!prev || !next) return;
    function step(){ return Math.max(rail.clientWidth * 0.8, 240); }
    function update(){
      var max = rail.scrollWidth - rail.clientWidth - 2;
      prev.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft >= max;
    }
    prev.addEventListener('click', function(){ rail.scrollBy({ left:-step(), behavior:'smooth' }); });
    next.addEventListener('click', function(){ rail.scrollBy({ left:step(), behavior:'smooth' }); });
    rail.addEventListener('scroll', update, { passive:true });
    window.addEventListener('resize', update);
    rail.addEventListener('sl-rail-updated', update);
    update();
  }

  document.addEventListener('DOMContentLoaded', function(){
    var header = document.querySelector('.site-header');
    if(header){
      var onScroll = function(){ header.classList.toggle('is-scrolled', window.scrollY > 8); };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive:true });
    }

    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if(toggle && nav){
      var setOpen = function(open){
        nav.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      toggle.addEventListener('click', function(){ setOpen(!nav.classList.contains('open')); });
      document.addEventListener('keydown', function(e){ if(e.key === 'Escape') setOpen(false); });
      window.addEventListener('resize', function(){ if(window.innerWidth > 960) setOpen(false); });
    }

    var themeBtn = document.getElementById('theme-toggle');
    if(themeBtn){
      syncThemeAria();
      themeBtn.addEventListener('click', function(){
        var isDark = root.getAttribute('data-theme') === 'dark';
        if(isDark){ root.removeAttribute('data-theme'); }
        else { root.setAttribute('data-theme', 'dark'); }
        try{ localStorage.setItem('sl-theme', isDark ? 'light' : 'dark'); }catch(e){}
        syncThemeAria();
      });
    }
    document.addEventListener('sl-lang-changed', syncThemeAria);

    var heroVideo = document.querySelector('.hero-frame video');
    if(heroVideo){
      heroVideo.playbackRate = 0.5;
      heroVideo.addEventListener('loadedmetadata', function(){ heroVideo.playbackRate = 0.5; });
      if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        heroVideo.removeAttribute('autoplay');
        heroVideo.pause();
      }
    }

    document.querySelectorAll('[data-rail]').forEach(wireRail);
  });
})();
