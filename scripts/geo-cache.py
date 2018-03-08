import requests
import json
import urllib3

urllib3.disable_warnings()
http = urllib3.PoolManager()
import os


# load data.json file into memory(parse as dictionary)
# for each event in array make a request to geocache api to retrieve lat/long
# if request is sucessful add lat/long to event object
# encode dictionary as json, write it to a file as a string

def read_file(data):
    with open(data) as f:
        read_data = f.read()
    # parse into json so can work with in python
    data = json.loads(read_data)
    return data


def geocache():
    event_data_raw = read_file("../public/location-data.json")
    url = "https://maps.googleapis.com/maps/api/geocode/json"
    key = "AIzaSyC2mvf5NhQ88pd1GAkKlprWGc36YPVz-fo"

    # key = google_key['secret_key']
    for event in event_data_raw:
        location = event['location']
        street = event['street']
        address = "{}, {}, California ".format(street, location)
        req = http.request("GET", url, fields={'address': address, 'key': key})
        if req.status == 200:
            # req.data
            response = json.loads(req.data.decode('utf-8'))
            if len(response['results']) > 0:
                result = response['results'][0]
                event['lng'] = result['geometry']['location']['lng']
                event['lat'] = result['geometry']['location']['lat']
            else:
                print "Error unable to process address: {}".format(address)
        else:
            print "Could not connect to Google geolocation at this address:{}".format(address)
    return event_data_raw



attack_locations = geocache()
print attack_locations
