import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeProfileComponent } from './change-profile/change-profile.component';

const routes: Routes = [
  { path: '', component: ChangeProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
