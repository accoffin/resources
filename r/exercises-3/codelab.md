# Exercises

## Using FiveThirtyEight data (redux)
Let's revisit how we get access to the data from FiveThirtyEight. Albert Y. Kim has made a [fivethirtyeight package](https://cran.r-project.org/web/packages/fivethirtyeight/index.html) that comes with the FiveThirtyEight datasets baked into a package!

Install the package using `install.packages('fivethirtyeight')` then load the library using `library(fivethirtyeight)` inside your script.

List all the datasets in the package using `data(package = "fivethirtyeight")`. Let's try loading a dataset from this list called `nba_tattoos`:

```r
library(fivethirtyeight)
data(nba_tattoos)
head(nba_tattoos)
```

## Exercises
For reference, the `bad_drivers` dataset has the following columns (via the documentation for the `fivethirtyeight` package):

> **state** State
> **num_drivers** Number of drivers involved in fatal collisions per billion miles
> **perc_speeding** Percentage of drivers involved in fatal collisions who were speeding
> **perc_alcohol** Percentage of drivers involved in fatal collisions who were > alcohol-impaired
> **perc_not_distracted** Percentage of drivers involved in fatal collisions who were not > distracted
> **perc_no_previous** Percentage of drivers involved in fatal collisions who had not been > involved in any previous accidents
> **insurance_premiums** Car insurance premiums ($)
> **losses** Losses incurred by insurance companies for collisions per insured driver ($)

Complete these exercises using the `bad_drivers` dataset from the `fivethirtyeight` package:

1. Create a new R script for chapter three
2. Load the `tidyverse` and `fivethirtyeight` libraries
3. Check the `head` and `tail` of the data
4. **Select** the `state` and `insurance_premiums` columns
5. **Select** the `state` and `num_drivers` columns
6. Create a new column (**mutate**) called `num_speeding` that's equal to the *Percentage of drivers involved in fatal collisions who were speeding* (`perc_speeding`) multiplied by the *Number of drivers involved in fatal collisions per billion miles* (`num_drivers`)

Complete these exercises using the `flying` dataset that's also in the `fivethirtyeight` package:
1. Run `colnames(flying)`
1. Run `help(flying)` to understand what each column means in the dataset
2. Run a summary on the `flying` dataset
3. Use `group_by` on `recline_rude` and `tally`
4. Convert the code you used above to use `count` instead
5. How many people find reclining the seat very rude?

## Exercises (solutions)

For the `bad_drivers` dataset:

```r
library(tidyverse)
library(fivethirtyeight)

head(bad_drivers)
tail(bad_drivers)
summary(bad_drivers)

bad_drivers %>% select(state, insurance_premiums)
bad_drivers %>% select(state, num_drivers)

bad_drivers %>% mutate(num_speeding = perc_speeding * num_drivers)
```

For the `flying` dataset:

```r
library(tidyverse)
library(fivethirtyeight)

colnames(flying)
help(flying)

summary(flying)

flying %>% group_by(recline_rude) %>% tally()
flying %>% count(recline_rude)
```

From the last table, 71 people found reclining very rude.

## Data licenses
The `fivethirtyeight` R package is licensed under the MIT license.

The FiveThirtyEight data is licensed and used under CC-BY via [https://github.com/fivethirtyeight/data](https://github.com/fivethirtyeight/data). See [https://github.com/fivethirtyeight/data/blob/master/LICENSE](https://github.com/fivethirtyeight/data/blob/master/LICENSE) for license details.