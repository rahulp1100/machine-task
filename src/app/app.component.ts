import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  testForm: FormGroup;
  submitted = false;
 
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    console.log(this.questions);

    this.testForm = this.fb.group({
      'radio': new FormControl(''),
      'checkbox': new FormControl(''),
      'textbox': new FormControl('',[Validators.required]),
      'combobox': new FormControl(''),
    })

  }
  get f(){   
    return this.testForm.controls;  
  }

  save(){
    this.submitted = true;
    if (this.testForm.invalid) {
      return;
    }
    console.log(this.testForm.value)
 

}
}
