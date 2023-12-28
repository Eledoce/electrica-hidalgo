import { IoLogoWhatsapp } from 'react-icons/io5'

export default function WhatsappButton() {
  return (
    <a
      href={
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
          ? 'whatsapp://send?phone=527351280629'
          : 'https://api.whatsapp.com/send?phone=527351280629'
      }
      className="flex justify-center items-center text-white text-4xl p-3 bg-[#25D366] hover:bg-white-100 rounded-full shadow duration-150 ease-in-out h-14 w-14 right-5 fixed bottom-20 z-50 hover:shadow-xl active:scale-90 transition-transform"
      aria-label="whatsapp"
    >
      <IoLogoWhatsapp />
    </a>
  )
}
