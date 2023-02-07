import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CommonService } from '../../services/common/common.service';

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public options = ['Bạn 1', 'Bạn 2', 'Bạn 3']
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tableColumn: string[] = ['productName', 'productPrice', 'productAmount', 'productNote'];
  dataSource = ELEMENT_DATA;

  public isShowCart = false;
  public cart: ProductElement[] = [];

  constructor(public commonService: CommonService, public cartService: CartService){}

  public ngOnInit() {
    
  }
  public openCart()  {
    this.isShowCart = true;
    this.cart = this.cartService.getCart(); // get cart
  }
  public closeCart() {
    this.isShowCart = false;
  }
}
