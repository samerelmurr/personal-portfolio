// import Entry from "@/api/Entry";
// import { getData } from "@/api/getData";



export default async function Home() {

  const data = await fetch('http://localhost:3000/api/getData')
                      .then((res) => res.json())
                      .catch((err) => console.log(err));
  
  
  console.log(data);

  return (
   <>
    <div>
      <h1>{data}</h1>
    </div>
   </>
  );
}


