import React from 'react';
import HomeLayout from './../../../layout/homeLayout';
import { usePageTitle } from './../../../hooks/usePageTitle';

interface Props {}

const GenreScreen: React.FunctionComponent<Props> = (props: Props) => {
    
    usePageTitle('Music Life | Genre');
    
    return (
        <>
            <HomeLayout>
                <div style={{color: 'white'}}>Genre</div>
            </HomeLayout>
        </>
    )
};

export default GenreScreen;
