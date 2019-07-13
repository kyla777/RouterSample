import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import RouterModule and Routes
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Create an array of routes
const appRoutes: Routes = [
  { path: "list", component: ListMembersComponent },
  { path: "create", component: CreateMemberComponent },
  { path: "", redirectTo: "list", pathMatch: "full"},
  { path: "**", component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListMembersComponent,
    CreateMemberComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule can be imported multiple times: once per 
    // lazily-loaded bundle. Since the router deals with a global 
    // shared resource--location, we cannot have more than one 
    // router service active.

    // forRoot creates a module that contains all the directives, 
    // the given routes, and the router service itself.
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
