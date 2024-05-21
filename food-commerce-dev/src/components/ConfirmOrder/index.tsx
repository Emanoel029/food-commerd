import { currencyFormat } from '../../helpers/currencyFormat'
import { useCart } from '../../hooks/useCart'

import { Container } from './styles'

export function ConfirmOrder() {
  const { cart } = useCart()

  const totalAmout = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <button type='button'>Finalizar Pedido</button>
      <span>
        Total <strong>{currencyFormat(totalAmout)}</strong>
      </span>
    </Container>
  )
}
