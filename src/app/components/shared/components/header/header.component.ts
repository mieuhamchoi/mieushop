import { Component } from '@angular/core';
import { CommonService } from '../../services/common/common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public options = ['Bạn 1', 'Bạn 2', 'Bạn 3']

  constructor(public commonService: CommonService){}
}
