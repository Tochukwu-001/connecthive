"use client";
import { db } from "@/lib/firebaseConfig";
import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

export default function ConnectComponent({ session }) {
  const uid = session?.user?.id;
  const [achievements, setAchievements] = useState([]);

  const fetchAchievements = async () => {
    try {
      const achievementData = [];
      const querySnapshot = await getDocs(collection(db, "achievements"));
      querySnapshot.forEach((doc) => {
        const achieve = { id: doc.id, ...doc.data() };
        achievementData.push(achieve);
      });
      setAchievements(achievementData);
      console.log(achievements);
    } catch (error) {
      console.error(error);
      alert("oops, something went wrong");
    }
  };


  useEffect(() => {
    fetchAchievements();
  }, [achievements]);

  const handleDel = async (id) => {
    await deleteDoc(doc(db, "achievements", id));
    fetchAchievements();
  };

  const handleLike = async (id) => {
    const userId = session?.user?.id;
    const postRef = doc(db, "achievements", postId);
    try {
      const postSnap = await getDoc(postRef);
      if (!postSnap) {
        alert("Post not found");
      }
      const postData = postSnap.data();
      const likes = postData.likes || []

      let updatedLikes = null;
      if (postLikes.includes(userId)) {
        // User already liked the post, remove their like
        updatedLikes = postLikes.filter((id) => id !== userId);
        
      } else {
        // User hasn't liked the post, add their like
        updatedLikes = [...postLikes, userId];
        
      }
      await updateDoc(postRef, {likes: updatedLikes})
      fetchAchievements()
    } catch (error) {

    }
  }


  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Recent Achievements
      </h1>

      <div className="space-y-6">
        {achievements.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 relative"
          >
            <div className="flex items-center mb-4">
              <img
                src={post.image}
                alt={post.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h2 className="font-semibold text-lg">{post.author}</h2>
                <p className="text-sm text-gray-500">{post.position}</p>
              </div>
            </div>

            <p className="text-gray-700 text-base mb-3">{post.achievement}</p>
            <p className="text-sm text-gray-400">{post.timestamp}</p>

            <button onClick={() => handleLike(post.id)} className="flex items-center gap-2">
              <FaHeart />
              <span>
                {post.likes?.length || 0}
              </span>
            </button>

            {
              uid == post.authorId &&
              <button
              onClick={() => handleDel(post.id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 text-xs rounded-md w-fit"
            >
              <IoTrashBinSharp />
            </button>
            }
          </div>
        ))}
      </div>
    </main>
  );
}
