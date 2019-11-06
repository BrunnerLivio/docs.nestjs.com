import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HOMEPAGE_TITLE, TITLE_SUFFIX } from './constants';

import { DocumentService, DocumentContents } from './shared/document.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  doc: DocumentContents;
  constructor(
    private readonly titleService: Title,
    // private readonly router: Router,
    // private readonly activatedRoute: ActivatedRoute,
    private readonly documentService: DocumentService
  ) {}

  async ngOnInit() {
    // this.router.events
    //   .filter(ev => ev instanceof NavigationEnd)
    //   .subscribe(ev => this.updateTitle());

    this.documentService.currentDocument
      .pipe(tap((...args) => console.log('asdasdasd', ...args)))
      .subscribe(document => (this.doc = document));
  }

  // updateTitle() {
  //   const route = this.activatedRoute.snapshot.firstChild;
  //   if (!route) {
  //     return undefined;
  //   }
  //   let childRoute = route.firstChild;
  //   childRoute = childRoute.firstChild ? childRoute.firstChild : childRoute;
  //   const {
  //     data: { title }
  //   } = childRoute;
  //   const pageTitle = title ? title : HOMEPAGE_TITLE;

  //   this.titleService.setTitle(pageTitle + TITLE_SUFFIX);
  // }
}
