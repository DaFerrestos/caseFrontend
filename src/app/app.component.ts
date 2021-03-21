import { User } from './models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formUser: FormGroup = new FormGroup({
    inputUser: new FormControl('')
  });

  user: User = new User();

  formRepos: FormGroup = new FormGroup({
    inputUser: new FormControl('')
  });

  repo: User = new User();

  formStarred: FormGroup = new FormGroup({
    inputUser: new FormControl('')
  });

  starred: User = new User();

  constructor(private us: UserService, private rp: UserService, private st: UserService) {

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


  returnRepos(url: string ) {
    console.log();
    this.rp.getRepos(url).then((data: User) => {
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

  returnStarred(url: any ) {
    console.log();
    this.st.getStarred(url).then((data: User) => {
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
