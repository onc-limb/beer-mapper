import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  console.log("HOOKS");
  const url = event.url.pathname;
  if (!url.startsWith("/my-page")) return resolve(event);
  // Basic認証の実装
  const auth = event.request.headers.get("authorization");

  // 認証情報がない場合や正しくない場合は、認証を求める
  if (!auth || !isValidAuth(auth)) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Restricted Area"',
      },
    });
  }

  // 認証が成功した場合は次の処理を進める
  return resolve(event);
};

function isValidAuth(auth: string): boolean {
  const base64Credentials = auth.split(" ")[1];
  const credentials = atob(base64Credentials);
  const [username, password] = credentials.split(":");

  return username === "user" && password === "password";
}
