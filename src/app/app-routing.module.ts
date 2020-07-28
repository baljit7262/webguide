import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './layout/master/master.component';
export const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/dashboard/_module").then((m) => m.DashboardModule),
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
    path: "report",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/report/_module").then((m) => m.ReportModule),
  },
  {
    path: "notification",
    component: MasterComponent,
    loadChildren: () =>
      import("./components/notification/_module").then((m) => m.NotifModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }