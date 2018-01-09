import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { RouteStartSessionComponent } from './route-start-session/route-start-session.component';
import { RouteErrorComponent } from './route-error/route-error.component';
import { HomeComponent } from './home/home.component';
import { UserWebcamComponent } from './user-webcam/user-webcam.component';
import { FriendWebcamComponent } from './friend-webcam/friend-webcam.component';
import { SessionLinkComponent } from './session-link/session-link.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'start', component: RouteStartSessionComponent },
  { path: '**', component: RouteErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    RouteStartSessionComponent,
    RouteErrorComponent,
    HomeComponent,
    UserWebcamComponent,
    FriendWebcamComponent,
    SessionLinkComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
