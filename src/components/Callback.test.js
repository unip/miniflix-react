const Callback = require("./Callback")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new Callback.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
