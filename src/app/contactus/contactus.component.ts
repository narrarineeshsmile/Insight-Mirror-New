import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder, public toastService: ToastrService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      institutename: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      institutionsize: ['', Validators.required],
    });

  }
  get f() {
    return this.contactForm.controls
  }

  submit() {
    if (this.contactForm.valid) {
      const contact = this.contactForm.value;
      console.log(contact);

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xrgoodgn',
        { Name: contact.name, Email: contact.email, Phone: contact.mobile, Institutionname: contact.institutionname, Institutionsize: contact.institutionsize },
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
