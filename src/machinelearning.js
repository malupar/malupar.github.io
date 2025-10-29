export const blog_ml = {
    id: 'machine-learning',
    title: 'Machine learning basics',
    date: 'October 26, 2025',
    snippet: 'Here I show some notes about the ML basics learnt from different university courses, extracurricular courses and other sources.',
    content: [
          {
            type: 'h2',
            id: 'learning', // Anchor ID
            text: 'What do we mean by "learning"?'
          },
          {
            type: 'p',
            id: 'learning-text', // Anchor ID
            text: `We can differentiate between 3 different types of learning or reasonings:
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
          
          Each of this types of reasonings can be used in ML research, for example, if we consider $A$ our set of assumptions, $B$ our set of consequences and $\\to$ our set of reasonings/principles, we can infer by:
          <ul>
          <li>Deductive reasoning: $P(B | A, \\to)$, probability a patient has cancer based on a set of symptoms and rules (Rule-Based ML or RBML).</li>
          <li>Inductive reasoning $P(\\to | A, B)$, probability that a user likes this film based on other films that they liked. </li>
          <li>Abductive reasoning $P(A | \\to, B)$, probability that if a user says they "cannot log in", it is because their username or password is incorrect.</li>
          </ul>

          Applications of all of this reasonings are not easily distinguishable in practice, but this theoretical distinctions allows for a faster research on ML.
          `
          },
          {
            type: 'h2',
            id: 'linear-models', // Anchor ID
            text: 'Linear models and linear regression'
          },
          {
            type: 'p',
            id: 'linear-models-text', // Anchor ID
            text: `Let us assume that out objective is to obtain the most likely model that can associate a set of facts with their consequences. In other words, we would like to get the most likely function $f$ such that $f(x) = y$ for $x \\in A$ and $y \\in B$.
          </br>
          We will assume for the rest of this section that our model is of the type $f = f_w + \\varepsilon$ where $f_w(x) = \\sum_{i=1}^n x_i \\cdot w_i + b$ is a linear model and $\\varepsilon$ is a random variable that represents an irreducible error. This type of error is inherent to the task that we are trying to solve and data that we use.
          </br>
          We will also assume that $\\varepsilon \\sim N(\\mu, \\sigma)$, normal distribution with mean $\\mu$ and variance $\\sigma$. Since our linear model has a <i>bias</i> variable $b$, we can just modify it to $b' = b + \\mu$ and assume $\\varepsilon \\sim N(0, \\sigma)$.
          </br>
          Therefore, we would like to get $\\underset{w}{\\operatorname{argmax}} P(f_w | D)$ where $D$ is our set of data or known facts $D = \\{(x, y) | f(x) = y, x \\in A, y \\in B\\}$.
          </br>
          $\\underset{w}{\\operatorname{argmax}} P(f_w | D) = \\underset{w}{\\operatorname{argmax}} P(D | f_w) \\cdot \\frac{P(f_w)}{P(D)}$, given that the probability of our data is constant and (we assume) that the space of functions follows a uniform distribution we would like to get $\\underset{w}{\\operatorname{argmax}} P(D | f_w)$.
          
          </br>
          Since all elements of data are independent from each other, we would like to get $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} P((x, y) | f_w)$.
          </br>
          $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} P((x, y) | f_w) $ $=$ $ \\underset{w}{\\operatorname{argmax}} \\underset{(x, y)\\in D}{\\prod} P(y \ | x, f_w) \\cdot P(x | f_w)$ $ = $ $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y)\\in D}{\\prod} P(y \ | x, f_w) \\cdot P(x) \\cdot P(f_w)$. Since $x$ is independent from the linear model $f_w$. Using again that $f_w$ follows a uniform distribution and $x$ is independent from $f_w$ we get that we would like:
          </br>
          $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} P(y| x, f_w)$
          </br>
          This represents the probability of the consequences, $y$, given the initial set of facts, $x$, and having fixed a set of weights and bias,$f_w$. This represents our random variable $\\varepsilon = y-f_w(x)$. Since it follows a normal distribution we get:
          $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} \\frac{1}{2 \\pi \\sigma} e^{-(\\frac{y-f_w(x)}{2 \\sigma})^2}$, we will assume that $\\sigma$ is a constant (homoscedasticity) and removing the constants and using a monotonic function such as the logarithm we get:
          </br>
          $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} \\frac{1}{2 \\pi \\sigma} e^{-(\\frac{y-f_w(x)}{2 \\sigma})^2}$ $ = $ $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} e^{-(\\frac{y-f_w(x)}{2 \\sigma})^2}$ $ =$ $ \\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\sum}-(\\frac{y-f_w(x)}{2 \\sigma})^2 $ $= $ $\\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum}(\\frac{y-f_w(x)}{2 \\sigma})^2 $ $=$ $\\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum}(y-f_w(x))^2$
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
        
          We can ignore homocedasticity and assume heteroskedasticity and that for each $(x_i, y_i)$ there exists a $\\sigma_i$, $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} P(y| x, f_w)$ $ =$ $ \\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\prod} \\frac{1}{2 \\pi \\sigma_i} e^{-(\\frac{y-f_w(x)}{2 \\sigma_i})^2} $ $= $ $\\underset{w}{\\operatorname{argmax}} \\underset{(x, y) \\in D}{\\sum} -\\log(2 \\pi \\sigma_i) -(\\frac{y-f_w(x)}{2 \\sigma_i})^2$
          $\\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum} \\log(\\sigma_i) +(\\frac{y-f_w(x)}{2 \\sigma_i})^2 $ $=$ $ \\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum} (\\frac{y-f_w(x)}{2 \\sigma_i})^2 $ $=$ $ \\underset{w}{\\operatorname{argmin}} \\underset{(x, y) \\in D}{\\sum} (\\frac{y-f_w(x)}{\\sigma_i})^2$
          </br>
          Therefore, if we know for each set of data, its respective variance we have a new cost function.`
          },
          {
            type: 'h2',
            id: 'optimization', // Anchor ID
            text: 'Optimization algorithms'
          },
          {
            type: 'p',
            id: 'optimization-text', // Anchor ID
            text: `Depending on the initial assumptions, task, model and data that we have chosen to work with we will commonly end up having to find the arguments that minimize a certain function (in case it maximizes we can just negate).
          </br>
          We will name the minimizing function as <b>cost function</b> and represent it using $F(x)$.`
          },
        ]
  }