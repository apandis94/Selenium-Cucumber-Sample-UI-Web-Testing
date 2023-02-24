Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the Website

    Given I am on the login page
    When I login with "<username>" and "<password>"
    Then I should see a flash message saying "<message>"

    Examples:
      | username                  | password              | message                        |
      | kelontong.murah@gmail.com | SUKAJAYA10            | Kelontong Murah |
      | kelontong.murah@gmail.com | SUKAJAYA11            | Kredensial yang Anda berikan salah      |
