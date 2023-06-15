import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  //        Değişecek değer   parametre            Geriye dönecek değer
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (p: Product) =>
            p.productName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
    //filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value
    //eğer filter text var ise(?) value yi filtrele(product türündeki p ye göre) p.productname i küçük harfe dönüştür(toLocaleLowerCase())...
    //...sonra productname nin içinde filtertext var mı diye kontrol et(indexOf(filterText))
    //(!==-1) -1 den farklı ise var demektir. Yani varsa onları array yap ve döndür
  }
}

//map, filter.
