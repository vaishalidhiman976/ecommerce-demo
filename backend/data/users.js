import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: await bcrypt.hashSync("password", 10),
        isAdmin: true
    },
    {
        name: "John Doe",
        email: "john@example.com",
        password: await bcrypt.hashSync("password", 10),
        isAdmin: false
    },
    {
        name: "Jane Doe",
        email: "jane@example.com",
        password: await bcrypt.hashSync("password", 10),
        isAdmin: false
    }   
]

export default users;