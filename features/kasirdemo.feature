Feature: The Internet Guinea Pig Website

  @sanber
  Scenario Outline: As a user, I can log into the website kasir demo
    Given I am on the login page
    When user input username : "<username>" and input pass : "<password>"
    When I should see notification message saying gagal <message>
    Then Quit Browser

    Examples:
      | username                  | password              | message         |
      | kelontong.murah@gmail.com | SUKAJAYA30            | Kredensial yang Anda berikan salah |

  @sanber
  Scenario Outline: As a user, I can log into the website kasir demo
    Given I am on the login page
    When user input username : "<username>" and input pass : "<password>"
    When I should see notification message saying sukses <message>
    Then Quit Browser

    Examples:
      | username                  | password              | message         |
      | kelontong.murah@gmail.com | SUKAJAYA10            | Kelontong Murah |
