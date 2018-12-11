var shortid = require('shortid')


class Robot {
  constructor(describe, network) {
    console.log('Pass')
    //Adds a property and value to the instance
    this._id = shortid.generate()
    this._description = describe || null
    this._network = []
  }
  ////////// MEET FUNCTION ////////// 
  // check to make sure that other robot is an instnce of robot
  // if so, add to our network
  // else, throw error
  //////////////////////////////////////// 


  meet(robot){
    if(robot instanceof Robot) {
    this._network.push(robot.id) 
    // robot._network.push(this.id)
    } else {
    throw new Error("They Shall Never Meet")
    }
  }



  ////////// ID ////////// 
  get id() {
    return this._id
  }
  set id(val) {
    throw new Error("Nope")
  }
  ////////// DESCRIPTION ////////// 
  get description() {
    return this._description
  }
  set description(val) {
    if (!val) {
      throw new Error("Blank Book")
    }
    this._description = val
  }
  ////////// NETWORK ////////// 
  get network() {
    return this._network
  }
  set network(val) {
    throw new Error("They Have No Friends")
  }
}
//This is the new instance of the robot class
//Each log is a a new individual instance
// console.log(new Robot(true, false, true))
// console.log(new Robot(false, false, true))
// console.log(new Robot(true, false, false))


module.exports = Robot