@ECHO off
ECHO *** get mongoDB credentials ***
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
ECHO *** export all mongodb collections ***
mongoexport -h %URI_MLAB% -d %URI_DB%  -c colors -u %URI_USER% -p %URI_PW% --out data_export_files\colors.json
mongoexport -h %URI_MLAB% -d %URI_DB%  -c icons -u %URI_USER% -p %URI_PW% --out data_export_files\icons.json
mongoexport -h %URI_MLAB% -d %URI_DB%  -c formfields -u %URI_USER% -p %URI_PW% --out data_export_files\formfields.json
mongoexport -h %URI_MLAB% -d %URI_DB%  -c forms -u %URI_USER% -p %URI_PW% --out data_export_files\forms.json
mongoexport -h %URI_MLAB% -d %URI_DB%  -c guimodelfiles -u %URI_USER% -p %URI_PW% --out data_export_files\guimodelfiles.json
mongoexport -h %URI_MLAB% -d %URI_DB%  -c pageelements -u %URI_USER% -p %URI_PW% --out data_export_files\pageelements.json
mongoexport -h %URI_MLAB% -d %URI_DB%  -c pages -u %URI_USER% -p %URI_PW% --out data_export_files\pages.json
mongoexport -h %URI_MLAB% -d %URI_DB%  -c translationfiles -u %URI_USER% -p %URI_PW% --out data_export_files\translationfiles.json
mongoexport -h %URI_MLAB% -d %URI_DB%  -c translations -u %URI_USER% -p %URI_PW% --out data_export_files\translations.json
ECHO.
ECHO *** end of export ***
PAUSE
