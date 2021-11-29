import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoles]'
})
export class RolesDirective implements OnInit {
  private role=localStorage.getItem('role');
  private permisos:any;
  constructor(
    private temaplateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) { }
  ngOnInit() {

   }

   @Input('appRoles')set appRole(value:string[]) {
     this.viewContainer.createEmbeddedView(this.temaplateRef);
     this.permisos=value;
     this.updateView();
   }
   private updateView():void{
     this.viewContainer.clear();
     if(this.checkPermissions()){
       this.viewContainer.createEmbeddedView(this.temaplateRef);
     }
   }
   private checkPermissions():boolean{
 
     for (let i of this.permisos){
       if(this.role==i){
         return true;
         break;
       }
     }
     
       return false;
     
   }
 
}
