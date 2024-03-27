import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../Models/models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Photo[], args?: any): any {
    let filteredImages = [];
    filteredImages = value.filter(img => img.text === args);
    return filteredImages;
  }

}
