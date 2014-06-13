#pragma strict

private var initialPosition : Vector3;
public var score : GameObject;

function Start () {
	initialPosition = transform.position;
}

function Update () {
}

function OnBecameInvisible() {
	var script : ManagerScript = score.GetComponent(ManagerScript);
	script.AddScore();
}

function FixedUpdate () {
}

function Awake () {

}

function ResetPosition() {
	transform.position = initialPosition;
	rigidbody2D.velocity = new Vector2(Mathf.Sign(rigidbody2D.velocity.x) * 0, rigidbody2D.velocity.y * 0);
}