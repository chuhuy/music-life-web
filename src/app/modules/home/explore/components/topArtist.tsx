import React from 'react';
import './../../../../../styles/container.css'

interface Props {}

const TopArtist: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <>
            <div className="col-sm-8 common-container">
                <div className="row title-group">
                    <div className="container-title section-vertical-align">Top Artists</div>
                    <div className="see-all-button section-vertical-align">See all</div>
                </div>
                <div className="row" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <div>
                        <img className="explore-artist-image" alt="Artist" src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/a/5/1/5a5164496ababbca1496193ec8b8afb1.jpg" />
                        <div className="explore-artist-name">Binz</div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default TopArtist;
