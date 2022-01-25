declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
const ROUTES: RouteInfo[] = [
  {
    path: '/manage/admin/profile',
    title: 'Thông tin cá nhân',
    icon: 'account_circle',
    class: '',
  },
  {
    path: '/manage/admin/partner',
    title: 'Quản lý đối tác',
    icon: 'people',
    class: '',
  },
  {
    path: '/manage/admin/store',
    title: 'Xác thực cửa hàng',
    icon: 'verified_user',
    class: '',
  },
  {
    path: '/manage/admin/password',
    title: 'Thay đổi mật khẩu',
    icon: 'key',
    class: '',
  },
];

export { ROUTES };
