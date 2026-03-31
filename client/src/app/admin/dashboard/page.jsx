"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./AdminDashboard.css";
import { API_BASE_URL } from "@/lib/api";

export default function AdminDashboard() {
  const router = useRouter();
  const BASE_URL = API_BASE_URL;

  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [admins, setAdmins] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    short_description: "",
    full_description: "",
    email: "",
    password: "",
    file: null,
    id: null,
  });

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("accessToken")
      : null;

  // ================= INIT =================
  useEffect(() => {
    if (!token) {
      router.push("/admin/login");
      return;
    }

    if (activeTab === "volunteers") fetchVolunteers();
    else if (activeTab === "contacts") fetchContacts();
    else if (activeTab === "admins") fetchAdmins();
    else if (activeTab !== "dashboard") fetchData();
  }, [activeTab]);

  // ================= FETCH =================
  const fetchData = async () => {
    const res = await axios.get(`${BASE_URL}/api/admin/${activeTab}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setData(res.data);
  };

  const fetchVolunteers = async () => {
    const res = await axios.get(`${BASE_URL}/api/admin/volunteers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setVolunteers(res.data);
  };

  const fetchContacts = async () => {
    const res = await axios.get(`${BASE_URL}/api/admin/contacts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setContacts(res.data);
  };

  const fetchAdmins = async () => {
    const res = await axios.get(`${BASE_URL}/api/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setAdmins(res.data);
  };

  // ================= FORM =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      short_description: "",
      full_description: "",
      email: "",
      password: "",
      file: null,
      id: null,
    });
  };

  const createFormData = () => {
    const fd = new FormData();

    fd.append("title", form.title);

    if (activeTab === "programs") {
      fd.append("short_description", form.short_description);
      fd.append("full_description", form.full_description);
    } else {
      fd.append("description", form.description);
    }

    if (form.file) fd.append("image", form.file);

    return fd;
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ADMIN CREATE
      if (activeTab === "admins") {
        await axios.post(
          `${BASE_URL}/api/admin/create`,
          {
            email: form.email,
            password: form.password,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchAdmins();
        resetForm();
        return;
      }

      const fd = createFormData();

      const url = form.id
        ? `${BASE_URL}/api/admin/${activeTab}/${form.id}`
        : `${BASE_URL}/api/admin/${activeTab}`;

      const method = form.id ? axios.put : axios.post;

      await method(url, fd, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchData();
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  // ================= EDIT =================
  const handleEdit = (item) => {
    setForm({
      ...item,
      description: item.description || "",
      short_description: item.short_description || "",
      full_description: item.full_description || "",
      file: null,
    });
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!confirm("Delete?")) return;

    await axios.delete(`${BASE_URL}/api/admin/${activeTab}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchData();
  };

  const deleteAdmin = async (id) => {
    await axios.delete(`${BASE_URL}/api/admin/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchAdmins();
  };

  const deleteVolunteer = async (id) => {
    await axios.delete(`${BASE_URL}/api/admin/volunteers/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchVolunteers();
  };

  const deleteContact = async (id) => {
    await axios.delete(`${BASE_URL}/api/admin/contacts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchContacts();
  };

  return (
    <div className="admin-container">

      {/* NAVBAR */}
      <div className="top-nav">
        {[
          "dashboard",
          "projects",
          "programs",
          "stories",
          "blogs",
          "volunteers",
          "contacts",
          "admins",
          "Donation"
        ].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("accessToken");
            router.push("/admin/login");
          }}
        >
          Logout
        </button>
      </div>

      <div className="content">

        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
  <div className="dashboard-home">

    {/* HERO SECTION */}
    <div className="dashboard-hero">
      <div className="hero-text">
        <h1>👋 Welcome Back, Admin</h1>
        <p>
          Manage your platform easily. Control projects, programs, blogs,
          volunteers, and users all in one place.
        </p>

        <div className="hero-buttons">
          <button onClick={() => setActiveTab("projects")}>Manage Projects</button>
          <button onClick={() => setActiveTab("admins")}>Manage Admins</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/IMG-20260227-WA0016 (1) - Copy.jpg" alt="dashboard" />
      </div>
    </div>

    {/* STATS SECTION */}
    <div className="stats-grid">
      <div className="stat-card">
        <h2>{data.length}</h2>
        <p>Total Items</p>
      </div>

      <div className="stat-card">
        <h2>{volunteers.length}</h2>
        <p>Volunteers</p>
      </div>

      <div className="stat-card">
        <h2>{contacts.length}</h2>
        <p>Messages</p>
      </div>

      <div className="stat-card">
        <h2>{admins.length}</h2>
        <p>Admins</p>
      </div>
    </div>

    {/* QUICK ACTIONS */}
    <div className="quick-actions">
      <h2>Quick Actions</h2>

      <div className="action-cards">
        <div className="action-card" onClick={() => setActiveTab("projects")}>
          <h3 className="h3c"> Add Project</h3>
          <p className="pc">Create and manage NGO projects</p>
        </div>

        <div className="action-card" onClick={() => setActiveTab("programs")}>
          <h3 className="h3c"> Add Program</h3>
          <p className="pc">Manage programs with full details</p>
        </div>

        <div className="action-card" onClick={() => setActiveTab("blogs")}>
          <h3 className="h3c">Add Blog</h3>
          <p className="pc">Write and publish blogs</p>
        </div>

        <div className="action-card" onClick={() => setActiveTab("volunteers")}>
          <h3 className="h3c">Volunteers</h3>
          <p className="pc">View all volunteer requests</p>
        </div>
      </div>
    </div>

  </div>
)}

        {/* ADMINS */}
        {activeTab === "admins" && (
          <>
            <h2>Create Co-Admin</h2>

            <form onSubmit={handleSubmit}>
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button>Add Admin</button>
            </form>

            <h2>All Admins</h2>

            {admins.map((a) => (
              <div key={a.id} className="card">
                <p>{a.email}</p>
                <p>{a.role}</p>
                <button onClick={() => deleteAdmin(a.id)}>Delete</button>
              </div>
            ))}
          </>
        )}

        {/* VOLUNTEERS */}
        {activeTab === "volunteers" && (
  <>
    <h2 className="section-title">Volunteers</h2>

    {volunteers.map((v) => (
      <div key={v.id} className="card">
        <h3>{v.name}</h3>

        <p><b>Email:</b> {v.email}</p>
        <p><b>Phone:</b> {v.phone}</p>
        <p><b>Skills:</b> {v.skills}</p>
        <p><b>Availability:</b> {v.availability}</p>
        <p><b>Message:</b> {v.message}</p>

        <p className="date">
          {new Date(v.created_at).toLocaleString()}
        </p>

        <button
          className="delete-btn"
          onClick={() => deleteVolunteer(v.id)}
        >
          Delete
        </button>
      </div>
    ))}
  </>
)}
        {/* CONTACTS */}
        {activeTab === "contacts" && (
  <>
    <h2 className="section-title">Contact Messages</h2>

    {contacts.map((c) => (
      <div key={c.id} className="card">
        <h3>{c.name}</h3>

        <p><b>Email:</b> {c.email}</p>
        <p><b>Phone:</b> {c.phone}</p>

        {c.subject && <p><b>Subject:</b> {c.subject}</p>}

        <p><b>Message:</b> {c.message}</p>

        <p className="date">
          {new Date(c.created_at).toLocaleString()}
        </p>

        <button
          className="delete-btn"
          onClick={() => deleteContact(c.id)}
        >
          Delete
        </button>
      </div>
    ))}
  </>
)}

        {/* OTHER MODULES */}
        {["projects", "programs", "stories", "blogs"].includes(activeTab) && (
          <>
            <form onSubmit={handleSubmit}>
              <input
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                required
              />

              {activeTab === "programs" ? (
                <>
                  <textarea
                    name="short_description"
                    placeholder="Short Description"
                    value={form.short_description}
                    onChange={handleChange}
                  />
                  <textarea
                    name="full_description"
                    placeholder="Full Description"
                    value={form.full_description}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <textarea
                  name="description"
                  placeholder="Description"
                  value={form.description}
                  onChange={handleChange}
                />
              )}

              <input type="file" onChange={handleFile} />

              <button>{form.id ? "Update" : "Add"}</button>
            </form>

            {data.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.title}</h3>

                {activeTab === "programs" ? (
                  <>
                    <p>{item.short_description}</p>
                    <p>{item.full_description}</p>
                  </>
                ) : (
                  <p>{item.description}</p>
                )}

                {item.image_url && (
                  <img src={`${BASE_URL}${item.image_url}`} />
                )}

                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}