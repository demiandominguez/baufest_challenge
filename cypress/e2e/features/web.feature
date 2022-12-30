Feature: Login
    Scenario: SingUp user and login successfully
        Given I navigate to automation exercise website
        When I sign up a new user
        Then I login with new user
        And I logout

    Scenario: Login user and add laptop to cart
        Given I navigate to automation exercise website
        When I login with new user
        Then I add a laptop to cart