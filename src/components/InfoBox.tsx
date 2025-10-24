import React, { type ReactNode } from 'react'

type HintProps = {
    mode: "hint";
    children: ReactNode;
}

type warningProps = {
    mode: "warning";
    severity: "low" | "medium" | "high";
    children: ReactNode;
}

type  InfoBoxProps = HintProps | warningProps

const InfoBox = (props : InfoBoxProps) => {
    const {mode, children} = props
    if (mode === "hint"){
        return (
            <aside className='infobox infobox-hint'>
          <p>{children}</p>
      </aside>
    )
}

const {severity} = props
return(
    <aside className= {`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
    </aside>
)
}

export default InfoBox