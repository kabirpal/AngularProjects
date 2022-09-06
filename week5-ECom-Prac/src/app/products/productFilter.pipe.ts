import { Pipe, PipeTransform } from "@angular/core";
import { Products } from "./booksGet-module";


@Pipe({
    name:'productFilter'
})
export class ProductsPipe implements PipeTransform{
    transform(products:Products[], value : string){
        
    }
}