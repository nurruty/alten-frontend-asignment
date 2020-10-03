# Nicolas Urruty

# ALTEN Assignment

To install dependecies run
`yarn install`
or
`npm install`

To start de project run
`npm start`
or
`yarn start`

The solution es focused in the front-end part of the assignment. The data flow from backend is mocked using an interval of 5s. In order to do that I used the rxjs library with observables. Features tables are arrange trying to maximize space used.

The color of the "check" icons are determined by a deviation threshold. Bellow 0.03 is green, between 0.03 and 0.06 yellow and over 0.06 red. On the other hand the color of the feature´s table is determined by de Dev out Tot. This value is acummulated for each control on every interval. When the average value of Dev out tot es bellow 1 it stays green, between 1 and 3 yellow and over 3 it turns to red.

# Next steps

- Develop a real server in order to fetch real data.
- Improve and increase the metrics shown.
- Whenever the Dev out tot average exceeds an unwanted value send notifications to users.
