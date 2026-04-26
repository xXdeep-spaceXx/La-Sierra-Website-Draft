// Hero section with photo carousel
const HERO_PHOTOS = [
  'https://menutoeat.com/api/photos/?ref=places%2FChIJE_4lYgB1IocRSyj1x0HHu6Y%2Fphotos%2FATCDNfVD17Xc2YKtGkJxkpNmSya-So65ZVprrJ0vKumn9yU1Z85czTrh12zJ6XyzQGOUUdsg-zBHahv7hDLGJF2PbZ4TEhamv8TqRLgeV-1nWSXsOFWe-u4Pkm1qPwjCubhUhjuG0iQoskv4VQ29SyFjE2BhvExukLhPm5SUotHf6PY9UYihZUITSNT9SqOUvNKjrH-ikLSFIih1_d2nt5ctDg9qwPlmFmANcsyNgOMkcWhY-eNPcOeq8XeNQivYAbRKei-g7sryd1nwxnN0MKp6PydbFyerZOU3nDag1dKRuVobaKNhJm2FjEEkJ3DZioDNMRgK3esc0w1F0OeJx_Rv0yFROcOHrvEUy9HYVtSZKPIYqZhxKSQLHj6tX8GrORHQ9h0Qzbx2aAoGtemiYXUwKWBbmpHexCNhwGII0zUxhB-72BlowxbJ__uhDtYkmw&maxw=1200&v=2026-04-19T06%3A55%3A59.382Z',
  'https://menutoeat.com/api/photos/?ref=places%2FChIJE_4lYgB1IocRSyj1x0HHu6Y%2Fphotos%2FATCDNfXKyh9kk6PnBm45Ip4iAgAeX0bnKLejr690t2633QeEs5YibczTRbvdvIjKrcHg8QBtdY33JZtck24l8jHv-39hibXne8RJAbCP7sMB17HgQqv8jzCjJa8viif27PJP50rRXALCueQN8-HHSzmCcw0a3qMeajZuoU0ts_a7DUjCTI-KCHs0W_4buqq8IN5B45TIprjRYgVk5_dRzFNR23lfPRWstlvgYH-bW2RsnnvwuNI1k9W7x8pVSFidoiMWr9-w5QY5UErF-QSzSroXEptE6YrOgjDDMR6b5c1TpyS4Ng&maxw=1200&v=2026-04-19T06%3A55%3A59.382Z',
  'https://menutoeat.com/api/photos/?ref=places%2FChIJE_4lYgB1IocRSyj1x0HHu6Y%2Fphotos%2FATCDNfVb-cbIQPgVdKsiEzAjCSyh8VM8kou52ul5Zl450teRppZ--An812OwpqrP2ecBS86_1IS5w0yOgR_On8McKaFoKAti-nKCca7WVegixjK04TPpywnPgZfS8BDfBiMY6XmLuh7EGVuDVouuI_LLp_tDixTF7OgLYFh8uO4lj88-pV4mzFuO0K5zJjE2mykgFlKwgjsvTcHWC5f6AnWyBm9iVkByJnEPUCDplGLEQOQVzN4SUs-5SW7PikHSYfRrMXe8QXkLRlnkORIBJ0VMocW2JNdJ1q92s4eVAhcHUUaRoQ&maxw=1200&v=2026-04-19T06%3A55%3A59.382Z',
];

const Hero = () => {
  const [photoIdx, setPhotoIdx] = React.useState(0);
  const [photoLoaded, setPhotoLoaded] = React.useState(false);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPhotoIdx(i => (i + 1) % HERO_PHOTOS.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <section id="hero" data-screen-label="Hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: '#221408', position: 'relative', overflow: 'hidden',
      paddingTop: 72,
    }}>
      {/* Background photo */}
      <img
        key={photoIdx}
        src={HERO_PHOTOS[photoIdx]}
        alt="La Sierra food"
        onLoad={() => setPhotoLoaded(true)}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          opacity: fade && photoLoaded ? 0.35 : 0,
          transition: 'opacity 600ms ease-out',
        }}
      />

      {/* Dark overlay + warm vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(34,20,8,0.88) 0%, rgba(34,20,8,0.65) 60%, rgba(196,82,42,0.3) 100%)',
      }} />

      {/* Tile pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='none' stroke='%23C4522A' stroke-width='0.5' opacity='0.15'/%3E%3Ccircle cx='30' cy='30' r='3' fill='%23C4522A' opacity='0.1'/%3E%3Ccircle cx='0' cy='0' r='2' fill='%23C4522A' opacity='0.08'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%23C4522A' opacity='0.08'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: 700 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
            background: 'rgba(196,82,42,0.18)', border: '1px solid rgba(196,82,42,0.45)',
            borderRadius: 4, padding: '6px 16px',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#D4901A', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4901A' }}>Now Open · Menaul, Albuquerque</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(44px, 7.5vw, 82px)',
            fontWeight: 700, color: '#F7F0E3', lineHeight: 1.06,
            letterSpacing: '-0.02em', marginBottom: 14,
          }}>
            Real Food.<br />Warm Welcome.
          </h1>

          <div style={{
            fontFamily: "'Dancing Script', cursive", fontSize: 'clamp(22px, 3.5vw, 36px)',
            fontWeight: 600, color: '#D4901A', marginBottom: 28,
          }}>
            Breakfast &amp; Lunch, Monday – Saturday
          </div>

          <p style={{
            fontFamily: "'Lato', sans-serif", fontSize: 18, fontWeight: 300,
            color: '#C9A97A', lineHeight: 1.75, marginBottom: 44, maxWidth: 540,
          }}>
            Authentic New Mexican cuisine made with heart. Chicharrone burritos, fresh tamales, hand-rolled flautas — and free chips &amp; salsa when you dine in.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo('menu')} style={{
              background: '#C4522A', color: '#FAF6EE', border: '2px solid #C4522A',
              borderRadius: 4, padding: '14px 32px',
              fontFamily: "'Lato', sans-serif", fontSize: 13, fontWeight: 700,
              letterSpacing: '.07em', textTransform: 'uppercase', cursor: 'pointer',
              transition: 'all 150ms ease-out',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='#a8401c'; e.currentTarget.style.borderColor='#a8401c'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#C4522A'; e.currentTarget.style.borderColor='#C4522A'; }}
            >View Our Menu</button>

            <a href="https://menutoeat.com/la-sierra-new-mexican-restaurant/" target="_blank" rel="noopener" style={{
              background: 'transparent', color: '#F7F0E3', border: '2px solid rgba(247,240,227,0.4)',
              borderRadius: 4, padding: '14px 32px',
              fontFamily: "'Lato', sans-serif", fontSize: 13, fontWeight: 700,
              letterSpacing: '.07em', textTransform: 'uppercase', cursor: 'pointer',
              transition: 'all 150ms ease-out', textDecoration: 'none', display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(247,240,227,0.8)'; e.currentTarget.style.background='rgba(247,240,227,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(247,240,227,0.4)'; e.currentTarget.style.background='transparent'; }}
            >Order Online</a>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{
          marginTop: 80, display: 'flex', gap: 48, flexWrap: 'wrap',
          paddingTop: 40, borderTop: '1px solid rgba(196,82,42,0.3)',
        }}>
          {[
            ['5.0★', 'Google Rating'],
            ['8 AM – 3 PM', 'Mon – Sat'],
            ['Free', 'Chips & Salsa'],
            ['Menaul Blvd', 'Albuquerque, NM'],
          ].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#F7F0E3', lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 10, fontWeight: 700, color: '#664520', letterSpacing: '.08em', textTransform: 'uppercase', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Photo dots */}
        <div style={{ display: 'flex', gap: 6, marginTop: 32 }}>
          {HERO_PHOTOS.map((_, i) => (
            <button key={i} onClick={() => { setFade(false); setTimeout(() => { setPhotoIdx(i); setFade(true); }, 300); }} style={{
              width: i === photoIdx ? 24 : 6, height: 6,
              borderRadius: 3, background: i === photoIdx ? '#D4901A' : 'rgba(212,144,26,0.35)',
              border: 'none', cursor: 'pointer', transition: 'all 300ms ease-out', padding: 0,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
