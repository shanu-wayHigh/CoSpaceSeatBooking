import React from 'react'

const SpaceOverviewCardLoader = () => {
    return (
        <>
            {Array.from({ length: 6 }, (_, index) => (
                <div className='spaceOverviewCardLoader' key={index}>
                    <div className='imgCard linear-background'/>
                    <div className='passWrapper linear-background'/>
                </div>
            ))}
        </>
    )
    
}

export { SpaceOverviewCardLoader }
export default SpaceOverviewCardLoader;