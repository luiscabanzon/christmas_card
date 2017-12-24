# Christmas tree

Christmas card on a web format plotting a Christmas tree generated with a simplified genetic algorithm.
Written in JavaScript.

The genetic algorithm here is very simple, running per row tree as follows:
1. An initial population is generated randomly.
2. They are sorted according to their similarity with the expected solution.
3. From each of the best solutions 2 new solutions are generated (each one with a half from the parent and the other half redefined randomly).
4. Parents and children pass to the next generation starting over from step 2 until the expected solution is found.


Live version hosted in [http://luiscabanzon.com/merry_christmas](http://luiscabanzon.com/merry_christmas).


P.S. : Merry Christmas!