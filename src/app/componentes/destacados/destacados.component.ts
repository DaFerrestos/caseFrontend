import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.scss']
})
export class DestacadosComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User = new User();

  ngOnInit(): void {
  }

}
