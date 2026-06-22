import { useForm } from 'react-hook-form'
import { useStore } from '../Store/zustand'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

export default function SignUp() {
  const { t } = useTranslation()
  const setLogin = useStore((state) => state.setLogin)
  const navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const password = watch('password')

  const createUser = async (data) => {
    try {
      console.log(data)
      setLogin(true)
      toast.success(t('signup.success'))
      navigate('/')
    } catch (err) {
      if (err.message === 'Network Error') {
        toast.error(t('signup.networkError'))
      } else {
        toast.error(t('signup.error'))
      }
    }
  }

    const langs = ['Ru', 'Uz', 'En']

  
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-blue-400 to-indigo-500 p-4">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8">
          <div className="mb-7 flex justify-between">
            <h1 className="text-2xl font-bold text-slate-800 mb-1">{t('signup.title')}</h1>
            <div className="h-1 w-9 rounded-full bg-blue-500" />
            <div className="flex items-center gap-2 shrink-0">
          {langs.map((lang) => (
            <span
              key={lang}
              onClick={() => i18n.changeLanguage(lang.toLowerCase())}
              className={`text-sm cursor-pointer dark:text-purple-500 hover:text-gray-800 dark:hover:text-purple-500 ${
                i18n.language === lang.toLowerCase()
                  ? 'font-medium text-gray-900 underline'
                  : 'text-gray-500'
              }`}
            >
              {lang}
            </span>
          ))}
        </div>
          </div>

          <form onSubmit={handleSubmit(createUser)} className="space-y-3">
            <div>
              <input
                {...register('name', { required: t('signup.errors.nameRequired') })}
                type="text"
                placeholder={t('signup.name')}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register('email', {
                  required: t('signup.errors.emailRequired'),
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t('signup.errors.emailInvalid') },
                })}
                type="email"
                placeholder={t('signup.email')}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <input
                {...register('password', {
                  required: t('signup.errors.passwordRequired'),
                  minLength: { value: 6, message: t('signup.errors.passwordMin') },
                })}
                type="password"
                placeholder={t('signup.password')}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div>
              <input
                {...register('confirm_password', {
                  required: t('signup.errors.confirmRequired'),
                  validate: (value) => value === password || t('signup.errors.passwordMatch'),
                })}
                type="password"
                placeholder={t('signup.confirmPassword')}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
              {errors.confirm_password && <p className="text-red-500 text-xs mt-1">{errors.confirm_password.message}</p>}
            </div>

            <button type="submit" className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white text-sm font-semibold tracking-wide shadow-lg shadow-blue-200 transition-all duration-200 mt-2">
              {t('signup.submit')}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-5">
            {t('signup.haveAccount')}{' '}
            <span className="text-blue-500 font-medium hover:underline cursor-pointer">{t('signup.login')}</span>
          </p>
        </div>
      </div>
    </>
  )
}