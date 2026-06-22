import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Vakansiya() {
  const { t } = useTranslation();
  const [tab, setTab] = useState('ofis');
  const [page, setPage] = useState(4);

  const nextPage = () => { if (page < 4) setPage(page + 1); };
  const prevPage = () => { if (page > 1) setPage(page - 1); };

  // ... barcha karta va rasm kodi o'zgarishsiz, faqat matnlar t() bilan:
  return (
    <>
      {/* carousel o'zgarishsiz */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://havasfood.uz/wp-content/uploads/2020/12/banner-karera-uzb-scaled.jpg" className="w-full" />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://havasfood.uz/wp-content/uploads/2020/12/banner-karera-uzb1-scaled.jpg" className="w-full" />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50 rounded-xl font-sans text-[#1a1a1a]">
        <div className="mb-6">
          <h2 className="text-xl font-black uppercase tracking-wide inline-block relative">
            {t('vacancy.title')}
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#f9db06] -z-10 opacity-80"></span>
          </h2>
        </div>

        <div className="inline-flex border border-[#e56321] rounded-full p-0.5 mb-8 bg-white overflow-hidden">
          <button onClick={() => setTab('dokon')} className={`px-8 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${tab === 'dokon' ? 'bg-[#238536] text-white' : 'text-[#e56321]'}`}>
            {t('vacancy.store')}
          </button>
          <button onClick={() => setTab('ofis')} className={`px-8 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${tab === 'ofis' ? 'bg-[#238536] text-white' : 'text-[#e56321]'}`}>
            {t('vacancy.office')}
          </button>
        </div>

        {/* Kartalar o'zgarishsiz, faqat "Anketani to'ldiring" o'rniga: */}
        {tab === 'dokon' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-5 bg-white border border-gray-300 rounded-lg p-5">
              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 text-gray-700">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Sotuvchi konsultant</h3>
                <p className="text-xs text-black font-semibold mt-2 underline underline-offset-4 cursor-pointer">{t('vacancy.fillForm')}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-white border border-gray-300 rounded-lg p-5">
              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 text-gray-700">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.447-.266-.852-.682-1.028l-4.485-1.922a1.5 1.5 0 0 0-1.07-.042l-2.203.66a1.5 1.5 0 0 0-1.078 1.432V18.75M12 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h3.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Yuk mashinasi haydovchisi</h3>
                <p className="text-xs text-black font-semibold mt-2 underline underline-offset-4 cursor-pointer">{t('vacancy.fillForm')}</p>
              </div>
            </div>
          </div>
        )}

        {tab === 'ofis' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {['ETL mutaxassis', 'Tizim administratori', 'Maslahatchi yurist', 'Realizatsiya hisobchisi', 'Analitika bo\'limi mutaxassisi'].map((pos) => (
              <div key={pos} className="flex items-center gap-5 bg-white border border-gray-300 rounded-lg p-5">
                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 text-gray-700">
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">{pos}</h3>
                  <p className="text-xs text-black font-semibold mt-2 underline underline-offset-4 cursor-pointer">{t('vacancy.fillForm')}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
          <p className="text-base font-medium text-gray-900 text-center sm:text-left">{t('vacancy.footer')}</p>
          <button className="px-8 py-2 border border-[#238536] text-[#238536] font-medium rounded-full hover:bg-[#238536] hover:text-white transition-colors duration-200 whitespace-nowrap">
            {t('vacancy.fill')}
          </button>
        </div>
      </div>

      {/* "Nima uchun Havas" qismi — matnlar o'zgarishsiz, faqat sarlavha: */}
      <div className="w-full max-w-5xl mx-auto p-6 bg-white font-sans text-[#1a1a1a]">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide inline-block relative">
            {t('vacancy.whyHavas')}
            <span className="absolute bottom-0 left-0 w-full h-3 bg-[#f9db06] -z-10 opacity-80"></span>
          </h2>
        </div>
        {/* page navigation va kartalar o'zgarishsiz */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start min-h-[320px]">
          <div className="md:col-span-4 w-full aspect-[4/3] md:aspect-auto md:h-64 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
            {page === 1 && <img src="https://havasfood.uz/wp-content/uploads/2026/04/2388y7.png" alt="" className="w-full h-full object-cover" />}
            {page === 2 && <img src="https://havasfood.uz/wp-content/uploads/2026/04/72366y.png" alt="" className="w-full h-full object-cover" />}
            {page === 3 && <img src="https://havasfood.uz/wp-content/uploads/2026/04/72366y-2.png" alt="" className="w-full h-full object-cover" />}
            {page === 4 && <img src="https://havasfood.uz/wp-content/uploads/2026/04/82377yya.png" alt="" className="w-full h-full object-cover" />}
          </div>
          <div className="md:col-span-8 flex flex-col justify-between h-full pt-2">
            <div>
              {page === 1 && (<><h3 className="text-xl font-bold text-gray-800">Sultonov Bobur</h3><p className="text-sm text-gray-400 mt-0.5">Kassir</p><p className="text-base text-gray-700 leading-relaxed mt-4">Bunday tashkilotda ishlash men uchun katta sharaf!...</p></>)}
              {page === 2 && (<><h3 className="text-xl font-bold text-gray-800">Mannopova Malika</h3><p className="text-sm text-gray-400 mt-0.5">Sotuvchi</p><p className="text-base text-gray-700 leading-relaxed mt-4">HAVAS tufayli men o'z ustimda ishlayman...</p></>)}
              {page === 3 && (<><h3 className="text-xl font-bold text-gray-800">Abzalov Shuhrat</h3><p className="text-sm text-gray-400 mt-0.5">Ombor xodimi</p><p className="text-base text-gray-700 leading-relaxed mt-4">Menga bu yerda ishlash yoqadi...</p></>)}
              {page === 4 && (<><h3 className="text-xl font-bold text-gray-800">Rahmonov Sevdiyor</h3><p className="text-sm text-gray-400 mt-0.5">Ma'mur</p><p className="text-base text-gray-700 leading-relaxed mt-4">Men do'stona jamoada ishlayotganimdan mamnunman...</p></>)}
            </div>
            <div className="flex items-center gap-4 mt-8 select-none">
              <button onClick={prevPage} disabled={page === 1} className={`text-2xl font-light ${page === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-black hover:text-gray-600'}`}>&lt;</button>
              {[1,2,3,4].map((n) => (
                <button key={n} onClick={() => setPage(n)} className={`text-xl transition-all duration-150 ${page === n ? 'font-black scale-125 border-b-2 border-black px-1' : 'font-medium text-gray-800 hover:text-black'}`}>{n}</button>
              ))}
              <button onClick={nextPage} disabled={page === 4} className={`text-2xl font-light ${page === 4 ? 'text-gray-300 cursor-not-allowed' : 'text-black hover:text-gray-600'}`}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}