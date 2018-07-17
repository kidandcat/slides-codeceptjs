I.amOnPage("https://www.codespaceacademy.com/");
I.wait(3);
I.seeElement("#barraaceptacion");
I.click(".ok");
I.dontSeeElement("#barraaceptacion");
