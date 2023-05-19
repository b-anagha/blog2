import styles from "../constants/style"

import { useState, useEffect } from "react"
import Head from "./Http/Res_topics/Headers";
import Redirects from "./Http/Res_topics/Redirects";
import Response from "./Http/Req_topics/Response";
import Status from "./Http/Req_topics/Status";
import Structure from "./Http/Req_topics/Structure";
import { http_rs_text } from "../constants/http-rsp";
import { Link } from "react-router-dom";
function Res() {
    const [topic, setTopic] = useState(0);
    return (
        <div className="py-6 bg-white flex justify-center">
            
            <div className="flex bg-white flex-wrap w-[60%]">
                <div className={`text-center basis-full ${styles.title}`}>Response</div>
                
              
                <div className="basis-full flex justify-center">
                    <div className={`flex justify-center bg-[#00df9a] ${styles.btn_grp}`} id="button-grp">
                        <button onClick={() => setTopic(1)} className={`${topic == 1 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button_start}`}>Headers</button>
                        <button onClick={() => setTopic(2)} className={`${topic == 2 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Redirects</button>
                        <button onClick={() => setTopic(3)} className={`${topic == 3 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Response</button>
                        <button onClick={() => setTopic(4)} className={`${topic == 4 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button}`}>Status</button>
                        <button onClick={() => setTopic(5)} className={`${topic == 5 ? "bg-black text-[#00df9a]" : "bg-transparent"} ${styles.button_end}`}>Structure</button>
                    </div>
                </div>
                <div className="w-full h-[5px] rounded-3xl bg-black my-3"></div>
               
            <div>
                <ul className="ml-5 list-[square]">
                    <li className="mb-1">{http_rs_text.para1}</li>
                    <li className="mb-1">{http_rs_text.para3}</li>
                </ul>
            </div>
                <div className="my-10 w-full">
                    {topic == 1 && <Head />}
                    {topic == 2 && <Redirects />}
                    {topic == 3 && <Response />}
                    {topic == 4 && <Status />}
                    {topic == 5 && <Structure />}
                </div>
            </div>
        </div>
    )
}

export default Res