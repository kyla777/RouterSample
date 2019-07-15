import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberDetailsComponent } from './member-details/member-details.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: "list/:id", component: MemberDetailsComponent },
  { path: "list", component: ListMembersComponent },
  { path: "create", component: CreateMemberComponent },
  { path: "home", component: HomeComponent,
    children: [
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent }
    ]
  },
  { path: "", redirectTo: "home", pathMatch: 'full'},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
