var UserAction = function (dataService) {

    function getUser(id) {
        var data = {
            name: 'Akshay',
            address: dataService.addressService.getAddressByUserId(id)
        };
        
        return data;
    }

    function saveUser(user, callback) {
        var isSaveUser = dataService.userService.saveUser(user);
        if (isSaveUser)
            callback();
        return isSaveUser;
    }

    return {
        getUser: getUser,
        saveUser: saveUser,
    };
};