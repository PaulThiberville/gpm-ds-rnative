import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgLineUnlock(props) {
  return (
    <Svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.653 17.78l-.694.284.694-.283zm-.347-5.622l.724.196-.724-.196zm15.388 0l-.724.196.724-.196zm-.347 5.623l.694.283-.694-.283zm-5.31 3.811l-.116-.741.116.741zm-4.073 0l-.116.741.116-.741zM8.656 8.367l-.15-.735.15.735zm6.688 0l-.15.735.15-.735zm-6.13 13.108l.117-.741-.116.741zm-4.468-3.466l.695-.283-.695.283zm10.04 3.466l.115.741-.116-.741zm4.468-3.466l-.695-.283.695.283zM15.62 8.423l.15-.735-.15.735zm-7.24 0l.15.735-.15-.735zm-1.486-.228a.75.75 0 001.5 0h-1.5zm.75-.236h-.75.75zm3.275-4.065l-.182-.728.182.728zm.068-.017l.182.728-.182-.728zm3.934 1.026l-.52.54.52-.54zm-.264.786a.75.75 0 101.038-1.082l-1.038 1.082zm-1.642-1.821l.175-.73-.175.73zM8.53 9.158l.277-.056-.3-1.47-.275.056.298 1.47zm6.665-.056l.277.056.298-1.47-.276-.056-.299 1.47zm-.525 11.632l-.748.117.231 1.482.749-.117-.232-1.482zm-4.59.117l-.748-.117-.232 1.482.749.117.231-1.482zm8.573-3.353l-.093.228 1.39.566.092-.228-1.389-.566zm-13.211.228l-.093-.228-1.39.566.093.228 1.39-.566zm-.093-.228a8.038 8.038 0 01-.318-5.144l-1.448-.392a9.538 9.538 0 00.377 6.102l1.389-.566zm13.622-5.144a8.038 8.038 0 01-.318 5.144l1.39.566a9.538 9.538 0 00.376-6.102l-1.448.392zm-5.05 8.497c-1.271.199-2.569.199-3.84 0l-.232 1.482a13.95 13.95 0 004.304 0l-.231-1.482zM8.807 9.1a16.06 16.06 0 016.389 0l.298-1.47a17.56 17.56 0 00-6.986 0l.299 1.47zm.525 11.633c-1.775-.277-3.248-1.43-3.89-3.008l-1.39.566c.85 2.086 2.776 3.569 5.048 3.924l.232-1.482zm5.57 1.482c2.272-.355 4.198-1.838 5.048-3.924l-1.39-.566c-.642 1.578-2.115 2.73-3.89 3.008l.232 1.482zm.57-13.058c1.72.35 3.066 1.597 3.499 3.196l1.448-.392c-.588-2.172-2.398-3.817-4.649-4.274l-.298 1.47zm-7.24-1.47c-2.251.457-4.06 2.102-4.649 4.274l1.448.392c.433-1.599 1.778-2.846 3.5-3.196l-.3-1.47zm.163.507V7.96h-1.5v.236h1.5zm2.707-3.573l.068-.017-.364-1.456-.068.017.364 1.456zm3.3.822l.256.245 1.038-1.082-.255-.246-1.038 1.083zm-1.56-.847a3.399 3.399 0 011.56.847L15.44 4.36a4.898 4.898 0 00-2.25-1.223l-.35 1.459zm-1.672.008a3.52 3.52 0 011.671-.008l.35-1.459a5.02 5.02 0 00-2.385.011l.364 1.456zM8.394 7.959c0-1.549 1.093-2.934 2.707-3.337l-.364-1.456c-2.244.561-3.843 2.518-3.843 4.793h1.5z"
        fill={props.color || '#212121'}
      />
      <Path
        d="M12 14.25v2"
        stroke={props.color || '#212121'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgLineUnlock
