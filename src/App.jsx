import { useState } from "react";

function App() {
  const [user, setuser] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    addres: "",
  });

  const handleChange = (e) => {
    setuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSub = (e) => {
  e.preventDefault();
  console.log(user); 
  }

  return (
    <div className="max-w-3xl mx-auto py-2">
      <form action="#" className="space-y-4">
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Name...."
          className="w-full py-3  border border-gray-500 px-5 focus:outline-none"
        />
        <input
          type="text"
          onChange={handleChange}
          name="surname"
          placeholder="Surname...."
          className="w-full py-3  border border-gray-500 px-5 focus:outline-none"
        />
        <input
          type="text"
          onChange={handleChange}
          name="username"
          placeholder="Usermae...."
          className="w-full py-3  border border-gray-500 px-5 focus:outline-none"
        />
        <input
          type="text"
          onChange={handleChange}
          name="email"
          placeholder="Email...."
          className="w-full py-3  border border-gray-500 px-5 focus:outline-none"
        />
        <input
          type="text"
          onChange={handleChange}
          name="password"
          placeholder="Password...."
          className="w-full py-3  border border-gray-500 px-5 focus:outline-none"
        />
        <input
          type="text"
          onChange={handleChange}
          name="country"
          placeholder="Country...."
          className="w-full py-3  border border-gray-500 px-5 focus:outline-none"
        />
        <input
          type="text"
          onChange={handleChange}
          name="city"
          placeholder="City...."
          className="w-full py-3  border border-gray-500 px-5 focus:outline-none"
        />
        <input
          type="text"
          onChange={handleChange}
          name="address"
          placeholder="Address...."
          className="w-full py-3  border border-gray-500 px-5 focus:outline-none"
        />
        <button onClick={handleSub} className="w-full text-white hover:bg-blue-600 bg-blue-500 font-semibold py-3 mt-3 ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
