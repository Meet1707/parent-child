import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

   @Input() p;
   @Output() cMsg = new EventEmitter<string>();
  public cMessage = "message  from child";
  ngOnInit() {
  } 
   childMsg(){
      this.cMsg.emit(this.cMessage);
   }
}
