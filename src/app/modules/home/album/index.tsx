import React from 'react';
import HomeLayout from './../../../layout/homeLayout';

interface Props {}

const AlbumScreen: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <>
            <HomeLayout>
                <div>Album</div>
            </HomeLayout>
        </>
    )
};

export default AlbumScreen;
