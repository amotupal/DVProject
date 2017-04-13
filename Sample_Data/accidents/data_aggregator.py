import pandas as pd
# from Set import Set

df = []

columns_set = []

df.append(pd.read_csv("./accident06.csv"))
df.append(pd.read_csv("./accident07.csv"))
df.append(pd.read_csv("./accident08.csv"))
df.append(pd.read_csv("./accident09.csv"))
df.append(pd.read_csv("./accident10.csv"))
df.append(pd.read_csv("./accident11.csv"))
df.append(pd.read_csv("./accident12.csv"))
df.append(pd.read_csv("./accident13.csv"))
df.append(pd.read_csv("./accident14.csv"))
df.append(pd.read_csv("./accident15.csv"))


for d in df:
    columns_set.append(set(d.columns.values))
common columns columns_set[0].intersection(columns_set[1], columns_set[2], columns_set[3], columns_set[4],
                                           columns_set[5], columns_set[6], columns_set[7], columns_set[8], columns_set[9])
