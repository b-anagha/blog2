import styles from "../constants/style"

import { useState, useEffect } from "react"
import { http_rq_text } from "../constants/http-req";
import Head from "./Http/Req_topics/Header";
import Methods from "./Http/Req_topics/Method";
import Query from "./Http/Req_topics/Query";
import Requests from "./Http/Req_topics/Request";
import Response from "./Http/Req_topics/Response";
import Status from "./Http/Req_topics/Status";
import Url from "./Http/Req_topics/Url";
import Structure from "./Http/Req_topics/Structure";
import { Link } from "react-router-dom";
function REQ() {
    const [topic, setTopic] = useState(0);
    return (
        <div className="py-6 bg-white flex justify-center">
          
            <div className="flex bg-white flex-wrap w-[60%]">
                <div className={`text-center basis-full ${styles.title}`}>Requests</div>
                
              
                <div className="basis-full flex justify-center">
                    <div className={`flex justify-center bg-[#00df9a] ${styles.btn_grp}`} id="button-grp">
                        <button onClick={() => setTopic(1)} className={`${topic == 1 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button_start}`}>Header</button>
                        <button onClick={() => setTopic(2)} className={`${topic == 2 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Methods</button>
                        <button onClick={() => setTopic(3)} className={`${topic == 3 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Query</button>
                        <button onClick={() => setTopic(4)} className={`${topic == 4 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Request</button>
                        <button onClick={() => setTopic(5)} className={`${topic == 5 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Response</button>
                        <button onClick={() => setTopic(6)} className={`${topic == 6 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Status</button>
                        <button onClick={() => setTopic(7)} className={`${topic == 7 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Structure</button>
                        <button onClick={() => setTopic(8)} className={`${topic == 8 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button_end}`}>Url</button>
                    </div>
                </div>
                <div className="w-full h-[5px] rounded-3xl bg-black my-3"></div>
                <div className="my-10 w-full">
                    <div>
                        <ul className="ml-5 list-[square]">
                            <li className="mb-1">{http_rq_text.para1}</li>
                            <li className="mb-1">{http_rq_text.para3}</li>

                        </ul>
                    </div>
                    {topic == 1 && <Head />}
                    {topic == 2 && <Methods />}
                    {topic == 3 && <Query />}
                    {topic == 4 && <Requests />}
                    {topic == 5 && <Response />}
                    {topic == 6 && <Status/>}
                    {topic == 7 && <Structure />}
                    {topic == 8 && <Url />}  

                </div>
            </div>
        </div>
    )
}

export default REQ