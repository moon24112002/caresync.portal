import styles from "./Home.module.css";
import img from "../../assets/background1.png";
import { useState } from "react";
import { JsxElement } from "typescript";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Address {
  id: number;
  area: string;
  city: string;
  state: string;
  pinCode: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  addresses: Address[];
}

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    password: "",
    addresses: [
      {
        id: 0,
        area: "",
        city: "",
        state: "",
        pinCode: "",
      },
    ],
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { name, value } = e.target;
    const updatedAddresses = user.addresses.map((address, idx) =>
      idx === index ? { ...address, [name]: value } : address
    );
    setUser((prev) => ({
      ...prev,
      addresses: updatedAddresses,
    }));
  };

  // Submit form data
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("User Data:", user);
  };

  const userForm = (): JSX.Element => (
    <form onSubmit={handleSubmit}>
      <h2>User Details</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <h3>Address Details</h3>
      {user.addresses.map((address, index) => (
        <div key={index}>
          <label>
            Area:
            <input
              type="text"
              name="area"
              value={address.area}
              onChange={(e) => handleAddressChange(e, index)}
            />
          </label>
          <br />
          <label>
            City:
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={(e) => handleAddressChange(e, index)}
            />
          </label>
          <br />
          <label>
            State:
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={(e) => handleAddressChange(e, index)}
            />
          </label>
          <br />
          <label>
            Pin Code:
            <input
              type="text"
              name="pinCode"
              value={address.pinCode}
              onChange={(e) => handleAddressChange(e, index)}
            />
          </label>
          <br />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );

  const [renderUserFrom, setRenderUserForm] = useState(false);

  const onClose = () => {
    setRenderUserForm(!renderUserFrom);
  };

  const overLay = (): JSX.Element => (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>
          &times;
        </button>
        {userForm()}
      </div>
    </div>
  );

  return (
    <div className={styles.home}>
      {renderUserFrom && overLay()}
      <div className={styles.welcomeMessage}>
        <div className={styles.message}>
          Welcome to CareSync Healthcare , <br /> Your trusted companion for
          seamless doctor and patient connections. Whether you're booking an
          appointment, managing health records, or exploring personalized care
          options, we're here to ensure your health journey is smooth and
          hassle-free. Let's sync for better care!
        </div>
        <div className={styles.welcomeimg}>
          <img src={img} alt="" />
        </div>
      </div>

      <div className={styles.body}>
        <div
          className={styles.patient}
          // onClick={() => setRenderUserForm(!renderUserFrom)}
          onClick={() => navigate("/register")}
        >
          Sync with uS!
        </div>
        {/* <div className={styles.doctor}>Doctor</div> */}
      </div>
    </div>
  );
}

export default Home;
