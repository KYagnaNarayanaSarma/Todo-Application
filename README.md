# 📝 To-Do List Web Application

A simple, elegant **To-Do List Application** built with **HTML, CSS, JavaScript, and Bootstrap 4**.  
It allows users to **add, mark as complete, delete, and save tasks persistently** using the browser’s **localStorage**.

---

## 🌟 Features

✅ **Add New Tasks**  
Users can easily create tasks using the input field and “Add” button.  

✅ **Mark as Completed**  
Clicking on the checkbox toggles the task’s completion status, visually represented by a line-through style.  

✅ **Delete Tasks**  
Each task includes a trash icon to delete it instantly from the list and memory.  

✅ **Persistent Storage**  
Tasks are stored in the browser’s localStorage, so they remain available even after refreshing or closing the browser.  

✅ **Responsive Design**  
Styled with Bootstrap 4 and custom CSS for a clean, modern, and mobile-friendly look.  

---

## 🧩 Project Structure

```
project-folder/
│
├── index.html          # Main HTML file containing structure, styles, and script
├── README.md           # Documentation file (this one)
└── (optional) assets/  # Folder for additional CSS or JS files, if separated later
```

---

## ⚙️ Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5**   | Defines the structure and elements of the app |
| **CSS3**    | Adds styling and visual design |
| **Bootstrap 4** | Provides responsive layout and components |
| **JavaScript (ES6)** | Handles dynamic interactions, task creation, and localStorage logic |
| **Font Awesome** | Supplies the trash icon used for deletion |

---

## 🚀 Getting Started

### 1️⃣ Clone or Download the Repository

```bash
git clone https://github.com/KYagnaNarayanaSarma/Todo-Application.git
```

Or simply **download the ZIP file** and extract it to your desired folder.

### 2️⃣ Open in Browser

No build tools are required — this is a fully static application.  
Simply open `index.html` in your favorite web browser.

---

## 💡 How It Works

1. When the user adds a task, a new object is created and displayed dynamically in the list.  
2. Tasks are stored in an array `todoList`, which is serialized and saved in `localStorage`.  
3. When the page reloads, existing tasks are reloaded and displayed automatically.  
4. Users can mark a task as **completed**, toggle it back, or **delete** it entirely.  
5. Clicking **Save** ensures the list is persisted in localStorage.

---

## 🧠 Key JavaScript Functions

| Function | Description |
|-----------|-------------|
| `getTodoListFromLocalStorage()` | Fetches and parses saved tasks from localStorage |
| `onAddTodo()` | Adds a new task to the list and updates UI |
| `onTodoStatusChange()` | Toggles the completion status of a task |
| `onDeleteTodo()` | Deletes a task from both DOM and localStorage |
| `createAndAppendTodo()` | Dynamically builds the task element with its checkbox and delete icon |

---

## 🖼️ User Interface Overview

| Section | Description |
|----------|-------------|
| **Input Area** | Enter a task and click “Add” to create it |
| **Task List** | Displays all saved tasks with checkboxes and delete buttons |
| **Save Button** | Saves the current list to localStorage manually |

---

## 🧾 Example Use Case

- Enter: “Complete Assignment”
- Click **Add**
- Check it off once done (adds a strikethrough)
- Click the trash icon 🗑️ to remove
- Hit **Save** to persist tasks

---

## 🛠️ Future Enhancements

🚧 Planned improvements include:
- Editing existing tasks  
- Sorting tasks by completion or creation date  
- Adding due dates and categories  
- Cloud sync for multi-device access  
- Dark / light mode toggle  

---

## 👨‍💻 Author

**Developed by:** *Sharma*  
**Role:** Student / Web Developer in training  
**Guided by:** Best practices in clean, modular web design  

---

## 🪪 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

### 📬 Feedback & Contributions
Feel free to fork the repository, open issues, or submit pull requests to enhance the project further.

> “Simplicity is the ultimate sophistication.” — *Leonardo da Vinci*
