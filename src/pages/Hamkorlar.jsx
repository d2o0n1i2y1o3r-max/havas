import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import categories from '../json/categories.json';

export default function Hamkorlar() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ ism: '', email: '', telefon: '', yonalish: '', xabar: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };
 
  return (
    <div className="min-h-screen bg-white dark:bg-[#121214] font-sans text-gray-800 dark:text-gray-300 p-6 md:p-12 max-w-6xl mx-auto transition-colors duration-300">
      
      {/* Sarlavha va Yuqori tugma */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">{t('partners.title')}</h1>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 dark:text-emerald-400 dark:border-emerald-500/50 dark:hover:bg-emerald-500/10 transition-colors px-6 py-2 rounded-full font-semibold text-sm">
          {t('partners.becomeSupplier')}
        </button>
      </div>

      {/* Tavsif matni qismi */}
      <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-5xl mb-12 text-gray-700 dark:text-gray-400">
        <p><span className="font-bold text-gray-900 dark:text-gray-100">HAVAS</span> {t('partners.desc1')}</p>
        <p>{t('partners.desc2')}</p>
        <p>
          {t('partners.desc3')}{' '}
          <a href="tel:+998712059595" className="font-semibold text-gray-900 dark:text-emerald-400 hover:text-orange-500 dark:hover:text-emerald-300 transition-colors underline underline-offset-2">+99871 205 9595</a>{' '}
          {t('partners.desc3b')}{' '}
          <a href="mailto:info@havasfood.uz" className="font-semibold text-gray-900 dark:text-emerald-400 hover:text-orange-500 dark:hover:text-emerald-300 transition-colors underline underline-offset-2">info@havasfood.uz</a>{' '}
          {t('partners.desc3c')}
        </p>
      </div>

      {/* Kategoriyalar bo'limi */}
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">{t('partners.categories')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 mb-16">
        {categories.map((va, index) => (
          <div key={index} className="flex justify-between items-center border border-gray-200 dark:border-[#2a2a30] bg-gray-50 dark:bg-[#1a1a1e] rounded-full px-5 py-2.5 hover:border-orange-400 dark:hover:border-emerald-500 hover:shadow-sm transition-all cursor-pointer group">
            <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium group-hover:text-orange-500 dark:group-hover:text-emerald-400 transition-colors">{va.name}</span>
            <span className="text-orange-400 dark:text-emerald-400 text-xl font-light group-hover:scale-125 transition-all">+</span>
          </div>
        ))}
      </div>

      {/* Ariza yuborish formasi */}
      <form onSubmit={handleSubmit} className="max-w-5xl space-y-5">
        {[
          { label: t('partners.name'), name: 'ism', type: 'text' },
          { label: t('partners.email'), name: 'email', type: 'email' },
          { label: t('partners.phone'), name: 'telefon', type: 'tel' },
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col gap-1.5">
            <label className="text-gray-900 dark:text-gray-300 text-sm font-semibold px-1">{label}</label>
            <input 
              type={type} 
              name={name} 
              value={formData[name]} 
              onChange={handleChange} 
              placeholder={label}
              className="w-full border border-orange-300 dark:border-[#2a2a30] bg-gray-50 dark:bg-[#1a1a1e] rounded-full px-5 py-2.5 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-400 dark:focus:border-emerald-500 transition-colors" 
            />
          </div>
        ))}

        {/* Yo'nalish tanlash (Select) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-gray-900 dark:text-gray-300 text-sm font-semibold px-1">{t('partners.direction')}</label>
          <div className="relative">
            <select 
              name="yonalish" 
              value={formData.yonalish} 
              onChange={handleChange}
              className="w-full border border-orange-300 dark:border-[#2a2a30] bg-gray-50 dark:bg-[#1a1a1e] rounded-full px-5 py-2.5 text-sm text-gray-800 dark:text-gray-100 appearance-none focus:outline-none focus:border-orange-400 dark:focus:border-emerald-500 transition-colors cursor-pointer"
            >
              <option value="" disabled className="dark:bg-[#1a1a1e]">{t('partners.direction')}</option>
              {categories.map((va, i) => (
                <option key={i} value={va.name} className="dark:bg-[#1a1a1e] text-gray-800 dark:text-gray-100">
                  {va.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Xabar matni (Textarea) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-gray-900 dark:text-gray-300 text-sm font-semibold px-1">{t('partners.message')}</label>
          <textarea 
            name="xabar" 
            value={formData.xabar} 
            onChange={handleChange} 
            placeholder={t('partners.message')} 
            rows={4}
            className="w-full border border-orange-300 dark:border-[#2a2a30] bg-gray-50 dark:bg-[#1a1a1e] rounded-[20px] px-5 py-3 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 resize-none focus:outline-none focus:border-orange-400 dark:focus:border-emerald-500 transition-colors" 
          />
        </div>

        {/* Yuborish tugmasi */}
        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-[#FFE600] dark:bg-emerald-500 text-gray-900 dark:text-neutral-950 font-bold text-sm px-10 py-3 rounded-full hover:bg-[#ebd500] dark:hover:bg-emerald-400 transition-all shadow-md transform hover:-translate-y-0.5"
          >
            {t('partners.submit')}
          </button>
        </div>
      </form>

    </div>
  );
}
