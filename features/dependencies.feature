Feature: Check dependency is installed
  The jumpstart requires some packages to work correctly. We need to check if they are installed before moving forward.

  Scenario: Check that gh is installed
    Given gh is installed
    When the jumpstart is called
    Then the user receives a messages stating "gh is installed"
