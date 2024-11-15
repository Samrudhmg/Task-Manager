
<!-- Task Manager -->
1. About the Application and What It Can Do
This is a simple yet powerful Task Management App built with React, perfect for keeping track of your tasks and priorities. Here’s what you can do with it:

Add Tasks: Quickly add tasks by typing a title and setting a priority level (Low, Medium, or High) when creating a new task.
Mark as Complete: Click on any task to mark it as complete, which strikes through both the title and priority, making it easy to see what’s done.

Delete Tasks: Remove tasks with just a click of a button to keep your list clutter-free.

Persistent Storage: Tasks are saved in your browser’s local storage, so they won’t disappear when you refresh the page.

Search and Sort: A handy search bar filters tasks by title, and there are sorting options to organize tasks alphabetically (A-Z, Z-A) or by priority (Low-High, High-Low).

Serial Numbers and Organized Layout: Tasks are displayed in a neat table with serial numbers, making the list clear and organized.

This app provides a clean, intuitive interface to help manage tasks and priorities effortlessly.

2. How to Set It Up and Get Started
Setting up the app is simple:

Requirements: Make sure you have Node.js and npm installed on your computer.
Installation: Open your terminal, navigate to the project folder, and run:
bash

npm install

This will install all the dependencies needed to run the app.
Run the App: Once installed, start the app with:
bash
Copy code
npm start
The app will open in your browser, and you’ll be ready to add and manage tasks!


3. Assumptions Made During Development
A few assumptions helped shape the development:

Fixed Priority: Once a priority is set for a task, it can’t be changed. This simplifies the task structure.

Persistent Storage in Local Storage: The app uses localStorage to save tasks between sessions. This works for individual use on the same browser but wouldn’t sync tasks across devices or browsers.

Basic Sorting: Sorting is limited to alphabetical and priority-based options, keeping the interface straightforward.

Table Layout: The list is displayed in a table with serial numbers for easy organization and readability.

This app aims to provide a smooth, focused experience for managing tasks without overwhelming options. Hope you enjoy using it!






