# Task Manager App

This is a simple Task Manager web application built using Express.js and PostgreSQL. Users can add, edit, and delete tasks, and the tasks are stored in a PostgreSQL database. The project also includes a basic front-end using EJS templates.

## Prerequisites
- Node.js installed
- PostgreSQL installed and running
- Create a database and configure the environment variables in a `.env` file.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/divyansharma001/todoList.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your PostgreSQL database and update the `.env` file with your database configuration.

4. Run the application:

   ```bash
   npm start
   ```

   The server will be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`index.js`**: Main entry point for the Express application.
- **`public`**: Static files (e.g., stylesheets, client-side scripts).
- **`views`**: EJS templates for rendering HTML pages.

## Routes

- **`GET /`**: Displays the task list on the home page.
- **`POST /add`**: Adds a new task to the database.
- **`POST /edit`**: Edits an existing task in the database.
- **`POST /delete`**: Deletes a task from the database.

## Database Schema

The application uses a single table called `items` with columns:
- `id` (serial): Unique identifier for each task.
- `title` (text): The title of the task.

## Dependencies

- **Express**: Web application framework.
- **Body-parser**: Middleware for parsing incoming request bodies.
- **Pg**: PostgreSQL client for Node.js.
- **Dotenv**: Loads environment variables from a `.env` file.

## Contributing

Feel free to contribute by submitting issues or pull requests. Make sure to follow the [Contributing Guidelines](CONTRIBUTING.md).

