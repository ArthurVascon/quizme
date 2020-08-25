import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FooterState } from 'src/app/models/enums/footer-state';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(
    private readonly router: Router,
  ) { 
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      if(currentUrl.startsWith('/main/add-coments'))
        return void this.selectedFooterSubject.next(FooterState.ADD_QUESTION);
      
      if(currentUrl.startsWith('/main/my-profile'))
        return void this.selectedFooterSubject.next(FooterState.MY_PROFILE);
      
      if(currentUrl.startsWith('/main/all-questions'))
        return void this.selectedFooterSubject.next(FooterState.ALL_QUESTIONS);
      
    });
  }

  //#region Private Properties
  
  /**Trigger que diz qual o footer atualmente selecionado */
  private readonly selectedFooterSubject: BehaviorSubject<FooterState> = new BehaviorSubject<FooterState>(FooterState.MY_PROFILE);
  //#endregion

  //#region Public Methods 

  /**Método que retorna a referência do Observable ao evento que diz qual é a página selecionada
   * Obs.: Observable recebem $ no final para indicar que é um Observable.
   */
  public getCurrentSelectedFooter$(): Observable<FooterState>{
    return this.selectedFooterSubject.asObservable();
  }
  //#endregion
}

