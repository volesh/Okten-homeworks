import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:IUser

  constructor(private router:Router, private ActivatedRoute:ActivatedRoute, private userService:UserService) {
    this.ActivatedRoute.params.subscribe(({id})=>{
      this.user = this.router.getCurrentNavigation()?.extras.state?.['user']
      if (!this.user){
        userService.getById(id).subscribe(value=>this.user = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
