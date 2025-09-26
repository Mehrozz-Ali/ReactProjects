import React, { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "89a909794b1448fca0b1f613d4927e02"

function Search({setFoodData}) {
    const [query, setQuery] = useState("pizza")
  
   useEffect(()=>{
    async function fetchFood(){
        try {
            const res= await fetch(`${URL}?query=${query}&number=10&apiKey=${API_KEY}`)
            // if(!res.ok) throw new Error("Error of networking ");
            const data=await res.json()
            console.log(data.results);
            setFoodData(data.results)
        } catch (error) {
            console.log("Error to fetch data",error);
        }
    }
    fetchFood();
   },[query])
    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
        </div>
    )
}
export default Search 





  // syntax of useEffect(callback function+ dependencies)
    // useEffect(() => {
    //     async function fetchFood() {
    //         const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
    //         const data = await res.json()
    //         console.log(data.results);
    //     }
    //     fetchFood()
    // }, [query])


    // useEffect(() => {
    //   async function fetchFood() {
    //     const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${API_KEY}`;
    //     console.log('Request URL:', url);
    //     try {
    //       const res = await fetch(url);
    //       if (!res.ok) {
    //         console.error('Fetch error', res.status, await res.text());
    //         return;
    //       }
    //       const data = await res.json();
    //       console.log(data);
    //     } catch (err) {
    //       console.error('Network or JSON error', err);
    //     }
    //   }
    //   fetchFood();
    // }, [query]);