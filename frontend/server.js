const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const todos = [];

const page = (title, body) => `<!doctype html>
<html><head><title>${title}</title></head>
<body>
  <nav>
    <a href="/">Home</a> | <a href="/login">Login</a> | <a href="/todos">Todos</a>
  </nav>
  <h1>${title}</h1>
  ${body}
</body></html>`;

app.get("/", (req, res) =>
  res.send(page("Home", "<p>Welcome to the demo app.</p>"))
);

app.get("/login", (req, res) =>
  res.send(page("Login", `
    <form method="post" action="/login">
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Sign in</button>
    </form>`))
);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "demo" && password === "demo123") {
    return res.send(page("Welcome", `<p id="msg">Welcome, ${username}!</p>`));
  }
  res.status(401).send(page("Login", `<p id="error">Invalid credentials</p>`));
});

app.get("/todos", (req, res) =>
  res.send(page("Todos", `
    <form method="post" action="/todos">
      <input name="item" placeholder="New todo" />
      <button type="submit">Add</button>
    </form>
    <ul>${todos.map((t) => `<li>${t}</li>`).join("")}</ul>`))
);

app.post("/todos", (req, res) => {
  if (req.body.item && req.body.item.trim()) todos.push(req.body.item.trim());
  res.redirect("/todos");
});

app.listen(8000, () => console.log("Running on http://localhost:8000"));
