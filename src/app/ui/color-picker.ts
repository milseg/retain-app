import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'color-picker',
  styles: [`
    .color-selector {
      position: relative;
    }
    .selector {
      min-width: 120px;
      border: 1px solid lightgrey;
      padding: 10px;
      background-color: #efefef;
      position: absolute;
      top: -50px;
      left: 0;
    }
    .color {
      height: 30px;
      width: 30px;
      border-radius: 100%;
      cursor: pointer;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    .color:hover {
      border: 2px solid darkgrey;
    }
    .icon {
      font-size: 1.4rem;
      color: grey;
      cursor: pointer;
    }
  `],
  template: `
  <div class="color-selector">
    <i class="material-icons icon" (click)="toggle()">color_lens</i>
    <div class="selector row center-xs" *ngIf="showPalette">
      <div class="color"
           *ngFor="let color of colors"
           [ngStyle]="{'background-color': color}"
           (click)="onSelectColor(color)"></div>
    </div>
  </div>
  `
})
export class ColorPicker {
  @Output() select = new EventEmitter();
  colors: Array<string> = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];
  showPalette: boolean = false;
  toggle(){
    this.showPalette = !this.showPalette;
  };
  onSelectColor(color){
    this.select.next(color);
    this.toggle();
  };
}
