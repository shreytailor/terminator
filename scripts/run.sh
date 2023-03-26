#!/bin/bash

clear

echo "✨ Installing the dependencies"
yarn
clear

echo "👷🏼‍♂️ Building the core package"
rm -r packages/core/dist
yarn build:core
clear

echo "👷🏼‍♂️ Building the client package"
rm -r packages/client/dist
yarn build:client
clear

echo "👷🏼‍♂️ Starting the server"
yarn start:server