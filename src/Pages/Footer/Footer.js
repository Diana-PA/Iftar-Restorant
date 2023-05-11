import Image from "react-bootstrap/esm/Image"

const Footer = () => {
  return (
    <footer>
        <div className='p-5 bg-black'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <Image className="m-7"
                        src='https://static.vecteezy.com/system/resources/thumbnails/001/105/395/small/circular-golden-flower-mandala-on-black.jpg'
                        fluid
                        />
                    </div>
                    <div className='col-sm-4 justify-content-center text-align-center h-100 text-light'>
                        <br />
                        <p className='fw-bold'>Acerca de Nosotros</p>
                        <p className='fw-lignter'>Síguenos en nuestras redes</p>
                        <p className='fw-lignter'>Instagram: @restorantIftar</p>
                    </div>
                    <div className='col-sm-4 text-center text-light'>
                        <br />
                        <p className='fw-bold'>Suscríbete a nuestro boletín</p>
                        <div className='text-center'>
                            <button className='btn btn-secondary text-center --bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'>Suscribirme</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer