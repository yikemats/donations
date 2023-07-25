# [Musk vs. Zuckerberg: Who is Giving Back More to Society?](https://yikemats.github.io/donations/)

## About this project
This is my third project for [the Lede Program](https://ledeprogram.com) at Columbia University. You can read the story here: [https://yikemats.github.io/donations/](https://yikemats.github.io/donations/)

In this article, I extracted the number/amount of donations and organizations from tax documents submitted by foundations operated by Elon Musk and Mark Zuckerberg and analyzed their characteristics.

The "competition" between the two, both CEOs of major technology companies, has been ongoing for a long time but has accelerated since June 2023. The trigger was on June 20th when Musk tweeted, "[I'm up for a cage match if he is lol,](https://twitter.com/elonmusk/status/1671364992665264131?s=20)" referring to Zuckerberg. In response, Zuckerberg replied on his Instagram story, saying, "[send me location,](https://www.businessinsider.com/mark-zuckerberg-elon-musk-cage-match-send-location-jiu-jitsu-2023-6)" leading to a situation where it's unclear whether they were joking or not.

As of July 23rd, it is not certain whether this "cage match" will happen, but if it does, the proceeds will be directed to some charity. Therefore, I became curious about how much they have invested in charitable activities and decided to ring the bell for the "battle" based on the data.

## Data Collection and Analysis:

I used ProPublica's website "[Non Profit Explorer](https://projects.propublica.org/nonprofits/search)" to obtain the tax documents. I retrieved Form 990 for Musk's "Musk Foundation" and for Zuckerberg's "Chan Zuckerberg Initiative Advocacy," "Chan Zuckerberg Initiative Foundation," and "Chan Zuckerberg Biohub," and collected the data. The XML files were available for only 2020 and 2021, so I used BeautifulSoup to extract the necessary data, such as donation amounts and businesses/organizations that received the money for these two years.

After that, I used Pandas DataFrame to create CSV files that could be used for generating graphs. I integrated the data in CSV for Zuckerberg's three foundations and categorized them according to the investment targets. Similarly, I categorized Musk's foundation data, and in the animated line graph that compared their donations as part of the competition, I set the "timing" in the order mentioned in Form 990. I evenly distributed the contents of their donations over the two-year period on the time axis.

## Future Outlook:

Among the executives, especially in the case of Musk, not much was known about where and how much he donates. With this method, I gained detailed insights, so in the future, we would like to expand the scope to include Japanese executives and companies and write more articles. Furthermore, if we can obtain tax documents for regular companies, not just charitable foundations, I can analyze them using the same data analysis methods. Although I lacked the skills to handle a large amount of data this time, I want to challenge PDF scraping and conduct an even deeper analysis next time.
