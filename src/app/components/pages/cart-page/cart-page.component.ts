import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {}

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  delivery(): any {
    // Inicializa uma string vazia para armazenar os nomes dos itens
    let itemsString = '';

    // Itera sobre a matriz de itens no objeto cart
    this.cart.items.forEach((item, index) => {
      // Adiciona o nome do item à string, seguido de quebra de linha
      itemsString += `☁️ ${item.food.name} \n`;
    });

    // Constrói a URL do pedido com a string de itens
    const pedido = `https://api.whatsapp.com/send?phone=5511943236880&text=Ol%C3%A1%20PodSp%20%F0%9F%91%8B%0A%0AGostaria%20de%20fazer%20um%20pedido:%0A${itemsString}%0AQuantidade%20de%20Itens:%20${this.cart.totalCount}%0AValor%20Total:%20R$${this.cart.totalPrice},00`;

    // Redireciona para a URL do pedido
    window.location.href = pedido;
  }
}
