import React from 'react';
import HomeLayout from './../../../layout/homeLayout';

interface Props {}

const GenreScreen: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <>
            <HomeLayout>
                <div>Genre</div>
            </HomeLayout>
        </>
    )
};

export default GenreScreen;
