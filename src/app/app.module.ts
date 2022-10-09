import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavComponent } from './components/nav/nav.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatTabsModule } from '@angular/material/tabs'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { BeverageListComponent } from './components/beverage-list/beverage-list.component'
import { BeverageListItemComponent } from './components/beverage-list-item/beverage-list-item.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { NgxSpinnerModule } from 'ngx-spinner'
import { HttpClientModule } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SlugifyPipe } from './pipes/slugify.pipe'
import { CommonModule } from '@angular/common'
import { BarComponent } from './pages/bar/bar.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatDividerModule } from '@angular/material/divider'
import { SpacerBulletComponent } from './components/spacer-bullet/spacer-bullet.component'
import { BarHeaderComponent } from './pages/bar/bar-header/bar-header.component'
import { MatChipsModule } from '@angular/material/chips'
import { HomeComponent } from './pages/bar/home/home.component'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BeverageListComponent,
    BeverageListItemComponent,
    BarComponent,
    SlugifyPipe,
    SpacerBulletComponent,
    BarHeaderComponent,
    HomeComponent,
  ],
  imports: [
    MatChipsModule,
    FlexLayoutModule,
    MatTooltipModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}