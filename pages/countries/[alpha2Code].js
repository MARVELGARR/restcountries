import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout';

export default function Country() {

  const router = useRouter();
  const { alpha2Code } = router.query;
  const [country, setCountry] = useState([])

  useEffect(() => {
    async function fetchCountry() {
      const response = await fetch(`/data.json`);
      const json = await response.json();
      const country = json.find(c => c.alpha2Code === alpha2Code);
      setCountry(country);
    }
    if (alpha2Code) {
      fetchCountry();
    }
  }, [alpha2Code]);

  if (!country) {
    return <div>Loading...</div>
  }

  return (
    <Layout>

      <div>
        <div className="">Back</div>
        <h1>{country.name}</h1>
      </div>
    </Layout>
  )
}

