const FooterHome = () => {
  return (
    <section className="relative"> 
        {/* seccion roja */}
        <div className="bg-red-600 h-20"></div>
        {/* seccion negra */}
        <div className="bg-black h-10"></div>
        {/* boton pokebola */}
        <div className="h-16 aspect-square bg-white border-8 border-black rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 after:content-[''] after:h-9 after:aspect-square after:bg-gray-700 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-black"></div>
    </section>
  )
}

export default FooterHome