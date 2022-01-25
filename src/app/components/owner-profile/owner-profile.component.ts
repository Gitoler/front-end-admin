import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'owner-profile-dialog-content',
  templateUrl: './owner-profile.component.html',
})
export class OwnerProfileDiaglog implements OnInit {
  @Input() store: any;
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}
}
