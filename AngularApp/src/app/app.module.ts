import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListModelComponent } from './model/list-model/list-model.component';
import { EditModelComponent } from './model/edit-model/edit-model.component';
import { DetailModelComponent } from './model/detail-model/detail-model.component';
import { AddModelComponent } from './model/add-model/add-model.component';
import { AddMakeComponent } from './make/add-make/add-make.component';
import { DetailMakeComponent } from './make/detail-make/detail-make.component';
import { EditMakeComponent } from './make/edit-make/edit-make.component';
import { ListMakeComponent } from './make/list-make/list-make.component';
import { ListDealerComponent } from './dealer/list-dealer/list-dealer.component';
import { EditDealerComponent } from './dealer/edit-dealer/edit-dealer.component';
import { DetailDealerComponent } from './dealer/detail-dealer/detail-dealer.component';
import { AddDealerComponent } from './dealer/add-dealer/add-dealer.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { DetailCarComponent } from './car/detail-car/detail-car.component';
import { EditCarComponent } from './car/edit-car/edit-car.component';
import { ListCarComponent } from './car/list-car/list-car.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DealerComponent } from './dealer/dealer.component';
import { CarComponent } from './car/car.component';
import { MakeComponent } from './make/make.component';
import { ModelComponent } from './model/model.component';

const appRoutes: Routes = [
  { path: '', component: DealerComponent },
  {
    path: 'dealers',
    component: DealerComponent,
    children: [
      { path: '', component: ListDealerComponent },
      { path: 'list', component: ListDealerComponent },
      { path: 'add', component: AddDealerComponent },
      { path: 'edit/:id', component: EditDealerComponent },
      { path: 'detail/:id', component: EditDealerComponent }
    ]
  },
  {
    path: 'cars',
    component: CarComponent,
    children: [
      { path: '', component: ListCarComponent },
      { path: 'list', component: ListCarComponent },
      { path: 'add', component: AddCarComponent },
      { path: 'edit/:id', component: EditCarComponent },
      { path: 'detail/:id', component: DetailCarComponent }
    ]
  },
  {
    path: 'makes',
    component: MakeComponent,
    children: [
      { path: '', component: ListMakeComponent },
      { path: 'list', component: ListMakeComponent },
      { path: 'add', component: AddMakeComponent },
      { path: 'edit/:id', component: EditMakeComponent },
      { path: 'detail/:id', component: DetailMakeComponent }
    ]
  },
  {
    path: 'models',
    component: ModelComponent,
    children: [
      { path: '', component: ListModelComponent },
      { path: 'list', component: ListModelComponent },
      { path: 'add', component: AddModelComponent },
      { path: 'edit/:id', component: EditModelComponent },
      { path: 'detail/:id', component: DetailModelComponent }
    ]
  },
  { path: '**', component: DealerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListModelComponent,
    EditModelComponent,
    DetailModelComponent,
    AddModelComponent,
    AddMakeComponent,
    DetailMakeComponent,
    EditMakeComponent,
    ListMakeComponent,
    ListDealerComponent,
    EditDealerComponent,
    DetailDealerComponent,
    AddDealerComponent,
    AddCarComponent,
    DetailCarComponent,
    EditCarComponent,
    ListCarComponent,
    HomeComponent,
    NavbarComponent,
    DealerComponent,
    CarComponent,
    MakeComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
