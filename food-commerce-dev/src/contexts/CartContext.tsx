import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { create } from 'domain'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (sanck: SnackData) => void
  // removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void
  // updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack]

    console.log(`newCart`, newCart)

    setCart(newCart)
  }
  return <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
}
