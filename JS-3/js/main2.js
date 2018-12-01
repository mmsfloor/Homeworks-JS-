(function(){    

    area.addEventListener('click', function (e) {


        var target = e.target;
        
        if (target != area) return;

        var el = document.createElement('div');
        var color = newColor.value;
        if(newColor.value == '#ffffff') {
            el.style.border = '1px solid #000'
        }
        el.classList.add('figure');
        el.style.top = e.offsetY + 'px';
        el.style.left = e.offsetX + 'px';
        el.style.backgroundColor = color;
        var figureInput = document.querySelectorAll('[name="figure"]');
        for (var i = 0; i < figureInput.length; i++) {
            if (figureInput[i].checked) {
                el.classList.add(figureInput[i].value);
                var elNum = i;
            }
        }

        if(figureInput[elNum].value == 'ellipse' || figureInput[elNum].value == 'rectangle') {
                el.style.width = newWidth.value + 'px';
                el.style.height = newHeight.value + 'px';
        }

        if (newWidth.value>=area.offsetWidth || newHeight.value>=area.offsetHeight) {
            alert('height or width exceeds canvas size ( '+ area.offsetWidth + 'px * '+ area.offsetHeight + 'px )');
            return;
        }
        
        target.appendChild(el);    
    })

}());