import { client, urlFor } from "@/lib/sanity"
import type { simpleBlogCard } from "@/lib/interface"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"

async function getData() {
  const query = `
    *[_type == "blog"] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `
  const data = await client.fetch(query, {}, { cache: "no-store" })
  return data
}

export default async function Blog({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  const posts: simpleBlogCard[] = await getData()
  const recent = posts.slice(0, 3)

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Hlavný obsah */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900">{dict.blog.title}</h1>
            <p className="text-gray-600 mt-2">{dict.blog.description}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.currentSlug} className="flex flex-col overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(post.titleImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.smallDescription}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="mt-auto">
                  <Link
                    href={`/blog/${post.currentSlug}`}
                    className="inline-flex items-center text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    Čítať viac <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">Najnovšie články</h3>
            <ul className="space-y-4 text-sm">
              {recent.map((post) => (
                <li key={post.currentSlug}>
                  <Link
                    href={`/blog/${post.currentSlug}`}
                    className="text-navy-700 hover:text-gold-600 block"
                  >
                    <p className="font-medium line-clamp-2">{post.title}</p>
                    <p className="text-gray-500 text-xs mt-1">{post.smallDescription}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}