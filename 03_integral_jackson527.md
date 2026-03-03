# とある積分

パラメータによらず収束する積分。
Jackson p 527 で荷電粒子の阻止能計算中に登場。ローレンツ型の分布の積分に対応する。


```sh
# gnuplot script
# /Users/naokiokuda/gnuplot/asobi/Jack527.sh
N = 100000
set samples N
f(x,a) = x**2/( (a**2-x**2)**2 + x**2  )
xmax = 1000.0
plot[0:1000] f(x,1000.0)
plot[0:xmax] f(x,500.0)*xmax/N smooth cumulative, pi/2

# 累積積分のプロット
set xrange [0:xmax]
plot '+' u (x=xmax*$0/N): (f(x,500.0)*xmax/N) smooth cumulative w l,\
     pi/2

# set xrange [0:2]
# D(x,a) = (a*a-x*x)**2  + x*x
# plot for [i=1:10] D(x,i*0.1) 

```


```sh 
# Bessel functions (after Bronstein 2001, eq. 9.54a)
# besj0(x) and besj1(x) are build-in functions
besj2(x) = 2*1/x * besj1(x) - besj0(x)
besj3(x) = 2*2/x * besj2(x) - besj1(x)
besj4(x) = 2*3/x * besj3(x) - besj2(x)
besj5(x) = 2*4/x * besj4(x) - besj3(x)
besj6(x) = 2*5/x * besj5(x) - besj4(x)
```




4. if と reread による疑似アニメーション
expr の項でループを使っておられましたが、もし「時間発展するデータファイルを連続で見たい」という場合、reread を使うとターミナル上で動画のように再生できます。

コード スニペット
# anim.gp
plot sprintf('data_%05d.dat', i) u 1:2 w l title sprintf("step: %d", i)
i = i + 1
pause 0.1
if (i < 100) reread
使い方: 初期値 i=0 を与えて load 'anim.gp'。

5. set object で領域を強調する
実験データと理論値が一致する領域をグレーで塗ったり、特定の物理的なカットオフを示す際に便利です。

コード スニペット
# x=0.5から1.0の範囲を薄く塗る
set object 1 rect from 0.5, graph 0 to 1.0, graph 1 fc rgb "gray" fs transparent solid 0.5
plot 'data.dat' w lp