import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks/index.ts"
import { BlogSkeleton } from "../components/BlogSkeleton.tsx"

export const Blogs = () => {
    const {loading,blogs} = useBlogs();
    if(loading){
         return <div>
            <Appbar/> 
         <div className="flex justify-center">
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
         </div>
         </div>
    }
    return <div>
        <Appbar />
        <div className=" flex justify-center">
            <div className=" ">
                {blogs.map(blog=><BlogCard 
                id={blog.id}
                authorName={blog.author.name || "anonymous"}
                 title={blog.title} 
                 content={blog.content} 
                 publishedDate="2023-10-01" /> )}
                
            </div>
        </div>  
    </div>
}