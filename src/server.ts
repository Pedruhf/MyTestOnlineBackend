require("dotenv").config();
import { app } from './app';

app.listen(3333, () => {
  console.log("SERVER IS RUNNING AT THE DOOR 3333...")
});