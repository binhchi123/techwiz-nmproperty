import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  list: any = [];
  list2: any;
  list3: any;
  constructor(private productSoVit: ProductService, private wowservice: NgwWowService) { }

  ngOnInit(): void {
    this.productSoVit.getAll().subscribe((data) => {
      this.list = data;
    })
    this.productSoVit.getAll2().subscribe((data) => {
      this.list2 = data;
    })
    this.productSoVit.getAll3().subscribe((data) => {
      this.list3 = data;
    })
    this.wowservice.init();
  }

}
