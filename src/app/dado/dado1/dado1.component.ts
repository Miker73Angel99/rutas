import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado1',
  templateUrl: './dado1.component.html',
  styleUrls: ['./dado1.component.css']
})
export class Dado1Component  {

  @Input() valor: string="";

}
