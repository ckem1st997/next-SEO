import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { Welcome } from "@/components/Welcome/Welcome";

async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('call api loi')
  }
 
  return res.json()
}
export default async function IndexPage() {
  const data = await getData()
  return (
    <>
       <h1>Hello, Index Page!</h1>
    </>
  );
}
