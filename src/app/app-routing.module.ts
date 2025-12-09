import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeupServicesAdminFormComponent } from './Admin/components/makeup_services-admin-form/makeup_services-admin-form.component';
import { MakeupServicesAdminListComponent } from './Admin/components/makeup_services-admin-list/makeup_services-admin-list.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';
import { BookingsFormComponent } from './Bookings/components/bookings-form/bookings-form.component';
import { BookingsListComponent } from './Bookings/components/bookings-list/bookings-list.component';
import { MakeupServiceComponent } from './Makeup_Services/components/makeup-service/makeup-service.component';
import { MakeupServicesListComponent } from './Makeup_Services/components/makeup_services-list/makeup_services-list.component';
import { OnlineClassComponent } from './Online_Classes/components/online-class/online-class.component';
import { OnlineClassesListComponent } from './Online_Classes/components/online-classes-list/online-classes-list.component';
import { AboutMeComponent } from './Public/about-me/about-me.component';
import { HomeComponent } from './Public/home/home.component';
import { PortfolioComponent } from './Public/portfolio/portfolio.component';
import { AdminGuard } from './Shared/Guards/admin.guard';
import { AuthGuard } from './Shared/Guards/auth-guard.guard';
import { ProfileComponent } from './User/components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'makeup-services', component: MakeupServicesListComponent },
  {
    path: 'makeup-services/:id',
    component: MakeupServiceComponent,
  },
  {
    path: 'admin/services',
    component: MakeupServicesAdminListComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'admin/services/new',
    component: MakeupServicesAdminFormComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'bookings/me',
    component: BookingsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bookings/new',
    component: BookingsFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'online-classes',
    component: OnlineClassesListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'online-classes/:id',
    component: OnlineClassComponent,
    canActivate: [AuthGuard],
  },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
