import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import postJson from '../assets/data.json';
interface post {
  id: number;
  question: string;
  ans: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'machine-task';
  questions: post[] = postJson;
  eligibilityForm: FormGroup;
 
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    console.log(this.questions);

    this.eligibilityForm = this.fb.group({
      'radio': new FormControl(''),
      'checkbox': new FormControl(''),
      'textbox': new FormControl(''),
      'combobox': new FormControl(''),
    })

  }

  onRadioChange(sport) {
    console.log(sport);
  }

  save(){
    console.log(this.eligibilityForm.value);
  }

  checkbox(){
  }

}
