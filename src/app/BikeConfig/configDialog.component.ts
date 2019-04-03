import {Component,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import { IBikeConfigs } from './IBikeConfigs';




@Component({
    templateUrl:'configDialog.component.html'
})

export class ConfigDialogComponent {
    configs={
        configId: null,
        pedal: "",
        seatPost: "",
        seat: "",
        brake: "",
        stem: "",
        handlebar: "",
        derailleurs: "",
        chainSet: "",
        bikeId: null

    };
    constructor(
        public dialogRef: MatDialogRef<ConfigDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IBikeConfigs){
            
        }
        onNoClick(): void {
            this.dialogRef.close();
            location.reload();
            
          }
        
         
}