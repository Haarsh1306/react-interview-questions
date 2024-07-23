import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { PostCard } from "../components/PostCard";
import { Loader } from "../components/Loader";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllCards = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data: Post[] = await res.json();

    setCards((prevCards) => [...prevCards, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getAllCards();
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <AppBar />
      <h1 className="text-gray-300 font-bold text-3xl text-center mt-10">
        Infinite - Scroll
      </h1>
      <div className="flex justify-center items-center flex-col bg-gray-900  mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-4">
          {cards.map((card) => (
            <PostCard key={card.id} id={card.id} title={card.title} />
          ))}
        </div>
        {loading && <Loader />}
      </div>
    </div>
  );
};
