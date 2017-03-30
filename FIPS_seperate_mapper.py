import pandas as pd

fips = pd.read_csv('FIPS_seperate.csv', dtype={'FIPS_State': object,'FIPS_County': object})
fips = fips.drop(['H'], axis=1)
fips['County_State'] = fips['County'] + ', ' + fips['State']
fips.to_csv('FIPS_Cleaned.csv')
