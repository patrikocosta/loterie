import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoterieRoutingModule } from './loterie-routing.module';
import { RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GameComponent } from './game/game.component';
import { WinComponent } from './win/win.component';
import { LoseComponent } from './lose/lose.component';

@NgModule({
  imports: [
    CommonModule,
    LoterieRoutingModule
  ],
  declarations: [WelcomeComponent, FormulaireComponent, GameComponent, WinComponent, LoseComponent],
  exports: [
    WelcomeComponent,
   [RouterModule]
  ]
})
export class LoterieModule { }
