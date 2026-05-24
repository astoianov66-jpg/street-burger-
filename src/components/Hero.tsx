import React, { useEffect, createElement } from 'react'
export function Hero() {
  useEffect(() => {
    if (document.querySelector('script[data-model-viewer]')) return
    const script = document.createElement('script')
    script.type = 'module'
    script.src =
      'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
    script.setAttribute('data-model-viewer', 'true')
    document.head.appendChild(script)
  }, [])
  return (
    <div className="flex flex-col items-center text-center px-5 pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10 relative overflow-hidden">
      {/* Model Viewer 3D Burger */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(280px, 70vw, 500px)',
          height: 'clamp(280px, 70vw, 500px)',
          opacity: 0.45,
          pointerEvents: 'none',
          zIndex: 0,
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        {/* @ts-ignore */}
        <model-viewer
          src="/krabby_patty_burger.glb"
          auto-rotate
          rotation-per-second="25deg"
          disable-zoom
          interaction-prompt="none"
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
        className="flex flex-col items-center w-full"
      >
        <div className="inline-block bg-brand-green/10 text-brand-green border border-brand-green/30 text-[11px] font-extrabold tracking-[1px] uppercase px-3 py-1 rounded-full mb-4">
          🔥 Прясно приготвено всеки ден
        </div>
        <h1 className="font-sans font-extrabold text-white text-[clamp(32px,9vw,76px)] leading-[1.05] tracking-tight mb-2.5">
          ИСТИНСКИ
          <br />
          <span className="text-brand-green">STREET</span> BURGER
        </h1>
        <p className="text-brand-muted text-[13px] font-bold tracking-[2px] uppercase mb-7">
          Елин Пелин · Бургери · Хот-дог · Скара
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <a
            href="#menu"
            className="bg-brand-green text-white font-extrabold text-sm tracking-[1px] uppercase px-[26px] py-[13px] rounded-lg active:scale-[0.97] transition-transform hover:bg-brand-green/90"
          >
            Виж Менюто
          </a>
          <a
            href="https://maps.app.goo.gl/myRHsm1dDtek22DX9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-brand-green text-brand-green font-extrabold text-sm tracking-[1px] uppercase px-[26px] py-[13px] rounded-lg active:scale-[0.97] transition-transform hover:bg-brand-green/10"
          >
            Намери ни
          </a>
        </div>
        <div className="w-[50px] h-[3px] bg-brand-green rounded-sm" />
      </div>
    </div>
  )
}
