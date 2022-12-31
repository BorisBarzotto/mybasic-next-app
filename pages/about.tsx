import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <h1>About Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h2>
      <p className={"description"}>Bienvenidos al about page</p>
    </MainLayout>
  );
}
