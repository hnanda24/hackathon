import React from "react"
// import AudioData from "../assets/data.js"
import Exercise from './Exercise'

export default function(){
    return (
        <>
            <div>
                <Exercise audio="breathing_meditation.mp3" help="help"/>
                <Exercise audio="mindful_breath.mp3" help="help"/>
                <Exercise audio="mindful_bodyscan.mp3" help="help"/>
                <Exercise audio="acceptance_thoughts.mp3" help="help"/>
                <Exercise audio="anxiety_acceptance.mp3" help="help"/>
            </div>
        </>
    )
}