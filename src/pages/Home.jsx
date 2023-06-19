import { useDispatch } from "react-redux"
import FooterHome from "../components/home/FooterHome"
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice"
import { useNavigate } from "react-router-dom"

const Home = () => {

 const dispatch = useDispatch() 
 const navigate = useNavigate()  

const handleSubmit = (e) => {
    e.preventDefault()
    const nameTrainer = e.target.nameTrainer.value
    dispatch(setNameTrainerGlobal(nameTrainer))
    navigate("/pokedex")
}

  return (
    <main className="grid grid-rows-[1fr_auto] min-h-screen">
    {/* Section superior */}
        <section className="grid justify-center pt-42">
            <div className="flex items-center justify-center">
                <img src="/images/Logo.png" alt="" />
            </div>
            <h2 className=" text-center font-bold text-red-500 text-3xl h-0 p-4">Hello Trainer!</h2>
            <p className=" text-center text-xl">For star, give me your name</p>
            <form onSubmit={handleSubmit} className="flex justify-items-center p-24 pr-9">
                <input required id="nameTrainer" type="text" placeholder="Insert Your Name" className="shadow-slate-600 shadow-md h-12 w-96 p-2"/>
                <button className="bg-red-500 text-white h-12 w-32 shadow-sm p-2">Start</button>  
            </form>
        </section>
    {/* Section Inferior */}
        <section>
            <FooterHome/>
        </section>
    </main>
  )
}

export default Home