import { create } from 'zustand'

export const useStore = create((set) => ({
  isLogin: false,
  setLogin: (value) => set({ isLogin: value }),
  products: [
    {
      "nomi": "YUMSHOQ PLASTILIN 12 TA YOSTIQCHA",
      "tavsifi": "YUMSHOQ PLASTILIN 12 TA YOSTIQCHA",
      "narxi": "5 950",
      "turkum": "HAFTA TAKLIFI",
      "rasm_url": "https://havasfood.uz"
    },
    {
      "nomi": "SUVLI TO'PPONCHA 13 SM XILMA-XILLIKDA",
      "tavsifi": "SUVLI TO'PPONCHA 13 SM XILMA-XILLIKDA",
      "narxi": "14 950",
      "turkum": "HAFTA TAKLIFI",
      "rasm_url": "https://havasfood.uz"
    },
    {
      "nomi": "AVTOMOBILNI YUVISH UCHUN NEMO SHIMGICHI",
      "tavsifi": "AVTOMOBILNI YUVISH UCHUN NEMO SHIMGICHI",
      "narxi": "4 950",
      "turkum": "HAFTA TAKLIFI",
      "rasm_url": "https://havasfood.uz"
    },
    {
      "nomi": "DERAZALARNI YUVISH UCHUN YIG'ILADIGAN TUTQICHLI CHO'TKA 130 SM",
      "tavsifi": "DERAZALARNI YUVISH UCHUN YIG'ILADIGAN TUTQICHLI CHO'TKA 130 SM",
      "narxi": "54 950",
      "turkum": "HAFTA TAKLIFI",
      "rasm_url": "https://havasfood.uz"
    },
    {
      "nomi": "AVTO UCHUN X CARD AREON ILINADIGAN HAVO XUSHBO'YLANTIRUVCHISI XILMA-XILLIKDA",
      "tavsifi": "AVTO UCHUN X CARD AREON ILINADIGAN HAVO XUSHBO'YLANTIRUVCHISI XILMA-XILLIKDA",
      "narxi": "24 950",
      "turkum": "HAFTA TAKLIFI",
      "rasm_url": "https://havasfood.uz"
    }
  ],
  setProducts: (newProducts) => set({ products: newProducts }),
}))

export const openFavorites = create((set) => ({
  isOpen: false,
  setOpen: (value) => set({ isOpen: value }),
}))
