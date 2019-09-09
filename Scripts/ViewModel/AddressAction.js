var AddressAction = function (dataService) {

    function  getAddress(id) {
        return dataService.addressService.getAddressByUserId(id);
    }

    return {
        getAddress: getAddress
    };
};