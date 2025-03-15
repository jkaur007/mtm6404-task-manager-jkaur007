# Task Manager

Task Manager is a productivity tool built with React that allows users to efficiently manage their tasks by providing a user-friendly interface to create, update, delete, and prioritize tasks. This web application enables users to stay organized and on top of their tasks with features such as task creation, priority sorting, task completion toggling, and list filtering.

## Features
- **Task Creation:** Quickly add tasks, set priorities, and track completion status.
- **Task List Rendering:** Display tasks in a list format, with sorting based on priority.
- **Task Filtering:** Show or hide completed tasks based on user preference.
- **Task Completion Toggling:** Mark tasks as complete or incomplete.
- **Delete Task:** Remove tasks from the list.
- **Persistent Storage:** Task data is saved in local storage, ensuring data persists even after refreshing or closing the browser.
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.

## Components
The application consists of the following React components:
- **NavigationBar:** Provides navigation across the app.
- **TaskList:** Displays all tasks dynamically, sorted by priority.
- **TaskItem:** Represents each task item, showing task details, priority, and completion status. Allows toggling completion and deleting tasks.
- **TaskForm:** Allows adding new tasks with specified name and priority.
- **Footer:** Displays footer content with information about the app.

## Getting Started

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/task-manager.git
```
2. Navigate into the project directory:
```bash
cd task-manager
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm start
```
5. Access the app at: [http://localhost:3000](http://localhost:3000)

### Usage
- **Adding Tasks:** Fill out the "Task Name" and "Priority" fields in the form, and click "Add Task".
- **Viewing Tasks:** Tasks are sorted by priority (High, Medium, Low) and show task details, priority, and completion status.
- **Marking Tasks Complete/Incomplete:** Click the checkbox next to a task to toggle its completion status.
- **Deleting Tasks:** Click the trash icon next to any task to remove it.
- **Task Filtering:** Use the "Show Completed Tasks" checkbox to filter completed tasks.

## State Persistence
The task list is saved to `localStorage`, ensuring data persists across browser sessions.

## Responsive Design
The app is fully responsive, providing optimal user experience across devices.

## Components Breakdown
- **NavigationBar:** Contains links for navigation.
- **TaskList:** Renders tasks dynamically, allows filtering and sorting.
- **TaskItem:** Displays individual tasks with completion toggle and delete options.
- **TaskForm:** Manages form state to add new tasks.
- **Footer:** Provides general app information.

## Technologies Used
- React for UI.
- CSS for styling.
- localStorage for data persistence.

## Conclusion
Task Manager is a simple yet powerful tool to help users manage daily tasks efficiently. With features like task prioritization, completion toggling, and persistent storage, it offers a comprehensive solution for task management. The responsive design ensures accessibility across different devices.

