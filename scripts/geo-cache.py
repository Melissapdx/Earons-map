import requests
import json
import urllib
#load data.json file into memory(parse as dictionary)
#for each event in array make a request to geocache api to retrieve lat/long
#if request is sucessful add lat/long to event object
#encode dictionary as json, write it to a file as a string

def read_file(data):
	with open(data) as f:
		read_data = f.read()
	#parse into json so can work with in python
	data = json.loads(read_data)
	return data


def geocache():
	event_data_raw = read_file("../public/location-data.json")
	url = "https://maps.googleapis.com/maps/api/geocode/json?address="
	for event in event_data_raw:
		location = event['location']
		street = event['street']
		address = "{}, {}, California ".format(street,location)
		url_address = urllib.urlencode(address)


geocache()
