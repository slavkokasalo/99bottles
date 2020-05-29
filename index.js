var numberOfBottles = 99
while (numberOfBottles >= 1) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    document.write(numberOfBottles + " " + bottleWord + " of beer on the wall, " );
    document.write(numberOfBottles + " " + bottleWord + " of beer," +"<br>" );
    document.write("Take one down, pass it around," );
	numberOfBottles--;
    document.write( " " + numberOfBottles + " " + bottleWord + " of beer on the wall." +"<br>" +"<br>"); 

} 

