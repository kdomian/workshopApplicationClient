import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'userSetting', component: UserSettingComponent}
];

@NgModule({
  declarations: [
    UserSettingComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserSettingComponent
  ]
})
export class UserModule { }
