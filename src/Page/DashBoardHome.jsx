import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div style={{ padding: "10px" }}>

      
      <div
        style={{
          background: "linear-gradient(135deg, #1e40af, #2563eb)",
          color: "#fff",
          padding: "30px",
          borderRadius: "12px",
          marginBottom: "30px"
        }}
      >
        <h2 style={{ margin: 0 }}>Admin Dashboard 👨‍💼</h2>
        <p style={{ opacity: 0.9, marginTop: "6px" }}>
          Manage students, faculty & leave system from one place
        </p>
      </div>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "35px"
        }}
      >
        <StatCard title="Total Students" value="1200+" color="#22c55e" />
        <StatCard title="Total Faculty" value="85+" color="#f97316" />
        <StatCard title="Students Leaves" value="14" color="#ef4444" />
        <StatCard title="Faculty Leaves" value="52" color="#3b82f6" />
      </div>

     
      <div style={boxStyle}>
        <h3 style={{ marginBottom: "20px" }}>Quick Actions</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "15px"
          }}
        >
          <ActionBtn text="➕ Add Student Info" to="/dashboard/add-student" />
          <ActionBtn text="➕ Add Faculty Info" to="/dashboard/add-faculty" />

          <ActionBtn text="👀 View Student Info" to="/dashboard/view-student" />
          <ActionBtn text="👀 View Faculty Info" to="/dashboard/view-faculty" />

          <ActionBtn text="✏️ Update Student Info" to="/dashboard/update-student" />
          <ActionBtn text="✏️ Update Faculty Info" to="/dashboard/update-faculty" />

          <ActionBtn text="📝 Apply Leave (Student)" to="/dashboard/apply-leave-student" />
          <ActionBtn text="📝 Apply Leave (Faculty)" to="/dashboard/apply-leave-faculty" />

          <ActionBtn text="📄 View Leave (Student)" to="/dashboard/view-leave-student" />
          <ActionBtn text="📄 View Leave (Faculty)" to="/dashboard/view-leave-faculty" />
           <ActionBtn text="📄 Fee Structure" to="/dashboard/view-leave-student" />
          <ActionBtn text="📄 Student fees form" to="/dashboard/view-leave-faculty" />
        </div>
      </div>

    </div>
  );
};

/* ===== Reusable Components ===== */

const StatCard = ({ title, value, color }) => (
  <div
    style={{
      background: "#fff",
      padding: "22px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      borderLeft: `5px solid ${color}`
    }}
  >
    <h4 style={{ margin: 0 }}>{title}</h4>
    <h2 style={{ color, marginTop: "8px" }}>{value}</h2>
  </div>
);

const ActionBtn = ({ text, to }) => (
  <Link
    to={to}
    style={{
      background: "#f8fafc",
      border: "1px solid #e5e7eb",
      padding: "14px",
      borderRadius: "8px",
      textDecoration: "none",
      color: "#0f172a",
      fontWeight: "500",
      transition: "0.2s",
      textAlign: "center"
    }}
    onMouseEnter={(e) => (e.target.style.background = "#e0e7ff")}
    onMouseLeave={(e) => (e.target.style.background = "#f8fafc")}
  >
    {text}
  </Link>
);

const boxStyle = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 14px rgba(0,0,0,0.08)"
};

export default DashboardHome;
