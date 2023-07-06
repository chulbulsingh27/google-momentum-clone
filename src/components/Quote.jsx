import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { QuoteContainer, Text } from './QuoteStyles'
const url = 'https://dummyjson.com/quotes?limit=100&skip=10';
const Quote = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data)
    if (!data) return null;
    return (
        <QuoteContainer>
            <Text>{data.quotes[1].quote}</Text>
            <Text>~{data.quotes[0].author}</Text>
        </QuoteContainer>
    )
}

export default Quote