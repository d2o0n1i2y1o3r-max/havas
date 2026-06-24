import { FaStore, FaTag, FaBoxOpen, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MdStorefront } from "react-icons/md";

// ... features va galleryImages massivlari o'zgarishsiz qoladi

export default function About() {
  return (
    <>
      <div className="bg-white dark:bg-[#121214] transition-colors duration-300">
        
        {/* Birinchi qism: Biz haqimizda va Galereya */}
        <section className="px-6 md:px-16 py-12">
          {/* Sarlavha */}
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            Kompaniya haqida
          </h1>
          
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            Havas — bu sizning kundalik ehtiyojlaringiz uchun qulay va hamyonbop do'konlar tarmog'idir.
          </p>
          
          {/* ... Ikonkalar va matnlar ... */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Biz har bir mijoz uchun yuqori sifatli xizmat ko'rsatishga intilamiz.
          </p>
          
          {/* ... Rasm galereyasi ... */}
        </section>

        {/* Ikkinchi qism: Batafsil tavsif va Statistika */}
        <section className="px-6 md:px-16 py-12 border-t border-gray-100 dark:border-[#1f1f23]">
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Biz haqimizda
          </h2>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-8">
            Bizning asosiy maqsadimiz — mahsulotlarning keng assortimentini eng qulay narxlarda uyingizga yaqin joyda taqdim etish.
          </p>
          
          {/* Statistika va Ikonkalar bloklariga misol */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-gray-50 dark:bg-[#1a1a1e] border border-gray-100 dark:border-[#25252b] flex items-start gap-4">
              <FaStore className="text-2xl text-amber-500 dark:text-emerald-400 shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                  Do'konlar tarmog'i
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Yuzlab do'konlar sizning xizmatingizda.
                </p>
              </div>
            </div>
            {/* Boshqa ikonka va statistika bloklari ham shu tartibda davom etadi */}
          </div>

        </section>
      </div>
    </>
  );
}
