import React from 'react';
import { Album } from '../../../../models/album';
import './../../../../../styles/container.css'

interface Props {
    albums: Array<Album>
}

const Albums: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <>
            <div className="col-sm-7 common-container" style={{marginTop: '10px', marginLeft: '5px', marginRight: '-10px'}}>
                <div className="row title-group">
                    <div className="container-title section-vertical-align">Albums</div>
                    <div className="see-all-button section-vertical-align">See all</div>
                </div>
                <div className="row" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <div style={{marginRight: '20px'}}>
                        <img className="explore-artist-image" alt="Artist" src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/a/5/1/5a5164496ababbca1496193ec8b8afb1.jpg" />
                        <div className="explore-artist-name">Binz</div>
                    </div>
                    <div style={{marginRight: '20px'}}>
                        <img className="explore-artist-image" alt="Artist" src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/a/5/1/5a5164496ababbca1496193ec8b8afb1.jpg" />
                        <div className="explore-artist-name">Binz</div>
                    </div>
                    <div style={{marginRight: '20px'}}>
                        <img className="explore-artist-image" alt="Artist" src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/a/5/1/5a5164496ababbca1496193ec8b8afb1.jpg" />
                        <div className="explore-artist-name">Binz</div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Albums;
