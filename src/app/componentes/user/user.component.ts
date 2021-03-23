import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  formUser: FormGroup = new FormGroup({
    inputUser: new FormControl('')
  });

  user: User = new User();


  constructor(private us: UserService, private router:Router) {
  }

  erro: any;

  redirectPage(pageName: string): void{
    this.router.navigate([`${pageName}`]);
  }
  

  returnUser(form: any ) {
  console.log(form);
  this.us.getUser(form).then((data: User) => {
    console.log(data);
    this.user = data;

  }).then(() => {
    this.us.getRepos(this.user.repos_url).then( data => {
      console.log(data);

    });
  }).then(() => {
    this.us.getStarred(this.user).then( data => {
      console.log(data);
    });
  });


  }


}
