import { useEffect, useState } from "react"



export function GetData() {
    const [data, setData] = useState()
    const linkApi = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon')
    const apiCall = {
        type: "SUBSCRIBE",
        instruments: ["cc-btc-usd-cccagg"]
    }
    linkApi.onopen = () => {
        linkApi.send(JSON.stringify(apiCall))
    }
    linkApi.onmessage = function (event) {
        const json = JSON.parse(event.data);
        try {
            setData(json['cc-btc-usd-cccagg']);
        } catch (error) {
            console.log(error)
        }
    }

    return data;
}

export function GetHistory(dataApi: any) {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
   
  
    useEffect(() => {
      fetch(dataApi)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
          (error) => {
            setError(error);
          }
        )
    }, [dataApi])
  
    if (error) {
      alert(error)
    }else{
      return items['data' as any];
    }
  }