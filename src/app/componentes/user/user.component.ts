import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    constructor(private userService: UserService) {
  }
  erro: any;
  user: User = new User();

  ngOnInit(): void {

  }
  login: string = "Anderson-Couto";

  // getter() {
  //     this.userService.getUser(this.login).subscribe((data: User) =>{
  //       this.user = data;
  //       console.log('A variável que preenchemos', this.user);
  //       console.log('O data que recebemos', data);
  //     }, (error: any) =>{
  //       this.erro = error;
  //       console.error('Erro: ', error)
  //     }

  //   );
  // }
}
