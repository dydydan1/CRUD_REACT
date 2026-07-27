import UserProfile from "./components/userProfile/userProfile.jsx";

let user = {
  firstName: "John",
  lastName: "Doe",
  skills: "React, JavaScript"
};

let user2 = {
  firstName: "Mark",
  lastName: "Doe",
  skills: "NodeJs, JavaScript"
};

function App() {
  return (
    <>
      <UserProfile
        firstName={user.firstName}
        lastName={user.lastName}
        skills={user.skills}
      />

      <UserProfile
        firstName={user2.firstName}
        lastName={user2.lastName}
        skills={user2.skills}
      />
    </>
  );
}

export default App;