import os
import pandas as pd
import json


# states = pd.read_csv("../../Sample_Data/state_fullnamemapper.csv")
# print(states)

shape_mapper = {}

for filename in os.listdir(os.path.curdir):
    if(not filename.startswith("state")):
        shape_mapper[filename.split('.')[0]] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/" + filename

print(len(shape_mapper))




