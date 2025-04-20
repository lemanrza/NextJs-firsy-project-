import Link from 'next/link';
import news from '../data/newsData';


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Cargo News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-4">{item.name}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <Link href={`/news/${item.id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
