import React, { createContext, useState, useEffect, ReactNode } from 'react'

import { SnackData } from '../interfaces/SnackData'

import { getBurgers, getPizzas, getDrinks, getSobremesas } from '../services/api'

interface SnackContexProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  sobremesas: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContexProps)

export function SnackProvaider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [sobremesas, setSobremesas] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const drinkRequest = await getDrinks()
        const sobremesaRequest = await getSobremesas()

        const requests = [burgerRequest, pizzaRequest, drinkRequest, sobremesaRequest]

        const [
          { data: burgerResponse },
          { data: pizzaResponse },
          { data: drinkResponse },
          { data: sobremesaResponse },
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinkResponse)
        setSobremesas(sobremesaResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, sobremesas }}>
      {children}
    </SnackContext.Provider>
  )
}
