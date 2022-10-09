import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BarComponent } from './pages/bar/bar.component'
import { HomeComponent } from './pages/bar/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':barName', component: BarComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
