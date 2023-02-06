import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CommonService } from '../../services/common/common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public options = ['Bạn 1', 'Bạn 2', 'Bạn 3']

  constructor(public commonService: CommonService, public cartService: CartService){}

  public ngOnInit() {
    
  }
}
