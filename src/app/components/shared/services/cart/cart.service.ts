import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}

  public countCart() {
    let cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage == null) {
      return 0
    }else {
      let cart = JSON.parse(cartLocalStorage);
      let result = 0;
      for (let i in cart) {
        result += cart[i].amount;
      }
      return result
    }
  }
  public addToCart(product: any) {
    let cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage == null) {
      // chưa có cart
      let cart = [];
      let newProduct = {
        product: product,
        amount: 1,
        note: 'ghi chú'
      }
      cart.push(newProduct);
      localStorage.setItem('cart', JSON.stringify(cart))
      alert("Thành công thêm vào giỏ hàng!")
    }else {
      // đã có cart
      let cart = JSON.parse(cartLocalStorage);
      let flag = false;
      for (let i in cart) {
        if (cart[i].product.id == product.id) {
            cart[i].amount += 1;
            flag = true;
            break;
        }
      }
      if (flag == false) {
        let newProduct = {
          product: product,
          amount: 1,
          note: 'ghi chú'
        }
        cart.push(newProduct);
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      alert("Thành công thêm vào giỏ hàng!")
    }
  }
}
