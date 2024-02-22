import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
  <div class="search">
  <input class="search__input" placeholder="City..." [formControl]= "inputSearch"/>
</div>`,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputSearch = new FormControl('');

  @Output() submitted = new EventEmitter<string>();

  ngOnInit(): void {
    this.onChange();
  }

  private onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((search: string | null) => search ? search.trim() : ''),
        debounceTime(850),
        distinctUntilChanged(),
        filter((search: string) => search !== ''),
        tap((search: string) => this.submitted.emit(search))
      )
      .subscribe();
  }
}
