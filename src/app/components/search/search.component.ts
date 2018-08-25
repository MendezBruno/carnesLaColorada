import { Component, 
    Output, 
    EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('growPanel', [
        state('inactive', style({width: 0})),
        transition('void => *', [
            style({width: 0}),
            animate(350, style({width: '*'}))
        ])

    ])
]
})
export class SearchComponent {


    @Output()
    queryStringUpdated = new EventEmitter();

    queryString: string;

    isOpened: boolean;
    state = 'inactive';

    constructor() {
        this.isOpened = false;
    }

    toggleSearchBar(): void {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        this.isOpened = !this.isOpened;
        this.onChange('');
    }

    onChange(queryString) {
        this.queryStringUpdated.emit(queryString);
    }
}
