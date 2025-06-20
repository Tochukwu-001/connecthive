"use client"
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Connect() {

  const [achievements, setAchievements] = useState([])

  const fetchAchievements = async ()=>{
    try {
      const achievementData = []
      const querySnapshot = await getDocs(collection(db, "achievements"))
      querySnapshot.forEach((doc)=> {
        const achieve = {id: doc.id, ...doc.data()}
        achievementData.push(achieve)
      })      
      setAchievements(achievementData)
      console.log(achievements);
      
    } catch (error) {
      console.error(error)
      alert("oops, something went wrong")
    }
  }

  useEffect(()=>{fetchAchievements()}, [achievements])

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Recent Achievements</h1>

      <div className="space-y-6">
        {achievements.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
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

            <div className="flex items-center gap-6 mt-4 text-gray-600">
              <button className="flex items-center gap-2 hover:text-red-500 transition">
                <FaHeart />
                {/* <span>{post.likes}</span> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
