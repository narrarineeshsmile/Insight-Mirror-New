import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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
