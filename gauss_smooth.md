```fortran
subroutine gaussian_smooth(x, y, n, sigma)
      implicit none
      integer, intent(in) :: n
      real(8), intent(in)  :: x(n)
      real(8), intent(out) :: y(n)
      real(8), intent(in)  :: sigma

      integer :: i, j, k, idx
      real(8) :: w_sum, weight
      real(8), allocatable :: w(:)

      ! カーネル半径 k = 3σ が一般的
      k = int(3.0d0 * sigma)
      allocate(w(-k:k))

      ! ---- ガウスカーネル生成 ----
      w_sum = 0.0d0
      do j = -k, k
         w(j) = exp( - (dble(j)**2) / (2.0d0*sigma*sigma) )
         w_sum = w_sum + w(j)
      end do
      ! 正規化
      w = w / w_sum

      ! ---- 畳込み ----
      do i = 1, n
         y(i) = 0.0d0
         do j = -k, k
            idx = i + j
            ! 境界処理: clamp（端の値を延長）
            if (idx < 1) idx = 1
            if (idx > n) idx = n
            y(i) = y(i) + x(idx) * w(j)
         end do
      end do

      deallocate(w)
    end subroutine gaussian_smooth
```