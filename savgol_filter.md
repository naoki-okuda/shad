```fortran
program test_savgol_filter
  use savgol_mod   ! savgol と savgol_filter が含まれるモジュール（または直接読み込み）
  implicit none
  integer, parameter :: n = 100
  real(8) :: x(n), y(n), dx
  integer :: i, nl, nr, m, ld, flag

  ! データ作成
  dx = 0.1d0
  do i = 1, n
    x(i) = (i - 1) * dx
    y(i) = sin(x(i))  ! 入力データ
  end do

  ! フィルター設定（例: 5点・2次多項式・1階微分）
  nl = 2   ! 左に2点
  nr = 2   ! 右に2点（合計5点）
  m  = 2   ! 2次多項式
  ld = 1   ! 1階微分

  ! 微分実行：yに上書きされる
  call savgol_filter(nl, nr, ld, m, n, y, flag)
  if (flag /= 0) then
    print *, "Error: savgol_filter failed"
    stop
  end if

  ! dx で割って微分に変換
  do i = 1, n
    y(i) = y(i) / dx
  end do

  ! 出力して確認
  do i = 1, n
    print *, x(i), y(i), cos(x(i))  ! y = sin(x) の微分は cos(x)
  end do

end program test_savgol_filter
```


```fortran
!!!!!!!!!!!!!!!!!!!! SavGolMod.f90
module savgol_mod
  implicit none
  contains
  include '/home/okuda-n/tgcd/src/savgol_filter.f90'
  include '/home/okuda-n/tgcd/src/savgol.f90'
  include '/home/okuda-n/tgcd/src/ludcmp.f90'
  include '/home/okuda-n/tgcd/src/lubksb.f90'

end module savgol_mod

```