import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  private inactiveToActiveCount = 0;
  private activeToInactiveCount = 0;

  incrementInactiveToActive() {
    this.activeToInactiveCount++;
    console.log('Active2Inactive ' + this.activeToInactiveCount);
  }

  incrementActiveToInactive() {
    this.inactiveToActiveCount++;
    console.log('Inactive2Active ' + this.inactiveToActiveCount);
  }
}
