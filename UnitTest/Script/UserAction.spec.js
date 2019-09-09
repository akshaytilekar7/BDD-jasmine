describe("UserAction", function () {
    var userAction;
    var dataService;

    beforeEach(function () {
        dataService = new DataService();
        userAction = new UserAction(dataService);
    });

    it("Should fetch user data with address", function () {
        // Arrange

        //WHEN NOTHING - DON'T RETURN ANYTHING
        //spyOn(dataService.addressService, 'getAddressByUserId') 

        //FOR ACTUAL CALL
        //spyOn(dataService.addressService, 'getAddressByUserId').and.callThrough();  

        //INSTEAD ACTUAL CALL. IT RETURNS DATA
        spyOn(dataService.addressService, 'getAddressByUserId').and.returnValue('USA');

        var userId = 5;
        //Act
        var res = userAction.getUser(userId);

        //Arrange
        expect(res.name).toBe('Akshay');
        expect(res.address).toBe('USA');
        expect(dataService.addressService.getAddressByUserId).toHaveBeenCalledWith(userId);
    });

    it('If user save sucessfully then, call callback function', function () {
        //Arrange
        var spy = jasmine.createSpy('mySpy');
        var user = {
            name: 'Akshata',
            address: 'UP'
        };
        spyOn(dataService.userService, 'saveUser').and.returnValue(true);
        
        //Act
        userAction.saveUser(user, spy);

        //Assert
        expect(spy).toHaveBeenCalled();
        expect(dataService.userService.saveUser).toHaveBeenCalledWith(user);
    });

    it('If user not save sucessfully then, dont call callback function', function () {
        //Arrange
        var spy = jasmine.createSpy('mySpy');
        var user = {
            name: 'Akshata',
            address: 'UP'
        };
        spyOn(dataService.userService, 'saveUser').and.returnValue(false);
        
        //Act
        userAction.saveUser(user, spy);

        //Assert
        expect(spy).not.toHaveBeenCalled();
        expect(dataService.userService.saveUser).toHaveBeenCalledWith(user);
    });

});