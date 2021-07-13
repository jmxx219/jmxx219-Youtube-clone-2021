import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


const app = express(); // creates an express application
const logger = morgan("dev"); // GET, path, status code 정보를 담고 있음

app.set("view engine", "pug");
app.set("views", process.cwd() +"/src/views");
app.use(logger);

// HTML form 이해, 그 form을 우리가 사용할 수 있는 javascript object 형식으로 통역
app.use(express.urlencoded({ extended: true })); 

app.use("/", globalRouter)
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;