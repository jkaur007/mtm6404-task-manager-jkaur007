import { useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./login.css"; // Make sure this import is correct!

function Login() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const userDocRef = doc(db, "users", "userList");

  const fetchUsers = async () => {
    try {
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setUsers(docSnap.data().users || []);
        setShowUsers(true);
      }
    } catch (error) {
      console.error("Error fetching the users", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docSnap = await getDoc(userDocRef);
      if (!docSnap.exists()) {
        await setDoc(userDocRef, { users: [{ fname, lname, email }] });
      } else {
        await updateDoc(userDocRef, {
          users: arrayUnion({ fname, lname, email }),
        });
      }
      setfname("");
      setlname("");
      setEmail("");
      alert("User added successfully!");
    } catch (error) {
      console.log("Error during document update", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => setfname(e.target.value)}
          placeholder="Enter your first name"
          required
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => setlname(e.target.value)}
          placeholder="Enter your last name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <button type="submit">Add User</button>
      </form>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>

      <button onClick={fetchUsers} style={{ marginTop: "1rem" }}>
        Show Users
      </button>

      {showUsers && (
        <>
          <h2>User List</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.fname} {user.lname} – {user.email}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Login;
