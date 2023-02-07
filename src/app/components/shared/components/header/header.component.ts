import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CommonService } from '../../services/common/common.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';



interface ProductElement {
  product: {
    id: number;
    catalogId: number;
    name: string;
    des: string;
    price: number;
    avatarLink: string;
    brand: string;
  };
  amount: number;
  note: number;
}
interface Product {
	id: number;
	name: string;
	des: string;
	price: number;
	avatarLink: string;
	brand: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public options = ['Bạn 1', 'Bạn 2', 'Bạn 3']
  tableColumn: string[] = ['productIndex','productName', 'productPrice', 'productAmount',"productTotal", 'productNote'];
  public isShowCart = false;
  public cart: ProductElement[] = [];
  public productList: Product[] = [];
  public searchInput:string = '';

  public formData2 = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['',Validators.min(0)],
    address: ['',Validators.required],
    email: ['',Validators.email],
  })

  constructor(public commonService: CommonService, public cartService: CartService, private formBuilder: FormBuilder, public productService: ProductService){}
  
  public ngOnInit() {
    this.productService.getProductList().subscribe(data => {
      this.productList = data;
    }, er => {
      console.log('loi', er)
    })
  }
  public productFilter() {
    if (this.searchInput === '') {
      return this.productList;
    }else {
      let data = this.productList;
      let kq: Product[] = [];
      for (let i in data) {
        let text = data[i].name + data[i].des;
        if (text.toLowerCase().search(this.searchInput.toLowerCase()) != -1) {
          kq.push(data[i]);
        }
      }
      return kq;
    }
  }
  public openCart()  {
    this.isShowCart = true;
    this.cart = this.cartService.getCart(); // get cart
  }
  public closeCart() {
    this.isShowCart = false;
  }
  public increaseAmount(productId: number) {
    if (this.cartService.increaseAmount(productId)) {
      this.cart = this.cartService.getCart(); // get cart
    }
  }
  public reduceAmount(productAmount: number,productId: number) {
    if (productAmount == 1) {
      if (confirm('Bạn muốn xóa sản phẩm này ?')) {
        if (this.cartService.reduceAmount(productId)) {
          this.cart = this.cartService.getCart(); // get cart
        }
      }
    }else {
      if (this.cartService.reduceAmount(productId)) {
        this.cart = this.cartService.getCart(); // get cart
      }
    }
  }
  public getIndex(productId: number):number {
    for (let i in this.cart) {
      if (this.cart[i].product.id == productId) {
        return Number(i)
      }
    }
    return 0
  }
  public submitForm() {
    if (this.cartService.createOrder(this.formData2.value)) {
      alert('Đặt hàng thành công!')
      localStorage.removeItem('cart');
      this.isShowCart = false;
    }else {
      alert('Đặt hàng thất bại!')
    }
  }
}
