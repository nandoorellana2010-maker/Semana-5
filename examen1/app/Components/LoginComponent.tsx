'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useUsuario } from '../Provider/ProviderUsuario'

export default function LoginComponent() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { setNombreUsuario } = useUsuario()

  const router = useRouter()

  function login() {

    if (email  === 'admin' && password === 'admin123') {
      setNombreUsuario(email)
      router.push('/Gastos')
    }
    else {
      alert('Usuario o contraseña incorrecta')
    }

  }
  return (
    <div>
      <div>
      <h3>Mis Gastos</h3>
        <h4>Inicio de sesion</h4><br/>
        <form className='form'>
          <input type="text"
            placeholder='Ingrese su nombre de usuario'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> <br />

          <input type='password'
            placeholder='Ingrese contrasena'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          ></input> <br />
          <button type='button' className='btn btn-info' onClick={login}>Iniciar sesion</button> <br />
        </form>
      </div>
    </div>
  )
}
