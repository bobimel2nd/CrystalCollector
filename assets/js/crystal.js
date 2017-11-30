$(document).ready(function() {
	var gRnd = 0;
	var gSum = 0;
	var gWins = 0;
	var gLosses = 0;

	$(".crystalPic").on("click", function() {
		gSum += parseInt($(this).attr("val"));
	    UpdateDisplay();
		if (gSum < gRnd) {
			return;
		} else if (gSum > gRnd) {
			gLosses++;
		} else {
			gWins++;
		}
		StartGame();
	});

	StartGame();
	
	function StartGame() {
		gRnd = PickNumber(19,120);
		gSum = 0;
		$(".crystalPic").each(function(){
	        $(this).attr("val",PickNumber(1,12));
	    });
	    UpdateDisplay();
	};

	function UpdateDisplay() {
		$("#RndNumber").text("Add up to this Number: " + gRnd.toString());
		$("#SumNumber").text("Your Total so Far: " + gSum.toString());
		$("#Wins").text("Wins: " + gWins.toString());
		$("#Losses").text("Losses: " + gLosses.toString());
	}

	function PickNumber(Low, High) {
		return Math.floor(Math.random()*(High-Low+1) + Low)
	};
});
