// Reviews section
const REVIEWS = [
  {
    name: 'Local Guide', initial: 'L', color: '#C4522A', date: '3 days ago', stars: 5,
    text: 'I\'ve been to the Menaul location so wanted to try this one. Great! If you eat there it\'s free chips and salsa, delicious too. Open 8–3 for now until they get more help. Super friendly service.',
  },
  {
    name: 'Google Reviewer', initial: 'G', color: '#D4901A', date: 'a week ago', stars: 5,
    text: 'Great food! Friendly staff. Taken my wife there soon.',
  },
  {
    name: 'Happy Customer', initial: 'H', color: '#2E5E30', date: '4 weeks ago', stars: 5,
    text: 'I had a great lunch yesterday. Flautas (chicken), tamale, chips and salsa. The red chile is so good! Server was excellent, very nice and attentive. Can\'t wait til they open for dinner!',
  },
  {
    name: 'Food Lover', initial: 'F', color: '#8A6035', date: '3 weeks ago', stars: 5,
    text: 'Had the chicharrone burrito and taco salad, both were good. Super friendly service. Will be back for sure!',
  },
];

const Stars = ({ n }) => (
  <div style={{ display: 'flex', gap: 2 }}>
    {[...Array(n)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#D4901A" stroke="#D4901A" strokeWidth="1">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ))}
  </div>
);

const Reviews = () => (
  <section id="reviews" data-screen-label="Reviews" style={{ background: '#221408', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
    {/* Background tile */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='none' stroke='%23C4522A' stroke-width='0.5' opacity='0.12'/%3E%3Ccircle cx='30' cy='30' r='2.5' fill='%23C4522A' opacity='0.08'/%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px',
    }} />

    <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#D4901A', marginBottom: 12 }}>Google Reviews</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 700, color: '#F7F0E3', lineHeight: 1.12 }}>What People Are Saying</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 18 }}>
          <Stars n={5} />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#F7F0E3' }}>5.0</span>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#664520' }}>on Google</span>
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
        {REVIEWS.map((r, i) => (
          <div key={i} style={{
            background: i === 2 ? '#C4522A' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${i === 2 ? 'transparent' : 'rgba(196,82,42,0.22)'}`,
            borderRadius: 8, padding: '26px',
            transition: 'transform 200ms ease-out',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Stars n={r.stars} />
            <p style={{
              fontFamily: "'Playfair Display', serif", fontStyle: 'italic',
              fontSize: 15, color: i === 2 ? '#FAF6EE' : '#C9A97A',
              lineHeight: 1.7, margin: '14px 0 18px',
            }}>"{r.text}"</p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              paddingTop: 14, borderTop: `1px solid ${i === 2 ? 'rgba(247,240,227,0.2)' : 'rgba(196,82,42,0.18)'}`,
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%', background: r.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#FAF6EE', fontSize: 13, fontWeight: 700, flexShrink: 0,
              }}>{r.initial}</div>
              <div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, fontWeight: 700, color: i === 2 ? '#FAF6EE' : '#F7F0E3' }}>{r.name}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, color: i === 2 ? 'rgba(247,240,227,0.6)' : '#664520', marginTop: 1 }}>{r.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google CTA */}
      <div style={{ textAlign: 'center', marginTop: 44 }}>
        <a href="https://maps.app.goo.gl/search/La+Sierra+Menaul+Albuquerque" target="_blank" rel="noopener" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: "'Lato', sans-serif", fontSize: 12, fontWeight: 700,
          letterSpacing: '.07em', textTransform: 'uppercase',
          color: '#D4901A', textDecoration: 'none',
          border: '1px solid rgba(212,144,26,0.35)', borderRadius: 4, padding: '10px 20px',
          transition: 'all 150ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(212,144,26,0.7)'; e.currentTarget.style.background='rgba(212,144,26,0.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,144,26,0.35)'; e.currentTarget.style.background='transparent'; }}
        >
          Leave us a review on Google
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4901A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>
  </section>
);

Object.assign(window, { Reviews });
