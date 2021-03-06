import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { DirectivesComponent } from './directives/directives.component';
import { EnumsComponent } from './enums/enums.component';
import { FederationComponent } from './federation/federation.component';
import { GuardsInterceptorsComponent } from './guards-interceptors/guards-interceptors.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { MutationsComponent } from './mutations/mutations.component';
import { PluginsComponent } from './plugins/plugins.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { ResolversMapComponent } from './resolvers-map/resolvers-map.component';
import { ScalarsComponent } from './scalars/scalars.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UnionsComponent } from './unions/unions.component';

const routes: Routes = [
  {
    path: 'quick-start',
    component: QuickStartComponent,
    data: { title: 'GraphQL + TypeScript' },
  },
  {
    path: 'resolvers-map',
    redirectTo: 'resolvers',
  },
  {
    path: 'resolvers',
    component: ResolversMapComponent,
    data: { title: 'GraphQL + TypeScript - Resolvers' },
  },
  {
    path: 'mutations',
    component: MutationsComponent,
    data: { title: 'GraphQL + TypeScript - Mutations' },
  },
  {
    path: 'scalars',
    component: ScalarsComponent,
    data: { title: 'GraphQL + TypeScript - Scalars' },
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
    data: { title: 'GraphQL + TypeScript - Subscriptions' },
  },
  {
    path: 'guards-interceptors',
    redirectTo: 'tooling',
  },
  {
    path: 'tooling',
    component: GuardsInterceptorsComponent,
    data: { title: 'GraphQL + TypeScript - Other features' },
  },
  {
    path: 'federation',
    component: FederationComponent,
    data: { title: 'GraphQL + TypeScript - Federation' },
  },
  {
    path: 'directives',
    component: DirectivesComponent,
    data: { title: 'GraphQL + TypeScript - Directives' },
  },
  {
    path: 'enums',
    component: EnumsComponent,
    data: { title: 'GraphQL + TypeScript - Enums' },
  },
  {
    path: 'unions',
    component: UnionsComponent,
    data: { title: 'GraphQL + TypeScript - Unions' },
  },
  {
    path: 'plugins',
    component: PluginsComponent,
    data: { title: 'GraphQL + TypeScript - Plugins' },
  },
  {
    path: 'interfaces',
    component: InterfacesComponent,
    data: { title: 'GraphQL + TypeScript - Interfaces' },
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    QuickStartComponent,
    ResolversMapComponent,
    MutationsComponent,
    SubscriptionsComponent,
    DirectivesComponent,
    EnumsComponent,
    UnionsComponent,
    PluginsComponent,
    GuardsInterceptorsComponent,
    ScalarsComponent,
    FederationComponent,
  ],
})
export class GraphqlModule {}
