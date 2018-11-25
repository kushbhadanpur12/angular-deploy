import { Component, OnInit } from '@angular/core';

declare var $:any;
declare var swal:any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  $('.block2-btn-addwishlist').each(function(){
      var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
      $(this).on('click', function(){
        swal(nameProduct, "is added to wishlist !", "success");
      });
    });

    

  }

}
