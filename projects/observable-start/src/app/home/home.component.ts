import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalSub: Subscription;

  constructor() { }

  ngOnInit() {
    // this.intervalSub = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObs = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if (count === 2){
          observer.complete();
        }
        if (count > 3){
          observer.error(new Error('Max exceeded'));
        }
      }, 1000);
    });

    this.intervalSub = customIntervalObs.pipe(filter(data =>{
      return data > 0;
    }), map( (data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Complete');
    });
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

}
