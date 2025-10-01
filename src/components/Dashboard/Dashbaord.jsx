import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import SubscriptionPopup from "../SubscriptionPopup/SubscriptionPopup";
import { FaBell, FaUserCircle } from "react-icons/fa";
import DashboardGraphs from "../DashboardGraphs.jsx";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState(0);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const dummyUser = {
      name: "Dr. John Doe",
      trialTaken: false,
      trialActive: true,
      subscriptionActive: false,
      trialEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    };

    const dummyNotifications = 3;

    setTimeout(() => {
      setUser(dummyUser);
      setNotifications(dummyNotifications);
      if (
        !dummyUser.trialTaken ||
        (!dummyUser.trialActive && !dummyUser.subscriptionActive)
      ) {
        setShowPopup(true);
      }
      setLoading(false);
    }, 500);
  }, []);

  const menus = [
    "Dashboard",
    "Patients",
    "Doctors",
    "Appointments",
    "Analytics",
    "Billing",
    "Settings",
  ];

  const handleLogout = () => alert("Logout clicked!");

  const dummyData = {
    Dashboard: [
      { title: "Total Patients", value: 50 },
      { title: "Total Doctors", value: 12 },
      { title: "Appointments Today", value: 5 },
      { title: "Revenue", value: "$1200" },
    ],
    Patients: [
      { name: "John Smith", age: 32, condition: "Flu" },
      { name: "Mary Johnson", age: 28, condition: "Checkup" },
    ],
    Doctors: [
      { name: "Dr. Alice", specialty: "Cardiology" },
      { name: "Dr. Bob", specialty: "Neurology" },
    ],
    Appointments: [
      { patient: "John Smith", doctor: "Dr. Alice", date: "2025-09-22" },
      { patient: "Mary Johnson", doctor: "Dr. Bob", date: "2025-09-23" },
    ],
    Analytics: ["Patients Graph", "Appointments Chart", "Revenue Chart"],
    Billing: ["Invoice #123 - Paid", "Invoice #124 - Pending"],
    Settings: ["Profile Settings", "Change Password"],
  };

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;

  const isFeatureActive = () => user.trialActive || user.subscriptionActive;

  return (
    <div className={styles.dashboardWrapper}>
      {showPopup && <SubscriptionPopup user={user} />}

      {/* Navbar */}
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.profile}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className={styles.profileImg}
          />
          <span>{user.name}</span>
        </div>
        <div className={styles.actions}>
          <div className={styles.notification}>
            <FaBell size={22} />
            <span className={styles.badge}>{notifications || 0}</span>
          </div>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar + Main Content */}
      <div className={styles.dashboardContent}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {menus.map((menu, idx) => (
            <div
              key={idx}
              className={`${styles.menuItem} ${
                activeMenu === menu ? styles.activeMenu : ""
              }`}
              onClick={() => setActiveMenu(menu)}
            >
              {menu}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h2>{activeMenu}</h2>

          {Array.isArray(dummyData[activeMenu]) ? (
            <div className={styles.cardsGrid}>
              {dummyData[activeMenu].map((item, idx) => (
                <div className={styles.card} key={idx}>
                  {Object.entries(item).map(([key, value]) => (
                    <p key={key}>
                      <strong>{key}:</strong> {value}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p>{dummyData[activeMenu]}</p>
          )}
          <div className={styles.dashboardGraphsWrapper}>
            <DashboardGraphs
              data={[
                { name: "Recovered", value: 40 },
                { name: "Under Treatment", value: 30 },
                { name: "Critical", value: 20 },
                { name: "New", value: 10 },
              ]}
            />
          </div>

          {user.trialActive && activeMenu === "Dashboard" && (
            <p className={styles.trialInfo}>
              Your free trial ends on: {user.trialEnd.toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
