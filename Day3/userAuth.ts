type Person = {
  readonly id: number;
  name: string;
  email: string;
  password: string;
};

type Admin = Person & {
  role: "admin";
  permissions: string[];
};

type Seller = Person & {
  role: "seller";
  shopName: string;
  verified: boolean;
};

type Customer = Person & {
  role: "customer";
  loyaltyPoints: number;
};

type User = Admin | Seller | Customer;

let users: User[] = [];

const admin: Admin = {
  id: Math.floor(1000000 + Math.random() * 9000000),
  name: "admin",
  email: "admin@email",
  password: "123",
  role: "admin",
  permissions: ["CRUD user", "Modify content"],
};

users.push(admin);

function login(id: number | string, password: string): User | undefined {
  let user;
  if (typeof id === "number") {
    user = users.find((u) => u.id === id);
  } else {
    user = users.find((u) => u.email === id);
  }
  if (!user) {
    console.log("No such user, sending undefined");
    return undefined;
  }

  if (password === user.password) {
    console.log(`Welcome ${user.name}, you are ${user.role}`);
    return user;
  }

  console.log("Pass or id not correct");
  return undefined;
}

function displayUser(id: number): User | undefined {
  const user = users.find((u) => u.id === id);
  if (!user) {
    console.log("No such user, sending undefined");
    return user;
  }

  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Role: ${user.role}`);

  return user;
}

function hasPermission(id: number, permission: string): boolean | undefined {
  const user = users.find((u) => u.id === id);

  if (!user) return undefined;

  if ("permissions" in user) {
    return user.permissions.includes(permission);
  }

  return false;
}

function verifySeller(id: number): string | undefined {
  const user = users.find((u) => u.id === id);

  if (!user || user.role !== "seller") {
    console.log("No such seller exists, sending undefined");
    return undefined;
  }

  if ("shopName" in user) {
    user.verified = true;
    return "Seller verified"
  }

  return undefined;
}

function rewardCustomer(id: number, points: number): boolean | undefined {
  const user = users.find((u) => u.id === id);

  if (!user) return undefined;

  if (user.role === "customer") {
    user.loyaltyPoints += points;
    return true;
  }

  console.log("User is not a customer.");
  return false;
}
