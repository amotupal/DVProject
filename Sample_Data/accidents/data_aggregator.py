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


# weather, collission(front, rear, angle, random), Fatals Radio buttons
# for Fatals and incidents


# ['ARR_HOUR' 'ARR_MIN' 'CF1' 'CF2' 'CF3' 'COUNTY' 'DAY' 'DAY_WEEK' 'DRUNK_DR' 'FATALS' 'HOUR' 'MAN_COLL' 'MINUTE' 'MONTH' 'NHS' 'PEDS' 'PERSONS' 'SCH_BUS' 'STATE' 'ST_CASE' 'VE_TOTAL' 'WEATHER' 'YEAR']
dataset = df[0]
for i in range(1, len(df)):
    dataset = dataset.append(df[i], ignore_index=True)
    # columns_set.append(set(d.columns.values))
dataset = dataset.drop(labels=['LATITUDE', 'LONGITUD'], axis=1)

dataset['WEATHER'][dataset['WEATHER'] == 0] = 1  # normal / other
dataset['WEATHER'][dataset['WEATHER'] == 8] = 1
dataset['WEATHER'][dataset['WEATHER'] == 98] = 1
dataset['WEATHER'][dataset['WEATHER'] == 99] = 1
dataset['WEATHER'][dataset['WEATHER'] == 9] = 1

dataset['WEATHER'][dataset['WEATHER'] == 3] = 2  # rain
dataset['WEATHER'][dataset['WEATHER'] == 10] = 2
dataset['WEATHER'][dataset['WEATHER'] == 12] = 2

dataset['WEATHER'][dataset['WEATHER'] == 4] = 3  # snow
dataset['WEATHER'][dataset['WEATHER'] == 5] = 4  # Fog
dataset['WEATHER'][dataset['WEATHER'] == 7] = 5  # winds
dataset['WEATHER'][dataset['WEATHER'] == 6] = 5
dataset['WEATHER'][dataset['WEATHER'] == 11] = 5


dataset['MAN_COLL'][dataset['MAN_COLL'] == 2] = 1  # Front
dataset['MAN_COLL'][dataset['MAN_COLL'] == 9] = 2  # Rear
dataset['MAN_COLL'][dataset['MAN_COLL'] == 10] = 2
dataset['MAN_COLL'][dataset['MAN_COLL'] == 3] = 3  # Angle
dataset['MAN_COLL'][dataset['MAN_COLL'] == 4] = 3
dataset['MAN_COLL'][dataset['MAN_COLL'] == 5] = 3
dataset['MAN_COLL'][dataset['MAN_COLL'] == 6] = 3
dataset['MAN_COLL'][dataset['MAN_COLL'] == 7] = 4  # Random
dataset['MAN_COLL'][dataset['MAN_COLL'] == 8] = 4
dataset['MAN_COLL'][dataset['MAN_COLL'] == 11] = 4
dataset['MAN_COLL'][dataset['MAN_COLL'] == 98] = 4
dataset['MAN_COLL'][dataset['MAN_COLL'] == 99] = 4
dataset['MAN_COLL'][dataset['MAN_COLL'] == 0] = 4


# print(pd.unique(dataset['MAN_COLL']))
dataset.to_csv('../../Data/all_accidents.csv', index=False)
