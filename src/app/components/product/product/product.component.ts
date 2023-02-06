import { Component } from '@angular/core';
import { CommonService } from '../../shared/services/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/services/product/product.service';
interface Catalog {
	id: number;
	name: string;
}
interface Product {
	id: number;
	name: string;
	des: string;
	price: number;
	avatarLink: string;
	brand: string;
  catalogId: number
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public productId:number = 0;
  public product: Product = {
    id: 0,
    name: '',
    des: '',
    price: 0,
    avatarLink: '',
    brand: '',
    catalogId: 0
  };
  public catalogList: Catalog[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  public ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('productId'));

    this.productService.getCatalogList().subscribe(data => {
      this.catalogList = data;
    }, er => {
      console.log('er', er)
    })

    this.productService.getProductList().subscribe(data => {
      for (let i in data) {
        if (data[i].id == this.productId) {
          this.product = data[i];
          break;
        }
      }
    }, er => {
      console.log('er', er)
    })
  }

  public getCatalogById(catalogId: number):any {
    for (let i in this.catalogList) {
      if (this.catalogList[i].id == catalogId) {
        return this.catalogList[i];
      }
    }
    return null;
  }
  public getProductPicture(link: string): string {
    return window.location.origin + "/assets/img/dienthoai/" + link;
  }

}
