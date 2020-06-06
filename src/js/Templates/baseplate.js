import React, { Component } from 'react';
import '../../css/styles.css';
import BaseplateColors from './partials/colors';
import ButtonVariationsOutput from './partials/ButtonVariationsOutput';
import ColorCombinations from './partials/ColorCombinations';

class Baseplate extends Component {
    render() {
        return (
            <div className='baseplate'>
                <header className='App-header'>
                    <h1>Hello Baseplate!</h1>
                </header>

                <div className='baseplate-main container-lg justify-content-center'>
                    <div className='typography'>
                        <h1>Typography</h1>
                        <div className='fontStyles'>
                            <h2>Font Styles</h2>
                        </div>
                        <div className='headingStyles'>
                            <h2>Heading Styles</h2>
                        </div>
                        <div className='listStyles'>
                            <h2>List Styles</h2>
                        </div>
                        <div className='blockQuoteStyles'>
                            <h2>Block Quote Styles</h2>
                        </div>
                    </div>

                    <div className='colors'>
                        <h1>Colors</h1>
                        <BaseplateColors />
                        <div className='colorMaps'>
                            <h2>Color Maps</h2>
                        </div>
                        <div className='colorMapVariations'>
                            <h2>Color Maps - Variations</h2>
                        </div>
                    </div>

                    <div className='Controls'>
                        <h1>Controls</h1>

                        <div className='buttons'>
                            <h2>Buttons</h2>
                            <div className={'row justify-content-around'}>
                            <ButtonVariationsOutput buttonName={ 'Contained' } />
                            <ButtonVariationsOutput buttonName={ 'Outline' } />
                            <ButtonVariationsOutput buttonName={ 'Text' } />
                            <ButtonVariationsOutput buttonName={ 'Arrow' } />
                            <ButtonVariationsOutput buttonName={ 'Icon' } />
                            <ButtonVariationsOutput buttonName={ 'Round' } />
                            <ButtonVariationsOutput buttonName={ 'Square' } />
                            </div>

                            <div className='colorCombinations'>
                                <h2>Set Color Combinations</h2>
                                <ColorCombinations />
                            </div>

                            <div className='socailLogins'>
                                <h1>Social Login Buttons</h1>
                            </div>

                        </div>
                    </div>

                    <div className='stylisticFeatures'>
                        <h1>Stylistic features</h1>
                        <div className='shadow'>
                            <h2>Shadow</h2>
                            <div className=''>
                                <h3>Buttons</h3>
                            </div>
                            <div className=''>
                                <h3>FAB</h3>
                            </div>
                            <div className=''>
                                <h3>Cards</h3>
                            </div>
                        </div>
                        <div className='borderRadius'>
                            <h2>Border Radius</h2>
                            <div className=''>
                                <h3>Buttons</h3>
                            </div>
                            <div className=''>
                                <h3>Cards</h3>
                            </div>
                        </div>
                    </div>

                    <div className='inputs'>
                        <h1>Inputs</h1>
                        <div className='formFields'>
                            <h2>Form Fields</h2>
                            <div className='inputFields'>
                                <h3>Input Fields</h3>
                            </div>
                            <div className='searchFields'>
                                <h3>Search Fields</h3>
                            </div>
                            <div className='textFields'>
                                <h3>Text Fields</h3>
                            </div>
                            <div className='dropdowns'>
                                <h3>Dropdowns</h3>
                            </div>
                            <div className='dragAreas'>
                                <div>
                                    <h3>Drag Areas - Files</h3>
                                </div>
                                <div>
                                    <h3>Drag Areas - Images</h3>
                                </div>
                            </div>

                            <div className='inputColorVariations'>
                                <h2>Set Color Variations</h2>
                            </div>
                        </div>

                        <div className='checkBoxes'>
                            <h3>Check Boxes</h3>
                        </div>
                        <div className='quantityCounter'>
                            <h3>Quantity Counter</h3>
                        </div>
                        <div className='radioButtons'>
                            <h3>Radio Buttons</h3>
                        </div>
                        <div className='calendar'>
                            <h3>Calendar</h3>
                        </div>
                        <div className='toggles'>
                            <h3>Toggles</h3>
                        </div>
                        <div className='sliders'>
                            <h3>Sliders</h3>
                        </div>
                    </div>

                    <div className='navigation'>
                        <h1>Navigation</h1>
                        <div className='textLink'>
                            <div className='textLinkParagraph'>
                                <h3>Text Link: Paragraph</h3>
                            </div>
                            <div className='textLinkFooter'>
                                <h3>Text Link: Footer</h3>
                            </div>
                        </div>
                        <div className='pagination'>
                            <div className='paginationDots'>
                                <h3>Pagination: Dots</h3>
                            </div>
                            <div className='paginationNumbers'>
                                <h3>Pagination: Numbers</h3>
                            </div>
                        </div>
                        <div className='tabs'>
                            <h3>Tabs</h3>
                        </div>
                        <div className='arrowButtons'>
                            <h3>Arrow Buttons</h3>
                        </div>
                        <div className='progressIndicator'>
                            <h3>Progress Indicator</h3>
                        </div>
                        <div className='breadcrumbs'>
                            <h3>Breadcrumbs</h3>
                        </div>
                        <div className='socialIcons'>
                            <h3>Social Icons</h3>
                        </div>
                    </div>

                    <div className='content'>
                        <h1>Content</h1>
                        <div className='accordions'>
                            <h3>Accordions</h3>
                        </div>
                        <div className='toolTips'>
                            <div className='toolTipsLarge'>
                                <h3>Tooltips Large</h3>
                            </div>
                            <div className='toolTipsSmall'>
                                <h3>Tooltips Small</h3>
                            </div>
                        </div>
                        <div className='placeholders'>
                            <h3>Placeholders</h3>
                        </div>
                        <div className='loaders'>
                            <h3>Loaders</h3>
                        </div>
                        <div className='notifications'>
                            <h3>Notifications</h3>
                        </div>
                        <div className='videoPlayer'>
                            <h3>Video Player</h3>
                        </div>
                        <div className='tables'>
                            <div className='tablesFill'>
                                <h3>Tables: Fill</h3>
                            </div>
                            <div className='tablesOutline'>
                                <h3>Tables: Outline</h3>
                            </div>
                        </div>
                    </div>

                    <div className='modules'>
                        <h1>Modules</h1>

                        <div className='topNav'>
                            <h2>Top Nav</h2>
                            <div className='logoLeft'>
                                <h3>Logo Left</h3>
                            </div>
                            <div className='logoMiddle'>
                                <h3>Logo Middle</h3>
                            </div>
                            <div className='logoRight'>
                                <h3>Logo Right</h3>
                            </div>
                        </div>

                        <div className='topNavMinimal'>
                            <h2>Top Nav Minimal</h2>
                            <div className='logoLeft'>
                                <h3>Logo Left</h3>
                            </div>
                            <div className='logoMiddle'>
                                <h3>Logo Middle</h3>
                            </div>
                            <div className='logoRight'>
                                <h3>Logo Right</h3>
                            </div>
                        </div>

                        <div className='footer'>
                            <h2>Footer</h2>
                        </div>

                        <div className='textBlock'>
                            <h2>Text Block</h2>
                            <div className='desktopLeft'>
                                <h3>Desktop Left</h3>
                            </div>
                            <div className='desktopRight'>
                                <h3>Desktop Right</h3>
                            </div>
                            <div className='desktopCenter'>
                                <h3>Desktop Center</h3>
                            </div>
                        </div>

                        <div className='hero'>
                            <h2>Hero</h2>
                            <div className='imageRight'>
                                <h3>Image Right</h3>
                            </div>
                            <div className='imageCenter'>
                                <h3>Image Center</h3>
                            </div>
                            <div className='imageLeft'>
                                <h3>Image Left</h3>
                            </div>
                        </div>

                        <div className='cta'>
                            <h2>CTA</h2>
                            <div className='ctaCenter'>
                                <h3>CTA Center</h3>
                            </div>
                            <div className='ctaNarrow'>
                                <h3>CTA Narrow</h3>
                            </div>
                            <div className='ctaForm'>
                                <h3>CTA Form</h3>
                            </div>
                        </div>

                        <div className='socialProofLogos'>
                            <h2>Social Proof Logos</h2>
                        </div>

                        <div className='feature'>
                            <h2>Features</h2>
                            <div className='featureSplitLeft'>
                                <h3>Feature Split Left</h3>
                            </div>
                            <div className='featureSplitRight'>
                                <h3>Feature Split Right</h3>
                            </div>
                            <div className='featureListLeft'>
                                <h3>Feature List Left</h3>
                            </div>
                            <div className='featureListRight'>
                                <h3>Feature List Right</h3>
                            </div>
                            <div className='featureQuoteLeft'>
                                <h3>Feature Quote Left</h3>
                            </div>
                            <div className='featureQuoteRight'>
                                <h3>Feature Quote Right</h3>
                            </div>
                        </div>

                        <div className='cards'>
                            <h2>Cards</h2>
                        </div>
                        <div className='cardListing'>
                            <h2>Card Listing</h2>
                        </div>
                        <div className='overlays/modals'>
                            <h2>Overlays/Modals</h2>
                            <div className='openedState'>
                                <h3>Opened State</h3>
                            </div>

                            <div className='filters'>
                                <h2>Filters</h2>
                            </div>

                            <div className='accordion'>
                                <h2>Accordion</h2>
                                <div className='accordionContracted'>
                                    <h3>Accordion Contracted - Desktop</h3>
                                </div>
                                <div className='accordionExpanded'>
                                    <h3>Accordion Expanded - Desktop</h3>
                                </div>
                            </div>

                            <div className='login'>
                                <h2>Login</h2>
                            </div>

                            <div className='tabs'>
                                <h2>Tabs</h2>
                            </div>

                            <div className='testimonial'>
                                <h2>Testimonial</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Baseplate;