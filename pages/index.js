import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState} from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import _ from 'lodash';
import { v4 as uuid} from "uuid"
import { MyContext }  from '@/components/MyContext'
import { useContext } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [dropped, setIsDropped] =useState(false);
  const [filtered, setfiltered] = useState([]);
  const [region, setRegion] = useState([]);
  const {handleDark, handleLight, isActive, setIsActive} = useContext(MyContext);

  const handleDropDown = () =>{
    setIsDropped(true);
  }
  const handleDropUp = () =>{
    setIsDropped(false);
  }

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("/data.json");
      const json = await response.json();
      setData(json);
      setfiltered(json);
    }
    fetchData()

    
  },[])


  const searching = (e) =>{
    let value = e.target.value;
    setQuery(value);
    let newData =data.filter((item)=>{
      return query.toLocaleLowerCase() === " " || item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    })
    if(query.toLocaleLowerCase === ""){
      return data;
    }
    setfiltered(newData);
  }
  

  return (


    <Layout>
      <div className={`${isActive ? "Dark-mode" : ""} flex flex-col text-skin-base font-Nunito  gap-8 bg-skin-fill  justify-between pl-8 pr-8`}>
        <div className=''>
          <form>
            <div className='relative mt-10 rounded-lg shadow-lg drop-shadow-xl flex justify-center w-full h-14 '>
              
              <input 
                type='text' 
                value={query}
                onChange={searching}
                placeholder=' Search for a country' 
                className="outline-none shadow-2xl bg-skin-input rounded-md absolute -z-10 left-0 right-0 top-0 bottom-0"
                style={{paddingLeft: "60px"}}
              />
              <Image src="/assest/search.svg"

                width={140}
                height={140}
                alt="search-icon"
                className="w-8 mt-1  left-5 top-2 absolute"
              />
            </div>

          </form>
        </div>
          <div className='relative '>
            <div className='relative bg-skin-fill shadow-lg drop-shadow-2xl h-11 rounded-lg flex items-center justify-between pl-5'>
              Filter by Region
              <div className='absolute top-1 right-5'>
                <Image
                  src='/assest/dropDown.svg'
                  width={20}
                  height={20}
                  alt='dropdown button'
                  className={` ${!dropped ? "block" : "hidden"} cursor-pointer`}
                  onClick={handleDropDown}
                />
                <Image
                  src='/assest/dropUp.svg'
                  width={20}
                  height={20}
                  alt='dropup button'
                  className={` ${!dropped ? "hidden" : "block"} cursor-pointer`}
                  onClick={handleDropUp}
                />
              </div>
            </div>
            <div className={` ${dropped ? "" : "hidden"} absolute w-48 top-14`}>

              <div className=' bg-skin-fill  rounded-t-lg overflow-auto flex-wrap left-16 w-full h-44 shadow-2xl'>
                <ul className="flex flex-col ml-5 mt-8  pb-8 text-lg gap-2">
                  {filtered.filter((item, index, self)=>(self.slice(0, index).findIndex((t) => _.isEqual(t.region, item.region)) === -1 )).map((names)=>{
                    return(
                      <Link  
                        href="/" 
                        className="z-10"
                        key={uuid()}
                      >{names.region}</Link>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        <div>
          
        </div>
        <div className=" w-full gap-10 flex flex-col items">
          {filtered.map((items)=>{
            return (
              <Link key={items.alpha2Code} href ={`/countries/${items.alpha2Code}`}
              
              >
                <div  className='flex flex-col rounded-md gap-5 items-center'>

                  <div 
                    className=" w-11/12  rounded-md shadow-2xl h-96 flex flex-col justify-center items-center"
                    >
                    <img 
                      src={items.flags.png}
                      alt={items.name}
                      width={140}
                      
                      className="w-full h-full rounded-t-lg object-cover"
                    />
                    <div className=" bg-skin-fill w-full p-5 pb-5 h-4/5 flex flex-col gap-1">
                      <div className="flex gap-2 text-2xl font-extrabold mb-1 ">{items.name}</div>
                      <div className="flex gap-2 text-lg "><div className=" font-bold">Population: </div>{items.population}</div>
                      <div className="flex gap-2 text-lg "><div className=" font-bold">Region: </div>{items.region}</div>
                      <div className="flex gap-2 text-lg "><div className=" font-bold">Capital: </div>{items.capital}</div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
