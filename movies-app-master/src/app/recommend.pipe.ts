import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recommend'
})
export class RecommendPipe implements PipeTransform {

  transform(str:string, endPoint:string): string {
    return 'recommend ' + str + endPoint;
  }

}


