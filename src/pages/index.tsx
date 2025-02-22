import Head from "next/head";
import Background from "@/components/Background";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tegar&apos;s Portfolio</title>
        <meta name="description" content="Tegar | Python Developer & AI Engineer" />
      </Head>
      <main className="relative flex min-h-screen flex-col items-center justify-start text-white p-8 pt-[40vh]">
        <Background />
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Tegar Everest</h1>

          {/* Short Introduction */}
          <p className="mt-2 text-lg text-gray-300">
            Engineering AI-driven solutions with clean, maintainable systems.
          </p>

          <p className="mt-4 text-lg">Python Developer | AI Software Engineer | Backend Developer</p>
          
          <Link 
            href="/projects" 
            className="inline-block mt-4 px-6 py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transition"
          >
            View My Projects
          </Link>
        </div>
      </main>
    </>
  );
}