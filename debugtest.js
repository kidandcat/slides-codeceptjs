I.amOnPage("https://www.codespaceacademy.com/");
I.wait(3);
pause(); // HL
I.see("#barraaceptacion");
I.click(".ok");
I.dontSee("#barraaceptacion");
