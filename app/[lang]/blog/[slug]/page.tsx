import { client, urlFor } from "@/lib/sanity"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"
import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import MotionSection from "@/components/animations/motion-section"
import FadeIn from "@/components/animations/fade-in"

async function getPost(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'][0] {
      "currentSlug": slug.current,
      title,
      smallDescription,
      content,
      titleImage
    }
  `
  return await client.fetch(query, {}, { cache: "no-store" })
}

export async function generateMetadata({ params }: { params: { lang: Locale; slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  return {
    title: `${post?.title} | Samael Consulting Blog`,
    description: post?.smallDescription,
  }
}

export default async function BlogPost({ params }: { params: { lang: Locale; slug: string } }) {
  const post = await getPost(params.slug)
  const dict = await getDictionary(params.lang)

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Title Image */}
      <section className="relative h-[40vh] min-h-[300px] max-h-[500px] w-full">
        <Image
          src={urlFor(post.titleImage).url()}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-navy-900/50 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <FadeIn>
              <Link
                href={`/${params.lang}/blog`}
                className="inline-flex items-center text-white mb-4 hover:text-gold-400 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                {dict.blog.backToBlog}
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">{post.title}</h1>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <MotionSection className="bg-white rounded-xl shadow-md p-8">
          <FadeIn>
            <p className="text-lg text-gray-700 mb-8 font-medium">{post.smallDescription}</p>
          </FadeIn>

          <FadeIn className="prose prose-lg max-w-none">
            <div>
              {post.content.map((block: any, index: number) => (
                <p key={index}>{block?.children?.[0]?.text}</p>
              ))}
            </div>
          </FadeIn>
        </MotionSection>
      </div>
    </div>
  )
}