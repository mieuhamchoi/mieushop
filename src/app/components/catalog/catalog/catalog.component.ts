import { Component } from '@angular/core';
import { CommonService } from '../../shared/services/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/services/product/product.service';
interface Catalog {
	id: number;
	name: string;
}
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  public catalogId:number  = 0;
  public catalogList: Catalog[] = [];
  constructor(public commonService: CommonService, private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  public ngOnInit():void {
    this.productService.getCatalogList().subscribe(data => {
      this.catalogList = data;
    }, er => {
      console.log('er', er)
    })

    this.catalogId = Number(this.route.snapshot.paramMap.get('catalogId'));

    if (this.catalogId) {
      
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
}
