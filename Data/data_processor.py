import pandas as pd

# data = pd.read_csv("2010/accident.csv")

# print(len(pd.unique(data['COUNTY'])))

data = pd.read_csv("County_Population.csv", dtype={
                   'County': object, 'Population': float})
# data = data.drop('in', axis=1)
# data['Population'] = data['Population'] / 1000
print(data.columns)
data.to_csv("County_Population.csv", index=False, float_format='%3.3f')
