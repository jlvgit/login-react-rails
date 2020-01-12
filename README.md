# README

Steps to get this working (hopefully)

#### Prerequisite 
Have Mysql up and working
I used Rails 6.0.2.1 so you will need a similar version

#### Steps
- git clone repo
- bundle install
- update /config/database.yml with your mysql username and password
- `rails db:create`
- `rails db:migrate`
- `rails db:seed` if you want some fake users
- rails start
- go to `http://localhost:3000`
