import Head from "next/head";

function printPdf() {
  const win = window.open("", "");
  const cssUrl = "http://localhost:3000/app.css";

  const htmlContent = `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${cssUrl}">
</head>
<body>
  ${document.getElementById("content").innerHTML}
</body>
</html>
`;

  win.document.write(htmlContent);
  setTimeout(() => {
    win.print();
  }, 200);
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Resumine - Resume maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative p-8 bg-slate-100">
        <button
          onClick={printPdf}
          className="absolute top-2 right-2 h-9 px-4 bg-slate-100 rounded-md ring-1 ring-slate-600 text-slate-800 hover:bg-slate-200"
        >
          PrintPDF
        </button>
        <div id="content">
          <div className="w-full h-full min-h-screen max-w-[1280px] mx-auto bg-white flex justify-between rounded-md">
            <div className="w-[250px] space-y-8 p-8">
              <div className="w-52 h-52 bg-slate-400 rounded-full"></div>
              <div className="space-y-4">
                <div className="">
                  <h2
                    className="font-semibold text-slate-700 text-2xl uppercase p-2 focus:outline-none focus:bg-slate-200 focus:rounded"
                    contentEditable="true"
                  >
                    Profile
                  </h2>
                  <p
                    className="text-slate-500 p-2 focus:outline-none focus:bg-slate-200 focus:rounded"
                    contentEditable="true"
                  >
                    Write here a paragraph about yourself.
                  </p>
                </div>
                <div className="">
                  <h2
                    className="font-semibold text-slate-700 text-2xl uppercase p-2 focus:outline-none focus:bg-slate-200 focus:rounded"
                    contentEditable="true"
                  >
                    Personal detail
                  </h2>
                  <div>
                    <h3
                      className="text-green-500 font-semibold text-xl p-2 focus:outline-none focus:bg-slate-200 focus:rounded"
                      contentEditable="true"
                    >
                      Address
                    </h3>
                    <p
                      className="text-slate-500 p-2 focus:outline-none focus:bg-slate-200 focus:rounded"
                      contentEditable="true"
                    >
                      Enter your email address
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="p-8 pt-[80px]">
                <h1
                  className="text-5xl text-slate-700 font-bold p-2 focus:outline-none focus:bg-slate-200 focus:rounded"
                  contentEditable="true"
                >
                  Your name
                </h1>
                <h2
                  className="text-2xl font-semibold text-slate-500 uppercase p-2 focus:outline-none focus:bg-slate-200 focus:rounded"
                  contentEditable="true"
                >
                  Your profession or speciality
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
