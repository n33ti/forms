// app.component.ts

import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {User} from './users'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   angForm: FormGroup;
  user: User
  users=[]
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: this.fb.control('', Validators.required ),
       address1: this.fb.control('' , Validators.required),
       email: this.fb.control('', [Validators.required, Validators.email]),
       dob: this.fb.control('', Validators.required),
       country: this.fb.control('IN'),
       gender: this.fb.control('M'),
       marital: this.fb.control('U'),
       address2: this.fb.control('', Validators.min(0) ),
       address3: this.fb.control('' ,Validators.min(0)),
       favfoo: this.fb.control('')


    });
  }
submit()
{
  if(this.angForm.valid)
  {
   
  this.user = this.angForm.value
this.users.push(this.user)
  console.log(this.user)
  }

}


}

