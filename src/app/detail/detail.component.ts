import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  blog: any = [];
  constructor(private productSevice: ProductService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.params['id'];
    this.productSevice.find(id).subscribe((data) => {
      this.blog = data;
    })
    this.productSevice.find2(id).subscribe((data) => {
      this.blog = data;
    })
    this.productSevice.find3(id).subscribe((data) => {
      this.blog = data;
    })
  }

}
