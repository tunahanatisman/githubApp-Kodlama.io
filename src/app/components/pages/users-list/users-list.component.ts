import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userLists=["idrisadiguzel","tuna676","ibrahim-yildirim","engindemirog","salihsenturk97"]
  gits:User[];

  constructor(private gitService:GitService) { }

  ngOnInit(): void {
    let lists=[];
    this.userLists.forEach(element=>{
      this.gitService.getGits(element).subscribe((data)=>{
      lists.push(data);
      });
    });
    this.gits=lists;
  }

}
