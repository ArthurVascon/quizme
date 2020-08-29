//#region Imports
import { Component, OnInit } from '@angular/core';
import { FooterState } from '../../models/enums/footer-state';
import { FooterService } from 'src/app/services/footer/footer.service';
import { Router } from '@angular/router';
//#endregion
@Component({
  selector: 'quizme-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  //#region Constructor
  constructor(
    private readonly footerService:FooterService,
  ) {
    this.footerService.getCurrentSelectedFooter$().subscribe(footerState => {
      this.currentSelectedFooter = footerState;
    })
  }
//#endregion
  ngOnInit() {
  }
 
  /**
   * Página selecionada no footer atualmente
   */

  //#region Public Properties 
  public currentSelectedFooter: FooterState = FooterState.MY_PROFILE;

  /** Estados possíveis para o meu footer */
  public footerState: typeof FooterState = FooterState;
  //#endregion
}
