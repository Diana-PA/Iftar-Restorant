import { useState } from "react";
import image1 from '../../Assets/ryan-miglinczy-fQtFfvedV-8-unsplash.jpeg';
import image2 from '../../Assets/klaus-kreuer-cEgzSYT9IiI-unsplash.jpeg'
import image3 from '../../Assets/mostafa-meraji-HfZtmWseR1A-unsplash.jpeg';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { Navigate } from "react-router-dom";
import { auth } from '../../firebase'


const Login = () => {

    const [register, setRegister] = useState(false);
    const [redirigir, setRedirigir] = useState(false);

    const handlerSubmit = async(e) => {
        e.preventDefault();

        const correo = e.target.email.value;
        const contraseña = e.target.contraseña.value;

        if (register) {
            await createUserWithEmailAndPassword(auth, correo, contraseña)
            setRedirigir(true)
        } else {
           try {
            const profile = await signInWithEmailAndPassword(auth, correo, contraseña)
           setRedirigir(true)
           console.log(profile)
           } catch (error) {
            console.error(error)
           }
        }
    }

    if(redirigir){
        return <Navigate to='/menu' />
    }
  
    return(
        <div className="row container p-4">
            <div className="col-md-8">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} alt="..." className='tamaño-image'/>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} alt="..." className='tamaño-image'/>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} alt="..." className='tamaño-image'/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            {/* formulario */}
            <div className="col-md-4">
                <div className="mt-5 ms-5">
                    {/* render conditional */}
                    <h1>{register ? 'Registrarse' : 'Iniciar Sesion'}</h1>
                    {/*colocando onsubmit*/}
                    <form onSubmit={handlerSubmit}>
                        <div className="mb-3">
                             <label className="form-label">Email: </label>
                            <input type='email' className="form-control" placeholder="Tu email" id="email" required></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña: </label>
                            <input type='password' className="form-control" placeholder="Tu contraseña" id="contraseña" required></input>
                        </div>
                       
                            <button className="btn btn-primary" type="submit"  onClick={() => redirigir}>
                                {register ? 'Registrarse' : 'Iniciar Sesion'}
                            </button>
                       
                    </form>
                    {/* actualizar estado */}
                    <div className="form-group">
                        <button className="btn btn-secondary mt-4 form-control" onClick={() => setRegister(!register)}>{register ? 'Estas registrado? Inicia sesion' : 'No estas registrado? Registrate'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;