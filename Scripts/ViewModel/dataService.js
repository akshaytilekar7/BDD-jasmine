var DataService = function () {

    var addressService = function () {
        function getAddressByUserId(id) {
            console.log('called getAddressByUserId with id : ' + id);
        }

        return {
            getAddressByUserId: getAddressByUserId
        };
    };

    var userService = function () {
        function getUsers() { console.log('called getUsers'); }
        function getUserById(id) { console.log('called getUserById with id : ' + id); }
        function saveUser(user) { console.log('called saveUser : ' + user);
            return true;
        }

        return {
            getUsers: getUsers,
            getUserById: getUserById,
            saveUser: saveUser
        };
    };

    return {
        addressService: addressService(),
        userService: userService()
    };
};