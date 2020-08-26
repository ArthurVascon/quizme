//#region imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
//#endregion
const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
        { path: '', redirectTo: 'my-profile',pathMatch: 'full' },
        { path: 'my-profile', loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)},
        { path: 'add-question', loadChildren: () => import('./add-question/add-question.module').then(m => m.AddQuestionPageModule)},
        { path: 'all-questions', loadChildren: () => import('./all-questions/all-questions.module').then( m => m.AllQuestionsPageModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
