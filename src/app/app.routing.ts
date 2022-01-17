import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar Componentes
import { ProductoGenericoComponent } from "./ProductoGenerico/ProductoGenerico.component";

const appRoutes: Routes = [
    {path: '', component: ProductoGenericoComponent},
    {path: 'ProductoGenerico', component: ProductoGenericoComponent},
    {path: '**', component: ProductoGenericoComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);