
export function ClientTweetCard() {
  return (
    <div className="max-w-xl rounded-2xl shadow-md p-4 space-y-4 border border-[#292929]">
      <div className="flex items-start gap-3">
        <img
          src="/images/blog/profile_img.jpg"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-sm text-[#e1e3e4]">Asliddin Norboyev</p>
          <p className="text-gray-500 text-sm">@dillionverma</p>
        </div>
        <div className="ml-auto">
          <FaTelegramPlane color="#3cb0e2"/>
        </div>
      </div>
      <div className="p-0 text-sm text-gray-800 leading-relaxed">
        <p className="text-[#e1e3e4]">
          Companies spend $30,000+ and several weeks to build beautiful landing pages
          like <span className="text-blue-500">@linear</span>, <span className="text-blue-500">@wopehq</span>, and <span className="text-blue-500">@reflectnotes</span> ✨
          I built <span className="text-blue-500">@reactjs</span> + <span className="text-blue-500">@tailwindcss</span> components for you to do the same in hours,
          starting at just $29. Pre-order link + demo below 👇
          <span className="text-blue-500"> #buildinpublic @buildspace</span>
        </p>
        <img
          src="/images/blog/gdg-tashkent.jpg"
          alt="Linear ddsd"
          className="mt-3 w-full rounded-xl"
        />
      </div>
    </div>
  );
}
