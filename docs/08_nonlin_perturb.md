# 一次元の非線形拡散の解析解

- 熱容量が空間一様な時の拡散方程式。

$$
    \frac{\partial T}{\partial t} =  - \nabla q
$$


$$
    q = -  \kappa \nabla T
$$

$$
    \kappa =   \kappa_0 T^n 
$$

$$
    \frac{\partial T}{\partial t} = \frac{2}{7} \kappa_0 \frac{\partial ^2 T^{7/2}}{\partial x^2}   
$$

解の空間形状を仮定。(フロント部に典型的な自己相似形)

$$
    T_0 = A(t)*(1-\frac{x}{x_f(t)})^{2/5}
$$

この時、偏微分は

$$
\begin{align*}
    \frac{\partial T_0}{\partial t} &= A'(t)*(1-\frac{x}{x_f(t)})^{2/5} 
    + \frac{2}{5} A(t)*(1-\frac{x}{x_f(t)})^{-3/5} \frac{x v_f(t)}{x_f^2(t)}\\
    \frac{2}{7} \kappa_0 \frac{\partial T_0^{7/2}}{\partial x}
    &= \frac{2}{7} \kappa_0 A^{7/2}(t)* (1-\frac{x}{x_f}) ^{2/5} * \frac{-7}{5x_f} = -q_0\\
    \frac{2}{7} \kappa_0 \frac{\partial^2 T_0^{7/2}}{\partial x^2}
    &= \frac{4}{25} \kappa_0 A^{7/2}(t)* (1-\frac{x}{x_f}) ^{-3/5} * \frac{1}{x_f^2} = Q_0\\
    \end{align*}
$$

A,x_fが満たすべき方程式は以下で与えられる。

$$
\begin{align*}
   A'(t)*(1-\frac{x}{x_f(t)})^{2/5} 
    + \frac{2}{5} A(t)*(1-\frac{x}{x_f(t)})^{-3/5} \frac{x v_f}{x_f^2}
    &= \frac{4}{25} \kappa_0 A^{7/2}(t)* (1-\frac{x}{x_f}) ^{-3/5} * \frac{1}{x_f^2}  \\
    \frac{A'}{A^{7/2}}(1 - \frac{x}{x_f})x_f^2  + \frac{2x v_f}{5A^{5/2}} = \frac{4}{25}\kappa_0\\
    \frac{A'x_f^2 }{A^{7/2}}  +x( \frac{2v_f}{5A^{5/2}} - \frac{A'x_f }{A^{7/2}}) = \frac{4}{25}\kappa_0\\    
\end{align*}
$$

xの係数と定数部分でそれぞれバランスする必要があるので、

$$
    \frac{2}{5}\frac{x_f'}{x_f} = \frac{A'}{A}, \quad x_f=C A^{5/2}
$$

$$
\begin{align*}
    \frac{A' x_f^2}{A^{7/2} }&= \frac{4}{25} \kappa_0 \\
    C^2\frac{2}{5}\frac{d A^{5/2}}{dt}&= \frac{4}{25} \kappa_0 \\
    A &= \left( \frac{2\kappa_0}{5C^2} t + A_0^{5/2} \right) ^{2/5} 
    = A_0\left(\frac{5v_0^2 t}{2\kappa_0 A_0^{5/2}}+1 \right) ^{2/5}\\
    x_f &=  \frac{2\kappa_0}{5C} t + C A_0^{5/2}  = v_0 t + \frac{2 \kappa_0 A_0^{5/2}}{5v_0}\\
\end{align*}
$$


最初の解の仮定に戻して、結局解のフリーパラメータは二個になる。２本の未知関数について解いた積分定数。

$$
\begin{align*}
    T_0(t,x) &= A_0\left(\frac{5v_0^2 t}{2\kappa_0 A_0^{5/2}}+1 \right) ^{2/5} 
    (1-\frac{x}{x_f(t)})^{2/5}\\
    &= A_0 \left[ \frac{5v_0 }{2\kappa_0 A_0^{5/2}} (x_f(t)-x) \right]^{2/5} \\
    &=  \left[ \frac{5v_0 }{2\kappa_0 } (v_0 t -(x-x_0))\right]^{2/5} 
\end{align*}
$$


> 密度が一様(媒質の熱容量が一様)のとき、$2/5$乗のべきで空間的にフロント構造を作る解形状を仮定すると、定数速度の解が出てくる。

### デルタソースからの拡散


- x>0の範囲だけで考えれば、自由境界（断熱的な境界,エネルギーの注入・流出がない）からの自由な拡散に対応している。
- zeldovich p664

$$
    \partial_t T = \kappa_0 \partial_x [T^n \partial_x T]
$$

$$
    \xi =\frac{x}{(\kappa_0 Q^nt)^{ 1/(n+2) }}
$$

- $T(t=0) = Q\delta(x)$, 初期に落とされるエネルギーの総量
- $[Q]=[T*x]$, $[\kappa_0 Q^n t] = [x^{2+n}]$
- $x_f \sim (\kappa_0 Q^nt)^{1/n+2}$
- 広がって薄まるのを相殺できるように、自己相似の係数を選ぶ。

$$
    T(x,t) = \frac{f(\xi)}{t^{1/(n+2)}}
$$

$$
    \begin{align*}
        \partial_t T(x,t) &= \frac{-f- \xi f'}{(n+2)t^{1/(n+2)} t} \\
        \kappa_0 \partial_x [T^n \partial_x T] 
        &= 
        \frac{\kappa_0}{(\kappa_0 Q^n t)^{2/(n+2)}t ^{(n+1)/n+2}} (f^n f')'\\
        &= 
        \left( \frac{\kappa_0}{Q^2} \right)^{n/(n+2)} \frac{(f^n f')'}{t^{1/(n+2)}t}
    \end{align*}
$$

- 次のように取り直した方が係数が綺麗になることがわかる。

$$
    T(x,t) = \left( \frac{Q^2}{\kappa_0 t} \right)^{1/(n+2)}f(\xi)
$$


- 結局解くべき常微分方程式は

$$
\begin{align*}
&(n+2) (f^n f')' + \xi f' + f = 0\\
&f  = K^{1/n}, \quad   K = f^{n}\\
&(n+2) ( K   (K^{1/n} )')' 
+ \xi  (K^{1/n})' + K^{1/n} = 0 \\
\end{align*}
$$

変数変換後、整理すると、

$$
\begin{align*}
(n+2) ( K   (K^{1/n} )')'  &= (n+2)(K^{1/n}/n K')'\\
&= 
\frac{n+2}{n}[ K^{1/n} K'' + \frac{K^{((1/n) -1)K'^2}}{n}]\\
\xi(K^{1/n})' &= \frac{\xi}{n} K^{(1/n)-1} K'
\end{align*}
$$

$$
\begin{align*}
\frac{n+2}{n}[ K^{1/n} K'' + \frac{K^{((1/n) -1)K'^2}}{n}]
+
 \frac{\xi}{n} K^{(1/n)-1} K'+ K^{1/n} 
 &= 0\\
\frac{n+2}{n}[ K'' +  \frac{K'^2}{nK}]
+
 \xi\frac{K'}{nK} + 1 &=0 
\end{align*}
$$

- 解が二次関数で書けると仮定してみる。

$$
K = a\xi^2 + b\xi + c\\
K' = 2a\xi +b\\
K = 2a
$$

- 微分方程式は、

$$
 (n+2) [2a (a\xi^2 + b\xi + c) + (2a\xi+b)^2/n] 
 +(2a\xi +b)\xi  + n(a\xi^2 + b\xi + c) = 0\\
 \xi^2 [(n+2)(2 +4/n)a^2+(2+n)a]  \\
 +\xi [(n+2)(2+4/n)ab +b (1+n)] \\
 +[(n+2) (2ac+b^2/n) +nc] = 0\\
 a = -\frac{n}{2(n+2)}\\
 b = 0\\
 c = 任意
$$

- cの任意性は初期に与える総エネルギーの任意性に対応している。

$$
    K = - \frac{n}{2(n+2)}\xi^2 + c
$$


$$
\begin{align*}
    f &= K^{1/n} =  [ - \frac{n}{2(n+2)}\xi^2 + c]^{1/n}\\
    f &= [\frac{n}{2(n+2)}]^{1/n} [\xi_0^2 - \xi^2]^{1/n} \\
      &= [\frac{n}{2(n+2)}]^{1/n} [\xi_0 + \xi]^{1/n} [\xi_0-\xi]^{1/n} \\
    \end{align*}
$$

- この解もフロントの落ち方はほぼ同じ。　　$(x_f-x)^{1/n}$


### 別の解を探す。
解の空間形状を仮定。(フロント部に典型的な自己相似形)

$$
    T_0 = A(t)*(1- (\frac{x}{x_f(t)})^m )^{2/5}
$$

この時、偏微分は

$$
\begin{align*}
    \frac{\partial T_0}{\partial t} &= A'(t)*(1- (\frac{x}{x_f(t)})^m )^{2/5}
    + \frac{2}{5} A(t)*(1- (\frac{x}{x_f(t)})^m)^{-3/5} \frac{x v_f(t)}{x_f^2(t)}\\
    \frac{2}{7} \kappa_0 \frac{\partial T_0^{7/2}}{\partial x}
    &= \frac{2}{7} \kappa_0 A^{7/2}(t)* (1-\frac{x}{x_f}) ^{2/5} * \frac{-7}{5x_f} = -q_0\\
    \frac{2}{7} \kappa_0 \frac{\partial^2 T_0^{7/2}}{\partial x^2}
    &= \frac{4}{25} \kappa_0 A^{7/2}(t)* (1-\frac{x}{x_f}) ^{-3/5} * \frac{1}{x_f^2} = Q_0\\
    \end{align*}
$$





# 密度勾配の下での伝播


- 密度が一様(媒質の熱容量が一様)のとき、定数速度で進行する解を仮定すると、フロント部分の積分が常微分方程式を解く問題に帰着して、　簡単な二階積分で解が得られる。（ゼルドヴィッチレイザー p.661）

$$
\begin{align*}
\partial_t T &= \kappa_0 \partial_x T^{n}\\
T(x,t) &= T_f(x-vt)\\
\partial_t T  &= -vT_f'\\
\kappa_0 \partial_x T^{n} \partial_x T &=  \kappa_0 ( T_f^n T_f' )'\\
-v T_f + c_1 &= \kappa_0 T_f^{n} T_f',\quad c_1=0(T_f = 0)\\
-1 &= \frac{\kappa_0}{v} T_f^{n-1} T_f' \\
-1 &= \frac{\kappa_0}{n v} (T_f^{n})'\\
x-vt-(x_0-vt_0) &= \frac{\kappa_0}{n v} T_f^{n} \\
T_f(x-vt) &= [\frac{nv}{\kappa_0}(x-vt-(x_0-vt_0))]^{1/n}
\end{align*}
$$


- 熱容量がexpに空間変化する媒質中の非線形拡散を考える。

$$
    \frac{\partial T}{\partial t} = \frac{2}{7} e^{-x/L} \kappa_0 \frac{\partial ^2 T^{7/2}}{\partial x^2}   
$$

- 同様の発想で、以下の

$$
x_f \sim L\ln{t}
$$

$$
T_L(x-aL\ln{t})
$$


$$
\frac{\partial T_L(x-L\ln{t})}{\partial t} = -\frac{aL T_L'}{t}
$$


$$
\frac{\partial^2 T_L^{7/2}(x-L\ln{t})}{\partial x^2} =  (T_L^{7/2})''
$$


$$
    \xi = x-aL\ln{t}
$$


$$
    -\frac{aL}{t}\frac{dT_L}{d\xi}=\frac{2}{7}e^{-x/L}\kappa_0 \frac{d^2 T^{7/2}}{d\xi^2}
$$

- やはりa=1でなければ常微分方程式のクラスに持っていけないのでは。　　← tの境界温度のスケーリングを追加して解決。
- ここでは$a=1$に限定して考える。

$$
\boxed{
    L\frac{dT_L}{d\xi}= -\frac{2}{7}e^{-\xi/L}\kappa_0 \frac{d^2 T^{7/2}}{d\xi^2} }
$$


- 変数の整理で、常微分方程式を解く問題に帰着する。この解は存在するか？
- 解の存在がいえるのだとすれば、それが物理的な解かどうかが問題になる。
- 存在はすると考えている。実際、数値解は比較的安定に得られている。
- $\xi \to -\infty$の方で、


$$
    \frac{dT_L}{d\xi}= -\frac{2}{7}e^{-\xi/L} \frac{\kappa_0}{L} \frac{d^2 T^{7/2}}{d\xi^2} 
    = -e^{\xi/L}\frac{\kappa_0}{L} \frac{d}{d\xi} (T^{5/2} T')
$$


$$
     \frac{dT_L}{L d\xi/L}= -\frac{2}{7}e^{-\xi/L}\frac{\kappa_0}{L} \frac{d^2 T^{7/2}}{L^2 d(\xi/L)^2} 
$$

$s=\xi/L$, $\kappa_0/(L^2) =D_0$, $U(s) = T_L(\xi) $で

$$
U' = -\frac{2D_0}{7} e^{-s} (U^{7/2})'' = -D_0 e^{-s} \frac{d}{ds} U^{5/2} U'
$$



- s＜0が事実上の定義域として、s>0で0になるような解。
- 例えば、一次元の自己相似解から借用して、T(x)=K(x)^{2/5}依存性の解を探す。
- 温度が非負なので、値域は問題ない。

$$
U = K^{2/5}
$$

$$
U' = \frac{2}{5} K^{-3/5} K'
$$


$$
-D_0 e^{-s} \frac{d}{ds} U^{5/2} U' = -D_0 e^{-s} \frac{d}{ds} \frac{2K^{2/5} K'}{5} = -D_0 e^{-s} \frac{2}{5}[ \frac{2}{5}K^{-3/5} K'^2 + K^{2/5} K'']
$$

$$
1 = -D_0 e^{-s} [\frac{2}{5}K' + \frac{K K''}{K'}]
$$

- 分数冪を消すことができた。整数べきと、整数階微分の常微分方程式。
- sについて、テーラー展開すれば、係数に対する方程式出せるかな。
- フロント構造の存在を仮定する。K(s)=0となるsが存在するという仮定。
- K(s=0) = 0で一般性失わないだろう。$s\to s+s'$で、$D_0\to D_0' = D_0 e^{-s'}$でクッションすればいい。（系の並進対称。）
- あるいは、expの係数をd/ds + a = e^-a d/ds e^a で消していけるだろうか。


$$
   K' =   -D_0 e^{-s}   \left[\frac{2}{5}K'^2 + K K''\right]
$$

$$
\begin{align*}
　    K   &=        as +    bs^2 +  cs^3 + ds^4..\\
    K'  &=  a  + 2bs +   3cs^2 + 4ds^3     ..\\
    K'' &= 2b  + 6cs +  12ds^2 ..\\
\end{align*}
$$


$$
\begin{align*}
    K'^2    &=   a^2 + 4abs + ( 4b^2  +  6ac ) s^2 +.. \\
    K K''   &=         2abs + ( 2b^2  +  6ac ) s^2 + ..\\
    \frac{2}{5}K'^2 + KK'' &= \frac{2}{5}a^2 + \frac{18}{5}abs   + (\frac{18}{5} b^2 +\frac{42}{5}ac s^2) + ..\\
    e^{-s} &= 1-s+\frac{s^2}{2}+...\\
    e^{-s} [\frac{2}{5}K'^2 + KK''] 
    &= 
    \frac{2}{5}a^2 + (\frac{18}{5}ab - \frac{2}{5}a^2)s   
    + (\frac{1}{5}a^2 + \frac{18}{5} b^2 +\frac{42}{5}ac -\frac{18}{5}ab) + ..\\
\end{align*}
$$

- 微分方程式の係数を比較して、

$$
\begin{align}
    a&= \frac{-2D_0 a^2}{5}\\
    2b &= -D_0 (\frac{18}{5}ab - \frac{2}{5}a^2) \\
    3c &= -D_0(\frac{1}{5}a^2 + \frac{18}{5} b^2 +\frac{42}{5}ac -\frac{18}{5}ab)
\end{align}
$$


$$
\begin{align*}
    a  &= -\frac{5}{2D_0}\\
    2b &= -D_0 (\frac{18}{5}ab - \frac{2}{5}a^2) 
       =  (9b+\frac{5}{2D_0} )\\
    b  &= -\frac{5}{14D_0}  = \frac{a}{7} \\
    3c &= -D_0(\frac{1}{5}a^2 + \frac{18}{5} b^2 +\frac{42}{5}ac -\frac{18}{5}ab)\\
    &= 
    -D_0(\frac{1}{5}a^2 + \frac{18}{5*49} a^2 +\frac{42}{5}ac -\frac{18}{5*7}a^2)\\
    [3-21 ] c&=  - \frac{D_0}{5*7*7} [49 - 18*6] a^2 = -\frac{59}{5*7*7} a^2 \\
    c
    &= 
    D_0 \frac{59}{5*7*7*18}a^2 =    - \frac{59}{(2*3*7)^2} a
\end{align*}
$$


- これを無限に繰り返して、級数解が得られる。収束性は不明。

$$
    K(s) = \sum_{i\ge1} a_i s^i = -\frac{5}{2D_0} [s+ \frac{1}{7}s^2+\frac{59}{(2*3*7)^2}s^3 + O(s^4)]
$$



$$
\begin{align*}
    U(s) = T &= \left[\sum_{n\ge1} a_n s^n\right]^{2/5} \\
    &= \left[ -\frac{5}{2D_0} [s+ \frac{1}{7}s^2+\frac{59}{(2*3*7)^2}s^3 + O(s^4)] \right]^{2/5}\\
\end{align*}
$$

$$
    \left(s = \frac{x}{L} - \ln{t}, \quad D_0 =\kappa_0/ L^2 \right)
$$

$$
\begin{align*}
    x_f(t) &= L\ln{t}+ x_0\\
    n_f(t) &= \exp(x_f(t)/L)\\
    v_f(t) &= \frac{L}{t}
\end{align*}
$$

- 大域的な解がきちんとこれで収束するかは不明だが、フロント部分の局所解は表現できているだろう。
- なぜなら、主要項のsの一次で、空間依存性が密度勾配なしの解（あるいは,$L\to \infty$）に一致する。







一般項として、級数解を出すならば、(a_0=0はK(s=0)=0のフロントの仮定)

$$
\begin{align*}
    K  (s)  &= \sum_{n\ge1} a_n s^n \\
    K' (s)  &= \sum_{n\ge1} n a_n s^{n-1} \\  
            &= \sum_{n\ge0} (n+1) a_{n+1} s^n\\  
    K''(s)  &= \sum_{n\ge1} n(n-1) a_n s^{n-1} = \sum_{n\ge2} n(n-1) a_n s^{n-2} \\
            &= \sum_{n\ge0} (n+2)(n+1) a_{n+2} s^{n} \\
\end{align*}
$$



$$
\begin{align*}
    K'^2 (s)    &=  \sum_{n,m\ge0} (n+1)(m+1) a_{n+1} a_{m+1} s^{n+m}\\  
                &=  a_1^2 +\sum_{n,m\ge1} (n+1)(m+1) a_{n+1} a_{m+1} s^{n+m} 
                  + \sum_{n=0,   m\ge1} (m+1) a_{1} a_{m+1} s^{m}
                  + \sum_{n\ge1, m=0  } (n+1) a_{n+1} a_{1} s^{n}\\    
                &=  a_1^2 +\sum_{n,m\ge1} (n+1)(m+1) a_{n+1} a_{m+1} s^{n+m} 
                  + 2a_{1} \sum_{n=0,   m\ge1} (m+1)  a_{m+1} s^{m}\\
    K(s)K''(s)  &=　\sum_{n\ge1} \sum_{m\ge0} (m+2)(m+1) a_n a_{m+2} s^{n+m} \\
                &=　\sum_{n,m\ge1}   (m+2)(m+1) a_n a_{m+2} s^{n+m}    
                  + 2a_{2} \sum_{n\ge1,m=0} a_n s^{n} \\\\
\end{align*}
$$


$$
\begin{align*}  

\end{align*}
$$



## $s\to -\infty$の振る舞い

- 級数解は$s< \sim 0$ での温度の振る舞いを見ている。次に気になるのは$s\ll0$の振る舞い。
- 一つの考え方は常微分方程式の数値解を初期値問題として、計算する。それで物理的な解か否かの判定が可能だろう。
- $s \sim< 0$で、K'は級数解の数値を参考に初期値,$K_0,K'_0$を与えて,$s\to-\infty$で解軌道を構成する。
- $K''$は位置$K$と速度$K'$で決まる粒子の加速度のようなもの。hamiltonianはなさそう。
- 相空間の流線はsにあらわによる。
- $s\to -\infty$における一つの自明な解は、$K=const.\,\,(>0)$。これに漸近していくなら嬉しい。
- おそらく、物理的に無限に進行する解を探しているので、発散するのではと思う。
- あるいは増加して、発散するとしても、それが物理的に真っ当にゆっくり増えていくなら問題ない。

$$
\boxed{
   K' =   -D_0 e^{-s}   \left[\frac{2}{5}K'^2 + K K''\right]}
$$

$$
    K'' = \left[ -\frac{e^s}{D_0} - \frac{2K'}{5} \right]\frac{K'}{K}
$$

例えば、指数の方が早く減衰するとすれば、一項目を落として、


$$
\begin{align*}
    K'' &= -\frac{2K'}{5} \frac{K'}{K}\\
    K' K^{2/5} &= C_1  \quad (<0, K'<0, K>0)\\
    K^{7/5} &= \frac{5}{7}C_1 s+C_2\\
    K  &= \left[ \frac{5}{7}C_1 s+C_2 \right] ^{5/7}\\
    U &= T = K^{2/5} = \left[ \frac{5}{7}C_1 s+C_2 \right] ^{2/7}\\
        &= \left[ \frac{5}{7}C_1 (\frac{x}{L}-\ln{t})+C_2 \right] ^{2/7}\\
    \end{align*}
$$

- これは物理的に真っ当な解なのでは。
- 翻って、e^sを落とす仮定はこの解と一貫しているだろう。(べきと指数の減少の速さ。)
- 境界の温度が$(\ln{t})^{2/7}$で上がる解。
- 空間的には、$(-Ax + B)^{2/7}$で分布。
- これ単純に温度の7/2に凸がないという解か。輸送が釣り合う解。

## plasma中の輸送として、真っ当な範囲の解はどのようなものか。

数値計算の方針としては、

$$  
    K(s; K_0 , K'_0, D_0, L,a, n_0,c_v,t_0)
$$



- 実際上の問題での解の性質を議論するなら、以下を考慮する必要があるだろう。
- spitzer-harmの輸送係数
- 問題とする密度やそのスケール長
- 入力の熱・境界条件
- plasma以外の非線形拡散輸送。 -> porous medium, 輻射輸送。

を考えた時、物理的に重要と言えるような例は出てくるだろうか。

### 必要なsパラメータの範囲
密度はe^sに比例して変動するから、大きくても3桁程度の変動だろう。
s~7ぐらいでいい。

```shell
print log(1000.0)
6.90775527898214
print log(exp(1.0)) # 自然対数
1.0
```

### glinskyの輸送係数で考える

- $n(x) = n_0 \exp(x/L)$
- $L \sim 50 \rm{\mu m}$
- $n_0 = 10n_c \sim 100n_c$

$$
    \partial_t \epsilon = \partial_t c_v T n_0\exp(x/L) 
    = \nabla ({\kappa_{SH}} \nabla T)
    = \kappa_{SH,0} \nabla (T_e^{5/2} \nabla T_e)
$$

$$
    \kappa_{SH,0} = \frac{16}{\pi} \sqrt{\frac{2}{\pi}}
    \frac{1}{z \sqrt{m_e} e^4 \ln{\Lambda}}
$$

- 上の議論に合わせると、係数は

$$
\kappa_0 = \frac{  \kappa_{SH,0}  }{c_v n_0}
$$

- $m_e c^2 $で規格化してあげると、


$$
\kappa_0 (m_e c^2)^{5/2}
= \frac{  \kappa_{SH,0}  }{c_v n_0} (m_e c^2)^{5/2}
= \frac{ n_c }{c_v n_0} \frac{16}{\pi^2} \sqrt{\frac{2}{\pi}} 
\frac{c \lambda_L^2 }{z r_e \ln{\Lambda}}
$$

$$
c\lambda_L^2 /r_e = \frac{\lambda_L^2}{\tau_L} \frac{\lambda_L}{r_e}
$$


- keV, micron, ps , n_0 = n_cのオーダーで拡散係数に相当する量は、
- クーロン対数=5
- z=1

```shell
print 32.0/pi/pi/3.0*sqrt(2.0/pi)/5.0/r_e*1.0e-6*299.792458/510.99895**2.5
#  3108.40735366193
```



$$
\kappa_0 (\rm{keV})^{5/2}  = 3.108 *10^3 \rm{\frac{\mu m^2}{ps}}
$$

- スケール長さで規格化された拡散係数は、psのオーダーでは、

$$
    D_0 = \kappa_0/L^2 
    =\frac{16\sqrt{2}}{c_v \ln{\Lambda} \pi^2 \sqrt{\pi}} 
    \frac{ps^{-1}}{n_{0,n_c} L_{\mu m}^2  r_{e,\mu m} \tau_{L,ps}} 
    = \frac{3.108*10^3 \, }{n_{0,n_c} L_{\mu m}^2 } \rm{ps}^{-1}
$$



- 例えば、10keV, 100n_cのプラズマなら、拡散係数は1psで100マイクロぐらい。

$$
 \kappa_0(n = 100 n_c)* (10keV)^{2.5} \rm{\frac{\mu m^2}{ps}}
 = 3108*10^{0.5}\sim 10^4 \rm{\frac{\mu m^2}{ps}}
$$



## 物理量の規格化を整理

解釈で混乱するので物理量の規格化を整理する。

$$
    \frac{\partial T}{\partial t} = \frac{\kappa_0 }{c_v n_0} e^{x/L} \nabla (T^n \nabla T)
$$

温度を適当な温度$T_0$で規格化する。$T = T_0 \theta$。
長さをスケール長さで規格化する。$x = L \xi$。
時間を$t = t_0 \tau$で規格化する。

この時、微分方程式は

$$
    \frac{\partial \theta}{\partial \tau} 
    = \frac{t_0 \kappa_0 T_0^n}{c_v n_0 L^2} e^{\xi} 
    \nabla ( \theta^n \nabla \theta )
$$

$$
    \frac{t_0 \kappa_0 T_0^n}{c_v n_0 L^2}  =1
$$

になるように無次元化すれば(例えば、t_0を選べば)、

$$
    \frac{\partial \theta}{\partial \tau} 
    = e^{\xi} 
    \nabla_{\xi} ( \theta^n \nabla_{\xi} \theta )
$$


解の形状を次のように仮定する。

$$
\theta(\xi,\tau) =  [\tau^{1-a} K(\xi-\ln{\tau^a})]^{2/5}
$$

この時仮に、$K(s_0 = \xi-\ln{\tau^a})=0$を満たす、解$K(s)$が存在するとする。

$s_0 = \xi-\ln{\tau^a}$

$\xi' = \xi-s_0$と取り直せば、
満たすべき微分方程式は

$$
    \frac{\partial \theta}{\partial \tau} 
    = e^{\xi'} e^{s_0} 
    \nabla_{\xi'} ( \theta^n \nabla_{\xi'} \theta )
$$

フロントに対応する座標は

$0= \xi'-\ln{\tau^a}$, $K(\xi'=0)=0$に付け替えることができる。

さらに$\tau' = \tau e^{s_0}$とすることで、方程式が不変になる。
ということはこれはまた次のような解を持つ。

$$
\theta(\xi',\tau') =  [\tau'^{1-a} K(\xi'-\ln{\tau'^a})]^{2/5}
$$

$K(s_0 = \xi'-\ln{\tau'^a})=0$を満たす、解$K(s)$が存在する。
そりゃそうだ。循環論法だ。

こうではなくて、拡散係数のほうに押しつければいいのか？
一度全て最初のセットアップに入れ直して、

$$
T = T_0 [\left( \frac{t c_v n_0 L^2}{\kappa_0 T_0^n} \right) ^{1-a}
K(\frac{x}{L}-a\ln{\frac{t c_v n_0 L^2}{\kappa_0 T_0^n}})]
$$

## より一般の状況として、x_f ~ aLln(t)を考える。



$$
    \frac{\partial T}{\partial t} = \frac{2}{7} e^{-x/L} \kappa_0 \frac{\partial ^2 T^{7/2}}{\partial x^2}   
$$

$$
x_f \sim aL\ln{t} = L \ln{t^a}
$$

- 最初の議論で用いた関数形状の仮定だと、a=1しか許されなかった。
- zeldovich (10.25)の方針で、tの冪を解から括り出せば、常微分方程式に落とせるのではないか。

$$
T(x,t) = t^{k} f(x-aL\ln{t}), \quad \xi = x-aL\ln{t}
$$


両辺それぞれ整理すると、

$$
\begin{align*}
    \frac{\partial T}{\partial t} &= \partial_t ( t^{k} f(x-aL\ln{t}) )\\
    &= [kf - aLf' ]t^k/t\\
    \frac{2}{7} e^{-x/L} \kappa_0 \frac{\partial ^2 T^{7/2}}{\partial x^2}   
    &= \frac{2}{7} e^{-\xi/L} t^{-a} \kappa_0 (f^{7/2})''
\end{align*}
$$

拡散方程式は、tの冪が余る形で出てくる。tの冪を消すようなkの選択をすれば二階の常微分方程式に落ちる。

$$
\begin{align*}
    [kf - aLf' ]t^{k-1} \
    &= 
    \frac{2}{7} e^{-\xi/L} t^{-a} \kappa_0 (f^{7/2})'' t^{7k/2}
\end{align*}
$$

$$
\begin{align*}
    k-1 &= 7k/2 -a \\
    k &= \frac{2}{5}(a-1)
\end{align*}
$$

$$
\boxed{
    [\frac{2}{5}(a-1)f - aLf' ] 
    = 
    \frac{2}{7} e^{-\xi/L}  \kappa_0 (f^{7/2})''  }
$$

- $a=1$の時、$k=0$できちんと最初の議論の形に一致する。
- この、より一般の形式で常微分方程式の解は存在しているだろうか。
- まず無難な変換,$ f =K^{2/5}, K = f^{5/2}$の空間形状で解を探す。
- 微分を整理すると、

$$
 f' = \frac{2}{5} K^{-3/5} K'
$$


$$
 (f^{7/2})'' = (K^{7/5} )'' =  \frac{7}{5} (K^{2/5}K')' 
 = \frac{7}{5}[\frac{2}{5}K^{-3/5}K'^2 + K^{2/5}K'']
$$

- 常微分方程式に戻すと、

$$
    \frac{2}{5} [(a-1)K^{2/5} - aLK^{-3/5} K' ] 
    = 
    \frac{2}{7} e^{-\xi/L}  \kappa_0 \frac{7}{5} [\frac{2}{5} K^{-3/5} K'^2 + K^{2/5}K'']
$$


$$
\boxed{
    [(a-1)K - aL K' ] 
    = 
    e^{-\xi/L}  \kappa_0  [\frac{2}{5} K'^2 + K K''] }
$$

解の空間形状を表す変数をスケール長で規格化して、

$$
s = \xi/L\\
D_0 = \kappa_0 /L^2\\
K(s) = K(\xi)
$$ 

$$
\boxed{
    [(a-1)K - a K' ] 
    = 
    e^{-s}  D_0 [\frac{2}{5} K'^2 + K K''] }
$$

$K''$について解くと、

$$
\boxed{
    K'' = \frac{e^s}{D_0} [(a-1)-a\frac{K'}{K}]- \frac{2 K'^2}{5K} }
$$

- 級数解を出しに行く。
- a=1の解と比較して、不等式評価とかできないだろうか。
- 基本的に$a<1$の方が筋がいいのではとは思っている。$K''<0$のセンスの項を強くするから。物理的な解になりやすいだろう。また、フロントの速度が遅めに出るということなので、過剰な熱を与えていない状況につながる。





### 級数解を探す。


- フロント構造の存在を仮定する。K(s)=0となるsが存在するという仮定。
- K(s=0) = 0で一般性失わないだろう。$s\to s+s'$で、$D_0\to D_0' = D_0 e^{-s'}$でクッションすればいい。（系の並進対称。）

$$
\boxed{
    [(a-1)K - a K' ] 
    = 
    e^{-s}  D_0 [\frac{2}{5} K'^2 + K K''] }
$$



$$
\begin{align*}
　    K   &=        c_1s +    c_2s^2 +  c_3s^3 + c_4s^4..\\
    K'  &=  c_1  + 2c_2s +   3c_3s^2 + 4c_4s^3     ..\\
    K'' &= 2c_2  + 6c_3s +  12c_4s^2 ..\\
\end{align*}
$$


$$
\begin{align*}
    K'^2    &=   c_1^2 + 4c_1c_2s + ( 4c_2^2  +  6c_1c_3 ) s^2 +.. \\
    K K''   &=         2c_1c_2s + ( 2c_2^2  +  6c_1c_3 ) s^2 + ..\\
    \frac{2}{5}K'^2 + KK'' &= \frac{2}{5}c_1^2 + \frac{18}{5}c_1c_2s   + (\frac{18}{5} c_2^2 +\frac{42}{5}c_1c_3 s^2) + ..\\
    e^{-s} &= 1-s+\frac{s^2}{2}+...\\
    e^{-s} [\frac{2}{5}K'^2 + KK''] 
    &= 
    \frac{2}{5}c_1^2 + (\frac{18}{5}c_1c_2 - \frac{2}{5}c_1^2)s   
    + (\frac{1}{5}c_1^2 + \frac{18}{5} c_2^2 +\frac{42}{5}c_1c_3 -\frac{18}{5}c_1c_2) + ..\\
    (a-1)K -aK' 
    &=  -ac_1 + [(a-1)c_1-2ac_2]s + [(a-1)c_2 -3ac_3]s^2
\end{align*}
$$

- 微分方程式の係数を比較して、0,1,2次それぞれ

$$
\begin{align*}
    ac_1  &= \frac{-2D_0 c_1^2}{5}\\
    (a-1)c_1 -2ac_2 &=  D_0 (\frac{18}{5}c_1c_2 - \frac{2}{5}c_1^2) \\
    (a-1)c_2 -3ac_3 &=  D_0(\frac{1}{5}c_1^2 + \frac{18}{5} c_2^2 
    +\frac{42}{5}c_1c_3 -\frac{18}{5}c_1c_2)\\
\end{align*}
$$

- リーディングタームは、

$$
    c_1  = -\frac{5a}{2D_0}
$$

- 二次の係数は、

$$
\begin{align*}
     -2ac_2 &=  D_0 (\frac{18}{5}c_1c_2 - \frac{2}{5}c_1^2)- (a-1)c_1\\
            &=  D_0 (- \frac{9a}{D_0} c_2 - \frac{5a^2}{2D_0^2} ) +(a-1)\frac{5a}{2D_0}\\
    7ac_2   &=  \frac{5a}{2D_0} (-a +(a-1) ) = -\frac{5a}{2D_0} = c_1\\
    c_2     &= -\frac{5}{14D_0}  = \frac{c_1}{7a} \\
\end{align*}
$$


- 三次の係数は、

$$
\begin{align*}
(a-1)c_2 -3ac_3 
&=  
D_0 (\frac{1}{5}c_1^2 + \frac{18}{5} c_2^2 +\frac{42}{5}c_1c_3 -\frac{18}{5}c_1c_2)\\
(a-1)\frac{c_1}{7a} -3ac_3 
&= 
D_0(\frac{1}{5}c_1^2 + \frac{18}{5*49a^2} c_1^2 +\frac{42}{5}c_1c_3 -\frac{18}{5*7a}c_1^2)\\
-3ac_3 -\frac{42}{5}c_1c_3D_0
&= 
D_0(\frac{1}{5}c_1^2 + \frac{18}{5*49a^2} c_1^2  -\frac{18}{5*7a}c_1^2)
-(a-1)\frac{c_1}{7a} \\
18ac_3 
&= 
\frac{D_0 c_1^2}{5*7*7*a^2} [7*7a^2 +18 -18*7a -a(a-1)*5*7\frac{1}{D_0c_1}] 
\\
&=  \frac{D_0 c_1^2} {5*7*7a^2} [ 49a^2 -18*7a +18 + 14(a-1)] \\
&=  \frac{D_0 c_1^2} {5*7*7a^2} [ 49a^2 -16*7a +4 ] \\
c_3 
&=
\frac{D_0 c_1^2} {5*7^2*2*3^2 a^3} [ 49a^2 -16*7a +4 ] \\
\\
&= 
-c_1
\frac{[ 4 -16*7a +49a^2  ]  } {(2*3*7a)^2}  \\
\end{align*}
$$

- これを無限に繰り返して、級数解が得られる。収束性は不明。

$$
    K(s) = \sum_{i\ge1} a_i s^i 
    = -\frac{5a}{2D_0} [s+ \frac{1}{7a}s^2
    +\frac{[ -4 +16*7a -49a^2  ] }{(2*3*7a)^2}s^3 + O(s^4)]
$$



$$
\boxed{
\begin{align*}
    U(s) = T 
    &= \left[t^{a-1} \sum_{n\ge1} a_n s^n\right]^{2/5} \\
    &= \left[ -\frac{5a t^{a-1}}{2D_0} [s+ \frac{1}{7a}s^2
    +\frac{[ -4 +16*7a -49a^2  ] }{(2*3*7a)^2}s^3 + O(s^4)] \right]^{2/5}\\
\end{align*}}
$$

$$
    \left(s = \frac{x}{L} - a\ln{t}, \quad D_0 =\kappa_0/ L^2 \right)
$$



- 大域的な解がきちんとこれで収束するかは不明だが、フロント部分の局所解は表現できているだろう。
- a=1で、最初の議論に一致する。aの自由度を増やせた。
- a<1の解はフロント部のフラックスがへたっていくような状況。
- a>1では後の時刻の方がフラックスが強くなるような解であるから、物理的な境界条件を考えれば選ばれにくい。

$$
\begin{align*}
    x_f(t) &= aL\ln{t}+ x_0\\
    n_f(t) &= \exp(x_f(t)/L) = n_0 t^a\\
    v_f(t) &= \frac{aL}{t}\\
    T_f(t) &\sim \propto t^{2(a-1)/5}\\
    q_f(t) &\sim n_f v_f T_f \\
    &\sim \propto t^{7(a-1)/2}
\end{align*}
$$


###  $x \ll L$の処理をちゃんと理解したい。

$$
x_f \sim aL\ln{t} = L \ln{t^a} 
$$

$$
x << L, \quad \delta_x \sim v_0 \delta_t << L
$$
みたいなのを考えたいということ。か？

- そのままこの相似変数sで見ると、時間が無限小でないといけないのかな。わからん。

今のansatz上で、t,xが有限でLが無限になるような状況を考えることになる。

$$
    s = \frac{x}{L} - a\ln{t}
$$

$$
    t^a = \exp{(s-\frac{x}{L})}
$$

$$
    s = \frac{x}{L} -a \ln{t_0} -a \frac{t-t_0}{t_0} 
    +a \frac{(t-t_0)^2}{t_0^2} + ..
$$

$$
x_f(t) = aL\ln{t} \simeq aL\ln{t_0} + v_0(t-t_0) + ...
$$

$$
    \delta t = (t-t_0)<t_0 \quad, v_0 =\frac{aL}{t_0}
$$


$$
\begin{align*}
    T 
    &= \left[ -\frac{5a t^{a-1}}{2D_0} s \right]^{2/5}\\
    &\simeq \left[ -\frac{5at^{a-1}L}{2\kappa_0} (x-x_0-v_0 \delta t) \right]^{2/5}\\
    &= 
    \left[ -\frac{5 v_0 t_0 t^{a-1}}{2 \kappa_0} (x-x_0-v_0 \delta t) \right]^{2/5}\\
\end{align*}
$$


フロント変数が満たす速度は$s=0$の軌道だから、
$$aL\ln{t} = x_f, \quad \frac{aLdt}{t} = dx_f $$

$$
v_f =  \frac{dx_f}{dt} = \frac{aL}{t}
$$

- 有限だと考えると良いのはtやxではなくて、vではないだろうか。


$$
    s = \frac{x}{L} - a\ln{\frac{aL}{v}}
$$

- Lをvtで消せばいいのか。

$$
L =\frac{vt}{a}
$$


$$
v(t=t_0 + \delta t) = \frac{aL}{t_0 + \delta t} \sim 
$$

$$
Ls = x - vt\ln{t} = x - vt \ln{(t_0 + \delta t)}
$$

$v$はtの関数だが、今注目しているスケールで定数のようなものだと思えばいい。

すると、漸近解の主要項は、

$$
\begin{align*}
    T 
    &= \left[ -\frac{2t^{a-1}}{5D_0} s \right]^{2/5}\\
    &= \left[ -\frac{2t^{a-1} L}{5\kappa_0} (x-vt\ln{t}) \right]^{2/5}\\
    &= \left[ -\frac{2t^{a} v}{5a \kappa_0} (x-vt\ln{t}) \right]^{2/5}\\
\end{align*}
$$

- 密度勾配がない時の解に時間依存性が一致してくれない。










##



## 時間の無次元化について再検討

- 時間の単位をあらわに含ませてみる。$t_0$とする。

$$
    \frac{\partial T}{\partial t} = \frac{2}{7} e^{-x/L} \kappa_0 \frac{\partial ^2 T^{7/2}}{\partial x^2}   
$$

$$
x_f \sim aL\ln{t/t_0} = L \ln{(t/t_0)^a} = aL(\ln{t}-\ln{t_0})
$$


$$
T(x,t) = (t/t_0)^{k} f(x-aL\ln{t/t_0}), \quad \xi = x-aL\ln{t/t_0}
$$


$\kappa_0' = \kappa_0 t_0$と定数分クッション作れば、$\tau=t/t_0$の無次元時間に対して方程式の構造は一切変わらない。媒質の拡散スケールと時間がスケールすると言っているだけ。

$$
    \frac{\partial T}{\partial \tau} = \frac{2}{7} e^{-x/L} \kappa_0' \frac{\partial ^2 T^{7/2}}{\partial x^2}   
$$



## 加速度項の(K,K')平面上の振る舞い

- 正値かつ減少関数なので、$K>0, K'<0$
- フロントは位置に対して増加を考えるので、$a>0$
- 加速度項の正負を見るのが良いと思っている。
基本的に曲線は上凸気味で、安定に収束する。$K''<0$が望ましい。


$$
    [(a-1)K - a K' ] 
    = 
    e^{-s}  D_0 [\frac{2}{5} K'^2 + K K''] 
$$


$$
    K'' = \frac{e^s}{D_0} [(a-1)-a\frac{K'}{K}]- \frac{2 K'^2}{5K} 
$$

$D_0=1$で一般性を失わないだろう。(sの原点を変えるのと同じ。)

$$
    K'' = e^s[(a-1)-a\frac{K'}{K}]- \frac{2 K'^2}{5K} 
$$

- 三項目は常に負。解の存在に寄与。
- 一項目はaによって正負が変わる。
- 二項目は常に正

加速度が0以下になる場所は、

$$
    K'' = e^s[(a-1)-a\frac{K'}{K}]- \frac{2 K'^2}{5K} \le 0
$$

$$
\begin{align*}
     & e^s[(a-1)-a\frac{K'}{K}]- \frac{2 K'^2}{5K} \le 0 \\
     &(a-1)K \le  aK' +e^{-s}\frac{2}{5}K'^2 = K' [a+ \frac{2e^{-s}}{5}K']\\
\end{align*}
$$

- $0 < a< 1$の時、

$$
\begin{align*}
      K  &\ge \frac{K'}{a-1} \left[a+ \frac{2e^{-s}}{5}K' \right] 
      = \frac{-2e^{-s}}{5(1-a)} [K'+\frac{5ae^s}{4}]^2 + \frac{5a^2e^s}{8(1-a)} \\
         &\ge \frac{-aK'}{1-a} \left[1+ \frac{2e^{-s}}{5a}K' \right]
\end{align*}
$$

- K'の二次曲線で正負が切り替わる。
    - つまり$K' = 0, 2e^{s}/a5$で切り取られる、二次曲線の内側に$K''>0$なる領域が存在し、そこに向かうフローは分岐する。
    - sの増大とともにその領域が拡大していく。
    - 膨らむ領域からうまく逃げ切るようなフローは、自然に解になる。逃げ切るとは有限のsの変化のうちに$K=0$に到達するという意味。
    - 極大値は$K_{max} = \frac{5a^2e^s}{8(1-a)}$領域の広さの目安。



- $a> 1$の時、

$$
\begin{align*}
      K  &\le \frac{K'}{a-1} \left[a+ \frac{2e^{-s}}{5}K' \right]\\
         &\le \frac{aK'}{a-1} \left[1+ \frac{2e^{-s}}{5a}K' \right]
\end{align*}
$$

$K'=0$と、二次曲線で囲まれる、無限の領域の内部で、二階微分が負にならない
- ふちを追い越そうとすると律速される。
$a>1$では、符号が反転するので、大域的な解は難しいかもしれない？


- 特別な場合として、$a=1$を考える。

$$
\begin{align*}
    K''  &= -e^s \frac{K'}{K}- \frac{2 K'^2}{5K}\\
         &= \frac{-K'}{K} \left[e^s+ \frac{2}{5}K' \right]
\end{align*}
$$

$$
\begin{align*}
    K''<0 \iff  - \frac{5 e^s}{2} > K' 
\end{align*}
$$

- $K'=0$は自明な解で、温度が時空間全域で一様な解。
- 二項目はある場所を境目に加速度の正負が切り替わることを示唆している。
- K'の絶対値の増加が指数的なsの増加に追いつかれるよりも先に$K=0$に到達できれば、それは大域的な解を作ることが許される。
- $a<1$よりも条件が厳しいが無理ではない。



##

二変数の偏微分の自由度を残したまま、解を探してみるのはどうだろうか。

$$
    \xi(x,t) = x- aL \ln{t}, \quad \tau(x,t) = t
$$

$$
    \begin{align*}
    \partial_t &= -\frac{aL}{t}\partial_{\xi} + \partial_\tau \\
     &= -\frac{aL}{\tau}\partial_{\xi} + \partial_\tau \\
    \partial_x &= \partial_{\xi}
    \end{align*}
$$


$$
    \frac{\partial T}{\partial t} = \frac{2}{7} e^{-x/L} \kappa_0 \frac{\partial ^2 T^{7/2}}{\partial x^2}   
$$

$$
    \frac{\partial T}{\partial \tau} 
    - \frac{aL}{\tau} \frac{\partial T}{\partial \xi}
    = \frac{2}{7} e^{-\xi/L} \tau^{-a}
    \frac{\partial ^2 T^{7/2}}{\partial \xi^2}  
$$

- $T(\xi,\tau) \to T(\xi), a\to1$としたものが、最初の議論。
- $T(\xi,\tau) \to \tau^k f(\xi), k=2(a-1)/5$と思ったやつが、一般化したものの議論。
- では、$T(\xi,\tau) \to \tau^k f(\xi,\tau)$で考えれば？
- あるいは、ここで変数分離とか。$T(\xi,\tau) \to f(\xi)g(\tau)$
- \tauは\xi領域で綺麗に出る解からのずれの場の自由度と思っていいと思う。

### 変数分離の方針

- 多分、変数分離の形にできるのがかなり限られるというか、それがベキの形になるのではという感じがする。

$$
\begin{align*}
       fg' - \frac{aL}{\tau} f' g
    &= \frac{2}{7} e^{-\xi/L} \tau^{-a} g^{7/2} (f^{7/2})'' \\
       f \frac{g' \tau^a }{g^{7/2} } 
       - aLf' \frac{\tau^{a-1}}{g^{5/2}}
    &= \frac{2}{7} e^{-\xi/L} (f^{7/2})'' \\
       A \frac{g' \tau^a }{g^{7/2} } 
       + B \frac{\tau^{a-1}}{g^{5/2}}
    &= C\\
    \frac{-2}{5}A (g^{-5/2})' + B \tau^{-1}g^{-5/2}
    &= C \tau^{-a}\\
    A' h' + B \frac{h}{\tau}
    &= C \tau^{-a}\\
      (d/d\tau + B'/\tau) h
    &= C' \tau^{-a}\\
      \exp(- B'\ln{\tau} ) \frac{d}{d\tau}\exp(B' \ln{\tau}) h
    &= C' \tau^{-a}\\
       \frac{d}{d\tau} \tau^{B'} h
    &= C'  \tau^{B'-a}\\
    \tau^{B'} h
    &= \frac{C'}{B'-a+1}  \tau^{B'-a+1} + C_2\\
    h
    &= 
    \frac{C'}{B'-a+1}  \tau^{-a+1} + C_2 \tau^{-B'}\\
\end{align*}
$$

- C_2は変数分離\tauを積分した時の積分定数で、\xiの任意関数


$$
\begin{align*}
g &= h^{-2/5}\\
A &= f\\
A' &= \frac{-2f}{5}\\
B  &=  -aLf'\\
B' &= \frac{5aLf'}{2f}\\
C  &= \frac{2}{7} e^{-\xi/L} (f^{7/2})''\\
C' &= -\frac{5 e^{-\xi/L} (f^{7/2})''}{7f}\\
\frac{C'}{B'-a+1} 
&=
 \frac{-5 e^{-\xi/L} (f^{7/2})'' }{7(5aLf'-af+f) }
\end{align*}
$$

元の方程式は、\xi側の方程式に対応しているのか。２種類の常微分方程式を解く問題にすり替わっているだけか。
- C_2=0でとると、多分g(tau) = tau^{2(a-1)/5} c_3の元のやつに帰着する。第一項残ったものがこの時の常微分方程式か。
- C_2残すと、べきの引数にfが入って難しすぎやしないだろうか。

$$
\begin{align*}
    h &= \frac{C'}{B'-a+1}  \tau^{-a+1} + C_2 \tau^{-B'}\\
  g^{-2/5} &= 
  \frac{-5 e^{-\xi/L} (f^{7/2})'' }{7(5aLf'/2-af+f) }  \tau^{-a+1} 
  + C_2 \tau^{-\frac{5aLf'}{2f}}\\
  g^{-2/5} \tau^{a-1} (5aLf'/2-af+f)
  &= 
  \frac{-5 e^{-\xi/L} (f^{7/2})'' }{7 } 
  + C_2 (5aLf'/2-af+f) \tau^{-\frac{5aLf'}{2f} +a-1}\\
  g^{-2/5} \tau^{a-1} (5aLf'/2-af+f)
  &= 
  \frac{-5 e^{-\xi/L} (f^{7/2})'' }{7 } 
  + C_2' \tau^{-\frac{5aLf'}{2f} +a-1}\\
\end{align*}
$$

- c_2を残すと解析的には事実上解けないだろう。
- c_2を0にしてみる。
- この時点で左辺はtauの項があるが、右辺にはtauの項がない。したがって、$g^{-2/5}\tau^{a-1}$はtauにも\xiにも依存しない定数である。これで綺麗に変数分離して、やはり元の解の議論に合流する。
- べきで括り出すのは正当化されたか。


ところで、c_2残すと、この項の物理的な意味はなんなんだろうか？

分離の十分条件として、右辺のtauのベキが0で、かつfがこの方程式を満たせばいいが、それは不適な解だとわかる。

$$
    5aLf'/2=(a-1)f
$$
としてみると、

$$
    f = c_3 \exp{\frac{2(a-1)}{5aL}\xi}
$$

$$
    C_2' = 0* C_2
$$

$$
    (f^{2/7})'' e^{-\xi/L} = c_3^{2/7} (\frac{7(a-1)}{5aL} )^2
    \exp{\frac{7(a-1)}{5aL} \xi} \ne0
$$

- 残念ながら不適。






### C_2の解釈

- $C_2$ は、$\tau$に関する一次積分を行ったときに残る 初期条件や境界条件に由来する自由度（空間依存を持つ定数関数）を表す。
- 分離解（純粋な自己相似解、すなわち $C_2=0$は特殊で普遍的なモード（しばしば長時間に支配的になるモード）を表す。一方 $C_2\neq 0$ の項は、非分離の過渡解で、初期条件の残骸や短期的な遷移を表すことが多い。
- したがって、物理的には

  - 初期条件や境界によっては短期的に $C_2$-項が重要になり得るが、系が自己相似モードに安定であれば長時間で $C_2$ 項は相対的に散逸・減衰して見えなくなる（あるいは発散する場合もある）。
  - つまり$C_2$は「分離解以外の余剰モード／過渡モード」を示す、と考えるのが良い。


## 変数分離形かつ任意の$n$


$$
\frac{\partial T}{\partial t}= 
\frac{e^{-x/L} D_0}{n+1}  \frac{\partial ^2 T^{n+1}} { \partial x^2}
$$

変数分離形を仮定

$$
\begin{align*}
 s &= \frac{x}{L} - a\ln{t} \\
 T(x,t) &= T(s,t) = h(t)f(s)
\end{align*}
$$

$$
 \kappa_0 = D_0/L^2
$$

$$
    h' f  -\frac{a}{t}hf' = \frac{1}{n+1} e^{s} t^{a}\kappa_0h^{n+1} (f^{n+1})''
$$


$$
\begin{align*}
    \frac{h'}{h^{n+1}} f  -\frac{a}{t}f' h^{-n} &= \frac{1}{n+1} e^{-s} t^{-a}\kappa_0 (f^{n+1})''\\
    -f \frac{(h^{-n})'}{n}-\frac{a}{t}f' h^{-n} &= \frac{1}{n+1} e^{-s} t^{-a}\kappa_0 (f^{n+1})'' f^{-1}\\
     [\frac{d}{ds}+ \frac{anf'}{tf}] h^{-n} &= -\frac{n}{n(n+1)} e^{-s} t^{-a}\kappa_0 (f^{n+1})'' f^{-1}\\
    \frac{d}{ds} [\exp{\frac{anf' \ln{t}}{f}} h^{-n}] 
    &= 
    -\exp{\frac{anf'\ln{t}}{f}}\frac{n}{(n+1)} e^{-s} 
    t^{-a}\kappa_0 (f^{n+1})'' f^{-1}\\
    \frac{d}{ds} [t^{\frac{anf'}{f}} h^{-n}] 
    &= 
    -t^{\frac{anf'}{f}-a}\frac{n}{(n+1)} e^{-s} \kappa_0 (f^{n+1})'' f^{-1}\\
    t^{\frac{anf'}{f}} h^{-n}
    &= 
    -\frac{1}{\frac{anf'}{f}-a+1} t^{\frac{anf'}{f}-a+1}\frac{n}{(n+1)} e^{s} \kappa_0 (f^{n+1})'' f^{-1}
    + C_1(s)\\
    h^{-n}
    &= 
    -\frac{1}{\frac{anf'}{f}-a+1} t^{1-a}\frac{n}{(n+1)} e^{-s} \kappa_0 (f^{n+1})'' f^{-1} 
    + C_1(s) t^{-\frac{anf'}{f}}\\
    h^{-n} t^{a-1}
    &= 
    -\frac{1}{\frac{anf'}{f}-a+1} \frac{n}{(n+1)} e^{-s} \kappa_0 (f^{n+1})'' f^{-1}
    + C_1(s) t^{-\frac{anf'}{f}+a-1}
\end{align*}
$$


左辺はtの関数だが、右辺は$A(s) + B(s)t^{C(s)}$。
$B(s)=0$は恒等的には満たされないと仮定する。
両辺をsで微分すると、

$$
0 = A'(s) + [B'(s)+ C'(s)\ln{t} ]t^{C(s)}
$$

ここで以下を使った。

$$
 \frac{d}{dx} \ln(t^x) = \ln{t}= \frac {\frac{d}{dx} (t^x)}{t^x}
$$

今度はtで微分してみれば、

$$
\begin{align*}
0 &= [B'(s)+ \frac{C'(s)}{t} + \frac{B'(s)+ C'(s)\ln{t} }{t} ]t^{C(s)}\\
0 &= B'(s) t + C'(s)t+ B'(s)+ C'(s)\ln{t}
\end{align*}
$$

tで微分して、

$$
\begin{align*}
0 &= B'(s)  + C'(s)+ \frac{C'(s)}{t}\\
0 &= (B'(s)  + C'(s))t + C'(s)
\end{align*}
$$

もう一度t微分。

$$
\begin{align*}
0 &= (B'(s)  + C'(s))
\end{align*}
$$

$$
0 = (B'(s)  + C'(s))t + C'(s)
$$

から、

$$
C'(s) =-B'(s)= 0,\quad C(s) = C_0, B(s) = B_0
$$

$$
0 = A'(s) + [B'(s)+ C'(s)\ln{t} ]t^{C(s)}
$$

から、

$$
A'(s) = 0, \quad A(s)=A_0
$$


結局、右辺は$A_0 + B_0 t^{C_0}$。これで右辺が$t$に依存しない必要十分な条件。
$f(s)$をC_0についてとくと、

$$
\begin{align*}
C(s) = C_0 &= -anL(\ln{f})'+a-1\\
\ln{f(s)}&= \frac{(a-1-C_0)}{an} s + l_0\\
f(s)&= \exp{\left[ \frac{(a-1-C_0)}{an} s + l_0 \right]}
\end{align*}
$$


$$
\begin{align*}
    A(0) &= A(s) \\
    &\propto \frac{(f^{n+1}(s))''}{C(s)f(s)} \\
    &\propto \frac{(f^{n+1}(s))''}{f(s)} \\
    &\propto \exp{\left[ \frac{(a-1-C_0)}{an} s (n+1-1) \right]}
    = \exp{\left[ \frac{(a-1-C_0)}{a} s  \right]} \ne const.
\end{align*}
$$

$a-1-C_0=0$ならば、これは定数で、解になるが、これは自明な解なので興味がない。
$a-1-C_0 \ne 0$ならば、この解は不適。$B(s)$を0に取らない限りこうなるので、$B(s)$は0である。そうすれば、

$$
\begin{align*}
    h^{-n} t^{a-1}
    &= 
    -\frac{1}{\frac{anf'}{f}-a+1} \frac{n}{(n+1)} e^{-s} \kappa_0 (f^{n+1})'' f^{-1}  = A_0
\end{align*}
$$

よって変数分離の結果、

$$
\boxed{
\begin{align*}
    A_0 &> 0 \\
    h  &= A_0  t^{(a-1)/n} \\
    0&= \frac{e^{-s} n}{(n+1)}  \kappa_0 (f^{n+1})'' +A_0 anf'
    + A_0 (1-a)f\\
    0&= 
    \frac{e^{-s}}{(n+1)}  \frac{\kappa_0}{A_0} (f^{n+1})'' + af'
    +  \frac{1-a}{n}f
\end{align*}}
$$

$$
    k_0 = \frac{\kappa_0}{A_0}
$$

$A_0=1$かつ、$n=5/2$で以前の結果ときちんと一致している。

$$
\boxed{
    [\frac{2}{5}(a-1)f - aLf' ] 
    = 
    \frac{2}{7} e^{-\xi/L}  k_0 (f^{7/2})''  }
$$


$$
\begin{align*}
  0&= e^{-s} k_0 \frac{(f^{n+1} )''}{n+1} + af'+\frac{1-a}{n}f\\
  0&= e^{-s} k_0 (f^{n}f' )' + af'+\frac{1-a}{n}f\\
  0&= e^{-s} k_0 (f^{n}f'' + nf^{n-1}f'^2 ) +af'+\frac{1-a}{n}f\\
\end{align*}
$$

- 変数変換の上、代入。

$$
\begin{align*}
&f   = K^{1/n}\\
&f'  = \frac{K^{\frac{1}{n} -1}}{n} K'\\
&f'' = \frac{K^{\frac{1}{n} -1}}{n} K'' 
      + K^{\frac{1}{n} -2} \frac{1-n}{n^2} (K')^2
\end{align*}
$$

$$
\begin{align*}
  0&= e^{-s} k_0 \left [\frac{K K^{\frac{1}{n} -1}}{n} K'' 
      + K^{\frac{1}{n} -1} \frac{1-n}{n^2} (K')^2 + n K^{1-\frac{1}{n}}\frac{K^{\frac{2}{n}-2}}{n^2}\right]
      + a\frac{K^{\frac{1}{n} -1}}{n} K' +\frac{1-a}{n} K^{1/n}\\
  0&= e^{-s} k_0 \left [\frac{K K^{\frac{1}{n} -1}}{n} K'' 
      + K^{\frac{1}{n} -1} \frac{1}{n^2} (K')^2 \right]
      +a\frac{K^{\frac{1}{n} -1}}{n} K' +\frac{1-a}{n} K^{1/n}\\
  0&= 
      e^{-s} k_0 \left[ K K'' 
      + \frac{K'^2}{n}  \right]
      +a K' +(1-a) K\\
\end{align*}
$$

n= 5/2を代入してみて、以前の結果と一致。

$$
\boxed{
    [(a-1)K - a K' ] 
    = 
    e^{-s}  D_0 [\frac{2}{5} K'^2 + K K''] }
$$

$$
\begin{align*}
  0&= 
      e^{-s} k_0 \left[ K K'' 
      + \frac{K'^2}{n}  \right]
      +a K' +(1-a) K\\
\end{align*}
$$


- まとめると、一般のnかつ変数分離形で、

$$
    \frac{\partial T}{\partial t} = \frac{e^{x/L} D_0}{n+1} \frac{\partial^2 T^{n+1}}{\partial x^2}
$$

$$
   s = \frac{x}{L} - a\ln{t}
$$

$$
A_0 >0
$$

$$
  \boxed{ h(t) = \left( \frac{t^{a-1} } {A_0}  \right)^{1/n} }
$$


$$
\boxed{
    T(x,t) = h(t) f(s)
    = \left[ \frac{ t^{a-1} K(s) }{A_0} \right]^{1/n} }
$$

$$
\boxed{
\begin{align*}
  0&= 
      e^{-s} \frac{D_0}{L^2 A_0} \left[ K K'' 
      + \frac{K'^2}{n}  \right]
      + a K' +(1-a) K\\
\end{align*}
}
$$

パラメータA_0の解釈として、

$$
    T(x,t) = h(t) f(s)
    = \left[ \frac{ t^{a-1} K(s) }{A_0} \right]^{1/n} 
    = T_0 \left[ \left( \frac{t}{t_0} \right)^{a-1} K(s) \right]^{1/n} 
$$


$$
    \frac{T_0^n}{t_0^{a-1}} = \frac{1}{A_0}
$$




## 一般のnで級数解を探す

$$
\frac{\partial T}{\partial t}= 
\frac{e^{-x/L} D_0}{n+1}  \frac{\partial ^2 T^{n+1}} { \partial x^2}
$$

- フロント構造の存在を仮定する。K(s)=0となるsが存在するという仮定。
- K(s=0) = 0で一般性失わないだろう。$s\to s+s'$で、$D_0\to D_0' = D_0 e^{-s'}$でクッションすればいい。（系の並進対称。）


- とりあえず、$\frac{D_0}{L^2 A_0} \to D_0$としよう。

$$
\begin{align*}
  0&= 
      e^{-s} \frac{D_0}{L^2 A_0} \left[ K K'' 
      + \frac{K'^2}{n}  \right]
      + a K' +(1-a) K\\
    &[(a-1)K - a K' ] 
    = 
    e^{-s}  D_0 [\frac{1}{n} K'^2 + K K''] 
\end{align*}
$$



$$
\begin{align*}
　    K   &=        c_1s +    c_2s^2 +  c_3s^3 + c_4s^4..\\
    K'  &=  c_1  + 2c_2s +   3c_3s^2 + 4c_4s^3     ..\\
    K'' &= 2c_2  + 6c_3s +  12c_4s^2 ..\\
\end{align*}
$$


$$
\begin{align*}
    K'^2    &=   c_1^2 + 4c_1c_2s + ( 4c_2^2  +  6c_1c_3 ) s^2 +.. \\
    K K''   &=         2c_1c_2s + ( 2c_2^2  +  6c_1c_3 ) s^2 + ..\\
    \frac{1}{n}K'^2 + KK'' &= \frac{1}{n}c_1^2 + (\frac{4}{n}+2)c_1c_2s   + ((4/n+2) c_2^2 +(1/n+1)6c_1c_3 s^2) + ..\\
    e^{-s} &= 1-s+\frac{s^2}{2}+...\\
    e^{-s} [\frac{1}{n}K'^2 + KK''] 
    &= 
    \frac{1}{n}c_1^2 + ((4/n+2)c_1c_2 - (1/n)c_1^2)s   
    + (\frac{1}{2n}c_1^2 + (4/n+2) c_2^2 +(1/n+1)6c_1c_3 -(4/n+2)c_1c_2)s^2 + ..\\
    (a-1)K -aK' 
    &=  -ac_1 + [(a-1)c_1-2ac_2]s + [(a-1)c_2 -3ac_3]s^2
\end{align*}
$$

- 微分方程式の係数を比較して、0,1,2次それぞれ

$$
\begin{align*}
    ac_1  &= \frac{-D_0 c_1^2}{n}\\
    (a-1)c_1 -2ac_2 &=  D_0 (\frac{n+2}{n}2c_1c_2 - \frac{1}{n}c_1^2) \\
    (a-1)c_2 -3ac_3 &=  D_0(\frac{1}{2n}c_1^2 + \frac{n+2}{n} 2c_2^2 
    +\frac{n+1}{n}6c_1c_3 -\frac{n+2}{n}2c_1c_2)\\
\end{align*}
$$

- リーディングタームは、

$$
    c_1  = -\frac{na}{D_0}
$$

- 二次の係数は、

$$
\begin{align*}
     -2ac_2 &=  D_0 (\frac{n+2}{n}2c_1c_2 - \frac{1}{n}c_1^2)- (a-1)c_1\\
            &=  D_0 (- \frac{2(n+2)a}{D_0} c_2 - \frac{na^2}{D_0^2} ) +(a-1)\frac{na}{D_0}\\
    2(n+1)ac_2   &=  \frac{na}{D_0} (-a +(a-1) ) = -\frac{na}{D_0} = c_1\\
    c_2     &= -\frac{n}{2(n+1)D_0}  = \frac{c_1}{2(n+1)a} \\
\end{align*}
$$


- 三次の係数は、

$$
\begin{align*}
(a-1)c_2 -3ac_3 
&=  
D_0 (\frac{1}{2n}c_1^2 + \frac{n+2}{n} 2c_2^2 +\frac{n+1}{n}6c_1c_3 -\frac{n+2}{n}2c_1c_2)\\
(a-1)\frac{c_1}{2(n+1)a} -3ac_3 
&= 
D_0(\frac{1}{2n}c_1^2 + \frac{n+2}{2n(n+1)^2a^2} c_1^2 +\frac{n+1}{n}6c_1c_3 -\frac{n+2}{n(n+1)a}c_1^2)\\
-3ac_3 -\frac{n+1}{n}6c_1c_3D_0
&= 
D_0(\frac{1}{2n}c_1^2 + \frac{n+2}{2n(n+1)^2a^2} c_1^2  -\frac{n+2}{n(n+1)a}c_1^2)
-(a-1)\frac{c_1}{2(n+1)a} 
\end{align*}
$$

$$
-3a-\frac{n+1}{n}6c_1 D_0 = -3a +\frac{n+1}{n} 6na = -3a+6(n+1)a = 3a+6na = 3a(2n+1)
$$

$$
\begin{align*}
3(2n+1)ac_3
&= 
\frac{D_0 c_1^2}{2n(n+1)^2a^2} [(n+1)^2a^2 +(n+2) -2(n+2)(n+1)a -a(a-1)n(n+1)\frac{1}{D_0c_1}] 
\\
&= 
\frac{D_0 c_1^2}{2n(n+1)^2a^2} [(n+1)^2a^2 +(n+2) -2(n+2)(n+1)a +(a-1)(n+1)] \\
&= 
\frac{D_0 c_1^2}{2n(n+1)^2a^2} [(n+1)^2a^2  -(2n+3)(n+1)a +1] 
\\
c_3 &= 
\frac{D_0 c_1^2}{6n(n+1)^2(2n+1)a^3} [(n+1)^2a^2  -(2n+3)(n+1)a +1] 
\\
&= 
-c_1 \frac{[(n+1)^2a^2  -(2n+3)(n+1)a +1] }{6(n+1)^2(2n+1)a^2}
\end{align*}
$$

- これを無限に繰り返して、級数解が得られる。収束性は不明。

$$
\begin{align*}
    K(s) = \sum_{i\ge1} a_i s^i 
    &= -\frac{na}{D_0} [s+ \frac{1}{2(n+1)a}s^2
    +\frac{[(n+1)^2a^2  -(2n+3)(n+1)a +1] }{6(n+1)^2(2n+1)a^2} s^3+ O(s^4)] \\
    &= -\frac{naA_0 L^2}{\kappa_0} [s+ \frac{1}{2(n+1)a}s^2
    +\frac{[(n+1)^2a^2  -(2n+3)(n+1)a +1] }{6(n+1)^2(2n+1)a^2} s^3+ O(s^4)]
\end{align*}
$$



$$
\boxed{
\begin{align*}
    T (x,t) = h(t)f(s)
    &= \left[\frac{t^{a-1}}{A_0} \sum_{n\ge1} a
    _i s^i\right]^{\frac{1}{n}} \\
    &= 
    \left[ -\frac{na t^{a-1}}{A_0 D_0} 
      [s+ \frac{1}{2(n+1)a}s^2
    +\frac{[(n+1)^2a^2  -(2n+3)(n+1)a +1] }{6(n+1)^2(2n+1)a^2} s^3+ O(s^4)
     \right]^{\frac{1}{n}}\\
\end{align*}}
$$

$$
    \left(s = \frac{x}{L} - a\ln{t}, 
    \quad D_0 =\frac{\kappa_0}{A_0 L^2} 
    \quad
    \frac{\partial T}{\partial t}= 
    \frac{e^{-x/L} \kappa_0}{n+1}  \frac{\partial ^2 T^{n+1}} { \partial x^2}
    \right)
$$

- この解の言わんとするところは、解の傾きは速度に対応するものなので、フリーパラメータになっているが、$K(s)\to 0$での傾きを決めれば、一次項と高次項の関係はs上の関数形状としてきちんと決まるということ。

$$
\begin{align*}
    x_f(t) &= aL\ln{t}+ x_0\\
    n_f(t) &= \exp(x_f(t)/L) = n_0 t^a\\
    v_f(t) &= \frac{aL}{t}\\
    T_f(t) &\sim \propto t^{2(a-1)/5}\\
    q_f(t) &\sim n_f v_f T_f \\
    &\sim \propto t^{7(a-1)/2}
\end{align*}
$$

解のフロント部は$s_0=s$で特徴づけられる。だから、$x_f = aL\ln{t}$, $t = e^{x_f/aL}$。
$t=1$で、原点にいる。
フロントの速度は$v_f(t) = \frac{L}{t} = L e^{-x_f/aL}$
この速さは、原点近傍で、$v_f = L$である。

$L\to \infty$とは、$e^{x/L}\to1$で、$x \sim 0$の近傍を拡大する操作に対応している。


s_0をずらすという操作は時間の規格化に対応している。すなわち、$t=1$に解のフロントは比熱が$e^{x/L}=1$となる場所にフロントが存在する。
t=0への時間の外挿は、解が-無限大に発散する時刻に対応している。
解の主要項は、
$$
\begin{align*}
    T (x,t) &=  
    \left[ -\frac{na t^{a-1}L^2}{\kappa_0} (\frac{x}{L}-a\ln{t})\right]^{\frac{1}{n}}\\
    &=  
    \left[ -\frac{na t^{a-1}L}{\kappa_0} (x-aL\ln{t})\right]^{\frac{1}{n}}\\
\end{align*}
$$

Lを無限大にする操作は時間に関して時刻の原点を見て、$e^{x/L}\to1$, $t\to 1$,$x\to1$、$v_f \to aL$という操作に対応している。従って、これは

$$
\begin{align*}
    T (x,t)  &= 
    \left[ -\frac{na t^{a-1}L}{\kappa_0} (x-aL\ln{t})\right]^{\frac{1}{n}}\\
    &\to
    \left[ -\frac{nv_f}{\kappa_0} (x-v_ft)\right]^{\frac{1}{n}}\\
\end{align*}
$$

これは、

$$
    \partial _t T = \kappa_0 e^{-x/L}\partial _x [T^n \partial _x T]
    \quad \to  
    \partial _t T = \kappa_0 \partial _x [T^n \partial _x T]
$$

に対する、フロント解の仮定、$(x-v_0t)$を積分した結果と対応する。





## 球対称な幾何学ならばどのように変化するべきか


$$
    \frac{\partial T}{\partial t} = 
    D_0\frac{e^{+r/L}}{r^{d-1}}\frac{\partial }{ \partial r} r^{d-1} \frac{\partial T}{\partial r}
$$

$r/L \to r$

$$
    \frac{\partial T}{\partial t} = 
    D_0/L^2 \frac{e^{r}}{r^{d-1}}\frac{\partial }{ \partial r} r^{d-1} \frac{\partial T}{\partial r}
$$


$T = \theta r^m$

$$
\begin{align*}
    \partial_r T  &= (1 + \frac{m}{r}) r^m   \theta \\
    r^{d-1} \partial_r T  &= r^{d-1+m}   (\partial_r + \frac{m}{r}) \theta \\
    \partial_r r^{d-1} \partial_r T  
    &= \partial_r \left [r^{d-1+m}   (\partial_r + \frac{m}{r}) \theta \right ] \\
    &= (d-1+m) r^{d-2+m} (\partial_r +\frac{m}{r}) \theta + r^{d-1+m}(\partial_r^2 -mr^{-2} ) \theta\\
    \frac{1}{r^{d-1+m}}\partial_r r^{d-1} \partial_r T 
    &= (d-1+m) (\frac{1}{r}\partial_r + \frac{m}{r^2})\theta  
     + (\partial_r^2 - \frac{m}{r^2}) \theta
\end{align*}
$$




$$
    \xi = \frac{r}{A(t)}
$$

$$
    T(\xi, t) = h(t) g(\xi)
$$

$$
    \frac{\partial T}{\partial t} = 
    d_0\frac{e^{r}}{r^{d-1}}\frac{\partial }{ \partial r} r^{d-1} \frac{\partial T}{\partial r}
$$






# 一次元の非線形拡散の自己相似解からの摂動

$$
    \frac{\partial T}{\partial t} = \frac{2}{7} \kappa_0 \frac{\partial ^2 T^{7/2}}{\partial x^2}
$$

$$
    T = T_0 + \epsilon \theta
$$

- 一次摂動が満たすべき0$を方程式は,$D_0$を０次解領域が作る拡散係数として、

$$
    \begin{align*}
    \frac{\partial \theta}{\partial t} &= \frac{\partial D_0 \theta}{\partial x^2}\\
    D_0 &= \kappa_0 T_0^{5/2}
    \end{align*}
$$

非摂動の解が自己相似形になるとする。

$$
    T_0 = A*(vt-x)^{2/5}
$$

$$
   A = [\frac{5v }{2\kappa_0 }]^{2/5}
$$

$$
    B = \kappa_0 A^{5/2} =\frac{5v}{2}
$$

$$
\begin{align*}
    \frac{\partial \theta}{\partial t} &= B * \frac{\partial ^2 (vt-x)\theta }{\partial x^2 } \\
    \frac{\partial \theta}{\partial t} &= 
    \frac{5 v}{2}[- 2\frac{\partial \theta}{\partial x} 
    + (vt-x)\frac{\partial^2 \theta}{\partial x^2}]\\
    \frac{2}{5v}\frac{\partial\theta}{\partial t} + 2\frac{\partial \theta}{\partial x} &= (vt-x) \frac{\partial^2 \theta}{\partial x^2}
\end{align*}
$$




- この一次摂動も$vt-x$変数の解として書けないだろうか。
- 放物型の微分方程式に見える。おそらく移流拡散的な。
- $\theta(x,t) = \Theta(vt-x)$, $vt-x =\xi$

$$
    v\Theta' = B* \frac{d^2 \xi \Theta}{d\xi^2}
$$

これは一回積分できる。

$$
\begin{align*}
    v\Theta &= \frac{5}{2}v \frac{d(\xi \Theta)}{d\xi}+c\\
     \Theta &= \frac{5}{2}(\Theta+\xi\Theta') +c_1 \\
    \frac{-3}{5}\Theta - \frac{2}{5}c_1 &= \xi \Theta' \\
    \frac{-5\Theta'}{3 \Theta + 2c_1}  &= \frac{1}{\xi}\\
    \ln{[ 3\Theta+2c_1] } &= \frac{-3}{5} \ln{c_2\xi}\\
    \Theta &= \frac{ (c_2\xi)^{-3/5} - 2c_1} {3}\\
           &= \frac{2}{3}[c_1 - \frac{c_3}{\xi^{3/5}}] \\
           &=  \alpha +\beta\frac{1}{\xi^{3/5}}
\end{align*}
$$

- 2つの摂動モード。定数と、$\xi^{-3/5}$のモード。
- この解は摂動が消えずに一緒に０次の解とともに流れていく。
- 摂動項としての条件,$T_0 \gg\Theta$がフロント部で破れる。

$$
  \frac{\xi^{-3/5}}{T_0}  = \frac{\xi^{-3/5}}{A\xi^{2/5}} \propto \xi^{-1}
$$

- というわけで、摂動解を具体的に導出できるものの、あまり嬉しい解ではないかもしれない。


# 別の整理方法を考える。

$$
\begin{align*}
    \frac{\partial \theta}{\partial t} &= \frac{5v}{2} * \frac{\partial ^2 (vt-x)\theta }{\partial x^2 } \\
    \frac{\partial \theta}{\partial t} &= 
    \frac{5 v}{2}[- 2\frac{\partial \theta}{\partial x} 
    + (vt-x)\frac{\partial^2 \theta}{\partial x^2}]\\
    \frac{2}{5}\frac{\partial\theta}{\partial vt} + 2\frac{\partial \theta}{\partial x} &= (vt-x) \frac{\partial^2 \theta}{\partial x^2}\\
\end{align*}
$$


### 案2
- $(x,vt) \to (\xi,\tau)=(vt-x, vt)$で変換。

$$
\begin{align*}
    \partial_{vt} &= \partial_{\xi} + \partial_{\tau}\\
    \partial_{x} &= -\partial_{\xi}\\
\end{align*}
$$

$$
\begin{align*}
    \frac{2}{5}\frac{\partial\theta}{\partial \tau} -\frac{8}{5}\frac{\partial \theta}{\partial \xi} &= \xi \frac{\partial^2 \theta}{\partial \xi^2}\\
\end{align*}
$$

$$
\begin{align*}
y &= \ln{\xi}\\ 
\partial_y &= \frac{d \xi}{d y}\partial_{\xi}
 = \xi\partial_{\xi}\\
 \partial_y^2  &=  \xi\partial_{\xi} \xi\partial_{\xi} 
 = \xi \partial_{\xi} + \xi^2 \partial_{\xi}^2 = \partial_y +\xi^2 \partial_{\xi}^2
 \end{align*}
$$

$$
\begin{align*}
\xi &= e^y\\ 
\partial_\xi   &=  e^{-y} \partial_y\\
 \partial_{\xi}^2  &= e^{-2y}(\partial_y^2 - \partial_y )
 \end{align*}
$$


$$
\begin{align*}
    \frac{2}{5}\frac{\partial\theta}{\partial \tau} 
    &=
    e^{-y} [\frac{8}{5}\frac{\partial }{\partial y} +   \frac{\partial^2 }{\partial y^2} - \frac{\partial}{\partial y}]\theta \\
    &=
    e^{-y} [\frac{3}{5}\frac{\partial }{\partial y} + 
    \frac{\partial^2 }{\partial y^2} ] \theta \\
   &=
    e^{-y} [\frac{3}{5}\frac{\partial }{\partial y} + 
    \frac{\partial^2 }{\partial y^2} ] \theta \\
   &=
    e^{-y}[\frac{3}{5} + 
    \frac{\partial }{\partial y} ] \frac{\partial }{\partial y}\theta \\
   &=
    e^{-y+ay} e^{-ay}[\frac{3}{5} + 
    \frac{\partial }{\partial y} ] e^{ay} e^{-ay}\frac{\partial }{\partial y}e^{ay}  e^{-ay} \theta \\
\end{align*}
$$

- 両辺ラプラス変換とか。

### 案3
- $(x,vt) \to (\xi,\tau)=(vt-x, 5vt-x)$で変換。


### 案4
- $(x,vt) \to (\xi,\tau)=(a_{11}vt-a_{12}x, a_{21}vt-a_{22}x)$で一般の線形変換


-darui.. kanngaetakunai






## 自己相似基底に対する安定性解析

自己相似解 $T_s(\xi,\tau)=\tau^{k}f(\xi)$を基底に取り、摂動 $u(\xi,\tau)$を入れて線形化する：

$$
T(\xi,\tau)=\tau^k f(\xi) + u(\xi,\tau)
$$

を PDE に代入し、一次近似で得られる線形方程式で分離 $u(\xi,\tau)=\tau^\lambda \phi(\xi)$ を試す。すると固有値問題が出てきて、

* $\Re(\lambda)<0$ のモードは減衰（安定）
* $\Re(\lambda)>0$ のモードは発散（不安定）
  となり、(C_2)-に相当するモードが安定か否か判定できる。これが **「(C_2) が長期に残るか」** を決める正統な方法。












# 密度に勾配がある時

$$
\begin{align}
    \frac{\partial e^{x/L} T}{\partial t} &= \frac{\partial T^{7/2}}{\partial x^2} \\
    \frac{\partial T}{\partial t} &= e^{-x/L} \frac{\partial T^{7/2}}{\partial x^2}
\end{align}
$$


例えば、勾配下で０次解出して、一次の摂動が満たすべき方程式はどうなる？

$$
\begin{align}
    \frac{\partial T}{\partial t} &= e^{-x/L} e^{ax} (\partial_x + a )^2 (e^{-ax} T^{7/2})\\
    \frac{\partial e^{x(1/L-a)}T}{\partial t} &=  (\partial_x + a )^2 ((e^{-2ax/7} T)^{7/2})\\
    1/L -a &= -2a/7,  \quad a=\frac{7}{5L}\\
    S &= e^{-\frac{2x}{5L}} T \\
    \frac{\partial S}{\partial t} &= (\partial_x + \frac{7}{5L} )^2 (S^{7/2})\\    
  &= \left [\partial_x^2  + 2\frac{7}{5L}\frac{\partial}{\partial x} + (\frac{7}{5L})^2 \right] (S^{7/2})\\
\end{align}
$$


$$
    S(x-vt) = S(s)
$$

$$
    (\frac{d}{ds} -v )S = \left [\frac{d^2}{ds^2} + \frac{14}{5L} \frac{d}{ds} + \frac{49}{25L^2}  \right ] S^{7/2} 
$$


- この変形はあんまり役に立たなさそう。綺麗だけど、問題が簡単になっているようには感じられない。
- いや、ここから自己相似解を構成しにいくと？
- $\xi = x-vt$が物理的な解になる気が全くしない。。
- $\xi = x - f(t)$, f(t)\propto tじゃないとODEに落ちないからなぁ。
- $S = X^{2m}$で関数変換して、整数階の微分方程式に無理に持っていく。意味ないよな。
- ここでも、S = K^{2/5}で変換してみるとか。


温度勾配が非常に弱い箇所では、適切な熱勾配を作る方向に熱が移動する。

$$
\begin{align}
\frac{\partial S}{\partial t} &= (\frac{7}{5L} )^2 (S^{7/2})\\
\frac{-2}{5}\frac{\partial S^{-5/2}}{\partial t} &= (\frac{7}{5L} )^2 \\
\frac{\partial S^{-5/2}}{\partial t} &= (\frac{-7^2}{10L^2} ) \\
      S^{-5/2} &= (\frac{-7^2}{10L^2} )t + S_0^{-5/2}(x) \\
      T^{-5/2}e^{x/L} &= (\frac{-7^2}{10L^2} )t + S_0^{-5/2}(x) \\
      T &= [(\frac{-7^2}{10L^2} )t e^{-x/L}+ T_0^{-5/2}(x) ]^{-2/5}\\
\end{align}
$$

流れが釣り合って温度がほとんど定常になるような場所は$T^{7/2}$の凸がない。

$$
  \begin{align}
    \frac{\partial T^{7/2}}{\partial x^2} &= 0 \\
    T &= (a(t)x + b(t))^{2/7} \\
  \end{align}
$$

あるいは、次も同じ。

$$
\begin{align}
    (\partial_x + \frac{7}{5L} )^2 (S^{7/2}) = 0\\
    (\partial_x )^2 e^{7x/5L} (S^{7/2}) = 0\\
    (\partial_x )^2 T^{7/2} = 0\\
\end{align}
$$

粗いscalingとして、

$$
\partial_t T \sim e^{-x/L} \frac{T^{7/2}}{l^2}
$$

front位置x_f(t)では、

$$  
\frac{dx_f}{dt} \sim e^{-x_f/L}
$$


$$  
    x_f(t) \sim L\ln{t}
$$






## exp熱容量中の伝播


$$
\partial_t T = e^{-x/L} \partial_x^2 (T^{7/2}) \qquad T\ge 0
$$

初期条件は

* $T(x,0)$ は (x<0) にコンパクト
* $x\to+\infty$ では $T=0$

という「加熱フロント」状況を想定する。

定義としてフロント位置を考える。

$$
x_f(t) := \sup{x \mid T(x,t)>0}
$$




- 有限伝播性　　無限速伝播は起きない

* 拡散係数：(D(x,T)=e^{-x/L} T^{5/2})
で、degenerate diffusionで、porous medium 型なので

* フロントは有限位置に存在する
これは既存理論（PME / FDE）に乗る。

フロント近傍では

* $T\to 0$
* 勾配は有限
* 非線形指数 (7/2) は「形」を決めるが
  進む速さを決めるのは前の係数

という構造になる。



## 上からの評価

フロントの最大速度（これ以上速く進めない）を評価する。
フロント近傍の幅を $\ell(t)$ とすると

$$
\partial_t T
\sim \frac{T}{t}
,\quad
\partial_x^2(T^{7/2})
\sim \frac{T^{7/2}}{\ell^2}
$$

したがって

$$
\frac{T}{t}
\lesssim
e^{-x_f/L}\frac{T^{7/2}}{\ell^2}
$$

フロントでは $T\sim 0$ なので
$\ell$ は (T) 依存だが、時間依存は弱い（PME の既知結果）。

→ 有効速度として

$$
\frac{dx_f}{dt}
\lesssim C  e^{-x_f/L}
$$

ここで (C) は定数（初期条件依存）。

これを積分すると

$$
x_f(t) \le L\ln t + C_1
$$



## 下からの評価

少なくともこのくらいは進む」ことは示せるだろうか。
サブソリューションとして

$$
T(x,t)
=
\begin{cases}
A(t)\left(1-\dfrac{x}{X(t)}\right)^{2/5} & x<X(t) \
0 & x\ge X(t)
\end{cases}
$$

のような PME型の自己相似プロファイルを考える。


$$
\dot X(t)
\sim e^{-X(t)/L}
$$

を満たすように
(A(t),X(t)) を選べる。

すると比較原理より

$$
x_f(t) \ge X(t)
$$

であり、積分すると

$$
X(t)=L\ln t + C_2
$$



上下から

[
L\ln t + C_2
;\le;
x_f(t)
;\le;
L\ln t + C_1
]

が得られる。

したがって

[
\boxed{
x_f(t)=L\ln t + O(1)
}
]

これは

* 単なる次元解析ではない
* ODE に落として解いたわけでもない
* **比較原理＋バリア構成による評価**

という、PDEとして十分「ちゃんとした」主張。

---

> なぜ対数になるのか？


* フロントを進める唯一のエンジンが
  (e^{-x/L}) という指数的に弱くなる係数
* 非線形拡散は「形」を決めるが
  **進行法則は係数で決まる**
* その結果
  $$
  \dot x_f \propto e^{-x_f/L}
  \Rightarrow x_f\sim \ln t
  $$

これは変数変換に依らない、**構造的結論**。




* フロント幅の時間依存
* (O(1)) の定数が何で決まるか
* 数値解との一致の仕方







OK、ここは**一番ごまかしが入りやすい所**だから、
式変形を極力減らして、

> **何を比較して、どこで (\dot X \sim e^{-X/L}) が出るのか**

だけに絞って説明するね。
「納得できる最小単位」まで分解する。

---

# 全体像

この議論は **「解を当てて解く」話ではない**。
やっているのは次の一点だけ：

> フロント近傍では
> **どんな解でも“これより遅くは進めない速度”がある**

それを示すために
**人工的に作った関数 (T_-)** を使う。

---

# ① なぜこの形を選ぶのか（最重要）

[
T_-(x,t)
========

A(t)\Bigl(1-\frac{x}{X(t)}\Bigr)_+^{2/5}
]

これは「都合のいい形」ではなく、

* 非線形拡散
  [
  \partial_t T=\partial_x^2(T^m)
  ]
  の**フロント近傍の一般形**

[
T \sim (x_f-x)^{1/(m-1)}
]

に **一致させただけ**。

今回 (m=7/2) なので

[
\frac{1}{m-1}=\frac{1}{5/2}=\frac{2}{5}
]

👉
**この指数は“勝手に選んでいない”**。

---

# ② 「サブソリューション」とは何か

定義はこれだけ：

[
\boxed{
\partial_t T_- ;\le; e^{-x/L}\partial_x^2(T_-^{7/2})
}
]

これを満たせば、

* 初期時刻で (T_- \le T)
* 境界でも (T_- \le T)

なら、

[
T_-(x,t)\le T(x,t)
]

が **常に成り立つ**（比較原理）。

---

# ③ どこを評価すればいいか

重要なのは **フロント直前**
(x \approx X(t))。

理由：

* 内部の形はどうでもいい
* **フロントが進む速さは“縁”で決まる**

---

# ④ フロント近傍でのスケーリング（核心）

## (a) 時間変化は何で決まる？

フロント位置が動くので

[
\partial_t T_- \sim -\dot X ,\partial_x T_-
]

フロント近傍では

[
\partial_x T_- \sim A X^{-1}(X-x)^{-3/5}
]

したがって

[
\partial_t T_- \sim \dot X , A X^{-1}(X-x)^{-3/5}
]

---

## (b) 右辺は？

[
T_-^{7/2} \sim A^{7/2}(X-x)^{7/5}
]

2階微分すると

[
\partial_x^2(T_-^{7/2})
\sim
A^{7/2}X^{-2}(X-x)^{-3/5}
]

👉
**両辺で ((X-x)^{-3/5}) が一致する**
（これが指数 (2/5) を選んだ理由）

---

# ⑤ ついに速度が出る

不等式
[
\partial_t T_- \le e^{-x/L}\partial_x^2(T_-^{7/2})
]

をフロント近傍で見ると：

[
\dot X , A X^{-1}
;\lesssim;
e^{-X/L} A^{7/2} X^{-2}
]

整理すると

[
\boxed{
\dot X ;\lesssim; e^{-X/L},A^{5/2}X^{-1}
}
]

---

# ⑥ なぜ (\dot X \sim e^{-X/L}) と言えるのか

ここで **自由度** がある：

* (A(t)) は好きに選べる
* (X^{-1}) は対数成長では無視できる

だから

[
A^{5/2}X^{-1} \ge c >0
]

となるように
**(A(t)) をゆっくり変える**（あるいは定数）。

👉 すると

[
\boxed{
\dot X(t) \ge c, e^{-X(t)/L}
}
]

これが出る。

---

# ⑦ ここで初めて ODE を「評価として」使う

[
\dot X = c e^{-X/L}
]

は**支配方程式ではない**。
「これより遅くはならない」という評価。

積分すると

[
X(t)=L\ln t + C
]

---

# ⑧ なぜこれで下からの評価になるか

* (T_-) はサブソリューション
* だから常に (T_- \le T)
* よってフロント位置も
  [
  X(t)\le x_f(t)
  ]

結論：

[
\boxed{
x_f(t)\ge L\ln t + O(1)
}
]

---

# ⑨ 一言で言うと

この議論はこういう意味：

> フロント付近に
> 「この形で、これ以上遅くは進めない
> 擬似的な解」を置くと、
> 本物の解は必ずそれより前にいる

---

## 最後に（率直なことを言う）

君がここで引っかかったのは **正常**。
この種の議論は論文でも

> “one can construct a suitable subsolution…”

で一行で流される。

でも今やっている数値計算と
**完全に同じ物理を言葉でやっている**だけ。

もし次に進むなら：

* この (T_-) を実際に数値で入れてみる
* フロント近傍の指数 (2/5) を測る

ここまで行くと、もう腹落ちすると思う。

どこをもう一段掘りたい？








ここ、かなり大事なポイントやね。
結論から言うと、**「A を選べる」というのは物理をいじっているのではなく、評価（estimate）の自由度の話**で、
**不等号の向きは「下から押さえる」ために意図的にそうしている**。

順にほどいて説明する。

---

## 1. まず前提を整理する

おそらく元にあるのはこんな形の式やと思う：

$$
\dot X(t)
=
A(t)^{5/2} X(t)^{-1} e^{-X(t)/L}
\quad (\text{あるいは } \ge \text{ で評価})
$$

* (X(t))：拡散フロントや勾配位置
* (A(t))：密度勾配や振幅スケール（時間依存）
* (e^{-X/L})：物理的に本質的な減衰



## 2. 「A(t) は好きに選べる」とは何を意味するか

> **A(t) の厳密な時間発展を解かずに、「あるクラスの挙動」だけを仮定して評価している**

つまりこれは

* **存在証明・下限評価**
* **漸近挙動（large (X)）の議論**


「A(t) が変動してもいいが、
$A(t)^{5/2} X(t)^{-1}$
が **ゼロに落ちないような時間発展**なら十分」
という **仮定を置いている**。


$$
A(t)^{5/2} X(t)^{-1} \ge c > 0
$$

となるような **A(t) のクラスを選ぶ**。
「**全解を扱うのではなく、ある条件を満たす解集合を見る**」
という解析的な操作。


## 3. なぜ (X^{-1}) を「無視できる」と言えるのか

これは **対数成長 vs 指数減衰** の話。

$$
X^{-1} \sim \frac{1}{X} \quad\text{は}
\quad X\to\infty \text{でゆっくり減る}
$$

一方で

$$
e^{-X/L}
$$

は **支配的に小さくなる**。

だから漸近的には

* 本質的なのは指数
* 多項式因子は「定数に吸収できる」

→ 定数 (c) に押し込む。



## 4. なぜ不等号が「逆転」しているように見えるのか

ここが一番混乱しやすい。

### やりたいこと

$$
\dot X \sim e^{-X/L}
$$

という **最低限これくらいは進む**、という主張。

つまり

$
\dot X(t) \ge \text{something}
$

を示したい。

### 元の形を分解すると

$$
\dot X
=
\big(A^{5/2} X^{-1}\big) e^{-X/L}
$$


$$
A^{5/2} X^{-1} \ge c
$$

と仮定すると

$$
\dot X
\ge
c e^{-X/L}
$$

👉 **不等号は一度も逆転していない**
ただし

* 「等式」→「下からの評価」に変えている
* そのため **≥ を使う**


####  物理的な意味
拡散フロントはどんなに条件が悪くても指数的に抑制された速度では前進し続ける

* A が多少揺れても勾配が多少薄れても指数項が支配している限り、運動は止まらない



* **A(t) を選べる**
  → 解のクラスを限定して評価しているだけ
* **不等号は逆転していない**
  → 下限評価に切り替えただけ

  $$
  \boxed{
  \dot X \gtrsim e^{-X/L}
  }
  $$
  という漸近構造

