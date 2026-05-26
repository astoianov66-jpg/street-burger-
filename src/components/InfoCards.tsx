import React from 'react';
import { MapPinIcon, ClockIcon, PhoneIcon } from 'lucide-react';
type Item = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  full?: boolean;
};
const items: Item[] = [
{
  icon: <MapPinIcon className="w-6 h-6" strokeWidth={2.25} />,
  title: 'Локация',
  content:
  <>
        ул. „Калоян"
        <br />
        Елин Пелин
      </>

},
{
  icon: <ClockIcon className="w-6 h-6" strokeWidth={2.25} />,
  title: 'Работно Време',
  content:
  <>
        Всеки ден
        <br />
        10:00 – 22:00
      </>

},
{
  icon: <PhoneIcon className="w-6 h-6" strokeWidth={2.25} />,
  title: 'Телефон',
  content:
  <a
    href="tel:0877688110"
    className="text-brand-text hover:text-brand-green transition-colors">
    
        0877 688 110
      </a>,

  full: true
}];

export function InfoCards() {
  return (
    <div className="w-full max-w-[500px] mx-auto px-1 mb-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((item) =>
      <div
        key={item.title}
        className={`bg-brand-card border border-brand-green/30 rounded-xl px-3 py-[18px] text-center ${item.full ? 'col-span-2 sm:col-span-1' : ''}`}>
        
          <div className="flex justify-center text-brand-green mb-2">
            {item.icon}
          </div>
          <div className="text-brand-green text-[10px] font-extrabold tracking-[2px] uppercase mb-1.5">
            {item.title}
          </div>
          <div className="text-brand-text text-sm font-bold leading-[1.5]">
            {item.content}
          </div>
        </div>
      )}
    </div>);

}
