
import { useState } from 'react';

function UseLayoutURLConfig() {

    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const [layoutState, setLayoutState] = useState(
        {
            showHeader: true
            ,
            showFooter: true
        }
    );
    const changeLayoutState = () => {
        let headerTemp = true;
        let footerTemp = true;
        if (params.get('h') !== null
            &&
            params.get('h') === 'false'
        ) {
            headerTemp = false;
        }
        if (
            params.get('f') !== null
            &&
            params.get('f') === 'false'
        ) {
            footerTemp = false;
        }
        setLayoutState(
            {
                showHeader: headerTemp
                ,
                showFooter: footerTemp
            }
        );
    }
    return { layoutState, changeLayoutState };
}

export default UseLayoutURLConfig; 