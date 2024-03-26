import { Injectable } from '@angular/core';
import { Photo } from './Models/models';


@Injectable()
export class SharedService {

    private imgArray: Photo[] = [];

    constructor() { }

    populateArray(){
        for(let i = 1; i <= 4000; i++){
            this.imgArray.push({
                id: i,
                photo: `https://picsum.photos/id/${i}/500/500.jpg`,
                text: "random_lorem_ipsum_text"
            })
        }
        // console.log(this.imgArray);
    }

    generateImgJson(){
        if(this.imgArray.length){
            return JSON.stringify(this.imgArray);
        }else{
            return 'error';
        }
        
    }
}
