import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthonGuard } from './authon.guard';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule ) },


  { path: 'movies', component: MoviesComponent, canActivate: [AuthonGuard] },
  { path: 'network', component: NetworkComponent, canActivate: [AuthonGuard] },
  { path: 'people', component: PeopleComponent, canActivate: [AuthonGuard] },
  { path: 'tv', component: TvShowComponent, canActivate: [AuthonGuard] },
  { path: 'singleMovie/:x/:y', component: SingleMovieComponent, canActivate: [AuthonGuard] },
  // { path: '**', component: MoviesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
