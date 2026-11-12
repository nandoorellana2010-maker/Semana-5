'use client'

import { useState } from 'react';
import { useContextPresupuesto } from '../Provider/ProviderPresupuesto';

export default function PresupuestoMensualComponent() {

  const { setPresupuesto} = useContextPresupuesto()
  const [nuevoPresupuesto, setNuevoPresupuesto] = useState<number>(0)
    
  function guardarPresupuesto(){
    setPresupuesto(nuevoPresupuesto)
  }
  return (
    <div>
      <div>
        <h4>Establecer Presupuesto Mensual</h4><br/>
        <form className='form'>
          <input type="number"
            value={nuevoPresupuesto}
            onChange={(e) => setNuevoPresupuesto(Number(e.target.value))}
          /> <br />

          <button type='button' className='btn btn-info' onClick={guardarPresupuesto}>Guardar Presupuesto</button> <br />
        </form>
      </div>
    </div>
  )
}
