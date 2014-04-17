#pragma strict

private var loc: Ray; //ray from camera to clicked location

function Start () {

}

function Update () {
	//if right mouse button is pressed:
	if(Input.GetMouseButtonDown(1)){
		loc = Camera.main.ScreenPointToRay(Input.mousePosition);	//set loc
		
		var hit: RaycastHit;										//create variable to store raycast results
		if(Physics.Raycast(loc.origin, loc.direction, hit)){		//if raycast from camera to clicked location intersects with terrain:
			print("Moving to location: " + hit.point);				//print location to move to
		}
		transform.position = hit.point;								//set this object's position to clicked location
	}
}