#!/bin/bash

clear

echo "✨ Installing the dependencies"
yarn
clear

echo "👷🏼‍♂️ Building the core package"
yarn build:core
clear

echo "👷🏼‍♂️ Building the client package"
yarn build:client
clear

echo "👷🏼‍♂️ Starting the server"
yarn start:server