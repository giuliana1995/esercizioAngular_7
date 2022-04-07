import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role, Userlist } from '../models/interface-user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() index!: number;
  @Input() user!: Userlist;
  @Output() remove: EventEmitter<number> = new EventEmitter();
  role = Role;
  
  constructor() { }

  removeItem() {
    this.remove.emit();
  }

  ngOnInit(): void {
  }

}
