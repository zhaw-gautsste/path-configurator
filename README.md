# Path Configurator

[![Build Status](https://travis-ci.org/zhaw-gautsste/path-configurator.svg?branch=master)](https://travis-ci.org/zhaw-gautsste/path-configurator)

This is an example application using <a href="https://github.com/innovad/path">Path Application Framework</a>.

The Path Configurator provides the functionality to create new Path Applications by configuration in a GUI. 
You can add Pages and new Forms via Inputforms in a guided way and easier than adding it all in the JSON file directly.
As soon as you are done, you can export the JSON <code>GUI-Model file</code> and the <code>Translation file</code> and import them into the empty Path Example App.
There you only have to add the Backend & Rest-services and your new application is ready to use.

## Dependencies
At the moment the Path Configurator only works with a <code>MongoDB</code> on mLab. 
This can be added in Heroku, as soon as an account has been verified.
The Heroku App and the <code>MongoDB</code> on mLab are generated when executing the batch file specified under <code>Installation</code>.
However, registration of a Heroku user and account verification has to be done first. 
Otherwise the installation won't work.
Local installation of <code>MongoDB</code> is not mandatory, but it is used for importing the static icon and color data.

## Installation
Clone this Repository and save it locally. Execute <code>git init</code> and <code>git add .</code>.
After that you can simply execute the batch file <code>cmd_create_heroku.cmd</code>. 
This will setup a new Heroku application, set all relevant environment variables and load the static data(colors/icons) into the <code>MongoDB</code>.
If the batch file is not working, you can execute the statements one by one directly in the command line.

For further instructions please have a look at the [Installation Tutorial](https://github.com/zhaw-gautsste/path-configurator/wiki/Installation-of-the-Path-Configurator).

## Live Configurator
Live Path Configurator on Heroku Free (please wait for wakeup): [Path-Configurator](https://path-configurator.herokuapp.com)
