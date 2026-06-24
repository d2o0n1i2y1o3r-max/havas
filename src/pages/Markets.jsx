import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DokonlarPage() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(true);
  const [showMap, setShowMap] = useState(false);

  const stores = [
    { id: 'H354', name: "Yunusobot tumani, Jomiy MFY Bog'iravon 55 uy ( Batunskiy )", map: 'https://maps.app.goo.gl/9Cv38n1w6ZPaiNdb9', hours: '08:00-22:00', phone: '+998712059595' },
    { id: 'H353', name: 'Toshkent tumani, Ixlos 33, Sabzavot mahallasi', map: 'https://maps.app.goo.gl/zh4CCBsarSv3kma29', hours: '08:00-22:00', phone: '+998712059595' },
    { id: 'H352', name: 'Chilonzor tumani, Torgoviy sentr ( Rio Grand)', map: 'https://maps.app.goo.gl/wX5rZL9hrDNovkom9', hours: '08:00-22:00', phone: '+998712059595' },
  ];

  return (
    <div className="relative w-full bg-white dark:bg-[#121214] min-h-screen transition-colors duration-300">
      
      {/* 1. Modal: Eng yaqin do'konni topish taklifi */}
      {showModal && !showMap && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#1a1a1e] border border-transparent dark:border-[#25252b] rounded-2xl px-8 py-8 w-full max-w-sm relative text-center shadow-2xl transition-all">
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-amber-500 dark:hover:text-emerald-400 text-xl font-bold transition-colors"
            >
              ✕
            </button>
            <p className="text-gray-900 dark:text-gray-100 font-bold text-base mb-6">
              {t('stores.findNearest')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button 
                onClick={() => { setShowModal(false); setShowMap(true); }} 
                className="w-full sm:w-auto bg-amber-500 dark:bg-emerald-500 text-white dark:text-neutral-950 font-bold px-5 py-2.5 rounded-full text-xs md:text-sm hover:bg-amber-600 dark:hover:bg-emerald-400 transition-colors shadow-sm"
              >
                {t('stores.findRoute')}
              </button>
              <button 
                onClick={() => setShowModal(false)} 
                className="w-full sm:w-auto bg-gray-100 dark:bg-[#2a2a30] text-gray-700 dark:text-gray-200 font-bold px-5 py-2.5 rounded-full text-xs md:text-sm hover:bg-gray-200 dark:hover:bg-[#34343a] transition-colors"
              >
                {t('stores.findMyself')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal: Katta Yandex xaritasi */}
      {showMap && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#1a1a1e] border border-transparent dark:border-[#25252b] rounded-2xl overflow-hidden w-full max-w-2xl h-[450px] md:h-[540px] relative shadow-2xl">
            <button 
              onClick={() => setShowMap(false)} 
              className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 backdrop-blur-xs text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 transition-colors shadow-sm"
            >
              ✕
            </button>
            <iframe 
              src="https://yandex.com/maps/?rtext=~41.2995,69.2401&rtt=auto&mode=routes&ll=69.2401,41.2995&z=11" 
              width="100%" 
              height="100%" 
              style={{ border: 'none' }} 
              title="Yandex yo'nalish xaritasi" 
              className="dark:invert dark:hue-rotate-180 dark:contrast-125" // Xaritani oson va ajoyib dark mode qilish filtri
            />
          </div>
        </div>
      )}

      {/* 3. Yuqori Banner - Yo'riqnoma qismi */}
      <section className="bg-[#1da83a] dark:bg-[#161619] border-b border-transparent dark:border-[#1f1f23] px-6 md:px-16 py-12 md:py-16 flex items-center justify-center text-center md:text-left transition-colors">
        <div className="max-w-4xl w-full">
          <p className="text-white dark:text-emerald-400 text-xl md:text-2xl font-light mb-1">
            {t('stores.newFeature')}
          </p>
          <p className="text-amber-300 dark:text-emerald-400 text-3xl md:text-4xl font-black mb-6">
            {t('stores.getRoute')}
          </p>
          <ul className="flex flex-col gap-3 max-w-xl mx-auto md:mx-0">
            <li className="text-white/90 dark:text-gray-300 text-sm md:text-base flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-300 dark:bg-emerald-400 shrink-0" /> 
              {t('stores.step1')}
            </li>
            <li className="text-white/90 dark:text-gray-300 text-sm md:text-base flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-300 dark:bg-emerald-400 shrink-0" /> 
              {t('stores.step1')}
            </li>
            <li className="text-white/90 dark:text-gray-300 text-sm md:text-base flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-300 dark:bg-emerald-400 shrink-0" /> 
              {t('stores.step3')}
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Do'konlar ro'yxati qismi */}
      <section className="bg-gray-50 dark:bg-[#121214] px-6 md:px-16 py-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 transition-colors">
        {stores.map((store) => (
          <div 
            key={store.id} 
            className="bg-white dark:bg-[#1a1a1e] rounded-2xl px-6 py-6 border border-gray-100 dark:border-[#25252b] hover:shadow-md dark:hover:border-emerald-500/30 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-100 dark:bg-emerald-500/10 text-amber-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-md text-xs font-bold shrink-0">
                  {store.id}
                </span>
                <p className="font-bold text-gray-900 dark:text-gray-100 text-sm md:text-base line-clamp-1">
                  {store.name}
                </p>
              </div>
              <div className="space-y-1.5 text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4">
                <p className="line-clamp-1">
                  <span className="font-medium text-gray-800 dark:text-gray-300">{t('stores.address')}:</span>{' '}
                  <a href={store.map} target="_blank" rel="noreferrer" className="text-amber-500 dark:text-emerald-400 hover:underline">{store.map}</a>
                </p>
                <p>
                  <span className="font-medium text-gray-800 dark:text-gray-300">{t('stores.hours')}:</span> {store.hours}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-gray-300">Tel:</span> {store.phone}
                </p>
              </div>
            </div>
            
            <a 
              href={store.map} 
              target="_blank" 
              rel="noreferrer" 
              className="mt-2 w-full text-center sm:w-auto bg-gray-50 dark:bg-[#25252b] text-gray-800 dark:text-emerald-400 group-hover:bg-amber-500 dark:group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-neutral-950 text-xs md:text-sm font-bold flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all border border-gray-100 dark:border-transparent"
            >
              <span>📍</span> {t('stores.showMap')}
            </a>
          </div>
        ))}
      </section>

    </div>
  );
}
