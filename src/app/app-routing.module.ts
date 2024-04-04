import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./cards/cards.module').then((m) => m.CardsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
