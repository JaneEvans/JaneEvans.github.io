var tipuesearch = {"pages": [

{"title": "<h1 class='page-title-lvl-cover' id='Bookmark1'>Applied Statistics Study Notes</h1>", "text": "\n\n\n\n\n\n1. Statistics Fundamentals\n\n1.1. Descriptive Statistics\n1.2. Law of Large Numbers (LLN)\n1.3. Central Limit Theorem (CLT)\n1.4. Matrix Determinant&#xa0;\n\n1.4.1. 3x3 matrix\n\n\n\n\n2. Hypothesis Testing\n\n2.1. Terms\n2.2. Power in significance test:\n2.3. Sample Size\n\n2.3.1. Estimating a mean\n2.3.2. Estimating a proportion for a large population\n2.3.3. Estimating a proportion for a small population (N is small)\n\n\n2.4. Steps\n2.5. Types\n\n2.5.1. Test on a population proportion\n2.5.2. Test on a population mean\n2.5.3. Test on two sample proportions\n2.5.4. Test on paired means\n2.5.5. Test on two independent sample means\n2.5.6. Test on the distribution of categorical data: Chi-squared test&#xa0;\u03C72&#xa0;\n2.5.7. Test on one variance: Chi-squared test&#xa0;\u03C72&#xa0;\n2.5.8. Test on two variance: F-test\n\n\n\n\n3. ANOVA\n\n3.1. Assumptions\n3.2. ANOVA Table\n\n\n4. Linear Models\n\n4.1. Assumptions (LINE):\n4.2. Least-Squares Linear Regression\n4.3. Ordinary Least Squares (OLS) vs Gradient Descent (GD)\n\n4.3.1. Types of gradient descent\n\n4.3.1.1. Batch Gradient Descent\n4.3.1.2. Stochastic Gradient Descent (SGD)\n4.3.1.3. Mini-Batch Gradient Descent\n\n\n\n\n4.4. L1 &amp; L2 Regularization&#xa0;\n\n\n5. Logistic Regression\n\n5.1. Assumptions\n5.2. Definitions\n\n5.2.1. Odds\n5.2.2. Log Odds\n5.2.3. Odds Ratio\n\n\n5.3. Logit\n5.4. Ordered Logistic Regression\n5.5. Multinomial Logistic Regression\n\n\n6. Probability Distribution\n\n6.1. Normal Distribution\n6.2. Binomial Distribution\n6.3. Negative Binomial Distribution\n6.4. Geometric Distribution\n6.5. Poisson Distribution\n\n\n7. Conditional Probabilities\n\n7.1. Bayes' Theorem\n7.2. Na\u00EFve Bayes\n\n\n8. Model Evaluation Metrics\n\n8.1. Classification metrics\n\n8.1.1. Confusion matrix\n8.1.2. Accuracy\n8.1.3. Precision\n8.1.4. Recall (Sensitivity)\n8.1.5. Specificity\n8.1.6. F1 score\n8.1.7. F\u03B2 score\n8.1.8. ROC (Receiver Operating Characteristic) curve\n\n\n8.2. Regression metrics\n\n8.2.1. Mean Absolute Error (MAE)\n8.2.2. Mean Square Error (MSE)\n8.2.3. Root Mean Square Error (RMSE)\n8.2.4. R2 score\n\n\n8.3. Cross Validation\n\n\n9. Controlled Randomized Experiments\n\n9.1. Random Sampling Methods\n9.2. Randomized Experimental Assignment\n9.3. Necessary Ingredients for Running Controlled Experiments\n\n\n\n\n\n\n\n\n\n\n\n\n\n1. Statistics Fundamentals1.1. Descriptive StatisticsP-value:&#xa0;the probability that we'd observe an extreme or more extreme statistic than we did given the null hypothesis was true.Expected value: weighted average of each case. Expected value use probability to tell us what outcomes to expect in the long run.Variance: the sum of the squared distance from the data to the meanMedianModePercentile/Quartiles/DecilesOutlier:&#xa0;1.5 IQR rule for outliers - a data point is an outlier if it's more than 1.5 IQR above the 3rd quartile or below the 1st quartile1.2. Law of Large Numbers (LLN)In probability theory, the LLN is a theorem that describes the results of performing the same experiment a large number of times. According to the law, the average of the results obtained from a large number of trials should be close to the expected value, and will tend to become closer as more trials are performed.1.3. Central Limit Theorem (CLT)As the sample size becomes larger, the sample mean distribution (sampling distribution) will be closed to normal distribution, no matter what the shape of the population distribution.&#xa0;Sample Sum distribution ~ N (\u03BC',&#xa0;\u03C3'):\u03BC' = n *&#xa0;\u03BC\u03C3' = \u03C3 * n**(1/2)Sample&#xa0;Mean&#xa0;distribution ~ N (\u03BC',&#xa0;\u03C3'):\u03BC' = \u03BC\u03C3' =&#xa0;\u03C3 / n**(1/2)1.4. Matrix Determinant&#xa0;1.4.1. 3x3 matrix    \n\\[ \\det \\begin{pmatrix}a&amp;b&amp;c\\\\ d&amp;e&amp;f\\\\ g&amp;h&amp;i\\end{pmatrix}=a\\cdot \\det \\begin{pmatrix}e&amp;f\\\\ h&amp;i\\end{pmatrix}-b\\cdot \\det \\begin{pmatrix}d&amp;f\\\\ g&amp;i\\end{pmatrix}+c\\cdot \\det \\begin{pmatrix}d&amp;e\\\\ g&amp;h\\end{pmatrix} \\]\n\n\n\n\n\n\n2. Hypothesis Testing2.1. TermsP-value: Given null hypothesis is true, the probability of observed outcomesConfidence Interval: The range within which the mean is expected to fall in multiple trails of the experiment.Type-I error: (\u03B1) Falsely reject a true null hypothesis&#xa0;\u2013 False positiveType-II error: (\u03B2) Fail to reject a a false null hypothesis&#xa0;\u2013 False negativeTrue Null HypothesisFalse Null HypothesisReject Null HypothesisType-I error (\u03B1)correct (power)Accept Null HypothesiscorrectType-II error(\u03B2)Practical Significance: The magnitude of the difference. Can be examined by computing Cohen's d, which is the difference between the two observed sample means in standard deviation units:&#xa0;2.2. Power in significance test:Power = 1-\u03B2&#xa0;= Pr(Rejecting null hypo | Null hypo is false) = 1 - Pr(Accept null hypo | Null hypo is false) = Pr(Not making Type-II error)&#xa0;Usually choose 0.8 or higher power.Four primary factors affect power:Significance level (\u03B1)Sample size (n)Variability, or variance, in the measured response variable (\u03C3 or s)Magnitude of the effect of the variable (effect size \u03B5)2.3. Sample Sizehttps://online.stat.psu.edu/stat414/node/306/Estimate sample size given desired alpha and beta.2.3.1. Estimating a meanThe&#xa0;sample size&#xa0;necessary&#xa0;for estimating a population mean&#xa0;\u03BC&#xa0;with&#xa0;(1\u2212\u03B1)100%&#xa0;confidence and&#xa0;error no larger than&#xa0;\u03B5&#xa0;is:&#xa0;&#xa0; &#xa0;where we can use z\u03B1/2 to replace t\u03B1/2, n-1 .&#xa0; &#xa0;How to estimate s?&#xa0;\u2013 Empirical Rule&#xa0;&#xa0;&#xa0; &#xa0;&#xa0;2.3.2. Estimating a proportion for a large populationAn&#xa0;approximate&#xa0;(1\u2212\u03B1)100% confidence interval for a proportion&#xa0;p&#xa0;of a large population is:    \n\\[ \\hat{p}\\pm z_{\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}} \\]\nThe&#xa0;sample size&#xa0;necessary&#xa0;for estimating a population proportion&#xa0;p&#xa0;of a large population with&#xa0;(1\u2212\u03B1)100%&#xa0;confidence and&#xa0;error no larger than&#xa0;\u03B5&#xa0;is:    \n\\[ n=\\dfrac{z^2_{\\alpha/2}\\hat{p}(1-\\hat{p})}{\\epsilon^2} \\]\nHow to estimate&#xa0;    \n\\[ \\hat{p}(1-\\hat{p}) \\]\nSet p(1-p) = 1/4, its maximum when p = 1/22.3.3. Estimating a proportion for a small population (N is small)An&#xa0;approximate&#xa0;(1\u2212\u03B1)100% confidence interval for a proportion&#xa0;p&#xa0;of a small population is:    \n\\[ \\hat{p}\\pm z_{\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n} \\cdot \\dfrac{N-n}{N-1}} \\]\nNoting that if the sample&#xa0;n&#xa0;is much smaller than the population size&#xa0;N, that is, if&#xa0;n&#xa0;&lt;&lt;&#xa0;N, then (N-n)/(N-1)&#xa0;\u2248 1,&#xa0;and the confidence interval for&#xa0;p&#xa0;of a small population becomes quite similar to the confidence interval for&#xa0;p&#xa0;of a large population.The&#xa0;sample size&#xa0;necessary&#xa0;for estimating a population proportion&#xa0;p&#xa0;of a small finite population N with&#xa0;(1\u2212\u03B1)100%&#xa0;confidence and&#xa0;error no larger than&#xa0;\u03B5&#xa0;is:    \n\\[ n=\\dfrac{z^2_{\\alpha/2}\\hat{p}(1-\\hat{p})/\\epsilon^2}{\\dfrac{N-1}{N}+\\dfrac{z^2_{\\alpha/2}\\hat{p}(1-\\hat{p})}{N\\epsilon^2}} \\]\nor    \n\\[ n=\\dfrac{m}{1+\\dfrac{m-1}{N}} \\]\nwhere    \n\\[ m=\\dfrac{z^2_{\\alpha/2}\\hat{p}(1-\\hat{p})}{\\epsilon^2} \\]\n2.4. StepsWrite hypothesisCheck conditions (Random, Normal, Independence)Calculate t or z statisticsGet p-value (one-tailed or two-tailed)Compare p-value to&#xa0;\u03B1 (significance level)Type-I or Type-II errorPowerMake a conclusion2.5. Types2.5.1. Test on a population proportionConditions for a z-test:Random: the data needs to come from a random sample or randomized experiment.Normal: the sampling distribution of p (the sample proportion)&#xa0;needs to be approximately normal&#xa0;\u2013 needs at least 10 expected successes and 10 expected failures:np &gt;= 10n(1-p) &gt;= 10Independence: individual observation needs to be independent. If sampling without replacement, the sample size shouldn't be more than 10% of the population:use replacementOR n &lt;= 10% populationCalculate a z statistic: Delta / Std Error2.5.2. Test on a population meanConditions for a z-test:Random: a random sampling or randomized experiment should be used to obtain the dataNormal: the sampling distribution of x (the sample mean) needs to be approximately normal. It is true if the parent&#xa0;population is normal or if the sample size is reasonably large (n &gt;= 30):parent population is normalOR n &gt;= 30OR if unknown parent population distribution and n &lt; 30&#xa0;\u2013 the big idea is that we need to graph the sample data when n &lt; 30 and make a decision about the normal condition based on the appearance of the sample data (symmetric without outlier)Independence: Individual observation needs to be independent. If sampling without replacement, the sample size shouldn't be more than 10% of the population:use replacementOR n &lt;= 10% of populationCalculate a z or t statistics: Delta / Std Error&#xa0;&#xa0;When to use z or t statistic:if known population variance, use population standard deviation: z statisticif DON'T known population variance, use sample standard deviation: t statistic&#xa0; &#xa0;&#xa0;2.5.3. Test on two sample proportionsCalculate z statistic: Delta / Std Error2.5.4. Test on paired meansIn this situation, our measurements differences are di, df = n-1calculate t statistic: Delta / Std Error&#xa0;&#xa0;2.5.5. Test on two independent sample meansWhen population variances are equal:df = n+m-1calculate t statistic: Delta / Std Error&#xa0; ,&#xa0;&#xa0;When population variances are not equal:adjusted df (integer portion of r):&#xa0;calculate t statistic: Delta / Std Error&#xa0;2.5.6. Test on the distribution of categorical data: Chi-squared test&#xa0;\u03C72&#xa0;Data come from one sample&#xa0;\u2192 test of independenceData come from separate samples&#xa0;\u2192 test of homogeneityConditions:RandomNormal: Large number (&gt;= 5 per cell)Independence: (sample &lt;= 10% of population)Goodness-of-fit test:df = n-1Relationship test:df = (# of rows - 1)*(# of columns - 1)Two variable association test:df = (# of rows - 1)*(# of columns - 1)2.5.7. Test on one variance: Chi-squared test&#xa0;\u03C72&#xa0;If you have a random sample of size&#xa0;n&#xa0;from a&#xa0;normal population&#xa0;with (unknown) mean&#xa0;\u03BC&#xa0;and variance&#xa0;\u03C32, then:    \n\\[ \\chi^2=\\dfrac{(n-1)S^2}{\\sigma^2} \\]\nfollows a chi-square distribution with&#xa0;n\u22121 degrees of freedom.2.5.8. Test on two variance: F-testCan be used to test the validation of the assumption of equal variance&#xa0;that needs when performing two-sample t-test.follows an&#xa0;F&#xa0;distribution with&#xa0;&#xa0;n\u22121 numerator degrees of freedom and&#xa0;m\u22121 denominator degrees of freedom.If we're interested in testing the null hypothesis:    \n\\[ \\chi^2=\\dfrac{(n-1)S^2}{\\sigma^2} \\]\nagainst any of the alternative hypotheses:    \n\\[ H_A:\\sigma^2_X \\neq \\sigma^2_Y,\\quad H_A:\\sigma^2_X &gt;\\sigma^2_Y,\\text{ or }H_A:\\sigma^2_X &lt;\\sigma^2_Y \\]\nwe can use the test statistic:    \n\\[ F=\\dfrac{S^2_X}{S^2_Y} \\]\nand follow the standard hypothesis testing procedures. When doing so, we might also want to recall this important fact about the&#xa0;F-distribution:    \n\\[ F_{1-(\\alpha/2)}(n-1,m-1)=\\dfrac{1}{F_{\\alpha/2}(m-1,n-1)} \\]\nso that when we use the critical value approach for a two-sided alternative:    \n\\[ H_A:\\sigma^2_X \\neq \\sigma^2_Y \\]\nwe reject if the test statistic&#xa0;F&#xa0;is too large:    \n\\[ F \\geq F_{\\alpha/2}(n-1,m-1) \\]\nor if the test statistic&#xa0;F&#xa0;is too small:    \n\\[ F \\leq F_{1-(\\alpha/2)}(n-1,m-1)=\\dfrac{1}{F_{\\alpha/2}(m-1,n-1)} \\]\n3. ANOVA3.1. AssumptionsIndependenceNormalityEqual group variances3.2. ANOVA TableAnalysis of variance, is a collection of methods for comparing multiple means across different groupsy groups, x samples in each group:SST&#xa0;\u2013 Total Sum of Squares (df = x * y - 1)SSW&#xa0;\u2013 Total Sum of Squares Within (df = y * (x-1))SSB - Total Sum of Squares Between (df = y - 1)SST = SSW + SSB    \n\\[ SS(E)=\\sum\\limits_{i=1}^{m}\\sum\\limits_{j=1}^{n_i} (X_{ij}-\\bar{X}_{i.})^2 \\]\n    \n\\[ SS(T)=\\sum\\limits_{i=1}^{m}\\sum\\limits_{j=1}^{n_i}(\\bar{X}_{i.}-\\bar{X}_{..})^2 \\]\n    \n\\[ SS(TO)=\\sum\\limits_{i=1}^{m}\\sum\\limits_{j=1}^{n_i} (X_{ij}-\\bar{X}_{..})^2 \\]\nIf&#xa0;Xij&#xa0;~&#xa0;N(\u03BC,&#xa0;\u03C32), then:    \n\\[ F=\\dfrac{SST/(m-1)}{SSE/(n-m)}=\\dfrac{MST}{MSE} \\sim F(m-1,n-m) \\]\n4. Linear Models4.1. Assumptions (LINE):The mean of the responses,&#xa0;E(Yi), is a&#xa0;Linear function&#xa0;of the&#xa0;xi.The errors,&#xa0;\u03B5i, and hence the responses&#xa0;Yi, are&#xa0;Independent.The errors,&#xa0;\u03B5i,&#xa0;and hence the responses&#xa0;Yi, are&#xa0;Normally distributed.The errors,&#xa0;\u03B5i,&#xa0;and hence the responses&#xa0;Yi, have&#xa0;Equal variances&#xa0;(\u03C32) for all&#xa0;x&#xa0;values.4.2. Least-Squares Linear RegressionY =&#xa0;\u03B2x +&#xa0;\u03B1\u03B2 = r*(sy/sx) = sx*sy/sxx4.3. Ordinary Least Squares (OLS) vs Gradient Descent (GD)The OLS estimate the slope \uD835\uDEFD and intercept \uD835\uDEFC of the straight line by minimizing the sum of squared residuals (SSE).Gradient descent approach aims to minimize a cost function by iterations. The cost function for the simple linear regression is equivalent to the average of squared residuals.&#xa0;where&#xa0;m&#xa0;is the batch size.&#xa0;where&#xa0;\u03B1 is a learning rate / how big a step take to downhill.4.3.1. Types of gradient descent4.3.1.1. Batch Gradient DescentIn the batch gradient descent, to calculate the gradient of the cost function, we need to sum all training examples for each stepsIf we have 3 millions samples (m training examples) then the gradient descent algorithm should sum 3 millions samples for every epoch. To move a single step, we have to calculate each with 3 million times!Batch Gradient Descent is not good fit for large datasets4.3.1.2. Stochastic Gradient Descent (SGD)In stochastic Gradient Descent, we use one example or one training sample at each iteration instead of using whole dataset to sum all for every stepsSGD is widely used for larger dataset trainings and computationally faster and can be trained in parallelNeed to randomly shuffle the training examples before calculating it4.3.1.3. Mini-Batch Gradient DescentIt is similar like SGD, it uses&#xa0;n&#xa0;samples instead of 1 at each iteration.4.4. L1 &amp; L2 Regularization&#xa0;L1 - LASSOSubjective function:&#xa0;min\u2211(\uD835\uDC66 \u2212\uD835\uDC65\uD835\uDEFD)2&#xa0;+\uD835\uDF06\u2211|\uD835\uDEFD|L2 - RidgeSubjective function:&#xa0;min\u2211(\uD835\uDC66 \u2212\uD835\uDC65\uD835\uDEFD)2&#xa0;+\uD835\uDF06\u2211\uD835\uDEFD2&#xa0;Ridge regularization LASSO regularization&#xa0;Regularization term is in square value&#xa0;Regularization term is in absolute value&#xa0;\u03BB controls the size of coefficients and amount of regularization&#xa0;\u03BB controls amounts of regularization&#xa0;Shrink the magnitude of coefficients fast, will not&#xa0;get rid of&#xa0;irrelevant features but rather minimize their&#xa0;impact on the trained model.Least absolute shrinkage and select feature,&#xa0;not only punishing high values of the&#xa0;coefficients \u03B2 but&#xa0;actually setting them to zero if they are not&#xa0;relevant.5. Logistic Regression5.1. AssumptionsAPPROPRIATE OUTCOME STRUCTURE: Binary logistic regression requires the dependent variable to be binary and ordinal logistic regression requires the dependent variable to be ordinal.OBSERVATION INDEPENDENCE: Logistic regression requires the observations to be independent of each other.&#xa0; In other words, the observations should not come from repeated measurements or matched data.THE ABSENCE OF MULTICOLLINEARITY: Logistic regression requires there to be little or no multicollinearity among the independent variables. This means that the independent variables should not be too highly correlated with each other.LINEARITY OF INDEPENDENT VARIABLES AND LOG ODDS: Logistic regression assumes linearity of independent variables and log odds.&#xa0;Although this analysis does not require the dependent and independent variables to be related linearly, it requires that the independent variables are linearly related to the log odds.A LARGE SAMPLE SIZE: Logistic regression typically requires a large sample size. A general guideline is that you need at minimum of 10 cases with the least frequent outcome for each independent variable in your model. For example, if you have 5 independent variables and the expected probability of your least frequent outcome is .10, then you would need a minimum sample size of 500= (10*5 / .10).5.2. Definitions5.2.1. OddsShowing that odds are ratios.     odds = p/(1 - p)5.2.2. Log OddsNatural log of the odds, also known as a logit.     log odds = logit = log(p/(1 - p))5.2.3. Odds RatioShowing that odds ratios are actually ratios of ratios.                  odds1     p1/(1 - p1)\n     odds_ratio = ----- = -------------\n                  odds2     p2/(1 - p2)Computing Odds Ratio from Logistic Regression Coefficient     odds_ratio = exp(b)Computing Probability from Logistic Regression Coefficients     probability = exp(Xb)/(1 + exp(Xb))Where&#xa0;Xb&#xa0;is the linear predictor.5.3. LogitThere is a direct relationship between the coefficients produced by&#xa0;logit&#xa0;and the odds ratios produced by&#xa0;logistic. First, let\u2019s define what is meant by a logit: A logit is defined as the log base e (log) of the odds. :[1] logit(p) = log(odds) = log(p/q)The range is negative infinity to positive infinity. In regression it is easiest to model unbounded outcomes. Logistic regression is in reality an ordinary regression using the logit as the response variable. The logit transformation allows for a linear relationship between the response variable and the coefficients:[2] logit(p) = a + bXor[3] log(p/q) = a + bXThis means that the coefficients in a simple logistic regression are in terms of the log odds, that is, a coefficient of 1.694596 implies that a one unit change in gender results in a 1.694596 unit change in the log of the odds. Equation [3] can be expressed in odds by getting rid of the&#xa0;log. This is done by taking&#xa0;e&#xa0;to the power for both sides of the equation.[4] elog(p/q)&#xa0;= ea + bXor[5]&#xa0;p/q = ea + bXFrom this, let us define the odds of being admitted for females and males separately:[5a] oddsfemale&#xa0;= p0 /q0[5b] oddsmale&#xa0;= p1 /q1The&#xa0;odds ratio (OR)&#xa0;for gender is defined as the odds of being admitted for males over the odds of being admitted for females:[6] OR = oddsmale&#xa0;/oddsfemaleFor this particular example (which can be generalized for all simple logistic regression models), the coefficient&#xa0;b&#xa0;for a two category predictor can be defined as[7a] b = log(oddsmale) \u2013 log(oddsfemale)&#xa0;= log(oddsmale&#xa0;/ oddsfemale)by the quotient rule of logarithms. Using the inverse property of the log function, you can exponentiate both sides of the equality [7a] to result in [6]:[8] eb&#xa0;= e[log(oddsmale/oddsfemale)]&#xa0;=&#xa0;oddsmale&#xa0;/oddsfemale&#xa0;= ORwhich means the the exponentiated value of the coefficient&#xa0;b&#xa0;results in the odds ratio for gender. In our particular example, e1.694596&#xa0;= 5.44 which implies that the odds of being admitted for males is 5.44 times that of females.5.4. Ordered Logistic Regression5.5. Multinomial Logistic Regression6. Probability Distribution6.1. Normal Distribution6.2. Binomial DistributionBinomial ExperimentA&#xa0;binomial experiment&#xa0;(or&#xa0;Bernoulli trial) is a statistical experiment that has the following properties:The experiment consists of n&#xa0;repeated trials.The trials are independent.The outcome of each trial is either&#xa0;success&#xa0;(s) or&#xa0;failure&#xa0;(f).Expected value:&#xa0;npVariance:&#xa0;np(1-p)6.3. Negative Binomial DistributionNegative Binomial ExperimentA negative binomial experiment is a statistical experiment that has the following properties:The experiment consists of n&#xa0;repeated trials.The trials are independent.The outcome of each trial is either&#xa0;success&#xa0;(s) or&#xa0;failure&#xa0;(f).p(s) is the same for every trial.The experiment continues until x&#xa0;successes are observed.If X&#xa0;is the number of experiments until the xth&#xa0;success occurs, then X&#xa0;&#xa0;is a discrete random variable called a&#xa0;negative binomial.Expected Value: x(1-p)/pVariance: x(1-p)/p^26.4. Geometric DistributionThe&#xa0;geometric distribution&#xa0;is a special case of the negative binomial distribution that deals with the number of Bernoulli trials required to get a success (i.e., counting the number of failures before the first success).The geometric distribution is a negative binomial distribution where the number of successes is 1. We express this with the following formula:g(n, p) = (1-p)(n-1)pExpected&#xa0;Value: (1-p)/pVariance: (1-p)/p^26.5. Poisson DistributionPoisson ExperimentA&#xa0;Poisson experiment&#xa0;is a statistical experiment that has the following properties:The outcome of each trial is either&#xa0;success&#xa0;or&#xa0;failure.The average number of successes&#xa0;\u03BB&#xa0;that occurs in a specified region is known.The probability that a success will occur is proportional to the size of the region.The probability that a success will occur in an extremely small region is virtually zero.Expected Value:&#xa0;\u03BBVariance:&#xa0;\u03BB7. Conditional Probabilities7.1. Bayes' Theoremp(A|B)*p(B) = p(A&amp;B) = p(B|A)*p(A)p(A) = p(A&amp;B) + p(A&amp;^B)1 = p(A|B) +&#xa0;p(^A|B)7.2. Na\u00EFve BayesWhat does the term 'Naive' in 'Naive Bayes' mean ?The term 'Naive' in Naive Bayes comes from the fact that the algorithm considers the features that it is using to make the predictions to be independent of each other, which may not always be the case.Na\u00EFve assumption:P(A &amp; B) = P(A)*P(B), A and B are independent \u5DF2\u77E5\uFF1AP(A | x1, x2,\u2026, xi) is the proportion of P(x1, x2, \u2026, xi | A) * P(A) = P(x1 | A)*P(x2 | A)*\u2026*P(xi | A) * P(A)P(B | x1, x2,\u2026, xi) is the proportion of P(x1, x2, \u2026, xi | B) * P(B) = P(x1 | B)*P(x2 | B)*\u2026*P(xi | B) * P(B)\u672A\u77E5\uFF1AP(x1, x2, xi)\u6C42 P(A | x1, x2,\u2026, xi)\uFF1F P(B | x1, x2,\u2026, xi)\uFF1FNormalize proportionsP(A | x1, x2,\u2026, xi) = P(x1 | A)*P(x2 | A)*\u2026*P(xi | A) * P(A) / (P(x1 | A)*P(x2 | A)*\u2026*P(xi | A) * P(A) + P(x1 | B)*P(x2 | B)*\u2026*P(xi | B) * P(B))P(B | x1, x2,\u2026, xi) = P(x1 | B)*P(x2 | B)*\u2026*P(xi | B) * P(B) / (P(x1 | A)*P(x2 | A)*\u2026*P(xi | A) * P(A) + P(x1 | B)*P(x2 | B)*\u2026*P(xi | B) * P(B))8. Model Evaluation Metrics8.1. Classification metrics8.1.1. Confusion matrix&#xa0;Actual PositiveActual NegativePredicted PositiveTrue PositiveFalse Positive (Type I error)Predicted NegativeFalse Negative (Type II error)True Negative8.1.2. AccuracyMeasures how often the classifier makes the correct prediction. It\u2019s the ratio of the number of correct predictions to the total number of predictions (the number of test data points).8.1.3. PrecisionTells us what proportion of messages we classified as spam, actually were spam. It is a ratio of true positives to all positives, in other words it is the ratio of True Positives/(True Positives + False Positives)8.1.4. Recall (Sensitivity)Tells us what proportion of messages that actually were spam were classified by us as spam. It is a ratio of true positives to all the words that were actually spam, in other words it is the ratio of True Positives/(True Positives + False Negatives)8.1.5. SpecificityTell us what proportion of messages that actually were not spam were correctly classified by us as not spam. It is a ratio of true negative to all the words that actually were not spam, in other words it is the ratio of True Negative/(True Negative + False Positive)Specificity = TN/(TN+FP)8.1.6. F1 score8.1.7. F\u03B2 scoreIf care more about precision, you should move \u03B2 closer to 0. If care more about recall, you should move \u03B2 towards \u221E.8.1.8. ROC (Receiver Operating Characteristic) curveTrue Positive rate (Recall or&#xa0;Sensitivity) vs False Positive rate (1 - Specificity)8.2. Regression metrics8.2.1. Mean Absolute Error (MAE)8.2.2. Mean Square Error (MSE)8.2.3. Root Mean Square Error (RMSE)8.2.4. R2 scorer2 = 1 - (SEline/SEy) -- what % of total variation is described by the variation in x. it measures how much prediction error is eliminated when we use least-squares regression.8.3. Cross Validation\n\n\n\n\n\n9. Controlled Randomized ExperimentsRandomization reduce the bias by equalizing other factors that have not be explicitly accounted for in the experimental designObjects or individuals are randomly assigned (by chance) to an experimental group9.1. Random Sampling MethodsSimple random samplingStratified samplingClustered samplingSystematic random sampling9.2. Randomized Experimental AssignmentCompletely randomized designRandomized block designIn a block design, experimental subjects are first divided into homogeneous blocks before they are randomly assigned to a treatment group.&#xa0;Then, within each age level, individuals would be assigned to treatment groups using a completely randomized design.Matched pairs designResponse bias&#xa0;occurs when people systematically give wrong answers.Experimentation design:&#xa0;http://www.stat.yale.edu/Courses/1997-98/101/expdes.htm9.3. Necessary Ingredients for Running Controlled ExperimentsThere are experimental units that can be assigned to different variants (test groups) with no interference;There are enough experimental units;Key metrics, ideally an OEC (Overall Evaluation Criterion), are agreed upon and can by practically evaluated;Changes are easy to make.\n\n\n", "tags": "", "url": "page1239118772.html"},

]};
