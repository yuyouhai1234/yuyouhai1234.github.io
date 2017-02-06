        function startmove(ele, attr, aim,callback) {
            clearInterval(ele.timer);
            ele.timer = setInterval(function(){
                var current=0;
                if(attr=="opacity")
                {
                 current =Math.round(parseFloat(getstyle(ele,attr))*100);
                }else{
                 current = parseInt(getstyle(ele,attr));
                }
                
                var speed = (aim -current)/10;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if(aim==current)
                {
                    clearInterval(ele.timer);
                    if(callback)callback();
                }else{
                    if(attr=="opacity")
                        {
                            ele.style.filter="alpha(opacity:"+current+speed+")";
                            ele.style.opacity=(current+speed)/100;
                            document.getElementsByTagName("input")[0].value = ele.style.opacity;
                        }else{
                            ele.style[attr]=current+speed+"px";
                        }
                    
                }


            }, 30)
        }

        function getstyle(ele, stylename) {
            if (ele.currentStyle) {
                return ele.currentStyle[stylename];
            } else {
                return getComputedStyle(ele, false)[stylename];
            }
        }