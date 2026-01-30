## コリジョンレスプラズマのスケール変換不変性について

Maxwell-Vlasov系で記述されるコリジョンレスなプラズマはスケール変換不変性を持つことが知られている。二つの時空間スケールの異なる現象が適切な物理量の変換でつながる場合、それらを同一視できるという意味で、重要な操作である。

例を挙げると、実験室のプラズマ現象を宇宙スケールの現象に再解釈するなどといったことが可能になる。
あるいは、Particle-In-Cell法に代表されるプラズマのシミュレーション手法において、しばしば正規化単位系が使用される。そのような単位系を設定する強い動機としてコリジョンレスプラズマのスケール変換不変性が関わっている。

本記事では、Maxwell-Vlasov系が満たす、スケール変換不変性を確かめてみる。加えて、電磁場が当該のスケール変換不変性を満たすときに質点の軌道もスケール不変になることを確認する。いくつかの物理的な解釈について言及する。



## スケール変換不変性が適用できない場合

!!! note
    予め、スケール変換の適用範囲について注意する。

    スケール変換に対する不変性はいつも成立するわけではない。むしろ、電磁場プラズマ系は一般にはスケール変換不変性を示さない。スケール不変性を壊す要因が十分に無視できる程度に小さいときに適用可能な性質であると理解するべきだ。
    
記事の後半で立ち入って説明する。ここでは、スケール変換不変性を壊す可能性があるために、気をつけるべき数例をあげる。

- 二体衝突・点粒子性・クーロン相互作用・$r^{-2}$のポアソン場
- 量子効果・原子過程
- 放射・エネルギー損失過程
- 境界条件・外部スケール



## Maxwell-Vlasov系のスケール変換

!!! note
    電気定数$\epsilon_0$について$4\pi \epsilon_0 = 1$かつ、光速=1とする。

$f(x,v,t), E(x,t), B(x,t)$が次の方程式(Maxwell-Vlasov方程式系)を満たす解だとする。
それぞれ、分布関数、電場、磁場に対応している。ここで、$e$は電荷、$m$は質量を表している。単一粒子種の分布関数を想定するが、以降の議論を複数粒子種に拡張することは簡単である。

$$
\begin{align*}
 \frac{\partial E}{\partial t} &= -4 \pi \int  e v  f d^3v + \nabla \times B\\
 \frac{\partial B}{\partial t} &= -\nabla  \times E\\
 \nabla \cdot E &= 4 \pi \int e fd^3 v\\
 \nabla  \cdot B &= 0 \\
 \frac{\partial f}{\partial t} + v\cdot \frac{\partial f}{\partial x}& 
  + \frac{q}{m}(E + v \times B) \cdot \frac{\partial f}{\partial v} = 0
\end{align*}
$$


この時、次のような関数のセット$(D,H,g)$も同じ方程式の解になるのではないか、と考える。

$$
  \begin{align*}
  D(x,t)    &\equiv p E(ax,bt)\\
  H(x,t)    &\equiv q B(ax,bt)\\
  g(x,t, v) &\equiv r f(ax,bt,cv)
  \end{align*}
$$

変換後の関数は独立変数の方向に、定数倍$a,b,c$で伸縮された形をしており、同時に大きさに関して定数倍$p,q,r$の補正を受けている。変換された関数のセットが再び、一切の変更も受けていないMaxwell-Vlasovを満たすためにはどのような$a,b,c,p,q,r$が許されるだろうか。


$D, H, g$に対する微積分を整理すると、

$$
  \begin{align*}
    \frac{\partial D}{\partial t} &= pb \frac{\partial E}{\partial t}(ax,bt)\\
    \nabla \times D & = pa (\nabla \times E)(ax,bt)\\
    \frac{\partial H}{\partial t} &= qb \frac{\partial B}{\partial t}(ax,bt)\\
    \nabla \times H & = qa (\nabla \times B)(ax,bt)\\
    \frac{\partial g}{\partial t} &= rb \frac{\partial f}{\partial t}(ax,bt)\\
    \frac{\partial g}{\partial x} &= ra \frac{\partial f}{\partial x}(ax,bt)\\
    \frac{\partial g}{\partial v} &= rc \frac{\partial f}{\partial v}(ax,bt)\\
    \int d^3v g(x,t,v) &= \int d^3v rf(ax,bt,cv) \\
      &= r/c^3 \int d^3(cv) f(ax,bt,cv)\\
    \int d^3 v g(x,t,v) &= r /c^4 \int d^3(cv)cv f(ax,bt,cv)
  \end{align*}
$$

$(f,E,B)$がmaxwell-vlasovの解であることを考えれば、任意の独立変数の組み合わせ$(x,t,v)$の下で、maxwell-vlasovが成立している。したがって、$(x\to ax,t \to bt,v \to cv)$を代入した数値でもMaxwell-Vlasovが成立している。

例えば、Faraday則を見て、

$$
\begin{align*}
  \left( \frac{\partial B}{\partial t} +\nabla  \times E  = 0\right)_{(x \to ax,t \to bt)}\\
  \frac{1}{qb} \nabla \times H(x,t) + \frac{1}{pa}\frac{\partial D}{\partial t} (x,t) = 0
\end{align*}
$$

一方、$(H,D)$が同じFaraday則を満たすことを要求すると、

$$
\begin{align*}
  \nabla \times H(x,t) +\frac{\partial D}{\partial t} (x,t) = 0
\end{align*}
$$

係数を比較して$qb/pa = 1$を得られる。
同じ方法でMaxwell方程式を全て比較すると、

$$
\begin{align*}
  qb &= pa\\
  pb &= qa\\
  pb &= r/c^4 \\
  pa &= r/c^3
\end{align*}
$$

なので、これらを整理すると、$p=q, a=b, c=1, r=ap$

次にvlasov方程式で係数を比較して、

$$
\begin{align*}
  \frac{\partial f}{\partial t} + v\cdot \frac{\partial f}{\partial x} + \frac{e}{m}(E + v \times B) \cdot \frac{\partial f}{\partial v} 
  &= 0 \, | _{x\to ax,t \to at,v \to v} \\
  \frac{1}{a}\frac{\partial g}{\partial t} + \frac{1}{a}v \cdot \frac{\partial g}{\partial x} + 
  \frac{1}{p}( \frac{e}{m} (D + v\times H)) \frac{\partial g}{\partial v}&= 0 
\end{align*}
$$

よって$a=p$。
整理すると、

$$
\boxed{
\begin{align*}
  a=b&=p=q,\\
  r&= a^2\\
  D(x,t) &= aE(ax,at) \\
  H(x,t) &= aB(ax,at)\\
  g(x,t) &=a^2 f(ax,at,v)
\end{align*}
}
$$



### 境界の処理

解($f,E,B$)が時間的に$t\in[0:t_0]$の範囲でVlasovーMaxwellを満たしているとすると、スケール変換された関数のセットは$t \in [0:t_0/a]$の時間範囲で成立すると思えばいい。空間方向も同様に領域のサイズをaでリスケールすれば良い。





## 粒子軌道に対するスケール変換の整合性

前節ではMaxwell–Vlasov系の場と分布関数が自己相似変換に対して不変であることを確認した。
ここでは、このスケーリングが個々の粒子運動方程式とも整合していることを確認する。

!!! note
    上記の非相対論的なMaxwell-Vlasovの場合は相対論的な粒子運動が考慮に入っていないが、ここでは相対論的な運動方程式に従う質点の軌道を考えてみる。

解軌道$x(t)$を得ていたとしよう。これは変換前に以下の方程式を満たしていた。

$$
   \dot{u}(t) = \frac{q}{m} [E(x(t),t) + \frac{u}{\gamma} \times B(x(t),t)]
$$

<!-- vで書き直した方が意外と見やすい。

$$
   \frac{\dot{v}}{\gamma}-\frac{v_j \dot{v}_j}{\gamma^3} v = \frac{q}{m} [E(x(t),t) + v \times B(x(t),t)]
$$ -->


いま、場のスケール変換に整合するように、粒子軌道をスケールする。

$$
D(x,t)=aE(ax,at), \quad
H(x,t)=aB(ax,at)
$$


$$
x'(t) = \frac{1}{a} x(at)
$$


分布関数の議論と同様に、$(x, E, B)$の組みで満たされる関係式が、$(x', D, H)$間に同様の関係式として成立すれば良い。$'$付きで変換後の変数を表すとする。

$$
  \frac{dx'}{dt}(t) = \frac{dx}{dt}(at), \quad \frac{d^2 x'}{dt^2} =  a \frac{d^2 x}{dt^2}
$$

$$
\begin{align*}
  \frac{du'}{dt}(t) &= a \frac{du}{dt}(at) \\
  &=  a\frac{q}{m} [E(x(at),at) + \frac{u}{\gamma} \times B(x(at),at)] \\
  &=  \frac{q}{m} [aE(ax'(t),at) + \frac{u}{\gamma} \times aB(ax'(t),at)] \\
  &=  \frac{q}{m} [D(x'(t),t) + \frac{u}{\gamma} \times H(x'(t),t)] \\
\end{align*}
$$




したがって、Maxwell–Vlasov 系のスケール変換不変性は、
場の分布だけでなく、粒子軌道レベルにおいても自己相似的に保存される。
これはPIC法において、超粒子の運動がスケール変換の解釈に関わらず、
同じ粒子軌道を描くことの根拠となる。



---

## 物理的な解釈

スケール変換の自由度は1で、プラズマと電磁場の時空間分布をaの因子で引き伸ばすと、対応して電磁場強度をa,密度をa^2のファクタで変動させれば、系の運動は全く同じ解で表現される。

上記のスケーリング因子$a$を例えば、「周波数の倍率」　($a = \omega' / \omega$) と解釈する。座標変換 $(x, t) \to (x/a, t/a)$ は、波長と周期を $1/a$ 倍（高周波・短波長化）にすることに対応する。

例えば、波長$1 \rm{\mu m}$のレーザー光を適当な密度プロファイルに打ち込んだ時の時間発展は、
波長が$0.5 \rm{\mu m}$のレーザー光($a=2$の場合)を打ち込む現象に解釈し直すことができる。
すなわち、構成粒子の速度分布をそのまま($c=1$)、電磁場と密度の初期空間プロファイルを保ったまま空間スケールを$0.5倍$、密度を$a^2 = 4$倍、観測する時間スケールを$0.5$倍、レーザーを含めた電磁場$E,B$の大きさを$a=2$倍にする。こうすれば、二つの現象間で時間発展の見分けがつかないはずだ。

このようなスケールの翻訳操作がコリジョンレスの近似が正しくなる範囲内で正当化される。


### 規格化された電磁場の振幅の不変性

質量$m$, 電荷$q$を持つ質点の運動に対して、規格化された電磁場の振幅(normalized amplitude) $a_0 = \frac{eE}{m\omega c}$は粒子運動の電場中の相対論的な非線形性を特徴づける無次元量である。これはスケール変換の前後で不変になる。

$$
\frac{E'}{\omega'} = \frac{a E}{a \omega} = \frac{E}{\omega}
$$

周波数を $a$ 倍にするなら、電場も $a$ 倍にすれば、粒子の運動（相対論的非線形性）は同じになる


- Maxwell-Vlasovの場合は相対論的な粒子運動が考慮に入っていないので、ここで質点運動の軌道に対して先ほどの変換を試してみる。
- 解軌道$x(t)$を得ていたとしよう。これは変換前に以下の方程式を満たしていた。

$$
   \dot{u}(t) = \frac{q}{m} [E(x(t),t) + \frac{u}{\gamma} \times B(x(t),t)]
$$

<!-- vで書き直した方が意外と見やすい。

$$
   \frac{\dot{v}}{\gamma}-\frac{v_j \dot{v}_j}{\gamma^3} v = \frac{q}{m} [E(x(t),t) + v \times B(x(t),t)]
$$ -->


- 解軌道$x'(t) \equiv x(at)/a$について、

$$
  \frac{dx'}{dt}(t) = \frac{dx}{dt}(at), \quad \frac{d^2 x'}{dt^2} =  a \frac{d^2 x}{dt^2}
$$

$$
\begin{align*}
  \frac{du'}{dt}(t) &= a \frac{du}{dt}(at) \\
  &=  a\frac{q}{m} [E(x(at),at) + \frac{u}{\gamma} \times B(x(at),at)] \\
  &=  \frac{q}{m} [aE(ax'(t),at) + \frac{u}{\gamma} \times aB(ax'(t),at)] \\
  &=  \frac{q}{m} [D(x'(t),t) + \frac{u}{\gamma} \times H(x'(t),t)] \\
\end{align*}
$$




###  プラズマ振動数と電磁波の臨界密度

$n/n_c$

密度 $n = \int f dv$ は分布関数 $f$ に比例するため、$n' \propto a^2 n$ となる。
臨界密度 $n_c$ は周波数の二乗に比例する。（$n_c \propto \omega^2$）。

$$
\frac{n'}{n_c'} \propto \frac{a^2 n}{(a\omega)^2} = \frac{n}{\omega^2}
$$
    
波長を短く（$a>1$）するなら、密度を $a^2$ 倍に上げれば、プラズマの誘電応答は変わらない。



### Debye長とグリッド解像度
Debye長 $\lambda_D \propto v_{th}/\omega_p$
密度が $a^2$ 倍になると、 はデバイ長は$1/a$ 倍になる。（$v_{th}$は不変）。
系の空間スケールも $1/a$ 倍になる。
$\lambda_D/x = \lambda_D'/ x'$がなりたつ。
Debye長あたりのグリッド数も保存される。
PICの計算条件として、理想的には空間方向でデバイ長を切ることが望ましい。
だからPICの数値安定性を議論する上で都合が良い。


### plasmaの適用範囲

   - プラズマパラメータ：デバイ球当たりの粒子数 $N_D = n\lambda_D^3 \propto n^{-1/2}$ はスケーリングで変化する。
   -  $n\to a^2 n$ なら $N_D\to N_D/a$。
   - プラズマパラメータは荷電粒子の集団が十分に「プラズマ」として集団運動するか、近似されるかどうかの基準になる。
   - スケール変換で方程式の構造は確かに保持される。しかし、時空間スケールを大きくする側の変換($a>1$)で、そもそもvlasov方程式の適用範囲を超えてしまうことがある。
   - 物理的な解釈としては、プラズマパラメータは$\Lambda \propto T^{1.5}/n^{0.5} \propto \omega_{pe}/nu_{collision} $なので、$a$を大きくすると粒子の集団性よりも、個別性が重要になるレジームに近づいていく。
   - コリジョンレスの仮定ではプラズマを構成する'点粒子性'が捨てられているが、デバイ球内部の粒子が減少することで、点粒子性が重要になってくる。= クーロン散乱などが重要になる。
   - 逆に密度を薄く、空間スケールを大きくする側の変換$a<1$では、粒子性がどんどん重要ではなくなって、vlasov方程式の近似がよくなる方向性になる。
   - 例えば、実験室のコリジョンレスの結果を宇宙スケールに変換することはある程度正当化される。


こういった性質がPICシミュレーションにおいて正規化単位系が使われる理論的根拠になる。




- Maxwell–Vlasov系のスケール変換不変性は「無衝突・古典・連続体近似」が成立している範囲でのみ有効である。
- スケール変換不変を壊すのは、点粒子周りのr^-2のポアソン場が重要になる場合（クーロン散乱、トムソン散乱、制動輻射など）や、量子効果を含む場合（例えば電離の効果や、電子縮退）など。

- PICの計算手法はいわゆる「コリジョンレス」のプラズマに対応している。(vlasov-maxwell系)
- コリジョンレスとは、粒子のスケールのr^-2ポテンシャルを無視して、平均的なポアソン場しか考えないという仮定に対応している。
- PIC上の場の量（E,B,j）はすべて、$\delta V, \delta t$のグリッド内部の多数の粒子が平均的に作る場($\delta V, \delta t$スケールで阻止化された平均場)に対応している。

ただし、境界条件がvlasov方程式と同様のスケーリングで変化してくれない可能性がある。




## particle in cell の場合

- Maxwell-Vlasov方程式は、Vlasov方程式の部分がローレンツ変換に対して共変な形式で書かれていないので、相対論的領域では以上の議論が使えない。
- 分布関数が質量電荷比が一定の点粒子の集合で近似されている。
- 粒子位置が時間の関数x(t)として表現される。
- 一つ一つの粒子'超粒子'は点電荷を表さない。密度をデバイ長さのスケールで平均場をとって、速度空間でサンプリングした産物。
- ただし、粒子の質量電荷比率を実際の粒子と同じにすることで、コリジョンレスな点粒子の粒子運動と超粒子の粒子運動を同一視できる。
- 場は、E(x,t), B(x,t)








