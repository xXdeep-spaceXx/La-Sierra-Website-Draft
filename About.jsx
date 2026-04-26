// About + photo gallery section
const GALLERY_PHOTOS = [
  'https://menutoeat.com/api/photos/?ref=places%2FChIJE_4lYgB1IocRSyj1x0HHu6Y%2Fphotos%2FATCDNfVD17Xc2YKtGkJxkpNmSya-So65ZVprrJ0vKumn9yU1Z85czTrh12zJ6XyzQGOUUdsg-zBHahv7hDLGJF2PbZ4TEhamv8TqRLgeV-1nWSXsOFWe-u4Pkm1qPwjCubhUhjuG0iQoskv4VQ29SyFjE2BhvExukLhPm5SUotHf6PY9UYihZUITSNT9SqOUvNKjrH-ikLSFIih1_d2nt5ctDg9qwPlmFmANcsyNgOMkcWhY-eNPcOeq8XeNQivYAbRKei-g7sryd1nwxnN0MKp6PydbFyerZOU3nDag1dKRuVobaKNhJm2FjEEkJ3DZioDNMRgK3esc0w1F0OeJx_Rv0yFROcOHrvEUy9HYVtSZKPIYqZhxKSQLHj6tX8GrORHQ9h0Qzbx2aAoGtemiYXUwKWBbmpHexCNhwGII0zUxhB-72BlowxbJ__uhDtYkmw&maxw=800&v=2026-04-19T06%3A55%3A59.382Z',
  'https://menutoeat.com/api/photos/?ref=places%2FChIJE_4lYgB1IocRSyj1x0HHu6Y%2Fphotos%2FATCDNfXKyh9kk6PnBm45Ip4iAgAeX0bnKLejr690t2633QeEs5YibczTRbvdvIjKrcHg8QBtdY33JZtck24l8jHv-39hibXne8RJAbCP7sMB17HgQqv8jzCjJa8viif27PJP50rRXALCueQN8-HHSzmCcw0a3qMeajZuoU0ts_a7DUjCTI-KCHs0W_4buqq8IN5B45TIprjRYgVk5_dRzFNR23lfPRWstlvgYH-bW2RsnnvwuNI1k9W7x8pVSFidoiMWr9-w5QY5UErF-QSzSroXEptE6YrOgjDDMR6b5c1TpyS4Ng&maxw=800&v=2026-04-19T06%3A55%3A59.382Z',
  'https://menutoeat.com/api/photos/?ref=places%2FChIJE_4lYgB1IocRSyj1x0HHu6Y%2Fphotos%2FATCDNfVb-cbIQPgVdKsiEzAjCSyh8VM8kou52ul5Zl450teRppZ--An812OwpqrP2ecBS86_1IS5w0yOgR_On8McKaFoKAti-nKCca7WVegixjK04TPpywnPgZfS8BDfBiMY6XmLuh7EGVuDVouuI_LLp_tDixTF7OgLYFh8uO4lj88-pV4mzFuO0K5zJjE2mykgFlKwgjsvTcHWC5f6AnWyBm9iVkByJnEPUCDplGLEQOQVzN4SUs-5SW7PikHSYfRrMXe8QXkLRlnkORIBJ0VMocW2JNdJ1q92s4eVAhcHUUaRoQ&maxw=800&v=2026-04-19T06%3A55%3A59.382Z',
];

const PhotoPlaceholder = ({ label }) => (
  <div style={{
    background: 'linear-gradient(135deg, #C4522A 0%, #442E12 100%)',
    borderRadius: 8, width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 6,
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='none' stroke='%23FAF6EE' stroke-width='0.4' opacity='0.1'/%3E%3C/svg%3E")`,
      backgroundSize: '40px 40px',
    }} />
    <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: 22, fontWeight: 600, color: 'rgba(247,240,227,0.6)', position: 'relative' }}>La Sierra</div>
    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(212,144,26,0.8)', position: 'relative' }}>{label}</div>
  </div>
);

const PhotoGrid = () => {
  const [errors, setErrors] = React.useState({});
  const mark = (i) => setErrors(e => ({ ...e, [i]: true }));

  const sizes = [
    { gridRow: 'span 2', gridColumn: 'span 1' },
    { gridRow: 'span 1', gridColumn: 'span 1' },
    { gridRow: 'span 1', gridColumn: 'span 1' },
  ];
  const labels = ['Food', 'Atmosphere', 'Dishes'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 10, height: 460 }}>
      {GALLERY_PHOTOS.map((url, i) => (
        <div key={i} style={{ ...sizes[i], position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
          {errors[i] ? (
            <PhotoPlaceholder label={labels[i]} />
          ) : (
            <img src={url} alt={labels[i]} onError={() => mark(i)} style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            }} />
          )}
        </div>
      ))}
    </div>
  );
};

const About = () => (
  <section id="about" data-screen-label="About" style={{ background: '#FAF6EE', padding: '96px 24px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 72, alignItems: 'center' }}>

        {/* Photo grid */}
        <div style={{ position: 'relative' }}>
          <PhotoGrid />
          {/* Decorative corner accents */}
          <div style={{ position: 'absolute', bottom: -14, right: -14, width: 72, height: 72, background: '#D4901A', borderRadius: 4, opacity: 0.18, zIndex: -1 }} />
          <div style={{ position: 'absolute', top: -10, left: -10, width: 44, height: 44, border: '3px solid #C4522A', borderRadius: 4, opacity: 0.28 }} />
        </div>

        {/* Text */}
        <div>
          <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C4522A', marginBottom: 12 }}>Our Story</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#221408', lineHeight: 1.18, marginBottom: 20 }}>
            A little place<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>with a lot of heart.</span>
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 16, color: '#442E12', lineHeight: 1.8, marginBottom: 18 }}>
            La Sierra is a neighborhood New Mexican kitchen on Menaul Blvd in Albuquerque. We opened our doors to bring real, home-style cooking to the community — the kind of food that warms you from the inside out.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 16, color: '#442E12', lineHeight: 1.8, marginBottom: 36 }}>
            Our red chile is made fresh. Our staff genuinely loves what they do. We're growing, adding dinner service soon. And if you eat in, the chips and salsa are on us — always.
          </p>

          {/* Info cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { icon: '🕐', label: 'Hours', val: '8 AM – 3 PM', sub: 'Mon – Saturday' },
              { icon: '📍', label: 'Location', val: 'Menaul Blvd', sub: 'Albuquerque, NM' },
              { icon: '⭐', label: 'Rating', val: '5.0 / 5', sub: '4 Google reviews' },
              { icon: '🌶', label: 'Dinner', val: 'Coming Soon', sub: 'Stay tuned!' },
            ].map(({ label, val, sub }) => (
              <div key={label} style={{ background: '#F7F0E3', border: '1px solid #E5D9C6', borderRadius: 8, padding: '16px 18px' }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#C4522A', marginBottom: 4 }}>{label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: '#221408', lineHeight: 1.2 }}>{val}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#8A6035', marginTop: 2 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { About });
