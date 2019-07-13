import { Component, EventEmitter, Output } from '@angular/core';
import { Member } from '../models/member.model';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent {

  constructor() { }

  @Output() addMemberEvent: EventEmitter<any> = new EventEmitter();
  id: number = null;
  name: string = null;
  email: string = null;
  phoneNumber: string = null;
  isActive: boolean = true;
  dateOfBirth: Date;
  imageUrl: string = null;
  
  member: Member = {
    id: this.id,
    name: this.name,
    email: this.email,
    phoneNumber: this.phoneNumber,
    isActive: this.isActive,
    dateOfBirth: this.dateOfBirth,
    imageUrl: this.imageUrl
  }
  
  addMember() {
    console.log(this.member)
  }
}
