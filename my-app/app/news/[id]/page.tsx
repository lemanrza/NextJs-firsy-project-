import news from "@/app/data/newsData";
import Link from "next/link";
type Props = {
  params: {
    id: string;
  };
};

export default function NewsDetail({ params }: Props) {
  const item = news.find((n) => n.id === Number(params.id));

  if (!item) {
    return <div className="text-red-500 text-center">Xəbər tapılmadı</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <h1 className="text-center text-4xl my-12">
        About Detail Page: {item.name} ({item.id}) in NextJS 🚀
      </h1>
      <p className="text-center text-lg my-4">{item.description}</p>
      <button className="block mx-auto my-4 rounded hover:shadow transition duration-500 bg-blue-500 text-white px-4 py-2 cursor-pointer">
        <Link href={"/news"}>Go Back</Link>
      </button>
    </div>
  );
}


