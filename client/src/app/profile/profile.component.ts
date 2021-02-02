import { Component, OnInit } from '@angular/core';
import { AuthService, UserDetails } from '../auth.service'

@Component({
  //selector: 'app-profile',
  templateUrl: './profile.component.html',
  //styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  details: UserDetails

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.details = this.auth.getUserDetails()
  }

}
