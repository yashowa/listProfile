import { Component, OnInit } from '@angular/core';
import { ListAdressService } from './list-adress.service';
import { FilterProfilePipe } from './filter-profile.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilterProfilePipe]
})


export class AppComponent implements OnInit {

  selectedProfile = false;

  constructor(private listAdressService: ListAdressService) { }
  title = 'app';
  filterText: any = { name: '' };
  listProfile: any[] = [];
  noProfile;
  /*getProfiles
    type:methode
    param: objet(le profil selctionné)
    role:recupere la liste des profils en json depuis un service souscrit ( ici listAdressService) le tout est attribué a la propriété
    listProfile
    retour:void
    auteur: josué
  */
  getProfiles() {
    var response = this.listAdressService.getList()
      .subscribe(profiles => this.listProfile = profiles["address-book"]);
    if (this.listProfile.length == 0) {
      this.noProfile == true;
    }

  }

  /*getDatas
    type:methode
    param: objet(le profil selctionné)
    role:selectionne un des profils de la liste recupereee en json et l'inject a l'attribut selectedProfile
    retour:void
    auteur: josué
  */
  getDatas(profile): void {
    this.selectedProfile = profile;
  }

  /*closeProfile
    type:methode
    param: aucun
    role:passe le profil selectionné a false ( ferme la div du profil selectionné)
    retour:array
    auteur: josué
  */
  closeProfile() {
    this.selectedProfile = false;

  }

  /*letter
    type:methode
    param: aucun
    role:genere un tableau contenant les letres de l'alphabet
    retour:array
    auteur: josué
  */
  letters() {
    return Array
      .apply(null, { length: 26 })
      .map((x, i) => String.fromCharCode(65 + i));
  }

  /*filterLetter
    type:methode
    param: string(la lettre sur la quelle on a cliqué)
    role:permet de filter les profils selon la lettre sur laquelle on a cliqué en changeant la valeur de la propriete name  du filtre
    retour:void (aucun)
    auteur: josué
  */
  filterLetter(letter): void {
    this.filterText = { name: letter };
    var filter = new FilterProfilePipe();
    var newList = filter.transform(this.listProfile, letter);
    newList.length == 0 ? this.noProfile = true : this.noProfile = false;
  }
    /*isEmpty
    type:methode
    param: string(contenu rentré dans l'input de recherche)
    role: verifie s'il y'a  des profils affichés ou non
    retour:void (aucun)
    auteur: josué
  */
  isEmpty(text) {
    if (text == "") {
      this.noProfile = false
    } else {
      this.filterLetter(text)
    }
  }

  ngOnInit() {
    this.getProfiles();

  }
}
