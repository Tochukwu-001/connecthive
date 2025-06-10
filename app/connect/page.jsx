import { FaHeart, FaRegCommentDots } from "react-icons/fa";

const mockPosts = [
  {
    id: 1,
    user: {
      name: "Jane Doe",
      position: "Frontend Developer @TechCorp",
      image: "/logo.png",
    },
    content: "Excited to share that I just completed my React certification!",
    timestamp: "2 hours ago",
    likes: 34,
  },
  {
    id: 2,
    user: {
      name: "Michael Smith",
      position: "Software Engineer at CloudBase",
      image: "/bg.png",
    },
    content: "Promoted to Senior Developer today! Thanks to my amazing team!",
    timestamp: "5 hours ago",
    likes: 58,
  },
];

export default function Connect() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Recent Achievements</h1>

      <div className="space-y-6">
        {mockPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center mb-4">
              <img
                src={post.user.image}
                alt={post.user.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h2 className="font-semibold text-lg">{post.user.name}</h2>
                <p className="text-sm text-gray-500">{post.user.position}</p>
              </div>
            </div>

            <p className="text-gray-700 text-base mb-3">{post.content}</p>
            <p className="text-sm text-gray-400">{post.timestamp}</p>

            <div className="flex items-center gap-6 mt-4 text-gray-600">
              <button className="flex items-center gap-2 hover:text-red-500 transition">
                <FaHeart />
                <span>{post.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}