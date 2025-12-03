import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MakeupServicesAdminFormComponent } from './components/makeup_services-admin-form/makeup_services-admin-form.component';
import { MakeupServicesAdminListComponent } from './components/makeup_services-admin-list/makeup_services-admin-list.component';

@NgModule({
  declarations: [
    MakeupServicesAdminListComponent,
    MakeupServicesAdminFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AdminModule {}
