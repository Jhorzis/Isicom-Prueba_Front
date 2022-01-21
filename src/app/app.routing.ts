import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar Componentes
import { ProdGenComponent } from "./prod-gen/prod-gen.component"; 

const appRoutes: Routes = [
    {path: '', component: ProdGenComponent},
    {path: 'Prod-Generico', component: ProdGenComponent},
    {path: '**', component: ProdGenComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);