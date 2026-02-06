import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'basic-form', loadComponent: () => import('./patterns/basic-form/basic-form').then(m => m.BasicForm) },
    { path: 'nested-forms', loadComponent: () => import('./patterns/nested-forms/nested-forms').then(m => m.NestedForms) },
    { path: 'dynamic-arrays', loadComponent: () => import('./patterns/dynamic-forms/dynamic-forms').then(m => m.DynamicForms) },
    { path: 'async-validation', loadComponent: () => import('./patterns/async-validation/async-validation').then(m => m.AsyncValidation) },
];
