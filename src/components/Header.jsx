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

  const activeClass = "bg-yellow-400 dark:bg-black px-4 py-1.5 rounded-full text-sm font-semibold text-gray-900 dark:text-purple-500 border dark:border-purple-500"
  const inactiveClass = "text-sm font-semibold text-gray-900 dark:text-purple-500 hover:text-yellow-500 dynamic-transition"

  return (
    <div>
      <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-purple-500 px-6 py-5 flex items-center gap-6">
        <img src={logo} alt="Logo" className="w-22 h-28 object-contain" />
        <span className="text-sm text-gray-800 dark:text-purple-500 whitespace-nowrap shrink-0">
          {t('header.phone')}
        </span>
        
        <div className="flex items-center gap-2.5 shrink-0">
          <i className="ti ti-brand-instagram text-xl text-gray-500 dark:text-purple-500" />
          <i className="ti ti-brand-facebook text-xl text-gray-500 dark:text-purple-500" />
          <i className="ti ti-send text-xl text-gray-500 dark:text-purple-500" />
        </div>

        <div ref={searchRef} className="flex-1 relative h-10">
          <div className="flex items-center border border-gray-300 dark:border-purple-500 rounded-full overflow-hidden h-full">
            <input 
              type="text" 
              value={query} 
              onChange={(e) => {
                setQuery(e.target.value)
                setIsOpen(true)
              }} 
              onFocus={() => setIsOpen(true)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
              className="flex-1 border-none outline-none px-4 text-sm bg-transparent text-gray-900 dark:text-purple-500"
              placeholder={t('header.search') + '...'}
            />
            <button 
              onClick={handleSearch} 
              className="bg-orange-600 dark:bg-black text-white dark:text-purple-500 border-l dark:border-purple-500 rounded-r-full px-6 h-full text-sm whitespace-nowrap hover:bg-orange-700 dark:hover:bg-black transition-colors"
            >
              {t('header.search')}
            </button>
          </div>

          {isOpen && query.trim() !== '' && (
            <div className="absolute left-0 right-0 top-12 bg-white dark:bg-black border border-gray-200 dark:border-purple-500 rounded-xl shadow-lg z-50 max-h-72 overflow-y-auto">
              {filteredResults.length > 0 ? (
                filteredResults.map((product, idx) => (
                  <div 
                    key={idx}
                    onClick={() => handleResultClick(product.nomi)}
                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-neutral-900 cursor-pointer flex items-center justify-between border-b border-gray-100 dark:border-neutral-800 last:border-none"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={product.rasm_url} 
                        alt={product.nomi} 
                        className="w-10 h-10 object-contain rounded-md bg-gray-50 p-0.5 border"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900 dark:text-purple-400 line-clamp-1">
                          {product.nomi}
                        </span>
                        <span className="text-xs text-gray-400">
                          {product.turkum}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-orange-600 dark:text-yellow-400 whitespace-nowrap ml-2">
                      {product.narxi} so'm
                    </span>
                  </div>
                ))
              ) : (
                <div className="px-4 py-6 text-sm text-gray-400 text-center">
                  Hech narsa topilmadi 😕
                </div>
              )}
            </div>
          )}
        </div>

        <FaMoon className='text-gray-500 dark:text-purple-500 cursor-pointer hover:text-gray-800 dark:hover:text-purple-500' onClick={DarkMode} />
        
        <div className="flex items-center gap-2 shrink-0">
          {langs.map((lang) => {
            const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'uz'
            return (
              <span 
                key={lang} 
                onClick={() => i18n.changeLanguage(lang.toLowerCase())} 
                className={`text-sm cursor-pointer dark:text-purple-500 hover:text-gray-800 dark:hover:text-purple-500 ${
                  currentLang === lang.toLowerCase() ? 'font-medium text-gray-900 underline' : 'text-gray-500'
                }`}
              >
                {lang}
              </span>
            )
          })}
        </div>
      </nav>

      <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-purple-500 px-10 py-4">
        <ul className="flex items-center gap-8 ">
          {navLinks.map(({ to, label, end }) => (
            <li key={to} className="">
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
