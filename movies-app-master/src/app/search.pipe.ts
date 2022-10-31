import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(moviesArray: any, searchWord: any): any[] {
    if (searchWord == undefined || searchWord == '') {
      return moviesArray;
    }

    return moviesArray.filter((ele: any) => { return ele.title.toLowerCase().includes(searchWord.toLowerCase()) });


  }

}