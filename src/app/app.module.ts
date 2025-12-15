import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AdminModule } from './Admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appEffects } from './app.effects';
import { appReducers } from './app.reducers';
import { AuthModule } from './Auth/auth.module';
import { BookingModule } from './Bookings/bookings.module';
import { MakeupServiceComponent } from './Makeup_Services/components/makeup-service/makeup-service.component';
import { MakeupServicesListComponent } from './Makeup_Services/components/makeup_services-list/makeup_services-list.component';
import { OnlineClassComponent } from './Online_Classes/components/online-class/online-class.component';
import { OnlineClassesFormComponent } from './Online_Classes/components/online-classes-form/online-classes-form.component';
import { OnlineClassesListComponent } from './Online_Classes/components/online-classes-list/online-classes-list.component';
import { AboutMeComponent } from './Public/about-me/about-me.component';
import { HomeComponent } from './Public/home/home.component';
import { PortfolioComponent } from './Public/portfolio/portfolio.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { AuthInterceptor } from './Shared/Services/auth-interceptor.service';
import { ProfileComponent } from './User/components/profile/profile.component';
import { ToastComponent } from './Shared/Components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    ProfileComponent,
    MakeupServicesListComponent,
    OnlineClassesListComponent,
    OnlineClassesFormComponent,
    OnlineClassComponent,
    MakeupServiceComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    BookingModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
