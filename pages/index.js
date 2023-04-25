import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [dropped, setIsDropped] =useState(false);


  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("/data/data.json");
      const json = await response.json();
      setData(json);
    }
    fetchData()
  },[])



  return (
    <Layout>
      <div className='flex flex-col mt-10 gap-8  justify-between pl-8 pr-8'>
        <div className=''>
          <form>
            <div className='relative rounded-lg shadow-lg drop-shadow-xl flex items-center w-full h-14 bg-gray-600'>
              
              <input 
                type='text' 
                value={query}
                placeholder=' Search for a country' 
                className="border-2 outline-none rounded-md absolute -z-10 left-0 right-0 top-0 bottom-0"
                style={{paddingLeft: "60px"}}
              />
              <Image src="/assest/search.svg"
                width={140}
                height={140}
                className="w-8 mt-1  left-5 top-2 absolute"
              />
            </div>

          </form>
        </div>
        <div className='relative'>
          <div className='bg-white shadow-lg drop-shadow-2xl w-48 h-11 rounded-lg flex items-center justify-start pl-5'>Filter by Region</div>
            <div className=' '>
              <Image
                src="/assest/dropDown.svg" 
                width={140}
                height={140}
                className={` ${dropped ? "" : ""} absolute right-32 -top-1 w-10`}
              />
              <Image
                src="/asseSt/dropUp.svg" 
                width={140}
                height={140}
                className={` ${dropped ? "" : "" } absolute right-32 -top-1 w-10`}
              />
            </div>
        </div>
      </div>
    </Layout>
  )
}
