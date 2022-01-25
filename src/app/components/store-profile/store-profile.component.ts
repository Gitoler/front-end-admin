import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'store-profile-dialog-content',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.scss'],
})
export class StoreProfileDiaglog implements OnInit {
  @Input() store: any;
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}
}
