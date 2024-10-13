// since there's no dynamic data here, we can prerender

import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

// it so that it gets served as a static asset in production
export const prerender = true;

export const load: PageLoad = async () => {
  const token = localStorage.getItem("auth_token");
  if (!token || isValidAuth(token)) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Restricted Area"',
      },
    });
  }
  return redirect(301, "/");
};

function isValidAuth(auth: string): boolean {
  const base64Credentials = auth.split(" ")[1];
  const credentials = atob(base64Credentials);
  const [username, password] = credentials.split(":");

  return username === "user" && password === "password";
}
