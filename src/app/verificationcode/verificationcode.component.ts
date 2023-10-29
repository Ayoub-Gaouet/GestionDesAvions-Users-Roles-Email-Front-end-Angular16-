import { Component } from '@angular/core';
import {AvionService} from "../services/avion.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-verificationcode',
  templateUrl: './verificationcode.component.html',
  styleUrls: ['./verificationcode.component.css']
})
export class VerificationcodeComponent {
  verificationCode!: string; // Using ! to indicate it will be initialized later
  username!: string;
  constructor(private avionService: AvionService, private  routea : ActivatedRoute, private router: Router) {
    this.username=this.routea.snapshot.paramMap.get('username')!;
    console.log(this.routea.snapshot.paramMap.get('username'))
  }

  activateUser(username: string, verificationCode: string) {
    this.avionService.activateUser(username, verificationCode).subscribe(
      (user) => {
        console.log('User activated successfully:', user);
        this.router.navigate(['/login']);
        // Handle success
      },
      (error) => {
        console.error('User activation failed:', error);
        // Handle error
      }
    );
  }
}
