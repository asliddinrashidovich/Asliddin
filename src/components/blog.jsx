"use client"

import { blogData } from "@/data/data"
import { FaTelegramPlane } from "react-icons/fa";

function Blog() {
  return (
    <section id="blog" className="bg-[#000] py-10 lg:py-20 relative">
        <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-center text-3xl lg:text-5xl font-semibold text-white mb-3">Blog</h2>
            <div className="w-[50px] lg:w-[70px] h-1 rounded-full mx-auto bg-[#21c998] mb-10 lg:mb-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-[30px]">
                {blogData.map(item => (
                    <div key={item.title} className="max-w-xl mx-auto rounded-2xl shadow-md p-4 space-y-4 border border-[#292929]">
                      <div className="flex items-start gap-3">
                        <img
                          src={item.profile_img}
                          alt="Avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-sm text-[#e1e3e4]">Asliddin Norboyev</p>
                          <p className="text-gray-500 text-sm">{item.title}</p>
                        </div>
                        <div className="ml-auto">
                          <FaTelegramPlane color="#3cb0e2"/>
                        </div>
                      </div>
                      <div className="p-0 text-sm text-gray-800 leading-relaxed">
                        <div className="text-[#e1e3e4] line-clamp-6" dangerouslySetInnerHTML={{ __html: item.paragraph }}/>
                          <img
                            src={item.main_img}
                            alt="Linear ddsd"
                            className="mt-3 w-full rounded-xl object-cover h-[200px]"
                          />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog