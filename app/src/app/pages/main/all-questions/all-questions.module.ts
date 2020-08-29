import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllQuestionsPageRoutingModule } from './all-questions-routing.module';

import { AllQuestionsPage } from './all-questions.page';
import { CommentItemModule } from 'src/app/components/comment-item/comment-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllQuestionsPageRoutingModule,
    CommentItemModule
  ],
  declarations: [AllQuestionsPage]
})
export class AllQuestionsPageModule {}
