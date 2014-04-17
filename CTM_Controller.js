#pragma strict

public var target: Transform; 				//the destination's transform; an empty object
private var agent: NavMeshAgent; 			//this object's NavMeshAgent component

function Start () {
	agent = GetComponent(NavMeshAgent);
}

function Update () {
	agent.SetDestination(target.position); 	//move this object to destination's position
}