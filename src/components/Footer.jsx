import { FaInstagram, FaFacebookF, FaTelegram } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function HavasFooter() {
  return (
    <footer className="bg-white dark:bg-[#121214] px-6 md:px-16 py-10 border-t border-gray-100 dark:border-[#1f1f23] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-16 mb-10">
        
        {/* Logo */}
        <div className="shrink-0">
          <img 
            src="https://havas.uz/logo.png" 
            alt="HAVAS" 
            className="w-20 h-20 object-contain" 
            onError={(e) => { 
              e.currentTarget.style.display = "none"; 
              if (e.currentTarget.nextSibling) {
                e.currentTarget.nextSibling.style.display = "block";
              }
            }} 
          />
          <img src={logo} alt="HAVAS" className="w-20 h-20 object-contain hidden" />
        </div>

        {/* Navigatsiya Havolalari */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-20">
          {/* Nav 1 */}
          <div className="flex flex-col gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors">Biz haqimizda</a>
            <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors">Do'konlar</a>
            <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors">Yangiliklar</a>
          </div>

          {/* Nav 2 */}
          <div className="flex flex-col gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors">Maxsus takliflar</a>
            <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors">Maqolalar</a>
          </div>

          {/* Nav 3 */}
          <div className="flex flex-col gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors">Hamkorlar uchun</a>
            <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors">Vakansiya</a>
            <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors">Anketa</a>
          </div>
        </div>
      </div>

      {/* Divider & Mualliflik */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-[#1f1f23] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400 dark:text-gray-500 text-center sm:text-left">
          Sayt Division tomonidan ishlab chiqilgan
        </p>
        
        {/* Ijtimoiy tarmoqlar */}
        <div className="flex items-center gap-5 text-gray-500 dark:text-gray-400 text-xl">
          <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-amber-500 dark:hover:text-emerald-400 transition-colors"><FaTelegram /></a>
        </div>
      </div>
    </footer>
  );
}
