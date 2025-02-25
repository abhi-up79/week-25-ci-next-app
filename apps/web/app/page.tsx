import { client } from "@repo/db/client";


export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <h1>Hello World!</h1>
      <div>Username: {user?.username}</div>
      <div>Password: {user?.password}</div>
    </div>
  )
}
