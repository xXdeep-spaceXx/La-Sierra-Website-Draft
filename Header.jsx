// Header component — sticky nav
const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    ['menu', 'Menu'],
    ['about', 'About'],
    ['reviews', 'Reviews'],
    ['location', 'Hours & Location'],
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,246,238,0.97)' : '#FAF6EE',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #E5D9C6',
      boxShadow: scrolled ? '0 2px 12px rgba(34,20,8,.10)' : 'none',
      transition: 'all 250ms ease-out',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="assets/logo.svg" alt="La Sierra" style={{ height: 40 }} onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }} />
          <div style={{ display: 'none', width: 36, height: 36, background: '#C4522A', borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#FAF6EE', fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700 }}>L</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {navLinks.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Lato', sans-serif", fontSize: 12, fontWeight: 700,
              letterSpacing: '.07em', textTransform: 'uppercase', color: '#442E12',
              padding: '4px 0', transition: 'color 150ms',
              borderBottom: '2px solid transparent',
            }}
            onMouseEnter={e => { e.currentTarget.style.color='#C4522A'; }}
            onMouseLeave={e => { e.currentTarget.style.color='#442E12'; }}
            >{label}</button>
          ))}
          <a href="https://menutoeat.com/la-sierra-new-mexican-restaurant/" target="_blank" rel="noopener" style={{
            background: '#C4522A', color: '#FAF6EE', border: 'none', borderRadius: 4,
            padding: '10px 20px', fontFamily: "'Lato', sans-serif", fontSize: 12,
            fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'background 150ms', textDecoration: 'none',
            display: 'inline-block',
          }}
          onMouseEnter={e => e.currentTarget.style.background='#a8401c'}
          onMouseLeave={e => e.currentTarget.style.background='#C4522A'}
          >Order Online</a>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          padding: 8, color: '#221408',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen
              ? <><line x1="4" y1="4" x2="20" y2="20" stroke="#221408" strokeWidth="2" strokeLinecap="round"/><line x1="20" y1="4" x2="4" y2="20" stroke="#221408" strokeWidth="2" strokeLinecap="round"/></>
              : <><line x1="3" y1="7" x2="21" y2="7" stroke="#221408" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="12" x2="21" y2="12" stroke="#221408" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="17" x2="21" y2="17" stroke="#221408" strokeWidth="2" strokeLinecap="round"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ background: '#FAF6EE', borderTop: '1px solid #E5D9C6', padding: '12px 24px 24px' }}>
          {navLinks.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Lato', sans-serif", fontSize: 14, fontWeight: 700,
              letterSpacing: '.05em', textTransform: 'uppercase', color: '#442E12',
              padding: '13px 0', borderBottom: '1px solid #E5D9C6',
            }}>{label}</button>
          ))}
          <a href="https://menutoeat.com/la-sierra-new-mexican-restaurant/" target="_blank" rel="noopener" style={{
            display: 'block', marginTop: 16, background: '#C4522A', color: '#FAF6EE',
            borderRadius: 4, padding: '13px 24px',
            fontFamily: "'Lato', sans-serif", fontSize: 13, fontWeight: 700,
            letterSpacing: '.05em', textTransform: 'uppercase', textAlign: 'center',
            textDecoration: 'none',
          }}>Order Online</a>
        </div>
      )}
    </header>
  );
};

Object.assign(window, { Header });
