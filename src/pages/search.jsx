import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStore } from '../Store/zustand';

export default function QidiruvNatijalari() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { products } = useStore();

  // Qidiruv mantiqini to'g'ri mahsulotlar ro'yxatiga bog'ladik
  const filteredProducts = products.filter(product =>
    product.nomi.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#121214] text-gray-800 dark:text-gray-300 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-10">
        
        {/* Orqaga qaytish tugmasi */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate('/')} 
            className="bg-amber-500 hover:bg-amber-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-neutral-950 text-xs md:text-sm font-bold px-6 py-2.5 rounded-full shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            {t('search.back')}
          </button>
        </div>
        
        {/* Natijalar haqida ma'lumot sarlavhasi */}
        <div className="mb-4">
          <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-gray-100 tracking-wide">
            {t('search.results')}: <span className="font-medium text-amber-500 dark:text-emerald-400">"{query}"</span>
          </h1>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-2">
            {t('search.found')} <span className="text-gray-900 dark:text-gray-200 font-bold">{filteredProducts.length}</span> {t('search.count_suffix', 'ta mahsulot')}
          </p>
        </div>
        
        <hr className="border-gray-100 dark:border-[#1f1f23] my-6" />
        
        {/* Natijalar ro'yxati qismi */}
        {filteredProducts.length > 0 ? (
          <ul className="list-none p-0 m-0 divide-y divide-gray-100 dark:divide-[#1f1f23]">
            {filteredProducts.map((product, idx) => (
              <li key={idx} className="py-6 flex flex-col sm:flex-row gap-6 items-start group">
                
                {/* Mahsulot rasmi foni va ramkasi */}
                <div className="w-full sm:w-48 shrink-0 bg-gray-50 dark:bg-[#1a1a1e] rounded-2xl p-4 border border-gray-100 dark:border-[#25252b] h-40 flex items-center justify-center overflow-hidden transition-colors">
                  <img 
                    src={product.rasm_url} 
                    alt={product.nomi} 
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                
                {/* Mahsulot kontent ma'lumotlari */}
                <div className="flex flex-col justify-between min-h-[160px] flex-1 pt-1">
                  <div>
                    <span className="bg-gray-100 dark:bg-[#1a1a1e] text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md transition-colors">
                      {product.turkum}
                    </span>
                    <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-gray-100 uppercase leading-snug mt-3 group-hover:text-amber-500 dark:group-hover:text-emerald-400 transition-colors">
                      {product.nomi}
                    </h2>
                    {product.tavsifi && (
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed line-clamp-2">
                        {product.tavsifi}
                      </p>
                    )}
                    <p className="text-xl font-black text-amber-500 dark:text-emerald-400 mt-3 tracking-wide">
                      {product.narxi} <span className="text-xs font-normal text-gray-400">{t('home.som')}</span>
                    </p>
                  </div>
                  
                  <button className="mt-4 self-start text-xs md:text-sm font-bold text-amber-500 dark:text-emerald-400 hover:text-amber-600 dark:hover:text-emerald-300 underline underline-offset-4 transition-colors">
                    {t('search.detail')}
                  </button>
                </div>

              </li>
            ))}
          </ul>
        ) : (
          /* Hech narsa topilmagandagi blok */
          <div className="py-16 text-center text-gray-400 dark:text-gray-500 text-sm md:text-base border border-dashed border-gray-200 dark:border-[#25252b] rounded-2xl bg-gray-50 dark:bg-[#1a1a1e] transition-colors">
            <p className="text-2xl mb-2">🔍</p>
            {t('search.no_results') || 'Hech narsa topilmadi'}
          </div>
        )}
      </div>
    </div>
  );
}
