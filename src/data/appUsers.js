import { createClient } from "@/lib/supabase/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function signUpUser(email, password, username) {
  const supabase = createClient();

  // Encrypt password
  password = await bcrypt.hash(password, 10);

  // Insert user into Supabase
  const { data, error } = await supabase
    .from("AppUsers")
    .insert({
      email,
      password,
      username,
      role: "user",
      updated_at: new Date(),
    })
    .select("*");
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  // Check if the insertion was successful
  if (error) {
    return { data: null, error };
  }
  console.log("data:", data);
  // Create JWT token for the user with claims
  const token = jwt.sign(
    { email: email, role: "user", id: data[0].id }, // Add more claims as needed
    process.env.JWT_SECRET, // Secret key from environment variables
    { expiresIn: "1h" } // Token expiration time
  );

  // Return the data, error, and token
  return { data, error, token };
}
