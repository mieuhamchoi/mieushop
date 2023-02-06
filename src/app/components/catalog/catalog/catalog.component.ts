import { Component } from '@angular/core';
import { CommonService } from '../../shared/services/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/services/product/product.service';
import { CartService } from '../../shared/services/cart/cart.service';
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
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  public catalogId:number  = 0;
  public catalogList: Catalog[] = [];
  public productList: Product[] = [];

  constructor(public commonService: CommonService, private route: ActivatedRoute, private router: Router, private productService: ProductService, public cartService: CartService) {}

  public ngOnInit():void {
    this.productService.getCatalogList().subscribe(data => {
      this.catalogList = data;
    }, er => {
      console.log('er', er)
    })

    this.catalogId = Number(this.route.snapshot.paramMap.get('catalogId'));

    if (this.catalogId) {
      this.productService.getProductList().subscribe(data => {
        this.productList = data.filter((product:Product) => {  return product.catalogId === this.catalogId })
        console.log(this.productList)
      }, er => {
        console.log('er', er)
      })
    }else {
      this.router.navigateByUrl('');
    }
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
