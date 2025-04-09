import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className=" bg-green-300 p-5 text-center" id="document-content">
        <h4>Hello World</h4>
        <h2>Add heading 2</h2>
        <h1>This is Docker Tutorial </h1>
        <h3 className="bg-red-500">We are checking the docker cicd </h3>
        <h4 className="text-green-500">This is the upadated code to check the docker integration </h4>
      </div>
    </div>
  );
}
