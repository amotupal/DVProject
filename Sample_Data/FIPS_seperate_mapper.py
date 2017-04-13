import pandas as pd
import json

# fips = pd.read_csv('FIPS_seperate.csv', dtype={'FIPS_State': object,'FIPS_County': object})
# fips = fips.drop(['H'], axis=1)
# fips['County_State'] = fips['County'] + ', ' + fips['State']
# fips.to_csv('FIPS_Cleaned.csv')

state_counties = {}
fips = pd.read_csv('FIPS_mapping.csv', dtype={'FIPS': object})
states = [stat[1:] for stat in pd.unique(fips['State'])]

fips['FIPS'] = "0500000US" + fips['FIPS']
# print(states)
for state in states:
    state_counties[state] = fips['FIPS'][fips['State']
                                         == ' ' + state].values.tolist()
with open('state_counties.json', mode='w') as scjs:
    json.dump(state_counties, scjs)
# print(state_counties)
# print(fips.groupby(by='State'))
