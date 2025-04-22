import { client } from "@/lib/sanity";

async function getData() {
    const query = `
    *[_type == "blog"] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current
}`;

    const data = await client.fetch(query, {}, { cache: "no-store" });
    return data;
}

export default async function Blog() {
    const data = await getData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item: any) => (
          <div key={item.currentSlug} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2">{item.smallDescription}</p>
            <a href={`/blog/${item.currentSlug}`} className="text-blue-500 hover:underline mt-2 block">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}
