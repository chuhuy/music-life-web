import React, { useEffect } from 'react';
import HomeLayout from './../../../layout/homeLayout';
import { usePageTitle } from './../../../hooks/usePageTitle';
import TopArtist from './components/topArtist';
import { exploreScreen } from './../../../api/explore';

interface Props {}

const ExploreScreen: React.FunctionComponent<Props> = (props: Props) => {
    
    useEffect(() => {
        exploreScreen()
        .then((response) => {
            console.log(response.kpop)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    usePageTitle('Music Life | Explore');
    
    return (
        <>
            <HomeLayout>
                <div style={{color: 'white'}}>
                    <TopArtist/>
                </div>
            </HomeLayout>
        </>
    )
};

export default ExploreScreen;
