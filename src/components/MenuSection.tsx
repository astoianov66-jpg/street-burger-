import React, { useState } from 'react'

type MenuItem = { name: string; price: string }
type Category = { id: string; label: string; emoji: string; items: MenuItem[] }

const categories: Category[] = [
  {
    id: 'sandwiches',
    label: 'Сандвичи',
    emoji: '🍔',
    items: [
      { name: 'Телешки бургер', price: '€7.00' },
      { name: 'Свински бургер', price: '€7.00' },
      { name: 'Хотдог с кренвирш', price: '€3.00' },
      { name: 'Хотдог с кебапче', price: '€3.00' },
    ],
  },
  {
    id: 'skara',
    label: 'Скара',
    emoji: '🔥',
    items: [
      { name: 'Кюфте', price: '€1.20' },
      { name: 'Кебапче', price: '€1.20' },
      { name: 'Свинска пържола', price: '€4.00' },
      { name: 'Свинска наденица', price: '€2.60' },
      { name: 'Свинска кълцаница', price: '€2.60' },
      { name: 'Свински бекон', price: '€1.50' },
      { name: 'Свинско шишче', price: '€3.00' },
      { name: 'Свински суджук', price: '€3.50' },
      { name: 'Свинска плескавица', price: '€2.00' },
      { name: 'Пилешко шишче', price: '€3.00' },
      { name: 'Пилешка пържола', price: '€4.00' },
      { name: 'Пилешка плескавица', price: '€3.00' },
      { name: 'Меча лапа', price: '€3.50' },
      { name: 'Татарско кюфте', price: '€3.00' },
      { name: 'Телешки суджук', price: '€3.50' },
      { name: 'Телешка плескавица', price: '€3.00' },
      { name: 'Карначе', price: '€2.00' },
      { name: 'Кълцано карначе', price: '€1.50' },
      { name: 'Пържени картофи', price: '€3.00' },
      { name: 'Пържени картофи със сирене', price: '€3.50' },
      { name: 'Пържени картофи (гарнитура)', price: '€2.00' },
    ],
  },
  {
    id: 'salati',
    label: 'Салати      200гр',
    emoji: '🥗',
    items: [
      { name: 'Шопска салата', price: '€2.00' },
      { name: 'Зелева салата', price: '€2.00' },
      { name: 'Салата Снежанка', price: '€2.00' },
      { name: 'Картофена салата', price: '€2.00' },
      { name: 'Боб с лютеница', price: '€2.00' },
      { name: 'Таратор', price: '€2.00' },
      { name: 'Печени чушки', price: '€0.50' },
      { name: 'Люти чушки', price: '€0.25' },
    ],
  },
  {
    id: 'hlyab',
    label: 'Хляб',
    emoji: '🍞',
    items: [
      { name: 'Питка', price: '€0.50' },
      { name: 'Филия', price: '€0.10' },
    ],
  },
  {
    id: 'desert',
    label: 'Десерти',
    emoji: '🍩',
    items: [
      { name: 'Донат с шоколадов пълнеж', price: '€1.50' },
      { name: 'Донат с баварски крем', price: '€1.50' },
      { name: 'Мъфин червено кадифе', price: '€2.00' },
    ],
  },
  {
    id: 'topli',
    label: 'Топли напитки',
    emoji: '☕',
    items: [
      { name: 'Кафе', price: '€0.80' },
      { name: 'Кафе 3в1', price: '€0.80' },
      { name: 'Чай', price: '€0.80' },
    ],
  },
{
    id: 'bira',
    label: 'Бира',
    emoji: '🍺',
    items: [
      { name: 'Наливна бира "Бургаско"', price: '€2.00' },
    ],
  },
]

export function MenuSection() {
  const [active, setActive] = useState('sandwiches')
  const current = categories.find((c) => c.id === active)!

  return (
    <section id="menu" className="px-5 sm:px-8 py-10 max-w-[600px] mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block bg-brand-green/10 text-brand-green border border-brand-green/30 text-[11px] font-extrabold tracking-[1px] uppercase px-3 py-1 rounded-full mb-3">
          🍽️ Нашето меню
        </div>
        <h2 className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight">
          Избери си нещо вкусно
        </h2>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold uppercase tracking-[0.5px] transition-all border ${
              active === cat.id
                ? 'bg-brand-green text-white border-brand-green'
                : 'bg-brand-card text-brand-muted border-brand-green/20 hover:border-brand-green/50'
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
      <div className="bg-brand-card border border-brand-green/20 rounded-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-brand-green/20 flex items-center gap-2">
          <span className="text-xl">{current.emoji}</span>
          <span className="text-brand-green font-extrabold text-sm uppercase tracking-[1px]">
            {current.label}
          </span>
        </div>
        <div className="divide-y divide-brand-green/10">
          {current.items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between px-4 py-3 hover:bg-brand-green/5 transition-colors"
            >
              <span className="text-brand-text text-sm font-bold">{item.name}</span>
              <span className="text-brand-green font-extrabold text-sm ml-4 whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
