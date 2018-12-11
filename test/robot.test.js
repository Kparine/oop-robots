const {
  expect
} = require('chai')
const Robot = require('../src/robot')

describe('Robot', () => {
  describe('new Robot()', () => {
    it('should randomly generate a unique id upon creation', () => {
      const robotA = new Robot()
      const robotB = new Robot()

      expect(robotA.id).to.not.equal(robotB.id)
    })

    it('should allow for a description property to be set in the constructor', () => {
      const robotA = new Robot()

      expect(robotA).to.have.property('description')
    })

    it('if the description is not set, it should be null', () => {
      const robotB = new Robot()

      expect(robotB.description).to.be.null
    })
  })

  describe('get id', () => {
    it('should return the id of the robot', () => {
      const robot = new Robot()

      expect(robot.id).to.be.ok
    })
  })


  describe('set id', () => {
    it('should throw an error if an attempt is made to change the id', () => {
      const robot = new Robot()
      const actual = () => robot.id = 1

      expect(actual).to.throw()
    })
  })

  describe('get description', () => {
    it('should return the description', () => {
      const robot = new Robot('hello')

      expect(robot.description).to.be.ok
    })
  })

  describe('set description', () => {
    it('should throw an error if the value is empty', () => {
      const robot = new Robot()
      const actual = () => robot.description = null

      expect(actual).to.throw()
    })
  })

  describe('set description', () => {
    it('should set the description of the robot', () => {
      const robot = new Robot('str')
      const actual = () => robot.description = 'string'

      expect(actual).to.not.throw()
      expect(robot.description).to.equal('string')
    })
  })


  describe('get network', () => {
    it('should return an array of all the ids the robot has met', () => {
      const robotA = new Robot()
      const robotB = new Robot()

      expect(robotA.network.length).to.equal(0)

      robotA.meet(robotB)
      expect(robotA.network.length).to.equal(1)
    })
  })

  describe('set network', () => {
    it('should throw an error if an attempt is made to change the network', () => {
      const robot = new Robot()
      const actual = () => robot.network = null
      
      expect(actual).to.throw()
    })
  })

  describe('#meet()', () => {
    it('should have a meet function that takes another instance of a robot', () =>{
      const robotA = new Robot()
      const robotB = new Robot()
      const actual = () => robotA.meet(robotB)

      expect(actual).to.not.throw()
    })
    it('should throw an error if the inserted value is not a robot instance', ()=>{
      const robot = new Robot()
      const actual = () => robot.meet({description: 'Robot C'})

      expect(actual).to.throw()
    })
    it('should add the robots ids to each other\'s networks', () =>{
      const robotA = new Robot()
      const robotB = new Robot()
      robotA.meet(robotB)

      expect(robotA.network).includes(robotB.id)
    })
  })
})