# Explanatory note: toward probabilistic scheduling

## 1. Introduction: the end of determinism

In traditional project management, each task is tied to a fixed duration (e.g., “3 days”). This **deterministic** model is often contradicted by technical and human reality. People tend to be too optimistic, or they embed hidden “safety buffers” that end up wasted through **Parkinson’s law**. The proposed paradigm shift moves from a single point estimate to **explicit uncertainty modeling**, so schedules state the truth with an explicit margin of error.

## 2. Root concept: three-point estimates

Instead of forcing one number (often arbitrary), you ask experts for three scenarios per task:

* **Optimistic ($a$)** : everything goes smoothly, with no friction.
* **Most likely ($m$)** : what happens in roughly 80% of cases (the “normal” path).
* **Pessimistic ($b$)** : everything that can go wrong does; identified risks materialize.

## 3. The two main models

### A. Triangular distribution

It literally draws a triangle between $a$, $m$, and $b$.

* **Strengths** : very intuitive and easy to explain.
* **When to use it** : ideal when historical data is scarce. Extremes and the mode carry equal weight.

### B. PERT distribution (beta–Erlang)

This is the reference approach in risk analysis. It puts much more weight on the **most likely** value ($m$) so catastrophic tails ($b$) do not skew the mean too far.

**Mathematical Formulas:**

* **Expected value ($E$)** (mean duration) :

$$E = \frac{a + 4m + b}{6}$$

* **Standard deviation ($\sigma$)** (risk spread indicator) :

$$\sigma = \frac{b - a}{6}$$

> **Worked example:**
> If an expert says a task normally takes 5 days ($m$) but could stretch to 20 ($b$) when major issues hit, a deterministic plan might freeze at 5 days. PERT instead yields a weighted mean of about **7.5 days**—far better suited to absorbing variability.

## 4. Why is this shift a “revolution”?

* **Psychological realism** : experts find ranges easier than committing to a fixed date in the face of the unknown.
* **Monte Carlo simulation** : combining these distributions lets software run the project thousands of times (e.g., 10,000 iterations) and return probabilities (e.g., “85% chance of finishing before June 12”).
* **Transparency and prioritization** : tasks with a huge pessimistic tail (large gap between $m$ and $b$) surface immediately as the real monitoring priorities.

## 5. Conclusion

This paradigm turns the schedule from a static document into a **dynamic decision-support tool**. Delivery moves from finger-in-the-wind guesses to **statistical, resilient** commitments.
