import pandas as pd

data = pd.read_csv("2010/accident.csv")

print(len(pd.unique(data['COUNTY'])))