import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const query = `
        query GetUser($id: ID!) {
          user(id: $id) {
            id
            name
            email
          }
        }
      `;

      const uesrId = "3";

      const variables = {
        id: uesrId
      };

      const response = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query,
          variables
        })
      });

      const result = await response.json();

      console.log(result);

      setUser(result.data.user);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>User</h1>

      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;