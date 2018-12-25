import json
from pprint import pprint
with open('testing.json') as f:
    data = json.load(f)
pprint(data)
