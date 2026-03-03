# 2025 12 22 

### 二次元の拡散計算

- まず現時点のソースを保存 -> OneDim_20251222
#### /Users/naokiokuda/Documents/Stopping/CN_ICF_01/
- 境界の温度をy軸方向全体で一様に上げる。時間の2/5乗。
- z= 1, glinsky 

#### /Users/naokiokuda/Documents/Stopping/CN_ICF_02/
- ガウシアンの重みで、境界の温度を設定し、それよりも温度が低ければ、上げる。という設定。時間の2/5乗で増加。
- $x\in [40,120], y \in [-40,40]$
- z= 1, glinsky 


# 2025 12 23

#### /Users/naokiokuda/Documents/Stopping/CN_ICF_03/
- ICF02から境界の温度を2倍
- ガウシアンの重みで、境界の温度を設定し、それよりも温度が低ければ、上げる。という設定。時間の2/5乗で増加。
- $x\in [40,120], y \in [-40,40]$
- z= 1, glinsky 



# 2025 12 24

#### /home/okuda-n/data7/RndWlk/TS00/analyze/EneDen   :lpi-head

- TS00 
- analyze をquasi1D_Gから移植して、スクリプトを残し、データ消去。


# 2026 01 01
散漫とするのは悪い癖だ。照準を絞るべきだろう。

 /Users/naokiokuda/Documents/Stopping/CN_ICF_04/
二次元円筒拡散の密度勾配下の伝播0101（ICF03を受けて。）
密度勾配の元の伝播が正しく解けているのかについて不安がある。
- 温度分布の形状が不思議な形になっていた。
- 低密度側に向かって伝播は積極的に進むイメージだった。x=0境界の温度を均等に上げるケース(ICF01など)では、きちんと低密度側の伝播は早めに出ていたので、それは正しいと思った。


```
./cn_solver 
 /Users/naokiokuda/Documents/Stopping/CN_ICF_04/
 timestep                60000
 total_simulation_time   3000.0000000000000      T_L
 timestep                60000
 snap                  100
 mesht   5.0000000000000003E-002
 xstr   40.000000000000000      xend   120.00000000000000     
 Nx                  300 meshx  0.26666666666666666     
 ystr  -40.000000000000000      yend   40.000000000000000     
 Ny                  300 meshy  0.26666666666666666     
 boundary condition : test_anal_envelope 
```

- bcのwidth=25.0にした。03よりも広めに。



# 2026 01 02 
道具の熟練は過程であり結果ではない。


# 2026 01 03 
集中できないならば時間を区切ろう。
まずは20分から。

# 2026 01 04
音楽はスイッチになりうるので、積極的に使うべきだ。数値計算の解析は特に散漫としがちなので工夫が必要な気がしている。

# 2026 01 05
温度を変化させる境界に対して、エネルギーの逃げがないようにした。
inslation条件の追加。
/Users/naokiokuda/Documents/Stopping/CN_ICF_05/

```fortran
 timestep                60000
 total_simulation_time   3000.0000000000000      T_L
 timestep                60000
 snap                  100
 mesht   5.0000000000000003E-002
 xstr   40.000000000000000      xend   120.00000000000000     
 Nx                  300 meshx  0.26666666666666666     
 ystr  -40.000000000000000      yend   40.000000000000000     
 Ny                  300 meshy  0.26666666666666666     
 boundary condition : test_anal_envelope                                                             

    case("test_anal_envelope") ! --------------------------------------------------------------
       block
         real(8) :: width = 25.0d0
         real(8) :: sol, sol2, ww
         real(8) :: y1
         ww = width*width
         !sol = solution(-0.5d0*meshx,simulation_time+mesht,1.0d0,cnst_loglam,100.0d0,1.5d0)
         sol = 1.0d0*solution(-0.5d0*meshx,simulation_time+mesht,1.0d0,cnst_loglam,100.0d0,1.5d0)
         do iy = -1,Ny+2
            y1 = yvec(iy)
            sol2 = sol* exp(-y1*y1/ww)
            if (T(0, iy).lt. sol2) then
               T(0,    iy   ) =  sol2
            else if (  T(0, iy) .lt. T(1,iy)  ) then
               T(0, iy) = T(1, iy) ! insulation bd
            end if
         end do
         T(Nx+1, :   ) = T(Nx, :)
         T(:,    0   ) = T(: , 1)
         T(:,    Ny+1) = T(: , Ny)
         
       end block
```



# TS00
src-12 温度を10keVにして、エネルギーフラックスの計算。

# TS01
src-12 温度を1keVにして、エネルギーフラックスの計算。
下凸のテールがなくなっていないのが気になる。10keVと比較して、減速がさほど大きくないように見える。


# Eq08_e 

src-12ではbincok_sk_okd, が使われている。TS00, TS01の結果を受けて、きちんと熱緩和が計算されているかを確認する。Eq08のnqs, eq.inを丸ままコピー。




