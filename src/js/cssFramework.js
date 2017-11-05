class CssFramework {
    constructor(elem){
        let element = elem;
        if (typeof elem === "string"){
            if (elem[0] === '#'){
                element = document.getElementById(elem.substring(1));
            } else {
                element = document.querySelector(elem);
            }
        }
        if (isDom(element)){
            this.elem = element;
        } else {
            throw new Error(element + " is not DOM element");
        }

        function isDom(elem){
           return (elem !== null && typeof elem.nodeType === "number" )
        }
    }

    addClass(className) {
        this.elem.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.elem.classList.remove(className);
        return this;
    }

    hasClass(className){
        return this.elem.classList.contains(className);
    }

    toggleClass(className){
        this.elem.classList.toggle(className);
        return this;
    }

}

export default function (el) {
    return new CssFramework(el);
}


