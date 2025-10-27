// This is your mock database
export const posts = [
  {
    id: 'comm-alg', // This will be the URL slug
    title: 'Documentation for Algorithms in Commutative Algebra',
    date: 'December 3, 2024',
    snippet: 'This is a link to the documentation developped for the different pruning algorithms done for ...',
    externalUrl: 'https://malupar.github.io/MorseResolutions/'
  },
  {
    id: 'coding-theory',
    title: 'Coding Theory - CRM',
    date: 'May 8, 2024',
    snippet: 'Here I talk about the course taken at the Centre de Recerca Matemàtica "Highlights of Algorithmic Coding".',
    content: `
          <h2>Day 1</h2>
          <p>
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
                $$\\text{Let us consider an arbitrary encoding function } E: \\Sigma^k \\to \\Sigma^n \\text{ and let us consider the projection upon the first } k-1 \\text{ coordinates.}$$
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
        </p>
        <h2>Day 2</h2>
        We will now try to improve our encoding and decoding functions with the Folded Reed-Solomon codes. Let us introduce the notion of List-Decoding. <br>
        List Decoding: Instead of trying to recover the original message we will generate a list of $l$ possible decodings. Our list decoding will prove to be successful if the original message is inside the list. <br>
        Our decoding function will be now defined as $D: \\Sigma^n \\to (\\Sigma^k)^l$. <br>
        We will say that our encoding funcion is $(\\epsilon , L)$-List-Decodable if $\\exists D$ such that $\\forall m, y$ such that $\\delta(E(m), y) \\leq \\epsilon$ then $m \\in D(y)$. <br>
        Our objective for this day was to prove the following theorem: <br>
        <strong>Theorem:</strong> $\\forall \\epsilon > 0, \\delta > 0 \\quad \\exists E$ such that $E$ is $(\\epsilon, poly(n))$-List-Decodable and Rate$(E) \\geq 1-\\epsilon+\\delta$
        <h2>Day 3</h2>
    `
  },
  {
    id: 'machine-learning',
    title: 'Machine learning basics',
    date: 'October 26, 2025',
    snippet: 'Here I show some notes about the ML basics learnt from different university courses, extracurricular courses and other sources.',
    content: `
          <h2>What do we mean by "learning"?</h2>
          We can differentiate between 3 different types of learning or reasonings:
          <ul>
            <li>Deduction - Given a list of assumptions and implications, we infer the consequences.</li>
            <ul>
            <li>This type of reasoning shows what <b>logical consequences</b> could be derived from a set of facts.</li>
            <li>If all men are mortal and Socrates is a man, then Socrates must be mortal.</li>
            </ul>
            <li>Induction - Given a list of assumptions and consequences, we infer the implications.</li>
            <ul>
            <li>This type of reasoning attempts to infer <b>general principles</b> from specific instances.</li>
            <li>All biological life forms that we know of depend on liquid water to exist. If we discover a new biological life form, it will probably depend on liquid water to exist.</li>
            </ul>
            <li>Abduction - Given a list of implications and consequences, we infer the assumptions.</li>
            <ul>
            <li>This type of reasoning attempts to infer <b>an explanation</b> for a set of occurrences.</li>
            <li>The grass is currently wet. When it rains, the grass gets wet. Therefore it must have rained.</li>
            </ul>
          </ul>
          
          Each of this types of reasonings can be used in ML research, for example, if we consider $A$ our set of assumptions, $B$ our set of consequences and $\\to$ our set of reasonings/principles, we can define:
          <ul>
          <li>Deductive reasoning: $P(B | A, \\to)$, probability a patient has cancer based on a set of symptoms and rules (Rule-Based ML or RBML).</li>
          <li>Inductive reasoning $P(\\to | A, B)$, probability that a user likes this film based on other films that they liked. </li>
          <li>Abductive reasoning $P(A | \\to, B)$, probability that if a user says they "cannot log in", it is because their username or password is incorrect.</li>
          </ul>

          Applications of all of this reasonings are not easily distinguishable in practice, but this theoretical distinctions allows for a faster research on ML.

          <h2>Linear models and linear regression</h2>

          Let us assume that out objective is to obtain the most likely model that can associate a set of facts with their consequences. In other words, we would like to get the most likely function $f$ such that $f(x) = y$ for $x \\in A$ and $y \\in B$.
          </br>
          We will assume for the rest of this section that our model is of the type $f = f_w + \\varepsilon$ where $f_w(x) = \\sum_{i=1}^n x_i \\cdot w_i + b$ is a linear model and $\\varepsilon$ is a random variable that represents an irreducible error. This type of error is inherent to the task that we are tryint to solve and data that we use.
          </br>
          We will also assume that $\\varepsilon \\sim N(\\mu, \\sigma)$, normal distribution with mean $\\mu$ and variance $\\sigma$. Since our linear model has a <i>bias</i> variable $b$, we can just modify it to $b' = b + \\mu$ and assume $\\varepsilon \\sim N(0, \\sigma)$.
          </br>
          Therefore, we would like to get $\\underset{w}{\\operatorname{argmax}} P(f_w | D)$ where $D$ is our set of data $D = \\{(x, y) | f(x) = y\\}$.
          </br>
          $\\underset{w}{\\operatorname{argmax}} P(f_w | D) = \\underset{w}{\\operatorname{argmax}} P(D | f_w) \\cdot \\frac{P(f_w)}{P(D)}$, given that the probability of our data is constant and (we assume) that the space of functions follows a uniform distribution we would like to get $\\underset{w}{\\operatorname{argmax}} P(D | f_w)$.
          
          </br>
          Since all elements of data are independent from each other, we would like to get $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} P((x, y) | f_w)$.
          </br>
          $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} P((x, y) | f_w) = \\underset{w}{\\operatorname{argmax}} \\underset{(x, y)\\in D}{\\prod} P(y \ | x, f_w) \\cdot P(x | f_w) = \\underset{w}{\\operatorname{argmax}} \\underset{(x, y)\\in D}{\\prod} P(y \ | x, f_w) \\cdot P(x) \\cdot P(f_w)$. Since $x$ is independent from the linear model $f_w$. Using again that $f_w$ follows a uniform distribution and $x$ is independent from $f_w$ we get:
          </br>
          $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} P(y| x, f_w)$
          </br>
          This represents the probability of the consequences, $y$, given the initial set of facts, $x$, and having fixed a set of weights and bias,$f_w$. This represents our random variable $\\varepsilon = y-f_w(x)$, since it follows a normal distribution we get:
          $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} \\frac{1}{2 \\pi \\sigma} e^{-(\\frac{y-f_w(x)}{2 \\sigma})^2}$, we will assume that $\\sigma$ is a constant (homoscedasticity) and removing the constants and using a monotonic function such as the logarithm we get:
          </br>
          $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} \\frac{1}{2 \\pi \\sigma} e^{-(\\frac{y-f_w(x)}{2 \\sigma})^2} = \\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} e^{-(\\frac{y-f_w(x)}{2 \\sigma})^2} = \\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\sum}-(\\frac{y-f_w(x)}{2 \\sigma})^2 = \\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum}(\\frac{y-f_w(x)}{2 \\sigma})^2 =$ $\\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum}(y-f_w(x))^2$
          </br>
          We have obtained that we want to find the $w$ such that it minimizes the expression $\\underset{(x, y) \\in D}{\\prod} (y-f_w(x))^2$. This expression is the minimum squared error (MSE) used in linear regression.
          </br>
          Our list of assumptions is the following:
          <ul>
          <li>We have only worked with the space of linear functions.</li>
          <li>We have assumed that the likeliness of a linear function follows a uniform distribution.</li>
          <li>We have assumed that our error follows a normal distribution (this assumption is optional and could be generalised with Central Limit Theorem).</li>
          <li>We have assumed that our data is independent and identically distributed.</li>
          <li>We have assumed that our data is independent from the error term.</li>
          <li>We have assumed homocedasticity.</li>
          </ul>
        
          We can ignore homocedasticity and assume heteroskedasticity and that for each $(x_i, y_i)$ there exists a $\\sigma_i$, $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} P(y| x, f_w) = \\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} \\frac{1}{2 \\pi \\sigma_i} e^{-(\\frac{y-f_w(x)}{2 \\sigma_i})^2} = \\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\sum} -\\log(2 \\pi \\sigma_i) -(\\frac{y-f_w(x)}{2 \\sigma_i})^2$
          $\\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum} \\log(\\sigma_i) +(\\frac{y-f_w(x)}{2 \\sigma_i})^2 = \\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum} (\\frac{y-f_w(x)}{2 \\sigma_i})^2 = \\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum} (\\frac{y-f_w(x)}{\\sigma_i})^2$
          </br>
          Therefore, if we know for each set of data, its respective variance we have a new cost function.

          <h2>Optimization algorithms</h2>

          Depending on the initial assumptions, task, model and data that we have chosen to work with we will commonly end up having to find the arguments that minimize a certain function (in case it maximizes we can just negate).
          `
  },
];