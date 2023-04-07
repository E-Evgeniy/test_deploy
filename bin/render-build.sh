#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
./bin/rails javascript:install:esbuild
yarn install
yarn add react
yarn add react-dom
gem install foreman
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate