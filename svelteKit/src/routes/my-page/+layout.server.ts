export const ssr = true;
export const csr = false;
export const prerender = false;

/** @type {import('./$types').LayoutServerLoad} */
export function load({ request }) {
  const auth = request.headers.get("authorization");
  if (!auth || !isValidAuth(auth)) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Restricted Area"',
      },
    });
  }
  return {};
}

function isValidAuth(auth: string): boolean {
  const base64Credentials = auth.split(" ")[1];
  const credentials = atob(base64Credentials);
  const [username, password] = credentials.split(":");

  return username === "user" && password === "password";
}
