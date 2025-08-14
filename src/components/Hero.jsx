export default function Hero() {
    return (
        <>
            <section className={`p-4 text-center w-full h-screen`}>
                <div className="row rounded m-4 shadow-lg d-flex">
                    <div className="col m-5 p-auto ">
                        <h1 className="pb-5">Primer proyecto de react con boostrap</h1>
                        <p>Este es el primer proyecto de react con vite y boostrap.
                            Fue diseñado bajo el marco del bootcamp de <b>programación
                                orientada el desarrollo web full stack </b>de valle talento
                            tech. El cual duro más de 140 horas
                        </p>
                    </div>
                    <div className="col m-5 p-4">
                        <h1>+</h1>
                    </div>
                </div>
            </section>
        </>
    )
}