import { VideoCard } from "./Videocard"

const Video = [{
    title:"How to learn coding in 30 days|30 day plan|Code with me",
    author:"Amitesh Kumar Singh",
    image:"/logo.jpg",
    views:"46M",
    timestamp:"1 months ago"
},{
    title:"How to learn reading in 30 days|30 day plan|Code with me",
    author:"Amitesh Kumar Singh",
    image:"/logo.jpg",
    views:"46M",
    timestamp:"1 months ago"
},{
    title:"How to learn singing in 30 days|30 day plan|Code with me",
    author:"Amitesh Kumar Singh",
    image:"/logo.jpg",
    views:"46M",
    timestamp:"1 months ago"
},{
    title:"How to learn jumping in 30 days|30 day plan|Code with me",
    author:"Amitesh Kumar Singh",
    image:"/logo.jpg",
    views:"46M",
    timestamp:"1 months ago"
},{
    title:"How to learn coding in 30 days|30 day plan|Code with me",
    author:"Amitesh Kumar Singh",
    image:"/logo.jpg",
    views:"46M",
    timestamp:"1 months ago"
},{
    title:"How to learn reading in 30 days|30 day plan|Code with me",
    author:"Amitesh Kumar Singh",
    image:"/logo.jpg",
    views:"46M",
    timestamp:"1 months ago"
},{
    title:"How to learn singing in 30 days|30 day plan|Code with me",
    author:"Amitesh Kumar Singh",
    image:"/logo.jpg",
    views:"46M",
    timestamp:"1 months ago"
},{
    title:"How to learn jumping in 30 days|30 day plan|Code with me",
    author:"Amitesh Kumar Singh",
    image:"/logo.jpg",
    views:"46M",
    timestamp:"1 months ago"
}]

export const VideoGrid =()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Video.map(video=><div>
           <VideoCard title={video.title} 
      image={video.image} 
      author={video.author} 
      views={video.views} 
      timestamp={video.timestamp}></VideoCard>
        </div>)}
    </div>
}