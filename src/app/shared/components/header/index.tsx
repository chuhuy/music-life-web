import React from 'react';
import './styles.css';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

interface Props {}

const Header: React.FunctionComponent<Props> = (props: Props) => {
    
    const handleOpenSetting = () => {
        alert('Setting')
    }

    return (
        <>
            <Row id="header-container">
                <div id="header-search"></div>
                <div id="header-setting">
                    <button className="player-icon-button" onClick={() => handleOpenSetting()}>
                        <FontAwesomeIcon icon={faCog} color="#FFF" size="1x" />
                    </button>
                    <div style={{width: '150px', height: '40px', backgroundColor: '#25252D', marginLeft: '5px'}} className="row">
                        <div style={{height: '40px', width: '40px', background: '#32323D'}}>

                        </div>
                        <div style={{color: 'white', paddingLeft: '10px', fontWeight: 'bold', marginTop: '-5px'}} className="section-vertical-align">
                            Huy Chu
                        </div>
                    </div>
                </div>
            </Row>
        </>
    )
};

export default Header;
