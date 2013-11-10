(function(Global){
    function Dgls(tagName, tagAttr, single){
        this._name = tagName;
        this._attr = tagAttr;
        this._single = single;
        this._brother = [];
        this._children = [];
    }

    Dgls.extend = function(obj){
        var proto = this.prototype;
        for(name in obj){
            if((typeof proto[name] != 'function') && (typeof obj[name] == 'function')){
                proto[name] = obj[name];
            }else{
                throw 'The method of ' + name + ' has exsited!';
            }
        }
    };

    Dgls.extend({
        attr: function(key, value){
            var len = arguments.length;
            if(len == 2){
                if(value !== undefined){
                    this._attr[key] = value;
                }
            }else if(len == 1){
                var k;
                for(k in key){
                    if(key[k] !== undefined){
                        this._attr[k] = key[k];
                    }
                }
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
            this._brother = this._brother.concat(tag);
            return this;
        },
        string: function(){
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
                    if(tag != undefined) {
                        if(tag instanceof Dgls){
                            arr[arrlen++] = tag.string();
                        }else if(typeof tag == 'string'){
                            arr[arrlen++] = tag.toString();
                        }
                    }
                });
                arr[arrlen++] = '</';
                arr[arrlen++] = this._name;
                arr[arrlen++] = '>';
            }
            this._brother.map(function(tag){
                if(tag != undefined) {
                    if(tag instanceof Dgls){
                        arr[arrlen++] = tag.string();
                    }else if(typeof tag == 'string'){
                        arr[arrlen++] = tag.toString();
                    }
                }
            });
            return arr.join('');
        },
        childs: function(){
            var arr = [],
                arrlen = 0;
            this._children.map(function(tag){
                if(tag != undefined) {
                    if(tag instanceof Dgls){
                        arr[arrlen++] = tag.string();
                    }else if(typeof tag == 'string'){
                        arr[arrlen++] = tag.toString();
                    }
                }
            });
            return arr.join('');
        }
    });

    
})(window);