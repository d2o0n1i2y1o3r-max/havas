import { FaStore, FaTag, FaBoxOpen, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MdStorefront } from "react-icons/md";

// ... features va galleryImages massivlari o'zgarishsiz qoladi

export default function About() {
  return (
    <>
      <div className="dark:bg-black">
        <section className="bg-white dark:bg-black px-10 py-12">
          {/* ... Biz haqimizda qismi ... */}
          <h1 className="... text-gray-900 dark:text-purple-500 ...">
            {/* ... */}
          </h1>
          <p className="... text-gray-600 dark:text-purple-500 ...">
            {/* ... */}
          </p>
          {/* ... Ikonkalar va matnlar ... */}
          <p className="... text-gray-600 dark:text-purple-500 ...">
            {/* ... */}
          </p>
          {/* ... Rasm galereyasi ... */}
        </section>

        <section className="bg-white dark:bg-black px-10 py-12 border-t dark:border-purple-500">
          {/* ... Ikkinchi qism (tavsif) ... */}
          <h2 className="... text-gray-900 dark:text-purple-500 ...">Biz haqimizda</h2>
          <p className="... text-gray-700 dark:text-purple-500 ...">
            {/* ... */}
          </p>
          {/* ... Statistika va Ikonkalar ... */}
          <FaStore className="... text-gray-800 dark:text-purple-500" />
          <p className="... text-gray-700 dark:text-purple-500 ...">
            {/* ... */}
          </p>
          {/* ... */}
        </section>
      </div>
    </>
  );
}
