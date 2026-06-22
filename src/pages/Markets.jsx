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
    <div className="relative w-full">
      {showModal && !showMap && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black border dark:border-purple-500 rounded-2xl px-10 py-8 w-96 relative text-center shadow-xl">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-orange-500 dark:text-purple-500 text-xl font-bold">✕</button>
            <p className="text-gray-900 dark:text-purple-500 font-semibold text-base mb-6">{t('stores.findNearest')}</p>
            <div className="flex items-center justify-center gap-4">
              <button onClick={() => { setShowModal(false); setShowMap(true); }} className="bg-yellow-400 dark:bg-black border dark:border-purple-500 text-gray-900 dark:text-purple-500 font-bold px-6 py-2.5 rounded-full text-sm">
                {t('stores.findRoute')}
              </button>
              <button onClick={() => setShowModal(false)} className="bg-orange-500 dark:bg-black border dark:border-purple-500 text-white dark:text-purple-500 font-bold px-6 py-2.5 rounded-full text-sm">
                {t('stores.findMyself')}
              </button>
            </div>
          </div>
        </div>
      )}

      {showMap && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black border dark:border-purple-500 rounded-2xl overflow-hidden w-[720px] h-[540px] relative shadow-xl">
            <button onClick={() => setShowMap(false)} className="absolute top-4 right-4 text-orange-500 dark:text-purple-500 text-xl font-bold z-10">✕</button>
            <iframe src="https://yandex.com/maps/?rtext=~41.2995,69.2401&rtt=auto&mode=routes&ll=69.2401,41.2995&z=11" width="100%" height="100%" style={{ border: 'none' }} title="Yandex yo'nalish xaritasi" />
          </div>
        </div>
      )}

      <section className="bg-green-600 dark:bg-black border-b dark:border-purple-500 px-16 py-16 flex items-center justify-center">
        <div>
          <p className="text-white dark:text-purple-500 text-2xl font-light mb-1">{t('stores.newFeature')}</p>
          <p className="text-yellow-400 dark:text-purple-500 text-4xl font-bold mb-8">{t('stores.getRoute')}</p>
          <ul className="flex flex-col gap-4">
            <li className="text-white dark:text-purple-500 text-lg">{t('stores.step1')}</li>
            <li className="text-white dark:text-purple-500 text-lg">{t('stores.step2')}</li>
            <li className="text-white dark:text-purple-500 text-lg">{t('stores.step3')}</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-black px-10 py-10">
        {stores.map((store) => (
          <div key={store.id} className="bg-white dark:bg-black rounded-xl px-8 py-6 mb-4 border border-gray-100 dark:border-purple-500">
            <p className="font-bold text-gray-900 dark:text-purple-500 text-sm mb-1">{store.id} {store.name}</p>
            <p className="text-sm text-gray-700 dark:text-purple-500 mb-0.5">{t('stores.address')}: <a href={store.map} className="hover:underline">{store.map}</a></p>
            <p className="text-sm text-gray-700 dark:text-purple-500 mb-0.5">{t('stores.hours')}: {store.hours}</p>
            <p className="text-sm text-green-600 dark:text-purple-500 mb-1">Tel: {store.phone}</p>
            <a href={store.map} className="text-green-600 dark:text-purple-500 text-sm flex items-center gap-1 hover:underline">
              📍 {t('stores.showMap')}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}