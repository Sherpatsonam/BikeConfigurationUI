import {Component} from '@angular/core';
import { IBikeConfigs } from './IBikeConfigs';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import{ ConfigDialogComponent} from './configDialog.component';
import { IMtBike } from '../mountainBikes/IMtBike';

@Component({
  selector: 'BikeConfigs',
  templateUrl: 'bikeConfigs.component.html',
  styleUrls: ['bikeConfigs.component.css'],
})
export class BikeConfigsComponent {
  displayedColumns = ['configId', 'pedal', 'seatPost','seat','brake','stem','handlebar','derailleurs','chainSet','buttons'];
  panelOpenState = false;
  bikeConfigs:IBikeConfigs[];
  id:number;
  bConf:IBikeConfigs;
  newBConf={
    
    pedal:"",
    seatPost: "",
    seat: "",
    brake: "",
    stem: "",
    handlebar: "",
    derailleurs: "",
    chainSet: "",
    bikeId: null
    
   };
 
 




constructor(private api:ApiService, private _route: ActivatedRoute,private dialog: MatDialog){}
ngOnInit(){
  
   this.id=+this._route.snapshot.params['id'];
 
    this.getBikeConfigs(this.id);
     
   }


 getBikeConfigs(bikeId: number){
   this.api.getBikeConfs(bikeId).subscribe(bikeConf=>this.bikeConfigs=bikeConf);
 }

 deleteConfig(configId:number){
 
  this.api.deleteConfig(configId).subscribe();
  
  location.reload()
 }
 
 editConfig(){
  this.api.editBConf(this.bConf).subscribe();
 
 }

 addConfig(){
  this.newBConf.pedal=this.bConf.pedal;
  this.newBConf.seatPost=this.bConf.seatPost;
  this.newBConf.seat=this.bConf.seat;
  this.newBConf.brake=this.bConf.brake;
  this.newBConf.stem=this.bConf.stem;
  this.newBConf.handlebar=this.bConf.handlebar;
  this.newBConf.derailleurs=this.bConf.derailleurs;
  this.newBConf.chainSet=this.bConf.chainSet;  
  this.newBConf.bikeId=this.id;

  
  
   this.api.addBikeConfig(this.newBConf).subscribe();
   location.reload();
 }

 openUpdateDialog(bconf) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = bconf;

  let dialogRef =this.dialog.open(ConfigDialogComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(value =>{this.bConf=value});
     
  };

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
  
    let dialogRef =this.dialog.open(ConfigDialogComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(value =>{this.bConf=value});
      
    };


  

  
}
 




