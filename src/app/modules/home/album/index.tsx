import React from 'react';
import HomeLayout from './../../../layout/homeLayout';
import { usePageTitle } from './../../../hooks/usePageTitle';

interface Props {}

const AlbumScreen: React.FunctionComponent<Props> = (props: Props) => {
    
    usePageTitle('Music Life | Albums')

    return (
        <>
            <HomeLayout>
                <div style={{color: 'white'}}>Album</div>
            </HomeLayout>
        </>
    )
};

export default AlbumScreen;
