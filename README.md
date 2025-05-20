# Project Background
Taking the code from this [repo](https://github.com/skumar1129/NCAA-Predictor) and hosting the applicaiton in Google Cloud as part of a company lunch n learn. The application uses mostly the same code as the other repo.

## Tech Stack / Folder Explanation
python: webscraper script that uses python/beatifulsoup to grab advanced analytics data
<br>
frontend: Vue application with typscript hosted on firebase hosting
<br>
backend: Python flask application deployed to cloud run to query firestore instance
<br>
data: Json file outputted from webscraper and used to populate firestore instance
<br>
backend-store: A cloud firestore instance in GCP 