import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NguoiDung, Store } from 'src/app/interfaces/interfaces';
import { CustomerService } from 'src/app/services/customer.service';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/share/auth/auth.service';
import { StoreProfileDiaglog } from '../store-profile/store-profile.component';

@Component({
  selector: 'app-admin-store',
  templateUrl: './admin-store.component.html',
  styleUrls: ['./admin-store.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminStoreComponent implements OnInit {
  currentUser: any;
  customerID: any;
  listStore: Store[] = [];
  store: Store = {
    id: '',
    chuCuaHang: '',
    diaChi: '',
    giayChungNhanAnToan: '',
    giayPhepKinhDoanh: '',
    maSoThue: '',
    tenCuaHang: '',
    trangThai: 0,
    doUyTin: 0,
    anhDaiDien: '',
  };

  owner: NguoiDung = {
    _id: '',
    cmnd: '',
    gioiTinh: '',
    hinhAnh: '',
    hinhAnhCMNDMatSau: '',
    hinhAnhCMNDMatTruoc: '',
    hoTen: '',
    matKhau: '',
    ngaySinh: '',
    sdt: '',
    doUyTin: 0,
    email: '',
    diaChi: '',
    loaiND: 2,
  };

  constructor(
    private auth: AuthService,
    private storeService: StoreService,
    private cusService: CustomerService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.currentUser = this.auth.getUser();
    this.customerID = this.currentUser.id;
    this.getListStore();
  }

  getListStore() {
    this.storeService.getAllStore().subscribe((data) => {
      this.listStore = data.filter(value => value.trangThai == 0);
      console.log(data);
    });
  }

  verifyStore(store: Store) {
    this.store = store;
    this.store.trangThai = 1;
    this.storeService.uploadStore(this.store).subscribe((data) => {
      this.store = data;
    });
    this.cusService.updateLoaiNDCus(this.store.chuCuaHang, this.owner).subscribe((data) =>{
      console.log(data);
    })
  }
  checkStore(store: Store) {
    this.store = store;
    const dialogRef = this.dialog.open(StoreProfileDiaglog);
    let instance = dialogRef.componentInstance;
    instance.store = this.store;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
