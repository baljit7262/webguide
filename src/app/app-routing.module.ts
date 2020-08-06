import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './layout/master/master.component';
export const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/sample/_module").then((m) => m.SampleModule),
  },
  {
    path: "login",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/sample/_module").then((m) => m.SampleModule),
  },
  {
    path: "dashboard",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/dashboard/_module").then((m) => m.DashboardModule),
  },
  {
    path: "listComponents",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/list/_module").then((m) => m.ListModule),
  },
  {
    path: "batch",
    component: MasterComponent,
    loadChildren: () =>
    import("./components/batch/_module").then((m) => m.BatchModule),
  },
  {
    path: "user",
    component: MasterComponent,
    loadChildren: () =>
    import("./components/user/_module").then((m) => m.UserModule),
  },
  {
    path: "order",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/order/_module").then((m) => m.OrderModule),
  },
  {
    path: "patients",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/patient/_module").then((m) => m.PatientModule),
  },
  {
    path: "report",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/report/_module").then((m) => m.ReportModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }