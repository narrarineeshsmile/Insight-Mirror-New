import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  date: string;
  blog: boolean;
  blogTitle: string
  constructor(private router: Router) {
    this.blogTitle = "Quisquam nesciunt ut consequatur."
  }

  ngOnInit(): void {
    this.date = Date.now().toString()
  }



  gotoBlogPost(index: string) {
    console.log("blog index is", index);
    this.router.navigate(['blog', index])
  }
}
