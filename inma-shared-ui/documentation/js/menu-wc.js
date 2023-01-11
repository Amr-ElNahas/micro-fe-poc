'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">shared-utils documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountsDropdownModule.html" data-type="entity-link" >AccountsDropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountsDropdownModule-5683891c1b18ab743893978060dd5da4b97740e966260e070b46bf321bb749294fb81565f6b6746f579baa9395ba7200cede8cb25052f64da55d61a3da991daf"' : 'data-target="#xs-components-links-module-AccountsDropdownModule-5683891c1b18ab743893978060dd5da4b97740e966260e070b46bf321bb749294fb81565f6b6746f579baa9395ba7200cede8cb25052f64da55d61a3da991daf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountsDropdownModule-5683891c1b18ab743893978060dd5da4b97740e966260e070b46bf321bb749294fb81565f6b6746f579baa9395ba7200cede8cb25052f64da55d61a3da991daf"' :
                                            'id="xs-components-links-module-AccountsDropdownModule-5683891c1b18ab743893978060dd5da4b97740e966260e070b46bf321bb749294fb81565f6b6746f579baa9395ba7200cede8cb25052f64da55d61a3da991daf"' }>
                                            <li class="link">
                                                <a href="components/AccountsDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsDropdownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExchangeRateModuleModule.html" data-type="entity-link" >ExchangeRateModuleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExchangeRateModuleModule-02d66232687b3c077de0ed29098732f735ee29f26b515cb96951ebeab936ddb58635c3dbf202d691e3cee44ca77a261d824523008e08e1768156d85c46069f06"' : 'data-target="#xs-components-links-module-ExchangeRateModuleModule-02d66232687b3c077de0ed29098732f735ee29f26b515cb96951ebeab936ddb58635c3dbf202d691e3cee44ca77a261d824523008e08e1768156d85c46069f06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExchangeRateModuleModule-02d66232687b3c077de0ed29098732f735ee29f26b515cb96951ebeab936ddb58635c3dbf202d691e3cee44ca77a261d824523008e08e1768156d85c46069f06"' :
                                            'id="xs-components-links-module-ExchangeRateModuleModule-02d66232687b3c077de0ed29098732f735ee29f26b515cb96951ebeab936ddb58635c3dbf202d691e3cee44ca77a261d824523008e08e1768156d85c46069f06"' }>
                                            <li class="link">
                                                <a href="components/ExchangeRateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExchangeRateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedUtilsModule.html" data-type="entity-link" >SharedUtilsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TotalBalanceComponentModule.html" data-type="entity-link" >TotalBalanceComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TotalBalanceComponentModule-c8edda01cc613ea0b5ca357d4e766845cce2c8e438f3d63b554eef837b45f3798327dca8d983dff3ac92683f38346e822a3e65eab3ef34388a4438404d86f128"' : 'data-target="#xs-components-links-module-TotalBalanceComponentModule-c8edda01cc613ea0b5ca357d4e766845cce2c8e438f3d63b554eef837b45f3798327dca8d983dff3ac92683f38346e822a3e65eab3ef34388a4438404d86f128"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TotalBalanceComponentModule-c8edda01cc613ea0b5ca357d4e766845cce2c8e438f3d63b554eef837b45f3798327dca8d983dff3ac92683f38346e822a3e65eab3ef34388a4438404d86f128"' :
                                            'id="xs-components-links-module-TotalBalanceComponentModule-c8edda01cc613ea0b5ca357d4e766845cce2c8e438f3d63b554eef837b45f3798327dca8d983dff3ac92683f38346e822a3e65eab3ef34388a4438404d86f128"' }>
                                            <li class="link">
                                                <a href="components/TotalBalanceComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalBalanceComponentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VatModule.html" data-type="entity-link" >VatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VatModule-d28f4a72234478b19a371bed3ca273538bc437a9b8a3a34dfe2edd8903348f38e9097564b3fe6ec369991bc2bdc7062d00f9a403ffd583b66ee674d3c9b1e547"' : 'data-target="#xs-components-links-module-VatModule-d28f4a72234478b19a371bed3ca273538bc437a9b8a3a34dfe2edd8903348f38e9097564b3fe6ec369991bc2bdc7062d00f9a403ffd583b66ee674d3c9b1e547"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VatModule-d28f4a72234478b19a371bed3ca273538bc437a9b8a3a34dfe2edd8903348f38e9097564b3fe6ec369991bc2bdc7062d00f9a403ffd583b66ee674d3c9b1e547"' :
                                            'id="xs-components-links-module-VatModule-d28f4a72234478b19a371bed3ca273538bc437a9b8a3a34dfe2edd8903348f38e9097564b3fe6ec369991bc2bdc7062d00f9a403ffd583b66ee674d3c9b1e547"' }>
                                            <li class="link">
                                                <a href="components/VatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/SharedUtilsComponent.html" data-type="entity-link" >SharedUtilsComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SharedUtilsService.html" data-type="entity-link" >SharedUtilsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});