import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pro: any;
  constructor(private productSevice: ProductService) { }


  ngOnInit(): void {
    this.productSevice.getAll4().subscribe((data) => {
      this.pro = data;
    })
  }

}
