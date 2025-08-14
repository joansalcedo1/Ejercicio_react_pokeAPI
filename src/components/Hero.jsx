export default function Hero() {
    return (
        <>
            <section className={`p-4 text-center`}>
                <div className="row rounded m-4 shadow-lg d-flex">
                    <div className="col m-5 p-auto ">
                        <h1 className="pb-5">¡Atrapa a todos los Pokémon desde tu navegador!
                        </h1>
                        <p>Explora el mundo Pokémon con datos en tiempo real gracias a la PokeAPI.
                            Descubre sus estadísticas, habilidades y más, todo en una interfaz rápida y divertida.

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