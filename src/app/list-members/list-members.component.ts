import { Component } from '@angular/core';
import { IMember } from '../models/member.model';
import { MEMBERS } from '../mock-members';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent {

  constructor(private router: Router) { }

  members: IMember[] = MEMBERS;

  // click event
  // navigate(['1','2'])
  // new url = localhost:4200/1/2
  goToMemberDetails(member: IMember) {
    this.router.navigate(["list", member.id])
  }
  
}
