# Run Journal

## Description

Run Journal is a responsive app designed for runners to log their runs, track progress and set a weekly goal. Additionaly, the user can
rate their run using pain, effort, difficulty and enjoyment.

I'm most proud of implementing mantine in so many components because I never used react styling libraries before.

## Basic Features

- React Router
- Firebase Auth
- Protected Routes
- Typescript/C#
- Mantine
- Responsive ui
- github usage
- efcore
- azure sql database
- CRUD operations

## Advanced Features

- Dark/Light mode
- Containerised project
- [Deployed on azure](https://frontendnew-acaqb7bqdne6hcha.eastus-01.azurewebsites.net/)


## Installation

- preloaded account with runs
  -username: msa@gmail.com || password: password

## Frontend

- cd frontend
- docker build -t frontendapp .
- docker run -p 3000:3000 frontendapp

## Backend

- cd backend
- docker build -t backendapi .
- docker run -p 8080:8080 backendapi
