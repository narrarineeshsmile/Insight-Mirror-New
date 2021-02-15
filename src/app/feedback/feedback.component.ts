import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder, public toastService: ToastrService) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });

  }
  get f() {
    return this.feedbackForm.controls
  }

  submit() {
    if (this.feedbackForm.valid) {
      const contact = this.feedbackForm.value;
      console.log(contact);

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xrgoodgn',
        { Name: contact.name, Email: contact.email, Message: contact.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
      this.toastService.success('Request submitted', 'Sucessfully!');
      this.router.navigate(['/home']);
    }
    else {
      this.toastService.warning('Request failed', 'Check all fields')
    }

  }
}
