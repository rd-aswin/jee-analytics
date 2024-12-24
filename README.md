# JEE Analytics System

A web-based application to help JEE aspirants track their progress, analyze performance, and improve weak areas. The system supports chapter-wise and monthly tests with detailed analytics and recommendations.

## Features

- **User Authentication**: Secure login and registration system.
- **Chapter-wise Tests**: Practice with JEE-level questions in MCQ, MSQ, and numerical formats.
- **Monthly Tests**: Gradual syllabus expansion for effective preparation.
- **Performance Analytics**: Detailed analysis of scores, time per question, and subject-wise performance.
- **Recommendations**: Insights into weak areas and suggested chapters for improvement.
- **Upcoming Tests**: View scheduled tests on the dashboard.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Axios**: For handling API calls.
- **Chart.js**: For visualizing performance analytics.

### Backend
- **Flask**: For API development.
- **PostgreSQL**: For database management.
- **SQLAlchemy**: For ORM (Object Relational Mapping).
- **JWT**: For secure user authentication.

---

## Installation

### Prerequisites
- Node.js and npm
- Python 3.9 or later
- PostgreSQL

### Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/jee-analytics.git
cd jee-analytics
```

#### 2. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up the PostgreSQL database:
   - Update the `DATABASE_URL` in `.env` file.
   - Run migrations:
     ```bash
     flask db upgrade
     ```
5. Start the backend server:
   ```bash
   flask run
   ```

#### 3. Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. Visit the frontend at `http://localhost:3000`.
2. Register or log in to your account.
3. Navigate to the **Dashboard** to view upcoming tests and analytics.
4. Take a test and view your performance reports.

---

## Project Structure

```
jee-analytics/
├── backend/
│   ├── app/                 # Flask app and APIs
│   ├── migrations/          # Database migration scripts
│   └── requirements.txt     # Backend dependencies
├── frontend/
│   ├── public/              # Public assets
│   ├── src/                 # React app code
│   ├── package.json         # Frontend dependencies
└── README.md                # Project documentation
```

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

## License

This project is licensed

---

## Contact

For any queries or suggestions, feel free to reach out.
