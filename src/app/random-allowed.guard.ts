import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RandomAllowedGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const allowed = (Math.random() < 0.5);
    console.log('Allowed? ' + allowed);

    if (!allowed) {
      this.router.navigate(['/access-denied']);
    }

    return allowed;
  }
}
