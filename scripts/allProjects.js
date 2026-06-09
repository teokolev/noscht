const allProjects =
        [
                {id:1,isVideo:true, projectMedia:"../assets/nik/NM_Eyeball_Trimmed.mp4",
                        projectName:"WORLD PEACE INSIDE ME", projectType:"*advertisement", projectAuthor:"nik arthur", isSquareParent:true,
                        assets:[{id:101,isVideo:true,assetMedia:"../assets/nik/WPIM EYEBALL/00_HERO_WPIM_EYEBALL.mp4",isSquare:true,isText:true,firstText:"WORLD PEACE INSIDE ME",secondText:"*ADVERTISEMENT",isFirst:false,assetTexts:["<div>A STOP MOTION ANIMATION</div>","<div>MARKER OVERLAYED AN IMAGE</div>","<div>OF THE EYE, SHOWING VARIOUS</div>","<div>FIGURES REPRESENTING THE</div>","<div>STORY OF THE ALBUM BY</div>","<div>MONEYPHONE</div>"]},
                                {id:102,isVideo:false,assetMedia:"../assets/nik/WPIM EYEBALL/01_WPIM_EYEBALL.jpg",isSquare:true,isText:true,firstText:"",secondText:"PROCESS",isFirst:false},
                                {id:103,isVideo:true,assetMedia:"../assets/nik/WPIM EYEBALL/02_WPIM_EYEBALL.mp4",isSquare:true,isText:false,firstText:"WORLD PEACE INSIDE ME",secondText:"*advertisement",isFirst:false},
                                {id:104,isVideo:false,assetMedia:"../assets/nik/WPIM EYEBALL/03_WPIM_EYEBALL.jpg",isSquare:true,isText:false,firstText:"WORLD PEACE INSIDE ME",secondText:"*advertisement",isFirst:false},
                                {id:105,isVideo:false,assetMedia:"../assets/nik/WPIM EYEBALL/04_WPIM_EYEBALL.jpg",isSquare:true,isText:false,firstText:"WORLD PEACE INSIDE ME",secondText:"*advertisement",isFirst:false},
                                {id:106,isVideo:false,assetMedia:"../assets/transparent.png",isSquare:true,isText:false,firstText:"WORLD PEACE INSIDE ME",secondText:"*advertisement",isFirst:false},]},

                {id:2,isVideo:true,projectMedia:"../assets/kosta/HOMEPAGE_MARC_JACOBS.mov",
                        projectName:"CONTRALUZ X MALUMA",projectType:"*HOSPITALITY + BEVERAGE",projectAuthor:"KOSTADIN KOLEV", isSquareParent:true,
                        assets:[{id:301,isVideo:true,assetMedia:"../assets/kosta/CONTRALUZ/00_HERO_CONTRALUZ.mp4",isText:true,firstText:"CONTRALUZ X MALUMA",secondText:"*HOSPITALITY + BEVERAGE",isFirst:false,assetTexts:['“RAISE A GLASS AND TOAST WITH ME..."', 'HASTA VER LA LUZ!"', "- MEZCAL KISS, MALUMA"]}]},

                // {id:2,isVideo:false,projectMedia:"../assets/rene/VICTORIA_BECKHAM/HOMEPAGE_VICTORIA_BECKHAM.png",
                //         projectName:"VICTORIA BECKHAM - REVERIE",projectType:"*FASHION + LUXURY",projectAuthor:"rene gibson", isSquareParent:true,
                //         assets:[{id:201,isVideo:true,assetMedia:"../assets/rene/VICTORIA_BECKHAM/00_HERO_VICTORIA_BECKHAM.mp4",isSquare:true,isText:true,firstText:"VICTORIA BECKHAM - REVERIE",secondText:"*FASHION + LUXURY",isFirst:true,assetTexts:["VICTORIA BECKHAM EXTRACTS", "THE LUXURIANT AMBIENCE OF", "JAVA NIGHTS IN THE MEMORY", "OF 21:50 RÊVERIE"]},
                //                 {id:202,isVideo:false,assetMedia:"../assets/rene/VICTORIA_BECKHAM/01_VICTORIA_BECKHAM.png",isSquare:true,isText:true,firstText:"VICTORIA BECKHAM - REVERIE",secondText:"*FASHION + LUXURY",isFirst:false},
                //                 {id:203,isVideo:true,assetMedia:"../assets/rene/VICTORIA_BECKHAM/02_VICTORIA_BECKHAM.mp4",isSquare:false,isText:true,firstText:"VICTORIA BECKHAM - REVERIE",secondText:"*FASHION + LUXURY",isFirst:false},
                //                 {id:204,isVideo:false,assetMedia:"../assets/rene/VICTORIA_BECKHAM/03_VICTORIA_BECKHAM.png",isSquare:false,isText:true,firstText:"VICTORIA BECKHAM - REVERIE",secondText:"*FASHION + LUXURY",isFirst:false},
                //                 {id:205,isVideo:false,assetMedia:"../assets/transparent.png",isSquare:false,isText:false,firstText:"",secondText:"",isFirst:false}]},

                {id:3,isVideo:true,projectMedia:"../assets/kosta/HOMEPAGE_CONTRALUZ.mov",
                        projectName:"CONTRALUZ X MALUMA",projectType:"*HOSPITALITY + BEVERAGE",projectAuthor:"KOSTADIN KOLEV", isSquareParent:true,
                        assets:[{id:301,isVideo:true,assetMedia:"../assets/kosta/CONTRALUZ/00_HERO_CONTRALUZ.mp4",isText:true,firstText:"CONTRALUZ X MALUMA",secondText:"*HOSPITALITY + BEVERAGE",isFirst:false,assetTexts:['“RAISE A GLASS AND TOAST WITH ME..."', 'HASTA VER LA LUZ!"', "- MEZCAL KISS, MALUMA"]}]},
                
                {id:4,isVideo:true,projectMedia:"../assets/kosta/HOMEPAGE_RB_ALBUM_COVER.mov",
                        projectName:"RYAN BEATTY ALBUM COVER",projectType:"*PRODUCT DESIGN",projectAuthor:"milos mihajlov", isSquareParent:true,
                        assets:[{id:401,isVideo:false,assetMedia:"../assets/milos/RYAN BEATTY ALBUM COVER/00_HERO_RB_ALBUM_COVER.png",isText:true,firstText:"RYAN BEATTY ALBUM COVER",secondText:"*PRODUCT DESIGN",isFirst:true,assetTexts:["VICTORIA BECKHAM EXTRACTS", "THE LUXURIANT AMBIENCE OF", "JAVA NIGHTS IN THE MEMORY", "OF 21:50 RÊVERIE"]},
                                {id:402,isVideo:false,assetMedia:"../assets/milos/RYAN BEATTY ALBUM COVER/001_RB_ALBUM_COVER.png",isText:true,firstText:"RYAN BEATTY ALBUM COVER",secondText:"*PRODUCT DESIGN",isFirst:false},
                                {id:403,isVideo:false,assetMedia:"../assets/milos/RYAN BEATTY ALBUM COVER/002_RB_ALBUM_COVER.png",isText:true,firstText:"RYAN BEATTY ALBUM COVER",secondText:"*PRODUCT DESIGN",isFirst:false},
                                {id:404,isVideo:false,assetMedia:"../assets/milos/RYAN BEATTY ALBUM COVER/003_RB_ALBUM_COVER.png",isText:true,firstText:"RYAN BEATTY ALBUM COVER",secondText:"*PRODUCT DESIGN",isFirst:false},
                                {id:405,isVideo:false,assetMedia:"../assets/transparent.png",isText:false,firstText:"",secondText:"",isFirst:false}]},
                
                {id:5,isVideo:true,projectMedia:"../assets/kosta/HOMEPAGE_FUTURELAND.mov",projectName:"FUTURELAND",projectType:"*CAMPAIGN",projectAuthor:"kostadin kolev", isSquareParent:true,
                        assets:[]},

                {id:6,isVideo:true,projectMedia:"../assets/kosta/HOMEPAGE_MEJURI.mov",projectName:"",projectType:"",projectAuthor:"", isSquareParent:true,
                        assets:[]},

                {id:7,isVideo:true,projectMedia:"../assets/kosta/HOMEPAGE_BIG_SEAN.mov",projectName:"",projectType:"",projectAuthor:"", isSquareParent:true,
                        assets:[]},
                
                {id:8,isVideo:false,projectMedia:"../assets/transparent.png",projectName:"",projectType:"",projectAuthor:"",
                        assets:[]},

                {id:9,isVideo:false,projectMedia:"../assets/transparent.png",projectName:"",projectType:"",projectAuthor:"",
                        assets:[]},
        ];