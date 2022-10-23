import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { UserdataService } from '../services/userdata.service';
import { Root,User } from "../models/user.model"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private userService: UserdataService) {

  }

  UserData?: User
  ngOnInit(): void {
    this.getUserInfo()
  }

  private getUserInfo(){
   // WIP
    this.userService.getUserData("").subscribe({
      next: (repsonse) => {
        this.UserData = repsonse.users[0]
      }
    })
  }

  color: ThemePalette = "primary";

}
