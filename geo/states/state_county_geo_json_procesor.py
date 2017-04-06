import os
import pandas as pd

# states = pd.read_csv("../../Sample_Data/state_fullnamemapper.csv")
# print(states)

shape_mapper = {}

for filename in os.listdir(os.path.curdir):
    
