
import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent implements AfterViewInit {

  @ViewChild('form') ngForm: NgForm | undefined

  public formValues = signal({
    title: '',
    content: ''
  })

  public ngAfterViewInit(): void {
    this.ngForm!.form.valueChanges.subscribe(value => {
      this.formValues.set(value)
      console.log(this.formValues)
    })
  }

  submit(e: Event) {
    e.preventDefault()
    console.log(this.ngForm!.form.valid, this.formValues())
  }
}
