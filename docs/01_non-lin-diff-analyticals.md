# 非線形拡散方程式の解析解



## 円筒対称座標系におけるポイントソースからの拡散
---

　円筒対称な座標系での非線形熱拡散方程式、特にSpitzer-Harmを想定して、拡散係数が温度の5/2乗に比例する場合を考える。

- $c_v$ : 比熱。ここでは定積比熱を想定$c_v \rightarrow 1.5$。
- $T$ : 温度。$c_v T$で熱エネルギー密度。
- $F_r$ : 半径方向熱フラックス。
- $\kappa = \kappa_0 T^{5/2}$: 熱伝導率

$$
\begin{align}
    \mathbf{F}_r &= - \kappa \frac{\partial T}{\partial r} \mathbf{e}_r  \\
    &= - \kappa_0 T^{5/2} \frac{\partial T}{\partial r} \mathbf{e}_r \\
    n c_v \frac{\partial T}{\partial t} &= -\nabla \cdot\mathbf{F}_r \\
    &= \frac{1}{r}\frac{\partial}{\partial r} \left(r \kappa_0 T^{5/2} \frac{\partial T}{\partial r} \right)
\end{align}
$$

整理して、パラメータをAに押し付ける。

$$
\begin{align}
    \frac{\partial T}{\partial t} &= A \frac{1}{r} \frac{\partial }{\partial r}r \frac{\partial}{\partial r} T^{7/2}\\
    A &= \frac{ 2\kappa_0}{7n c_v} 
\end{align}
$$

この方程式の特別な解として以下の自己相似型の解がある。

$$
\begin{align}
    T(r,t) &= T_c(t) \left[1- \left( \frac{r}{r_f} \right)^2\right]^{2/5}  \,\,\, (r< r_f) \\
   r_f(t) &= B t^{1/7}\\
   T_c(t) &= Ct ^{-2/7}\\
    \frac{A C^{5/2}}{B^2} &= \frac{5}{7*7*2}
\end{align}
$$


ここで、t=0の定義はディラックデルタ的なソースに漸近する時刻である。
Aは物性値のようなものであり、初期に与えて自由に動かせない。一方、媒質の温度や高温領域の範囲は自由に決められる。
$t = t_0$における、温度を$T_c(t_0)=T_0$, その広がりを$r_f(t_0)=r_0$とする。
CとBをこれら物理量の組み合わせで書き直せば、$C=T_0 t_0^{2/7}$, $B = r_0 t_0 ^{-1/7}$。ABC間の束縛を書き直すと、

$$
     \frac{A C^{5/2}}{B^2} =\frac{AT_0^{5/2} t_0}{r_0^2} 
     = \frac{2}{7} \frac{D_0 t_0}{r_0^2} = \frac{5}{7*7*2}
$$

$$
  \frac{D_0 t_0}{r_0^2} = \frac{5}{7*4}
$$

$$
D_0 = \frac{\kappa_0 T_0^{5/2}}{ n c_v} 
$$

$D_0$は実効的な拡散係数。次元が長さ^2/時間であることを確認できる。初期に温度と半径を決めると、時刻0からあるエネルギーソースが落とされてどれくらい経過した状態かがわかる。


## 温度の空間積分は一定(エネルギー保存。原点にもソースはない。)

$$
    T(r,t) = T_c F^{2/5}\\
    F = 1-(r/r_f)^2
$$

$$
\begin{align*}
    \int_ 0 ^{r_f} T(r) 2\pi r dr &=  T_c \pi r_f^2 [-F]_{r=0}^{r=r_f} \\
    &= \pi r_f^2 T_c\\
    &= \pi r_0^2 T_0
\end{align*}
$$

エネルギーの線密度が保存していることに対応。言い換えると、解を特徴づけるパラメータは全エネルギーだけ。この表現で与えられるエネルギーの総量が同じ解は、時間発展で同じ解軌道に載っている。





## 表式が方程式の解である確認
--- 

$$
    T(r,t) = T_c F^{2/5}\\
    F = 1-(r/r_f)^2
$$

方程式右辺は、

$$
\begin{align*}
  A \frac{1}{r} \frac{\partial }{\partial r}r \frac{\partial}{\partial r} T^{7/2} 
  &=
  A T_c^{7/2}\frac{1}{r}\frac{\partial}{\partial r}r \frac{\partial}{\partial r} F^{7/5}\\
  &=
  A T_c^{7/2}\frac{\partial}{r \partial r} \frac{-7*2r^2}{5 r_f^2}F^{2/5}\\
  &= 
  AT_c^{7/2} \frac{-14}{5 r_f^2 r}[2r + r^2\frac{2}{5F}\frac{-2r}{r_f^2}]F^{2/5}\\
  &= 
  -\frac{28A T_c^{7/2}}{5r_f^2}[1 - \frac{2r^2}{5Fr_f^2}] F^{2/5}
\end{align*}
$$

方程式左辺は

$$
\begin{align*}
  \frac{\partial{T}}{\partial t} 
  &= \frac{dT_c}{dt}F^{2/5} + T_c \frac{2}{5F} F^{2/5} \frac{dF}{dr_f} \frac{dr_f}{dt}\\
  &=
  \frac{-2T_c}{7t}F^{2/5} + T_c \frac{2}{5F} F^{2/5}\frac{2r^2}{r_f^3} \frac{r_f}{7t}\\
  &=
    -\frac{2T_c}{7t} [1-\frac{2r^2}{5Fr_f^2}] F^{2/5}\\
\end{align*}
$$

両辺比較して、確かに解を確認できた。

$$
\begin{align*}
    \frac{28AT_c^{7/2}}{5r_f^2}  &= \frac{2T_c}{7t}\\
    \frac{14*7 A C^{5/2} t^{-5/7}}{5B^2 t^{2/7}} &= \frac{1}{t} \\
    \frac{AC^{5/2}}{B^2} &= \frac{5}{49*2}
\end{align*}
$$



## 自己相似性
---


<img src="img/NL_diff_1.png" alt="説明" width="350" height="200">


## フラックスの空間分布
---


