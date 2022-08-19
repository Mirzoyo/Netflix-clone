import React from 'react'
import style from './SmartTv.module.css'

function SmartTv() {
  return (
    <div className={style.SmartTvWrapper} >
    <div className={style.SmartTv} >
        <div className={style.SmartTvContainer} >
            <h1>Enjoy on your TV.</h1>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className={style.imgContainer} >
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Netflix-img"  className={style.SmartTvImg} />
      {/* <img src="https://freelance.today/uploads/images/00/07/43/2016/04/15/bcabd1.gif"  alt="" className={style.animation} /> */}
      </div>
    </div>
    </div>
  )
}

export default SmartTv