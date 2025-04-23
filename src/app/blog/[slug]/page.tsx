import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import moment from 'moment'

interface PostProps {
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

export default async function PostPage({ params }: PostProps) {
  const filePath = path.join(process.cwd(), 'src/content/posts', `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const processedContent = await remark().use(html).process(content)
  const htmlContent = processedContent.toString()

  return (
    <div className="bg-[#0b0c10] min-h-screen text-white p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          {moment(data.date).format('MMMM D, YYYY')}
        </p>
        <div
          className="prose prose-invert"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  )
}
