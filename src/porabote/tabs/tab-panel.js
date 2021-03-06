import React from 'react'

const TabPanel = (props) => {

    const selectedState = (props.tabKey !== props.tabs.state.selectedIndex) ? '' : 'selected'

    return(
        <div className={`tabs__item ${selectedState}`}>
            {props.children}
        </div>
    )
}

export default TabPanel