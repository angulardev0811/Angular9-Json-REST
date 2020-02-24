import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { DetailComponent } from './component/detail/detail.component';
import { HeaderComponent } from './component/main/header/header.component';
import { CarouselComponent } from './component/main/carousel/carousel.component';
import { CardComponent } from './component/main/card/card.component';
import { DheaderComponent } from './component/detail/dheader/dheader.component';
import { DsectionComponent } from './component/detail/dsection/dsection.component';
import { DfooterComponent } from './component/detail/dfooter/dfooter.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    HeaderComponent,
    CarouselComponent,
    CardComponent,
    DheaderComponent,
    DsectionComponent,
    DfooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
