import { Component, Input,Output,computed,EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

//type User = {
 // id: number,
 // name: string,
  //avatar: string;
//}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
 })
 export class UserComponent {
  @Input({ required: true }) user!: {
    id:string;
    avatar: string;
    name:string;
  } ;
   @Input ({required:true}) selected!: boolean;
   @Output() select = new EventEmitter();
   

  get imagePath() {
    return '/first-angular-app/public/users' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
