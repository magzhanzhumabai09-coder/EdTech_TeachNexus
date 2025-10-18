# 🚀 TechNexus.Ai - Quick Start Guide

Get up and running with TechNexus.Ai in 5 minutes!

## ⚡ Quick Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

That's it! You should now see the TechNexus.Ai dashboard.

## 🎯 First Time Setup

### What You'll See
1. **Dashboard** - Overview of courses, students, and activities
2. **Sidebar Navigation** - Access all features from the left sidebar
3. **Header** - Search, notifications, and profile menu

### Explore the Features

#### 1️⃣ Teacher Dashboard (/)
- View course statistics and recent activity
- Check upcoming events and AI insights
- Quick access to all major functions

#### 2️⃣ Syllabus Management (/syllabus)
- Click "Create New" to add a course syllabus
- Try the "AI Generator" for automated syllabus creation
- Edit existing syllabi with version control

#### 3️⃣ Schedule & Planning (/schedule)
- View your weekly teaching schedule
- Add new events with the calendar
- Use "AI Auto-Scheduler" to optimize your schedule

#### 4️⃣ Assignments (/assignments)
- Create and distribute assignments
- Track submission status
- Use AI grading assistant for automated feedback

#### 5️⃣ Exams & Quizzes (/exams)
- Build custom exams with multiple question types
- Monitor ongoing exams in real-time
- View detailed analytics for completed exams

#### 6️⃣ AI Tools (/ai-tools)
- Access 6 powerful AI assistants
- Generate lesson plans, feedback, and quizzes
- Transform content with AI assistance

#### 7️⃣ Analytics (/analytics)
- Monitor student performance trends
- Track course engagement metrics
- Export detailed reports

#### 8️⃣ Student Management (/students)
- View all students with detailed profiles
- Track individual performance and attendance
- Identify at-risk students

## 🎨 UI Features

### Interactive Elements
- **All buttons are clickable** with hover animations
- **Modals** open for creating/editing content
- **Dropdowns** for notifications and profile
- **Cards** with hover effects throughout

### Navigation
- **Collapsible Sidebar** - Click the arrow to collapse/expand
- **Search Bar** - Find courses, students, and assignments
- **Notifications** - Bell icon shows recent activities
- **Profile Menu** - Access settings and sign out

## 🔧 Customization

### Change Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  navy: { ... },    // Primary text
  beige: { ... },   // Background
  mint: { ... },    // Success/Primary actions
  skyblue: { ... }, // Info/Secondary actions
}
```

### Modify Layout
- **Sidebar**: `components/Sidebar.tsx`
- **Header**: `components/Header.tsx`
- **Dashboard**: `app/page.tsx`

## 📱 Responsive Design

The platform is fully responsive:
- **Desktop**: Full sidebar and multi-column layouts
- **Tablet**: Adaptive grid layouts
- **Mobile**: Collapsible navigation and stacked layouts

## 🔐 Demo Data

The platform includes sample data for demonstration:
- 3 courses (CS 201, CS 301, CS 305)
- 284 students
- Various assignments and exams
- Activity feeds and analytics

Replace this with real data by:
1. Integrating a database (PostgreSQL, MongoDB)
2. Adding authentication (NextAuth.js)
3. Connecting to real AI APIs

## 🎓 Key Workflows

### Creating an Assignment
1. Navigate to Assignments
2. Click "Create Assignment"
3. Fill in the details (title, course, due date)
4. Add description and attachments
5. Click "Create Assignment"

### Using AI Tools
1. Go to AI Tools page
2. Select a tool (e.g., Lesson Plan Generator)
3. Fill in the required inputs
4. Click "Generate with AI"
5. View and save the generated content

### Monitoring Student Performance
1. Go to Analytics or Students page
2. View overall statistics and trends
3. Click on individual students for details
4. Export reports for administrators

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Then restart
npm run dev
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Clean Next.js cache
rm -rf .next
npm run dev
```

## 📚 Learn More

- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React**: [https://react.dev](https://react.dev)

## 🎉 What's Next?

1. **Customize the Design** - Match your institution's branding
2. **Add Real Data** - Integrate with your database
3. **Connect AI APIs** - Link to OpenAI, Claude, or other services
4. **Deploy** - Launch on Vercel, Netlify, or your server
5. **Extend Features** - Add more modules as needed

## 💡 Tips

- Use the search bar to quickly find features
- Hover over buttons to see animations
- Click on cards for more details
- Try all the AI tools to see the interfaces
- Check the sidebar for all available pages

---

**Happy Teaching! 🎓**

Need help? Check the full README.md for detailed documentation.
