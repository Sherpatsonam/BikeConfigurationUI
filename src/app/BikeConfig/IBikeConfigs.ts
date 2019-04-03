import { NumberSymbol } from '@angular/common';
import { IMtBike } from '../mountainBikes/IMtBike';

export interface IBikeConfigs{
    configId: number;
    pedal: string;
    seatPost: string;
    seat: string;
    brake: string;
    stem: string;
    handlebar: string;
    derailleurs: string;
    chainSet: string;
    bikeId: number;
    currentBike: IMtBike;
}