const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "guli",
  host: "duelmight.xyz",
  password: "gg",
  database: "saitik",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});
app.post("/addtask", (req, res) => {
  const addtask = req.body.addtask;

  db.query(
    "INSERT INTO tasks (task,date_add,time) VALUES (?,CURDATE(),CURTIME())",
    [addtask],
    (err, result) => {
      console.log(err);
    }
  );
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.get("/copytasks", (req, res) => {
  db.query(
    "SELECT ts.task,CONCAT( SUBSTRING(date(ts.date_add),9),SUBSTRING(date(ts.date_add),5,3)) date_add,ts.time FROM tasks As ts  ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/monday21", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-21' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/tuesday21", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-21' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+1) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/wednesday21", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-21' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+2) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/thursday21", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-21' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+3) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/friday21", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-21' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+4) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/saturday21", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-21' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+5) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/monday22", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-22' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/tuesday22", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-22' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+1) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/wednesday22", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-22' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+2) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/thursday22", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-22' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+3) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/friday22", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-22' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+4) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/saturday22", (req, res) => {
  db.query(
    "SELECT 'dayName', t.`date`, t.timeStart, t.timeStop, t.discipline, t.cabinet, t.teacher, t.`type`, t.subgroup FROM timetable AS t  WHERE(subgroup = 0  || subgroup=1 || subgroup = 2) && class = 'АИСТбд-22' && date = (SELECT DATE_ADD(DATE(NOW() ) , INTERVAL -WEEKDAY(NOW() ) DAY )+5) ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
