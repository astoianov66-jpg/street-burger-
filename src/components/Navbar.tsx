import React from 'react';
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-brand-dark border-b-2 border-brand-green px-5 py-4 sm:px-8 sm:py-[18px]">
      <a
        href="#"
        className="font-display text-2xl sm:text-[28px] text-brand-green">
        
        🍔 Street Burger
      </a>
      <div className="flex gap-4">
        <a
          href="#menu"
          className="text-brand-muted hover:text-brand-green transition-colors text-xs font-extrabold tracking-[1px] uppercase">
          
          Меню
        </a>
        <a
          href="#location"
          className="text-brand-muted hover:text-brand-green transition-colors text-xs font-extrabold tracking-[1px] uppercase">
          
          Локация
        </a>
      </div>
    </nav>);

}