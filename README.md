# AWAKE
A small project that can prevent your Heroku apps from falling asleep

## Usage
In order to wake up your apps you will need to deploy this project on your heroku account.

You can do it by either setting up this repository as the deployment method of the project or uploading it to Heroku's git.

Note that the dyno by itself has to be run as a worker.

## Configuration
Configuration is being performed by setting up the **Config Vars** of the app:

| parameter | default |         description        |
|:---------:|:-------:|:--------------------------:|
|    APPS   |    []   | array of the provided apps |
|    INT    |  20mins | interval in milliseconds   |
|     EP    |  /awake | endpoint                   |
