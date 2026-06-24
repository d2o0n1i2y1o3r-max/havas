import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import { FaMoon } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStore } from '../Store/zustand';

export default function Header() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef(null)
  
  const { t, i18n } = useTranslation()
  const { products } = useStore()

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredResults([])
      return
    }

    const results = products.filter(product =>
      product.nomi.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredResults(results)
  }, [query, products])

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = () => {
    if (query.trim()) {
      setIsOpen(false)
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleResultClick = (productName) => {
    setQuery(productName)
    setIsOpen(false)
    navigate(`/search?q=${encodeURIComponent(productName)}`)
  }

  const DarkMode = () => {
    document.documentElement.classList.toggle("dark")
  }

  const langs = ['Ru', 'Uz', 'En']
  const navLinks = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/about', label: t('nav.about') },
    { to: '/markets', label: t('nav.stores') },
    { to: '/news', label: t('nav.news') },
    { to: '/offers', label: t('nav.offers') },
    { to: '/partners', label: t('nav.partners') },
    { to: '/vacancy', label: t('nav.vacancy') },
  ]

  // Ranglar stilini dark mode uchun chiroyli ko'rinishga keltirdik
  const activeClass = "bg-amber-400 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full text-sm font-semibold text-gray-900 dark:text-emerald-400 border border-transparent dark:border-emerald-500/30 transition-all"
  const inactiveClass = "text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-emerald-400 transition-colors"

  return (
    <div className="transition-colors duration-300">
      {/* Yuqori asosiy nav */}
      <nav className="bg-white dark:bg-[#121214] border-b border-gray-100 dark:border-[#1f1f23] px-6 py-4 flex items-center gap-6">
        <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap shrink-0">
          {t('header.phone')}
        </span>
        
        {/* Ijtimoiy tarmoq piktogrammalari */}
        <div className="flex items-center gap-3 shrink-0 text-gray-500 dark:text-gray-400">
          <i className="ti ti-brand-instagram text-xl hover:text-amber-500 dark:hover:text-emerald-400 cursor-pointer transition-colors" />
          <i className="ti ti-brand-facebook text-xl hover:text-amber-500 dark:hover:text-emerald-400 cursor-pointer transition-colors" />
          <i className="ti ti-send text-xl hover:text-amber-500 dark:hover:text-emerald-400 cursor-pointer transition-colors" />
        </div>

        {/* Qidiruv input qismi */}
        <div ref={searchRef} className="flex-1 relative h-10">
          <div className="flex items-center border border-gray-200 dark:border-[#2a2a30] bg-gray-50 dark:bg-[#1a1a1e] rounded-full overflow-hidden h-full focus-within:border-amber-400 dark:focus-within:border-emerald-500 transition-colors">
            <input 
              type="text" 
              value={query} 
              onChange={(e) => {
                setQuery(e.target.value)
                setIsOpen(true)
              }} 
              onFocus={() => setIsOpen(true)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
              className="flex-1 border-none outline-none px-4 text-sm bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400"
              placeholder={t('header.search') + '...'}
            />
            <button 
              onClick={handleSearch} 
              className="bg-amber-500 dark:bg-emerald-500 text-white dark:text-neutral-950 font-semibold rounded-r-full px-6 h-full text-sm whitespace-nowrap hover:bg-amber-600 dark:hover:bg-emerald-400 transition-colors"
            >
              {t('header.search')}
            </button>
          </div>

          {/* Qidiruv natijalari drop-down oynasi */}
          {isOpen && query.trim() !== '' && (
            <div className="absolute left-0 right-0 top-12 bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-[#25252b] rounded-xl shadow-xl dark:shadow-2xl/50 z-50 max-h-72 overflow-y-auto">
              {filteredResults.length > 0 ? (
                filteredResults.map((product, idx) => (
                  <div 
                    key={idx}
                    onClick={() => handleResultClick(product.nomi)}
                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#222227] cursor-pointer flex items-center justify-between border-b border-gray-100 dark:border-[#25252b] last:border-none transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={product.rasm_url} 
                        alt={product.nomi} 
                        className="w-10 h-10 object-contain rounded-md bg-white dark:bg-[#121214] p-0.5 border border-gray-100 dark:border-neutral-800"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">
                          {product.nomi}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {product.turkum}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-amber-500 dark:text-emerald-400 whitespace-nowrap ml-2">
                      {product.narxi} so'm
                    </span>
                  </div>
                ))
              ) : (
                <div className="px-4 py-6 text-sm text-gray-400 dark:text-gray-500 text-center">
                  Hech narsa topilmadi 😕
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tungi rejim va Til tanlash */}
        <FaMoon className='text-gray-400 dark:text-emerald-400 cursor-pointer hover:text-amber-500 dark:hover:text-emerald-300 transition-colors' onClick={DarkMode} />
        
        <div className="flex items-center gap-2 shrink-0 border-l border-gray-200 dark:border-[#2a2a30] pl-4">
          {langs.map((lang) => {
            const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'uz'
            const isSelected = currentLang === lang.toLowerCase()
            return (
              <span 
                key={lang} 
                onClick={() => i18n.changeLanguage(lang.toLowerCase())} 
                className={`text-sm font-medium cursor-pointer transition-colors px-1.5 py-0.5 rounded ${
                  isSelected 
                    ? 'text-amber-500 dark:text-emerald-400 underline underline-offset-4' 
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {lang}
              </span>
            )
          })}
        </div>
      </nav>

      {/* Pastki menyu sarlavhalari */}
      <nav className="bg-white dark:bg-[#121214] border-b border-gray-100 dark:border-[#1f1f23] px-10 py-3">
        <ul className="flex items-center gap-6 ">
          {navLinks.map(({ to, label, end }) => (
            <li key={to} className="shrink-0">
              <NavLink to={to} end={end} className={({ isActive }) => isActive ? activeClass : inactiveClass} >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
