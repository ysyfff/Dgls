(function(window){
    function Dgls(tagName, tagAttr, single){
        this._name = tagName;
        this._attr = tagAttr;
        this._single = single;
        this._brother = [];
        this._children = [];
    }

    Dgls.prototype = {
        constructor: Dgls,
        attr: function(key, value){
            if(value === undefined){
                return this._attr[key];
            }else{
                this._attr[key] = value;
            }
            return this;
        },
        push: function(tag){
            this._children.push(tag);
            return this;
        },
        unshift: function(tag){
            this._children.unshift(tag);
            return this;
        },
        concat: function(tag){
            this._children.concat(tag);
            return this;
        },
        toString: function(){
            var arr = [],
                tmp = [],
                arrlen = 0;
                arr[arrlen++] = '<';
                arr[arrlen++] = this._name;
            for(var key in this._attr){
                tmp[0] = ' ';
                tmp[1] = key;
                tmp[2] = '="';
                tmp[3] = this._attr[key];
                tmp[4] = '"';
                arr[arrlen++] = tmp.join('');
            }
            arr[arrlen++] = '>';
            if(!this._single){
                this._children.map(function(tag){
                    if(tag != undefined) arr[arrlen++] = tag.toString();
                });
                arr[arrlen++] = '</';
                arr[arrlen++] = this._name;
                arr[arrlen++] = '>';
            }
            this._brother.map(function(tag){
                if(tag != undefined) arr[arrlen++] = tag.toString();
            });
            return arr.join('');
        },
        html: function(){
            var arr = [],
                arrlen = 0;
            this._children.map(function(tag){
                if(tag != undefined) arr[arrlen++] = tag.toString();
            });
            return arr.join('');

        }
    }

    
})(window);