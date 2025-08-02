// export const PORT = isNaN(process.env.PORT) ? 3004 : parseInt(process.env.PORT);

//Demo example -->

import { z, ZodError } from "zod";
// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 10;
// try {
//   const parsedAge = ageSchema.parse(userAge);
//   console.log(parsedAge); // success case
// } catch (error) {
//   if (error instanceof ZodError) {
//     console.log(error.issues[0].message);
//   } else {
//     console.error(error);
//   }
// }

const partSchema = z.coerce.number().min(1).max(65535).default(3004);
export const PORT = partSchema.parse(process.env.PORT);
