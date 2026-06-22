import React from 'react'

export default function Map() {
  return (
    <section className="bg-white dark:bg-black px-10 py-10">
      <div className="flex gap-10">
        {/* Chap qism */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-purple-500">
              Savollaringiz bormi?
            </h2>
            <div className="w-8 h-1 bg-yellow-400 rounded-sm" />
          </div>
 
          <p className="text-gray-700 dark:text-purple-500 text-sm mb-1">Bizga qo'ng'iroq qiling</p>
          <div className="flex items-center gap-2 text-gray-900 dark:text-purple-500 font-semibold text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-900 dark:text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.06 3.18a1 1 0 01-.23 1.05L7.5 9.4a16.06 16.06 0 006.1 6.1l1.49-1.56a1 1 0 011.05-.23l3.18 1.06a1 1 0 01.68.95V19a2 2 0 01-2 2C9.16 21 3 14.84 3 7V5z" />
            </svg>
            +998(71)205-95-95
          </div>
 
          <p className="text-yellow-500 dark:text-purple-500 text-sm font-semibold mb-2">
            Bizga elektron pochta orqali yozing
          </p>
 
          <input
            type="email"
            defaultValue="d2o0n1i2y1o3r@gmail.com"
            className="w-full border border-gray-300 dark:border-purple-500 rounded px-4 py-2 text-sm text-gray-800 dark:text-purple-500 bg-transparent dark:bg-black mb-1 focus:outline-none focus:border-yellow-400"
          />
          <p className="text-gray-400 dark:text-purple-500 text-xs mb-4">to'ldirish uchun majburiy joy</p>
 
          <textarea
            placeholder="Xabar yozing..."
            rows={4}
            className="w-full border border-gray-300 dark:border-purple-500 rounded px-4 py-2 text-sm text-gray-500 dark:text-purple-500 bg-transparent dark:bg-black resize-none focus:outline-none focus:border-yellow-400 mb-6"
          />
 
          <button className="bg-yellow-400 dark:bg-black border dark:border-purple-500 text-gray-900 dark:text-purple-500 font-bold px-10 py-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Yuborish
          </button>
        </div>
        <div className="flex-1 rounded-xl overflow-hidden min-h-70 border dark:border-purple-500">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=69.279737%2C41.299496&z=11&pt=69.279737,41.299496"
            width="100%"
            height="100%"
            style={{ minHeight: "280px", border: "none" }}
            title="Yandex xarita"
          />
        </div>
      </div>
    </section>
  )
}
