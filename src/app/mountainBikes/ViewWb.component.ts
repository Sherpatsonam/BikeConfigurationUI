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

constructor(private api:ApiService){}
ngOnInit(){
    this.getBikes();
    if (window.innerWidth < 826){
        this.breakpoint=1;
    }
    else if (window.innerWidth < 1244) {
        this.breakpoint=2;
    } else {
        this.breakpoint=3;
    }
       
   }
   onResize(event) {
 
    if (window.innerWidth <826){
        this.breakpoint=1;
    }
    else if (window.innerWidth < 1244) {
        this.breakpoint=2;
    } else {
        this.breakpoint=3;
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