import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // snapshot handles router navigation cases where we haven't accessed this component before
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };
    // subscribe is necessary to update the data in this component for the router navigation case where we have accessed this component before
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      }
    );
  }

  ngOnDestroy() {
    // unecessary to have this on routes subscriptions as Angular does this in the background, but need on custom observables
    this.paramsSubscription.unsubscribe();
  }
}
