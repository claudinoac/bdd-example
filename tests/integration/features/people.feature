Feature: People register

    I want to register my infos in the people register

    Scenario Outline: Adding a person to the register
        Given I've accessed the people register view
        When I fill the fields with name "<name>", age "<age>", email "<email>"
        And I click in the submit button
        Then a card with name "<name>", age "<age>", email "<email>" should appear

        Examples:
        |   name        |  age  |       email        |
        | ione lao      |  12   | ione@lao.com       |
        | xuxa meneghel |  60   | xuxa@meneghell.com |

