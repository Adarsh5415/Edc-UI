import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {path:'',component:UserDashboardComponent},
    {path:'images',component:ImageSliderComponent},
    {path:'about-us',component:AboutUsComponent},
];
