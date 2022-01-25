import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/share/auth/auth.service';

@Component({
  selector: 'app-admin-partner',
  templateUrl: './admin-partner.component.html',
  styleUrls: ['./admin-partner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminPartnerComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {};
}
