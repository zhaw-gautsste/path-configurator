@ECHO off
ECHO *** enter app name ***
set /p APPNAME="Enter application name for Heroku: "
ECHO.
ECHO *** create heroku with mlab mongodb ***
heroku login
heroku create --region eu -a %APPNAME%
heroku git:remote -a %APPNAME%
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set NPM_MODULES_CACHE=true
heroku config:set NODE_ENV=production
heroku addons:create mongolab:sandbox
heroku config:get MONGODB_URI > %TEMP%\mongodbUri.txt
ECHO.
ECHO *** get mongodb credentials ***
SET /p URI=<%TEMP%\mongodbUri.txt
ECHO URI: %URI%
SET URI_USER=%URI:~10,15%
ECHO USER: %URI_USER%
SET URI_PW=%URI:~26,26%
ECHO PW: %URI_PW%
SET URI_MLAB=%URI:~53,23%
ECHO MLAB: %URI_MLAB%
SET URI_DB=%URI:~77,23%
ECHO DB: %URI_DB%
ECHO.
ECHO *** generate environement file  ***
(
ECHO export const environment = {
ECHO production: false,
ECHO API_URL: "https://%APPNAME%.herokuapp.com"
ECHO };
) > src\environments\environment.ts
ECHO *** generate .env file in local repository ***
(
ECHO MONGODB_URI=%URI%
ECHO MONGODB_TEST_URI=mongodb://localhost:27017/test
) > .env
ECHO.
ECHO *** push to heroku and build app ***
git add src/environments/environment.ts
git commit -m "deploy to heroku "%APPNAME%
git push heroku master
ECHO.
ECHO *** import icon/color data into mongodb ***
mongoimport -h %URI_MLAB% -d %URI_DB%  -c colors -u %URI_USER% -p %URI_PW% --file data_import_files\colors.json
mongoimport -h %URI_MLAB% -d %URI_DB%  -c icons -u %URI_USER% -p %URI_PW% --file data_import_files\icons.json
ECHO.
ECHO *** open heroku url ***
heroku open
ECHO.
ECHO *** end of installation ***
PAUSE
