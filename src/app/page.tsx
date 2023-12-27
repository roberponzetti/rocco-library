import BookList from "../components/BookList";
import NavBar from "../components/header/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BookList />
    </main>
  )
}
