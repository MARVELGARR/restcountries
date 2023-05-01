import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { v4 as uuid} from "uuid"
import { MyContext } from '@/components/MyContext';
import Link from 'next/link';

export default function Country({country}) {
  const {isActive} = useContext(MyContext);


  return (
    <Layout>
      <div className={` ${isActive ? "Dark-mode" : ""} font-Nunito lg:h-screen h-full  pb-5 pl-10 pr-4 bg-skin-fill text-skin-base flex flex-col gap-5 `}>

        <Link
        href="/"  
          className=" flex items-center p-2 bg-skin-input w-32 gap-3 mt-16"
        >
          <Image 
            src="/assest/back.svg"
            width={30}
            height={12}
            alt={country.name}
            className=""
          />
          <div className="text-xl">Back</div>
        </Link>
        <div className="lg:flex-row lg:mt-20 lg:gap-16 flex flex-col gap-5 mt-8">
          <img 
            src={country.flags.png}
            width={140}
            height={120}
            alt={country.name}
            className="lg:w-2/4 lg:h-5/6  w-64 h-44 object-cover"
          />
          <div>

            <div className=" lg:flex lg:gap-10">

              <div className="">
                <div className="lg:text-5xl lg:gap-10 text-3xl font-bold">{country.name}</div>
                <div className="lg:text-2xl lg:gap-5   mt-7 flex flex-col gap-1 text-lg">
                  <div className=""><span className='lg:font-bold'>Native Name:</span> {country.nativeName}</div>
                  <div className=""><span className='lg:font-bold'>Population:</span> {country.population}</div>
                  <div className=""><span className='lg:font-bold'>Region:</span> {country.region}</div>
                  <div className=""><span className='lg:font-bold'>Sub Region:</span> {country.subregion}</div>
                  <div className=""><span className='lg:font-bold'>Capital:</span> {country.capital}</div>
                </div>
              </div>
              <div className="lg:text-2xl lg:gap-5    mt-10 flex flex-col gap-4 text-lg">
                <div className=""><span className='lg:font-bold'>Top Level Domain:</span> {country.topLevelDomain}</div>
                {country.currencies && (<div className=""><span className="lg:font-bold">Curencies:</span> {country.currencies[0].name} </div>) }
                <div className=""><span className='lg:font-bold'>Language:</span> {country.languages.map((i)=>{return(<span key={uuid()}>{i.name}</span>)})}</div>
              </div>
            </div>
            <div className="lg:text-3xl lg:gap-5 mt-7 flex flex-col gap-10">
              <div className="lg:font-bold">Border Countries:</div>
              {country.borders && <div className="lg:flex lg:gap-4">{country.borders.map((borders)=>{return(<span className="lg:p-5 ml-2 border-1 p-1 bg-skin-input" key={uuid()}>{borders}</span>)})}</div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths(){

  const filePath = path.join(process.cwd(), "public", "data.json")
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  const paths = data.map((country)=>{
    return (
      
      {params : {alpha2Code : country.alpha2Code}}
      
    )
    
  })
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}){
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  const country = data.find((c)=>{
    return(
      c.alpha2Code === params.alpha2Code
    )
  })
  return{
    props: {
      country
    }
  }
}