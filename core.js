'use strict';
(function(w, d){
    const afterLoad = (el, ev) => new Promise((resolve, reject) => {
            try{
                el.addEventListener(ev, resolve, true)
            }
            catch (e) {
                reject(e)
            }
        });
    afterLoad(w, 'load').then(() => {
        const target = d.getElementById('a_showhotnews_list_dia');
        if(target !== null){
            try{
                d.body.removeChild(target);
            }
            catch(TypeError){
                target.parentElement.removeChild(target);
            }
            finally {
                console.log('%c蛆家烦人弹窗已干掉！','color:#00EEEE;font-size:24px;font-weight:bold');
            }
        }
        else{
            console.warn('%c未定位弹窗目标','font-size:20px');
        }
    }).catch(err => console.error(err))
})(window, document);
