import pandas as pd
from datetime import datetime, timedelta
import os

data = pd.read_csv('accident.csv', dtype={'YEAR': object, 'MONTH': object, 'DAY': object,
                                          'HOUR': object, 'MINUTE': object, 'ARR_HOUR': object, 'ARR_MIN': object, 'STATE':object, 'COUNTY':object})


def fix_length(val):
    if(len(val) == 1):
        return '0' + val
    else:
        return val

def fix_length_state(val):
    if(len(val)==1):
        return '00' + val
    elif(len(val) == 2):
        return '0' + val
    else:
        return val





data['MONTH'] = data['MONTH'].apply(fix_length)
data['DAY'] = data['DAY'].apply(fix_length)
data['HOUR'] = data['HOUR'].apply(fix_length)
data['MINUTE'] = data['MINUTE'].apply(fix_length)
data['ARR_MIN'] = data['ARR_MIN'].apply(fix_length)
data['ARR_HOUR'] = data['ARR_HOUR'].apply(fix_length)


data['MINUTE'][data['MINUTE'] == '99'] = '01'
data['HOUR'][data['HOUR'] == '99'] = '01'
data['MINUTE'][data['MINUTE'] == '98'] = '01'
data['HOUR'][data['HOUR'] == '98'] = '01'
data['MINUTE'][data['HOUR'] == '24'] = '59'
data['HOUR'][data['HOUR'] == '24'] = '23'
data['TimeStamp'] = data['YEAR'] + '-' + data['MONTH'] + '-' + \
    data['DAY'] + 'T' + data['HOUR'] + ':' + data['MINUTE'] + ':00Z'

data['ARR_MIN'][data['ARR_MIN'].isin(
    ['99', '98', '97'])] = data[data['ARR_MIN'].isin(['99', '98', '97'])]['MINUTE']
data['ARR_HOUR'][data['ARR_HOUR'].isin(
    ['99', '98', '97'])] = data[data['ARR_HOUR'].isin(['99', '98', '97'])]['HOUR']
data['ARR_MIN'][pd.isnull(data['ARR_MIN'])
                ] = data['MINUTE'][pd.isnull(data['ARR_MIN'])]
data['ARR_MIN'][data['ARR_HOUR'] == '24'] = '59'
data['ARR_HOUR'][data['ARR_HOUR'] == '24'] = '23'
data['ARR_TimeStamp'] = data['YEAR'] + '-' + data['MONTH'] + '-' + \
    data['DAY'] + 'T' + data['ARR_HOUR'] + ':' + data['ARR_MIN'] + ':00Z'


def format_time(date_str):
    return datetime.strptime(date_str, "%Y-%m-%dT%H:%M:%SZ")


data['ARR_TimeStamp'] = data['ARR_TimeStamp'].apply(format_time)

data['TimeStamp'] = data['TimeStamp'].apply(format_time)
data['ARR_TimeStamp'][data['TimeStamp'] > data['ARR_TimeStamp']
                      ] = data['ARR_TimeStamp'][data['TimeStamp'] > data['ARR_TimeStamp']] + timedelta(days=1)

data['ARR_TimeStamp'] = (data['ARR_TimeStamp'] -
                         data['TimeStamp']).apply(timedelta.total_seconds)
data['ARR_TimeStamp'] = data['ARR_TimeStamp'] / 60

data = data.drop(labels=['YEAR', 'MONTH', 'DAY', 'HOUR',
                         'MINUTE', 'ARR_HOUR', 'ARR_MIN', 'DAY_WEEK'], axis=1)


FIPS_data = pd.read_csv('FIPS_Cleaned.csv', dtype={'State':object, 'County':object, 'FIPS_State':object, 'FIPS_County':object})
state_map = pd.Series(FIPS_data.State.values,
                      index=FIPS_data.FIPS_State).to_dict()

county_map = pd.Series(FIPS_data.County.values,
                       index=FIPS_data.FIPS_County).to_dict()

data['STATE'] = data['STATE'].apply(fix_length)
data['COUNTY'] = data['COUNTY'].apply(fix_length_state)
data['STATE'] = data['STATE'].map(state_map)

data['State_County'] = data['STATE'] + data['COUNTY']

def fix_county(row):
    FIPS_data_state = FIPS_data[FIPS_data['State'] == row['STATE']]
    # FIPS_data_state['County'][FIPS_data_state['FIPS_County'] == row['COUNTY']].values
    # if(len(FIPS_data_state[FIPS_data_state['FIPS_County'] == row['COUNTY']]['County']) != 1):
    return FIPS_data_state[FIPS_data_state['FIPS_County'] == row['COUNTY']]['County'].values[0]

    # print(FIPS_data['State'] == row['STATE'] and )
    # print(FIPS_data['County'][FIPS_data['State'] == row['STATE']] and FIPS_data['FIPS_County'] == row['COUNTY']][0])
    # print(row['COUNTY'])

data = data[data['COUNTY'] != '000']

print(len(pd.unique(data['COUNTY'] + data['STATE'])))


data['COUNTY'] = data.apply(fix_county, axis=1)
print(len(pd.unique(data['COUNTY'] + data['STATE'])))


# for row in FIPS_data.itertuples():
#     for bigrow,idx in data.iter
    
    # data['COUNTY'][(data['STATE'] == row.State) and (data['COUNTY'] == row.FIPS_County)] = row.County

# for()


# data['COUNTY'] = data['COUNTY'].apply(county_map)

# print(zip(pd.unique(data[['STATE', 'COUNTY']].values)))

# for val in zip(data[['STATE', 'COUNTY']].values):
#     print(val[0])
    # if(val[0] == 'nan'):
    #     print("nan")

data.to_csv('accident_new.csv')
