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
    <div>
      <Corusel />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 my-10 gap-4 dark:bg-black">
        <div className="relative w-52 h-12 flex items-center">
          <h1 className="text-2xl text-black font-extrabold z-10 absolute left-1 dark:text-purple-500">
            {t('home.special')}
          </h1>
          <div className="absolute w-40 h-6 bottom-0 right-0 bg-yellow-300 z-0 dark:bg-purple-900"></div>
        </div>
        <h2 className="text-xl text-black font-bold text-center md:text-right dark:text-purple-400">
          {t('home.priceNote')}
        </h2>
      </div>

      <div className="flex flex-wrap bg-green-500 px-4 md:px-20 lg:px-40 py-10 justify-center gap-4 dark:bg-zinc-900">
        {card.map((value) => (
          <div key={value.id} className="bg-white w-85 p-5 flex flex-col gap-4 shadow-md rounded-sm dark:bg-black border dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <h3 className="text-[#1a9e2e] font-black text-lg leading-tight uppercase dark:text-purple-400">
                {value.change}
              </h3>
              <FaHeart size={20} onClick={() => likeProductFn(value)} className={`cursor-pointer transition-colors ${isLikeID.includes(value.id) ? 'text-red-500' : 'text-gray-400 dark:text-zinc-600'}`} />
            </div>
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-24 h-24 bg-gray-50 dark:bg-zinc-900 rounded-sm p-1">
                <img src={value.image} alt={value.text} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[#2db44a] font-semibold text-sm leading-snug line-clamp-2 dark:text-purple-300">
                  {value.text}
                </p>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[#e8621a] font-black text-3xl leading-none dark:text-purple-500">
                    {value.price} {t('home.som')}
                  </span>
                  {value.oldPrice && (
                    <span className="text-gray-400 font-medium text-sm line-through decoration-red-500 dark:text-zinc-500">
                      {value.oldPrice} {t('home.som')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-10 bg-yellow-300 w-full text-center py-5 px-4 dark:bg-purple-950">
        <h2 className="text-lg md:text-xl text-black font-bold uppercase tracking-wider dark:text-purple-300">
          {t('home.dontMiss')}
        </h2>
      </div>

      <section className="bg-white px-10 py-10 text-center dark:bg-black">
        <p className="text-gray-900 text-[15px] leading-relaxed mb-1 dark:text-purple-300">
          {t('home.about')}
        </p>
        <p className="text-gray-900 text-[15px] leading-relaxed mb-8 dark:text-purple-400">
          {t('home.aboutSub')}
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-10 py-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-purple-600 dark:text-white dark:hover:bg-purple-500">
          {t('home.detail')}
        </button>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10 dark:bg-black">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-extrabold uppercase tracking-widest text-gray-900 dark:text-purple-500">
            {t('home.news')}
          </h2>
          <div className="w-8 h-1 bg-yellow-400 rounded-sm dark:bg-purple-500" />
        </div>
        <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 2fr 2fr', gridTemplateRows: '260px 220px' }}>
          <div className="relative rounded-2xl bg-white border border-gray-200 p-5 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer dark:bg-zinc-900 dark:border-zinc-800" style={{ gridRow: '1', gridColumn: '1' }}>
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #a3a3a3 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            <p className="text-[13px] font-extrabold uppercase leading-snug text-gray-900 z-10 dark:text-purple-300">
              HAVAS diskounterlari O'zbekistonda savdo bozorini qanday o'zgartirdi
            </p>
            <div className="z-10">
              <p className="text-[11px] text-gray-400 dark:text-purple-500">{t('news.added')}:</p>
              <p className="text-[11px] text-gray-400 dark:text-purple-500">30.04.2026</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ gridRow: '1', gridColumn: '2' }}>
            <img src={bozor} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ gridRow: '1 / 3', gridColumn: '3' }}>
            <img src={market} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ gridRow: '2', gridColumn: '1' }}>
            <img src={yil} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ gridRow: '2', gridColumn: '2' }}>
            <img src={bear} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-10 py-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-purple-600 dark:text-white dark:hover:bg-purple-500">
            {t('home.allNews')}
          </button>
        </div>
      </section>
    </div>
  );
}