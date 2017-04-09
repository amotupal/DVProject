import json as js

with open('gz_2010_us_050_00_20m.json') as f:
    geoj = js.load(f)

# js.
state_index = {}

for i in range(len(geoj['features'])):
    if(geoj['features'][i]['properties']['STATE'] in state_index):
        state_index[geoj['features'][i]['properties']['STATE']].append(i)
    else:
        state_index[geoj['features'][i]['properties']['STATE']] = [i]

# print(state_index)
keys = state_index.keys()
allkeys = []

for key in keys:
    if(key != '04'):
        allkeys += state_index[key]

print(type(allkeys[1]))

for key in sorted(allkeys, reverse=True):
    del(geoj['features'][key])

# for i in range(len(geoj['features'])):
#     if(geoj['features'][i]['properties']['STATE'] != '04'):
#         del(geoj['features'][i])

print(len(geoj['features']))

fp = open('AZ.json',mode='w')

js.dump(geoj,fp)
# for key in keys:
#     print(key)


# print(keys[1])
# print(geoj['features'][state_index['01'][1]])

# print(geoj['features'][1]['properties']['STATE'])
# print(geoj['type'])
# ['features'][1]['properties']
# print(geoj['features'][1]['type'])