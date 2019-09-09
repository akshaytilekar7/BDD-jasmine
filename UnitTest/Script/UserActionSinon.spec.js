describe("UserAction Sinon js", function () {

    var userAction;
    var dataService;

    beforeEach(function () {
        dataService = new DataService();
        userAction = new UserAction(dataService);
    });

    it('If user save sucessfully then, call callback function', function () {
        //Arrange
        var spy = sinon.spy(); //
        var user = {
            name: 'Jensih',
            address: 'UP'
        };

        // stubs all method inside userService
        var stub = sinon.stub(dataService.userService) 
        stub.saveUser.returns(true);
        
        //Act
        var res = userAction.saveUser(user, spy);

        //Assert
        expect(dataService.userService.saveUser.called).toBe(true); 
        expect(stub.saveUser.called).toBe(true); 

        expect(stub.saveUser.getCall(0).calledWith(user)).toBe(true);
        expect(dataService.userService.saveUser.calledWith(user)).toBe(true);
        
        expect(stub.saveUser.callCount).toBe(1);
        expect(dataService.userService.saveUser.callCount).toBe(1);

        expect(res).toBe(true);
    });
});