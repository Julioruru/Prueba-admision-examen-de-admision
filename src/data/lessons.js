export const lessons = [
  {
    id: 'conjuntos',
    title: 'Números y Conjuntos',
    emoji: '∪',
    color: 'emerald',
    description: 'ℕ, ℤ, ℚ, ℝ y operaciones con conjuntos',
    topics: [
      {
        id: 'tipos-numeros',
        title: 'Tipos de Números',
        steps: [
          {
            type: 'explanation',
            title: '¿Qué tipos de números existen?',
            content: `Los números se organizan en conjuntos anidados, cada uno más amplio que el anterior:

ℕ = {0, 1, 2, 3, 4, ...}  →  Números naturales (contar)
ℤ = {..., -2, -1, 0, 1, 2, ...}  →  Enteros (incluye negativos)
ℚ = {a/b | a,b ∈ ℤ, b ≠ 0}  →  Racionales (fracciones exactas)
ℝ = ℚ ∪ {irracionales}  →  Reales (toda la recta numérica)

La relación es: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ`,
            visual: 'number-sets',
            tutorMessage: 'Fíjate bien en el diagrama: cada anillo contiene al anterior. ¡Todo número natural es también entero, racional y real!',
            whyExplanation: 'Necesitamos estos conjuntos porque distintos problemas usan distintos tipos de números. Con ℕ contamos objetos, con ℤ representamos deudas, con ℚ dividimos cantidades exactamente, y ℝ cubre todo lo demás como √2 o π. En el examen de WU, muchas preguntas piden que identifiques a qué conjunto pertenece un número.',
          },
          {
            type: 'example',
            title: 'El tutor clasifica números',
            tutorIntro: 'Voy a clasificar los números 7, 0, -3, 1/2, √2 y π. Observa bien el razonamiento en cada caso.',
            steps: [
              {
                expression: '7 ∈ ℕ, ℤ, ℚ, ℝ',
                explanation: '7 es natural. Y como ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, también pertenece a todos los conjuntos mayores.',
                whyExplanation: 'Es como las muñecas rusas: si algo está en la más pequeña (ℕ), también está en todas las más grandes.',
              },
              {
                expression: '0 ∈ ℕ, ℤ, ℚ, ℝ',
                explanation: '0 se incluye en ℕ según la definición moderna (usada en WU Vienna).',
                whyExplanation: 'Algunos libros antiguos no incluyen el 0 en ℕ. En WU Vienna se usa la convención moderna donde ℕ = {0, 1, 2, ...}.',
              },
              {
                expression: '-3 ∈ ℤ, ℚ, ℝ   pero   -3 ∉ ℕ',
                explanation: 'Los números negativos no son naturales. ℤ los añade expresamente.',
                whyExplanation: 'Los enteros surgen de necesitar restar: si tienes 3 y gastas 5, el resultado (-2) no existe en ℕ.',
              },
              {
                expression: '1/2 ∈ ℚ, ℝ   pero   1/2 ∉ ℤ',
                explanation: '1/2 es cociente de dos enteros (1 y 2), así que es racional. No es entero porque está entre 0 y 1.',
                whyExplanation: 'ℚ = {a/b : a,b ∈ ℤ, b≠0}. Aquí a=1, b=2. Se puede comprobar que 1/2 no aparece en {...,-1,0,1,2,...}.',
              },
              {
                expression: '√2 ∈ ℝ   pero   √2 ∉ ℚ   (irracional)',
                explanation: '√2 ≈ 1.41421... Sus decimales no terminan ni se repiten. Es irracional.',
                whyExplanation: 'Se puede demostrar por reducción al absurdo: suponemos √2 = a/b (fracción irreducible), elevamos al cuadrado y llegamos a una contradicción.',
              },
              {
                expression: 'π ∈ ℝ   pero   π ∉ ℚ   (irracional trascendente)',
                explanation: 'π ≈ 3.14159... También irracional. Además es "trascendente" (no raíz de ningún polinomio con coeficientes enteros).',
                whyExplanation: 'Los irracionales "llenan los huecos" de la recta numérica que los racionales no cubren. Juntos forman ℝ.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: clasificamos números',
            tutorIntro: 'Ahora lo hacemos juntos. Completa los huecos con el conjunto correcto (ℕ, ℤ, ℚ o ℝ) o con ∉ si no pertenece.',
            steps: [
              {
                display: '-7 ∈ ___ y también ___, pero -7 ∉ ___',
                explanation: '-7 es negativo. ¿A qué conjuntos pertenece y a cuál no?',
                gaps: [
                  { id: 'a', answer: 'ℤ', hint: 'Es negativo, así que es un número...', placeholder: '?' },
                  { id: 'b', answer: 'ℝ', hint: 'El conjunto que contiene a todos los demás', placeholder: '?' },
                  { id: 'c', answer: 'ℕ', hint: 'Los negativos no son...', placeholder: '?' },
                ]
              },
              {
                display: '3/5 ∈ ___ y también ___, pero 3/5 ∉ ___',
                explanation: '3/5 es una fracción de enteros',
                gaps: [
                  { id: 'd', answer: 'ℚ', hint: '3/5 = a/b con a=3, b=5. Eso es la definición de...', placeholder: '?' },
                  { id: 'e', answer: 'ℝ', hint: 'Todo racional es también...', placeholder: '?' },
                  { id: 'f', answer: 'ℤ', hint: '3/5 no está en {...,-1,0,1,2,...}', placeholder: '?' },
                ]
              },
              {
                display: '√4 = ___ ∈ ℕ, ℤ, ℚ, ℝ',
                explanation: 'Primero simplifica √4, luego clasifica',
                gaps: [
                  { id: 'g', answer: '2', hint: '¿Qué número al cuadrado da 4?', placeholder: '√4' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: clasifica √16, -2/3 y -5',
            tutorIntro: 'Clasifica cada número en todos los conjuntos a los que pertenece. Si necesitas ayuda, pulsa "Hint".',
            hints: [
              '¿Puedes simplificar √16? Busca un número cuyo cuadrado sea 16.',
              '√16 = 4, que es natural. Por tanto también está en ℤ, ℚ y ℝ.',
              '-2/3 es cociente de enteros (-2 y 3). ¿Es entero o natural?',
              '-2/3 ∈ ℚ y ℝ, pero -2/3 ∉ ℤ (está entre -1 y 0) y ∉ ℕ.',
              '-5 es negativo: no puede ser natural. Pero sí es entero, racional y real.',
            ],
            answer: '√16=4 ∈ ℕ,ℤ,ℚ,ℝ  |  -2/3 ∈ ℚ,ℝ  |  -5 ∈ ℤ,ℚ,ℝ',
            solution: [
              { expression: '√16 = 4 ∈ ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ', explanation: '4 es natural, así que pertenece a todos.' },
              { expression: '-2/3 ∈ ℚ ⊂ ℝ,  -2/3 ∉ ℤ', explanation: 'Es fracción de enteros (racional), pero no está en {...,-1,0,1,...}.' },
              { expression: '-5 ∈ ℤ ⊂ ℚ ⊂ ℝ,  -5 ∉ ℕ', explanation: 'Negativo: no es natural, pero sí entero (y por tanto racional y real).' },
            ]
          },
          {
            type: 'summary',
            title: 'Tipos de Números — ¡Lo tienes!',
            points: [
              'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ: cada conjunto contiene al anterior',
              'ℕ = {0,1,2,...}: contar. No hay negativos ni fracciones.',
              'ℤ añade los negativos: {...,-2,-1,0,1,2,...}',
              'ℚ = {a/b | a,b∈ℤ, b≠0}: todas las fracciones exactas',
              'ℝ = ℚ ∪ irracionales: toda la recta numérica (√2, π, e...)',
              'Para clasificar: simplifica primero (√16=4), luego sube de ℕ a ℝ',
            ]
          }
        ]
      },
      {
        id: 'operaciones-conjuntos',
        title: 'Operaciones con Conjuntos',
        steps: [
          {
            type: 'explanation',
            title: 'Unión, intersección y diferencia',
            content: `Sean A = {1, 2, 3, 4} y B = {3, 4, 5, 6}:

A ∪ B = {1,2,3,4,5,6}   → Unión: todo lo que hay en A O en B
A ∩ B = {3, 4}           → Intersección: lo que está en A Y en B
A \\ B = {1, 2}           → Diferencia: lo de A que NO está en B
B \\ A = {5, 6}           → Diferencia: lo de B que NO está en A
A'    = Ω \\ A             → Complemento: todo lo que NO está en A`,
            visual: 'venn-diagram',
            tutorMessage: 'Usa los botones del diagrama para ver cada operación iluminada. La intersección es lo que comparten los dos círculos.',
            whyExplanation: 'Estas operaciones son la base de la teoría de probabilidades: P(A∪B) = P(A) + P(B) − P(A∩B). Si no entiendes conjuntos, no puedes calcular probabilidades de eventos combinados.',
          },
          {
            type: 'example',
            title: 'El tutor calcula con conjuntos',
            tutorIntro: 'Dados A = {a, e, i, o, u} y B = {a, b, c, d, e}, voy a calcular todas las operaciones.',
            steps: [
              {
                expression: 'A ∪ B = {a, b, c, d, e, i, o, u}',
                explanation: 'Uno todos los elementos sin repetir. El "a" y la "e" aparecen en ambos, pero los listo solo una vez.',
                whyExplanation: 'La unión pregunta: ¿está en A O en B (o en ambos)? Cada elemento se cuenta solo una vez.',
              },
              {
                expression: 'A ∩ B = {a, e}',
                explanation: 'Solo los que están en ambos conjuntos a la vez: "a" y "e".',
                whyExplanation: 'La intersección pregunta: ¿está en A Y también en B? Solo pasan el filtro los que cumplen las dos condiciones.',
              },
              {
                expression: 'A \\ B = {i, o, u}',
                explanation: 'Los de A que NO están en B: quitamos "a" y "e" (que sí están en B).',
                whyExplanation: 'A\\B significa "A menos B". Es como filtrar A y quedarse solo con los que B rechazaría.',
              },
              {
                expression: 'B \\ A = {b, c, d}',
                explanation: 'Los de B que no están en A: quitamos "a" y "e".',
                whyExplanation: 'Nótese que A\\B ≠ B\\A (en general). La diferencia no es conmutativa.',
              },
              {
                expression: '|A ∪ B| = 8,   |A ∩ B| = 2',
                explanation: 'La cardinalidad (|·|) es el número de elementos. 8 en la unión, 2 en la intersección.',
                whyExplanation: 'Regla útil: |A∪B| = |A| + |B| − |A∩B| = 5 + 5 − 2 = 8. ¡Evita contar los comunes dos veces!',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: A = {1,2,3,4,5} y B = {2,4,6,8}',
            tutorIntro: 'Calcula las operaciones conmigo. Completa los huecos.',
            steps: [
              {
                display: 'A ∪ B = {1, ___, 3, 4, 5, ___, 8}',
                explanation: 'Todos los elementos de A y B sin repetir',
                gaps: [
                  { id: 'a', answer: '2', hint: '2 está en A. ¿Va en la unión?', placeholder: '?' },
                  { id: 'b', answer: '6', hint: '6 está en B. ¿Lo incluimos?', placeholder: '?' },
                ]
              },
              {
                display: 'A ∩ B = {___, ___}',
                explanation: 'Los que están en A y también en B',
                gaps: [
                  { id: 'c', answer: '2', hint: '¿El 2 está en A? ¿Y en B?', placeholder: '?' },
                  { id: 'd', answer: '4', hint: '¿El 4 está en A? ¿Y en B?', placeholder: '?' },
                ]
              },
              {
                display: 'A \\ B = {1, ___, ___}',
                explanation: 'Los de A que no están en B (quitamos 2 y 4)',
                gaps: [
                  { id: 'e', answer: '3', hint: '¿Está el 3 en B = {2,4,6,8}?', placeholder: '?' },
                  { id: 'f', answer: '5', hint: '¿Está el 5 en B = {2,4,6,8}?', placeholder: '?' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: M = {1,3,5,7,9} y P = {1,2,3,4,5}',
            tutorIntro: 'Calcula M∪P, M∩P y M\\P. Tómate tu tiempo.',
            hints: [
              'M∪P: junta todos los elementos de M y P sin repetir ninguno.',
              'M∩P: busca qué números aparecen en los dos conjuntos a la vez.',
              'M\\P: de los elementos de M, quita los que también están en P.',
              'Solución: M∪P = {1,2,3,4,5,7,9},  M∩P = {1,3,5},  M\\P = {7,9}',
            ],
            answer: 'M∪P={1,2,3,4,5,7,9}, M∩P={1,3,5}, M\\P={7,9}',
            solution: [
              { expression: 'M ∪ P = {1, 2, 3, 4, 5, 7, 9}', explanation: 'Todos los de M más los de P que faltan: 2, 4.' },
              { expression: 'M ∩ P = {1, 3, 5}', explanation: '1, 3 y 5 están en M = {1,3,5,7,9} y también en P = {1,2,3,4,5}.' },
              { expression: 'M \\ P = {7, 9}', explanation: 'De M quitamos 1, 3 y 5 (que sí están en P). Quedan 7 y 9.' },
            ]
          },
          {
            type: 'summary',
            title: 'Operaciones con conjuntos — ¡Dominadas!',
            points: [
              'A ∪ B: todos los elementos de A o B (sin repetir)',
              'A ∩ B: solo los que están en A y también en B',
              'A \\ B: los de A que no están en B (orden importa: A\\B ≠ B\\A)',
              'Fórmula clave: |A∪B| = |A| + |B| − |A∩B|',
              'El diagrama de Venn muestra visualmente cada región',
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'algebra',
    title: 'Álgebra y Ecuaciones',
    emoji: '=',
    color: 'blue',
    description: 'Ecuaciones cuadráticas y sistemas de ecuaciones',
    topics: [
      {
        id: 'ecuaciones-cuadraticas',
        title: 'Ecuaciones Cuadráticas',
        steps: [
          {
            type: 'explanation',
            title: 'La ecuación cuadrática ax² + bx + c = 0',
            content: `Una ecuación cuadrática tiene la forma: ax² + bx + c = 0  (a ≠ 0)

Para resolverla, usamos la fórmula cuadrática:

        x = (−b ± √(b²−4ac)) / (2a)

El discriminante Δ = b² − 4ac determina las soluciones:
  Δ > 0 → dos raíces reales distintas
  Δ = 0 → una raíz real doble
  Δ < 0 → sin solución real (raíces complejas)`,
            visual: 'quadratic-grapher',
            tutorMessage: 'Mueve los sliders a, b, c y observa cómo cambia la parábola. Las raíces son donde la curva corta el eje x.',
            whyExplanation: 'La fórmula cuadrática se obtiene completando el cuadrado en ax²+bx+c=0. Es la herramienta más potente para resolver cualquier cuadrática.',
          },
          {
            type: 'example',
            title: 'El tutor resuelve: x² − 5x + 6 = 0',
            tutorIntro: 'Voy a resolver esta ecuación paso a paso usando la fórmula cuadrática.',
            steps: [
              {
                expression: 'Identificar: a=1, b=−5, c=6',
                explanation: 'Comparamos x² − 5x + 6 con ax² + bx + c para leer los coeficientes.',
                whyExplanation: 'Es el primer paso obligatorio antes de usar cualquier fórmula. Un error aquí arrastra todos los errores siguientes.',
              },
              {
                expression: 'Δ = b² − 4ac = (−5)² − 4·1·6 = 25 − 24 = 1',
                explanation: 'Calculamos el discriminante. Δ = 1 > 0, así que habrá dos raíces reales distintas.',
                whyExplanation: 'Siempre calcula Δ antes que las raíces. Si Δ < 0, ya sabes que no hay solución real y no tienes que seguir.',
              },
              {
                expression: 'x = (−(−5) ± √1) / (2·1) = (5 ± 1) / 2',
                explanation: 'Sustituimos en la fórmula. ¡Ojo con el signo: −b = −(−5) = +5!',
                whyExplanation: 'El signo de b es el que más confunde. Siempre escribe −b explícitamente antes de sustituir.',
              },
              {
                expression: 'x₁ = (5+1)/2 = 3   →   x₂ = (5−1)/2 = 2',
                explanation: 'Calculamos las dos raíces separando el ± en dos casos.',
                whyExplanation: 'x₁ y x₂ son ambas soluciones válidas. Podemos verificar: 3²−5·3+6 = 9−15+6 = 0 ✓',
              },
              {
                expression: 'Solución: x ∈ {2, 3}',
                explanation: 'La ecuación tiene dos raíces: x=2 y x=3. La parábola corta el eje x en esos puntos.',
                whyExplanation: 'Verificación: (x−2)(x−3) = x²−5x+6 ✓. Siempre conviene factorizar para comprobar.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: 2x² + 3x − 2 = 0',
            tutorIntro: 'Resolvemos juntos esta ecuación. Completa los huecos.',
            steps: [
              {
                display: 'a = ___, b = ___, c = ___',
                explanation: 'Lee los coeficientes de 2x² + 3x − 2',
                gaps: [
                  { id: 'a', answer: '2', hint: 'El coeficiente de x² es...', placeholder: 'a' },
                  { id: 'b', answer: '3', hint: 'El coeficiente de x es...', placeholder: 'b' },
                  { id: 'c', answer: '-2', hint: 'El término independiente (con su signo) es...', placeholder: 'c' },
                ]
              },
              {
                display: 'Δ = 3² − 4·2·(−2) = 9 + ___ = ___',
                explanation: 'Calcula el discriminante',
                gaps: [
                  { id: 'd', answer: '16', hint: '4·2·(−2) = −16, pero el signo de −4ac es −(−16) = ...', placeholder: '+?' },
                  { id: 'e', answer: '25', hint: '9 + 16 = ?', placeholder: 'Δ' },
                ]
              },
              {
                display: 'x = (−3 ± √___) / (2·2) = (−3 ± ___) / 4',
                explanation: 'Sustituye en la fórmula',
                gaps: [
                  { id: 'f', answer: '25', hint: 'El discriminante que calculaste', placeholder: 'Δ' },
                  { id: 'g', answer: '5', hint: '√25 = ?', placeholder: '√Δ' },
                ]
              },
              {
                display: 'x₁ = (−3+5)/4 = ___   y   x₂ = (−3−5)/4 = ___',
                explanation: 'Calcula las dos raíces',
                gaps: [
                  { id: 'h', answer: '1/2', hint: '2/4 = ?', placeholder: 'x₁' },
                  { id: 'i', answer: '-2', hint: '−8/4 = ?', placeholder: 'x₂' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: x² + 2x − 8 = 0',
            tutorIntro: '¡Tu momento! Aplica la fórmula cuadrática paso a paso.',
            hints: [
              'Identifica: a=1, b=2, c=−8',
              'Calcula Δ = b²−4ac = 4−4·1·(−8) = 4+32 = 36',
              'Como Δ=36>0, hay dos raíces. √36 = 6.',
              'x = (−2 ± 6) / 2. Calcula x₁ = (−2+6)/2 y x₂ = (−2−6)/2.',
            ],
            answer: 'x₁ = 2, x₂ = −4',
            solution: [
              { expression: 'a=1, b=2, c=−8', explanation: 'Leemos los coeficientes.' },
              { expression: 'Δ = 4−4·1·(−8) = 4+32 = 36', explanation: 'Discriminante positivo: dos raíces reales.' },
              { expression: 'x = (−2 ± √36)/2 = (−2 ± 6)/2', explanation: 'Aplicamos la fórmula.' },
              { expression: 'x₁ = 4/2 = 2   y   x₂ = −8/2 = −4', explanation: 'Verificación: (x−2)(x+4) = x²+2x−8 ✓' },
            ]
          },
          {
            type: 'summary',
            title: 'Ecuaciones Cuadráticas — ¡Controladas!',
            points: [
              'Forma estándar: ax² + bx + c = 0 (con a ≠ 0)',
              'Fórmula: x = (−b ± √(b²−4ac)) / (2a)',
              'Δ > 0 → dos raíces distintas  |  Δ = 0 → raíz doble  |  Δ < 0 → sin solución real',
              'Verifica siempre sustituyendo las raíces en la ecuación original',
              'En la parábola, las raíces son los puntos donde f(x) = 0 (cortes con eje x)',
            ]
          }
        ]
      },
      {
        id: 'sistemas',
        title: 'Sistemas de Ecuaciones',
        steps: [
          {
            type: 'explanation',
            title: 'Sistemas de dos ecuaciones con dos incógnitas',
            content: `Un sistema 2×2:  { a₁x + b₁y = c₁
                      { a₂x + b₂y = c₂

Métodos de resolución:
1. Sustitución: despejamos una variable en una ecuación y sustituimos en la otra
2. Eliminación (Gauss): sumamos múltiplos de las ecuaciones para eliminar una variable
3. Gráfico: la solución es el punto de intersección de dos rectas`,
            visual: 'quadratic-grapher',
            tutorMessage: 'Un sistema de ecuaciones es como encontrar dónde se cruzan dos caminos en un mapa.',
            whyExplanation: 'Los sistemas aparecen siempre que hay dos condiciones simultáneas: mezclas de productos, movimiento, circuitos eléctricos, etc.',
          },
          {
            type: 'example',
            title: 'El tutor resuelve: { 2x + y = 7  /  x − y = 2 }',
            tutorIntro: 'Voy a resolver este sistema por el método de eliminación (sumar las ecuaciones).',
            steps: [
              {
                expression: '(2x + y = 7)  +  (x − y = 2)',
                explanation: 'Sumamos las dos ecuaciones. Los términos en y se cancelan: +y + (−y) = 0.',
                whyExplanation: 'El método de eliminación busca hacer desaparecer una variable sumando (o restando) ecuaciones multiplicadas por constantes adecuadas.',
              },
              {
                expression: '3x = 9   →   x = 3',
                explanation: 'Con y eliminada, tenemos una ecuación de una incógnita. Despejamos x.',
                whyExplanation: 'Dividimos entre 3 en ambos lados: 3x/3 = 9/3 → x = 3.',
              },
              {
                expression: 'Sustituimos x=3 en la primera: 2(3) + y = 7 → y = 1',
                explanation: 'Conocido x, sustituimos en cualquier ecuación para encontrar y.',
                whyExplanation: 'Podemos usar cualquiera de las dos ecuaciones para hallar y. Conviene elegir la más sencilla.',
              },
              {
                expression: 'Solución: (x, y) = (3, 1)',
                explanation: 'Verificamos: 2(3)+1 = 7 ✓  y  3−1 = 2 ✓. El punto (3,1) satisface ambas ecuaciones.',
                whyExplanation: 'La verificación es obligatoria en el examen. Comprueba siempre en ambas ecuaciones originales.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: { 3x + 2y = 12  /  x − y = 1 }',
            tutorIntro: 'Usaremos sustitución. Yo empiezo, tú completas.',
            steps: [
              {
                display: 'De la 2ª: x = ___ + ___',
                explanation: 'Despejamos x de la segunda ecuación x − y = 1',
                gaps: [
                  { id: 'a', answer: '1', hint: 'x − y = 1  →  x = 1 + y  →  el número libre es...', placeholder: '?' },
                  { id: 'b', answer: 'y', hint: 'y se pasa al otro lado con signo +', placeholder: '?' },
                ]
              },
              {
                display: 'Sustituimos en la 1ª: 3(___ + y) + 2y = 12 → ___ + 5y = 12',
                explanation: 'Sustituimos x = 1 + y en 3x + 2y = 12',
                gaps: [
                  { id: 'c', answer: '1', hint: 'x = 1 + y, así que ponemos ese valor', placeholder: 'x' },
                  { id: 'd', answer: '3', hint: '3·(1+y) = 3 + 3y. ¿Cuánto vale el número libre?', placeholder: '?' },
                ]
              },
              {
                display: '5y = ___ → y = ___',
                explanation: 'Despejamos y',
                gaps: [
                  { id: 'e', answer: '9', hint: '12 − 3 = ?', placeholder: '?' },
                  { id: 'f', answer: '9/5', hint: '9/5 = ?', placeholder: 'y' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: { x + 2y = 8  /  3x − y = 1 }',
            tutorIntro: 'Resuelve el sistema. Puedes usar sustitución o eliminación.',
            hints: [
              'Prueba el método de sustitución: despeja x de la primera ecuación.',
              'De la 1ª: x = 8 − 2y. Sustituye en la segunda: 3(8−2y) − y = 1.',
              '24 − 6y − y = 1 → 24 − 7y = 1 → 7y = 23 → y = 23/7... Hmm. O usa eliminación.',
              'Eliminación: multiplica la 2ª por 2 → (6x−2y=2). Suma con la 1ª: 7x=10 → x=10/7, y=23/7.',
            ],
            answer: 'x = 10/7, y = 23/7',
            solution: [
              { expression: 'Ecuación 1: x + 2y = 8', explanation: 'Multiplicamos por 1 (la dejamos igual).' },
              { expression: 'Ecuación 2: 3x − y = 1, multiplicamos por 2: 6x − 2y = 2', explanation: 'Buscamos cancelar y.' },
              { expression: 'Sumamos: (x+2y) + (6x−2y) = 8+2 → 7x = 10 → x = 10/7', explanation: 'Los y se cancelan.' },
              { expression: 'x=10/7 en ec.1: 10/7 + 2y = 8 → 2y = 46/7 → y = 23/7', explanation: 'Verificamos: ✓' },
            ]
          },
          {
            type: 'summary',
            title: 'Sistemas de Ecuaciones — ¡Completados!',
            points: [
              'Sustitución: despeja una variable y sustituye en la otra ecuación',
              'Eliminación: suma/resta múltiplos de las ecuaciones para cancelar una variable',
              'La solución (x,y) es el punto de intersección de las dos rectas',
              'Verifica SIEMPRE sustituyendo en ambas ecuaciones originales',
              'Si las rectas son paralelas → sin solución; si son la misma → infinitas soluciones',
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'vectores',
    title: 'Vectores y Geometría',
    emoji: '→',
    color: 'violet',
    description: 'Vectores en 2D, módulo y producto escalar',
    topics: [
      {
        id: 'vectores-2d',
        title: 'Vectores en el plano',
        steps: [
          {
            type: 'explanation',
            title: 'Vectores: dirección, sentido y magnitud',
            content: `Un vector v = (v₁, v₂) tiene dos componentes: horizontal y vertical.

Operaciones básicas:
  u + v = (u₁+v₁, u₂+v₂)     Suma componente a componente
  k·v  = (k·v₁, k·v₂)         Producto por escalar
  |v|  = √(v₁² + v₂²)          Módulo (longitud del vector)

Ejemplo: v = (3, 4)  →  |v| = √(9+16) = √25 = 5`,
            visual: 'vector-diagram',
            tutorMessage: 'Un vector es una flecha: importa dónde apunta y cuánto mide, pero no dónde empieza.',
            whyExplanation: 'Los vectores aparecen en física (fuerzas, velocidades), economía (variaciones multivariantes) y estadística (distancias en espacios de alta dimensión).',
          },
          {
            type: 'example',
            title: 'El tutor calcula con u=(2,3) y v=(−1,4)',
            tutorIntro: 'Voy a calcular la suma, la diferencia y los módulos de estos vectores.',
            steps: [
              {
                expression: 'u + v = (2+(−1), 3+4) = (1, 7)',
                explanation: 'Sumamos componente a componente. Primeras componentes: 2+(−1)=1. Segundas: 3+4=7.',
                whyExplanation: 'La suma vectorial es como combinar dos desplazamientos: primero muévete (2,3), luego (−1,4). El resultado es haber ido (1,7).',
              },
              {
                expression: 'u − v = (2−(−1), 3−4) = (3, −1)',
                explanation: 'Restamos componente a componente. Ojo: 2−(−1) = 2+1 = 3.',
                whyExplanation: 'u−v = u + (−v). Cambiar el signo de v invierte su dirección.',
              },
              {
                expression: '|u| = √(2² + 3²) = √(4+9) = √13 ≈ 3.61',
                explanation: 'El módulo es la longitud de la flecha. Usamos Pitágoras.',
                whyExplanation: 'El módulo mide la distancia del punto (0,0) al punto (2,3). Es el teorema de Pitágoras aplicado al vector.',
              },
              {
                expression: '|v| = √((−1)² + 4²) = √(1+16) = √17 ≈ 4.12',
                explanation: 'Para el módulo, los cuadrados siempre son positivos: (−1)² = 1.',
                whyExplanation: 'Importante: |−1|² = (−1)² = 1. El módulo siempre es no negativo.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: a=(1,−2) y b=(3,1)',
            tutorIntro: 'Calculamos las operaciones básicas.',
            steps: [
              {
                display: 'a + b = (1+3, −2+1) = (___, ___)',
                explanation: 'Suma componente a componente',
                gaps: [
                  { id: 'a', answer: '4', hint: '1+3 = ?', placeholder: '1ª comp.' },
                  { id: 'b', answer: '-1', hint: '−2+1 = ?', placeholder: '2ª comp.' },
                ]
              },
              {
                display: '|a| = √(1² + (−2)²) = √(___ + ___) = √___',
                explanation: 'Módulo de a',
                gaps: [
                  { id: 'c', answer: '1', hint: '1² = ?', placeholder: '1²' },
                  { id: 'd', answer: '4', hint: '(−2)² = ?', placeholder: '(-2)²' },
                  { id: 'e', answer: '5', hint: '1+4 = ?', placeholder: 'suma' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: p=(−3,4) y q=(1,−2)',
            tutorIntro: 'Calcula p+q, p−q, |p| y |q|.',
            hints: [
              'Suma: (−3+1, 4+(−2)) = (−2, 2)',
              'Diferencia: (−3−1, 4−(−2)) = (−4, 6)',
              '|p| = √((−3)²+4²) = √(9+16) = √25 = 5',
              '|q| = √(1²+(−2)²) = √(1+4) = √5',
            ],
            answer: 'p+q=(−2,2), p−q=(−4,6), |p|=5, |q|=√5',
            solution: [
              { expression: 'p + q = (−3+1, 4−2) = (−2, 2)', explanation: '' },
              { expression: 'p − q = (−3−1, 4−(−2)) = (−4, 6)', explanation: 'Cuidado: 4−(−2) = 4+2 = 6' },
              { expression: '|p| = √(9+16) = √25 = 5', explanation: 'Un número entero: (3,4,5) es terna pitagórica.' },
              { expression: '|q| = √(1+4) = √5 ≈ 2.24', explanation: '' },
            ]
          },
          {
            type: 'summary',
            title: 'Vectores — ¡Bien orientado!',
            points: [
              'Vector v = (v₁, v₂): dos componentes, es una flecha en el plano',
              'Suma: u+v = (u₁+v₁, u₂+v₂) — componente a componente',
              'Módulo: |v| = √(v₁²+v₂²) — longitud por Pitágoras',
              'Producto escalar: u·v = u₁v₁ + u₂v₂',
              'Vectores perpendiculares: u·v = 0',
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'funciones',
    title: 'Funciones',
    emoji: 'f(x)',
    color: 'indigo',
    description: 'Cuadrática, exponencial y función seno',
    topics: [
      {
        id: 'funcion-cuadratica',
        title: 'Función Cuadrática',
        steps: [
          {
            type: 'explanation',
            title: 'La parábola: f(x) = ax² + bx + c',
            content: `La función cuadrática forma una parábola. Sus características clave:

Vértice (punto más alto/bajo):
  x_v = −b / (2a)
  y_v = f(x_v)

Raíces (cortes con eje x): resuelve ax²+bx+c = 0
Eje de simetría: la recta vertical x = x_v

Si a > 0 → parábola abre hacia ARRIBA (mínimo)
Si a < 0 → parábola abre hacia ABAJO (máximo)`,
            visual: 'quadratic-grapher',
            tutorMessage: 'Mueve el slider "a" entre positivo y negativo para ver cómo se da la vuelta la parábola. Cambia "b" para desplazarla y "c" para subirla o bajarla.',
            whyExplanation: 'Las parábolas describen el movimiento de proyectiles, el beneficio máximo en economía, y las lentes ópticas. En el examen WU aparecen preguntas sobre vértice, raíces e intervalos de crecimiento.',
          },
          {
            type: 'example',
            title: 'El tutor analiza: f(x) = x² − 4x + 3',
            tutorIntro: 'Voy a encontrar el vértice, las raíces y si es mínimo o máximo.',
            steps: [
              {
                expression: 'a=1 > 0  →  parábola abre hacia arriba (mínimo)',
                explanation: 'El signo de a determina la apertura. Como a=1 es positivo, el vértice es un mínimo.',
                whyExplanation: 'Cuando x→±∞, ax² domina. Si a>0, f→+∞ en ambos extremos, así que el vértice es el punto más bajo.',
              },
              {
                expression: 'x_v = −b/(2a) = −(−4)/(2·1) = 4/2 = 2',
                explanation: 'El eje de simetría está en x=2. El vértice tiene coordenada x igual a 2.',
                whyExplanation: 'La fórmula x_v = −b/(2a) viene de completar el cuadrado: ax²+bx+c = a(x+b/2a)²+...',
              },
              {
                expression: 'y_v = f(2) = 2² − 4·2 + 3 = 4 − 8 + 3 = −1',
                explanation: 'Sustituimos x=2 en la función para obtener la altura del vértice.',
                whyExplanation: 'El vértice está sobre la curva, así que y_v = f(x_v) siempre.',
              },
              {
                expression: 'Vértice: V = (2, −1)',
                explanation: 'La parábola toca su punto más bajo en el punto (2, −1).',
                whyExplanation: 'Como el vértice está por debajo del eje x (y_v=−1<0), la parábola lo cruza en dos puntos: hay dos raíces.',
              },
              {
                expression: 'Raíces: Δ = 16−12 = 4  →  x = (4±2)/2  →  x₁=3, x₂=1',
                explanation: 'Usamos la fórmula cuadrática. Las raíces son x=1 y x=3.',
                whyExplanation: 'También se puede factorizar: x²−4x+3 = (x−1)(x−3) = 0 → x=1 o x=3.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: g(x) = −x² + 2x + 3',
            tutorIntro: 'Analizamos esta parábola con a=−1. Completa los huecos.',
            steps: [
              {
                display: 'a = ___, así que la parábola abre hacia ___',
                explanation: 'Lee el coeficiente de x² y determina la apertura',
                gaps: [
                  { id: 'a', answer: '-1', hint: 'El coeficiente de x² en −x²+2x+3 es...', placeholder: 'a' },
                  { id: 'b', answer: 'abajo', hint: 'Si a<0, la parábola...', placeholder: 'dirección' },
                ]
              },
              {
                display: 'x_v = −2 / (2·(−1)) = −2 / ___ = ___',
                explanation: 'Calcula el eje de simetría con x_v = −b/(2a)',
                gaps: [
                  { id: 'c', answer: '-2', hint: '2·(−1) = ?', placeholder: '2a' },
                  { id: 'd', answer: '1', hint: '−2/(−2) = ?', placeholder: 'x_v' },
                ]
              },
              {
                display: 'y_v = g(1) = −(1)² + 2(1) + 3 = ___ + ___ + 3 = ___',
                explanation: 'Sustituye x=1 en g(x)',
                gaps: [
                  { id: 'e', answer: '-1', hint: '−(1)² = ?', placeholder: '−1²' },
                  { id: 'f', answer: '2', hint: '2·1 = ?', placeholder: '2·1' },
                  { id: 'g', answer: '4', hint: '−1+2+3 = ?', placeholder: 'y_v' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: h(x) = 2x² − 8x + 6',
            tutorIntro: 'Encuentra el vértice, las raíces y la apertura de esta parábola.',
            hints: [
              'a=2>0 → parábola abre hacia arriba (mínimo en el vértice).',
              'x_v = −(−8)/(2·2) = 8/4 = 2',
              'y_v = h(2) = 2(4) − 8(2) + 6 = 8 − 16 + 6 = −2. Vértice: (2, −2)',
              'Raíces: Δ = 64 − 48 = 16. x = (8±4)/4 → x₁=3, x₂=1',
            ],
            answer: 'Vértice (2,−2), raíces x=1 y x=3, abre hacia arriba',
            solution: [
              { expression: 'a=2>0 → abre hacia arriba', explanation: 'El vértice será un mínimo.' },
              { expression: 'x_v = 8/4 = 2', explanation: 'x_v = −b/2a = −(−8)/(2·2)' },
              { expression: 'y_v = 2(4)−16+6 = −2 → Vértice (2,−2)', explanation: '' },
              { expression: 'Δ = 64−48 = 16 → x = (8±4)/4 → x₁=3, x₂=1', explanation: 'Verificación: h(1)=2−8+6=0 ✓' },
            ]
          },
          {
            type: 'summary',
            title: 'Función Cuadrática — ¡Dominada!',
            points: [
              'f(x) = ax² + bx + c es una parábola',
              'a>0 → mínimo (abre ↑)  |  a<0 → máximo (abre ↓)',
              'Vértice: x_v = −b/(2a),  y_v = f(x_v)',
              'Raíces: aplica la fórmula cuadrática o factoriza',
              'Eje de simetría: la recta vertical x = x_v',
            ]
          }
        ]
      },
      {
        id: 'funcion-exponencial',
        title: 'Función Exponencial',
        steps: [
          {
            type: 'explanation',
            title: 'Crecimiento y decaimiento exponencial',
            content: `La función exponencial: f(x) = a · bˣ  (b > 0, b ≠ 1)

Si b > 1 → crecimiento exponencial (crece sin límite)
Si 0 < b < 1 → decaimiento exponencial (decrece hacia 0)

La base natural: f(x) = eˣ  donde e ≈ 2.718...

Propiedades clave:
  f(0) = a · b⁰ = a  (punto de corte con eje y)
  Dominio: todos los reales  |  Recorrido: (0, +∞) si a>0`,
            visual: 'quadratic-grapher',
            tutorMessage: 'Cambia b con el slider para ver cómo b>1 da crecimiento y b<1 da decaimiento.',
            whyExplanation: 'El crecimiento exponencial aparece en: interés compuesto, crecimiento de poblaciones, propagación de virus, carga de un condensador...',
          },
          {
            type: 'example',
            title: 'El tutor analiza f(x) = 2 · 3ˣ',
            tutorIntro: 'Analizamos la función exponencial f(x) = 2·3ˣ paso a paso.',
            steps: [
              {
                expression: 'a = 2, b = 3. Como b=3>1 → crecimiento',
                explanation: 'Identificamos los parámetros. La base 3>1 nos dice que la función crece.',
                whyExplanation: 'Cada unidad que avanzamos en x, la función se multiplica por b=3: se hace tres veces mayor.',
              },
              {
                expression: 'f(0) = 2·3⁰ = 2·1 = 2',
                explanation: 'El punto de corte con el eje y siempre está en x=0.',
                whyExplanation: 'b⁰ = 1 para cualquier base b≠0. Así que f(0) = a siempre.',
              },
              {
                expression: 'f(1) = 2·3 = 6   f(2) = 2·9 = 18   f(−1) = 2/3',
                explanation: 'Calculamos algunos valores para ver el comportamiento.',
                whyExplanation: 'Nota: f(2)/f(1) = 18/6 = 3 = b. La razón entre valores consecutivos es siempre b.',
              },
              {
                expression: 'La recta y=0 (eje x) es asíntota horizontal',
                explanation: 'Cuando x→−∞, f(x)→0 pero nunca toca el eje x.',
                whyExplanation: 'bˣ>0 para todo x y todo b>0. La función nunca llega a cero ni se hace negativa.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: g(x) = 5 · (1/2)ˣ',
            tutorIntro: 'Analizamos esta función con b=1/2<1 (decaimiento).',
            steps: [
              {
                display: 'b = 1/2 ___ 1, así que hay ___',
                explanation: 'Determina si crece o decrece',
                gaps: [
                  { id: 'a', answer: '<', hint: '1/2 comparado con 1 es...', placeholder: '<,>,=' },
                  { id: 'b', answer: 'decaimiento', hint: 'b<1 implica...', placeholder: '?' },
                ]
              },
              {
                display: 'g(0) = 5 · (1/2)⁰ = 5 · ___ = ___',
                explanation: 'Calcula el punto de corte con el eje y',
                gaps: [
                  { id: 'c', answer: '1', hint: '(1/2)⁰ = ?', placeholder: '(1/2)⁰' },
                  { id: 'd', answer: '5', hint: '5·1 = ?', placeholder: 'g(0)' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: h(x) = 100 · (0.8)ˣ',
            tutorIntro: 'Analiza esta función y calcula h(0), h(1) y h(5).',
            hints: [
              'b = 0.8 < 1 → decaimiento (disminuye cada vez que x aumenta).',
              'h(0) = 100 · 0.8⁰ = 100 · 1 = 100.',
              'h(1) = 100 · 0.8 = 80.',
              'h(5) = 100 · (0.8)⁵ = 100 · 0.32768 ≈ 32.77.',
            ],
            answer: 'Decaimiento: h(0)=100, h(1)=80, h(5)≈32.77',
            solution: [
              { expression: 'b = 0.8 < 1 → decaimiento exponencial', explanation: 'Cada año se conserva el 80% del valor anterior.' },
              { expression: 'h(0) = 100', explanation: 'Valor inicial.' },
              { expression: 'h(1) = 100·0.8 = 80', explanation: 'Bajó un 20%.' },
              { expression: 'h(5) = 100·(0.8)⁵ ≈ 32.77', explanation: 'Tras 5 pasos, queda ≈ 32.77%.' },
            ]
          },
          {
            type: 'summary',
            title: 'Función Exponencial — ¡Comprendida!',
            points: [
              'f(x) = a·bˣ  con b>0, b≠1',
              'b>1 → crecimiento exponencial',
              '0<b<1 → decaimiento (la función se acerca a 0)',
              'f(0) = a (corte con eje y)',
              'Dominio: ℝ  |  Recorrido: (0,+∞) si a>0',
              'Asíntota horizontal: y = 0',
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'derivadas',
    title: 'Derivadas',
    emoji: "f'",
    color: 'orange',
    description: 'Concepto, reglas y aplicaciones',
    topics: [
      {
        id: 'concepto-derivada',
        title: 'Concepto de Derivada',
        steps: [
          {
            type: 'explanation',
            title: "La derivada: la pendiente en cada punto",
            content: `La derivada f'(x) mide cómo cambia f en el punto x.

Geométricamente: f'(x) = pendiente de la recta tangente en x

Reglas básicas de derivación:
  f(x) = k         →  f'(x) = 0         (constante)
  f(x) = xⁿ       →  f'(x) = n·xⁿ⁻¹   (potencia)
  f(x) = eˣ       →  f'(x) = eˣ        (exponencial)
  f(x) = ln(x)    →  f'(x) = 1/x       (logaritmo)

  [f + g]' = f' + g'   [k·f]' = k·f'    (linealidad)`,
            visual: 'derivative-canvas',
            tutorMessage: 'Observa la animación: la recta roja es la tangente a la curva. Su pendiente cambia en cada punto — eso es la derivada.',
            whyExplanation: "La derivada mide velocidad instantánea, tasa de cambio, y permite encontrar máximos y mínimos. Es fundamental en optimización económica y científica.",
          },
          {
            type: 'example',
            title: "El tutor deriva: f(x) = 3x⁴ − 2x² + 5x − 7",
            tutorIntro: "Aplico las reglas de derivación término a término.",
            steps: [
              {
                expression: "[3x⁴]' = 3 · 4 · x³ = 12x³",
                explanation: 'Regla de la potencia: [xⁿ]\'=n·xⁿ⁻¹. El coeficiente 3 se multiplica.',
                whyExplanation: "La regla de la potencia [xⁿ]'=n·xⁿ⁻¹ se obtiene de la definición de derivada como límite de cocientes incrementales.",
              },
              {
                expression: "[−2x²]' = −2 · 2 · x¹ = −4x",
                explanation: 'El coeficiente −2 permanece. Bajamos el exponente: 2·x²⁻¹ = 2x.',
                whyExplanation: 'La constante delante nunca desaparece al derivar. Solo se multiplica.',
              },
              {
                expression: "[5x]' = 5 · 1 · x⁰ = 5",
                explanation: 'x = x¹, así que [x¹]\' = 1·x⁰ = 1. El coeficiente 5 permanece.',
                whyExplanation: 'La recta f(x)=5x tiene pendiente constante 5. Su derivada es 5.',
              },
              {
                expression: "[−7]' = 0",
                explanation: 'Las constantes tienen derivada cero. No cambian, no tienen pendiente.',
                whyExplanation: 'Una constante es una recta horizontal: pendiente 0 en todo punto.',
              },
              {
                expression: "f'(x) = 12x³ − 4x + 5",
                explanation: 'Juntamos todos los términos. La derivada de f es esta nueva función.',
                whyExplanation: "f'(x) nos dice en cada punto x cuál es la pendiente de la tangente a f.",
              },
            ]
          },
          {
            type: 'guided',
            title: "Juntos: g(x) = x³ − 6x² + 9x",
            tutorIntro: "Derivamos este polinomio. ¡Término a término!",
            steps: [
              {
                display: "[x³]' = ___ · x^___",
                explanation: 'Aplica la regla de la potencia al término x³',
                gaps: [
                  { id: 'a', answer: '3', hint: 'Baja el exponente: el 3 se convierte en coeficiente', placeholder: 'n' },
                  { id: 'b', answer: '2', hint: 'Nuevo exponente = 3−1 = ?', placeholder: 'n-1' },
                ]
              },
              {
                display: "[−6x²]' = −6 · ___ · x = ___x",
                explanation: 'Deriva el segundo término',
                gaps: [
                  { id: 'c', answer: '2', hint: 'El exponente de x² es...', placeholder: 'exp.' },
                  { id: 'd', answer: '-12', hint: '−6·2 = ?', placeholder: 'coef.' },
                ]
              },
              {
                display: "[9x]' = ___",
                explanation: 'Deriva el último término',
                gaps: [
                  { id: 'e', answer: '9', hint: '[9x]\' = 9·[x]\' = 9·1 = ?', placeholder: "g'(x) último" },
                ]
              },
              {
                display: "g'(x) = ___ − 12x + 9",
                explanation: 'Junta todo',
                gaps: [
                  { id: 'f', answer: '3x²', hint: 'El primer término derivado era...', placeholder: '1er término' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: "Tu turno: h(x) = 2x⁵ − x³ + 4x − 3",
            tutorIntro: "Deriva este polinomio aplicando las reglas.",
            hints: [
              'Deriva término a término. Empieza con [2x⁵]\'.',
              "[2x⁵]' = 2·5·x⁴ = 10x⁴",
              "[−x³]' = −3x²  (coeficiente −1)",
              "[4x]' = 4,  [−3]' = 0. Junta todo.",
            ],
            answer: "h'(x) = 10x⁴ − 3x² + 4",
            solution: [
              { expression: "[2x⁵]' = 10x⁴", explanation: '2·5=10, exponente 5−1=4' },
              { expression: "[−x³]' = −3x²", explanation: 'coef. −1, exp. 3−1=2' },
              { expression: "[4x]' = 4", explanation: '4·1·x⁰ = 4' },
              { expression: "[−3]' = 0", explanation: 'Constante → derivada 0' },
              { expression: "h'(x) = 10x⁴ − 3x² + 4", explanation: '¡Verificar evaluando en un punto!' },
            ]
          },
          {
            type: 'summary',
            title: "Derivadas — ¡En tu poder!",
            points: [
              "f'(x) = pendiente de la tangente en x (tasa de cambio instantánea)",
              "[xⁿ]' = n·xⁿ⁻¹  (regla de la potencia — la más usada)",
              "[constante]' = 0   [k·f]' = k·f'   [f+g]' = f'+g'",
              "f'>0 → f crece  |  f'<0 → f decrece  |  f'=0 → posible extremo",
              "Máximo o mínimo: f'(x₀)=0 y estudiar el signo de f' alrededor",
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'integrales',
    title: 'Integrales y Áreas',
    emoji: '∫',
    color: 'red',
    description: 'Integral definida e indefinida, áreas',
    topics: [
      {
        id: 'integral-definida',
        title: 'Integral Definida',
        steps: [
          {
            type: 'explanation',
            title: 'La integral: área bajo la curva',
            content: `La integral definida ∫ₐᵇ f(x) dx calcula el área entre f y el eje x.

Antiderivadas (primitivas) básicas:
  ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C    (n ≠ −1)
  ∫ eˣ dx = eˣ + C
  ∫ 1/x dx = ln|x| + C

Teorema fundamental del cálculo:
  ∫ₐᵇ f(x) dx = F(b) − F(a)   (F es primitiva de f)`,
            visual: 'derivative-canvas',
            tutorMessage: 'La integral suma infinitas tiras infinitamente delgadas bajo la curva. ¡Es lo opuesto a derivar!',
            whyExplanation: 'La integral calcula áreas, volúmenes, trabajo mecánico, probabilidades acumuladas... Es tan fundamental como la derivada.',
          },
          {
            type: 'example',
            title: 'El tutor calcula ∫₀² (x² + 1) dx',
            tutorIntro: 'Aplico el Teorema Fundamental del Cálculo.',
            steps: [
              {
                expression: 'Primitiva de x²+1: F(x) = x³/3 + x + C',
                explanation: 'Integro término a término: ∫x²dx = x³/3, ∫1dx = x.',
                whyExplanation: 'La primitiva es lo opuesto de derivar. Verifica: F\'(x) = 3x²/3 + 1 = x² + 1 ✓',
              },
              {
                expression: '∫₀² (x²+1) dx = [x³/3 + x]₀²',
                explanation: 'Los límites de integración son 0 (inferior) y 2 (superior).',
                whyExplanation: 'Los corchetes [...] significa evaluar F(b)−F(a). La C desaparece siempre.',
              },
              {
                expression: 'F(2) = 8/3 + 2 = 8/3 + 6/3 = 14/3',
                explanation: 'Evaluamos F en el límite superior.',
                whyExplanation: 'Sustituimos x=2: (2)³/3 + 2 = 8/3 + 2.',
              },
              {
                expression: 'F(0) = 0/3 + 0 = 0',
                explanation: 'Evaluamos en el límite inferior.',
                whyExplanation: '(0)³/3 + 0 = 0.',
              },
              {
                expression: '∫₀² (x²+1) dx = F(2)−F(0) = 14/3 − 0 = 14/3 ≈ 4.67',
                explanation: 'El área bajo la curva entre x=0 y x=2 es 14/3 unidades².',
                whyExplanation: 'Si la función está por encima del eje x en todo el intervalo, la integral siempre es positiva.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: ∫₁³ 2x dx',
            tutorIntro: 'Calculamos esta integral paso a paso.',
            steps: [
              {
                display: 'Primitiva de 2x: F(x) = ___ + C',
                explanation: '∫2x dx = 2·∫x dx',
                gaps: [
                  { id: 'a', answer: 'x²', hint: '∫x dx = x²/2, luego 2·(x²/2) = ?', placeholder: 'F(x)' },
                ]
              },
              {
                display: 'F(3) = 3² = ___ y F(1) = 1² = ___',
                explanation: 'Evaluamos la primitiva en ambos límites',
                gaps: [
                  { id: 'b', answer: '9', hint: '3² = ?', placeholder: 'F(3)' },
                  { id: 'c', answer: '1', hint: '1² = ?', placeholder: 'F(1)' },
                ]
              },
              {
                display: '∫₁³ 2x dx = F(3)−F(1) = ___−___ = ___',
                explanation: 'Calculamos el resultado final',
                gaps: [
                  { id: 'd', answer: '9', hint: 'F(3) = ?', placeholder: 'F(3)' },
                  { id: 'e', answer: '1', hint: 'F(1) = ?', placeholder: 'F(1)' },
                  { id: 'f', answer: '8', hint: '9−1 = ?', placeholder: 'resultado' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: ∫₀¹ (3x² − 2x + 1) dx',
            tutorIntro: 'Calcula esta integral definida.',
            hints: [
              'Primitiva de 3x²: ∫3x²dx = 3·x³/3 = x³',
              'Primitiva de −2x: ∫−2x dx = −x²',
              'Primitiva de 1: ∫1 dx = x',
              'F(x) = x³ − x² + x. Evalúa F(1)−F(0).',
            ],
            answer: '∫₀¹ = F(1)−F(0) = (1−1+1)−0 = 1',
            solution: [
              { expression: 'F(x) = x³ − x² + x', explanation: 'Primitivamos término a término.' },
              { expression: 'F(1) = 1 − 1 + 1 = 1', explanation: '' },
              { expression: 'F(0) = 0', explanation: '' },
              { expression: '∫₀¹ = 1 − 0 = 1', explanation: 'El área bajo la curva es exactamente 1.' },
            ]
          },
          {
            type: 'summary',
            title: 'Integrales — ¡El área bajo control!',
            points: [
              '∫f(x)dx = F(x)+C donde F\'(x) = f(x) (primitiva)',
              '∫xⁿdx = xⁿ⁺¹/(n+1)+C  (n≠−1)',
              '∫ₐᵇ f(x)dx = F(b)−F(a)  (Teorema Fundamental)',
              'La integral definida calcula el área (con signo) bajo la curva',
              'Si f(x)>0 en [a,b] → integral > 0 (área por encima del eje x)',
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'financiera',
    title: 'Matemática Financiera',
    emoji: '%',
    color: 'yellow',
    description: 'Porcentajes, interés y proporciones',
    topics: [
      {
        id: 'porcentajes',
        title: 'Porcentajes y Cambios',
        steps: [
          {
            type: 'explanation',
            title: 'Porcentajes: el lenguaje del cambio',
            content: `Un porcentaje p% significa p/100 (por cada cien).

Operaciones fundamentales:
  p% de A  =  A · p/100

Variación porcentual (cambio relativo):
  Δ% = (Valor_final − Valor_inicial) / Valor_inicial · 100

Factor de variación:
  +20%  →  multiplicar por 1.20
  −15%  →  multiplicar por 0.85

¡Trampa frecuente! +20% y luego −20% NO vuelve al original:
  100 · 1.20 · 0.80 = 96 ≠ 100`,
            visual: 'quadratic-grapher',
            tutorMessage: 'Los porcentajes son multiplicaciones. Memoriza: +p% equivale a ×(1+p/100). Es la clave de todo.',
            whyExplanation: 'En el examen WU aparecen ejercicios de IVA, descuentos encadenados, inflación acumulada e interés compuesto. Todos se resuelven con factores de variación.',
          },
          {
            type: 'example',
            title: 'El tutor resuelve problemas de porcentaje',
            tutorIntro: 'Resuelvo tres tipos clásicos de problemas con porcentajes.',
            steps: [
              {
                expression: '¿El 35% de 240? → 240 · 0.35 = 84',
                explanation: 'Multiplicamos directamente. 35% = 0.35.',
                whyExplanation: 'p% = p/100. Así 35% = 35/100 = 0.35. Más rápido que dividir entre 100 y multiplicar por 35.',
              },
              {
                expression: '¿Qué porcentaje es 60 de 400? → 60/400 = 0.15 = 15%',
                explanation: 'Dividimos el valor entre el total y multiplicamos por 100.',
                whyExplanation: 'Pregunta: ¿60 es el q% de 400? → q = 60·100/400 = 15%',
              },
              {
                expression: 'Un precio baja un 25%. Si costaba €80, ¿cuánto cuesta ahora?',
                explanation: '−25% → ×0.75 → 80 · 0.75 = €60',
                whyExplanation: 'Factor de variación: 1 − 25/100 = 0.75. Multiplicar por 0.75 reduce en un 25%.',
              },
              {
                expression: 'Si €60 es el precio tras bajar un 25%, ¿cuál era el precio original?',
                explanation: '60 = Original · 0.75  →  Original = 60 / 0.75 = €80',
                whyExplanation: 'Para "deshacer" un porcentaje, dividimos en vez de multiplicar por el factor de variación.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: problemas de porcentaje',
            tutorIntro: 'Resolvemos juntos estos ejercicios típicos de WU.',
            steps: [
              {
                display: 'Sube un 30% el precio de €250. Nuevo precio = 250 · ___ = ___',
                explanation: 'Subida del 30% → factor de variación',
                gaps: [
                  { id: 'a', answer: '1.3', hint: '+30% → factor = 1 + 30/100 = ?', placeholder: 'factor' },
                  { id: 'b', answer: '325', hint: '250 · 1.3 = ?', placeholder: 'nuevo precio €' },
                ]
              },
              {
                display: 'Variación %: de 80 a 100 → Δ% = (___−80)/80 · 100 = ___% ',
                explanation: 'Calcula el cambio porcentual de 80 a 100',
                gaps: [
                  { id: 'c', answer: '100', hint: 'El valor final es...', placeholder: 'V_final' },
                  { id: 'd', answer: '25', hint: '20/80 · 100 = ?', placeholder: 'Δ%' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: interés compuesto',
            tutorIntro: 'Inviertes €2000 a un interés del 4% anual compuesto. ¿Cuánto tienes tras 3 años?',
            hints: [
              'Interés compuesto: el interés del año anterior genera interés nuevo.',
              'Cada año se multiplica por 1.04 (factor de variación de +4%).',
              'Tras 3 años: 2000 · (1.04)³',
              '(1.04)³ = 1.124864. Así que 2000 · 1.124864 ≈ 2249.73',
            ],
            answer: '€2249.73 tras 3 años al 4% compuesto',
            solution: [
              { expression: 'Factor por año: 1 + 4/100 = 1.04', explanation: 'Cada año el capital se multiplica por 1.04.' },
              { expression: 'Tras 3 años: C = 2000 · (1.04)³', explanation: 'Se aplica el factor 3 veces.' },
              { expression: '(1.04)³ = 1.124864', explanation: '1.04·1.04·1.04 = 1.124864' },
              { expression: 'C = 2000 · 1.124864 ≈ €2249.73', explanation: 'Los €249.73 son el interés total acumulado.' },
            ]
          },
          {
            type: 'summary',
            title: 'Matemática Financiera — ¡Al día!',
            points: [
              'p% de A = A · (p/100)',
              'Variación%: (final−inicial)/inicial · 100',
              '+p% → factor 1+p/100  |  −p% → factor 1−p/100',
              'Interés compuesto: C = C₀ · (1+r)ⁿ (r=tasa, n=años)',
              '¡Cuidado! +20% y luego −20% ≠ 0%',
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'estadistica',
    title: 'Estadística Descriptiva',
    emoji: 'x̄',
    color: 'teal',
    description: 'Media, varianza, distribuciones',
    topics: [
      {
        id: 'medidas-centrales',
        title: 'Media, Mediana y Moda',
        steps: [
          {
            type: 'explanation',
            title: 'Medidas de tendencia central',
            content: `Dado un conjunto de datos {x₁, x₂, ..., xₙ}:

Media (promedio): x̄ = (x₁+x₂+...+xₙ) / n = Σxᵢ/n

Mediana: el valor central al ordenar los datos
  • n impar → posición (n+1)/2
  • n par → promedio de posiciones n/2 y n/2+1

Moda: el valor que más se repite

Varianza: σ² = Σ(xᵢ−x̄)² / n
Desviación típica: σ = √(σ²)`,
            visual: 'histogram',
            tutorMessage: 'La media es sensible a valores extremos (outliers), la mediana no. Por eso en salarios se usa la mediana.',
            whyExplanation: 'La media, mediana y moda resumen grandes conjuntos de datos en un solo número. La varianza mide cuánto se dispersan los datos alrededor de la media.',
          },
          {
            type: 'example',
            title: 'El tutor analiza: {4, 7, 2, 9, 4, 6, 4}',
            tutorIntro: 'Calculo todas las medidas descriptivas para este conjunto.',
            steps: [
              {
                expression: 'Media: x̄ = (4+7+2+9+4+6+4)/7 = 36/7 ≈ 5.14',
                explanation: 'Sumamos todos los valores y dividimos entre n=7.',
                whyExplanation: 'La media es el "centro de gravedad" de los datos.',
              },
              {
                expression: 'Ordenados: {2, 4, 4, 4, 6, 7, 9} → Mediana = 4',
                explanation: 'n=7 (impar) → posición central = (7+1)/2 = 4ª. El 4º valor ordenado es 4.',
                whyExplanation: 'Con n=7, hay 3 valores a cada lado del central. La posición 4 es la mediana.',
              },
              {
                expression: 'Moda = 4 (aparece 3 veces)',
                explanation: 'El valor 4 se repite más que ningún otro (7 aparece 1 vez, 9 aparece 1 vez...).',
                whyExplanation: 'La moda es la que "manda" en frecuencia. Puede haber varios modas si dos valores empatan.',
              },
              {
                expression: 'σ² = [(4−5.14)²+(7−5.14)²+...+4 términos más]/7 ≈ 4.12',
                explanation: 'Calculamos la distancia cuadrática de cada dato a la media.',
                whyExplanation: 'Elevamos al cuadrado para que distancias positivas y negativas no se anulen.',
              },
              {
                expression: 'σ = √4.12 ≈ 2.03',
                explanation: 'La desviación típica está en las mismas unidades que los datos originales.',
                whyExplanation: 'σ≈2 significa que los datos se alejan de la media unos 2 puntos de promedio.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: {3, 8, 5, 8, 6}',
            tutorIntro: 'Calculamos las medidas descriptivas.',
            steps: [
              {
                display: 'Media: x̄ = (3+8+5+8+6) / ___ = ___/5 = ___',
                explanation: 'Suma de valores y divide entre n',
                gaps: [
                  { id: 'a', answer: '5', hint: '¿Cuántos datos hay?', placeholder: 'n' },
                  { id: 'b', answer: '30', hint: '3+8+5+8+6 = ?', placeholder: 'suma' },
                  { id: 'c', answer: '6', hint: '30/5 = ?', placeholder: 'x̄' },
                ]
              },
              {
                display: 'Ordenados: {3,5,6,8,8} → Mediana = posición ___ = ___',
                explanation: 'n=5, posición central = (5+1)/2 = 3',
                gaps: [
                  { id: 'd', answer: '3', hint: '(5+1)/2 = ?', placeholder: 'posición' },
                  { id: 'e', answer: '6', hint: '3er valor en {3,5,6,8,8} es...', placeholder: 'mediana' },
                ]
              },
              {
                display: 'Moda = ___ (aparece ___ veces)',
                explanation: 'El valor que más se repite',
                gaps: [
                  { id: 'f', answer: '8', hint: '8 aparece en posiciones 4 y 5', placeholder: 'moda' },
                  { id: 'g', answer: '2', hint: '¿Cuántas veces aparece el 8?', placeholder: 'veces' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: {10, 4, 7, 10, 5, 8, 10, 6}',
            tutorIntro: 'Calcula la media, mediana y moda de estos datos.',
            hints: [
              'Suma: 10+4+7+10+5+8+10+6 = 60. Media = 60/8 = 7.5',
              'Ordenados: {4,5,6,7,8,10,10,10}. n=8 (par) → mediana = promedio de posiciones 4ª y 5ª.',
              'Posición 4ª = 7, posición 5ª = 8. Mediana = (7+8)/2 = 7.5',
              'El 10 aparece 3 veces. Moda = 10.',
            ],
            answer: 'Media=7.5, Mediana=7.5, Moda=10',
            solution: [
              { expression: 'x̄ = 60/8 = 7.5', explanation: 'Suma = 60, n = 8.' },
              { expression: 'Mediana = (7+8)/2 = 7.5', explanation: 'n par: promedio de los dos centrales.' },
              { expression: 'Moda = 10 (aparece 3 veces)', explanation: '10 es el más frecuente.' },
            ]
          },
          {
            type: 'summary',
            title: 'Estadística — ¡Los datos bajo control!',
            points: [
              'Media x̄ = Σxᵢ/n (sensible a extremos)',
              'Mediana: valor central tras ordenar (robusta a extremos)',
              'Moda: el más frecuente (puede haber varias modas)',
              'Varianza σ² = Σ(xᵢ−x̄)²/n  |  Desviación σ = √(σ²)',
              'n par → mediana = promedio de los dos valores centrales',
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'probabilidad',
    title: 'Probabilidad y Binomial',
    emoji: 'P(X)',
    color: 'pink',
    description: 'Probabilidad clásica y distribución binomial',
    topics: [
      {
        id: 'probabilidad-clasica',
        title: 'Probabilidad Clásica',
        steps: [
          {
            type: 'explanation',
            title: 'Probabilidad: ¿qué tan probable es?',
            content: `La probabilidad mide la chance de un evento.

Definición clásica (Laplace):
  P(A) = casos_favorables / casos_totales

Propiedades fundamentales:
  0 ≤ P(A) ≤ 1
  P(Ω) = 1  (evento seguro)
  P(∅) = 0  (evento imposible)
  P(A') = 1 − P(A)  (complementario)

Eventos independientes: P(A∩B) = P(A) · P(B)
Regla de la suma: P(A∪B) = P(A)+P(B)−P(A∩B)`,
            visual: 'venn-diagram',
            tutorMessage: 'Los diagramas de Venn son perfectos para visualizar probabilidades de eventos combinados.',
            whyExplanation: 'La probabilidad es la base de la toma de decisiones bajo incertidumbre: seguros, inversiones, medicina, machine learning...',
          },
          {
            type: 'example',
            title: 'El tutor: dado de seis caras',
            tutorIntro: 'Calculamos distintas probabilidades al lanzar un dado justo.',
            steps: [
              {
                expression: 'P(número par) = P({2,4,6}) = 3/6 = 1/2',
                explanation: 'Hay 3 casos favorables (2,4,6) y 6 casos totales (1,2,3,4,5,6).',
                whyExplanation: 'El dado es "justo" → cada cara tiene la misma probabilidad 1/6.',
              },
              {
                expression: 'P(mayor que 4) = P({5,6}) = 2/6 = 1/3',
                explanation: 'Solo 5 y 6 son mayores que 4.',
                whyExplanation: '5/6 > 4, así que 5 y 6 son los casos favorables. 2 de 6.',
              },
              {
                expression: "P(par o mayor que 4) = P({2,4,5,6}) = 4/6 = 2/3",
                explanation: 'Unimos los dos eventos. El 6 está en ambos pero lo contamos una sola vez.',
                whyExplanation: 'P(A∪B) = P(A)+P(B)−P(A∩B) = 3/6+2/6−1/6 = 4/6. El 6 es par Y mayor que 4.',
              },
              {
                expression: "P(no par) = 1 − P(par) = 1 − 1/2 = 1/2",
                explanation: 'El complementario es más fácil: si P(par)=1/2, P(impar)=1−1/2=1/2.',
                whyExplanation: 'Siempre que P(A) sea difícil, calcula P(A\'). Luego P(A) = 1−P(A\').',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: urna con bolas',
            tutorIntro: 'Una urna tiene 3 bolas rojas, 4 azules y 2 verdes (9 en total). Sacamos una al azar.',
            steps: [
              {
                display: 'P(roja) = ___ / ___ = ___',
                explanation: '¿Cuántas rojas y cuántas totales?',
                gaps: [
                  { id: 'a', answer: '3', hint: '¿Cuántas bolas rojas hay?', placeholder: 'favorables' },
                  { id: 'b', answer: '9', hint: '3+4+2 = total', placeholder: 'totales' },
                  { id: 'c', answer: '1/3', hint: '3/9 simplificado = ?', placeholder: 'P(roja)' },
                ]
              },
              {
                display: 'P(no azul) = 1 − P(azul) = 1 − ___ = ___',
                explanation: 'Usa el complementario',
                gaps: [
                  { id: 'd', answer: '4/9', hint: 'P(azul) = 4/9', placeholder: 'P(azul)' },
                  { id: 'e', answer: '5/9', hint: '1 − 4/9 = ?', placeholder: 'P(no azul)' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: baraja de 52 cartas',
            tutorIntro: 'Extraemos una carta al azar. Calcula: P(as), P(corazón), P(as de corazón), P(as o corazón).',
            hints: [
              'Hay 52 cartas en total. Hay 4 ases (uno por palo).',
              'P(as) = 4/52 = 1/13. Hay 13 corazones.',
              'P(corazón) = 13/52 = 1/4. El as de corazón: 1 carta.',
              'P(as∪corazón) = P(as)+P(corazón)−P(as∩corazón) = 4/52+13/52−1/52 = 16/52 = 4/13',
            ],
            answer: 'P(as)=1/13, P(corazón)=1/4, P(as∩corazón)=1/52, P(as∪corazón)=4/13',
            solution: [
              { expression: 'P(as) = 4/52 = 1/13', explanation: '4 ases en 52 cartas.' },
              { expression: 'P(corazón) = 13/52 = 1/4', explanation: '13 cartas de corazón.' },
              { expression: 'P(as de corazón) = 1/52', explanation: 'Solo existe un as de corazón.' },
              { expression: 'P(as∪corazón) = 4/52+13/52−1/52 = 16/52 = 4/13', explanation: 'Usamos P(A∪B) = P(A)+P(B)−P(A∩B).' },
            ]
          },
          {
            type: 'summary',
            title: 'Probabilidad — ¡Las chances claras!',
            points: [
              'P(A) = casos favorables / casos totales (para espacios uniformes)',
              '0 ≤ P(A) ≤ 1  |  P(A\') = 1−P(A)',
              'P(A∪B) = P(A)+P(B)−P(A∩B)',
              'Independientes: P(A∩B) = P(A)·P(B)',
              'Truco: calcula el complementario cuando sea más fácil',
            ]
          }
        ]
      },
      {
        id: 'binomial',
        title: 'Distribución Binomial',
        steps: [
          {
            type: 'explanation',
            title: 'X ~ B(n, p): n intentos, probabilidad p',
            content: `La distribución binomial modela n ensayos independientes donde cada uno tiene probabilidad p de éxito.

Fórmula: P(X=k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ

donde C(n,k) = n! / (k! · (n−k)!)  (combinaciones)

Parámetros:
  n = número de ensayos
  p = probabilidad de éxito en cada ensayo
  k = número de éxitos (k = 0, 1, ..., n)

Media: μ = n·p
Varianza: σ² = n·p·(1−p)`,
            visual: 'histogram',
            tutorMessage: 'Mueve los sliders n y p para ver cómo cambia la distribución. ¿Cuándo es simétrica? ¿Cuándo se inclina?',
            whyExplanation: 'La binomial aparece en: control de calidad (defectos en una línea), medicina (efectividad de un tratamiento), encuestas... Siempre que tengas n pruebas independientes con dos resultados posibles.',
          },
          {
            type: 'example',
            title: 'El tutor: 5 lanzamientos de moneda',
            tutorIntro: 'Lanzamos una moneda 5 veces. X = número de caras. X~B(5, 0.5). Calculo varias probabilidades.',
            steps: [
              {
                expression: 'P(X=3) = C(5,3) · (0.5)³ · (0.5)² = 10 · 0.125 · 0.25 = 0.3125',
                explanation: 'Exactamente 3 caras en 5 lanzamientos. C(5,3)=10 formas de elegir cuáles 3.',
                whyExplanation: 'C(5,3) = 5!/(3!·2!) = (5·4)/(2·1) = 10. Hay 10 formas distintas de obtener 3 caras en 5 lanzamientos.',
              },
              {
                expression: 'P(X=0) = C(5,0) · (0.5)⁰ · (0.5)⁵ = 1 · 1 · 1/32 = 0.03125',
                explanation: 'Ninguna cara (todas cruces). Solo hay 1 forma de que salgan 5 cruces.',
                whyExplanation: 'C(5,0)=1 (hay solo una forma de elegir 0 objetos de 5).',
              },
              {
                expression: 'μ = n·p = 5·0.5 = 2.5',
                explanation: 'En promedio, esperamos 2.5 caras en 5 lanzamientos.',
                whyExplanation: 'La media nos dice el valor "esperado" a largo plazo.',
              },
              {
                expression: 'σ² = n·p·(1−p) = 5·0.5·0.5 = 1.25,  σ ≈ 1.12',
                explanation: 'La varianza mide la dispersión típica de resultados.',
                whyExplanation: 'Con σ≈1.12, la mayoría de resultados están entre 2.5−1.12≈1.4 y 2.5+1.12≈3.6.',
              },
            ]
          },
          {
            type: 'guided',
            title: 'Juntos: X ~ B(4, 0.3)',
            tutorIntro: 'Lanzamos 4 dados y contamos los seises (p=1/6≈0.167). Usamos p=0.3 para simplificar.',
            steps: [
              {
                display: 'C(4,2) = 4! / (2! · 2!) = ___ / ___ = ___',
                explanation: 'Calculamos el coeficiente binomial para k=2',
                gaps: [
                  { id: 'a', answer: '24', hint: '4! = 4·3·2·1 = ?', placeholder: '4!' },
                  { id: 'b', answer: '4', hint: '2!·2! = 2·2 = ?', placeholder: '2!·2!' },
                  { id: 'c', answer: '6', hint: '24/4 = ?', placeholder: 'C(4,2)' },
                ]
              },
              {
                display: 'P(X=2) = ___ · (0.3)² · (0.7)² = 6 · ___ · ___ ≈ ___',
                explanation: 'Calcula P(exactamente 2 éxitos)',
                gaps: [
                  { id: 'd', answer: '6', hint: 'C(4,2) = ?', placeholder: 'C(4,2)' },
                  { id: 'e', answer: '0.09', hint: '(0.3)² = ?', placeholder: '0.3²' },
                  { id: 'f', answer: '0.49', hint: '(0.7)² = ?', placeholder: '0.7²' },
                  { id: 'g', answer: '0.2646', hint: '6·0.09·0.49 = ?', placeholder: 'P(X=2)' },
                ]
              },
            ]
          },
          {
            type: 'solo',
            title: 'Tu turno: X ~ B(6, 0.4)',
            tutorIntro: 'Calcula P(X=0), P(X=1) y la media μ.',
            hints: [
              'P(X=0) = C(6,0)·(0.4)⁰·(0.6)⁶ = 1·1·(0.6)⁶',
              '(0.6)⁶ = 0.046656. P(X=0) ≈ 0.0467',
              'P(X=1) = C(6,1)·(0.4)¹·(0.6)⁵ = 6·0.4·0.07776 ≈ 0.1866',
              'Media: μ = n·p = 6·0.4 = 2.4',
            ],
            answer: 'P(X=0)≈0.0467, P(X=1)≈0.1866, μ=2.4',
            solution: [
              { expression: 'P(X=0) = (0.6)⁶ ≈ 0.0467', explanation: 'C(6,0)=1, todo sin éxito.' },
              { expression: 'P(X=1) = 6·0.4·(0.6)⁵ = 6·0.4·0.07776 ≈ 0.1866', explanation: '6 formas de tener exactamente 1 éxito.' },
              { expression: 'μ = 6·0.4 = 2.4', explanation: 'Esperamos 2.4 éxitos de media.' },
            ]
          },
          {
            type: 'summary',
            title: 'Distribución Binomial — ¡Calculada!',
            points: [
              'X~B(n,p): n ensayos independientes, p=prob. de éxito',
              'P(X=k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ',
              'C(n,k) = n! / (k!·(n−k)!) — combinaciones sin repetición',
              'Media μ = n·p  |  Varianza σ² = n·p·(1−p)',
              'Suma de todas las probabilidades: ΣP(X=k) = 1',
            ]
          }
        ]
      }
    ]
  },
]
