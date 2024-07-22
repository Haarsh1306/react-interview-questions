
interface Post {
    id: number;
    title: string;
  }
export const PostCard = ({
    id,
    title,
}: Post) =>{
    return <div className="w-60 rounded-lg p-5 bg-gray-700">
        <div className="rounded-full bg-red-300 w-8 h-8 text-center">{id}</div>
        <div className="mt-2 font-bold text-white">{title}</div>
        
    </div>
}