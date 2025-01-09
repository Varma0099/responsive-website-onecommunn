import React, { useState } from 'react';
import { Menu, Search, User, ChevronDown, ShoppingCart } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Living', path: '/living', hasDropdown: true },
  { name: 'Storage', path: '/storage', hasDropdown: true },
  { name: 'Dining', path: '/dining', hasDropdown: true },
  { name: 'Bedroom', path: '/bedroom', hasDropdown: true },
  { name: 'Mattress', path: '/mattress', hasDropdown: true },
  { name: 'Study', path: '/study', hasDropdown: true },
  { name: 'Office', path: '/office', hasDropdown: true },
  { name: 'Outdoor', path: '/outdoor', hasDropdown: true },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__"
              alt="Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.path}
                  className="px-3 py-2 text-sm font-medium hover:text-gray-300 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Search and User Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-1 hover:text-gray-300">
              <Search className="h-6 w-6" />
            </button>
            <button className="p-1 hover:text-gray-300">
              <User className="h-6 w-6" />
            </button>
            <button className="p-1 hover:text-gray-300">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button
              className="md:hidden p-1 hover:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-3 py-2 text-base font-medium hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;