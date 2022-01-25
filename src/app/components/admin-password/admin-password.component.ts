import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';

@Component({
  selector: 'app-admin-password',
  templateUrl: './admin-password.component.html',
  styleUrls: ['./admin-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminPasswordComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {};
}
