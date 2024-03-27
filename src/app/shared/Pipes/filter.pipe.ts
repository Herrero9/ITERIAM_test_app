import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../Models/models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Photo[], text: string, id: number): any {
    let filteredImages = [];
    filteredImages = value.filter(img => img.text.toLowerCase().includes(text.toLowerCase()));
    filteredImages = filteredImages.filter(img => img.id === id);
    console.log(filteredImages);
    return filteredImages;
  }

}
