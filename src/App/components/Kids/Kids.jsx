import React from 'react'
import style from './Kids.module.css'

function Kids() {
  return (
    <div className={style.wrapper} >
    <div className={style.kidsContainer} >
        <img src="https://occ-0-3428-41.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt="" />
        <div className={style.kidsContact} >
            <h1>Create profiles for kids.</h1>
            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
    </div>
    </div>
  )
}

export default Kids