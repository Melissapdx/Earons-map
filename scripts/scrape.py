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
    labels = ["date", "time", "location", "description", "name", "type"]
    output = []
    idx_row = 1
    for row in rows:
        cells = row.findChildren('td')
        # Filter out Things
        # filter out if cells are empty
        if len(cells) < 6:
            continue
        # if this type is an attack
        type_of_attack = cells[5].string
        # Filter out blank types
        if type_of_attack is None:
            continue
        #filter out type of attack that are not attacks
        if "Attack" not in type_of_attack:
            continue
        attack_data = {"id" : idx_row}
        idx_row += 1
        for idx, cell in enumerate(cells):
            label = labels[idx]
            #convert to string format, strip fails if cell.string is none so cast cell.string into a string
            value = "{}".format(cell.string).strip()
            attack_data[label] = value
        output.append(attack_data)
    return output

def write_data_to_file(data):
    # we have data, dump it into the json file.
    json_data = json.dumps(data)
    with open('data.json', 'w') as outfile:
        outfile.write(json_data)

table = get_table_data(results)
dictionay_of_attacks = convert_table(table)
write_data_to_file(dictionay_of_attacks)
