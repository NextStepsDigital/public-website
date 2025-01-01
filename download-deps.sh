#!/bin/bash

# Install deps for front end
cd frontend; yarn

# Install deps for back end
cd ../backend/functions; yarn

# Login to firebase
firebase login --no-localhost