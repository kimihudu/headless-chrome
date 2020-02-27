//list of prov
{
    "_id": "list_prov",
    "startUrl": ["https://weedmaps.com/listings/in/canada/"],
    "selectors": [{
        "id": "provs",
        "type": "SelectorElement",
        "parentSelectors": ["_root"],
        "selector": "a.region-subregions-tray__RegionLink-jf99ya-3",
        "multiple": true,
        "delay": 0
    }, {
        "id": "prov_name",
        "type": "SelectorText",
        "parentSelectors": ["provs"],
        "selector": "_parent_",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "url",
        "type": "SelectorLink",
        "parentSelectors": ["provs"],
        "selector": "_parent_",
        "multiple": false,
        "delay": 0
    }]
}

//list of cities
{
    "_id": "list_cities",
    "startUrl": ["https://weedmaps.com/listings/in/canada/prince-edward-island"],
    "selectors": [{
        "id": "city",
        "type": "SelectorElement",
        "parentSelectors": ["_root"],
        "selector": "a.region-subregions-tray__RegionLink-jf99ya-3",
        "multiple": true,
        "delay": 0
    }, {
        "id": "url",
        "type": "SelectorLink",
        "parentSelectors": ["city"],
        "selector": "_parent_",
        "multiple": false,
        "delay": 0
    }, {
        "id": "prov",
        "type": "SelectorText",
        "parentSelectors": ["_root"],
        "selector": "div.map-sidebar-header__Container-cwl0e7-0",
        "multiple": false,
        "regex": "",
        "delay": 0
    }]
}

//list retailer pagination
{
    "_id": "list_cities_retailer_pagination",
    "startUrl": ["https://weedmaps.com/listings/in/canada/nova-scotia/amherst",
        "https://weedmaps.com/listings/in/canada/nova-scotia/annapolis-valley",
        "https://weedmaps.com/listings/in/canada/nova-scotia/chester",
        "https://weedmaps.com/listings/in/canada/nova-scotia/dartmouth",
        "https://weedmaps.com/listings/in/canada/nova-scotia/elmsdale",
        "https://weedmaps.com/listings/in/canada/nova-scotia/halifax",
        "https://weedmaps.com/listings/in/canada/nova-scotia/port-hawkesbury",
        "https://weedmaps.com/listings/in/canada/nova-scotia/stellarton",
        "https://weedmaps.com/listings/in/canada/nova-scotia/sydney-glace-bay",
        "https://weedmaps.com/listings/in/canada/nova-scotia/truro"
    ],
    "selectors": [{
        "id": "prov",
        "type": "SelectorText",
        "parentSelectors": ["_root"],
        "selector": ".map__DesktopHeader-sc-6xl19s-1 a:nth-of-type(3)",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "city",
        "type": "SelectorText",
        "parentSelectors": ["_root"],
        "selector": ".map__DesktopHeader-sc-6xl19s-1 .region-breadcrumbs__StyledName-sc-908l8s-1 span",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "pagination",
        "type": "SelectorText",
        "parentSelectors": ["_root"],
        "selector": ".pagination-styles__PageSelect-sc-1b6a0ck-7 span",
        "multiple": false,
        "regex": "",
        "delay": 0
    }]
}

//list retailers follow cities
{
    "_id": "list_retailers",
    "startUrl": ["https://weedmaps.com/listings/in/canada/ontario/woodstock/?page=[1-7]",
        "https://weedmaps.com/listings/in/canada/quebec--2/drummondville/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/quebec--2/gatineau/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/quebec--2/laval/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/quebec--2/montreal/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/quebec--2/quebec-city/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/quebec--2/saint-jean-sur-richelieu/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/quebec--2/trois-rivieres/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/saskatchewan/battleford/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/saskatchewan/estevan/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/saskatchewan/fort-qu-appelle/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/saskatchewan/prince-albert/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/saskatchewan/regina/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/saskatchewan/saskatoon/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/saskatchewan/yorkton/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/prince-edward-island/?page=[1-1]",
        "https://weedmaps.com/listings/in/canada/yukon-territory/whitehorse/?page=[1-1]"
    ],
    "selectors": [{
        "id": "retailers",
        "type": "SelectorElement",
        "parentSelectors": ["_root"],
        "selector": "div.map-no-border-style___StyledDiv-z3ib6n-0.dnTJbT",
        "multiple": true,
        "delay": 0
    }, {
        "id": "name",
        "type": "SelectorText",
        "parentSelectors": ["retailer_1"],
        "selector": "div.styled-components__Name-sc-8si1dn-11",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "rate",
        "type": "SelectorText",
        "parentSelectors": ["retailer_1"],
        "selector": "div.src__Box-sc-1sbtrzs-0:nth-of-type(2)",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "directory",
        "type": "SelectorText",
        "parentSelectors": ["retailer_1"],
        "selector": "span.styled-components__TitleCase-sc-8si1dn-14",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "biz_type",
        "type": "SelectorText",
        "parentSelectors": ["retailer_1"],
        "selector": "span:nth-of-type(3)",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "retailer_1",
        "type": "SelectorElement",
        "parentSelectors": ["retailers"],
        "selector": "_parent_",
        "multiple": false,
        "delay": 0
    }, {
        "id": "uri",
        "type": "SelectorLink",
        "parentSelectors": ["retailers"],
        "selector": "a.src__Box-sc-1sbtrzs-0",
        "multiple": false,
        "delay": 0
    }]
}

//retailer info
{
    "_id": "w33dsuppliers_info",
    "startUrl": ["https://weedmaps.com/deliveries/creme-de-la-quadd"],
    "selectors": [{
        "id": "name",
        "type": "SelectorText",
        "parentSelectors": ["_root"],
        "selector": "h1",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "click_detail",
        "type": "SelectorElementClick",
        "parentSelectors": ["_root"],
        "selector": "main",
        "multiple": false,
        "delay": "1000",
        "clickElementSelector": "a[data-test-id='tab-nav-link-about']",
        "clickType": "clickOnce",
        "discardInitialElements": "do-not-discard",
        "clickElementUniquenessType": "uniqueText"
    }, {
        "id": "intro",
        "type": "SelectorElementClick",
        "parentSelectors": ["click_detail"],
        "selector": "div.styled-components__Section-sc-1vkss9-3:nth-of-type(1)",
        "multiple": false,
        "delay": "1000",
        "clickElementSelector": "button[aria-controls='listing-intro']",
        "clickType": "clickOnce",
        "discardInitialElements": "do-not-discard",
        "clickElementUniquenessType": "uniqueText"
    }, {
        "id": "intro_content",
        "type": "SelectorHTML",
        "parentSelectors": ["intro"],
        "selector": "_parent_",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "about",
        "type": "SelectorElementClick",
        "parentSelectors": ["click_detail"],
        "selector": "div.styled-components__Section-sc-1vkss9-3:nth-of-type(2)",
        "multiple": false,
        "delay": "1000",
        "clickElementSelector": "button",
        "clickType": "clickOnce",
        "discardInitialElements": "do-not-discard",
        "clickElementUniquenessType": "uniqueText"
    }, {
        "id": "about content",
        "type": "SelectorHTML",
        "parentSelectors": ["about"],
        "selector": "_parent_",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "amenities",
        "type": "SelectorHTML",
        "parentSelectors": ["click_detail"],
        "selector": "div.styled-components__AmenitiesSection-sc-1vkss9-5",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "first-time customer",
        "type": "SelectorHTML",
        "parentSelectors": ["click_detail"],
        "selector": "div[data-test-id='section-ftp-announcement']",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "announcement",
        "type": "SelectorHTML",
        "parentSelectors": ["click_detail"],
        "selector": "div[data-test-id='section-announcement']",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "click_deal",
        "type": "SelectorElementClick",
        "parentSelectors": ["_root"],
        "selector": "div.iamySu",
        "multiple": false,
        "delay": "1000",
        "clickElementSelector": "a[data-test-id='tab-nav-link-deals']",
        "clickType": "clickOnce",
        "discardInitialElements": "do-not-discard",
        "clickElementUniquenessType": "uniqueText"
    }, {
        "id": "deal_intro",
        "type": "SelectorHTML",
        "parentSelectors": ["click_deal"],
        "selector": "div.styled-components__ListingCardContent-sc-1il7gnh-1",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "deal_detail",
        "type": "SelectorElement",
        "parentSelectors": ["click_deal"],
        "selector": "div.sc-jWBwVP",
        "multiple": true,
        "delay": 0
    }, {
        "id": "deal_img",
        "type": "SelectorImage",
        "parentSelectors": ["deal_detail"],
        "selector": "img",
        "multiple": false,
        "delay": 0
    }, {
        "id": "deal_info",
        "type": "SelectorText",
        "parentSelectors": ["deal_detail"],
        "selector": "div.deal-contentstyled__DealTitle-sc-15y2mav-5",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "click_media",
        "type": "SelectorElementClick",
        "parentSelectors": ["_root"],
        "selector": "div.sc-jWBwVP",
        "multiple": false,
        "delay": "1000",
        "clickElementSelector": "a[data-test-id=\"tab-nav-link-media\"]",
        "clickType": "clickOnce",
        "discardInitialElements": "do-not-discard",
        "clickElementUniquenessType": "uniqueText"
    }, {
        "id": "media_img",
        "type": "SelectorImage",
        "parentSelectors": ["click_media"],
        "selector": ".img-component",
        "multiple": true,
        "delay": 0
    }]
}

//retailer prods
{
    "_id": "w33dmap_prods",
    "startUrl": ["https://weedmaps.com/deliveries/creme-de-la-quadd?page=[1-5]"],
    "selectors": [{
        "id": "name",
        "type": "SelectorText",
        "parentSelectors": ["_root"],
        "selector": "h1",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "prods",
        "type": "SelectorElement",
        "parentSelectors": ["click_menu"],
        "selector": "div.styled-components__MenuItemWrapper-sc-186ferk-0",
        "multiple": true,
        "delay": 0
    }, {
        "id": "img",
        "type": "SelectorImage",
        "parentSelectors": ["prods"],
        "selector": "img",
        "multiple": false,
        "delay": 0
    }, {
        "id": "prod_name",
        "type": "SelectorText",
        "parentSelectors": ["prods"],
        "selector": "div.styled-components__Name-sc-186ferk-8",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "cat",
        "type": "SelectorText",
        "parentSelectors": ["prods"],
        "selector": "span.styled-components__BrandCategory-sc-186ferk-6",
        "multiple": false,
        "regex": "",
        "delay": 0
    }, {
        "id": "price_range",
        "type": "SelectorElement",
        "parentSelectors": ["prods"],
        "selector": "div.styled-components__PriceWrapper-sc-6ubro-2",
        "multiple": true,
        "delay": 0
    }, {
        "id": "click_menu",
        "type": "SelectorElementClick",
        "parentSelectors": ["_root"],
        "selector": "div.FnqcW",
        "multiple": false,
        "delay": "2000",
        "clickElementSelector": "a[data-test-id=\"tab-nav-link-menu\"]",
        "clickType": "clickOnce",
        "discardInitialElements": "do-not-discard",
        "clickElementUniquenessType": "uniqueText"
    }, {
        "id": "price",
        "type": "SelectorText",
        "parentSelectors": ["price_range"],
        "selector": "_parent_",
        "multiple": false,
        "regex": "",
        "delay": 0
    }]
}