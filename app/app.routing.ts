import { Routes, RouterModule } from '@angular/router';

import { SondagesComponent} from './sondages/sondages.component';
import { SondageAjouterComponent} from './sondage-ajouter/sondage-ajouter.component';

const appRoutes :  Routes = [
    { path: '', redirectTo: '/sondages', pathMatch: 'full' },
    { path: 'sondages', component: SondagesComponent },
    { path: 'sondages-ajouter', component: SondageAjouterComponent }
];

//export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes , { useHash: true });