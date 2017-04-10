import json as js
import pandas as pd



FIPS_data = pd.read_csv('../Sample_Data/FIPS_Cleaned.csv', dtype={
                        'State': object, 'County': object, 'FIPS_State': object, 'FIPS_County': object})
state_map = pd.Series(FIPS_data.State.values,
                      index=FIPS_data.FIPS_State).to_dict()

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

for mainKey in keys:
    with open('gz_2010_us_050_00_20m.json') as f:
        geoj = js.load(f)
    
    allkeys = []
    for key in keys:
        if(key != mainKey):
            allkeys += state_index[key]

    for key in sorted(allkeys, reverse=True):
        del(geoj['features'][key])
    fp = open(state_map[mainKey] + '.json',mode='w')
    js.dump(geoj,fp)

# for i in range(len(geoj['features'])):
#     if(geoj['features'][i]['properties']['STATE'] != '04'):
#         del(geoj['features'][i])

# print(len(geoj['features']))
# print(state_map.keys())


# for key in keys:
#     print(key)


# print(keys[1])
# print(geoj['features'][state_index['01'][1]])

# print(geoj['features'][1]['properties']['STATE'])
# print(geoj['type'])
# ['features'][1]['properties']
# print(geoj['features'][1]['type'])