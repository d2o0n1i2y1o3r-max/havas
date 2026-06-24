import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Corusel from '../components/Corusel';
import json from '../json/card.json';
import { FaHeart } from 'react-icons/fa';
import bozor from '../assets/bozor.png';
import market from '../assets/market.png';
import yil from '../assets/7yil.png';
import bear from '../assets/ayiqlar.png';

export default function Home() {
  const { t } = useTranslation();
  const [card] = useState(json);
  const [isLiked, setIsLiked] = useState(JSON.parse(localStorage.getItem('product')) || []);
  const [isLikeID, setIsLikeID] = useState(JSON.parse(localStorage.getItem('productIDs')) || []);

  const likeProductFn = (product) => {
    let likedProducts = [...isLiked];
    let likedProductsID = [...isLikeID];
    if (likedProductsID.includes(product.id)) {
      likedProductsID = likedProductsID.filter((id) => id !== product.id);
      likedProducts = likedProducts.filter((value) => value.id !== product.id);
    } else {
      likedProductsID.push(product.id);
      likedProducts.push(product);
    }
    setIsLiked(likedProducts);
    setIsLikeID(likedProductsID);
    localStorage.setItem('product', JSON.stringify(likedProducts));
    localStorage.setItem('productIDs', JSON.stringify(likedProductsID));
  };

  return (
    <div className="bg-white dark:bg-[#121214] transition-colors duration-300">
      <Corusel />

      {/* Maxsus takliflar sarlavhasi qismi */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 my-10 gap-4">
        <div className="relative w-52 h-12 flex items-center">
          <h1 className="text-2xl text-gray-900 font-extrabold z-10 absolute left-1 dark:text-gray-100">
            {t('home.special')}
          </h1>
          <div className="absolute w-40 h-6 bottom-0 right-0 bg-amber-300 z-0 dark:bg-emerald-500/20 rounded-xs"></div>
        </div>
        <h2 className="text-sm md:text-base text-gray-600 font-medium text-center md:text-right dark:text-gray-400">
          {t('home.priceNote')}
        </h2>
      </div>

      {/* Mahsulotlar to'plami (Aksiyalar) flayeri */}
      <div className="flex flex-wrap bg-[#1da83a] dark:bg-[#161619] px-4 md:px-20 lg:px-40 py-12 justify-center gap-6 border-y border-gray-100 dark:border-[#1f1f23]">
        {card.map((value) => (
          <div key={value.id} className="bg-white w-80 p-5 flex flex-col gap-4 shadow-md rounded-2xl dark:bg-[#1a1a1e] border border-transparent dark:border-[#25252b] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-[#1da83a] font-black text-base leading-tight uppercase dark:text-emerald-400">
                {value.change}
              </h3>
              <FaHeart 
                size={18} 
                onClick={() => likeProductFn(value)} 
                className={`cursor-pointer transition-colors ${isLikeID.includes(value.id) ? 'text-red-500' : 'text-gray-300 dark:text-gray-600 hover:text-red-400'}`} 
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-24 h-24 bg-gray-50 dark:bg-[#121214] rounded-xl p-1.5 border border-gray-100 dark:border-neutral-800 flex items-center justify-center">
                <img src={value.image} alt={value.text} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-gray-800 font-semibold text-sm leading-snug line-clamp-2 dark:text-gray-200">
                  {value.text}
                </p>
                <div className="flex flex-col items-start">
                  <span className="text-amber-500 dark:text-emerald-400 font-black text-2xl leading-none">
                    {value.price} <span className="text-xs font-normal">{t('home.som')}</span>
                  </span>
                  {value.oldPrice && (
                    <span className="text-gray-400 font-medium text-xs line-through decoration-red-500/80 dark:text-gray-500 mt-1">
                      {value.oldPrice} {t('home.som')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* O'tkazib yubormang banneri */}
      <div className="my-12 bg-amber-400 dark:bg-emerald-500/10 border-y border-transparent dark:border-emerald-500/20 w-full text-center py-6 px-4">
        <h2 className="text-base md:text-lg text-gray-900 dark:text-emerald-400 font-bold uppercase tracking-wider">
          {t('home.dontMiss')}
        </h2>
      </div>

      {/* Kompaniya tavsifi qismi */}
      <section className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 dark:text-gray-300">
          {t('home.about')}
        </p>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 dark:text-gray-400">
          {t('home.aboutSub')}
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-neutral-950 font-bold px-10 py-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          {t('home.detail')}
        </button>
      </section>

      {/* Yangiliklar Grid qismi */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-gray-100">
            {t('home.news')}
          </h2>
          <div className="w-8 h-1 bg-amber-500 dark:bg-emerald-500 rounded-sm" />
        </div>
        
        {/* Moslashuvchan va chiroyli yangiliklar maketi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Matnli yangilik kartochkasi */}
          <div className="relative rounded-2xl bg-gray-50 border border-gray-100 p-6 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer dark:bg-[#1a1a1e] dark:border-[#25252b]">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #a3a3a3 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            <p className="text-sm font-bold uppercase leading-snug text-gray-800 group-hover:text-amber-500 dark:text-gray-200 dark:group-hover:text-emerald-400 transition-colors z-10">
              HAVAS diskounterlari O'zbekistonda savdo bozorini qanday o'zgartirdi
            </p>
            <div className="z-10 pt-4 border-t border-gray-100 dark:border-[#25252b]">
              <p className="text-xs text-gray-400 dark:text-gray-500">{t('news.added')}: 30.04.2026</p>
            </div>
          </div>

          {/* Rasmli kartochkalar (Mobil va planshetlar uchun to'liq moslashuvchan) */}
          <div className="relative h-60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-transparent dark:border-[#25252b]">
            <img src={bozor} alt="Bozor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>

          <div className="relative h-60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-transparent dark:border-[#25252b]">
            <img src={market} alt="Market" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>

          <div className="relative h-60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-transparent dark:border-[#25252b]">
            <img src={yil} alt="7 yil" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>

          <div className="relative h-60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-transparent dark:border-[#25252b]">
            <img src={bear} alt="Ayiqlar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>

        </div>

        {/* Barcha yangiliklar tugmasi */}
        <div className="flex justify-center mt-10">
          <button className="bg-amber-500 hover:bg-amber-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-neutral-950 font-bold px-10 py-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            {t('home.allNews')}
          </button>
        </div>
      </section>
    </div>
  );
}
