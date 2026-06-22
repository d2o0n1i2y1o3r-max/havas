import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStore } from '../Store/zustand';
import Retseptlar from './Retseptlar';
import retsept from "../json/retsept.json"
export default function QidiruvNatijalari() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { products } = useStore();

  const filteredProducts = products.filter(product =>
    product.nomi.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-6 font-sans">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate('/')} className="bg-[#e85315] text-white text-sm font-bold px-5 py-1.5 rounded-full hover:bg-orange-600 transition-colors">
          {t('search.back')}
        </button>
      </div>
      
      <div className="mb-2">
        <h1 className="text-xl font-bold text-gray-900">
          {t('search.results')}: <span className="font-normal">{query}</span>
        </h1>
        <p className="text-sm font-bold text-gray-900 mt-1">
          {t('search.found')} {filteredProducts.length}
        </p>
      </div>
      
      <hr className="border-gray-300 my-4" />
      
      {filteredProducts.length > 0 ? (
        <ul className="list-none p-0 m-0 divide-y divide-gray-200">
          {retsept.map((product, idx) => (
            <li key={idx} className="py-6 flex gap-6 items-start">
              <div className="w-55 shrink-0">
                <img src={product.rasm_url} alt={product.nomi} className="w-full object-contain max-h-40" />
              </div>
              <div className="flex flex-col justify-between min-h-30 flex-1">
                <div>
                  <p className="text-[11px] text-gray-400 mb-1">{product.turkum}</p>
                  <h2 className="text-base font-bold text-gray-900 uppercase leading-snug">{product.nomi}</h2>
                  <p className="text-sm text-gray-600 mt-1">{product.tavsifi}</p>
                  <p className="text-lg font-extrabold text-[#e85315] mt-2">{product.narxi} so'm</p>
                </div>
                <button className="mt-4 self-start text-[#e85315] text-sm font-semibold underline hover:text-orange-700 transition-colors">
                  {t('search.detail')}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-12 text-center text-gray-500">
          {t('search.no_results') || 'Hech narsa topilmadi'}
        </div>
      )}
    </div>
  );
}
