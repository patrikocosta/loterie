
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GameComponent } from './game/game.component';
import { WinComponent } from './win/win.component';
import { LoseComponent } from './lose/lose.component';


export const routesLoterie: Routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    }, {
        path: 'formulaire',
        component: FormulaireComponent
    }, {
        path: 'game',
        component: GameComponent
    }, {
        path: 'win',
        component: WinComponent
    }, {
        path: 'lose',
        component: LoseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routesLoterie)],
    exports: [RouterModule]
})
export class LoterieRoutingModule { }
