import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminRoutes.js';
import projectRoutes from './routes/ProjectRoutes.js'; // <-- import project routes
import successStoryRoutes from './routes/SuccessStoryRoutes.js';
import blogRoutes from './routes/BlogRoutes.js';
import volunteerRoutes from "./routes/VolunteerRoutes.js";
import contactRoutes from "./routes/ContactRoutes.js";
import programRoutes from './routes/ProgramRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));// Admin login & dashboard
app.use('/api/admin', adminRoutes);

// Admin projects CRUD
app.use('/api/admin/projects', projectRoutes); // <-- mount project routes
app.use('/api/admin/stories', successStoryRoutes);
app.use('/api/admin/blogs', blogRoutes);
app.use("/api/volunteers", volunteerRoutes); // public form
app.use("/api/admin/volunteers", volunteerRoutes); // admin access
app.use("/api/contact", contactRoutes); // public
app.use("/api/admin/contacts", contactRoutes); // ✅ FIXED
app.use('/api/admin/programs', programRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));