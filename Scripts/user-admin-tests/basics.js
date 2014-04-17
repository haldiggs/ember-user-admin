UserAdmin.rootElement = "#qunit-fixture";
UserAdmin.setupForTesting();
UserAdmin.injectTestHelpers();

module("Home Page", {
    setup: function () {
        UserAdmin.reset();
    },
    teardown: function () { }
});

test("Displays a list of links", function () {
    //the stuff to do 
    visit("/");

    //when stuff to do is done...
    andThen(function () {
        //analyze the DOM
        var homeList = find("#home-list li");
        equal(homeList.length, 3, "There should be three items in the #home-list");
    });
});
test("Clicking users link takes you to a list of users", function () {
    //the stuff to do 
    visit("/");
    click("#user-link");

    //when stuff to do is done...
    andThen(function () {
        //analyze the DOM
        var userList = find("#users-list td");
        ok(userList.length > 0, "There should be a list of users");
    });
});