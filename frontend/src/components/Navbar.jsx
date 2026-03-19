const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <a href="#home" className="brand">
          Preeti Raskoti
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
