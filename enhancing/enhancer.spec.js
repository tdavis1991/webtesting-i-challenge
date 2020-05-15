const enhancer = require('./enhancer.js');
// test away!

const enhanceTest = {
    name: "Destroya",
    durability: 75,
    enhancement: 20
}

describe("Enhancing test", () => {
    test('repair test', () => {
        expect(enhancer.repair(enhanceTest)).toEqual(100)
    })

    test("Succeed test", () => {
        expect(enhancer.succeed(enhanceTest)).toEqual(20)
        expect(() => enhancer.succeed(enhanceTest, 21)).toThrow()
        expect(enhancer.succeed(enhanceTest, 15)).toEqual(16)
    })

    test("Fail test", () => {
        expect(enhancer.fail(enhanceTest, 14)).toEqual(95)
        expect(enhancer.fail(enhanceTest, 15)).toEqual(90)
        expect(enhancer.fail(enhanceTest, 19)).toEqual(18)
    })
})
