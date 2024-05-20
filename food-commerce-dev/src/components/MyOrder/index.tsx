import { ReactSVG } from 'react-svg'
import shoppingCartSvg from '../../assets/shopping-cart.svg'

import { useCart } from '../../hooks/useCart'
import { Container } from './styles'

export function MyOrder() {
  const { cart } = useCart()

  return (
    <Container to={'cart'}>
      <span>Meu Pedido</span>
      <ReactSVG src={shoppingCartSvg} />

      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
    </Container>
  )
}
