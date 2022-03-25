import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeChefServiceComponent } from './components/home-chef-service/home-chef-service.component';
import { ListeDemandesComponent } from './components/liste-demandes/liste-demandes.component';
import { AjoutProjetComponent } from './components/ajout-projet/ajout-projet.component';
import { ListeChefProjetsComponent } from './components/liste-chef-projets/liste-chef-projets.component';
import { AjouterChefProjetComponent } from './components/ajouter-chef-projet/ajouter-chef-projet.component';
import { ModifierChefProjetComponent } from './components/modifier-chef-projet/modifier-chef-projet.component';
import { ListeMembreComponent } from './components/liste-membre/liste-membre.component';
import { AjouterMembreComponent } from './components/ajouter-membre/ajouter-membre.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ModifierMembreComponent } from './components/modifier-membre/modifier-membre.component';
import { ModifierProjetComponent } from './components/modifier-projet/modifier-projet.component';
import { DetailProjetComponent } from './components/detail-projet/detail-projet.component';
import { HomeChefProjetComponent } from './componentsChefProjet/home-chef-projet/home-chef-projet.component';
import { Projet1Component } from './componentsChefProjet/projet1/projet1.component';
import { ModifierprojetsComponent } from './componentsChefProjet/modifierprojets/modifierprojets.component';
import { DetailprojetsComponent } from './componentsChefProjet/detailprojets/detailprojets.component';
import { AjouterMembre1Component } from './componentsChefProjet/ajouter-membre1/ajouter-membre1.component';
import { AjouterPhaseComponent } from './componentsChefProjet/ajouter-phase/ajouter-phase.component';
import { ModifierPhaseComponent } from './componentsChefProjet/modifier-phase/modifier-phase.component';
import { AccComponent } from './componentsMey/acc/acc.component';
import { ChefServiceComponent } from './componentsMey/chef-service/chef-service.component';
import { DemandeAccComponent } from './componentsMey/demande-acc/demande-acc.component';
import { DetailSComponent } from './componentsMey/detail-s/detail-s.component';
import { MdfAccComponent } from './componentsMey/mdf-acc/mdf-acc.component';
import { MdfChefSComponent } from './componentsMey/mdf-chef-s/mdf-chef-s.component';
import { ProjetAdminComponent } from './componentsMey/projet-admin/projet-admin.component';
import { ServicesComponent } from './componentsMey/services/services.component';
import { Client1Component } from './componentsMey/client1/client1.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './componentsMey/home-admin/home-admin.component';

const routes: Routes = [
  {path:"homeChefService",component:HomeChefServiceComponent},
  {path:"homeAdmin",component:HomeAdminComponent},
  {path:"demandes",component:ListeDemandesComponent},
  {path:"ajoutProjet",component: AjoutProjetComponent},
  {path:"listeChefProjets",component: ListeChefProjetsComponent },
  {path:"ajouterChefProjet",component:  AjouterChefProjetComponent },
  {path:"modifierChefProjet",component:  ModifierChefProjetComponent  },
  {path:"membres",component:  ListeMembreComponent   },
  {path:"ajouterMembre",component:  AjouterMembreComponent },
  {path:"projets",component:  ProjetsComponent },
  {path:"modifierMembre",component:   ModifierMembreComponent },
  {path:"modifierProjet",component:   ModifierProjetComponent },
  {path:"detailProjet",component:   DetailProjetComponent },
  {path:"homeChefProjet",component:  HomeChefProjetComponent  },
  {path:"projets1",component:  Projet1Component  },
  {path:"modifierProjet1",component:  ModifierprojetsComponent  },
  {path:"ajouterMembre1",component: AjouterMembre1Component  },
  {path:"detailProjet1",component:   DetailprojetsComponent },
  {path:"ajouterPhase",component:  AjouterPhaseComponent },
  {path:"modifierPhase",component:  ModifierPhaseComponent },
  {path:"login",component:  LoginComponent },

  {
    path: 'Acc',
    component: AccComponent
  },
  {
    path: 'Service',
    component: ServicesComponent
  },
  {
    path: 'DS',
    component: DetailSComponent
  },

  {
    path: 'chefS',
    component: ChefServiceComponent
  },
  {
    path: 'pr',
    component: ProjetAdminComponent
  },
  {
    path: 'mdfA',
    component: MdfAccComponent
  },
  {
    path: 'mdfC',
    component: MdfChefSComponent
  },
  {
    path: 'client',
    component: Client1Component
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
