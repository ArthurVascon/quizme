//#region Imports
import { Component, OnInit, Input } from '@angular/core';
import { CommentProxy } from 'src/app/models/proxies/comment.proxy';
//#endregion

@Component({
  selector: 'quizme-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent{

  //#region Constructor Padrão
  constructor() { }
  //#endregion
  
  //#region Inputs
  @Input()
   public content: CommentProxy;  //= {
    // id: 1,
    // message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et nisi dapibus, mollis enim eget, egestas nibh. Vivamus scelerisque lacinia tellus sed elementum. Aenean maximus massa a maximus fermentum. Quisque id mattis dui. Vestibulum quis mollis orci. Sed quis augue interdum, elementum lacus id, accumsan lacus. Nullam porta, nulla non sollicitudin auctor, ex nibh varius mauris, quis elementum odio purus sed nibh. Sed et lectus lorem',
    // userId: 2,
    // createdAt: new Date().toISOString(),
    // userName: {
    //   id: 2,
    //   name: 'Professor Teste',
    //   email: 'testedoteste@teste.com',
    //   schoolName: 'Escola Teste Nelsenson',
    //   tipo: 1,
    //   comments: [],
    // }

  // }
  //#endregion

}
