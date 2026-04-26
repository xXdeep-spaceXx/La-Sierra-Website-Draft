// Menu section
const MENU_DATA = {
  'Breakfast': [
    { name: 'Breakfast Burrito', desc: 'Scrambled eggs, potato, cheese, your choice of red or green chile', price: '$9.00', tag: 'Morning Fave', tagColor: '#2E5E30', tagBg: '#edf4ee' },
    { name: 'Huevos Rancheros', desc: 'Two eggs over corn tortillas, red chile, beans & rice', price: '$9.50' },
    { name: 'Chorizo & Egg Plate', desc: 'House chorizo, scrambled eggs, flour tortillas, beans', price: '$10.00' },
    { name: 'Pancakes', desc: 'Fluffy buttermilk pancakes, butter & maple syrup', price: '$7.00' },
    { name: 'French Toast', desc: 'Thick-cut bread, cinnamon, powdered sugar', price: '$7.50' },
    { name: 'Menudo', desc: 'Traditional red chile tripe soup, served with tortillas', price: '$9.00', tag: 'Weekend Special', tagColor: '#C4522A', tagBg: '#fdf3ee' },
  ],
  'Burritos & Plates': [
    { name: 'Chicharrone Burrito', desc: 'Crispy pork skins, rice, beans, red or green chile', price: '$10.50', tag: 'House Favorite', tagColor: '#C4522A', tagBg: '#fdf3ee' },
    { name: 'Chicken Flautas', desc: 'Three crispy rolled flautas, sour cream, guacamole & salsa', price: '$11.00', tag: 'Popular', tagColor: '#2E5E30', tagBg: '#edf4ee' },
    { name: 'Tamale Plate', desc: 'House-made tamale with red chile, rice & beans', price: '$9.50' },
    { name: 'Taco Salad', desc: 'Crispy shell, seasoned beef or chicken, lettuce, tomato, cheese', price: '$10.00', tag: 'Popular', tagColor: '#2E5E30', tagBg: '#edf4ee' },
    { name: 'Enchilada Plate', desc: 'Two enchiladas, your choice of filling & chile, rice & beans', price: '$11.50' },
    { name: 'Bean & Cheese Burrito', desc: 'Pinto beans, cheddar, your choice of red or green chile', price: '$8.00' },
  ],
  'Sides & Drinks': [
    { name: 'Chips & Salsa', desc: 'House-made tortilla chips with fresh-made red salsa — free with dine-in', price: 'Free / $2.50 to-go', tag: 'Fan Fave', tagColor: '#D4901A', tagBg: '#fdf8ec' },
    { name: 'Red Chile', desc: 'Our legendary New Mexican red chile sauce, by the cup', price: '$2.50' },
    { name: 'Green Chile', desc: 'Roasted Hatch green chile sauce, by the cup', price: '$2.50' },
    { name: 'Rice & Beans', desc: 'Mexican rice and seasoned pinto beans', price: '$3.50' },
    { name: 'Sopapillas', desc: 'Light, fried dough pastries with honey', price: '$3.00' },
    { name: 'Mexican Coke', desc: 'Made with real cane sugar', price: '$2.50' },
  ],
};

const TAG_COLORS = {
  'Burritos & Plates': 'linear-gradient(135deg, #C4522A 0%, #D4901A 100%)',
  'Breakfast': 'linear-gradient(135deg, #D4901A 0%, #a8401c 100%)',
  'Sides & Drinks': 'linear-gradient(135deg, #442E12 0%, #8A6035 100%)',
};

const MenuCard = ({ item }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: 'white', border: '1px solid #E5D9C6', borderRadius: 8,
      overflow: 'hidden',
      boxShadow: hov ? '0 4px 20px rgba(34,20,8,.12)' : '0 2px 8px rgba(34,20,8,.06)',
      transform: hov ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'all 200ms ease-out', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ height: 5, background: '#C4522A', opacity: 0.7 }} />
      <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: '#221408', lineHeight: 1.25 }}>{item.name}</div>
          {item.tag && (
            <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', color: item.tagColor, background: item.tagBg, padding: '3px 8px', borderRadius: 4, flexShrink: 0, whiteSpace: 'nowrap' }}>{item.tag}</span>
          )}
        </div>
        <div style={{ fontSize: 13, color: '#8A6035', lineHeight: 1.55, flex: 1 }}>{item.desc}</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: '#C4522A', marginTop: 14 }}>{item.price}</div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = React.useState('Burritos & Plates');
  const tabs = Object.keys(MENU_DATA);

  return (
    <section id="menu" data-screen-label="Menu" style={{ background: '#F7F0E3', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C4522A', marginBottom: 12 }}>Made Fresh Daily</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#221408', lineHeight: 1.1 }}>Our Menu</h2>
          <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: 24, fontWeight: 600, color: '#8A6035', marginTop: 8 }}>Made with love, served with heart</div>
          <div style={{ width: 48, height: 3, background: '#C4522A', borderRadius: 2, margin: '20px auto 0' }} />
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap' }}>
          {tabs.map(tab => {
            const active = activeTab === tab;
            return (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                background: active ? '#C4522A' : 'white',
                color: active ? '#FAF6EE' : '#442E12',
                border: `2px solid ${active ? '#C4522A' : '#E5D9C6'}`,
                borderRadius: 4, padding: '9px 22px',
                fontFamily: "'Lato', sans-serif", fontSize: 12, fontWeight: 700,
                letterSpacing: '.06em', textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 150ms',
                boxShadow: active ? '0 2px 8px rgba(196,82,42,.25)' : 'none',
              }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor='#C4522A'; e.currentTarget.style.color='#C4522A'; } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor='#E5D9C6'; e.currentTarget.style.color='#442E12'; } }}
              >{tab}</button>
            );
          })}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 16 }}>
          {MENU_DATA[activeTab].map(item => <MenuCard key={item.name} item={item} />)}
        </div>

        {/* Dine-in perk + order CTA */}
        <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          <div style={{
            background: '#221408', borderRadius: 8, padding: '20px 24px',
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{ width: 42, height: 42, background: '#C4522A', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FAF6EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700, color: '#D4901A', letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 3 }}>Dine-in Perk</div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#C9A97A', lineHeight: 1.5 }}>Free chips and salsa with every dine-in order. No catch.</div>
            </div>
          </div>
          <div style={{
            background: 'white', border: '2px solid #C4522A', borderRadius: 8, padding: '20px 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}>
            <div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 700, color: '#C4522A', letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 3 }}>Order Ahead</div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#442E12', lineHeight: 1.5 }}>Ready for pickup on Menaul Blvd.</div>
            </div>
            <a href="https://menutoeat.com/la-sierra-new-mexican-restaurant/" target="_blank" rel="noopener" style={{
              background: '#C4522A', color: '#FAF6EE', borderRadius: 4, padding: '10px 20px',
              fontFamily: "'Lato', sans-serif", fontSize: 12, fontWeight: 700,
              letterSpacing: '.06em', textTransform: 'uppercase', textDecoration: 'none',
              whiteSpace: 'nowrap', flexShrink: 0, transition: 'background 150ms',
            }}
            onMouseEnter={e => e.currentTarget.style.background='#a8401c'}
            onMouseLeave={e => e.currentTarget.style.background='#C4522A'}
            >Order Online</a>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Menu, MenuCard });
