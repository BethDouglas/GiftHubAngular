import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-stripe-create',
  templateUrl: 'stripe-form.component.html',
  styleUrls: ['stripe-form.component.css']
})
export class StripeFormComponent {

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000
    });

  }

}