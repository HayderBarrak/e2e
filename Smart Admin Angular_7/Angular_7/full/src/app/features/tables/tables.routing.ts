import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [

  {
    path: 'normal',
    loadChildren: './normal-tables/normal-tables.module#NormalTablesModule',
    data: {pageTitle: 'Normal'}
  },

  {
    path: 'datatables',
    loadChildren: './datatables-case/datatables-case.module#DatatablesCaseModule',
    data: {pageTitle: 'Datatables',
    }
  },

  {
    path: 'ngx-datatable',
    loadChildren: './ngx-datatable/ngx-datatable-case.module#NgxDatatableCaseModule',
    data: {pageTitle: 'NGx Datatable'}
  },
  {
    path: 'machineconfig',
    loadChildren: './machineconfig/machineconfig.module#MachineconfigModule',
    data: {pageTitle: 'Machine config'}
  },
  {
    path: 'scriptconfig',
    loadChildren: './scriptconfig/scriptconfig.module#ScriptconfigModule',
    data: {pageTitle: 'Machine config'}
  },
  {
  path: 'confscript',
    loadChildren: './confscript/confscript.module#ConfscriptModule',
    data: {pageTitle: 'Configuration des scripts'}
  },
    {
        path: 'usermanag',
        loadChildren: './usermanag/usermanag.module#UsermanagModule',
        data: {pageTitle: 'Configuration des utilisateurs'}
    }
];


export const routing = RouterModule.forChild(routes)
