import React from 'react'
import style from './Smart.module.css'

function Smart() {
  return (
    <div className={style.wrapper} >
        <div className={style.smartWrapper} >
            <div className={style.contact} >
                <h1>Enjoy on your TV.</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="smart-img" />
        </div>
    </div>
  )
}

export default Smart