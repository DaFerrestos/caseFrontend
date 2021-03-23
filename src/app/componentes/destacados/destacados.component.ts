import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.scss']
})
export class DestacadosComponent implements OnInit {

  user: User = new User();
  starreds : string[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    const starred = this.route.snapshot.paramMap.get('url');
    

  }

}
