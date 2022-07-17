import React from 'react'
import Link from "next/link";
import { Pn } from './stylePn';
import { useSelector } from 'react-redux';
const KarmaPn = () => {
  const lang=useSelector(state=>state.stateLang.lng)
  return (
    lang==="fa"?
   ( <Pn>.تمام حقوق برای <Link href="https://karmaagy.com/">
      <a target="_blank"  className="karma">کارما</a>
      </Link> محفوظ است و استفاده از مطالب <Link href="https://karmaagy.com/">
      <a target="_blank"  className="karma">کارما</a>
      </Link> تنها با ذکر نام <Link href="https://karmaagy.com/">
      <a target="_blank"  className="karma">کارما</a>
      </Link> و درج لینک مستقیم مجاز است </Pn>):
      <Pn>
        All rights reserved for <Link  href="https://karmaagy.com/">
        
        <a        target="_blank" >
          karma
        </a>
        </Link> and the use of <Link  href="https://karmaagy.com/">
        
        <a target="_blank" >
          karma
        </a>
        </Link> content is allowed only by mentioning the name of <Link  href="https://karmaagy.com/">
        
        <a target="_blank" >
          karma
        </a>
        </Link> and inserting a direct link
      </Pn>
  )
}

export default KarmaPn