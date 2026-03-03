# bremsstrahrang

制動輻射と熱制動吸収についてまとめる。

### References

[1] Gaunt, J. A. (1930). Continuous Absorption. *Philosophical Transactions of the Royal Society of London. Series A*, 229, 163–204.

[2] Novikov & Throne



# 熱制動輻射

- 基本的にe-i衝突による輻射がドミナント。
- e-e衝突による輻射はT>数10keVで無視できなくなってくる。これは相対論的な効果。
- retardation effects


Thomson cross section
```math
  \sigma_t = 8\frac{\pi}{3}  r_e^2 = 6.652 \times 10^{-29} \, \rm{m^2}
```
The Rydberg energy 
```math
R_y = \frac{m_e e^4}{8 \epsilon_0^2 h^2} = \frac{\alpha^2  m_e c^2}{2} \simeq 13.6 \, \rm{eV}
```

- distribution function is normalized $\int d^3 \bm{p} f(\bm{p} )= 1$
- $\delta_{1,2}$は粒子ラベルに関するクロネッカーデルタ。同種を数える時、重複に由来する半分のファクタをつける。
```math
R = \frac{n_1 n_2}{1 +\delta_{12}} \int d^3 \bm{p_1} d^3 \bm{p_2} f(\bm{p_1} ) f(\bm{p_2})  \left[ (\bm{v_1 - v_2} )^2   - \frac{v_1 \times v_2}{c^2} \right] \frac{d \sigma}{d\nu}
```

# The non-relaivistic e-i collision
- The classical model by Kramers
- More accurate model includes
- the Born aproximation
- the Elwert's correction for low energy.
- The most accurate one is by Sommerfeld

```math
 A = \frac{ 2 \pi \sigma_t}{\alpha} = \frac{2}{3}\frac{h e^2}{\epsilon_0 m_e ^2 c^3} = 5.728 \times 10^{-26} \, \rm{m^2}
```
the Kramers断面積
```math
 \frac{d \sigma _ k}{d \nu} = \frac{A}{\nu \sqrt{3} \pi} \eta_0^2 
```

the Born 近似
```math
  \frac{d \sigma_b}{d \nu} = \frac{A}{\nu \pi^2} \eta_0^2 \ln{ \left( \frac{\eta_f + \eta_0}{ \eta_f - \eta_0 } \right)}
```
 the Elwert 較正
 ```math
  \frac{d \sigma_e}{d\nu} = \frac{A}{\nu \pi^2} \eta_0\eta_f 
  \frac{1 - e^{-2 \pi \eta_0}}{ 1 - e^{2 \pi \eta_f}}
  \ln\left( \frac{\eta_f + \eta_0}{ \eta_f - \eta_0} \right)
 ```

 the Sommerfeld 非相対論
 ```math
 \frac{d \sigma_s}{ d\nu} = \frac{A}{\nu} \frac{\eta_0^2}{(e^{2\pi \eta_0}-1)(1 - e^{-2\pi \eta_f})} 
 x\frac{d}{dx} |F(x)|^2
 ```

- $E_0$は電子のエネルギー
- $E_f$はでていく（コリジョン後の）電子のエネルギー
- $h \nu \in [0,E_0]$は輻射される光子のエネルギー
```math
E_f = E_0 - h\nu\\
```
```math 
\eta_{0,f} = \sqrt{\frac{Z^2 R_y}{E_{0,f}}}\\
```
```math
v_{0,f} = \sqrt{ \frac{2E_{0,f}}{m_e} }\\
```
```math
x = \frac{4 \eta_0 \eta_f}{ (\eta_0 - \eta_f)^2}
```
超幾何関数
```math
F(x) = _2F_1(i \eta_0, i\eta_f ; 1;  -x)
```

公式
```math
 x \frac{d}{dx} |F(x)|^2 
  = \eta_0 \eta_f \frac{|F^2 ( -i \eta_0+1, -i \eta_f; 1 ; -x) - F^2(-i \eta_f +1, -i\eta_0, 1 ; -x)|}{ \eta_f - \eta_0}
```

電子のエネルギー空間での規格化された分布関数
```math
\int_0 ^ \infty dE_0 f(E_0) = 1
```

周波数ごとの全パワーは次のように与えられる。


# 2.2　相対論的e-i散乱による制動輻射

- 普通は、ベーテ-ハイトラー(BH)+ボルン近似
- BHは高エネルギー側で有効になるが、低エネルギー電子・低エネルギー光子でよくなくなる。なぜなら、


# 2.3 非相対論e-e







# 熱制動吸収係数

- 熱制動輻射と黒体輻射スペクトルの比によって与える。(根拠はキルヒホッフの法則。)
- $B_{\nu}(T)$ : 黒体輻射強度スペクトル $\rm{[B] = [Jm^{-2}s^{-1}/Hz]}$
- g_ff : gaunt factor
- $r_{cmp}$: 電子コンプトン波長
- $h\nu/m_e c^2  = r_{cmp} (\nu/c) $
- $\alpha = e^2/\hbar c = 2\pi r_e/r_{cmp}$ 
- $\alpha r_{cmp} = e^2/(\hbar c) * h/m_e c = 2\pi e^2/m_e c^2=2\pi r_e$

$$
\begin{align*}
    \alpha_{\nu}^{ff} &= 
    \frac{4}{3}\sqrt{\frac{2\pi}{3}} 
     \frac{e^6 n_e n_i Z_i^2}{m_e^{3/2} h c \sqrt{T} \nu^3} 
     (1-e^{-h\nu/T}) g_{ff} \\
    &= 
     \frac{4}{3}\sqrt{\frac{2\pi}{3}} 
    \frac{(\alpha/2\pi)^3 h^2 n_e^2 Z_i}{m_e^{2}c^2 \sqrt{T/m_ec^2} (\nu/c)^3} 
    (1-e^{-h\nu/T}) g_{ff} \\
    &=
     \frac{4}{3}\sqrt{\frac{2\pi}{3}} 
    \frac{(\alpha/2\pi)^3 r_{cmp}^2 n_e^2 Z_i}{\sqrt{T/m_ec^2} (\nu/c)^3} 
    (1-e^{-h\nu/T}) g_{ff} \\
    &= 
     \frac{4}{3}\sqrt{\frac{2\pi}{3}} 
    \frac{(\alpha/2\pi)^3 r_{cmp}^5 n_e^2 Z_i}{\sqrt{T/m_ec^2} (h \nu/m_e c^2)^3} 
    (1-e^{-h\nu/T}) g_{ff} \\
    &= 
     \frac{4}{3}\sqrt{\frac{2\pi}{3}} 
    \frac{r_e^3 r_{cmp}^2 n_e^2 Z_i}{\sqrt{T/m_ec^2} (h \nu/m_e c^2)^3} 
    (1-e^{-h\nu/T}) g_{ff}\\

\end{align*}
$$

$$
    \alpha_{\nu}^{ff}*{1\mu m}=
     \frac{4\pi^2 }{3}\sqrt{\frac{2\pi}{3}} 
    \frac{(r_e/1\mu m) (r_{cmp}/1\mu m)^2 (n_e/n_c)^2 Z_i}{\sqrt{T/m_ec^2} (h \nu/m_e c^2)^3} 
    (1-e^{-h\nu/T}) g_{ff}
$$



# Gaunt factor ガウント因子,ゴーント因子？

- プラズマの自由–自由放射（熱制動）で最も基本の放射係数は以下で与えられる。
- これは古典近似（クーロン衝突の加速運動の放射）に基づいており、量子力学的な散乱断面積とズレる。
- ズレを補正する因子が Gaunt 因子 (g_{ff})と呼ばれる。
- John Arthur Gauntに因む。

> 電離ガス中の制動放射（自由-自由放射）において、古典力学に基づくモデル計算に対する補正係数をいう。非常に大雑把な近似計算と比較すると陽イオンのそばを電子が通過するときの衝突係数bの実際的な最大値と最小値をbmaxとbminとした場合、𝑔 =(√3/𝜋) ×log𝑒⁡(𝑏max/𝑏min)に対応すると解釈することもできるが、より正確には量子力学的効果も影響する補正係数である。個々の電子に対するゴーント因子は入射電子の速度にも依存するので、熱的電離ガスに対する計算では熱運動速度で平均されたゴーント因子を用いる必要がある。いずれの場合も、概ね1に近い値をとり、電波領域では1程度の値となる。
https://astro-dic.jp/gaunt-factor/

> The Gaunt factor (or Kramers–Gaunt factor) is a correction factor that accounts for the effect of quantum mechanics on an object's continuous x-ray absorption or emission spectrum. In cases where classical physics provides a close approximation to the true spectrum, the Gaunt factor is close to 1. When quantum physics becomes important, it becomes bigger or smaller than 1.[1]\
 The Gaunt factor was named after the physicist John Arthur Gaunt, based on his work on the quantum mechanics of continuous absorption.[2] Gaunt used a 'g' function in his 1930 work, which Subrahmanyan Chandrasekhar named the 'Gaunt factor' in 1939.[3] It is sometimes named the Kramers-Gaunt factor as Gaunt incorporated the work of Hendrik Anthony Kramers.

$$
j_\nu \propto Z^2 n_e n_i T^{-1/2} \exp(-h\nu/kT)
$$



$$
    j_\nu = j_\nu^{\rm classical}  g_{ff}
$$


### ● 数値の桁

* おおむね **1〜数程度**（0.1 〜 5 程度）
* 高エネルギーでやや大きく、低エネルギーで対数的に増えたり減ったりする。

### ● 依存関係

Gaunt 因子は次の3つの変数に依存します：

1. **光子エネルギー (h\nu)**
2. **電子温度（電子の運動エネルギー）**
3. **電離イオンの電荷 Z**


$$

$$

### ● 低周波数近似（Menzel & Pekeris 1935）

$$
g_{ff} =
\frac{\sqrt{3}}{\pi}
\ln
\left(
\frac{(2T)^{3/2}}{\pi e^2 Z h\nu m_e^{1/2}}
\right)
$$

### ● 高周波数（hν ≳ kT）では補正項が変わり、指数的抑制が支配的

→ ガウント因子は影響が小さい（1前後）

### ● 相対論的ガウント因子（Itoh+ 1985 など）

10 keV 程度では相対論補正はわずか。


<!-- 

### ● 本質的に「クーロン散乱の量子補正」

* 古典では衝突距離の最短距離や最大 impact parameter などを入れると **log(b_max/b_min)** が出る。
* 量子論ではこれが **log(エネルギー比)** に対応し、これが Gaunt 因子の log 依存を生む。 -->



# ■ 3. 周波数ごとのガウント因子の直感

### ① **低周波数（hν ≪ kT）**

* 光子は電子の緩い加速場を見て放射されるので、古典近似が比較的良い
* (g_{ff} \sim 1) 付近
* ただし「対数的」に少しずれるので、1〜3程度に変動する

### ② **高周波数（hν ≳ kT）**

* 電子の熱速度では大きな加速度が必要で、量子補正が効く
* (g_{ff}) は **減少方向** または **1 以下** に寄る
* 指数減衰（exp(-hν/kT)）が支配するのでそもそも寄与は小さめ

### ③ **Z が大きいほど g_ff は変動性が大きい**

* Coulomb 強度が Z 倍 → 衝突の量子補正も変わる



# ■ 4. 実務上どう扱われているか？

### ●（A）“g_ff ≃ 1” とする簡易モデル

ICF のざっくり計算、プラズマ輸送コードの初期スケッチでは **1〜1.2** と置いて OK。

### ●（B）周波数平均 Gaunt 因子（Planck or Rosseland average）

実際の放射輸送では **周波数平均したガウント因子** を使う：

* **Planck 平均**
* **Rosseland 平均**

どちらも表にしたデータセット（Karzas & Latter (1961) や Sutherland (1998)）がよく使われる。

### ●（C）PIC や衝突輻射モジュールでは tabulated data を参照

* HYDRA, CRASH, FLASH, MULTI などの HED コードでは
  (g_{ff}(\nu, T, Z)) がテーブル化されていて、補間して使われる。



# ■ 6. プラズマでの物理的な意味（重要）

### なぜガウント因子が必要か？

1. **古典理論では impact parameter の cutoff が曖昧**
2. **量子力学的には連続状態同士の遷移確率を厳密に計算できる**
3. その結果が古典と異なるため
   → **“欠けている log の分だけ補正”** が必要になる
4. これが Gaunt 因子

特に

* 低 E 光子
* 高 Z プラズマ
* 低温プラズマ（電子がゆっくり）

では Gaunt 因子の補正が効きやすい。


# ■ 7. 10 keV プラズマで典型値は？


あなたが今扱っている **T ~ 10 keV**, **E_photon ~ 1–30 keV** という状況では：

* (g_{ff} ≈ 1.1〜1.4) 程度が典型
* なので、ざっくり計算では **1 で十分**
* 精密にやるなら tabulated data を参照（Sutherland+1998 など）




> [1]より引用 \
Abstract\
For some years astrophysicists have been looking for an adequate theory of continuous—as opposed to line—absorption. The natural and generally accepted mechanism is the transition of an electron from a bound state to a free state, or from one free state in the neighbourhood of an ion to another free state of greater energy. The theory hitherto used is KRAMERS’ theory of the converse process of emission by a free electron passing a positive nucleus. Since emission and absorption are intimately connected by thermodynamics, the absorption coefficient can be calculated from KRAMERS’ formulae. Unfortunately, although KRAMERS’ work is in good agreement with laboratory observations of X-rays, it gives an absorption coefficient many times smaller than that found from astronomical observations. KRAMERS used classical electromagnetism, and got over the difficulty of the quantisation of negative energies by distributing the classical emission that involved captures somewhat arbitrarily among the various stationary states. It was evidently desirable to do the same work by means of quantum theory, both for the sake of greater rigour, and in the hope of finding a larger absorption. The foundations of such a theory were laid by OPPENHEIMER,|| upon the bed-rock of SCHRODINGER’s equation, in a paper to which this one is much indebted. The matrix-elements involving positive energies present considerable difficulty, and the approximations used by OPPENHEIMER in his paper of 1927 are unsuitable for stellar applications.

はい、その理解はかなり正確です。**Gaunt 因子に exp(γ)（≈1.781…）が現れるのは、量子補正積分の中に “対数的発散構造” があるからで、これはクーロンポテンシャルと特殊関数（とくにベッセル関数や指数積分）を含む積分の本質と深く関係しています。**阻止能（Bethe stopping power）にもまったく同じ数学的構造が出てきます。

以下、できるだけ「抽象的でなく本質だけ」を簡潔に説明します。

---

# ✔ なぜ exp(γ) が Gaunt 因子に出るのか？

Gaunt 因子の原理的な定義は、
**クーロン場で加速される電子の量子遷移確率（bremsstrahlung の微分断面積）を精密に計算したときの補正係数** です。

この遷移確率を計算する過程で、以下のような積分が出ます：

[
\int_0^\infty K_{i\eta}(x)^2 , x , dx
]

または

[
\int_0^\infty \frac{\sin(ax) - ax}{x^2} dx
]

こうした積分の多くは
**漸近展開の定数項に「γ（オイラー定数）」が自然に現れる** ものです。

代表例：指数積分

[
\mathrm{Ei}(-x) = \gamma + \ln x + O(x)
]

つまり、量子力学的な遷移振幅を解析的に扱うと **ln(…) + γ** のような形が標準的に出る。

そして、Gaunt 因子 g_ff は典型的に

[
g_{ff} \sim \ln!\frac{A}{\hbar \omega} + \gamma
]

のような形になり（Novikov–Thorne や Rybicki & Lightman の導出でも同じ構造が出る）、
この “γ を含む組” を指数化したのが **exp(γ) ≈ 1.781** です。

---

# ✔ 「対数が関係するから exp(γ) が出る」は正しい

まさにその通り。

クーロン散乱 × 連続スペクトル の積分構造は常に

[
\int^\infty \frac{dx}{x} \quad\Rightarrow\quad \ln x + \gamma
]

の形を含みます。

**クーロンポテンシャルが 1/r で長距離なので、低エネルギー極限でログ発散が出る**
→
**特殊関数で正則化すると、定数項が γ になる**

という仕組みです。

この物理背景は、Coulomb ログ（ln Λ）と数学的にきわめて似ています。

---

# ✔ 阻止能（Bethe stopping power）でも同じ現象が出る

Bethe の阻止能式は

[
\left(-\frac{dE}{dx}\right)_{\rm Bethe}
\propto
\ln!\frac{2 m_e v^2}{I}
]

で、I（平均励起エネルギー）の計算に
**Bessel 関数の積分や指数積分 Ei が出てくる**ため、同じ γ が入り込みます。

たとえば次の恒等式：

[
\int_0^\infty J_0(ax) e^{-bx} dx
= \frac{1}{\sqrt{a^2 + b^2}}
]

のような積分を漸近的に扱うと、
**“ln term + γ”** が必ず顔を出す。

つまり：

**長距離クーロン相互作用 × 振動積分（Bessel） × 漸近展開**
→
**ln(…) と γ の組が自動的に出る**

という、物理と数学が完全にリンクした構造。

---

# ✔ まとめ（質問にそのまま答える）

* **はい、Gaunt 因子の中で exp(γ) を使うのは対数構造が原因です。**
* **クーロン場の長距離性 → 対数発散 → 特殊関数で正則化 → γ の登場**
* **阻止能でもベッセル関数積分を漸近展開すると γ（ひいては exp(γ)）が出てくるのは同じ理由。**

つまり、**数学的構造としては全く同じファミリーに属する現象**です。

---

必要なら、

* Gaunt 因子の導出の具体的なステップ
* “ln + γ” がどの積分で現れるかの実例
* Novikov–Thorne の該当式の解説

もできます。


