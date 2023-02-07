import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {}

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
  public getCart() {
    let cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage == null) {
      return []
    }else {
      let cart = JSON.parse(cartLocalStorage);
      return cart
    }
  }
  public increaseAmount(productId: number) {
    let cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage == null) {
      alert("Lỗi, vui lòng kiểm tra lại!")
      return false
    }else {
      let cart = JSON.parse(cartLocalStorage);
      for (let i in cart) {
        if (cart[i].product.id == productId) {
          cart[i].amount++;
          break
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      return true
    }
  }
  public reduceAmount(productId: number) {
    let cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage == null) {
      alert("Lỗi, vui lòng kiểm tra lại!")
      return false
    }else {
      let cart = JSON.parse(cartLocalStorage);
      for (let i in cart) {
        if (cart[i].product.id == productId) {
          if (cart[i].amount == 1) {
            cart.splice(i, 1);
          }else {
            cart[i].amount--;
          }
          break
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      return true
    }
  }
  public totalCart() {
    let cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage == null) {
      return 0
    }else {
      let cart = JSON.parse(cartLocalStorage);
      let total = 0;
      for (let i in cart) {
        total += cart[i].product.price * cart[i].amount;
      }
      return total
    }
  }
  public createOrderServer(product: any,guest: any):Observable<any> {
      let payLoad = {
        productId: product.id,
        guestName: guest.name,
        guestPhone: guest.phone,
        guestAddress: guest.address,
        guestEmail: guest.email,
        productAmount: product.amount
      }
    return this.httpClient.post<any>('http://localhost:3000/orders', payLoad, this.httpOptions)
  }
  public createOrder(guest: any) {
    let cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage == null) {
      return false
    }else {
      let cart = JSON.parse(cartLocalStorage);
      for (let i in cart) {
        let product = {
          id: cart[i].product.id,
          amount: cart[i].amount
        }
        this.createOrderServer(product, guest).subscribe(data => {
          console.log('data' + i, data)
        }, er => {
          console.log("loi" + i, er)
        })
      }
      return true
    }
  }
}
