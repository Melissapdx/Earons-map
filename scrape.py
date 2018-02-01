from bs4 import BeautifulSoup
import requests
import json
# -*- coding: utf-8 -*-
results = requests.get('https://www.coldcase-earons.com/timeline.php')

def get_table_data(data):
    """ Retrieve data from website table of attacks with beautiful soup"""
    #storing content in variable then parse with beautiful soup
    c = results.content
    soup = BeautifulSoup(c)
    tables = soup.findChildren('table')
    my_table = tables[1]

    return my_table


def convert_table(my_table):
    """ Pull TD from table and dump to json"""
    rows = my_table.findChildren(['th','tr'])

    for row in rows:
        cells = row.findChildren('td')
        for cell in cells:
            value = cell.string
            attack_data = json.dumps(value)
    return attack_data




table = get_table_data(results)
convert_table(table)
