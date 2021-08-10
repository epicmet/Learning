import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import AverageAge from "./AverageAge";
import data from "./users";

const UserList = () => {
  const [all, setAll] = useState(data);
  const [users, setUsers] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    let users = data.filter((user) => user.role === "user");
    setUsers(users);

    let userAgeList = [];
    for (let user of all) {
      if (user.role === "admin") userAgeList.push(user.age);
    }

    let average = userAgeList.reduce((a, b) => a + b) / userAgeList.length;
    setAverage(average);
  }, [all]);

  return (
    <div>
      {users.map((user, index) => {
        return <UserItem key={index} {...user} />;
      })}
      <AverageAge average={average} />
    </div>
  );
};

export default UserList;
