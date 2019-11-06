import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import { AppComponent } from './app.component';
import { SocialWrapperComponent } from './common/social-wrapper/social-wrapper.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HeaderComponent } from './homepage/header/header.component';
import { NewsletterComponent } from './homepage/newsletter/newsletter.component';
import { EnterpriseComponent } from './homepage/pages/enterprise/enterprise.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './homepage/menu/menu.component';
import { MenuItemComponent } from './homepage/menu/menu-item/menu-item.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    EnterpriseComponent,
    SocialWrapperComponent,
    NewsletterComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AppModule {}
