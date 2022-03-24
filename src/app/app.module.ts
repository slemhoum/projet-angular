import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarChefServiceComponent } from './components/top-nav-bar-chef-service/top-nav-bar-chef-service.component';

import { FooterComponent } from './components/footer/footer.component';
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
import { NavbarComponent } from './componentsChefProjet/navbar/navbar.component';
import { HomeChefProjetComponent } from './componentsChefProjet/home-chef-projet/home-chef-projet.component';
import { ModifierprojetsComponent } from './componentsChefProjet/modifierprojets/modifierprojets.component';
import { DetailprojetsComponent } from './componentsChefProjet/detailprojets/detailprojets.component';
import { AjouterPhaseComponent } from './componentsChefProjet/ajouter-phase/ajouter-phase.component';
import { ModifierPhaseComponent } from './componentsChefProjet/modifier-phase/modifier-phase.component';
import { Projet1Component } from './componentsChefProjet/projet1/projet1.component';
import { AjouterMembre1Component } from './componentsChefProjet/ajouter-membre1/ajouter-membre1.component';
import { AccComponent } from './componentsMey/acc/acc.component';

import { ChefServiceComponent } from './componentsMey/chef-service/chef-service.component';

import { DemandeAccComponent } from './componentsMey/demande-acc/demande-acc.component';
import { DetailSComponent } from './componentsMey/detail-s/detail-s.component';
import { MdfAccComponent } from './componentsMey/mdf-acc/mdf-acc.component';
import { MdfChefSComponent } from './componentsMey/mdf-chef-s/mdf-chef-s.component';
import { ProjetAdminComponent } from './componentsMey/projet-admin/projet-admin.component';
import { ServicesComponent } from './componentsMey/services/services.component';
import { Client1Component } from './componentsMey/client1/client1.component';
import { NavbarAccComponent } from './componentsMey/navbar-acc/navbar-acc.component';
import { Navbar1Component } from './componentsMey/navbar1/navbar1.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarChefServiceComponent,

    FooterComponent,
    HomeChefServiceComponent,
    ListeDemandesComponent,
    AjoutProjetComponent,
    ListeChefProjetsComponent,
    AjouterChefProjetComponent,
    ModifierChefProjetComponent,
    ListeMembreComponent,
    AjouterMembreComponent,
    ProjetsComponent,
    ModifierMembreComponent,
    ModifierProjetComponent,
    DetailProjetComponent,
    NavbarComponent,
    HomeChefProjetComponent,
    ModifierprojetsComponent,
    DetailprojetsComponent,
    AjouterPhaseComponent,
    ModifierPhaseComponent,
    Projet1Component,
    AjouterMembre1Component,
    AccComponent,

    ChefServiceComponent,

    DemandeAccComponent,
    DetailSComponent,
    MdfAccComponent,
    MdfChefSComponent,
    ProjetAdminComponent,
    ServicesComponent,
    Client1Component,
    NavbarAccComponent,
    Navbar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
