
import './Integrantes.css'

import 'animate.css';

import WOW from 'wowjs';

import { useEffect } from 'react';

export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return (
        <>
            <div className="row my-5 justify-content-center "  >
                <div className="col-2 col-md-10 zoom center" >
                    <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated  animate__fadeInLeft' >
                        <h2> Karol G</h2>
                        <h3> Cantante </h3>
                    </div>
                    <div className="col-12 col-md-4 zoom " >
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/karol.jpeg?alt=media&token=00c0b8b5-f051-41bd-9c4d-bc577102d659" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__rollIn wow " data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                    </div>
                </div>
            </div>
                <div className="row mt-2" >
                    <div className="col-12" >
                        <div className="collapse " id="collapseExample">

                            <div className="card card-body  ">
                                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 justify-content-center  center" >
                    <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated  animate__fadeInLeft' >
                        <h2> Shakira </h2>
                        <h3> Cantante </h3>
                    </div>
                    <div className="col-12 col-md-4 zoom " >
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/shakira%202.webp?alt=media&token=1a407170-742f-4e07-9c24-25a1843a9175" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__rollIn wow " data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                    </div>
                </div>
                <div className="row mt-2" >
                    <div className="col-12" >
                        <div className="collapse " id="collapseExample">
                            <div className="card card-body">
                                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}