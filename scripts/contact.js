const allServices = [{id:1,serviceName:"DIRECTION"},
        {id:2,serviceName:"ANIMATION"},
        {id:3,serviceName:"VFX + 3D RENDERING"},
        {id:4,serviceName:"EDITING + FINISHING"},
        {id:5,serviceName:"PRODUCT DESIGN + DEVELOPMENT"},
        {id:6,serviceName:"SOCIAL MEDIA CAMPAIGN + STRATEGY"},
        {id:7,serviceName:"FRONT-END WEB DEVELOPMENT"}];

let mappedArchive = allServices.map((a => {
        return `<div class="contact-item-container" id="contact-item-container-${a.id}"><div class="rectangle" id="rectangle-${a.id}"></div><a class="contact-item" id="contact-item-${a.id}">${a.serviceName}</a></div>`
}));

contactContainer=document.querySelector(".contact-list-container");

contactContainer.innerHTML+=mappedArchive.join("");