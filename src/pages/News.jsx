import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-purple-500 text-sm">
      <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-2 gap-8 items-start">
        <div>
          <a href="#" className="block font-bold text-base leading-snug underline underline-offset-2 text-gray-900 dark:text-purple-500 mb-4">
            HAVAS DISKOUNTERLARI O'ZBEKISTONDA SAVDO BOZORINI QANDAY O'ZGARTIRDI
          </a>
          <p className="text-xs text-gray-600 dark:text-purple-500 leading-relaxed">
            Uzoq vaqt davomida o'zbekistonliklar bozorlardagi arzon narxlar va zamonaviy do'konlarning qulayligi o'rtasida tanlov qilishga majbur bo'lishgan...
          </p>
        </div>
        <div className="relative border dark:border-purple-500 rounded-lg overflow-hidden">
          <div className="w-full h-64 bg-gray-300 dark:bg-black" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/55 dark:bg-black/80 px-4 py-3 border-t dark:border-purple-500">
            <p className="text-white dark:text-purple-500 font-bold text-lg leading-tight">КАК ДИСКАУНТЕР HAVAS ИЗМЕНИЛ РЫНОК УЗБЕКИСТАНА</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="mb-1">
          <span className="font-bold text-xl text-gray-900 dark:text-purple-500">{t('news.title')}</span>
          <div className="h-0.5 w-28 bg-yellow-400 mt-1" />
        </div>
        <div className="flex gap-6 mt-3 mb-6 border-b border-gray-200 dark:border-purple-500">
          <button className="pb-2 text-sm font-medium border-b-2 border-gray-800 dark:border-purple-500 text-gray-900 dark:text-purple-500">{t('news.all')}</button>
          <button className="pb-2 text-sm text-gray-500 dark:text-purple-500">{t('news.main')}</button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            {[
              { date: '01/09/2023', title: 'Havas 7 yoshda!', text: 'Havas — yetti yil davomida xaridorlar bilan hamkorlikda...' },
              { date: '15/08/2023', title: '352, 353, 354, 355 va 356 Havas diskaunterlari ochilishi', text: 'Yanada ko\'proq yangi va qulay do\'konlar...' },
              { date: '01/03/2023', title: '349, 350, 351 chi Havas do\'konlari ochilishi', text: 'Bunda yanada ko\'proq yangi do\'konlar...' },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-5 gap-3 pb-6 border-b border-gray-100 dark:border-purple-500 last:border-0">
                <div className="col-span-2 bg-gray-200 dark:bg-black border dark:border-purple-500 h-28" />
                <div className="col-span-3">
                  <p className="text-[11px] text-gray-400 dark:text-purple-500 mb-1">{t('news.added')}: {item.date}</p>
                  <p className="font-bold text-sm text-gray-900 dark:text-purple-500 mb-2">{item.title}</p>
                  <p className="text-xs text-gray-500 dark:text-purple-500 leading-relaxed">{item.text}</p>
                  <button className="text-xs font-semibold text-yellow-600 dark:text-purple-500 mt-2">{t('news.detail')}</button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-1">
            <div className="bg-gray-50 dark:bg-black rounded-sm overflow-hidden border dark:border-purple-500">
              <div className="bg-gray-600 dark:bg-black text-white dark:text-purple-500 border-b dark:border-purple-500 text-sm font-bold px-4 py-2">{t('news.articles')}</div>
              <div className="p-4 space-y-4">
                {[
                  { date: '01/09/2023', title: 'Havas 7 yoshda!', text: 'Havas — yetti yil davomida...' },
                  { date: '15/05/2023', title: 'Havas 2 yoshda', text: 'Havas diskaunterlar tarmog\'i...' },
                  { date: '22/03/2023', title: '«Havas Foods MCN» va Adliya vazirligi...', text: '22-sentyabr kuni shartnoma imzolash...' },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-200 dark:border-purple-500 pb-4 last:border-0">
                    <p className="text-[10px] text-gray-400 dark:text-purple-500 mb-0.5">{t('news.added')}: {item.date}</p>
                    <p className="text-xs font-bold text-gray-900 dark:text-purple-500 mb-1 leading-snug">{item.title}</p>
                    <p className="text-[11px] text-gray-500 dark:text-purple-500 leading-relaxed">{item.text}</p>
                  </div>
                ))}
                <button className="text-xs font-semibold text-yellow-600 dark:text-purple-500">{t('news.allArticles')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}