import React from "react";
import s from "./Icons.module.css"

let IconFavorites = (props) => {

    var className = '';

    if(props.className === 'userButtons') {
        className = s.userButtons;
    }
    if(props.className === 'panelButtons') {
        className = s.panelButtons;
    }

    return (
        <svg className={className} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1" fill="white">
                <path
                    d="M10.6171 0.586659C10.9412 -0.195555 12.0588 -0.195552 12.3829 0.586662L15.0838 7.1042L22.1214 7.67048C22.9643 7.73831 23.3085 8.77903 22.6696 9.32835L17.2987 13.9461L18.9356 20.8339C19.1306 21.6543 18.2277 22.2989 17.5045 21.8556L11.5 18.1745L5.49551 21.8556C4.77233 22.2989 3.8694 21.6543 4.06438 20.8339L5.70135 13.9461L0.330449 9.32835C-0.308467 8.77903 0.0356548 7.73831 0.878635 7.67048L7.91624 7.1042L10.6171 0.586659Z"/>
            </mask>
            <path
                d="M15.0838 7.1042L13.698 7.67844L14.0492 8.5258L14.9635 8.59937L15.0838 7.1042ZM17.2987 13.9461L16.3208 12.8086L15.6281 13.4042L15.8393 14.2929L17.2987 13.9461ZM11.5 18.1745L12.284 16.8957L11.5 16.4151L10.716 16.8957L11.5 18.1745ZM5.70135 13.9461L7.1607 14.2929L7.37191 13.4042L6.67925 12.8086L5.70135 13.9461ZM7.91624 7.1042L8.03655 8.59937L8.95082 8.5258L9.30197 7.67844L7.91624 7.1042ZM0.330449 9.32835L1.30835 8.19094L1.30835 8.19094L0.330449 9.32835ZM0.878635 7.67048L0.998944 9.16565L0.878635 7.67048ZM5.49551 21.8556L6.27949 23.1344L5.49551 21.8556ZM4.06438 20.8339L5.52373 21.1807L4.06438 20.8339ZM18.9356 20.8339L17.4763 21.1807L17.4763 21.1807L18.9356 20.8339ZM17.5045 21.8556L16.7205 23.1344L16.7205 23.1344L17.5045 21.8556ZM22.1214 7.67048L22.0011 9.16565L22.0011 9.16565L22.1214 7.67048ZM22.6696 9.32835L21.6916 8.19094L21.6916 8.19094L22.6696 9.32835ZM12.3829 0.586662L13.7687 0.0124206L13.7687 0.0124206L12.3829 0.586662ZM10.6171 0.586659L9.23135 0.0124183L9.23135 0.0124183L10.6171 0.586659ZM10.9972 1.1609L13.698 7.67844L16.4695 6.52996L13.7687 0.0124206L10.9972 1.1609ZM14.9635 8.59937L22.0011 9.16565L22.2417 6.17532L15.2041 5.60904L14.9635 8.59937ZM21.6916 8.19094L16.3208 12.8086L18.2766 15.0835L23.6475 10.4658L21.6916 8.19094ZM15.8393 14.2929L17.4763 21.1807L20.395 20.4871L18.758 13.5992L15.8393 14.2929ZM18.2885 20.5768L12.284 16.8957L10.716 19.4534L16.7205 23.1344L18.2885 20.5768ZM10.716 16.8957L4.71154 20.5768L6.27949 23.1344L12.284 19.4534L10.716 16.8957ZM5.52373 21.1807L7.1607 14.2929L4.24199 13.5992L2.60503 20.4871L5.52373 21.1807ZM6.67925 12.8086L1.30835 8.19094L-0.647456 10.4658L4.72344 15.0835L6.67925 12.8086ZM0.998944 9.16565L8.03655 8.59937L7.79593 5.60904L0.758326 6.17532L0.998944 9.16565ZM9.30197 7.67844L12.0028 1.1609L9.23135 0.0124183L6.53051 6.52996L9.30197 7.67844ZM1.30835 8.19094C1.6974 8.52543 1.46149 9.12843 0.998944 9.16565L0.758326 6.17532C-1.39018 6.3482 -2.31433 9.03264 -0.647456 10.4658L1.30835 8.19094ZM4.71154 20.5768C5.09482 20.3418 5.64592 20.6666 5.52373 21.1807L2.60503 20.4871C2.09287 22.642 4.44985 24.2561 6.27949 23.1344L4.71154 20.5768ZM17.4763 21.1807C17.3541 20.6666 17.9052 20.3418 18.2885 20.5768L16.7205 23.1344C18.5502 24.2561 20.9071 22.642 20.395 20.4871L17.4763 21.1807ZM22.0011 9.16565C21.5385 9.12843 21.3026 8.52542 21.6916 8.19094L23.6475 10.4658C25.3143 9.03264 24.3902 6.3482 22.2417 6.17532L22.0011 9.16565ZM13.7687 0.0124206C12.933 -2.00413 10.067 -2.00415 9.23135 0.0124183L12.0028 1.1609C11.8154 1.61304 11.1846 1.61303 10.9972 1.1609L13.7687 0.0124206Z"
                mask="url(#path-1-inside-1)"/>
        </svg>
    )
}

export default IconFavorites;