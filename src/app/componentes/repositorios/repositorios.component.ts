import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss']
})
export class RepositoriosComponent implements OnInit {

  user: User = new User();
  repositories: string[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const repos = this.route.snapshot.paramMap.get('url');

    let repositories = this.repositories;

  }

}
