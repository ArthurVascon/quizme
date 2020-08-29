import { NgModule } from '@angular/core';
import { CommentItemComponent } from './comment-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ CommentItemComponent ],
    exports: [CommentItemComponent],
})
export class CommentItemModule { }