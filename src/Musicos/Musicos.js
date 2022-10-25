import { Footer } from "../Footer/Footer.js"

export function Musicos(params) {

    //Arreglo De Objetos Es Formato Comun Al Consumir Un Api

    let Musicos = [
        {
            nombre: "Karol G",
            rol: "Cantante",
            url: "https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/Karol%20g.webp?alt=media&token=ee51daf6-dbe5-404b-9122-29d25432c649"

        },
        {
            nombre: "Shakira",
            rol: "Cantante",
            url: "https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/Shakira.png?alt=media&token=a75b7d35-e3ae-4fd5-baae-1696925d6546"

        }
    ]

    let conciertosMemorables = [
        {
            fecha: "El 29 de julio de 2022 ",
            pais: "Bélgica",
            descripcion: "Karol G participo en el festival más importante de música electrónica en el mundo y frente a aproximadamente unas 100.000 personas.",
            foto: "https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/karol%20g%202.jpg?alt=media&token=9908d7ed-053f-4a4d-8298-04b826f42e6b"
        },
        {
            fecha: "El 3 de noviembre de 2018",
            pais: "Colombia, Bogotá",
            descripcion: "La gira de Shackira - El Dorado World Tour",
            foto: "https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/shakira%202.jpg?alt=media&token=e7b677e5-8177-4c15-a2cb-3f74d5061229"
        },
        {
            fecha: "El 29 de abril de 2022",
            pais: "Colombia Medellin",
            descripcion: "La cantante colombiana Karol G invitó a sus seguidores al sector de Provenza, barrio El Poblado en Medellín, promocionando su nueva canción 'Provenza'.",
            foto: "https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/karol%20g%203.jpg?alt=media&token=c9e06bf0-46a1-44bd-9700-5927861ae0e6"
        },
        {
            fecha: "29 de mayo del 2011",
            pais: "Barcelona",
            descripcion: "Shakira pone el broche de oro a la fiesta azulgrana con Piqué sobre el escenario",
            foto: "https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/shakira%203.jpg?alt=media&token=982954f5-2aba-470a-803f-fe381c863f3f"
        },
        {
            fecha: "El 17 de abril del 2022",
            pais: "Estados Unidos",
            descripcion: "Karol G debutó en Coachella con dos presentaciones. El segundo día sorprendió al público con J Balvin como invitado especial.",
            foto: "https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/karol%20g%204.jpg?alt=media&token=459347fb-6f4e-4041-a57b-c40b5e8ad241"
        }
    ]

    //Mapeando Un Arreglo Para Hacer Render
    return (
        //let hola="Lorena" De Esta Forma NO Hay Que Interpolar

        //Siempre De Map Va Una Funcion Anonima o Funcion Flecha
        //Un .map Siempre Te Return algo
        <>
            <div className="d-flex justify-conten-center row-cols-md-4 g-3" >
                {
                    Musicos.map(function (Musico) {
                        return (
                            <>
                                <div className="col mt-4 " >
                                    <div className="card h-100" >

                                        <img src={Musico.url} className="img-fluid w-100 h-100 " alt="foto" />
                                        <h3 className="text-primary text-center" > {Musico.nombre}  </h3>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <div className="row">
                {
                    conciertosMemorables.map(function (concierto) {
                        return (
                            <>
                                <div className="col">
                                    <div className="card h-100" >

                                        <img src={concierto.foto} className="img-fluid w-100 h-100 " alt="foto" />
                                        <h3 className="text-primary text-center" > {concierto.fecha}  </h3>
                                        <h3 className="text-primary text-center" > {concierto.pais}  </h3>
                                        <h3 className="text-primary text-center" > {concierto.descripcion}  </h3>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        <Footer />
        </>
    )
}

