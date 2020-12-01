import React, { RefObject, useRef, useState } from 'react';
import './styles.css';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faRoad } from '@fortawesome/free-solid-svg-icons';
import { useWindowDimensions } from './../../../hooks/useWindowDimensions';
import { tabletWidth } from './../../constants/devices';
import { Formik, Field } from 'formik';
import { SignInForm } from '../../../models/form/signIn';

interface Props {}

const Header: React.FunctionComponent<Props> = (props: Props) => {
    
    const { width } = useWindowDimensions();

    const handleOpenSetting = () => {
        alert('Setting')
    };
    const initialValue: any = {
        search: '',
    };
    
    const [inputRefs] = useState<{
		[key: string]: RefObject<HTMLInputElement>;
	}>({
        search: useRef<HTMLInputElement>(null)
    });
    
    const handleSearch = (values:  any) => {
        console.log(values);
    };

    return (
        <>
            <Row id="header-container" style={width < tabletWidth ? {marginBottom: '40px'} : {}}>
                <Formik 
                    initialValues={initialValue}
                    onSubmit={(values) => {handleSearch(values);}}>
                    {({handleSubmit, values}) => (<>
                        <div id="header-search">
                            <Field
                                innerRef={inputRefs.search}
                                component="input"
                                className="search-input"
                                placeholder="Type here to search"
                                row={1}
                                id="inputSearch"
                                name="search"
                            />
                        </div>
                    </>)}
                </Formik>
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
