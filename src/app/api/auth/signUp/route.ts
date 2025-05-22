// src/app/api/users/route.ts
// import {createUserSchema} from "@/services/user/userValidation";
import {createUser} from "@/services/user/userServices";

export async function POST(req: Request) {
  try {
    console.log(req);
    const body = await req.json();
    console.log("body", body);
    console.log("run");
    // const validatedData = createUserSchema.parse(body);

    const user = await createUser(body);

    return new Response(JSON.stringify({user}), {
      status: 201,
      headers: {"Content-Type": "application/json"},
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({error: error.message || "Something went wrong"}),
      {status: 400}
    );
  }
}
