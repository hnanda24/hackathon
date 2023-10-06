import React from "react"
// import AudioData from "../assets/data.js"
import Exercise from './Exercise'
import '../assets/Mindful_Exercises.css'

export default function(){
    return (
        <>
            <div className="soundCards">
                <Exercise audio="breathing-meditation.mp3" help="Breathe In"/>
                <Exercise audio="mindful_breath.mp3" help="Mindful Breath"/>
                <Exercise audio="mindful_bodyscan.mp3" help="Bodyscan"/>
                <Exercise audio="acceptance_thoughts.mp3" help="Acceptance of Thoughts"/>
                <Exercise audio="anxiety_acceptance.mp3" help="Anxiety Acceptance"/>
            </div>
        </>
    )
}