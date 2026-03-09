---
title: 運動論から導くEuler方程式
description: 流体力学の基礎方程式であるオイラー方程式を、無衝突ボルツマン方程式などの運動論から導出する物理解説。
keywords:
  - Euler equation
  - Boltzmann equation
  - collisionless Boltzmann equation
  - fluid dynamics
  - kinetic theory
  - オイラー方程式
  - ボルツマン方程式
  - 無衝突ボルツマン方程式
  - 流体力学
  - 運動論
# tags:
#   - fluid
#   - plasma
#   - kinetic-theory
#  - statistical-mechanics
#  - numerical-method
new: false
#slug: euler-from-kinetic-theory
---


!!! info
    本記事では無衝突なボルツマン方程式(collisionless Boltzmann equation)を出発点にして、圧縮性流体を記述するEuler方程式系を導出する。

## Euler方程式の構造

流体方程式の基本的な構成は

- 質量・運動量・エネルギー保存則
- 構成方程式  

の組み合わせである。実際に、Euler方程式もこれに倣っている。  
デカルト座標系でのEuler方程式は、保存形式($\partial_t Q + \nabla \cdot F = S$, $Q$: 保存量, $F$: 保存量の流れ, $S$: 保存量の湧き出し)ベースで以下のように書かれる。

$$
\begin{align*}
    \frac{ \partial \rho }{\partial t } 
    &+ \frac{\partial (\rho u^i )}{\partial x^i}  = 0
\\
    \frac{\partial (\rho u^i ) }{ \partial t} &+ \frac{\partial (\rho u^i u^j + p\delta^{ij}) }{\partial x^j}  =  \rho F^i  
\\
    \frac{\partial (\rho E) }{ \partial t} &+ \frac{\partial ((\rho E+p) u^i ) }{\partial x^i } 
    = \rho F^i u^i
\end{align*}
$$


$$
    E = \frac{u^2}{2} + \epsilon
$$


$$
    p = (\gamma -1) \rho \epsilon
$$

ここで、添字は$(i=1,2,3)$で空間成分を表し、記号の重複に対して和をとることとする。
$u^i$は流体素片の平均速度、$\rho$は質量密度、$p$は圧力、$F$は流体素片が受ける平均的な外力、$\epsilon$は単位質量あたりの内部エネルギー、$\gamma$は比熱比である。

一本目が質量保存則、二本目が運動量保存則、三本目がエネルギー保存則に応じている。五本目が構成方程式である。(四本目は式の見た目を簡単にしているだけだ。)


Euler方程式系やより一般の流体方程式の式の形を納得する方法は様々だろう。
一つの重要な方法は、ボルツマン方程式系統の速度分布関数の時間発展を記述するクラス（いわゆるphysical kinetics）を出発点にする方法だ。


## 無衝突ボルツマン方程式とそのモーメント

!!! info
    本記事では無衝突ボルツマン方程式を出発点にする。無衝突の仮定から熱化が入らないので、正確な導出にはならない。

無衝突な気体の分布関数が従う発展方程式は次のように記述される。

$$
0= 
\frac{\partial f}{\partial t} + v^i \frac{\partial f}{\partial x^i} + \frac{F^{i}}{m} \frac{\partial f}{\partial v^i} 
$$

$$
    0 = \nabla \cdot F = \frac{\partial F^i}{\partial v^i} 
$$

ボルツマン方程式から衝突項を落としたものに相当しているので、無衝突ボルツマン方程式(collisionless Boltzmann equation)と呼ばれる。

!!! note 
    二本目の条件は、多粒子に対する平均場的な力$F(x,v,t)$が、時間発展で六次元位相空間体積($d^3 x d^3 v$)を不変に保つことを要請している。いわゆる、「Liouvilleの定理」が、$6N$次元から縮減された分布関数でも成立することを要請している。  
    例えば、ローレンツ力はこれを満たす(→Vlasov 方程式)。  
    摩擦$F = -\nu v$のようなものは、位相空間の大きさを指数的に縮めてしまうので、ここの$F$には入れられない。

!!! note 
    一本目が$f(x,v,t)$の発展方程式を与えている。移流方程式の形式から、流れに沿って$f$が保存することを言っている。すなわちラグランジュ微分

    $$
        \frac{D }{Dt} = \frac{\partial }{\partial t} + v \cdot \nabla_x + F \cdot \nabla_v
    $$

    に対して、$f$が一定だと読める。二本目の拘束条件から、保存形式に書き直すこともできる。すなわち、
    
    $$
    0=   
    \frac{\partial f}{\partial t} 
    + \nabla_{xv} \cdot \Gamma, \quad
    \Gamma = 
    \begin{pmatrix} 
    vf\\
    Ff
    \end{pmatrix}
    $$
    
    $f$は位相空間上の粒子数密度のようなものなので、こちらの形式の方が顕に保存則を反映した書き方となっている。
    翻って、条件$\nabla_v \cdot F = 0$は、六次元位相空間上の流れに対する「非圧縮条件」だと解釈できる。流体力学のおいて、流れ場が非圧縮であれば、$\nabla_x \cdot u = 0$、質量保存則から流れに沿った密度変化が0になる($Df/dt = 0$)であることと構造的に同じだ。今、流れ場が非圧縮($\nabla \cdot \Gamma$ = 0)なので、数密度$f$のラグランジュ微分が0になる。


流体方程式の導出は、分布関数の速度モーメント積分によって達成される。分布上の平均値を次のように書くことにする。

$$
\int d^3v \,A(v) f(v) \equiv \left <A(v)\right >
$$

質量の連続の式は

$$
\begin{align*}
&0= \int d^3v \, \left [ \frac{\partial f}{\partial t} + v^i \frac{\partial f}{\partial x^i} + \frac{F^{i}}{m} \frac{\partial f}{\partial v^i} \right]\\
&
0= \frac{\partial n}{\partial t} + \frac{\partial (nu^i)}{\partial x^i}
\end{align*}
$$

ただし、粒子数密度$n(x,t)$と、平均的な流速場$u^k(x,t)$を次のように定義した。

$$
    n \equiv \left< 1 \right> , \quad u^k \equiv \frac{ \left< v^k \right>}{n}
$$

運動量の連続の式は

$$
\begin{align*}
0&= \int d^3v \, v^k \left [ \frac{\partial f}{\partial t} + v^i \frac{\partial f}{\partial x^i} + \frac{F^{i}}{m} \frac{\partial f}{\partial v^i} \right]\\
\frac{\left <F^k \right >}{m}
&= 
\frac{\partial (n u^k)}{\partial t} + \frac{\partial \left < v^k v^i\right >}{\partial x^i}\\
&= 
\frac{\partial (n u^k)}{\partial t} + \frac{\partial \left < (u^i + w^i)(u^k + w^k)\right >}{\partial x^i}\\
&= 
\frac{\partial (n u^k)}{\partial t} + \frac{\partial (n u^i u^k + u^i\left < w^k\right > + u^k\left < w^i\right > + \left < w^k w^i \right > )}{\partial x^i}\\
&= 
\frac{\partial (n u^k)}{\partial t} + \frac{\partial (n u^i u^k + \Pi^{ik} )}{\partial x^i}\\
&= 
n \frac{D u^k }{Dt} + \frac{\partial \Pi^{ik} }{\partial x^i}\\
\end{align*}
$$

ただし、圧力テンソル$\Pi^{ij}$は、

$$
    \Pi^{ij} \equiv \left <  (v^i-u^i)(v^k-u^k) \right> = \left< w^i w^k \right>
$$


エネルギーの連続の式は

$$
\begin{align*}
0&= \int d^3v \, v^2 \left [ \frac{\partial f}{\partial t} + v^i \frac{\partial f}{\partial x^i} + \frac{F^{i}}{m} \frac{\partial f}{\partial v^i} \right]\\
0&= 
\frac{\partial (n u^2 + \Pi^{ii})}{\partial t} +  \frac{\partial \left< v^2 v^i \right> } {\partial x^i} -  \frac{2 \left< v^i F^{i}\right >}{m}\\
\end{align*}
$$



二項目を整理すると、

$$
\begin{align*}
    \left < v^2 v^i \right > 
    &=
    \left < (u^j+w^j)(u^j+w^j) (u^i + w^i) \right > \\
    &=
    \left < (u^2+2u^jw^j + w^2) (u^i + w^i) \right > \\
    &=
    n u^2 u^i + \Pi^{kk} u^i + \left < (u^2+2u^jw^j + w^2)  w^i \right > \\
    &=
    n u^2 u^i + \Pi^{kk} u^i + \left < (2u^jw^j + w^2)  w^i \right > \\
    &=
    n u^2 u^i + \Pi^{kk} u^i + 2 u^j \Pi^{ji} + \left < w^2 w^i \right > \\
\end{align*}
$$

よって二乗のモーメントは、

$$
\begin{align*}
0&= 
\frac{\partial (n u^2 + \Pi^{kk})}{\partial t} +  \frac{\partial ((nu^2 + \Pi^{kk})u^i  + 2 \Pi^{ji} u^j + \left< w^2 w^i \right>) } {\partial x^i} -  \frac{2 \left< v^i F^{i}\right >}{m}\\
\end{align*}
$$

$m/2$をかけて、応力のトレースを圧力として、$p = m \Pi^{ii}/3$、$K$を平均流速の運動エネルギーとすれば、エネルギー密度$\epsilon$は

$$
\epsilon \equiv \frac{m}{2} (n u^2 + \Pi^{kk}) = nK + \frac{P^{kk}}{2} = nK + \frac{3}{2} p 
$$

$$
\begin{align*}
\frac{\partial \epsilon }{\partial t} +  \frac{\partial (\epsilon u^i  + m \Pi^{ji} u^j +\left < \frac{m w^2}{2} w^i \right >)} {\partial x^i} = \left < v^i F^{i}\right > 
= u^i \left < F^{i}\right > +  \left < w^i  F^{i}\right >  = W
\end{align*}
$$

右辺は外力による仕事。質点の受ける仕事の総和を表している。

これら三つをまとめれば、

$$
    \frac{\partial U}{\partial t} + \nabla^i \cdot \Gamma^i = S
$$

$$
U =
\begin{pmatrix}
n\\
nu^k \\
\varepsilon\\
\end{pmatrix},\quad
\Gamma =
\begin{pmatrix}
n u^i\\
nu^k u^i + \Pi^{ki} \\
\varepsilon u^i + \Pi^{ki} u^k +\left < \frac{w^2}{2} w^i \right >\\
\end{pmatrix},\quad
S =
\begin{pmatrix}
0\\
\left< F^i\right>/m \\
\left< v^i F^i\right>/m\\
\end{pmatrix}
$$

$$
    \varepsilon \equiv \frac{n u^2}{2} + \left< \frac{(v-u)^2}{2}\right> = \frac{\epsilon}{m}
$$

外力を除いて、質点の質量は関係ないことに注意する。もし複数種類のガスが混ざっているときには、運動量とエネルギーの式に質量かけたほうが、保存則が自然になるだろう。



## 熱化に対応する条件

前節で分布関数に対してモーメント積分を繰り返して、保存則に対応する三本の方程式が得られた。
現時点ではEuler方程式に必要な、構成方程式$p(\epsilon, n)$が手に入っていない。


このままだと、分布関数の方程式から縮減された流体方程式系を閉じることができない。系を表現している変数を数えてみれば、$n, u^i, \epsilon, \Pi^{ij}, \left < w^2 w^i \right>, \left< F^i \right >, \left < v^i F^i \right >$である。一方、持っている時間発展の方程式は3本だ。


力の項は$F=0$にとったとしても、

$$
\Pi^{ij}=\langle w^i w^j\rangle, \qquad
\langle w^2 w^i\rangle
$$

のような圧力テンソルがや3次モーメント(熱流束)が未知変数として残り、時間発展を計算できない。

!!! note 
    ちなみに、完全に無衝突で、$F=0$で記述されるボルツマン方程式は、自由粒子が初速の慣性で飛んでいくだけなので、ただの移流方程式になる。解は時刻$t_0$の分布関数を$f_0(x,v)$として、$f(x,v,t) = f_0 (x-vt, v)$と厳密に書ける。

!!! note
    分布関数のモーメントをとっていく操作から方程式系を閉じるためには、  
    - 0次モーメント → 1次モーメントが必要  
    - 1次モーメント → 2次モーメントが必要  
    - 2次モーメント → 3次モーメントが必要  
    という階層構造ができる。これは衝突の有無と無関係にこうなる。

これら圧力テンソルの形の決定や、分布関数の高次モーメントを処理するためには、分布関数の形状を仮定したり、分布関数の速度空間上の細かな構造を無視したりする。それらに対する尤もらしい説明方法が「熱化」である。
現実では粒子集団は相互作用する。結果として分布関数は局所的な熱平衡状態に応じた分布関数に近づいていくだろう。

理論的に高級なやり方は、粒子間の衝突項を取り扱い衝突周波数で摂動展開し、
かつ、分布関数を速度空間で適当な直交関数系で展開して、低次の摂動項間で等式関係を構成していく方法が代表的だ。

希薄な流体に対する、最もシンプルで汎用性の高い近似は、分布関数を局所的にマクスウェル分布とすることである。平均速度$u$のマクスウェル分布は(shifted maxwellian)、

$$
f \approx f_M \propto e^{ [-m(v-u)^2/2T]}
$$

分布関数をshifted maxwellianで打ち切れば、平均速度の回りで分布関数が等方なので、圧力テンソルも等方になり、速度分散として温度が導入されて理想気体の状態方程式も入る。また、平均流周りの奇数次モーメントは0になるので、熱流に相当する項も0になる。

$$
    \Pi^{ij}=p \delta^{ij} = nT \delta^{ij}
$$

$$
\langle w^2 w^i\rangle =0
$$


こうなれば、運動量とエネルギーの保存則は、オイラー方程式の形になる。

$$
    n\frac{Du}{Dt} + \nabla \frac{p}{m} = \frac{\langle F\rangle}{m}
$$

$$
\partial_t \epsilon + \nabla\cdot[(\epsilon+p)u]=u\cdot F
$$


理想気体の状態方程式$p(T,n)$よりも、構成方程式$p(\epsilon, n, u)$の方が重要である。温度は基本変数ではないからだ。
内部エネルギー密度を

$$
e = \varepsilon - \frac{1}{2}nu^2
$$

とすると、単原子理想気体では

$$
e = \frac{3}{2}p
$$

なので

$$
p = \frac{2}{3}e = \frac{2}{3}\left(\varepsilon-\frac{1}{2}nu^2\right)
$$

になる。温度は$T = \frac{p}{n}$として後から定義される量にすぎない。


$$
p = (\gamma-1)e
$$

単原子気体は、比熱比が$\gamma=5/3$となる。
二原子分子の回転など、粒子の内部自由度を考える際には、位相空間の自由度が並進運動以外にも広がっている状況に対応している。そちらに流入する熱的な内部エネルギーを考えることになるので、比熱比が変化する。



<!-- 
 オイラー方程式になるのは
* 局所熱平衡
* 圧力等方
* 熱流束ゼロ
という熱化仮定を入れたとき。

ちなみにもう一歩深い話をすると、実は
Euler方程式は「強衝突極限のVlasov–Boltzmann方程式」

から系統的に出る。
Chapman–Enskog展開をすると

```
0次   Euler
1次   Navier–Stokes
2次   Burnett
``` -->

---

2026 03 10 初稿アップロード

