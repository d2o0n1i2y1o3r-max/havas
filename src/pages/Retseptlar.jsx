import { useTranslation } from 'react-i18next';
import Corusel from '../components/Corusel';
import retsept from '../json/retsept';

export default function Retseptlar() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-[#121214] min-h-screen transition-colors duration-300">
      <Corusel />
      
      <div className="max-w-7xl mx-auto p-6 font-sans">
        {/* Sarlavha va Filtrlash Qismi */}
        <div className="mb-8">
          <h2 className="inline-block bg-[#fedc00] dark:bg-emerald-500 text-black dark:text-neutral-950 font-black px-4 py-1.5 uppercase text-xs tracking-wider rounded-xs">
            {t('offers.title')}
          </h2>
          <div className="mt-4 border-b border-gray-100 dark:border-[#1f1f23]">
            <span className="text-gray-900 dark:text-emerald-400 font-bold border-b-2 border-gray-900 dark:border-emerald-500 pb-2 inline-block text-sm">
              {t('offers.weekly')}
            </span>
          </div>
        </div>

        {/* Retsept va Mahsulotlar Ro'yxati Grid shaklida */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 list-none p-0 m-0">
          {retsept.map((mahsulot) => (
            <li key={mahsulot.id} className="w-full transition-all duration-300 hover:-translate-y-1">
              <div className="bg-white dark:bg-[#1a1a1e] p-5 flex flex-col justify-between border border-gray-100 dark:border-[#25252b] rounded-2xl shadow-xs hover:shadow-md h-full transition-all">
                
                <div>
                  {/* Turkum sarlavhasi */}
                  <div className="text-[#107c41] dark:text-emerald-400 font-extrabold text-[11px] tracking-wider mb-3 uppercase">
                    {mahsulot.turkum}
                  </div>
                  
                  {/* Mahsulot tanasi (Rasm va narx) */}
                  <div className="flex items-center justify-between gap-3 min-h-[120px]">
                    <div className="w-[45%] h-24 flex justify-center items-center bg-gray-50 dark:bg-[#121214] p-2 border border-gray-100 dark:border-[#25252b] rounded-xl overflow-hidden">
                      <img src={mahsulot.rasm_url} alt="Mahsulot" className="max-h-20 object-contain" />
                    </div>
                    
                    <div className="w-[52%] flex flex-col justify-between min-h-[90px]">
                      <div className="text-[#107c41] dark:text-gray-200 font-bold text-[11px] leading-tight uppercase line-clamp-2">
                        {mahsulot.nomi}
                      </div>
                      <div className="text-[#e85315] dark:text-emerald-400 font-black text-2xl tracking-tighter text-right mt-2">
                        5 <span className="text-base font-extrabold -ml-1">{mahsulot.narxi}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pastki qism - Tavsif va Tugma */}
                <div className="mt-4 pt-4 border-t border-gray-50 dark:border-[#25252b]">
                  <div className="text-[11px] font-bold text-gray-900 dark:text-gray-300 uppercase mb-3 line-clamp-1">
                    {mahsulot.tavsifi || 'MAHSULOT HAQIDA TA\'RIF'}
                  </div>
                  <button className="w-full sm:w-auto text-center px-5 py-1.5 border border-[#e85315] dark:border-emerald-500/50 text-[#e85315] dark:text-emerald-400 text-[11px] font-bold rounded-full hover:bg-orange-50 dark:hover:bg-emerald-500/10 transition-colors">
                    {t('offers.detail')}
                  </button>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
