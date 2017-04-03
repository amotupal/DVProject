import pandas as pd

pops = pd.read_csv("state population.csv")
state_map = pd.read_csv("state_fullnamemapper.csv")
state_name_map = pd.Series(state_map.Short.values,index=state_map.Full).to_dict()
pops['State'] = pops['State'].map(state_name_map)
pops['Population'] = pops['Population'] / 100000

pops.to_csv("state_population.csv", index=False)