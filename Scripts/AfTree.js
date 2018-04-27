
/*
////Please enter tree's root element's WebID address.
var RootElement = 'https:///piwebapi/assetdatabases/D0DL80eV7eA0SMKofC0iIj1AEk6H66MvRE-rNoYuQG5yrwUEktUUEtQUYuUFNFRy5DT01cVFJBSU5JTkdfREFUQUJBU0U/elements';
//var RootElement = 'https://piwebapi/assetdatabases/D0DL80eV7eA0SMKofC0iIj1AEk6H66MvRE-rNoYuQG5yrwUEktUUEtQUYuUFNFRy5DT01cVFJBSU5JTkdfREFUQUJBU0U';
//Display path and CurrentElement
var DisplayPath = 'CurrentElement=';
var childrenMap = {
    Elements: ['Elements']
};

function MakeAjaxRequest(type, url, SuccessCallBack, data) {
    $.ajax({
        type: type,
        url: url,
        cache: false,
        async: true,
        data: data,
        contentType: "application/json",
        success: SuccessCallBack
    });
}

function node(name, type, links, parentDiv, path) {
    this.type = type;
    this.links = links;
    this.flipper = $('<span class="flipper">+</span>').click(flip.bind(this, this));     
    parentDiv.append(this.flipper).append('<span class=" + type + "><a href="'+DisplayPath + path  + '" target="F2">' + name + '</a></span><br />');
    this.div = $('<div></div>').hide().appendTo(parentDiv);
}

        
function loadChildren(n) {
    n.loaded = true;
    childrenMap[n.type].forEach(function(childCollection) {
        $.get(n.links[childCollection], function(collection) {
            n[childCollection] = collection.Items.map(function (item) {
                return new node(item.Name, childCollection, item.Links, n.div, item.Path);
            });
        });
    });
}
function flip(n) {
    if (!n.loaded) { loadChildren(n); }
    n.flipper.html(n.flipper.html() == '+' ? '-' : '+');
    n.div.toggle();
}
$(function() {
    root = new node('Elements', 'Elements',
 { Elements: RootElement }, $("#root"));
});




//$(document).ready(function () {
//    alert("Ready");

//    $("#t1").click(function () {
//        alert("Trans 1 called");

//        $.getJSON("https://piwebapi/streams/A0EDL80eV7eA0SMKofC0iIj1Adq3lMnFx5xGA_gBQVqBPZwEzGOwOeO1F4p-4GfUd1LRAUEktUUEtQUYuUFNFRy5DT01cVFJBSU5JTkdfREFUQUJBU0VcRFVWQUwgQU5BTFlTSVNcVFJBTlNGT1JNRVIxfEMySDQ/value", null, function (data) {document.getElementById("methane").innerHTML = data.Value})
//        $.getJSON("https://piwebapi/streams/A0EDL80eV7eA0SMKofC0iIj1Adq3lMnFx5xGA_gBQVqBPZwEzGOwOeO1F4p-4GfUd1LRAUEktUUEtQUYuUFNFRy5DT01cVFJBSU5JTkdfREFUQUJBU0VcRFVWQUwgQU5BTFlTSVNcVFJBTlNGT1JNRVIxfEMySDQ/value", null, function (data) { document.getElementById("ethane").innerHTML = data.Value })
//        $.getJSON("https://piwebapi/streams/A0EDL80eV7eA0SMKofC0iIj1Adq3lMnFx5xGA_gBQVqBPZwEzGOwOeO1F4p-4GfUd1LRAUEktUUEtQUYuUFNFRy5DT01cVFJBSU5JTkdfREFUQUJBU0VcRFVWQUwgQU5BTFlTSVNcVFJBTlNGT1JNRVIxfEMySDQ/value", null, function (data) { document.getElementById("acety").innerHTML = data.Value })
//    });

//    $("#t2").click(function () {
//        alert("Trans 2 called");

//        $.getJSON("https://piwebapi/streams/A0EDL80eV7eA0SMKofC0iIj1AnNXewJNx5xGA_gBQVqBPZwqw_NBiZu71E2WtTxYBSN3QUEktUUEtQUYuUFNFRy5DT01cVFJBSU5JTkdfREFUQUJBU0VcRFVWQUwgQU5BTFlTSVNcVFJBTlNGT1JNRVIyfEMySDI/value", null, function (data) { document.getElementById("methane").innerHTML = data.Value })
//        $.getJSON("https://piwebapi/streams/A0EDL80eV7eA0SMKofC0iIj1Adq3lMnFx5xGA_gBQVqBPZwEzGOwOeO1F4p-4GfUd1LRAUEktUUEtQUYuUFNFRy5DT01cVFJBSU5JTkdfREFUQUJBU0VcRFVWQUwgQU5BTFlTSVNcVFJBTlNGT1JNRVIxfEMySDQ/value", null, function (data) { document.getElementById("ethane").innerHTML = data.Value })
//        $.getJSON("https:/piwebapi/streams/A0EDL80eV7eA0SMKofC0iIj1Adq3lMnFx5xGA_gBQVqBPZwEzGOwOeO1F4p-4GfUd1LRAUEktUUEtQUYuUFNFRy5DT01cVFJBSU5JTkdfREFUQUJBU0VcRFVWQUwgQU5BTFlTSVNcVFJBTlNGT1JNRVIxfEMySDQ/value", null, function (data) { document.getElementById("acety").innerHTML = data.Value })

//        var result = document.getElementById('methane').innerText + document.getElementById('ethane').innerText;

//        document.getElementById('total').innerHTML = result;

      
//    });

     
//});







*/
