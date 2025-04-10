import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'AboutUs',component:AboutusComponent}
];
