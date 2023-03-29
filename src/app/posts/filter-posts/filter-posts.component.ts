import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/interfaces/post';

const fb = new FormBuilder().nonNullable;

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss'],
})
export class FilterPostsComponent {
  @Output() filterChange = new EventEmitter<string>();
  filterForm = fb.group(
    {
      filter: [''],
    },
    { updateOn: 'blur' },
  );

  submit() {
    if (this.filterForm.valid) {
      this.filterChange.emit(this.filterForm.value.filter);
    }
  }


}



