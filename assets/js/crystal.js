$(document).ready(function() {
	var RndNumber = 0;
	var SumNumber = 0;
	var Wins = 0;
	var Losses = 0;

	$(".crystalPic").on("click", function() {
		SumNumber += parseInt($(this).attr("val"));
	    UpdateDisplay();
		if (SumNumber < RndNumber) {
			return;
		} else if (SumNumber > RndNumber) {
			Losses++;
		} else {
			Wins++;
		}
		StartGame();
	});

	StartGame();
	
});

	function StartGame() {
		RndNumber = PickNumber(19,120);
		SumNumber = 0;
		$(".crystalPic").each(function(){
	        $(this).attr("val",PickNumber(1,12));
	    });
	    UpdateDisplay();
	};

	function UpdateDisplay() {
		$("#RndNumber").text("Add up to this Number: " + RndNumber.toString());
		$("#SumNumber").text("Your Total so Far: " + SumNumber.toString());
		$("#Wins").text("Wins: " + Wins.toString());
		$("#Losses").text("Losses: " + Losses.toString());
	}

	function PickNumber(Low, High) {
		return Math.floor(Math.random()*(High-Low+1) + Low)
	};
