import Papa from "papaparse";

export type Link = {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
  };
  

const api = {
    links: {
        fetch: async () => {
                const res = await fetch(
                  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtf1-TG10WSwN7ERFlJ485h4yFX4sA77n9wybm2O4N-YMuuDviMuiPxstYZbnZEAviq-nx3uMylDFp/pub?output=csv"
                );
                const data = await res.text();
                const parsed = await new Promise<Link[]>((resolve, reject)=>{
                  Papa.parse<Link>(data, {
                    header:true,
                    complete: (result) => resolve(result.data),
                    error: reject})
                });
                console.log(parsed);
              
                return parsed;
              }
        }
    }



export default api;