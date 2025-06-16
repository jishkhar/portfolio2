// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import Link from 'next/link'
// import moment from 'moment'

// interface BlogPost {
//   slug: string
//   title: string
//   date: string
// }

// const getAllPosts = (): BlogPost[] => {
//   const dir = path.join(process.cwd(), 'src/content/posts')
//   const files = fs.readdirSync(dir)

//   return files.map((filename) => {
//     const slug = filename.replace('.md', '')
//     const content = fs.readFileSync(path.join(dir, filename), 'utf-8')
//     const { data } = matter(content)

//     return {
//       slug,
//       title: data.title,
//       date: data.date,
//     }
//   }).sort((a, b) => (a.date < b.date ? 1 : -1))
// }

// export default function BlogPage() {
//   const posts = getAllPosts()

//   return (
//     <div className="bg-[#0b0c10] min-h-screen text-white pt-40">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
//         <ul className="space-y-6">
//           {posts.map((post) => (
//             <li key={post.slug}>
//               <Link href={`/blog/${post.slug}`} className="block hover:underline">
//                 <h2 className="text-2xl font-semibold">{post.title}</h2>
//                 <p className="text-sm text-gray-400">
//                   {moment(post.date).format('MMMM D, YYYY')}
//                 </p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }
