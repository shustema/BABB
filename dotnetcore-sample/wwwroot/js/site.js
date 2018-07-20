//-------------------------------Global Variable Definition-----------------------------------------------
//json demo
var homeDiv = document.getElementById('home');
var step = 0;
var project = 0;
var data = proSelect[project].step[step];
var len = data.component.length;
var compArrLength = proSelect[project].step.length;
var compSelectArr = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

//-------------------------------Initialization-----------------------------------------------------------
function initProject() {
    initStep();
};

//initialize component page
function initStep() {
    data = proSelect[project].step[step];
    len = data.component.length;

    $('.stepHeadingName').text('Please Select A '+ proSelect[project].step[step].name);
    
    resetCompDesc();
    initCompDesc();
    initStepBut();
    setCompData();
};

//-------------------------------Inner Functions For Components Pages--------------------------------------
function resetCompDesc() {
    for (i = 0; i < 4; i++) {
        $('.compClass').eq(i).hide();
        $('.compClass').eq(i).removeClass('opClass');
    };
}

function initCompDesc() {
    for (i = 0; i < len; i++) {
        $('.compClass').eq(i).show();
    };
}

function initStepBut() {
    if (step == 0) {
        stepBut0.setAttribute('class', 'hidden');
    } else {
        stepBut0.setAttribute('class', 'visible');
    };
    if (step == proSelect[project].step.length - 1) {
        stepBut2.setAttribute('class', 'hidden');
        stepBut3.setAttribute('class', 'visible');
    } else {
        stepBut2.setAttribute('class', 'visible');
        stepBut3.setAttribute('class', 'hidden');
    };
    $('#stepButWild').text(data.name);
};

//set component data
function setCompData() {
    for (i = 0; i < len; i++) {
        $('.compName').eq(i).text(data.component[i].name);
        $('.compDescr').eq(i).text(data.component[i].desc);
    };
};

function setCompImg(a) {
    $('.compImg').attr(data.component[a].img);
}

//component opacity
function selectComp(a) {
    for (i = 0; i < 4; i++) {
        if (i == a) {
            $('.compClass').eq(i).removeClass('opClass');
        } else if (a == -1) {
            $('.compClass').eq(i).removeClass('opClass');
        } else {
            $('.compClass').eq(i).addClass('opClass');
        };
    };
    compSelectArr[step] = a;
};

//show component info on hover
function componentHover(x) {
    $('.compClass').mouseenter(function () {
        compDescImg.setAttribute('class', 'visible');
        $('.compPopUpName').text(data.component[x].name);
    });
};
$('.group').mouseenter(function () {
    $('#backImage').hide();
});
$(".group").mouseleave(function () {
    compDescImg.setAttribute('class', 'hidden');
    $("#backImage").show();
});

//-------------------------------Navigation Buttons----------------------------------------------------------
function nextComp() {
    if (compSelectArr[step] == -1) {
        alert('Please Select A Component First!');
    } else {
        step++;
        initStep();
        selectComp(compSelectArr[step]);
    };
};

function prevComp() {
    step--;
    initStep();
    selectComp(compSelectArr[step]);
};

function backHome(id) {
    homeDiv.setAttribute('class', 'visible');
    id.setAttribute('class', 'hidden');
    $('.build').hide();
};

function pickPath(id, x) {
    homeDiv.setAttribute('class', 'hidden');
    id.setAttribute('class', 'visible');
    project = x;
};

function startbuild(id) {
    id.setAttribute('class', 'hidden');
    build.setAttribute('class', 'visible');
    initProject();
};

//-------------------------------results Calculations-----------------------------------------------------------
function showResults() {
    if (compSelectArr[step] == -1) {
        alert('Please Select A Component First!');
    } else {
        build.setAttribute('class', 'hidden');
        results.setAttribute('class', 'visible');
    };
};

//Pick next component
function filltable(id, rownum, compnum) {
    var myTable = document.getElementById(id);
    myTable.rows[rownum].cells[1].innerHTML = data.component[compnum].name;
};

//Calculate Weight
function cResultsWeight(weight) {
    if (project == 2) {
        weight = 0;
        for (i = 0; i < len; i++) {
            weight = weight + proSelect[project].step[i].component[compSelectArr[i]].weight;
        };
    };
    return weight;
};

//Calculate Current Draw
function cResultsCurr(curr) {
    curr = 0;
    for (i = 0; i < len; i++) {
        curr = curr + proSelect[project].step[i].component[compSelectArr[i]].curr;
    };
    return curr;
};