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
    constructor(private api:ApiService){}
    
    addBike(){
        this.api.addBike(this.bike).subscribe();
        location.reload();
       
    }
}