import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';


export default function Country({country}) {


  return (
    <Layout>
      <div>
        <div></div>
        <div>back</div>
      </div>
      <div>
        <img></img>
        <div>
          <div>{country.name</div>
          <div className="">
            <div></div>
          </div>
        </div>
        <div className=""></div>
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