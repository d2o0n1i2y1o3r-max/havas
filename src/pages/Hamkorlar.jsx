import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import categories from '../json/categories.json';

export default function Hamkorlar() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ ism: '', email: '', telefon: '', yonalish: '', xabar: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-gray-800 dark:text-purple-500 p-6 md:p-12 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-purple-500">{t('partners.title')}</h1>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-black dark:text-purple-500 dark:border-purple-500 transition-colors px-6 py-2 rounded-full font-medium text-sm">
          {t('partners.becomeSupplier')}
        </button>
      </div>

      <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-5xl mb-12 text-gray-800 dark:text-purple-500">
        <p><span className="font-semibold text-gray-900 dark:text-purple-500">HAVAS</span> {t('partners.desc1')}</p>
        <p>{t('partners.desc2')}</p>
        <p>
          {t('partners.desc3')}{' '}
          <a href="tel:+998712059595" className="font-semibold hover:text-orange-500 text-gray-900 dark:text-purple-500">+99871 205 9595</a>{' '}
          {t('partners.desc3b')}{' '}
          <a href="mailto:info@havasfood.uz" className="font-semibold hover:text-orange-500 text-gray-900 dark:text-purple-500">info@havasfood.uz</a>{' '}
          {t('partners.desc3c')}
        </p>
      </div>

      <h2 className="text-lg font-bold text-gray-900 dark:text-purple-500 mb-6">{t('partners.categories')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 mb-16">
        {categories.map((va, index) => (
          <div key={index} className="flex justify-between items-center border border-gray-300 dark:border-purple-500 rounded-full px-5 py-2 hover:border-orange-400 hover:shadow-sm transition-all cursor-pointer group">
            <span className="text-gray-700 dark:text-purple-500 text-sm md:text-base font-medium">{va.name}</span>
            <span className="text-orange-400 dark:text-purple-500 text-xl font-light">+</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-5xl space-y-5">
        {[
          { label: t('partners.name'), name: 'ism', type: 'text' },
          { label: t('partners.email'), name: 'email', type: 'email' },
          { label: t('partners.phone'), name: 'telefon', type: 'tel' },
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col gap-1.5">
            <label className="text-gray-900 dark:text-purple-500 text-sm font-medium px-1">{label}</label>
            <input type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={label}
              className="w-full border border-orange-400 dark:border-purple-500 dark:bg-black rounded-full px-5 py-2 text-sm text-gray-700 dark:text-purple-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
        ))}

        <div className="flex flex-col gap-1.5">
          <label className="text-gray-900 dark:text-purple-500 text-sm font-medium px-1">{t('partners.direction')}</label>
          <div className="relative">
            <select name="yonalish" value={formData.yonalish} onChange={handleChange}
              className="w-full border border-orange-400 dark:border-purple-500 rounded-full px-5 py-2 text-sm text-gray-700 dark:text-purple-500 bg-white dark:bg-black appearance-none focus:outline-none focus:ring-1 focus:ring-orange-500">
              <option value="" disabled>{t('partners.direction')}</option>
              {categories.map((va, i) => <option key={i} value={va.name}>{va.name}</option>)}
            </select>
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-800 dark:text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-gray-900 dark:text-purple-500 text-sm font-medium px-1">{t('partners.message')}</label>
          <textarea name="xabar" value={formData.xabar} onChange={handleChange} placeholder={t('partners.message')} rows={4}
            className="w-full border border-orange-400 dark:border-purple-500 dark:bg-black rounded-[20px] px-5 py-3 text-sm text-gray-700 dark:text-purple-500 resize-none focus:outline-none focus:ring-1 focus:ring-orange-500" />
        </div>

        <div className="pt-2">
          <button type="submit" className="bg-[#FFE600] dark:bg-black text-gray-900 dark:text-purple-500 border dark:border-purple-500 font-semibold text-sm px-8 py-2.5 rounded-full hover:bg-[#ebd500] transition-colors shadow-sm">
            {t('partners.submit')}
          </button>
        </div>
      </form>
    </div>
  );
}