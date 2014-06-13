#pragma strict

private var score = 0;

function Start () {

}

function Update () {

}

function AddScore() {
	score = score + 1;
	var text : GUIText = transform.Find("Score").GetComponent(GUIText);
	text.text = "" + score;
	Debug.Log(score);
	ResetPositions();
}

function ResetPositions() {
	var vasen : PlayerScript = GameObject.Find("VasenPallo").GetComponent(PlayerScript);
	vasen.ResetPosition();
	
	var oikea : PlayerScript = GameObject.Find("OikeaPallo").GetComponent(PlayerScript);
	oikea.ResetPosition();
}