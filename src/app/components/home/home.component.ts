import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../shared/services/cart/cart.service';
import { CommonService } from '../shared/services/common/common.service';
import { ProductService } from '../shared/services/product/product.service';

interface Product {
	id: number;
	name: string;
	des: string;
	price: number;
	avatarLink: string;
	brand: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
  menuItems= [
    {name: 'Cảm Ứng', icon: 'smartphone.svg', id: 1},
    {name: 'Phím Bấm', icon: 'nokia.svg', id: 2},
    {name: 'Khác', icon: 'more.svg', id: 3}
  ]
  menuTests= [
    {name: 'Test', icon: 'phone.svg'},
	{name: 'Test', icon: 'phone.svg'},
	{name: 'Test', icon: 'phone.svg'},
	{name: 'Test', icon: 'phone.svg'},
	{name: 'Test', icon: 'phone.svg'},
	{name: 'Test', icon: 'phone.svg'},
	{name: 'Test', icon: 'phone.svg'},
	{name: 'Test', icon: 'phone.svg'}
  ]
  public productList: Product[] = []

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;

  constructor(private productService: ProductService, public commonService: CommonService, public cartService: CartService) {}

  togglePaused() {
		if (this.paused) {
			this.carousel?.cycle();
		} else {
			this.carousel?.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
  
  public getLinkAvatar(link: string): string {
    return window.location.origin + "/assets/img/ui/" + link;
  }
  public getProductPicture(link: string): string {
    return window.location.origin + "/assets/img/dienthoai/" + link;
  }
  
  public ngOnInit() {
	this.productService.getProductList().subscribe(data => {
		this.productList = data;
	}, er => {
		console.log('loi',er)
	})
  }

  public filterProductByCatalogId(catalogId: number) {
	let data = this.productList;
	let result = data.filter(function(item: any) {
		return item.catalogId === catalogId;
	})
	return result
  }

  public checkContentLoad():boolean {
	// console.log('1',window.location.href)
	// console.log('2',window.location.origin + '/')
	if (window.location.href === window.location.origin + '/') {
		return true
	}else {
		return false
	}
  }
}
