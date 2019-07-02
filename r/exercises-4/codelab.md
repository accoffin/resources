# Exercises

## Exercises

We're using the `flying` dataset from the `fivethirtyeight` package.

Load in the `tidyverse` and `fivethirtyeight` packages, then try to recreate the following graphs using `ggplot2` code.

**Recreate this graph:**
![Graph with x-axis of 'recline_rude' with labels No, Somewhat, Very and NA and y-axis 'count' with labels 0, 100, 200, 300, 400 and 500.. The chart is a bar chart containing 4 vertical bars.](images/ggplot2-graph-1.png)

Use this code to get started (add the required `aes` arguments):

```r
ggplot(flying, aes()) +
  geom_bar()
```

**Recreate this graph:**
![Graph with x-axis of 'age' with labels 18-29, 30-44, 45-60, > 60 and NA and y-axis 'count' with labels 0, 100, 200, 300, 400 and 500.. The chart is a bar chart containing 5 vertical bars.](images/ggplot2-graph-2.png)

**Recreate this graph:**
![Graph with it has x-axis 'age' and has y-axis 'count'. There is a legend indicating that fill is used to represent Electronic use in violation, with 3 levels (FALSE, TRUE and NA). The chart is a bar chart containing 14 vertical bars.](images/ggplot2-graph-3.png)

*Tip*: Make sure you consider the legend label fill. It shows the fill for "Electronic use in violation".

If you're unsure of the column required, try running `colnames(flying)` or `help(flying)`.

**Recreate this graph:**
![The chart is comprised of 6 panels containing sub-charts, arranged horizontally. The panels represent different values of recline_frequency. Each sub-chart has x-axis 'Is it rude to recline your seat on a plane?' with labels No, Somewhat, Very and NA. Each sub-chart has y-axis 'count' with labels 0, 50, 100 and 150. Panel 1 represents data for recline_frequency = Never. Panel 2 represents data for recline_frequency = Once in a while, and so on.](images/ggplot2-graph-4.png)

*Tip*: What will you facet by?

## Exercises (solution)

Here's the solution code to create each graph shown:

```r
library(tidyverse)
library(fivethirtyeight)
help(flying)

ggplot(flying, aes(x = recline_rude)) +
  geom_bar()

ggplot(flying, aes(x = age)) +
  geom_bar()

ggplot(flying, aes(x = age, fill = electronics)) +
  labs(fill = "Electronic use in violation") +
  geom_bar()

ggplot(flying, aes(x = recline_rude)) +
  geom_bar() +
  labs(x = "Is it rude to recline your seat on a plane?") +
  facet_wrap(~ recline_frequency) + 
  theme(axis.text.x = element_text(angle = 90, vjust = 0.5))
```

## Data licenses
The `fivethirtyeight` R package is licensed under the MIT license.

The FiveThirtyEight data is licensed and used under CC-BY via [https://github.com/fivethirtyeight/data](https://github.com/fivethirtyeight/data). See [https://github.com/fivethirtyeight/data/blob/master/LICENSE](https://github.com/fivethirtyeight/data/blob/master/LICENSE) for license details.