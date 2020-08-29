//#region Imports
import { Component, OnInit, Input } from '@angular/core';
import { CommentProxy, getFakeCommentProxy } from "../../../models/proxies/comment.proxy";
//#endregion

@Component({
  selector: 'quizme-all-questions',
  templateUrl: './all-questions.page.html',
  styleUrls: ['./all-questions.page.scss'],
})
export class AllQuestionsPage implements OnInit {
 //#region Constructor Padrão
  constructor() { }
//#endregion
  ngOnInit() {
  }

  //#region Public Properties
  /** Todas as perguntas que eu já fiz */
  public listComment : CommentProxy[] = [getFakeCommentProxy(),getFakeCommentProxy()];
  //#endregion

  //#region Public Methods
  /**
   * Verifica se o index existe e faz uma varredura numa lista
   * atrás desse index, se existir, ele mantém a lista,
   * senão destrói geral e refaz ela.
   */
  public trackById(index: number, value: CommentProxy):number{
    return value.id;
  }
  //#endregion
}
