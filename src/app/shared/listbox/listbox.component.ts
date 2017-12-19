import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent implements OnInit {
  selectedIndex: any;

  @Input()
  items: any[] = [];

  @Output()
  editItemClick = new EventEmitter();

  @Output()
  removeItemClick = new EventEmitter();

  @Input()
  removeEnabled = false;

  @Input()
  editEnabled = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSelect(index) {
    if (this.editEnabled) {
      this.selectedIndex = index;
      this.editItemClick.emit(index);
    }
  }

  removeItem(index) {
    if (this.removeEnabled) {
      this.removeItemClick.emit(index);
    }
  }

  // https://stackoverflow.com/questions/34518235/multiple-classes-in-ngclass
  setClasses(item, i) {
    return {
      'size-L': item.changeCount <= 1,
      'size-XL': this.isBetween(2, item.changeCount, 6),
      'size-XXL': item.changeCount > 6,
      'selectedItem': this.selectedIndex === i,
    };
  }

  private isBetween(lowerBound: number, item: any, upperBound: number) {
    return item >= lowerBound && item <= upperBound;
  }
}
