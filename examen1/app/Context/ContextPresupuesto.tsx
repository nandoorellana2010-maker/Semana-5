'use client'
import { createContext } from "react";

export const ContextPresupuesto = createContext({
  presupuesto: 0,
  setPresupuesto: (valor: number) => {},
  porcentajePresupuesto: 0,
  setPorcentajePresupuesto: (valor: number) => {}
})