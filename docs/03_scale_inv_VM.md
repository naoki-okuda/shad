## コリジョンレスプラズマのスケール変換不変性について

Maxwell-Vlasov系で記述されるコリジョンレスなプラズマはスケール変換不変性を持つことが知られている。二つの時空間スケールの異なる現象が適切な物理量の変換でつながる場合、それらを同一視できるという意味で、重要な操作である。

例を挙げると、実験室のプラズマ現象を宇宙スケールの現象に再解釈するなどといったことが可能になる。
あるいは、Particle-In-Cell法に代表されるプラズマのシミュレーション手法において、しばしば正規化単位系が使用される。そのような単位系を設定する強い動機としてコリジョンレスプラズマのスケール変換不変性が関わっている。



本記事では、Maxwell-Vlasov系が満たす、スケール変換不変性を確かめてみる。加えて、電磁場が当該のスケール変換不変性を満たすときに質点の軌道もスケール不変になることを確認する。後半では、変換の物理的な解釈、適用範囲、正規化単位系について言及する。



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

質量$m$, 電荷$q$を持つ質点の運動に対して、規格化された電磁場の振幅(normalized amplitude) $a_0 = \frac{eE}{m\omega c}$は粒子運動の電場中の相対論的な非線形性を特徴づける無次元量である。大雑把に振動電場中の代表的運動量と、光速に漸近する運動量$mc$の比である。

$$
a_0 = \frac{eE}{m\omega c} = \frac{p_{os}}{mc}
$$

これはスケール変換の前後で不変になる。
時空間スケールを $a$ 倍にするなら、電場も $a$ 倍にすれば、粒子の運動は同じになることは前節で確認した。


$$
\frac{E'}{\omega'} = \frac{a E}{a \omega} = \frac{E}{\omega}
$$


###  プラズマの密度と誘電応答

密度 $n = \int f dv$ は分布関数の速度空間積分で$f$に比例する。速度分布は変わらず、分布関数は$a^2$倍されるため、$n'= a^2 n$ となる。

電子・イオンプラズマ振動数はプラズマの密度の平方根に比例する。

$$
  \omega_{p} \propto \sqrt{n} \to \omega'_p = a \omega_p
$$

$$
\frac{\omega'_p}{\omega'} = \frac{a \omega_p}{a \omega} = \frac{\omega_p}{\omega}
$$

電磁波の臨界密度 $n_c$ は周波数の二乗に比例する。（$n_c \propto \omega^2$）。

$$
\frac{n'}{n_c'} \propto \frac{a^2 n}{(a\omega)^2} = \frac{n}{\omega^2}
$$
    
時空間スケールを変動するなら、対応して密度を $a^2$のファクタで変動させればプラズマの誘電応答は変わらない。



### Debye長とグリッド解像度
Debye長 $\lambda_D \propto v_{th}/\omega_p$
密度が $a^2$ 倍になると、デバイ長は$1/a$ 倍になる。（$v_{th}$は不変）。
系の空間スケールも $1/a$ 倍になる。

$$
\frac{\lambda_D}{x} =  \frac{\lambda_D'}{ x'}
$$

数値計算的にはDebye長あたりのグリッド数が保存される。
PICの計算条件として、理想的には空間方向でデバイ長を切ることが望ましい。
だからPICの数値安定性を議論する上で都合が良い。


## スケール変換の適用範囲

### プラズマパラメータ・集団性と個別性

デバイ球当たりの粒子数を表す無次元量

$$
N_D = n \lambda_D^3 \propto n^{-1/2}
$$

プラズマパラメータは、プラズマが集団的な媒質として振る舞うか、それとも個々の粒子の衝突が支配的になるかを判定する指標である。
スケール変換$n \to a^2 n$に対して、プラズマパラメータは変化してしまう。

$$
N_D \to \frac{N_D}{a}
$$

これは、スケール変換によってMaxwell–Vlasov方程式の数学的構造は保存される一方で、その適用条件は保存されないことを意味する。

空間・時間スケールを小さくする側の変換（$a>1$）では密度が増加し、デバイ球内の粒子数が減少するため、粒子の離散性が顕在化する。
この極限ではクーロン散乱などの二体衝突過程が無視できなくなり、Vlasov 近似そのものが破綻する方向に進む。

衝突周波数の観点から、プラズマパラメータは

$$
N_D \propto \frac{T^{3/2}}{n^{1/2}}
\propto \frac{\omega_{pe}}{\nu_{\mathrm{collision}}}
$$

と解釈できる。したがって $a$ を大きくする変換は、「集団的電磁応答が支配的なレジーム」から「衝突による緩和が無視できないレジーム」へ系を押しやる操作に対応する。

Vlasov系で仮定されている「コリジョンレス」とは、粒子間の$r^{-2}$のクーロン場を直接扱わず、平均場としての電磁場に対する集団応答のみを記述するという近似である。
すなわち、荷電粒子の点粒子性を捨て、電荷シートのような連続媒質として扱っている。デバイ球内の粒子数が減少すると、この平均場近似が成立しなくなり、点粒子性やクーロン散乱が顕在化する。
<!-- 
Vlasov系で仮定されているコリジョンレスとは、プラズマを構成する荷電粒子の「点粒子性」を捨て、連続的な荷電シートや平均場に対する応答として粒子集団を眺めるということだ。だから基礎方程式レベルでは電荷の大きさが質量・電荷間の比率でしか効いてこない。
デバイ球内部の粒子が減少することで、点粒子性・クーロン散乱の顕在に対応する。 -->

一方、密度を下げ、空間スケールを拡大する側の変換（$a<1$）では、デバイ球内の粒子数が増加し、集団場近似の精度は向上する。この方向では Vlasov 方程式の有効性はむしろ強化される。したがって、実験室スケールで成立するコリジョンレスプラズマの結果を、より希薄で大規模な宇宙プラズマへスケール変換して解釈することは、一定条件下では物理的に正当化される。





## 近似の有効範囲と数値手法との関係

Maxwell–Vlasov 系のスケール変換不変性は、「無衝突・古典・連続体近似」が成立している範囲でのみ有効である。言い換えればMaxwell-Vlasov系で暗黙的に捨てられた物理スケールの顕在化がスケール変換を壊す。例えば、

- 点粒子効果
クーロン散乱、制動輻射、トムソン散乱など、粒子周りの $r^{-2}$ 電場構造が直接効く過程。
- 量子効果
電離、縮退、量子統計効果など、古典粒子近似が破綻する領域。


PIC 法は、本質的にこの「平均場近似」に基づくコリジョンレス系の数値実装である。
PIC における電磁場 $E,B,j$ は、有限体積 $\delta V$ と時間幅 $\delta t$ にわたって多数の超粒子が作る粗視化された平均場に対応している。


さらに、境界条件や外部駆動は Vlasov 方程式のスケーリングに必ずしも従わない場合があり、実問題ではここがスケール相似性を破る要因になり得る。





## プラズマに対する正規化単位系

スケール変換の議論から、時空間を含む物理量の組み合わせには、定数倍に対応する一つの自由度が残ることが分かる。
この性質を利用して物理量を無次元化する枠組みが、いわゆる正規化単位系（normalized units）であり、プラズマ数値計算では標準的に用いられている。


### 電子密度を基準にした正規化

基準となる電子数密度 $n_{e,0}$ を用いると、例えば次のような正規化が定義できる。

$$
\begin{align*}
\bar{n}  &= \frac{n}{n_{e,0}}\
\omega_0 &= \sqrt{\frac{4\pi n_{e,0} e^2}{ m_e}}\
\bar{t} &= t \omega_0\
\bar{\omega}_p &= 1\
\bar{x} &= \frac{x \omega_0}{c}\
\bar{p} &= \frac{p}{m_e c}\
\bar{E} &= \frac{e E}{m_e c \omega_0}\
\bar{B} &= \frac{e B}{m_e c \omega_0}
\end{align*}
$$

このとき $n_{e,0}$ は、必ずしも物理的に固定された密度である必要はない。
スケール変換に対応する自由度が残っているため、無次元化された解から実際の物理系への復元には定数倍の不定性が存在する。



### 外部周波数を基準にした正規化

一方で、系に特徴的な外部周波数 $\omega_L$（例えばレーザー周波数）が存在する場合には、次のような正規化も自然である。

$$
\begin{align*}
\bar{t} &= t \omega_L\
\bar{\omega} &= \frac{\omega}{\omega_L}\
\bar{x} &= \frac{x \omega_L}{c}\
\bar{n} &= \frac{n}{n_c} = \frac{4\pi e^2 n}{m_e \omega_L^2}\
\bar{p} &= \frac{p}{m_e c}\
\bar{E} &= \frac{e E}{m_e c \omega_L}\
\bar{B} &= \frac{e B}{m_e c \omega_L}
\end{align*}
$$

ここでは、プラズマ周波数 $\omega_p$ が $\omega_L$ に一致する密度

$$
n_c = \frac{m_e \omega_L^2}{4\pi e^2}
$$

を用いて密度を正規化している。
$\omega_L$ が電磁波の角周波数である場合、これは臨界密度に対応する。



---

初稿アップロード: 2026 01 30
正規化単位系の記述を追加 : 2026 01 31
