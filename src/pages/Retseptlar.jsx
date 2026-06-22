import { useTranslation } from 'react-i18next';
import Corusel from '../components/Corusel';
import retsept from '../json/retsept';

export default function Retseptlar() {
  const { t } = useTranslation();

  return (
    <>
      <Corusel />
      <div className="max-w-7xl mx-auto p-6 font-sans">
        <div className="mb-6">
          <h2 className="inline-block bg-[#fedc00] text-black font-black px-4 py-1 uppercase text-xs tracking-wider">
            {t('offers.title')}
          </h2>
          <div className="mt-4 border-b border-gray-200">
            <span className="text-gray-900 font-bold border-b-2 border-gray-900 pb-2 inline-block text-sm">
              {t('offers.weekly')}
            </span>
          </div>
        </div>
        <ul className="flex flex-wrap gap-4 list-none p-0 m-0">
          {retsept.map((mahsulot) => (
            <li key={mahsulot.id} className="w-full sm:w-[320px] transition-transform duration-300 hover:scale-105">
              <div className="bg-white p-5 flex flex-col justify-between border border-gray-100 h-full">
                <div>
                  <div className="text-[#107c41] font-extrabold text-[11px] tracking-wider mb-2">{mahsulot.turkum}</div>
                  <div className="flex items-center justify-between gap-2 min-h-30">
                    <div className="w-[45%] flex justify-center items-center bg-white p-2 border border-gray-50 rounded">
                      <img src={mahsulot.rasm_url} alt="Mahsulot" className="max-h-25 object-contain" />
                    </div>
                    <div className="w-[50%] flex flex-col justify-between min-h-22.5">
                      <div className="text-[#107c41] font-bold text-[11px] leading-tight uppercase">{mahsulot.nomi}</div>
                      <div className="text-[#e85315] font-black text-2xl tracking-tighter text-right">
                        5 <span className="text-base font-extrabold -ml-1">{mahsulot.narxi}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-[11px] font-bold text-gray-900 uppercase mb-3 line-clamp-1">YUMSHOQ PLASTILIN 12 TA YOSTIQCHA</div>
                  <button className="px-6 py-1 border border-[#e85315] text-[#e85315] text-[11px] font-bold rounded-full hover:bg-orange-50 transition-colors">
                    {t('offers.detail')}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}