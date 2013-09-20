function ingenize(){
    //alert(document.getElementById("input_text").value);
    var words = new Lexer().lex(document.getElementById("input_text").value);
    var taggedWords = new POSTagger().tag(words);
    var result = "";
    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];


        var endchar = word.substring(word.length-1)[0]
        if(tag == "NN" || tag == "NNP" || tag == "NNS") {
            var ingen = (i % 2 == 0 ? "ingen" : "izer");
            if(word.contains("ing$"))  {
                ingen = "en";
            }
            if(endchar == "e" || endchar == "y") {
                word = word.substring(0, word.length-1);
            }
            word += ingen;
        }


        //if(tag.substring(0, 1) == "V") {
        //    var nizer = "nizer";
        //    word += nizer;
       // }


        result += ((function () { if(!/[^a-zA-Z0-9]/.test(word)) {return " "} else {return ""}})() + word);
       //result += (word + " /" + tag + "<br/>");
    }
    document.getElementById("tagged_text").innerHTML = result;
}