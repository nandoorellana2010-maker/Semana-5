'use client'
import React, { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { ContextPresupuesto } from '../Context/ContextPresupuesto'

export default function ProviderPresupuesto({children} : Plantilla) {
    const [presupuesto, setPresupuesto] = useState<number>(0)
    const [porcentajePresupuesto, setPorcentajePresupuesto] = useState<number>(0)
    
  return (
    <ContextPresupuesto.Provider value={{ presupuesto, setPresupuesto, porcentajePresupuesto, setPorcentajePresupuesto}}>
        {children}
    </ContextPresupuesto.Provider>
  )
}
export function useContextPresupuesto() {
  return useContext(ContextPresupuesto)
}
