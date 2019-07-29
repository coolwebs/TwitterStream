import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exactSearch'
})
export class ExactSearchPipe implements PipeTransform {

    transform(aliases: any, hashtagsSearchInput: any): any {
        // check if search term is undefined
        if (hashtagsSearchInput === undefined) return aliases;
        // return updated array
        return aliases.filter(function(alias){
            return alias.local_part.includes(hashtagsSearchInput) || alias.domain.includes(hashtagsSearchInput);
        });
    }

}