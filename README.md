# DnD-statistics
A webscraping program reading the die throws from DnD Beyond, categorizes them and calculate statistics on them.

Essentially, DnD Beyond is a powerful website for DnD sessions, but they have no APIs to make use of. So, in order to obtain data behind an account, it is necessary to use webscraping. This brings a plethora of new problems for me, but which i'll try my darndest to solve.

My initial thoughts are to make the program an extension to be downloaded with Chrome Web Store, allowing the extension to be online at the same time as the GM is on and thereby collecting regularly the new dice rolls. 

//Update 31-07-2022
I've learned how to web scrape with cheerio, however, my journey has experienced an abrupt stop as to web scraping behind a login page. DnDbeyond requires login with verification from a second party (twitch for instance). I've tried to automate this process with Selenium webdriver, but since their software insists that i use the newest version of Chrome, 104.x.xxx, and the newest my computer apparently wants to cooperate with is 103.x.xxx, I've decided to put this to rest for a bit. Cypress looks interesting and made me realize the behemoth I am against. Through automate testing I figured out that when I automate the process of logging in, DnDBeyond captures it and redirects it to a human verification challenge of which they've blocked the button behind a shadowroot(closed). For now, this means that I'm stranded. My next attempt is to see if I can web scrape from and already logged in session from the web page. Wish me luck!
