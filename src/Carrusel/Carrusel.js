export function Carrusel() {

    return (
        <>
            <div className="container justify-content-center col-md-6 mt-4 " >
                <div className="row" >
                    <div className="col-12  ">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/junticas.jpeg?alt=media&token=d0bfa6ee-47f6-426b-9da9-5fcd0979cc41" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>LAS MEJORES CANTANTES LATINAS DE REGGENTON</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>      
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/junticas5.webp?alt=media&token=3f071e03-0fb0-4f10-ad9c-15d0f7a4ab65" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/react-74f73.appspot.com/o/junticas4.png?alt=media&token=62867f22-661c-471a-b0ea-0b55b8a5ac1e" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}