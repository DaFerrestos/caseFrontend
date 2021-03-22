import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss']
})
export class RepositoriosComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: User = new User();

  ngOnInit(): void {
  }

}
