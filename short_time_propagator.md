# 熱核の無限小時間での近似

短時間伝播核（short-time propagator / heat kernel / Feynman kernel の微小時間展開）の導出。

$\epsilon$を無限小の正の数とする。

$$
\begin{align*}
\bra{x} e^{-i \hat{H}\epsilon} \ket{y} 
&= 
\sqrt{\frac{2m}{\epsilon}}
e^{im(x-y)^2/2\epsilon}\int \frac{dp}{2\pi}
e^{-i[p-\sqrt{m/2\epsilon} (x-y)]^2}\\
&* \sum_{n=0}^{\infty}\frac{(-i\epsilon)^n}{n!}
\left[ -i\sqrt{\frac{2}{\epsilon m}} p \partial_x - \frac{\partial_x^2}{2m} + V(x) \right]^n  * 1
\end{align*}
$$

積分の変数変換 $q = p- \sqrt{m/2\epsilon}(x-y)$で、


$$
\begin{align*}
\bra{x} e^{-i \hat{H}\epsilon} \ket{y} 
&= 
\sqrt{\frac{2m}{\epsilon}}
e^{im(x-y)^2/2\epsilon}\int \frac{dq}{2\pi}
e^{-iq^2}\\
&* \sum_{n=0}^{\infty}\frac{(-i\epsilon)^n}{n!}
\left[ -i\sqrt{\frac{2}{\epsilon m}} (q +\sqrt{\frac{m}{2\epsilon}}(x-y)) \partial_x - \frac{\partial_x^2}{2m} + V(x) \right]^n  * 1\\
&= 
\sqrt{\frac{2m}{\epsilon}}
e^{im(x-y)^2/2\epsilon}\int \frac{dq}{2\pi}
e^{-iq^2}\\
&* \sum_{n=0}^{\infty}\frac{(-i\epsilon)^n}{n!}
\left[ -i\sqrt{\frac{2}{\epsilon m}} q\partial_x -i\frac{(x-y)}{\epsilon} \partial_x - \frac{\partial_x^2}{2m} + V(x) \right]^n  * 1
\end{align*}
$$

- 多分だけど、$x-y$も$\epsilon$のオーダーと思っていいのではないかな？
- 奇関数の積分で落ちる項がある。
- また、1に作用する微分は消えることに注意。
- n=2まで残せば、


$$
\begin{align*}
\bra{x} e^{-i \hat{H}\epsilon} \ket{y} 
&= 
\sqrt{\frac{2m}{\epsilon}}
e^{im(x-y)^2/2\epsilon}\int \frac{dq}{2\pi}
e^{-iq^2}\\
&*\left( 1-i\epsilon V(x) + \frac{-\epsilon^2}{2}\left[ -i\sqrt{\frac{2}{\epsilon m}} q\partial_x -i\frac{(x-y)}{\epsilon} \partial_x - \frac{\partial_x^2}{2m} + V(x) \right] * V(x) \right) \\
&= 
\sqrt{\frac{2m}{\epsilon}}
e^{im(x-y)^2/2\epsilon}\int \frac{dq}{2\pi}
e^{-iq^2}\\
&*\left( 1-i\epsilon V(x) + \frac{-\epsilon^2}{2} \left[ -i\frac{(x-y)}{\epsilon} V'(x) - \frac{V''(x)}{2m} + V^2(x)\right] \right)
\end{align*}
$$

- $\epsilon$の二次を落とす。


$$
\begin{align*}
\bra{x} e^{-i \hat{H}\epsilon} \ket{y} 
&= 
\sqrt{\frac{2m}{\epsilon}}
e^{im(x-y)^2/2\epsilon}\int \frac{dq}{2\pi}
e^{-iq^2}\\
&*\left( 1-i\epsilon V(x) +  i\epsilon \frac{(x-y)}{2} V'(x) \right)
\end{align*}
$$


- aが正の定数のとき、

$$
    \int_{-\infty}^{\infty}  e^{-iap^2} dp 
    = e^{-i\pi/4}\sqrt{\frac{\pi}{a}}
$$

- この公式を使うと、

$$
\begin{align*}
\bra{x} e^{-i \hat{H}\epsilon} \ket{y} 
&= 
\sqrt{\frac{2m}{\epsilon}}
e^{im(x-y)^2/2\epsilon} e^{-i\pi/4}\sqrt{\pi}\\
&*\left( 1-i\epsilon \left[ 1+ \frac{y-x}{2} \partial_x\right] V(x) \right)\\
&\simeq
e^{-i\pi/4} \sqrt{\frac{2m \pi}{\epsilon}}
e^{im(x-y)^2/2\epsilon} *\left( 1-i\epsilon V(x+\frac{y-x}{2} ) \right)\\
&\simeq 
e^{-i\pi/4} \sqrt{\frac{2m \pi}{\epsilon}}
e^{im(x-y)^2/2\epsilon} * \exp{\left [-i\epsilon V\left( \frac{x+y}{2}\right) \right]}\\
\end{align*}
$$

$$
\langle x|e^{-iH\epsilon}|y\rangle
\approx
\sqrt{\frac{m}{2\pi i\epsilon}}
\exp\Big[
\frac{i m(x-y)^2}{2\epsilon}

* i\epsilon V\left(\frac{x+y}{2}\right)
  \Big]
$$


「粒子は時間 ε でほぼ自由粒子として飛ぶ＋途中の中点でポテンシャルを感じる」
という意味です。




- 「量子力学を微分方程式から幾何学（経路・作用）へ変換する変換公式」といえる。


$$
\langle x|e^{-i\hat H\epsilon}|y\rangle
$$

の微小時間近似は：

- **量子力学を「経路積分」に変換する唯一の入口**
- **半古典近似（WKB, Van Vleck）**
- **量子統計（熱核・分配関数）**
- **数値シミュレーション（格子量子系、imaginary time）**
- **数学（Heat kernel expansion, Seeley–DeWitt係数）**


### ① 経路積分がここから生まれる

時間発展を分割：

$$
e^{-iHT} = (e^{-iH\epsilon})^N
$$

を座標完全系で挟むと：

$$
\int dx_1...dx_{N-1}
\prod_k
\langle x_{k+1}|e^{-iH\epsilon}|x_k\rangle
$$

あなたの結果を代入すると：

$$
\sum_k
\left[
\frac{m}{2}\frac{(x_{k+1}-x_k)^2}{\epsilon}
-\epsilon V(\bar x_k)
\right]
$$

👉 **作用 S = ∫ L dt が自然に出現**

つまり：

-  **ラグランジアン形式は後から出てくる副産物**

これはめちゃくちゃ深い。


### ② なぜ「中点規則」が自然に出るか

あなたが勝手に導いた

$$
V\left(\frac{x+y}{2}\right)
$$

* 量子補正を正しく保つ
* Weyl ordering と一致
* ゲージ不変性を壊さない

という**数学的に最も綺麗な規約**です。
これは人類が「選んだ」のではなく**熱核展開をやると強制的に出てくる**点が重要。


### ③ 半古典近似の基礎

この核を stationary phase すると：

$$
\delta S = 0
$$

👉 古典方程式が出る

さらに二次変動を入れると：

* Van Vleck determinant
* Maslov index
* 位相因子

が全部出る。
- 量子→古典の橋渡し装置


### ④ imaginary time にすると統計力学

$t\to -i\tau$で：

$$
K(x,y;\tau)=\langle x|e^{-\tau H}|y\rangle
$$

* 分配関数
* 密度行列
* パス積分モンテカルロ

全部の出発点。



## ⑤ あなたの「εで x-y も小さい」洞察は正しい

短時間では：

$$
\langle (x-y)^2 \rangle \sim \epsilon
$$

だから：

$$
x-y \sim \sqrt{\epsilon}
$$

👉 拡散スケーリング

だからあなたがやった：奇関数積分消去εのべき整理
は厳密に justified されています。


## ⑥ なぜ「熱核展開」は理論物理で神扱いか

この展開から：

* 有効作用
* アノマリー
* 真空エネルギー
* Casimir効果
* 量子補正

全部出る。

例えば：

$$
\text{Tr } e^{-\tau H}
= \sum_n a_n \tau^{n-d/2}
$$

の係数 (a_n) は：

* 曲率
* ゲージ場
* ポテンシャル

の不変量になる。


* 電磁場を入れるとどうなるか（ゲージ不変性）
* 相対論版（Schwinger proper time）
* Seeley–DeWitt係数



## 

- 以下の積分を考える。
- $y_0,y_n$の関数で、$y_i' = y_i-y_0$の変換で、$y_n-y_0$の関数になることがわかる。

$$
\int dy_1...dy_{n-1} \exp{[i \sum_{k=1}^{n} (y_k-y_{k-1})^2]} = f_{n-1}(y_0, y_n) = f_{n-1}(0, y_n-y_0)
$$

$$
\begin{align*}
f_{n-1}(0,y_n) 
&= 
\int dy_1...dy_{n-1} \exp{[i( \sum_{k=3}^{n} (y_k-y_{k-1})^2
 + 2y_1^2 -2y_1y_2 + y_2^2 )]}\\
 &= 
\int dy_1...dy_{n-1} \exp{[i( \sum_{k=3}^{n} (y_k-y_{k-1})^2
 + 2(y_1 - y_2/2)^2  + \frac{y_2^2}{2} )]}\\
 &= 
\sqrt{\frac{i\pi}{2}}\int dy_2...dy_{n-1} \exp{[i( \sum_{k=3}^{n} (y_k-y_{k-1})^2
  + \frac{y_2^2}{2} )]}\\
&=
\sqrt{\frac{i\pi}{2}}\int dy_2...dy_{n-1} \exp{[i( \sum_{k=4}^{n} 
(y_k-y_{k-1})^2
  + \frac{3y_2^2}{2}-2y_2y_3 + y_3^2 )]}\\
&=
\sqrt{\frac{i\pi}{2}}\int dy_2...dy_{n-1} \exp{[i( \sum_{k=4}^{n} 
(y_k-y_{k-1})^2
  + \frac{3}{2} (y_2-\frac{2}{3}y_3)^2 + y_3^2/3 )]}\\
  &=
\sqrt{\frac{(i\pi)^2}{3}}\int dy_2...dy_{n-1} \exp{[i( \sum_{k=4}^{n} 
(y_k-y_{k-1})^2
  + y_3^2/3 )]}
 \end{align*}
$$

$$
(\frac{1}{m} +1) x^2 - 2xy + y^2 
= 
\frac{m+1}{m} (x- \frac{m}{m+1}y)^2 +\frac{1}{m+1}y^2
$$

よって、これを繰り返すと、

$$
\begin{align*}
f_{n-1}(0,y_n)
    &=
\sqrt{\frac{(i\pi)^{n-1}}{n}} \exp{\left (i \frac{y_n^2}{n} \right)}
 \end{align*}
$$



$$
\boxed{
\int dy_1...dy_{n-1} \exp{[i \sum_{k=1}^{n} (y_k-y_{k-1})^2]} 
 =
\sqrt{\frac{(i\pi)^{n-1}}{n}} \exp{\left (i \frac{(y_n-y_0)^2}{n} \right)}  }
$$




## 二次形式の複素ガウス積分

実変数$N$次元ベクトル$\mathbf{x}$、対称行列$A$に対して：

$$
\boxed{
\int d^N x 
\exp\Big( \frac{i}{2}\mathbf{x}^T A \mathbf{x} + i \mathbf{J}^T \mathbf{x} \Big)
=
\sqrt{\frac{(2\pi i)^N}{\det A}}
\exp\Big(-\frac{i}{2}\mathbf{J}^T A^{-1}\mathbf{J}\Big)
}
$$

- 収束のために$A\to A+i0$の処方が暗黙



$$
\sum_{k=1}^n (y_k-y_{k-1})^2
$$

は行列で書くと：

$A_{i,i} = 2, A_{i,i+1}=A_{i,i-1} = -1$　離散ラプラシアン行列（トリディアゴナル）熱核のようなものを見ているので。


$$
\mathbf{y}^T A \mathbf{y}
-2y_0 y_1 -2 y_n y_{n-1}
+ y_0^2 + y_n^2
$$


$$
\int d^{n-1}y \,
e^{i y^T A y + i b^T y}
$$


* 分母：$\det A$
* 指数：$b^T A^{-1} b$

だけが残る。


$$
(A^{-1})_{ij}
=
\frac{\min(i,j)(n-\max(i,j))}{n}
$$

という閉形式を持つ。

なので端点結合：

$$
b=(y_0,0,0,...,y_n)
$$

を代入すると：

$$
\frac{(y_n-y_0)^2}{n}
$$

が出る。


## 実はこれ「数値計算の基礎アルゴリズム」

この処理は：

* Kalman filter
* Gaussian process
* MCMC
* lattice QCD

全部で使われている。


## 物理的に重要な点

 determinant→ 正規化係数
$$
\det A = n
$$


 inverse → 伝播核

$$
A^{-1} \Rightarrow Green関数
$$



* ゼータ関数正則化で determinant を定義する方法
* 離散→連続極限での Green関数の出現

