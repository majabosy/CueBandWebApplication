# Cue Band Web Application

## Overview

The Cue Band Web Application is a project developed by Maja Bosy for the KV6003 Individual Computing Project module. 
The Cue Band Web Application is an extension of the Cue Band project, developed to address accessibility challenges faced by individuals with Parkinson's Disease (PD). 
It offers a user-friendly web interface, complementing the existing mobile app, to provide an alternative access point for users who find the mobile interface challenging. 
The application aims to enhance accessibility, improve user experience, and contribute to ongoing research and development efforts within the Cue Band initiative.

## Student Information

- **Name:** Maja Bosy
- **Student ID:** W20037161
- **Module:** KV6003 Individual Computing Project
- **Supervisor:** Kyle Montague
- **Second Marker:** Hasan Kivrak

## Usage

Before running the Cue Band Web Application, ensure you have Node.js and Tailwind CSS installed on your machine. 

To install all libraries, please run:
npm install

To install Tailwind CSS, please run:
npm install tailwindcss

To use the Cue Band Web Application:

1. Launch the development server by running `npm run dev`.
2. Open your web browser and navigate to `http://localhost:3000`.
3. Explore the various features of the application.

## Hosted Website

The Cue Band Web Application is also hosted online. 
You can access it [here](https://w20037161.nuwebspace.co.uk/cueband/app/aboutus).

## Bluetooth Functionality

To enable the Bluetooth functionalities, the band needs to be bonded via Lightblue. 
Lightblue is a Bluetooth utility application that facilitates the bonding process, establishing a secure connection between the CueBand device and the web application.

- **UUID:** 0E1D0004-9D33-4E5E-AEAD-E062834BD8BB

## Example User

For testing purposes, you can log in with the following example user credentials:

- **Email:** maja@gmail.com
- **Password:** maja

## Features

### Band

- **Band Connection:** Users can connect their CueBand device to the web application via Bluetooth.
- **Band Disconnection:** Users can disconnect their CueBand device from the web application.
- **Set Band Date and Time:** Users can synchronize the date and time of their CueBand device with the web application.

### Journal

- **Existing Note Entries Retrieval:** Users can view their existing journal entries upon logging in.
- **Note Entry and Retrieval:** Users can add new notes to their journal and view them later.
- **Set Journal through Questionnaire:** Users can set their journal entries manually or through a questionnaire.
- **View Heatmap:** Users can view a heatmap representation of their journal entries.

### Scheduling (Cueing)

- **Set Schedule:** Users can set their cueing schedule through the web application, which reflects on the CueBand device.
- **Cueing Mode:** Users can choose between two styles of setting up cueing: manual or questionnaire.

### Authentication/Registration

- **User Registration:** Users can register for an account on the website by providing necessary details.
- **User Authentication:** Users can log in to their accounts using their credentials.
- **User Log Out:** Loggeg in users can log out from their accounts.
- **User Authentication Failure Handling:** Users entering incorrect credentials should be notified about the authentication failure.

## Technologies Used

### Front-end:
- React: JavaScript library for building user interfaces.
- HTML: Standard markup language for creating web pages.
- Tailwind CSS: Utility-first CSS framework for styling.

### Back-end:
- PHP: Server-side scripting language for web development.

### Database:
- SQLite: Lightweight relational database management system.

### Authentication and Security:
- Bcrypt library: Hashing library for secure password storage.
- JSON Web Token (JWT): Standard for creating access tokens.
