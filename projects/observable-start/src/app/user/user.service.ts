import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService{
  // activated = new EventEmitter<boolean>();

  activated = new Subject<boolean>();
}
