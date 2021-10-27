import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-200 p-8">
      <Head>
        <title>Resumine - Resume maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full max-w-[900px] mx-auto bg-white flex justify-between">
        <div className="w-[400px] space-y-8 p-8">
          <div className="w-52 h-52 bg-gray-400 rounded-full"></div>
          <div className="space-y-4">
            <div className="">
              <h2 className="font-semibold text-gray-700 text-2xl uppercase p-2 focus:outline-none focus:bg-gray-300 focus:rounded" contentEditable="true">Profile</h2>
              <p className="text-gray-500 p-2 focus:outline-none focus:bg-gray-300 focus:rounded" contentEditable="true">Write here a paragraph about yourself.</p>
            </div>
            <div className="">
              <h2 className="font-semibold text-gray-700 text-2xl uppercase p-2 focus:outline-none focus:bg-gray-300 focus:rounded" contentEditable="true">Personal detail</h2>
              <div>
                <h3 className="text-green-500 font-semibold text-xl p-2 focus:outline-none focus:bg-gray-300 focus:rounded" contentEditable="true">Address</h3>
                <p className="text-gray-500 p-2 focus:outline-none focus:bg-gray-300 focus:rounded" contentEditable="true">Enter your email address</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="p-8 pt-[80px]">
            <h1 className="text-5xl text-gray-700 font-bold p-2 focus:outline-none focus:bg-gray-300 focus:rounded" contentEditable="true">Your name</h1>
            <h2 className="text-2xl font-semibold text-gray-500 uppercase p-2 focus:outline-none focus:bg-gray-300 focus:rounded" contentEditable="true">Your profession or speciality</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
