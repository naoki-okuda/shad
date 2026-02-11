
## L.L. physical kinetics  / problem p.173 

### クーロン散乱による分布関数摂動のダンピング

!!! info
    英語版Lifshitz Pitaevskii Physical Kineticsの流れを追いながら、私の理解度に合わせて行間を埋めたノートです。
    
    Landau減衰でプラズマ波（静電場と電子密度揺動）がダンプされた後にも分布関数レベルでは揺動が残ります。このような揺動がクーロン散乱で減衰する時間スケールについて論じる設問です。

Section 34において示したように、
波数$k$の電子密度揺動がランダウ減衰により除かれたあと、その分布関数の摂動は$e^{i k\cdot vt }$(34.16)として振動し続ける。このような振動が時刻$t \gg 1/k\bar{v}$において、クーロン衝突により減衰されることを確認せよ。$\bar{v}$は分布の代表的な速さを表している。


$$
\begin{align}
    f = f_0 + \delta f,\quad \delta f =a(t,v) e^{-i k\cdot v t + i k \cdot r}
\end{align}
$$

ここで、$\delta f$は平衡状態の分布関数$f_0$からの摂動を表す。そして、$a(v,t)$はゆっくりと変化する、速度の関数である。ゆっくりとはすなわち$\sim \bar{v} \gg 1/kt$程度の時間をかけて、あらわに変化する程度である。
この分布関数の表式を(41.12)に代入して、非積分関数の次の項のみを考える必要がある。

$$
    s_{\alpha} = \sum 2\pi (e e')^2 L \int d^3 p' \, \left( f \frac{\partial f'}{\partial p'_{\beta}} - f' \frac{\partial f}{\partial p_{\beta}}\right) \frac{(v-v')^2 \delta_{\alpha\beta}- (v_{\alpha}-v'_{\alpha})  (v_{\beta}-v'_{\beta}) }{|v-v'|^3}
$$


$$
-f_0(p') \frac{\partial \delta f(p)}{\partial p_{\beta}} \approx\frac{i}{m} k_{\beta} t \delta f(p) f_0 (p') 
$$

残りの項は小さな寄与しかない。なぜなら、速く振動する因子$e^{-i k \cdot v' t}$の積分で消えるか、あるいは因子$kt \gg 1/\bar{v}$を含まないからである。また、後者の理由によって、$div_p s$の計算のためには指数の因子のみが微分される必要がある。
結果として、輸送方程式は、

$$
    \frac{\partial f}{\partial t} + v \cdot \frac{\partial f}{\partial r}= -div_p s \\
$$

$$
    (\rm{LHS}) 
    = \left ( \frac{\partial a}{\partial t}+ ik\cdot v-ik\cdot v  \right) e^{-ik\cdot v t +ik\cdot r}
   = \frac{\partial a}{\partial t} e^{-ik\cdot v t +ik\cdot r}
$$

$$
\begin{align*}
    (\rm{RHS}) &\approx 
\sum 2\pi (e e')^2 L \int d^3 p' \, \frac{-k_{\alpha} k_\beta t^2 }{m^2} \delta f(p) f_0 (p')  \frac{(v-v')^2 \delta_{\alpha\beta}- (v_{\alpha}-v'_{\alpha})  (v_{\beta}-v'_{\beta}) }{|v-v'|^3}\\
&= 
\sum -k_\alpha k_\beta t^2 \delta f(p)  2\pi (e e')^2\ L \int d^3 p' f_0 (p') 
\frac{(v-v')^2 \delta_{\alpha\beta}- (v_{\alpha}-v'_{\alpha})  (v_{\beta}-v'_{\beta}) }{|v-v'|^3}\\
&=
- \sum k_\alpha k_\beta t^2 a e^{-ik\cdot v+i k\cdot r} b_{\alpha \beta} 
\end{align*}
$$

!!! note
    ここで、摂動成分のvlasov移流項の部分で振幅に対する寄与しか残らないのは、指数部分が右辺に衝突散乱がないときのvlasovを解いたような結果（自由粒子的に流れている集団）に相当しているからだ。

従って、

$$
    \partial_t a = - \sum k_\alpha k_\beta t^2  b_{\alpha \beta}(v) \, a
$$

時間方向で積分してしまって、

$$
    a(t,v) = a_0(v) \exp {\left[   - \sum k_\alpha k_\beta  b_{\alpha \beta} \, \frac{t^3}{3}
    \right ]}
$$

($\sum$は今電子だけなので$e'=e$としてとって良い。)

後ろのモーメント積分は(41.8)のLaudau衝突演算子の拡散テンソル$B_{\alpha \beta}$ の平衡分布関数上における平均のようなものだ。なので非摂動成分に対する平均的な衝突周波数$\sim \nu \bar{v^2}$のようなものになる。

$$
\begin{align}  
    a(t,v) \sim  a_0(v) \exp{\left[ -k^2\bar{v}^2 \nu t^3  \right]}
\end{align}
$$

振動の減衰を特徴づける時間は、

$$
\tau_d \sim \frac{1}{(k^{2} \bar{v}^{2}\nu)^{1/3}}
$$

Landau減衰の理論全体は$k\bar{v} \gg \nu$のときのみ有効であるため、この条件を$\tau_d$を使って書き直すと$\tau_d\ll \nu^{-1}$を得る。つまり、ランダウ減衰で現れるような分布関数の摂動成分が衝突散乱でダンピングされる時間は衝突周波数が特徴づける時間よりもずっと短い。

(2)式の結果は指数部が(1)式の指数部$kvt$よりも小さい時に正しい。というのは、もしそうであれば$t\ll(\nu k \bar{v})^{-1/2}$を得る。この時刻には、振動は$\exp(-\sqrt{k\bar{v}/\nu}) \ll 1$の因子でダンプされている。


---

### 拡散テンソル部分の計算

拡散テンソル$B_{\alpha \beta}$ の平衡分布関数上における平均をもう少しまじめに評価して、以上で用いた近似$b_{\alpha \beta}\sim \nu \bar{v^2}$を確認してみる。

クーロン対数などの係数を除いた部分は、

$$
\begin{align*}
I_{i,j}(v) = &\int d^3 v' f_0 (v') \frac{(v-v')^2 \delta_{ij}- (v_{i}-v'_{i})  (v_{j}-v'_{j}) }{|v-v'|^3}
\end{align*}
$$


これはベクトル$v$だけに依存する２階のテンソル。特に非摂動分布関数$f_0(v)$が回転対称な関数のとき、非対角成分は0になる。

例えば、$v \neq0$のとき、$O_{ij}v_j=(0,0,v)$となるような直交変換$O_{ij}O_{jk}=\delta_{ik}$を与えて、作用すると、


$$
\begin{align*}
O_{k,i}O_{l,j}I_{i,j}(v) 
= 
&\int d^3 v' f_0 (v') \frac{(v-v')^2 \delta_{kl}- (v\delta_{kz}- O_{ki}v'_{i})  (v\delta_{lz}- O_{lj}v'_{j}) }{|v-v'|^3}\\
\end{align*}
$$

$u_i = O_{i,j} v'_j$と積分変数を取り替えて、

$$
\begin{align*}
 I'_{kl} \equiv O_{k,i}O_{l,j}I_{i,j}(v) = &\int d^3 u f_0 (q) \frac{(v-u)^2 \delta_{kl}- (v\delta_{kz}- u_k)  (v\delta_{jz}- u_l) }{|v-u|^3} \\
\end{align*}
$$

$$
    I_{i,j} = O_{i,k}O_{j,l} I'_{jl}
$$

ここで、$, d^3u = d^3v'$。回転対称の仮定から$f_0(p'_i) = f_0(O_{ik} q_k) =f_0(q_k)$を使った。

$I'$は座標を取り替えて、ベクトル$v$をわかりやすい位置に持ってきた時のテンソルに相当している。テンソルの非対角成分${k\neq l}$をみると、奇関数なので、0になることがわかる。
すなわちこの座標系でテンソルが対角化されている。かつ対角成分は正である。

(1,2)成分は、

$$
\begin{align*}
O_{i,1}O_{j,2}I_{i,j}(v) = &\int d^3 qf_0(q)\frac{- u_1u_2}{|v-u|^3}=0\\
\end{align*}
$$

(1,3)成分は

$$
\begin{align*}
O_{i,1}O_{j,3}I_{i,j}(v) = &\int d^3 qf_0(q)\frac{u_1(v-u_2)}{|v-u|^3}=0\\
\end{align*}
$$

(1,1),(2,2)成分は、

$$
\begin{align*}
O_{i,1}O_{j,1}I_{i,j}(v) =O_{i,2}O_{j,2}I_{i,j}(v)
&=\int d^3 qf_0(q)\frac{v^2-2vu_3+u_3^2+u_2^2}{|v-u|^3}\\
&=\int d^3 qf_0(q)\frac{v^2-2vu_3+u_3^2+u_1^2}{|v-u|^3}\\
&=\int d^3 qf_0(q)\frac{(v-u_3)^2 + u^2}{2|v-u|^3} >0
\end{align*}
$$


(3,3)成分は、

$$
\begin{align*}
I'_{3,3}(v) 
&= \int d^3 qf_0(q)\frac{(v-u)^2-(v-u_3)^2}{|v-u|^3}\\
&= \int d^3 qf_0(q)\frac{u_1^2+u_2^2}{|v-u|^3} > 0\\
\end{align*}
$$

これらは被積分関数が正なので、積分で相殺して0になるようなことが起こらないことが確認できる。


非摂動成分としてガウシアンを仮定すると、
(3,3)成分は、

$$
\begin{align*}
    I'_{3,3} (v) &= \sqrt {\frac{1}{2\pi v_T^2}}^3 \int d^3 u \, e^{-(u^2 /2v_T^2)}\frac{u_1^2+u_2^2}{|v-u|^3} \\
     &= \sqrt {\frac{1}{2\pi v_T^2}}^3 \int du_{\perp} du_3\,  e^{-(u^2 /2v_T^2)}\frac{2\pi u^3_{\perp}}{((v-u_3)^2 + u_{\perp}^2)^{3/2}}\\
     &= \frac{1}{v_T \sqrt{2 \pi}}  \int du_{\perp} du_3\,  e^{-u^2}\frac{ u^3_{\perp}}{((v/v_T-u_3)^2 + u_{\perp}^2)^{3/2}}\\
\end{align*}
$$

オーダー評価で、積分領域$u$は指数の因子で$O(1)$以外の場所は寄与しない。
$v/v_T \ll1$の時、非積分関数はほとんどuの関数かつ分子分母は同次なので、オーダー１つまり、$I'_{3,3}\sim 1/v_T$。

一方、$v \gg v_T$のとき、分母がv/v_Tに支配的になると思って非積分関数の外に出せる。


$$
 \int du e^{-u^2} \frac{u_{\perp}^2}{(v/v_T)^3} = \frac{v_T^3}{v^3} \int du e^{-u^2} u^2_{\perp}
 = \frac{v_T^3}{v^3} O(1)
$$


つまり、$I'_{3,3} \sim v_T^2/v^3 \propto \nu v_T^2$。これで冒頭の計算で用いた近似が得られた。

この計算結果の物理的意味は明瞭で、高速粒子$v\gg v_T$に対して、背景粒子はほぼ静止して見え、クーロン散乱は$\sim 1/v^3$ で弱くなるという事実に対応している。



