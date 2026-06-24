import { useTranslation } from 'react-i18next';
import image from "../assets/image.png"
import img from "../assets/img.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

export default function News() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-[#121214] text-gray-800 dark:text-gray-300 text-sm transition-colors duration-300">
      
      {/* Yuqori qism - Asosiy Katta Yangilik */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <a href="#" className="block font-extrabold text-base md:text-lg leading-snug text-gray-900 dark:text-gray-100 hover:text-amber-500 dark:hover:text-emerald-400 transition-colors mb-4 uppercase tracking-wide">
            HAVAS DISKOUNTERLARI O'ZBEKISTONDA SAVDO BOZORINI QANDAY O'ZGARTIRDI
          </a>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Uzoq vaqt davomida o'zbekistonliklar bozorlardagi arzon narxlar va zamonaviy do'konlarning qulayligi o'rtasida tanlov qilishga majbur bo'lishgan...
          </p>
        </div>
        <div className="relative border border-gray-100 dark:border-[#25252b] rounded-2xl overflow-hidden shadow-md group">
          <img src={image} alt="Havas Market" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 py-6">
          </div>
        </div>
      </div>

      {/* Pastki qism - Yangiliklar ro'yxati va Maqolalar */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="mb-2">
          <span className="font-extrabold text-xl text-gray-900 dark:text-gray-100 tracking-wide uppercase">{t('news.title')}</span>
          <div className="h-1 w-16 bg-amber-500 dark:bg-emerald-500 mt-1.5 rounded-full" />
        </div>
        
        {/* Filtr tablari */}
        <div className="flex gap-6 mt-4 mb-8 border-b border-gray-100 dark:border-[#1f1f23]">
          <button className="pb-3 text-sm font-semibold border-b-2 border-amber-500 dark:border-emerald-400 text-amber-500 dark:text-emerald-400">{t('news.all')}</button>
          <button className="pb-3 text-sm font-medium text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">{t('news.main')}</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Chap ustun: Rasmli yangiliklar */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            {[
              { img: img, date: '01/09/2023', title: 'Havas 7 yoshda!', text: 'Havas — yetti yil davomida xaridorlar bilan hamkorlikda...' },
              { img: img2, date: '15/08/2023', title: '352, 353, 354, 355 va 356 Havas diskaunterlari ochilishi', text: 'Yanada ko\'proq yangi va qulay do\'konlar...' },
              { img: img3, date: '01/03/2023', title: '349, 350, 351 chi Havas do\'konlari ochilishi', text: 'Bunda yanada ko\'proq yangi do\'konlar...' },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-5 gap-4 pb-6 border-b border-gray-100 dark:border-[#1f1f23] last:border-0 items-center">
                <div className="col-span-2 rounded-xl overflow-hidden border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-[#1a1a1e] p-1 h-24 flex items-center justify-center">
                  <img src={item.img} alt={item.title} className="max-h-full object-contain" />
                </div>
                <div className="col-span-3">
                  <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 mb-1">{t('news.added')}: {item.date}</p>
                  <p className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-1 line-clamp-1">{item.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{item.text}</p>
                  <button className="text-xs font-bold text-amber-500 dark:text-emerald-400 hover:underline mt-2 transition-all">{t('news.detail')}</button>
                </div>
              </div>
            ))}
          </div>

          {/* O'ng ustun: Kichik maqolalar bloki */}
          <div className="col-span-1">
            <div className="bg-gray-50 dark:bg-[#1a1a1e] rounded-2xl overflow-hidden border border-gray-100 dark:border-[#25252b] shadow-sm">
              <div className="bg-gray-100 dark:bg-[#25252b] text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-[#2a2a30] text-sm font-bold px-5 py-3.5 tracking-wide">
                {t('news.articles')}
              </div>
              <div className="p-5 space-y-4">
                {[
                  { date: '01/09/2023', title: 'Havas 7 yoshda!', text: 'Havas — yetti yil davomida...' },
                  { date: '15/05/2023', title: 'Havas 2 yoshda', text: 'Havas diskaunterlar tarmog\'i...' },
                  { date: '22/03/2023', title: '«Havas Foods MCN» va Adliya vazirligi...', text: '22-sentyabr kuni shartnoma imzolash...' },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-200 dark:border-[#25252b] pb-4 last:border-0 group cursor-pointer">
                    <p className="text-[10px] font-medium text-gray-400 dark:text-gray-500 mb-1">{t('news.added')}: {item.date}</p>
                    <p className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-1 leading-snug group-hover:text-amber-500 dark:group-hover:text-emerald-400 transition-colors">{item.title}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{item.text}</p>
                  </div>
                ))}
                <button className="text-xs font-bold text-amber-500 dark:text-emerald-400 hover:underline mt-2 pt-2 block w-full text-center border-t border-gray-200 dark:border-[#25252b]">
                  {t('news.allArticles')}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
