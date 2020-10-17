import {Injectable} from '@angular/core';

// Angular recommends always adding @Injectable to service even though it's not required as of version 10, but may be in future versions
@Injectable({providedIn: 'root'})
export class LoggingService {
  logStatusChange(status: string): void{
    console.log('A server status changed, new status: ' + status);
  }
}
