import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnDestroy } from '@angular/core';
import { ChildrenComponent } from './children/children.component';

@Component({
  selector: 'app-learn-angular',
  templateUrl: './learnAngular.component.html',
  styleUrls: ['./learnAngular.component.scss']
})
export class LearnAngularComponent implements AfterContentChecked, AfterContentInit, OnDestroy  {
  public name:string = '';
  public isDestroy = true;
  @ContentChild('children') contentChild!: ChildrenComponent; // ~~ Viewchild

  ngAfterContentInit() {
 
   // console.log("Content of component loaded")
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    //console.log("Once After Angular has checked content of component, after each times ngDoCheck()")
  }

  ngAfterViewInit() {
    console.log("// dom component has been rendered")
  }

  ngAfterViewChecked() {
    console.log("// dom component checked")
  }

  ngOnDestroy() {
    console.log("// before destroy component")
  }
}

