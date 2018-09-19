import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import Stripes from '../../../Resources/images/stripes.png';
import HomeCards from './Cards';
import { Tag } from '../../ui/misc';


class MeetPlayers extends Component {

    state = {
        show:false
    }

    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={()=>{
                    this.setState({
                        show:true
                    })
                }}
            >
                <div className="home_meetplayers"
                    style={{background: `#ffffff url(${Stripes})`}}
                >
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <HomeCards 
                                    show={this.state.show}
                                />
                            </div>
                            <div className="home_text_wrapper">
                                <div>
                                    <Tag
                                        bck="#0e1731"
                                        size="100px"
                                        color="#ffffff"
                                        css={{
                                            display:'inline-block',
                                            marginBottom: '20px',
                                        }}
                                        >
                                        Meet
                                    </Tag>
                                </div>
                                <div>
                                    <Tag
                                        bck="#0e1731"
                                        size="100px"
                                        color="#ffffff"
                                        css={{
                                            display:'inline-block',
                                            marginBottom: '20px',
                                        }}
                                        >
                                        The
                                    </Tag>
                                </div>
                                <div>
                                    <Tag
                                        bck="#0e1731"
                                        size="100px"
                                        color="#ffffff"
                                        css={{
                                            display:'inline-block',
                                            marginBottom: '20px',
                                        }}
                                        >
                                        Players
                                    </Tag>
                                </div>
                                <div>
                                    <Tag
                                        link
                                        linkTo="/the_team"
                                        bck="#ffffff"
                                        size="27px"
                                        color="#0e1731"
                                        css={{
                                            display:'inline-block',
                                            marginBottom:'27px',
                                            border:'1px solid #0e1731'
                                        }}
                                    >
                                        Meet them here
                                    </Tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        );
    }
}

export default MeetPlayers;