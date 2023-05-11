import { db } from '../firebase'

import { useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';

import '../../src/App.css'

const Delivery = () => {

    const valorInicial = {
        nombre: '',
        pedido: '',
        direccion: ''
    }

    //variables de estados

    const [user, setUser] = useState(valorInicial);
   

    const catchInputs = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const guardarDatos = async(e) => {
        e.preventDefault();

        try{
            await addDoc(collection(db, 'clientes'), {
                ...user
            })
            
        } catch (error){
            console.log(error)
        }
        setUser({...valorInicial});
    }




  return (
    <div className="container3">
            <div className="row">
                {/* Formulario2 */}
                <div className="col-md-4 iftar">
                    <h1>
                        Sección Delivery
                    </h1>
                    <br />
                    <p>
                    Nuestro servicio de delivery de Iftar es la manera perfecta de disfrutar de nuestros deliciosos platos árabes desde la comodidad de tu hogar. Ofrecemos entregas rápidas y confiables para garantizar que tu comida llegue fresca y deliciosa.
                    </p>
                    <br />
                    <h2 className="text-center">Realiza tu pedido</h2>
                    <form onSubmit={guardarDatos}>
                        <div className="card card-body">
                            <div className="form-group">
                                <input type='text' name="nombre" className="form-control mb-3" placeholder="Escribe tu nombre" onChange={catchInputs} value={user.nombre} required/>
                                <input type='text' name="pedido" className="form-control mb-3" placeholder="Ingresa tu pedido" onChange={catchInputs} value={user.pedido} required/> 
                                <input type='text' name="direccion" className="form-control mb-3" placeholder="Anota tu dirección" onChange={catchInputs} value={user.direccion} required/>
                            </div>
                            <button className="btn btn-primary">
                                Pedir
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-8 cat123">
                </div>
              
                </div>
            </div>
  )
}

export default Delivery