export const blog_crm = {
    id: 'coding-theory',
    title: 'Coding Theory - CRM',
    date: 'May 8, 2024',
    snippet: 'Here I talk about the course taken at the Centre de Recerca Matemàtica "Highlights of Algorithmic Coding".',
    content: [
      {
        type: 'h2',
        id: 'day1', // Anchor ID
        text: 'Day 1'
      },
      {
        type: 'p',
        id: 'day1-text', // Anchor ID
        text: `<p>
            We will start by remembering the basics: <br>
            We have as the basic elements the alphabet that we will use to create our message $ \\Sigma $.
            <p>
            Absolute Hamming distance is defined as: Let $v, \\hat{v} \\in \\Sigma^n \\quad \\Delta (v, \\hat{v}) = \\# \\{\\ i \\ | \\ v_i \\neq \\hat{v}_i\\}$
            </p>
            <p>
            Relative Hamming distance is defined as: $\\delta (v, \\hat{v}) = \\frac{\\Delta(v, \\hat{v})}{n} \\text{ where } \\delta(v, w) \\in [0, 1] \\ \\forall v,w \\in \\Sigma^n$
            </p>
            <p>
                Communication architecture: <br>
                We want to know the conditions under which $m = \\hat{m}$ or in case it is non-deterministic we want to know if $Pr[m = \\hat{m}] \\geq 1-o_n(1)$. <br>
                We will define the rate as $Rate \\triangleq \\frac{k}{n}$ and we will take into account two new functions, the encoding and decoding functions:<br> 
                We define the encoding and decoding function as: $E: \\Sigma^n \\to \\Sigma^k \\quad D: \\Sigma^k \\to \\Sigma^n$
                The capacity of a channel is defined as: Maximum rate such that when $k, n \\to \\infty \\ \\exists E, D$ such that $Pr[m= \\hat{m}] = 1-o_n(1)$
        </p>
        <p>
            Shannon's noisy theorem: <br>
            $$Capacity(BSC(p)) \\geq 1-h(p) \\text{ where h(p) is the entropy defined as } h(p) = p\\log_2 (\\frac{1}{p}) + (1-p) \\log_2 (\\frac{1}{1-p})$$
        </p>
        <p>
            We will now define the Absolute Hamming distance for a code such as $\\Delta(C) = \\min\\limits_{x,y \\in C \\ x \\neq y} \\{ \\Delta(x, y)\\} \\ $ where $ \\ C = Im(E) \\triangleq \\{ E(n) |  m \\in \\Sigma^k\\} \\subseteq \\Sigma^n$ <br>
            From this definition, we can now tell which codes are good, for examle, let us consider a code $C$ such that $\\Delta(C) \\leq 2e$ where $e$ is the maximum number of errors a channel can make, therefore, there exists a pair of messages $v, w \\in \\Sigma^n$ such that if the channel has swapped $e$ of the coordinates that were different we would be unable to tell if the original message was either $v$ or $w$. <br>
            We can also define the Relative Hamming distance similarly: $\\delta(C) = \\frac{\\Delta(C)}{n}$.
        </p>
        <p>
            From now on we will try to maximize the $\\delta (C)$ given a certain rate. Given that the rate and $\\delta$ will vary between 0 and 1 we can represent it as a graph.
            <h3>Singleton's bound</h3>
            We will now show Singleton's bound which will divide by half the later graph where the following possible combinations remain: <br>
            <details open> <summary class="titulo-desplegable">Proof 1</summary>
                Let us consider an arbitrary encoding $E: \\Sigma^k \\to \\Sigma^n$ and let us consider the projection upon the first $k-1$ coordinates.
                $$\\pi \\circ E: \\Sigma^k \\to \\Sigma^{k-1} \\text{ therefore } \\exists \\ m_1 \\neq m_2 \\text{ such that } \\pi(E(m_1)) = \\pi(E(m_2))$$
                $$ \\Delta(m1, m2) \\leq n-k+1 \\text{ and as a result } \\delta(C) \\leq 1-\\frac{k}{n}+\\frac{1}{n} \\text{ where } \\frac{k}{n} = \\text{Rate}$$ 
                For this result we have assumed from the start that the alphabet was not unbounded.
              </details>
        </p>
        <p>
            <h3>Reed-Solomon codes(1960) </h3>
            Let $\\Sigma = F_q$ where $F_q$ represents a finite field with $q$ elements. Then we can represent a message $m = (m_0, ..., m_{k-1}), \\ m(x) \\cong \\sum\\limits_{i = 0}^{k-1} m_i x^i$. <br>
            Let us fix $\\alpha_1, \\alpha_2, ..., \\alpha_n \\in F_q$ such that they are distinct. We will send the tuple $&lt;m(\\alpha_1), m(\\alpha_2), ..., m(\\alpha_n)> \\in F_q^n$.<br>Let us prove that $\\Delta(RS \\ Code) \\geq n-k+1$. Let $m_1$ and $m_2$ be two messages that minimize the Hamming distance. We will define the polynomial $P(x) = (m1-m2)(x) = \\sum\\limits_{i=0}^{k-1}(m_{1,i}-m_{2,i})x^i$. Then, since $m_1 \\neq m_2$ we know that $P(x)$ is non-zero polynomial with degree $\\leq k-1$. This means that $\\# \\{i \\ | \\  P(\\alpha_i) = 0\\} \\leq k-1$, ($P(x)$ can have at most $k-1$ roots which in the worst case scenario might be the parameters that we have fixed). This implies that $\\Delta(m_1, m_2) \\geq n-(k-1) = n-k+1$. <br>
            We have now found an encoding function that matches Singleton's bound, it is time to worry about how to decode our message.
            <h3>Reed-Solomon Decoding Problem</h3>
            <strong>Given:</strong> $F_q, n, k, e = \\#$errors, $\\alpha_1, \\alpha_2, ..., \\alpha_n \\in F_q$ and distinct and a tuple $&lt;y_1, y_2, ..., y_n> \\in F_q^n$.<br>
            <strong>Task:</strong> Find ALL polynomial such that $\\# \\{ i \\ | \\ m(\\alpha_i) \\neq y-i\\} \\leq e$.
            <br>
            <details open> <summary class="titulo-desplegable">Algorithmic proof</summary>
              <strong>Algorithm:</strong> We will divide our algorithm into two main steps. First, we will find $Q(x, y)$ such that $Q(x_i, y_i) = 0 \\ \\forall i$ where $Q \\not\\equiv 0$ and $deg_x(Q) \\leq \\sqrt{n}, deg_y(Q) \\leq \\sqrt{n}$. Then we will factor $Q(x, y)$ <br>
              First of all we will define an error polynomial $E(x) = \\prod\\limits_{i: y_i \\neq f(\\alpha_i)} (x-\\alpha_i)$. We can see that this polynomial satisties the following equation: $E(\\alpha_i)(f(\\alpha_i)-y_i) = 0 \\ \\forall \\ i = 1, ..., n$. We will define another polynomial $N(x) = E(x)f(x)$, where $deg(E) = e$ and $deg(N) = e+k-1$
            </details>
        </p>`
      },
      {
        type: 'h2',
        id: 'day2', // Anchor ID
        text: 'Day 2'
      },
      {
        type: 'p',
        id: 'day2-text', // Anchor ID
        text: `We will now try to improve our encoding and decoding functions with the Folded Reed-Solomon codes. Let us introduce the notion of List-Decoding. <br>
        List Decoding: Instead of trying to recover the original message we will generate a list of $l$ possible decodings. Our list decoding will prove to be successful if the original message is inside the list. <br>
        Our decoding function will be now defined as $D: \\Sigma^n \\to (\\Sigma^k)^l$. <br>
        We will say that our encoding funcion is $(\\epsilon , L)$-List-Decodable if $\\exists D$ such that $\\forall m, y$ such that $\\delta(E(m), y) \\leq \\epsilon$ then $m \\in D(y)$. <br>
        Our objective for this day was to prove the following theorem: <br>
        <strong>Theorem:</strong> $\\forall \\epsilon > 0, \\delta > 0 \\quad \\exists E$ such that $E$ is $(\\epsilon, poly(n))$-List-Decodable and Rate$(E) \\geq 1-\\epsilon+\\delta$
`
      },
      {
        type: 'h2',
        id: 'day3', // Anchor ID
        text: 'Day 3'
      },
    ]
  }