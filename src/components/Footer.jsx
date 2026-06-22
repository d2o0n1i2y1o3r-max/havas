import { FaInstagram, FaFacebookF, FaTelegram } from "react-icons/fa";
import logo from "../assets/logo.png";
export default function HavasFooter() {
  return (
    <footer className="bg-white dark:bg-black px-10 py-8">
      <div className="flex gap-16 mb-8">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="https://havas.uz/logo.png"
            alt="HAVAS"
            className="w-20 h-20 object-contain"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <img src={logo} alt="" />
        </div>

        {/* Nav 1 */}
        <div className="flex flex-col gap-3 text-sm text-gray-700 dark:text-purple-500">
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors">Biz haqimizda</a>
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors">Do'konlar</a>
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors">Yangiliklar</a>
        </div>

        {/* Nav 2 */}
        <div className="flex flex-col gap-3 text-sm text-gray-700 dark:text-purple-500">
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors">Maxsus takliflar</a>
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors">Maqolalar</a>
        </div>

        {/* Nav 3 */}
        <div className="flex flex-col gap-3 text-sm text-gray-700 dark:text-purple-500">
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors">Hamkorlar uchun</a>
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors">Vakansiya</a>
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors">Anketa</a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-purple-500 pt-4 flex items-center justify-between">
        <p className="text-xs text-gray-400 dark:text-purple-500">Sayt Division tomonidan ishlab chiqilgan</p>
        <div className="flex items-center gap-4 text-gray-600 dark:text-purple-500 text-lg">
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-500 dark:hover:text-purple-500 transition-colors"><FaTelegram /></a>
        </div>
      </div>
    </footer>
  );
}
