from bs4 import BeautifulSoup
import requests
# -*- coding: utf-8 -*-


results = requests.get('https://www.coldcase-earons.com/timeline.php')

#storeing content in variable then parse with beautiful soup
c = results.content
soup = BeautifulSoup(c)

sample = soup.find_all('td')
print sample[0]

for table_data in soup.find_all('td'):
    print table_data
