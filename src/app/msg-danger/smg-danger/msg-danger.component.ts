import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'msg-danger',
  templateUrl: './msg-danger.component.html',
  styleUrls: ['./msg-danger.component.css']
})
export class MsgDangerComponent implements OnInit {
  @Input("msg") msg: any;

  constructor() { }

  ngOnInit(): void {
  }

}
