gnuplotで二軸の単位変換

```sh
n_c = pi/2.8179403205*1.0e27 #[m^-3]
keV = 1.602176634e-16 #[J]
PP = n_c*keV /1.0e15 #n_c keV [Peta Pascal]

set yrange [0:350000]
set y2range [PPa(0):PPa(350000)]
set ylabel '[n_c keV]'
set y2label '[PPa]'

# y1 [n_c keV] -> y2 [PPa]
PPa(x) = x * PP
# y2 [PPa] -> y1 [n_c keV] (逆関数)
y1(x) = x / PP

#set grid ytics y2tics  # 両方の軸にグリッドを引くと分かりやすい
set ytics nomirror
set y2tics nomirror
set y2tics format "%.1f"  # 表示桁の調整。
set link y2 via PPa(y) inverse y1(y) # 軸の対応関係。逆関数も必要とするので注意
```

