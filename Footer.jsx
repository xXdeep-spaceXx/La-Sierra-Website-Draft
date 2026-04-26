// Location section + Footer

const Location = () => (
  <section id="location" data-screen-label="Hours & Location" style={{ background: '#FAF6EE', padding: '96px 24px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C4522A', marginBottom: 12 }}>Find Us</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 700, color: '#221408' }}>Hours &amp; Location</h2>
        <div style={{ width: 48, height: 3, background: '#C4522A', borderRadius: 2, margin: '20px auto 0' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 24 }}>
        {/* Hours */}
        <div style={{ background: 'white', border: '1px solid #E5D9C6', borderRadius: 8, padding: '32px', boxShadow: '0 2px 8px rgba(34,20,8,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ width: 36, height: 36, background: '#fdf3ee', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4522A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#C4522A' }}>Hours</div>
          </div>
          {[
            ['Monday', '8:00 AM – 3:00 PM'],
            ['Tuesday', '8:00 AM – 3:00 PM'],
            ['Wednesday', '8:00 AM – 3:00 PM'],
            ['Thursday', '8:00 AM – 3:00 PM'],
            ['Friday', '8:00 AM – 3:00 PM'],
            ['Saturday', '8:00 AM – 3:00 PM'],
            ['Sunday', 'Closed'],
          ].map(([day, time]) => (
            <div key={day} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 0', borderBottom: '1px solid #F0E8D8',
            }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#442E12', fontWeight: day === 'Sunday' ? 400 : 600 }}>{day}</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 600, color: day === 'Sunday' ? '#C9A97A' : '#221408' }}>{time}</span>
            </div>
          ))}
          <div style={{ marginTop: 18, background: '#fdf3ee', border: '1px solid #fae0d0', borderRadius: 6, padding: '12px 14px' }}>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#C4522A', lineHeight: 1.55 }}>
              <strong>Dinner coming soon!</strong> We're growing our team — check back for evening hours.
            </div>
          </div>
        </div>

        {/* Address */}
        <div style={{ background: 'white', border: '1px solid #E5D9C6', borderRadius: 8, padding: '32px', boxShadow: '0 2px 8px rgba(34,20,8,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ width: 36, height: 36, background: '#fdf3ee', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4522A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#C4522A' }}>Location</div>
          </div>

          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#221408', marginBottom: 6 }}>La Sierra</div>
          <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, color: '#442E12', lineHeight: 1.7, marginBottom: 28 }}>
            Menaul Blvd NE<br />Albuquerque, NM 87107
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="https://www.google.com/maps/search/La+Sierra+Menaul+Albuquerque+NM" target="_blank" rel="noopener" style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: '#C4522A', color: '#FAF6EE',
              borderRadius: 4, padding: '11px 18px',
              fontFamily: "'Lato', sans-serif", fontSize: 12, fontWeight: 700,
              letterSpacing: '.06em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'background 150ms',
            }}
            onMouseEnter={e => e.currentTarget.style.background='#a8401c'}
            onMouseLeave={e => e.currentTarget.style.background='#C4522A'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Get Directions
            </a>
            <a href="https://menutoeat.com/la-sierra-new-mexican-restaurant/" target="_blank" rel="noopener" style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'white', color: '#C4522A',
              border: '2px solid #C4522A',
              borderRadius: 4, padding: '10px 18px',
              fontFamily: "'Lato', sans-serif", fontSize: 12, fontWeight: 700,
              letterSpacing: '.06em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'all 150ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='#fdf3ee'; }}
            onMouseLeave={e => { e.currentTarget.style.background='white'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              Order Online
            </a>
          </div>
        </div>

        {/* Map embed */}
        <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #E5D9C6', minHeight: 300, boxShadow: '0 2px 8px rgba(34,20,8,.06)' }}>
          <iframe
            title="La Sierra location"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', minHeight: 300 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=La+Sierra+Menaul+Albuquerque+NM&output=embed"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#160D05', padding: '56px 24px 28px', borderTop: '3px solid #C4522A' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img src="assets/logo-light.svg" alt="La Sierra" style={{ height: 36 }} onError={e => e.target.style.display='none'} />
            </div>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#664520', lineHeight: 1.7, maxWidth: 240 }}>
              Authentic New Mexican cuisine on Menaul Blvd. Open for breakfast &amp; lunch, Monday–Saturday.
            </p>
            <div style={{ marginTop: 16, fontFamily: "'Dancing Script', cursive", fontSize: 18, fontWeight: 600, color: '#C4522A', opacity: 0.7 }}>
              Hecho con amor ♥
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C4522A', marginBottom: 16 }}>Navigate</div>
            {[['menu','Menu'],['about','About Us'],['reviews','Reviews'],['location','Hours & Location']].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                display: 'block', background: 'none', border: 'none', cursor: 'pointer', padding: '5px 0',
                fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#8A6035', textAlign: 'left',
                transition: 'color 150ms',
              }}
              onMouseEnter={e => e.currentTarget.style.color='#C4522A'}
              onMouseLeave={e => e.currentTarget.style.color='#8A6035'}
              >{label}</button>
            ))}
          </div>

          {/* Visit */}
          <div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C4522A', marginBottom: 16 }}>Visit</div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#664520', lineHeight: 1.9 }}>
              Menaul Blvd NE<br />
              Albuquerque, NM<br />
              <span style={{ color: '#8A6035' }}>Mon–Sat: 8 AM – 3 PM</span><br />
              <span style={{ color: '#8A6035' }}>Sunday: Closed</span>
            </div>
          </div>

          {/* Order */}
          <div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C4522A', marginBottom: 16 }}>Order</div>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#664520', lineHeight: 1.7, marginBottom: 16 }}>Order ahead for pickup on Menaul Blvd.</p>
            <a href="https://menutoeat.com/la-sierra-new-mexican-restaurant/" target="_blank" rel="noopener" style={{
              display: 'inline-block', background: '#C4522A', color: '#FAF6EE',
              borderRadius: 4, padding: '9px 18px',
              fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: '.07em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'background 150ms',
            }}
            onMouseEnter={e => e.currentTarget.style.background='#a8401c'}
            onMouseLeave={e => e.currentTarget.style.background='#C4522A'}
            >Order Online</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #221408', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#442E12' }}>© 2026 La Sierra Mexican Kitchen. All rights reserved.</div>
          <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#442E12' }}>Albuquerque, NM</div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Location, Footer });
