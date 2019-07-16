import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMember } from '../models/member.model';
import { MEMBERS } from '../mock-members';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  member: IMember;
  ngOnInit() {
    // Get parameter id
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.member = MEMBERS.find(member => member.id == Number(params.get('id')));
      console.log(this.member);
    })
  }

}
