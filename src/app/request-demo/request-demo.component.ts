import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css']
})
export class RequestDemoComponent implements OnInit {
  requestForm: FormGroup;
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder, public toastService: ToastrService) { }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      institutename: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      institutionsize: ['', Validators.required],
      message: ['', [Validators.required]]
    });

  }
  get f() {
    return this.requestForm.controls
  }

  submit() {
    if (this.requestForm.valid) {
      const contact = this.requestForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xrgoodgn',
        { Name: contact.name, Email: contact.email, Phone: contact.mobile, Institutionname: contact.institutionname, Institutionsize: contact.institutionsize, Designation: contact.designation, Message: contact.message },
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
