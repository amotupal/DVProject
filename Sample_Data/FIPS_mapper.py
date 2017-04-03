import pandas as pd

fips = pd.read_csv('FIPS_mapping.csv', dtype={'FIPS': object})
fips['County'] = fips['County'] + ', ' + fips['State']
fips = fips.drop(['State'], axis=1)
print(fips)
