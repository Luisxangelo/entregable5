import { useDispatch } from "react-redux"
import { setNameTrainerGlobal } from "../../store/slices/nameTrainer.slice"

const Header = () => {
  const dispatch = useDispatch()

  const handleClickLogout = () => {
   dispatch(setNameTrainerGlobal(""))
  }

  return (
    <section className="relative"> 
    {/* seccion roja */}
    <div className="bg-red-600 h-20 relative">
        <div className="absolute left-0 bottom-0 w-[220px] xxs:w-[290px] sm:w-[375px]">
            <img src="/images/Logo.png" alt="" />
        </div>
    </div>    
    {/* seccion negra */}
    <div className="bg-black h-10"></div>
    {/* boton pokebola */}
    <div className="h-16 aspect-square bg-white border-8 border-black rounded-full absolute -bottom-4 right-0 -translate-x-1/2 after:content-[''] after:h-9 after:aspect-square after:bg-gray-700 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-black">
      <button onClick={handleClickLogout} className="absolute left-1/2 top-1/2 text-white z-20 -translate-x-1/2 -translate-y-1/2 bg-slate-400 rounded-full h-8 w-20 shadow-md shadow-slate-700" >Logout</button>
    </div>
</section>
  )
}

export default Header