c_L = 2.99792458e8
e_q = 1.602176634e-19
u_MeV = u_kg*c_L*c_L/e_q



m_e = 0.0005485799090441
d_e = 0.0000000000000097

m_p = 1.0072764665789
d_p = 0.0000000000083

m_H = 1.007825031898
d_H = 0.000000000014

a = m_e+m_p-m_H
b = sqrt(d_e*d_e + d_p*d_p + d_H*d_H)
print a
print b
print a*u_MeV
print b*u_MeV


m_e_Max  = 0.0005485799090538
m_e_min  = 0.0005485799090344
m_p_Max  = 1.0072764665872
m_p_min  = 1.0072764665706
m_H_base = 1.007825031898
m_H_err  = 0.000000000014
m_H_Max  = m_H_base + m_H_err
m_H_min  = m_H_base - m_H_err
m_H_Max_old = 1.00782503232
m_H_min_old = 1.00782503214
delMMax  = m_e_Max + m_p_Max -m_H_min
delMmin  = m_e_min + m_p_min -m_H_Max
M_res    = (delMMax+delMmin)*0.5
M_delta  = (delMMax-delMmin)*0.5
u_kg     = 1.66053906892e-27

