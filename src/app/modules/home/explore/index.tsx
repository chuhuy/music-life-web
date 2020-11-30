import React from 'react';
import HomeLayout from './../../../layout/homeLayout';
import { usePageTitle } from './../../../hooks/usePageTitle';

interface Props {}

const ExploreScreen: React.FunctionComponent<Props> = (props: Props) => {
    
    usePageTitle('Music Life | Explore');
    
    return (
        <>
            <HomeLayout>
                <div>Explore</div>
            </HomeLayout>
        </>
    )
};

export default ExploreScreen;
