# Jüttner分布

相対論的な理想気体の分布関数。本記事では、Jüttner分布をまとめ、計算に必要となる第二種変形ベッセル関数に関連する事項を整理する。


- 粒子の運動エネルギー$E$が静止質量$m c^2$に漸近してくると、非相対論的なエネルギーの表式$E = mv^2/2$よりも、相対論的なエネルギーの式$E = m_e c^2 (\gamma-1)$が用いられるべきだ。
- 理想気体を構成する粒子の典型的なエネルギーが相対論的領域にあるとき、非相対論的なエネルギー式を用いたMaxwell速度分布関数は、実際の理想気体の統計からずれてくる。
- Ferencz Jüttnerは1911年に熱平衡状態にある相対論的な構成粒子の速度分布関数を顕に書いた。
- これはJüttner(ユトナー)分布、あるいはMaxwell-Jüttner分布と呼ばれている。

<img src="img/jut_E_loglog.svg" alt="説明" width="1000" height="350">


### Maxwell-Jüttner分布の表式

質量$m$、絶対温度$T$の理想気体の熱分布は以下で与えられる。

- $k_B = 1, c= 1$ : Boltzmann定数と光速を1とする。
- $T$ : 絶対温度(熱統計的な温度)
- $m$ : 注目する粒子集団の質量
- $a = m/T$: 静止質量で規格化した逆温度。
- $\Theta = T/m = 1/a$: 規格化温度。
- 分布関数は積分が1になるように規格化されている。
- $K_{\nu}(x)$: 第二種変形ベッセル関数
- $\gamma$: ローレンツ因子
- $v = \sqrt{1-1/\gamma^2}$: 質点の速さ

$$
\begin{align*}
    f(\gamma)d\gamma &=
    a\frac{\gamma^2 v }{K_2(a)} e^{-a\gamma} d\gamma\\
\end{align*} 
$$

$$
\int_{1}^{\infty} \gamma^2v e^{-a\gamma} d\gamma = \frac{K_2(a)}{a}
$$



- 多くの場合、バルクに含まれる最小質量の粒子集団は電子であるから、電子の静止質量$m_e\sim511 \rm{keV}$が相対論的レジームの温度$T$の相場となる。
- ブラックホールコロナ、初期宇宙、相対論的レーザー生成プラズマなどに実現する。
- 高エネルギーのバルクでは対生成・対消滅や輻射の放出再吸収などで、Jüttner分布からずれてくることがある。



## カノニカル統計からの導出

$\,\,\,$ここでは、相対論的領域においてカノニカル統計が適用できるものとして、理想気体の分布関数を計算し、Jüttner分布が導かれることを確認する。

- 温度Tの熱浴に接して、体積Vの範囲に閉じ込められた、N個の質量$m$の粒子を考える。
- マスはon-shell条件を満たしている。$p_\mu p^{\mu} = m^2$
- $u^{\mu} = p^{mu}/m$ : 4元速度
- 温度は対応する密度$n = N/V$のフェルミエネルギー$\epsilon_F(T=0,n)=\frac{h^2}{2m}(\frac{3n}{8\pi})^{2/3}$よりも十分高いものとして、縮退効果は考えない。これはFermi統計の高温側の極限に対応する。

カノニカル統計の処方箋より、位相空間(x-p)上の分布関数は

$$
\begin{align}
f(\set{x_i,p_i}) \Pi_id^3x_id^3p_i 
&=
\frac{(\Pi_id^3x_id^3p_i) \exp(-a\sum_j\gamma_j)} 
{Z_N(a,V)}\\
&= 
\frac{(d^3x d^3p\,\,e^{-a\gamma})^N}{(V z(a))^N}\\
\end{align}
$$

- 分配関数($Z_N(a,V)$=上式の規格化因子)は一粒子分配関数$z(a)$の積として書ける。
- 一粒子分配関数は第二種変形ベッセル関数を使って書ける。

$$
\begin{align}
Z_N(a,V)&=
(\Pi_i \int d^3x_id^3p_i) \exp(-a\sum_j\gamma_j)\\
&=
V^N z^N(a) m^{3N}
\end{align}
$$

$$
\begin{align}
z(a) &= 
\frac{1}{m^3}\int d^3p\, \exp(-a\gamma)\\
&=
\int_0^{\infty} du\, 4\pi p^2 \exp(-a\sqrt{1+u^2})\\
&=
4\pi \int_1^{\infty} d\gamma \, \gamma \sqrt{\gamma^2-1} e^{-a\gamma}\\
&= 
4\pi \frac{K_2(a)}{a}
\end{align}
$$


ただしここで、第二種変形ベッセル関数は以下のように与えられる。

$$
\begin{align}
K_{\nu}(a) &= 
\frac{\sqrt{\pi}}{ \Gamma(\nu-\frac{1}{2})} \left( \frac{a}{2}\right)^{\nu-1}  \int_{1}^{\infty} dz \, z (z^2-1)^{\nu-\frac32} e^{-az}\\
K_2(a) &=
a \int_1^{\infty} dz \, z \sqrt{z^2-1} e^{-a\gamma}
\end{align}
$$



位置座標を積分してしまって、一粒子の分布関数は、運動量空間$p\in[0,\infty]$、エネルギー空間$\gamma \in [1,\infty]$、速度空間$v \in [0,1]$でそれぞれ、

$$
\begin{align}
    f(p)d^3p &= e^{-a\gamma} d^3p \frac{1}{z(a)m^3} \\
    &= a \frac{e^{-a\gamma}}{4\pi K_2(a)}d^3u \\
    &= a \frac{u^2 e^{-a\gamma} }{K_2(a)} du  \\
    &= a \frac{\gamma^2 v e^{-a\gamma}}{K_2(a)} d\gamma \\
    &= a \frac{\gamma^5-\gamma^3}{K_2(a)}e^{a\gamma} dv
\end{align}
$$

整理すれば、(記号fを乱用するが、異なる関数を指していることには注意)
#### 運動量分布関数 $(u_x,u_y,u_z) \in [\infty,\infty]^3$

$$
\boxed{ f(u_x,u_y,u_z) d^3u \,= \,a \frac{e^{-a\gamma}}{4\pi K_2(a)}d^3u }
$$

#### 運動量絶対値での分布関数 $u \in [0, \infty]$

$$
\boxed{ f(u) du \,= \,a \frac{u^2 e^{-a\gamma}}{ K_2(a)}du }
$$

#### エネルギー分布関数 $\gamma \in [1,\infty]$

$$
\boxed{f(\gamma)d\gamma \,=\,a \frac{\gamma^2 v e^{-a\gamma}}{K_2(a)} d\gamma} 
$$

#### 速さの分布関数 $v \in [0,1]$

$$
\boxed{ f(v) dv \, = \,
    a \frac{\gamma^5-\gamma^3}{K_2(a)}e^{a\gamma}
}
$$



## 熱力学的諸量
粒子集団の運動量中心系(運動量の総和が0になる慣性系、Center of Momentum Frame)において熱力学的な操作を認めると、それに応じて熱力学的な諸量を定義できる。

> 運動エネルギーを相対論的な表現に変更したことにより、非相対論的極限と何が変わるのかを意識するとよい。例えば、状態方程式は本質的に一致する。比熱が3に漸近するなど。

### ヘルムホルツの自由エネルギーF(T,V)

- 分配関数を適当な状態数の測度(例えば、$\hbar^{3N} N!$)で割って無次元化する。
- 完全な熱力学関数としてのヘルムホルツ自由エネルギーが得られる。
- $N \to \infty$


$$
\begin{align}
    F_N(T,V) &= -T \ln{(Z_N(T,V)/(\hbar^{3N})N!)}\\
    &= -T \ln {(z^N(a)V^N m^{3N}/ \hbar^{3N} N!)}\\
    & \approx -TN\ln{(z(a)Vm^3/\hbar^3)} + T(N\ln{N}-N+\frac12 \ln{(2\pi N)})\\
    &\approx -TN -TN\ln{  \left[\frac{4 \pi K_2(a) m^3}{a \hbar^3n}\right]}\\
    &= 
    -TN [1 + \ln(4\pi m^3/\hbar^3) - \ln n 
    + \ln\left[\frac{K_2(a)}{a}\right]]
\end{align}
$$

- $N$に比例する、示量変数としての自由エネルギーが得られる。
- 分配関数のエネルギー評価で、静止質量を引いて運動エネルギーを使うと$\gamma \to \gamma-1$、自由エネルギーの対数の引数にexp(a)の因子がつく。これは対数項の外に出すと、$-NkTa = -mN$となるので、一粒子あたりの自由エネルギーの原点を$-m$ずらすだけ。

---

### 圧力 p(T,V)
- ヘルムホルツ自由エネルギーの体積偏微分は状態方程式(p,T,V状態量間の拘束)を与える。

$$
p(T,V) = -\frac{\partial F}{\partial V}(T,V) 
$$

$$
\frac{\partial F}{\partial V}(T,V) 
= \left. \frac{\partial}{\partial V} \right|_T (-T \ln{Z_N(V,T)})
$$

- 分配関数の体積依存性はN体の粒子が無相関であるという性質から、$Z_V\propto V^N$
- よって、(juttner分布に限らない)一般の理想気体で理想気体の状態方程式が成立する。

$$
\boxed{
p(T,V) = \frac{N}{V}T = nT}
$$


### 運動論からの圧力導出

運動論の立場では、圧力とは運動量輸送テンソルの対角成分である。この考え方から、一般の理想気体で理想気体の状態方程式が成立することを確かめてみる。

- エネルギーが運動量の適当な関数であるとする。$E(p)$
- 運動量分布関数がカノニカル分布で書けるとする。

$$
f(p)d^3 p =A e^{-\beta E(p)} d^3p \qquad(\beta=1/T)
$$


- 粒子速度を与える分散関係は

$$ 
v_i = \frac{\partial E}{\partial p_i} 
$$ 

> これは微視的な仕事とエネルギー変化量の関係を与えていると解釈できる。
構成粒子レベルのミクロスコピックなエネルギー保存が、マクロな視点できちんと熱と仕事の等価性(熱力学第一法則)を満たすような圧力を保証してくれる。

 $$
 dE = \frac{\partial E}{\partial p_i} dp_i 
 $$

 $$
 dE = v \cdot F dt = v \cdot dp
 $$




- 圧力は応力テンソルの空間対角成分で与えられる。
- 分布の等方性を仮定して圧力の表現を得る。
- 積分に登場する境界項は$\exp(\beta E(p))$により0になることを仮定する。

$$
\begin{align}
P &= \frac13 \int d^3p\,\, p_i v_i\,\, f(p)\\
  &= 
  \frac{A}{3} \int d^3p \,\,p_i \frac{\partial E}{\partial p_i} 
  e^{-\beta E(p)}\\
  &= 
  \left[ \frac{A}{-3\beta} p_i e^{-\beta E(p)}\right] _{p_i= -\infty}^{p_i=\infty}
  +\frac{1}{3\beta} A \int d^3p\,\, \delta_{ii} \, e^{-\beta E(p)}\\
  &= 
    nT 
\end{align}
$$


$$
P = n T
$$

E(p) の具体形に依存せず理想気体の状態方程式が成立することをカノニカル統計を仮定した運動論の立場から確認できた。


---

### 粒子の平均エネルギーと内部エネルギーU(T,V)

- 粒子エネルギーの平均値は、次のように計算される。
- 途中で第二種変形ベッセル関数が満たす公式を用いている。

$$
    \begin{align}
    \langle \gamma \rangle 
    &= \int_1^{\infty} d\gamma \frac{ae^{-a\gamma}}{K_2(a)} \gamma^3 v \\
    &= \frac{-1}{z(a)}\frac{\partial z(a)}{\partial a}\\
    &=  - \frac{\partial}{\partial a} \ln{z(a)}\\
    &= -\frac{\partial}{\partial a} \ln{\frac{K_2(a)}{a} }\\
    &= -\frac{K_2'(a)}{K_2(a)} + \frac1a \\
    &=  \frac{K_1(a) + \frac2a K_2(a)}{K_2(a)} + \frac{1}{a}\\
    &= \frac{3}{a} + \frac{K_1(a)}{K_2(a)}
\end{align}
$$

- 第二種変形ベッセル関数は次のような公式が成立する。

$$
    K'_n(x) =  -K_{n-1}(x) -\frac{n}{x} K_n(x)
$$





- 静止質量を含めた平均エネルギー

$$
\boxed{
    \langle \gamma \rangle = \frac{3}{a}+\frac{K_1(a)}{K_2(a)} 
}
$$

- 平均運動エネルギー

$$
\boxed{
    \langle \epsilon \rangle = m \langle \gamma -1 \rangle 
    =T \left[3 +a \frac{K_1(a)}{K_2(a)}-a \right]
}
$$

- 内部エネルギー/内部エネルギー密度

$$
\begin{align}
U(T,V) &= F(T,V) + TS = F(T,V) - T\frac{\partial F}{\partial T}\\
&= - T^2 \frac{\partial }{\partial T}  \frac{F(T,V)}{T}
=  -m \frac{\partial }{\partial a} \ln{Z_N(V,T)}\\
&= Nm \langle \gamma \rangle
\end{align}
$$


$$
\boxed{
    u(T,n) = \frac{U(T,V)}{V} = n m \langle \gamma \rangle}
$$

- 非相対論極限は普通静止質量の分を含まないので、低温側で一致させるためには1を差し引くとよい。

$$
    u(T,n) = \frac{U(T,V)}{V} = n m \langle \gamma -1 \rangle
    =nT \left[3 +a \frac{K_1(a)}{K_2(a)}-a \right]
$$

粒子の運動エネルギー期待値は非相対論領域では、$3/2T$になる。エネルギー密度は$u=3/2nT$であった。Jüttner分布では、相対論領域で係数が1.5からズレ始め、強相対論領域では3に漸近する。

- 量子統計においては低エネルギー側でエネルギー等分配則が破れることを学ぶが、高エネルギー側の相対論領域でも、異なる要因によって等分配則が破れる。

$$
    u/nT 
    = \left[3 +a \frac{K_1(a)}{K_2(a)}-a \right]
$$

以下のグラフは$u/nT$の温度依存性を表している。

<img src="img/jut_Ucorr.svg" alt="説明" width="1000" height="350">


### 定積熱容量

- 定積熱容量は体積一定の下での単位温度変化に伴う熱の出入りで、内部エネルギー密度の温度偏微分で計算できる。$dU = Tds - PdV, dV = 0 $
- エネルギー密度の変化から、定積比熱は定数にならず、弱相対論領域では1.5、強相対論領域では3に漸近することがわかる。

$$
    C_V = T\left( \frac{\partial S}{\partial T} \right)_V 
     = -T \left( \frac{\partial^2 F}{\partial T^2} \right)_V 
     = -\frac{\partial }{\partial T}\left( T 
     \left( \frac{\partial F}{\partial T}\right)_V - F\right)_V
     = \left( \frac{\partial U}{\partial T} \right)_V
$$

$$
    \frac{\partial U}{\partial T} = N \frac{\partial \left< \gamma \right>} {\partial a}
    = N \frac{\partial}{\partial (T/m)} \left[\frac{3}{a}+\frac{K_1(a)}{K_2(a)} \right]
    =-N a^2 \frac{\partial}{\partial a} \left[\frac{3}{a}+\frac{K_1(a)}{K_2(a)} \right]
$$

$$
\frac{\partial}{\partial a} \left[\frac{K_1(a)}{K_2(a)} \right]
=\frac{K_1' K_2 - K_1K_2'}{K_2^2}
$$


- 第二種変形ベッセル関数の公式を参照する。

$$
    K'_n(x) =  -K_{n-1}(x) -\frac{n}{x} K_n(x)
$$

$$
    K_{n+1}(x) = K_{n-1}(x) + \frac{2n}{x} K_n{x}
$$

- これらを使うと、

$$
    K'_1 =  -K_{0} - \frac{1}{a} K_1 = -K_2 + \frac{1}{a} K_1
$$

$$
    K'_2 =  -K_{1} - \frac{2}{a} K_2
$$

$$
K_1' K_2 - K_1 K_2' = -K_2^2+\frac{3}{a}K_1 K_2 +K_1^2
$$

整理すると、

$$
C_V = N \left[ 3+a^2 -3a \frac{K_1(a)}{K_2(a)} 
-a^2 \left(\frac{K_1(a)}{K_2(a)} \right)^2 \right]
$$


- 定積比熱として、$c_V = C_V /N$を以下に描画した。
- 横軸の範囲は、エネルギー密度のプロットと同じ。
- a=1/5程度で、かなり3に近づいていることがわかる。

<img src="img/jut_spheat_v.svg" alt="説明" width="1000" height="350">


### 等圧熱容量

- マイヤーの関係式が成立する。
- 基本的には、$TdS = dU+pdV = C_V dT +  d(pV) = N(c_v + 1)dT $

$$
\begin{align*}
C_p = 
T \left (\frac{\partial S(V,T)}{\partial T} \right)_p 
&= 
T \left ( \frac{\partial S}{\partial T} \right)_V 
+ T \left ( \frac{\partial S}{\partial V} \right)_T \left ( \frac{\partial V(p,T)}{\partial T} \right)_p\\
&=
C_V -T \left ( \frac{\partial p}{\partial T} \right)_V 
\left ( \frac{\partial p}{\partial T} \right)_V /\left ( \frac{\partial p}{\partial V} \right)_T\\
&= 
C_V + N \\
&= N(c_V +1)\\
\end{align*}
$$

$$
C_p =  N \left[ 4+a^2 -3a \frac{K_1(a)}{K_2(a)} 
-a^2 \left(\frac{K_1(a)}{K_2(a)} \right)^2 \right]
$$


ただし、以下の関係式を用いた。
-  $dF = -SdT-pdV$の全微分条件 : $\frac{\partial S}{\partial V} = \frac{\partial p}{dT}$
- 偏微分の関係式 $\partial_x f(x,y)/\partial_y f(x,y) 
= -(\partial y(f,x)/\partial x)_f$
- 状態方程式 $p(T,V) = NT/V$


<!-- 
### 等温変化
### 断熱変化 -->


### エントロピー S(T,V)

- 自由エネルギーF(T,V)の温度偏微分として与えることができる。
- 先に内部エネルギーU(T,V)を計算しているので、$S = (U-F)/T$から求めてもよい。ただし、その際にはエネルギーの原点に関して静止質量の有無に注意する。

$$
\begin{align*}
    S(T,V) &= -\frac{\partial F}{\partial T} 
    = 
    \frac{\partial}{\partial T} \left[ TN [1 + \ln\frac{4\pi m^3 K_2(a)}{\hbar^3 n a } ]\right]\\
    \frac{S(T,V)}{N}
    &= 
     \left[ 1 + \ln\frac{4\pi m^3  K_2(a)}{\hbar^3 n a} \right]
    -a \frac{\partial}{\partial a} \ln\frac{K_2(a)}{a}\\
    &= 
      \left[ 1 + \ln\frac{4\pi m^3 K_2(a)}{\hbar^3 n a} \right]
    -a \frac{K_2'(a)}{K_2(a)} + 1\\
    &= 
    \ln\frac{4\pi m^3 K_2(a)}{\hbar^3 n a}
    + a\frac{K_1(a)}{K_2(a)} +4
\end{align*}
$$

比熱の振る舞いが高温極限で3に漸近することを思い出すと、エントロピーは比熱の温度積分に対応しているはずなので、非相対論的なエネルギー式との比較において、(T,S)プロットをした際に高温側でグラフの傾きがズレていくと考えられる。
これは対数増加の部分$\ln{(K_2(a)/a)}$に現れる。

- 高温極限($a\ll 1$)で、$K_2(a)/a \to a^{-3}/4 \propto T^{3}$

- 低温極限($a\ll 1$)で、
$K_2(a)/a \to \propto  e^{-a}a^{-1.5} \sim \propto T^{1.5}$

- いずれも$s\sim c_v\ln{T} + s_0$の形で漸近することがわかる。
- 比熱の違いは、許される状態数の変化の仕方に対応している。


### 断熱変化・等エントロピー過程

断熱変化はエントロピーを一定に保つ準静的な変化である。$TdS = 0 = dU+pdV$。対応する状態変数間の拘束関係は、

$$
    \ln{\frac{V K_2(a)}{a}}+a\frac{K_1(a)}{K_2(a)} = C(const.)
$$

$$
    V e^{-C} =  \frac{a}{K_2(a)} e^{-a K_1(a)/K_2(a)}
$$

- 右辺は温度だけの関数である。以下に右辺を(T,V)のlog-logプロットで示す。Vは温度の単調減少関数でべき依存性が$T/mc^2\sim0.2−0.3$付近から変化しているように見える。


<img src="img/jut_Vad.svg" alt="説明" width="1000" height="350">


- 高温極限$a\ll1$では、$K_1\to 1/(2a), \,K_2\to 1/(4a^2)$なので、

$$
    VT^3 =const., \quad p V^{4/3} = const.
$$

- これは、比熱比$c_p/c_v=4/3$に対応している。
- 一方、低温極限$a\gg1$では、主要項で$K_{\nu}\to \sqrt{\pi/2a}e^{-a}$なので、

$$
    VT^{1.5} = const., \quad pV^{5/3}=const.
$$

- これは、比熱比$c_p/c_v=5/3$に対応している。




### ギブス自由エネルギー$G$と化学ポテンシャル$\mu$

ギブス自由エネルギーは粒子数の比率でスケールするので、ギブス自由エネルギーと化学ポテンシャルは$G=N\mu$を満たす。

$$
G = F + pV = -TN\ln{  \left[\frac{4 \pi  m^3K_2(a)}{ \hbar^3n a}\right]}\\
$$

$$
    \mu = -T\ln{  \left[\frac{4 \pi  m^3K_2(a)}{ \hbar^3n a}\right]}
$$

ここでの表記は静止質量を含めているので注意する。

### エンタルピー$H$

$$
    H = U + pV = TN \left[4 +a \frac{K_1(a)}{K_2(a)}\right]
$$





## 低温領域での振る舞いと相対論領域へのシフト

Jüttner分布は低温側の極限で、非相対論的なエネルギー式を用いたMaxwell分布に漸近する。遷移の目安は規格化温度$\Theta= 1/a = T/m c^2 \sim 1$付近である。ここでは、これらを比較しよう。

$K_2(a)$は$a\gg 1$側での漸近表現として、

$$
    K_2(a) \approx 
    \sqrt{\frac{\pi}{2a}} e^{-a}  \left[1 + \frac{15}{8a}  + \frac{(15)(7)}{2^7 a^2  } + ... \right]
$$

- Jüttner分布の表式に対して上記の近似式を用いると、($\epsilon = \gamma-1)$

$$
\begin{align*}
    f(\gamma)d\gamma &=
    a\frac{\gamma^2 v }{K_2(a)} e^{-a\gamma} d\gamma\\
    &\approx 
    \sqrt{\frac{2}{\pi}} a^{3/2} \gamma^2 v e^{-a\epsilon}
    \frac{d\epsilon}{1 + \frac{15}{8a} }
\end{align*} 
$$

$$
\begin{align*}
    \gamma^2 v 
    &= (1+\epsilon) \sqrt{\epsilon^2+2\epsilon}\\
    &= \sqrt{2\epsilon}(1+\epsilon)\sqrt{1+\epsilon/2}
\end{align*}
$$

以下に、非相対論的なエネルギー式を用いたマクスウェル分布を記載。

$$
\begin{align*}
    f_{NR}(p) d^3p &= \sqrt{\frac{1}{2m\pi T}}^3 e^{-p^2/2mT} d^3 p\\
    &=
    4\pi p^2 \sqrt{\frac{1}{2m\pi T}}^3 e^{-E/T} dp\\
    &= 
    4\pi mp \sqrt{\frac{1}{2m\pi T}}^3 e^{-E/T} dE\\
    &= 
    \sqrt{\frac{2}{\pi}} a^{3/2} \sqrt{2\epsilon} e^{-a\epsilon} d\epsilon
\end{align*}
$$

- 近似の主要項が非相対論的なエネルギー式を使ったmaxwell分布と一致することがわかる。

### 温度変化に対する分布関数のシフト

非相対論的なエネルギー式のマクスウェル分布は、横軸を対数にしたときに面積が保存するような変換で、$T/E=a\epsilon$の関数として書ける。

$$
\begin{align*}
    f_{NR} dE 
&= \frac{2}{\sqrt{\pi}} a^{3/2} \sqrt{\epsilon} e^{-a\epsilon} d\epsilon\\
&= 
\frac{2}{\sqrt{\pi}} (a\epsilon)^{3/2}  e^{-a\epsilon}d(\ln{\epsilon})\\
&= h(a \epsilon) d(\ln{\epsilon})
\end{align*}
$$

この性質は、エネルギー分布関数を描画する際に便利である。

- $X = \ln{E}, Y = dn/dE*E = df/d(\ln{E})$で描画すれば、温度の異なるマクスウェル分布は、グラフ上での形が同じまま、$X=\ln{E}$方向にシフトする。

- 分布の最大値は形状を表す関数$h(x)$の極大値に対応しており、その座標は$x_M=3/2$である。すなわち最大値の座標点のエネルギーが温度の1.5倍に対応している。

> ただし上記は非相対論的領域のみで成立する。

<img src="img/jut_E_logE01.svg" alt="説明" width="1000" height="350">


相対論的な温度に差し掛かると、$a\epsilon$の関数としては書けなくなるので、等面積の領域が少しづつ歪んでいく。(上図に異なる温度のJüttner分布を描画。)

$$
\frac{dn}{d\ln{\epsilon}} = a\frac{\gamma^2 v \epsilon}{K_2(a)} e^{-a\gamma}
$$


<!-- ## 非相対論的なマクスウェル分布の適用範囲
非相対論的なマクスウェル分布が破れ始め、Juttner分布への移行が推奨される温度を見積もってみる。
- ただし、ここでは非相対論的な分布は運動量についての正規分布であるとしよう。(速度について正規分布だとすれば、光速を超える粒子($v>1$)が統計に入ってしまうため。)
- 温度での分布間の相対誤差の最大値
- カルバっくライブラとか使えるのかな。 -->

<!-- 
## 高温領域での振る舞い


- 一粒子の平均エネルギーや定積比熱が高温極限で、$\epsilon =3T,c_v = 3$に漸近することを思い出す。

$$
    u/nT 
    = \left[3 +a \frac{K_1(a)}{K_2(a)}-a \right]
$$

$$
C_V = N \left[ 3+a^2 -3a \frac{K_1(a)}{K_2(a)} 
-a^2 \left(\frac{K_1(a)}{K_2(a)} \right)^2 \right]
$$

- $a\ll1$において、3以降の項が0に漸近する。
- $K_{\nu}(a)$は$a=0$で発散する負べきで近似される。

$$
K_\nu(a) \sim
\begin{cases}
    -\ln a & (\nu=0) \\
    \frac{\Gamma(\nu)}{2} \left(\frac{2}{a}\right)^\nu  & (\nu>0)
\end{cases}
$$

$$
    \frac{K_1(a)}{K_2(a)} \to \frac{a}{2}
$$ -->


## 第二種変形ベッセル関数


> 諸量の計算では第二種変形ベッセル関数$K_{\nu}(a)$が登場するが、$\nu$が整数のとき、微分を含む式や、$\nu=3$以上の$K_{\nu}(a)$は漸化式を用いて、$\nu=1,2$の計算に落とすことができるので、
$K_1(a), K_2(a)$の振る舞いを知っているとよい。

### $K_{\nu}(a)$の定義

いくつかの方法で$K_{\nu}(a)$を定義できる。定義の仕方によって、定義域が異なるので注意。
$\nu$は一般に実数である。


- 第二種変形ベッセル関数の積分表示
- $Re(a)>0$
- $Re(\nu)>-1/2$
- $z(z^2-1)^{\nu-\frac32}$部分の部分積分で以下二式は等しいことを確認可能。

$$
\begin{align*}
K_{\nu}(a) &= 
\frac{\sqrt{\pi}}{ \Gamma(\nu-\frac{1}{2})} \left( \frac{a}{2}\right)^{\nu-1}  \int_{1}^{\infty} dz \, z (z^2-1)^{\nu-\frac32} e^{-az}\\
K_\nu(a)  & = 
\frac{\sqrt{\pi}}{\Gamma(\nu + \tfrac12)} \left( \frac{a}{2}\right)^{\nu} 
\int_{1}^{\infty} dz \, (z^2-1)^{\nu-\tfrac12} e^{-a z} 
\end{align*}
$$


- $Re(a) > 0$
- $\nu$は任意

$$
K_\nu(a)=\int_0^\infty e^{-a\cosh u}\cosh(\nu u) du
$$

---

$K_\nu(x)$は変形ベッセル微分方程式を満たす。

$$
    x^2 y'' + xy' - (x^2 + \nu^2)y = 0
$$

便利な公式。

$$
    K'_n(x) =  -K_{n-1}(x) -\frac{n}{x} K_n(x)
$$

$$
    K_{n+1}(x) = K_{n-1}(x) + \frac{2n}{x} K_n{x}
$$



<img src="img/jut_MBF2.svg" alt="説明" width="1000" height="350">


### 近似

- 以上のグラフにあるように$x>0$の実軸上では、正で単調に減少する関数である。
- $x=0$でべき的に発散し、$x\gg1$で指数的に減衰する。

- $a \gg 1$

$$
    K_{\nu}(a) \approx 
    \sqrt{\frac{\pi}{2a}} e^{-a}  \left[1 + \frac{4\nu^2-1}{8a}  + \frac{(4\nu^2-1)(4\nu^2-9)}{2! (8a)^2  } + ... \right]
$$

- $a\ll 1$

$$
K_\nu(a) \sim
\begin{cases}
    -\ln a & (\nu=0) \\
    \frac{\Gamma(\nu)}{2} \left(\frac{2}{a}\right)^\nu  & (\nu>0)
\end{cases}
$$






- より高精度の$K_{0}(x)$のx<<1漸近展開は：
- $\gamma$ : euler定数

$$
K_0(x) = -\ln\left(\frac{x}{2}\right) - \gamma
\frac{x^2}{4} \left( 1 - \gamma - \ln\left(\frac{x}{2}\right) \right)
* O(x^4 \ln x)
$$

$$
\ln 2 - \gamma \approx 0.11593…
$$

- K_nu(x)近似式(x<<1)の相対誤差評価

<img src="img/MBS2_err.svg" alt="説明" width="1000" height="350">



<!-- ### 実用的で精度の良い近似

$$
g(\Theta) \equiv \frac{u}{k_B T}
$$

精密な数値評価（Bessel の比）から以下のPade 型近似が得られ、0 ≤ Θ ≤ 2で非常に良い精度（最大絶対誤差 $\lesssim 4.3\times10^{-3}$, 相対誤差 $≲0.002$ 程度を示す：

$$
    g(\Theta) \approx 3 - \dfrac{1.5}{1 + 1.30192031 \Theta + 0.07037686 \Theta^{2}}
$$



この式は非相対論極限（Θ→0）と超相対論極限（Θ≫1）の両方を滑らかに結び、Θ=0..2 の領域で使いやすい。



## 低温展開

Θ≪1 のときのテイラー展開。1粒子当量

$$
\frac{u}{k_B T} = \frac{3}{2} + \frac{15}{8} \Theta - 1.7207466 \Theta^{2} + \mathcal{O}(\Theta^3).
$$

よって（密度 (n) を掛けて）

$$
U \approx n T\left( \frac{3}{2} + \frac{15}{8}\Theta - 1.7207466 \Theta^{2} \right)
$$

最初の 2 項$\tfrac32 + \tfrac{15}{8}\Theta$はよく見かける近似で、Θ≲0.1 程度なら十分に良いが、Θ が 0.5〜2 のあたりになると 2 次項まで入れても誤差が増えるので上の Pade 近似を使うのが無難。 -->




