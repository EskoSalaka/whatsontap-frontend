import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavComponent } from './common/nav/nav.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatTabsModule } from '@angular/material/tabs'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { BeverageListComponent } from './pages/bar/beverage-list.component'
import { BeverageListItemComponent } from './pages/bar/beverage-list-item.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { NgxSpinnerModule } from 'ngx-spinner'
import { HttpClientModule } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SlugifyPipe } from './pipes/slugify.pipe'
import { CommonModule, registerLocaleData } from '@angular/common'
import { BarComponent } from './pages/bar/bar.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatDividerModule } from '@angular/material/divider'
import { SpacerBulletComponent } from './common/spacer-bullet/spacer-bullet.component'
import { BarHeaderComponent } from './pages/bar/bar-header.component'
import { MatChipsModule } from '@angular/material/chips'
import { HomeComponent } from './pages/home/home.component'
import { MatInputModule } from '@angular/material/input'
import { FooterComponent } from './common/nav/footer.component'
import { MatCardModule } from '@angular/material/card'
import { BarListComponent } from './pages/home/bar-list.component'
import { ThickSeparatorComponent } from './common/thick-separator/thick-separator.component'
import localeDeAt from '@angular/common/locales/fi'

registerLocaleData(localeDeAt)

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
    FooterComponent,
    BarListComponent,
    ThickSeparatorComponent,
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
    MatCardModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fi' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
