import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {
  @Input() name:string = '';

  ngOnChanges() {
    // Join join when component's input changes
    console.log("Join on change function", this.name)
  }

  ngOnInit() {
    // Join when first join to component // after On Change //
    console.log("Join On Init",this.name)
  }

  ngDoCheck() {
    // Join after first ngOnInit // after On Chage Active
    console.log("Join On Check",this.name)
  }

  ngAfterContentInit(){
    console.log("Join On After Content Init",this.name)
  }
}
