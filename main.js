function dynamicBtn(){
    var x = 0;
    var f = 1;

    for(i=0; i<5; i++){
        console.log(f++ +' added a button.');
        var c = document.createElement('div');
        var ct = document.createTextNode('dynamic button');
        c.setAttribute('class', 'dynaBtn');
        c.appendChild(ct);
        document.body.appendChild(c);
    }
}

function arrayBtn(){
    var array = ['Home', 'About', 'News', 'Service', 'Contact'];
    var d = 'dynaBtn';

    for(i=0; i<5; i++){
        console.log(array[i]);
        var c = document.createElement('div');
        var ct = document.createTextNode(array[i]);
        c.setAttribute('class', d);
        c.setAttribute('style', 'width:100px;display:inline-flex;margin-right:5px;');
        c.appendChild(ct);
        document.body.appendChild(c);
    }
}

function arrayBox(){
    var a = 0;
    do{
        var count = 5;
        for(i=0; i<count; i++){
            var str = document.createElement('br');
            var c = document.createElement('div');
            var ct = document.createTextNode('?');
            c.setAttribute('class', 'dynaBox');
            c.appendChild(ct);
            document.body.appendChild(c);
        }
        document.body.appendChild(str);
        a++;
    }
    while(a < 5);
}

function arrayMathRand25(){
    
    var a = 0;
    do{
        var count = 10;
        for(i=0; i<count; i++){
            var r = Math.floor(Math.random() * 156) + 40;
            var g = Math.floor(Math.random() * 156) + 100;
            var b = Math.floor(Math.random() * 156) + 40;
            var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            var str = document.createElement('br');
            var c = document.createElement('div');
            var mr = Math.floor(Math.random() * 99)+1;
            var ct = document.createTextNode(mr);
            document.body.appendChild(c);
            c.setAttribute('class', 'dynaBox');
            c.setAttribute('id', mr);
            c.setAttribute('style', 'background-color:'+ rgb +';border:0px solid black;');
            c.appendChild(ct);
        }
        document.body.appendChild(str);
        a++;
    }
    while(a < 10);
}