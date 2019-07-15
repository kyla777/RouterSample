import { Component } from '@angular/core';
import { IMember } from '../models/member.model';
import { MEMBERS } from '../mock-members';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent {

  constructor() { }


  members: IMember[] = MEMBERS;

  // addMember(member: IMember) {
  //   this.members.unshift(member);
  // }
}
