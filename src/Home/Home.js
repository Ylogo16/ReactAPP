import './Home.css'

import { SubMenu } from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'

//Componente Es Una Funcion Y Se Pueden Programar


export function Home() {

    let descripcionBanda = "Carolina Giraldo Navarro nació el 14 de febrero de 1991 en Medellín, Colombia, su padre es músico. Desde temprana edad tuvo interés por la música. Estudió en el colegio Calasanz Femenino. En 2006 participó en el reality show Factor X, y vio en él una oportunidad de surgir en el mundo de la música. Gracias a su participación obtuvo su primer contrato discográfico con Flamingo Records (Colombia) & Diamond Music (Puerto Rico) y eligió Karol G como su nombre artístico. En su primer año fue invitada por DJ Kio a ser telonera de los conciertos de Don Omar en la ciudad de Cartagena. En una ocasión J Balvin se presentó en la fiesta de quince años de una prima suya, y cantó una canción con él. Estudió música en la Universidad de Antioquia, y mercadotecnia en Nueva York durante tres meses. Shakira es una de las cantantes más famosas y queridas en la actualidad, quien además nos ha demostrado que el mundo de la fama y el reconocimiento también puede recibir a los latinos. Su música y su estilo son un gran ejemplo a seguir, así como su manera de ver la vida. En su red social de Instagram cuenta actualmente con 60 millones de seguidores.Shakira es una de las cantantes más famosas y queridas en la actualidad, quien además nos ha demostrado que el mundo de la fama y el reconocimiento también puede recibir a los latinos. Su música y su estilo son un gran ejemplo a seguir, así como su manera de ver la vida. En su red social de Instagram cuenta actualmente con 60 millones de seguidores."

    return (

        <>
            <div className="banner" >
            </div>
            <div className="container mt-5" >
                <div className="row">
                    <div className="col-12" >
                        <h1 className="text-center" > Karol G y Shakira </h1>
                        <p className="text-center" >
                            {descripcionBanda}
                        </p>
                    </div>

                </div>
            </div>

            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )


}