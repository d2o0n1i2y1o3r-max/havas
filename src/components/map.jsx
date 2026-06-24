import { sendForm } from '@emailjs/browser';
import React, { useRef } from 'react'
import { toast } from 'react-toastify';

export default function Map() {
  let ref = useRef()
  const SendEmail = async (e) => {
    e.preventDefault();
    try {
      let response = await sendForm("service_dksdos6","template_78vzqla",ref.current,"-fzdFF_eek4eS9FSK");
      console.log(response);
      toast.success("Email sent successfully");
    }catch(err){
      if(err.massage == "Failed to fetch"){
        toast.error("Failed to fetch!");
      }else{
        toast.error("there is an error");
      }
    }
    
  }
  return (
    <section className="bg-white dark:bg-[#121214] px-6 md:px-16 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Chap qism - Aloqa formasi */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-gray-100">
              Savollaringiz bormi?
            </h2>
            <div className="w-8 h-1 bg-amber-400 dark:bg-emerald-500 rounded-sm" />
          </div>
 
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Bizga qo'ng'iroq qiling</p>
          <div className="flex items-center gap-2 text-gray-900 dark:text-emerald-400 font-semibold text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.06 3.18a1 1 0 01-.23 1.05L7.5 9.4a16.06 16.06 0 006.1 6.1l1.49-1.56a1 1 0 011.05-.23l3.18 1.06a1 1 0 01.68.95V19a2 2 0 01-2 2C9.16 21 3 14.84 3 7V5z" />
            </svg>
            +998(71)205-95-95
          </div>
 
          <p className="text-amber-500 dark:text-emerald-400 text-sm font-semibold mb-2">
            Bizga elektron pochta orqali yozing
          </p>
 
          <form action="" ref={ref}>
            <input
            type="email"
            defaultValue="d2o0n1i2y1o3r@gmail.com"
            className="w-full border border-gray-200 dark:border-[#2a2a30] rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-[#1a1a1e] mb-1 focus:outline-none focus:border-amber-400 dark:focus:border-emerald-500 transition-colors"
          />
          <p className="text-gray-400 dark:text-gray-500 text-xs mb-4">to'ldirish uchun majburiy joy</p>
 
          <textarea
            placeholder="Xabar yozing..."
            rows={4}
            name='coment'
            className="w-full border border-gray-200 dark:border-[#2a2a30] rounded-xl px-4 py-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-[#1a1a1e] resize-none focus:outline-none focus:border-amber-400 dark:focus:border-emerald-500 mb-6 transition-colors"
          />
 
          <button onClick={(e)=>SendEmail(e)} className="w-full sm:w-auto bg-amber-500 dark:bg-emerald-500 text-white dark:text-neutral-950 font-bold px-10 py-3 rounded-full text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:bg-emerald-400 hover:bg-amber-600">
            Yuborish
          </button>
          </form>
        </div>
av
        {/* O'ng qism - Xarita (Yandex Map) */}
        <div className="flex-1 rounded-2xl overflow-hidden min-h-[300px] border border-gray-100 dark:border-[#1f1f23] shadow-md">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=69.279737%2C41.299496&z=11&pt=69.279737,41.299496"
            width="100%"
            height="100%"
            style={{ minHeight: "350px", border: "none" }}
            title="Yandex xarita"
            className="dark:invert dark:hue-rotate-180 dark:contrast-125" // Xaritani dark mode qilish uchun ajoyib hiyla
          />
        </div>

      </div>
    </section>
  )
}
