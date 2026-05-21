import React, { lazy } from 'react';
export function MapSection() {
  return (
    <a
      id="location"
      href="https://maps.app.goo.gl/myRHsm1dDtek22DX9?g_st=ic"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Отвори локацията в Google Maps"
      className="block w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden border-2 border-brand-green/30 mb-4 cursor-pointer hover:border-brand-green transition-colors">
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.8!2d23.6011!3d42.6684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab3b5a3b5a5a5a%3A0x0!2sul.%20Kaloyan%2C%20Elin%20Pelin%202100!5e0!3m2!1sbg!2sbg!4v1700000000000!5m2!1sbg!2sbg"
        allowFullScreen
        loading="lazy"
        title="Street Burger локация"
        className="block w-full h-[260px] border-0 pointer-events-none" />
      
    </a>);

}