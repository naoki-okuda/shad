
3.1 The total energy absorbed by the medium in the presence of an electric field disturbance E(r,t) is given by 

$$
E_{abs}= \int dr \int_{-\infty}^{\infty} dt E(r,t)\cdot J(r,t)
$$

show that this can also be written in terms of the spectral components as 

$$
E_{abs} = \frac{1}{2\pi V}  \sum_k \int_{-\infty}^{\infty} E^*(k,\omega)\cdot \frac12[\sigma(k,\omega) + \sigma^+(k,\omega)] \cdot E(k,\omega)
$$

where $\sigma^+(k,\omega)$ is the Hermitian conjugate tensor of $\sigma(k,\omega)$, that is 

$$
    [\sigma^+(k,\omega)]_{ij} = [\sigma(k,\omega)]_{ji}^*
$$

[It follows from this culcuration that the conductivity is anti-Hermitial ($\sigma = -\sigma^+$) when there is no absorption.]

---

- 暗に含まれている仮定
- 系は電場擾乱に対して安定に応答する。
- 系は電場擾乱に対して因果的に応答する。
- 電場擾乱は十分に弱い。
- 電場の擾乱のpropagatorを介した線形結合で、プラズマ内部に誘起される電流が説明されるとする。
- $\sigma(r,r';,t,t')$: propagatorを表すテンソル。
- 非摂動の系は時間空間に並進対称性を持っているとする。(時空間で一様)
- 体積は一応有限区間の積分になっている。対応して波数ベクトルは下限があって離散値。体積無限と考えても特段支障はないだろう。
- eq(3.1,3.2,3.3,3.4,3.5)を使う。


$$　
\begin{align*}
J_i(r,t) 
&= \int_V dr' \int_{\infty}^t dt' \sigma(r,r';t,t')_{ij} E_j(r',t') \quad (3.1)\\
&=  
\int_V dr' \int_{\infty}^t dt' \sigma(r-r',t-t')_{ij} E_j(r',t') \quad (3.2)\\
\end{align*}
$$

$$
\begin{align}
    E_{abs} = \int dr \int_{-\infty}^{\infty} dt \int 
\end{align}
$$