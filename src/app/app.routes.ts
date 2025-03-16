import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './UI/Dashboard/dashboard/dashboard.component';
import { DesignerComponent } from './UI/Designer/designer/designer.component';
import { DisplayComponent } from './UI/Display/display/display.component';
import { DisplayManagerComponent } from './UI/DisplayManager/display-manager/display-manager.component';
import { PreferencesComponent } from './UI/Preferences/preferences/preferences.component';
import { SketcherComponent } from './UI/Sketcher/sketcher/sketcher.component';


export const routes: Routes = [
  {"path": "", component: DashboardComponent},
  {"path": "designer", component:DesignerComponent},
  {"path": "display/:id", component:DisplayComponent},
  {"path": "display-manager/:id", component:DisplayManagerComponent},
  {"path": "preferences", component:PreferencesComponent},
  {"path": "sketcher", component:SketcherComponent},
];
