var documenterSearchIndex = {"docs":
[{"location":"closecoupling.html#Close-coupling-formalism-1","page":"Close coupling formalism","title":"Close coupling formalism","text":"","category":"section"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"Upercase vectors denote vectors parralel to the surface. For example vec R vec K_i","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"Subsitute the potential $V$ and the wavefunction $\\psi$ as ourier series time-independend Schrödinger equation. The potential is written as:","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"V(vec r) = sum_G V_G(z) e^i vec G cdot vec R","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"and the wavefunction can be written as:","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"psi(vec r) = sum_G psi_G(z) e^i (vec G + vec K_i) cdot vec R ","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"The timeindependend Schrödinger equation for the scattering Problem has the following form.","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"left-Delta - vec k_i^2 + V(vec r)right psi(vec r) = 0","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"The first part (-Delta psi(vec r)) can be rewritten using the partial derivatives and the fourier series of psi.","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"beginalign\n-(partial^2_x + partial^2_y + partial^2_z) sum_G psi_G(z) e^i (vec G + vec K_i) cdot vec R =\n\n- sum_G e^i (vec G + vec K_i) cdot vec R partial^2_z psi_G(z)  -\nsum_G psi_G(z) (partial^2_x+partial^2_y) e^i (vec G + vec K_i) cdot vec R =\n\n- sum_G e^i (vec G + vec K_i) cdot vec R psi_G^(z)  +\nsum_G psi_G(z) left((G_x + K_i_x)^2+(G_y + K_i_y)^2right) e^i (vec G + vec K_i) cdot vec R=\n\n- sum_G e^i (vec G + vec K_i) cdot vec R psi_G^(z)  +\nsum_G psi_G(z) (vec G + vec K_i)^2 e^i (vec G + vec K_i) cdot vec\nR=\n\nsum_G e^i (vec G + vec K_i) cdot vec R left((vec G + vec K_i)^2 psi_G(z) - psi_G^(z)right)\n\nendalign","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"Together with the second part (vec k_i^2  psi(vec r)) the equations looks like this:","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"sum_G e^i (vec G + vec K_i) cdot vec R leftleft((vec G + vec K_i)^2-vec k_i^2right) psi_G(z) - psi_G^(z)right","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"The third part (V(vec r) psi(vec r)) can be written as:","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"beginalign\nsum_G V_G(z) e^i vec G cdot vec R sum_G psi_G(z) e^i (vec G + vec K_i) cdot vec R = \nsum_vec Gvec G V_G(z) e^i (vec G + vec G + vec K_i) cdot vec Rpsi_G(z) \nendalign","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"Combining all three parts and multiplying with e^-i (vec G+vec K_i) cdot vec R results in:","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"sum_G e^i (vec G - vec G^) cdot vec R leftleft((vec G + vec K_i)^2-vec k_i^2right) psi_G(z) - psi_G^(z)right+\nsum_vec Gvec G V_G(z) e^i (vec G + vec G - vec G^) cdot vec Rpsi_G(z) = 0","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"Integrating over der unit cell will eliminate the exponential terms by introducing dirac deltas.","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"sum_G int_U e^i (vec G - vec G^) cdot vec R dvec R leftleft((vec G + vec K_i)^2-vec k_i^2right) psi_G(z) - psi_G^(z)right+\nsum_vec Gvec G V_G(z)  psi_G(z)int_U e^i (vec G + vec G - vec G^) cdot vec R dvec R = \n\nsum_G A_Udelta(vec G - vec G^) leftleft((vec G + vec K_i)^2-vec k_i^2right) psi_G(z) - psi_G^(z)right+\nsum_vec Gvec G V_G(z)  psi_G(z)A_Udelta(vec G + vec G - vec G^) = \n\nA_U leftleft((vec G^ + vec K_i)^2-vec k_i^2right) psi_G^(z) - psi_G^^(z)right+\nsum_vec G V_G^-G^(z)  psi_G^(z)A_U ","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"With this the Schrödinger equation transforms to:","category":"page"},{"location":"closecoupling.html#","page":"Close coupling formalism","title":"Close coupling formalism","text":"psi_G^^(z) \n = sum_vec G V_G^-G^(z)  psi_G^(z)\n- left(vec k_i^2 - (vec G^ + vec K_i)^2right) psi_G^(z) ","category":"page"},{"location":"index.html#HASlib.jl-1","page":"HASlib.jl","title":"HASlib.jl","text":"","category":"section"},{"location":"index.html#","page":"HASlib.jl","title":"HASlib.jl","text":"Documentation for HASlib.jl","category":"page"}]
}