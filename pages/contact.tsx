import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h2>
      <p className={"description"}>Primera Contact page con link</p>
    </MainLayout>
  );
}
