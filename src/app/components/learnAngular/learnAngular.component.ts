import { AfterContentChecked, AfterContentInit, Component, ContentChild, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildrenComponent } from './children/children.component';
import { WidgeOneComponent } from './widge-one/widge-one.component';
import { WidgeTwoComponent } from './widge-two/widge-two.component';

const componentConfig = [
  {
    component: () => import('./widge-one/widge-one.component').then(it => it.WidgeOneComponent),
    inputs: {
      name: 'widge one - Profanis'
    } 
  },
  {
    component: () => import('./widge-two/widge-two.component').then(it => it.WidgeTwoComponent),
    inputs: {
      name: 'widge two - Nam'
    } 
  }
]

@Component({
  selector: 'app-learn-angular',
  templateUrl: './learnAngular.component.html',
  styleUrls: ['./learnAngular.component.scss']
})
export class LearnAngularComponent implements AfterContentChecked, AfterContentInit, OnDestroy  {
  public name:string = '';
  public isDestroy = true;
  //@ContentChild('children') contentChild!: ChildrenComponent; // ~~ Viewchild
  @ViewChild('containerDynamicComponent', {read: ViewContainerRef}) containerDynamicComponent!: ViewContainerRef;

  createComponentBaseOnConfig() {
    componentConfig.forEach(async componentConfig => {
      const componentIstance = await componentConfig.component();
      let componentRef =  this.containerDynamicComponent.createComponent(componentIstance);

      Object.entries(componentConfig.inputs).forEach(([key, value]) => {
        componentRef.setInput(key, value)
      })
    })
  }

  createComponent() {
    this.containerDynamicComponent.clear();
    let widgeOneRef =  this.containerDynamicComponent.createComponent(WidgeOneComponent);
    //widgeOneRef.instance.name = "Hải" // not active join to onChanges component lifecycle
    widgeOneRef.setInput('name', 'Hải')
    let widgeTwoRef = this.containerDynamicComponent.createComponent(WidgeTwoComponent);
    //widgeTwoRef.instance.name = "Tiến"
    widgeTwoRef.setInput('name', 'Chiến')
  }

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

