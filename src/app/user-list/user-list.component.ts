import { Component, OnInit, Input } from '@angular/core';
import {User} from '../users'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
@Input('user') user

  ngOnInit(): void {
  }
  callMethod()
  {
    
    console.log(this.user)
  }

}
