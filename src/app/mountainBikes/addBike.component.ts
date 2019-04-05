import { Component} from '@angular/core';
import { ApiService } from '../api.service';




@Component({
    templateUrl:'./addBike.component.html',
    selector:'<addBike></addBike>',
    styleUrls:['./addBike.component.css']
 
})
export class AddBikeComponent{
    bike={
        
        name: "",
        initialCost: null,
        upgradedCost: null,
        walmartId: null,
        bikeConfs: []

    }
    breakpoint:number;
    rowheight:string;
    constructor(private api:ApiService){}
    ngOnInit(){
      
        if (window.innerWidth < 826){
            this.breakpoint=1;
            this.rowheight="1:1.35";
        }
        else if (window.innerWidth < 1244) {
            this.breakpoint=2;
            this.rowheight="1:1";
        } else {
            this.breakpoint=3;
           this.rowheight="1:1";
        }
           
       }
       onResize(event) {
 
        if (window.innerWidth <826){
            this.breakpoint=1;
            this.rowheight="1:1.35";
        }
        else if (window.innerWidth < 1244) {
            this.breakpoint=2;
            this.rowheight="1:1";
        } else {
            this.breakpoint=3;
            this.rowheight="1:1";
        }
      
      }
    
    addBike(){
        this.api.addBike(this.bike).subscribe();
        location.reload();
       
    }
}