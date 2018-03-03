import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProfile'
})
export class FilterProfilePipe implements PipeTransform {
  transform(listProfile: any[], filtre: string): any {
    // console.log('filtre', filtre)
    // console.log('liste', listProfile)
    if (!filtre) {
      return listProfile
    };
    if (!listProfile) { return [] }
    var nbChar = filtre.length ;
    if (nbChar < 0){
      nbChar=0;
    }
    //    return(listProfile.filter(res => res.name.toLowerCase().charAt(0) == filtre.toLowerCase().charAt(0)));
     return(listProfile.filter(res => res.name.toLowerCase().substr(0,nbChar) == filtre.toLowerCase()))
  }
}
