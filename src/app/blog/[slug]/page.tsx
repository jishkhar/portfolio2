import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import moment from 'moment'
import { Metadata } from 'next'
import Image from 'next/image'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'src/content/posts')
  const files = fs.readdirSync(dir)

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  return {
    title: `${params.slug} | Blog`,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const filePath = path.join(process.cwd(), 'src/content/posts', `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const processedContent = await remark().use(html).process(content)
  const htmlContent = processedContent.toString()

  return (
    <div className="bg-[#0b0c10] min-h-screen text-white py-40">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">{data.title}</h1>
        <p className="text-lg text-gray-400 mb-16">
          {moment(data.date).format('MMMM D, YYYY')}
        </p>
        {data.image && (
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={450}
            className="w-full object-contain rounded-2xl mb-16 shadow-lg"
          />
        )}
        <div
          className="prose-invert prose-headings:mt-12 text-xl mb-16 mx-0 px-0 
         prose-h2:text-cyan-400 prose-h2:text-4xl"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  )
}
