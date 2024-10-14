import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@gmail.com",
    firstName: "testFirst",
    lastName: "testLast",
  },
});

console.log("done");
