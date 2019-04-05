import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { IMtBike } from './IMtBike';


@Component({
    templateUrl:'./ViewWb.component.html',
    selector:'<VieWb></ViewWb>',
  
 
})
export class ViewWbComponent implements OnInit{
  
mtBikes:IMtBike;
breakpoint:number;
rowheight:string;

constructor(private api:ApiService){}
ngOnInit(){
    this.getBikes();
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
  
   getBikes(){
    this.api.getBikes().subscribe(mtBike=>this.mtBikes=mtBike);
   }
  
   deleteBike(bikeId: number){
       this.api.deleteBike(bikeId).subscribe();
       location.reload();
      
   }
   updateBike(bike:IMtBike){
       this.api.editBike(bike).subscribe();
       location.reload();
   }
    
}