import {
  CommonModule,
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TabsComponent } from './components/tabs/tabs.component';
import { TocComponent } from './components/toc/toc.component';
import { HeaderAnchorDirective } from './directives/header-anchor.directive';
import { ExtensionPipe } from './pipes/extension.pipe';
import { LocationService } from './location.service';
import { DocumentService } from './document.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, PerfectScrollbarModule],
  declarations: [
    ExtensionPipe,
    TabsComponent,
    TocComponent,
    HeaderAnchorDirective
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    DocumentService,
    LocationService
  ],
  exports: [ExtensionPipe, TabsComponent, TocComponent, HeaderAnchorDirective]
})
export class SharedModule {}
