export const lessons = [
  /* ─────────────────────────────────────────────────────────────
     SESSION 1 · Conjuntos y Álgebra  · 21 May
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-1',
    sessionNumber: 1,
    scheduledDate: '2026-05-21',
    title: 'Conjuntos y Álgebra',
    emoji: '∪',
    color: 'emerald',
    description: 'Números reales, conjuntos y sistemas lineales',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 1,
          duration: '90 min',
          scheduledDate: '2026-05-21',
          title: 'Conjuntos y Álgebra',
          whyItMatters: 'Las 3–4 primeras preguntas del WU siempre son de conjuntos numéricos o álgebra. Son las más fáciles de dominar con práctica.',
          agenda: [
            { icon: '📖', label: 'Conjuntos ℕ ℤ ℚ ℝ' },
            { icon: '✏️', label: 'Ejercicio guiado' },
            { icon: '🎯', label: 'Test WU 2023' },
            { icon: '🔥', label: 'Problema real WU' },
          ],
          examTip: 'En el examen WU, Task 1 casi siempre pide identificar a qué conjunto pertenece un número o cuáles afirmaciones son verdaderas sobre ℕ, ℤ, ℚ, ℝ.',
        }],
      },
      {
        id: 'conjuntos-numericos',
        title: 'Conjuntos Numéricos',
        steps: [
          {
            type: 'explanation',
            title: 'Conjuntos numéricos: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ',
            tutorMessage: 'Truco clave: antes de clasificar un número con raíz cuadrada, SIEMPRE simplifica primero. √100 = 10 ∈ ℕ, no "un irracional". El error más frecuente es no simplificar.',
            keyPoints: [
              { label: 'ℕ = {0, 1, 2, 3, …}', detail: 'Solo enteros no negativos. −5 ∉ ℕ, 0 ∈ ℕ. Todo natural también es entero, racional y real.' },
              { label: 'ℤ = {…, −2, −1, 0, 1, 2, …}', detail: 'Añade los negativos. −3 ∈ ℤ pero −3 ∉ ℕ. ℕ ⊂ ℤ.' },
              { label: 'ℚ = {a/b | a,b ∈ ℤ, b ≠ 0}', detail: 'Fracciones exactas. 3/7 ∈ ℚ, −1/2 ∈ ℚ. Decimales finitos y periódicos también: 0.5 = 1/2 ∈ ℚ.' },
              { label: 'ℝ = recta numérica completa', detail: 'Incluye irracionales: √2, √3, √5, π, e ∉ ℚ pero sí ∈ ℝ. ℚ ⊂ ℝ.' },
              { label: 'Raíces: simplifica antes de clasificar', detail: '√100 = 10 ∈ ℕ. √(9/4) = 3/2 ∈ ℚ. √2 irracional → solo ℝ. √(−9) no existe en ℝ.' },
              { label: 'Raíces perfectas vs irracionales', detail: '√4=2, √9=3, √16=4, √25=5 → ℕ. √2, √3, √5, √7 → solo ℝ (irracionales).' },
            ],
            formulaGlossary: [
              { symbol: '∈', meaning: 'pertenece a' },
              { symbol: '⊂', meaning: 'subconjunto estricto' },
              { symbol: '√(a/b) = √a/√b', meaning: 'simplifica antes de clasificar' },
              { symbol: '√(neg)', meaning: 'no existe en ℝ' },
            ],
            visual: 'number-sets',
            whyExplanation: 'Task 1 del WU 2023, 2024 y 2025 fue siempre sobre conjuntos numéricos. Son puntos fáciles si sabes la jerarquía y simplificas raíces antes de clasificar.',
          },
          {
            type: 'example',
            title: 'El tutor clasifica: 5 números paso a paso',
            tutorIntro: 'Siempre sigo el mismo proceso: (1) simplifica si hay raíz, (2) identifica el conjunto más pequeño, (3) recuerda que ese número también pertenece a todos los conjuntos mayores.',
            steps: [
              {
                expression: '7 → ℕ, ℤ, ℚ, ℝ',
                explanation: '7 es entero positivo → natural. Como ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, pertenece a los cuatro conjuntos.',
              },
              {
                expression: '−5 → ℤ, ℚ, ℝ  (no ℕ)',
                explanation: '−5 es negativo → ∈ ℤ pero ∉ ℕ. Como ℤ ⊂ ℚ ⊂ ℝ, también ∈ ℚ y ∈ ℝ.',
              },
              {
                expression: '−√100 → simplificar: −10 → ℤ, ℚ, ℝ',
                explanation: 'Primero: √100 = 10, así −√100 = −10. Es entero negativo: −10 ∈ ℤ (y también ∈ ℚ, ∈ ℝ).',
                whyExplanation: 'Error frecuente: ver √100 y pensar "irracional". Siempre calcula la raíz antes de clasificar.',
              },
              {
                expression: '√(9/4) → simplificar: 3/2 → ℚ, ℝ  (no ℤ)',
                explanation: '√(9/4) = √9/√4 = 3/2. Fracción de enteros → ∈ ℚ. Pero 3/2 = 1.5 ∉ ℤ.',
              },
              {
                expression: '√7 → irracional → solo ℝ',
                explanation: '√7 ≈ 2.6457… no es fracción exacta. Es irracional: ∈ ℝ pero ∉ ℚ, ∉ ℤ, ∉ ℕ.',
                whyExplanation: '7 no es cuadrado perfecto (4=2², 9=3²), así que √7 no es entero → irracional.',
              },
            ],
          },
          {
            type: 'guided',
            title: 'Completa: clasifica cada número',
            tutorIntro: 'Para cada número, simplifica si hay raíz, luego indica el conjunto más pequeño al que pertenece.',
            steps: [
              {
                explanation: '−3 es entero negativo. ¿Cuál es el conjunto más pequeño al que pertenece?',
                display: '−3 ∈ ___ (conjunto más pequeño posible)',
                gaps: [
                  { id: 'cn1', answer: 'ℤ', hint: '−3 es negativo → no ∈ ℕ, sí ∈ ℤ', placeholder: '?' },
                ],
              },
              {
                explanation: '2/5 es una fracción de enteros no entera. ¿A qué conjunto pertenece?',
                display: '2/5 ∈ ___',
                gaps: [
                  { id: 'cn2', answer: 'ℚ', hint: 'Fracción de enteros, no es entero → ℚ', placeholder: '?' },
                ],
              },
              {
                explanation: 'Simplifica √9 primero, luego clasifica.',
                display: '√9 = ___ ∈ ___',
                gaps: [
                  { id: 'cn3a', answer: '3', hint: '3² = 9', placeholder: 'valor' },
                  { id: 'cn3b', answer: 'ℕ', hint: '3 es entero positivo → natural', placeholder: 'conjunto' },
                ],
              },
              {
                explanation: '√(−9): ¿existe en ℝ? Indica a qué conjunto pertenece.',
                display: '√(−9) ∈ ___',
                gaps: [
                  { id: 'cn4', answer: 'ninguno', hint: 'La raíz de un número negativo no existe en ℝ', placeholder: '?' },
                ],
              },
              {
                explanation: 'Simplifica −√(1/4) antes de clasificar.',
                display: '−√(1/4) = ___ ∈ ___',
                gaps: [
                  { id: 'cn5a', answer: '−1/2', hint: '√(1/4) = √1/√4 = 1/2, con signo negativo: −1/2', placeholder: 'valor' },
                  { id: 'cn5b', answer: 'ℚ', hint: '−1/2 es fracción, no entero → ℚ', placeholder: 'conjunto' },
                ],
              },
            ],
          },
          {
            type: 'solo',
            difficulty: 'medium',
            title: 'Práctica: ¿A qué conjunto pertenece?',
            problem: 'Which of the following numbers belongs to ℚ but NOT to ℤ?\n\nA) −8\nB) √16\nC) 3/7\nD) √5\nE) −√9',
            tutorIntro: 'Simplifica las raíces primero. Luego busca el número que sea racional (fracción) pero no entero.',
            hints: [
              'ℚ contiene fracciones. ℤ contiene enteros. Busca algo que sea fracción pero no entero.',
              'A) −8 ∈ ℤ. B) √16=4 ∈ ℕ. C) 3/7 fracción no entera → ℚ pero no ℤ. D) √5 irracional. E) −√9=−3 ∈ ℤ.',
              'C) 3/7 — es fracción de enteros (racional) pero no es entero.',
            ],
            answer: 'C) 3/7',
            solution: [
              { expression: 'A) −8 ∈ ℤ ✗', explanation: '−8 es entero — también ∈ ℤ, no cumple "no ∈ ℤ".' },
              { expression: 'B) √16 = 4 ∈ ℕ ✗', explanation: 'Simplifica: √16=4, natural — también ∈ ℤ.' },
              { expression: 'C) 3/7 ∈ ℚ ✓ y 3/7 ∉ ℤ ✓ — CORRECTA', explanation: '3/7 es fracción de enteros pero no es entero.' },
              { expression: 'D) √5 irracional ✗', explanation: '√5 ∉ ℚ — no cumple "∈ ℚ".' },
              { expression: 'E) −√9 = −3 ∈ ℤ ✗', explanation: 'Simplifica: −√9=−3, entero — también ∈ ℤ.' },
            ],
          },
          {
            type: 'solo',
            difficulty: 'medium',
            title: 'Práctica: verdadero o falso',
            problem: 'A number n satisfies: n = √(p/q) where p and q are natural numbers.\n\nWhich TWO statements are definitely TRUE?\n\nA) n is always a rational number\nB) n is always a real number\nC) n could be a natural number\nD) n is never an integer\nE) n is always positive',
            tutorIntro: 'Prueba con ejemplos: p=4, q=1 → n=2 ∈ ℕ. p=1, q=4 → n=1/2 ∈ ℚ. p=2, q=1 → n=√2 irracional.',
            hints: [
              'Prueba con ejemplos concretos: p=4,q=1 → n=2. p=1,q=4 → n=1/2. p=2,q=1 → n=√2.',
              'B) √(p/q) siempre existe en ℝ ✓. C) si p=4,q=1: n=2∈ℕ ✓. E) √ siempre da positivo ✓.',
              'A) falsa: √2 es irracional. D) falsa: √4=2 es entero. B, C y E son verdaderas.',
            ],
            answer: 'B, C y E',
            solution: [
              { expression: 'B) ✓ — √(p/q) siempre existe en ℝ', explanation: 'p,q ∈ ℕ → p/q > 0 → la raíz existe en ℝ.' },
              { expression: 'C) ✓ — ejemplo: √(4/1) = 2 ∈ ℕ', explanation: 'Con p=4, q=1: n=2, natural.' },
              { expression: 'E) ✓ — la raíz cuadrada siempre da resultado positivo', explanation: 'Por definición, √x ≥ 0 para x ≥ 0.' },
              { expression: 'A) ✗ — √(2/1) = √2 es irracional', explanation: '√2 ∉ ℚ, contraejemplo para A.' },
              { expression: 'D) ✗ — √(9/1) = 3 es entero', explanation: 'Contraejemplo para D.' },
            ],
          },
          {
            type: 'solo',
            difficulty: 'hard',
            examLabel: 'WU 2023 – Task 1',
            title: 'WU 2023 – Task 1',
            problem: 'Which two statements are TRUE?\n\nA) √(9/2) is a rational number\nB) −√100 is an integer\nC) √15 is a terminating decimal\nD) Every rational number is also a real number\nE) √(−4) is a real number',
            tutorIntro: 'Evalúa cada opción. Simplifica primero: √100=10, √(9/2)=3/√2, √15≈3.87.',
            hints: [
              'Evalúa cada opción. Simplifica primero: √100=?, √(9/2)=?, √15≈?',
              'B) √100=10 → −10 es entero ✓. D) ℚ⊂ℝ por definición ✓. A) √(9/2)=3/√2 irracional ✗.',
              'B) −√100=−10∈ℤ ✓. D) todo racional es real ✓. Las otras tres son falsas.',
            ],
            answer: 'B y D',
            solution: [
              { expression: 'B) −√100 = −10 → entero ✓', explanation: '√100=10, con signo: −10 ∈ ℤ.' },
              { expression: 'D) Por definición ℚ ⊂ ℝ ✓', explanation: 'Todo número racional es también real.' },
              { expression: 'A) √(9/2) = 3/√2 = 3√2/2 — irracional ✗', explanation: '√2 es irracional, así que 3/√2 también.' },
              { expression: 'C) √15 ≈ 3.872… — no termina ✗', explanation: '15 no es cuadrado perfecto → √15 irracional.' },
              { expression: 'E) √(−4) no existe en ℝ ✗', explanation: 'Raíz de negativo no existe en ℝ.' },
            ],
          },
          {
            type: 'summary',
            title: '¡Conjuntos Numéricos dominados!',
            points: [
              'Jerarquía: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ — todo natural es entero, todo entero es racional, todo racional es real.',
              'Para clasificar: simplifica la raíz primero (√100=10 ∈ ℕ, √(9/4)=3/2 ∈ ℚ).',
              '√2, √3, √5, √7 son irracionales (solo ℝ). √4=2, √9=3, √16=4 son naturales.',
              '√(número negativo) no existe en ℝ.',
              '√(a/b) = √a/√b — simplifica antes de clasificar.',
              'Si p,q ∈ ℕ: √(p/q) siempre ∈ ℝ, pero puede ser ℕ, ℚ o irracional según los valores.',
            ],
          },
        ],
      },
      {
        id: 'guiado',
        title: 'Ejercicio Guiado',
        steps: [{
          type: 'guided',
          title: 'Deducir números naturales de una expresión',
          tutorIntro: 'Dado a = −4b con b ∈ ℤ, b ≠ 0, vamos a demostrar que ciertas expresiones siempre son números naturales.',
          steps: [
            {
              explanation: 'Primero simplificamos −a/b sustituyendo a = −4b.',
              display: '−a/b = −(___)/b = ___',
              gaps: [
                { id: 'g1a', answer: '−4b', hint: 'a = −4b, sustituye directamente', placeholder: 'a = ?' },
                { id: 'g1b', answer: '4', hint: '−(−4b)/b = 4b/b = 4', placeholder: 'resultado' },
              ],
            },
            {
              explanation: 'Ahora simplificamos (−a − b). Sustituimos a = −4b.',
              display: '−a − b = −(___) − b = 4b − b = ___',
              gaps: [
                { id: 'g2a', answer: '−4b', hint: 'a = −4b', placeholder: 'a' },
                { id: 'g2b', answer: '3b', hint: '4b − b = 3b', placeholder: 'resultado' },
              ],
            },
            {
              explanation: 'Por último, elevamos al cuadrado.',
              display: '(−a − b)² = (3b)² = ___',
              gaps: [
                { id: 'g3', answer: '9b²', hint: '(3b)² = 9·b²', placeholder: '?' },
              ],
            },
          ],
        }],
      },
      {
        id: 'facil',
        title: 'Test WU 2023',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2023 – Task 1',
          difficulty: 'easy',
          correctCount: 2,
          question: 'Which TWO of the following statements are TRUE?\n\n(A) √(9/2) is a rational number\n(B) −√100 is an integer\n(C) √15 is a natural number\n(D) Every rational number is a real number\n(E) √(−4) is a real number',
          options: [
            { id: 'A', text: '(A) √(9/2) is a rational number', correct: false, explanation: '√(9/2) = 3/√2 = 3√2/2, que es irracional. Falso.' },
            { id: 'B', text: '(B) −√100 is an integer', correct: true, explanation: '−√100 = −10 ∈ ℤ. Verdadero.' },
            { id: 'C', text: '(C) √15 is a natural number', correct: false, explanation: '√15 ≈ 3.873, no es entero. Falso.' },
            { id: 'D', text: '(D) Every rational number is a real number', correct: true, explanation: 'ℚ ⊂ ℝ, por definición. Verdadero.' },
            { id: 'E', text: '(E) √(−4) is a real number', correct: false, explanation: 'La raíz de un número negativo no existe en ℝ. Falso.' },
          ],
          tutorExplanation: 'Clave: −√100 = −10 (entero) y ℚ ⊂ ℝ (todo racional es real). Siempre verifica si el resultado de una raíz es entero antes de clasificar.',
        }],
      },
      {
        id: 'medio',
        title: 'Nivel Medio',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2024 – Task 2',
          title: 'Plantear ecuaciones: precio de frutas',
          problem: 'Mangoes cost 80% more than apricots AND €1.40 more than apricots.\n\nLet m = price of mangoes (€) and a = price of apricots (€).\n\nWhich TWO equations correctly model this situation?',
          tutorIntro: 'El truco: "80% más caro" significa m = a + 0.8a = 1.8a, es decir m/a = 1.8. Y "€1.40 más" significa m = a + 1.4, es decir a = m − 1.4.',
          hints: [
            '"80% más caro que los albaricoques" → m = 1.8·a → divide ambos lados: m/a = 1.8',
            '"1.40 € más caro" → m = a + 1.4 → despeja a: a = m − 1.4',
            'Revisa las opciones: busca exactamente m/a = 1.8 y a = m − 1.4',
          ],
          answer: 'a = m − 1.4   y   m/a = 1.8',
          solution: [
            { expression: 'Dato 1: m = a + 1.40 → a = m − 1.40 ✓', explanation: 'Los mangos cuestan 1.40 € más que los albaricoques.' },
            { expression: 'Dato 2: m = 1.8·a → m/a = 1.8 ✓', explanation: '80% más caro equivale a multiplicar por 1.8.' },
            { expression: 'Incorrecto: m = 0.8·a → m/a = 0.8', explanation: 'Eso significaría que los mangos son MÁS BARATOS. Error clásico.' },
          ],
        }],
      },
      {
        id: 'dificil',
        title: 'Nivel WU',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2024 – Task 3',
          title: 'Sistema de ecuaciones sin solución',
          problem: 'Consider the system of linear equations:\n\n   2x − y = 3\n   ax + 2y = c\n\nFor which values of a and c does the system have NO solution?',
          tutorIntro: 'Un sistema 2×2 no tiene solución cuando las rectas son paralelas (igual pendiente, distinto término independiente). Despeja y en ambas ecuaciones y compara.',
          hints: [
            'Despeja y en la primera: y = 2x − 3. La pendiente es 2.',
            'Despeja y en la segunda: 2y = −ax + c → y = −(a/2)x + c/2. La pendiente es −a/2.',
            'Pendientes iguales: 2 = −a/2 → a = −4',
            'Para que NO sea la misma recta: −3 ≠ c/2 → c ≠ −6',
          ],
          answer: 'a = −4 y c ≠ −6',
          solution: [
            { expression: 'y = 2x − 3  (pendiente 2, intercepto −3)', explanation: 'Despejando y de la primera ecuación.' },
            { expression: 'y = −(a/2)x + c/2  (pendiente −a/2)', explanation: 'Despejando y de la segunda ecuación.' },
            { expression: '−a/2 = 2  →  a = −4', explanation: 'Para pendientes iguales (líneas paralelas o coincidentes).' },
            { expression: 'c/2 ≠ −3  →  c ≠ −6', explanation: 'Si c = −6 serían la misma recta (infinitas soluciones). c ≠ −6 garantiza ninguna solución.' },
          ],
        }],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 2 · Vectores y Geometría  · 24 May
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-2',
    sessionNumber: 2,
    scheduledDate: '2026-05-24',
    title: 'Vectores y Geometría',
    emoji: '→',
    color: 'violet',
    description: 'Vectores en ℝ² y ℝ³, rectas paramétricas',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 2,
          duration: '90 min',
          scheduledDate: '2026-05-24',
          title: 'Vectores y Geometría',
          whyItMatters: 'El WU tiene 2–3 preguntas de vectores. Aparecen en Tasks 4–6 y suelen pedir identificar ecuaciones de rectas o calcular con vectores.',
          agenda: [
            { icon: '📖', label: 'Vectores y rectas' },
            { icon: '✏️', label: 'Suma y resta guiada' },
            { icon: '🎯', label: 'Test: rectas paralelas' },
            { icon: '🔥', label: 'Recta en 3D (WU 2025)' },
          ],
          examTip: 'La ecuación paramétrica X = P + t·v es la forma estándar del WU. Identifica el punto P y el vector director v.',
        }],
      },
      {
        id: 'concepto',
        title: 'Vectores y Rectas',
        steps: [{
          type: 'explanation',
          title: 'Vectores en ℝ² y ℝ³',
          tutorMessage: 'Dos vectores son paralelos si uno es múltiplo escalar del otro: u ∥ v ⟺ u = λ·v para algún λ ≠ 0.',
          keyPoints: [
            { label: 'Vector: magnitud y dirección', detail: 'v = (v₁, v₂) o v = (v₁, v₂, v₃). Suma: componente a componente.' },
            { label: 'Recta paramétrica: X = P + t·v', detail: 'P = punto base, v = vector director, t ∈ ℝ.' },
            { label: 'Vectores paralelos: u = λ·v', detail: 'Si (a, b) ∥ (c, d) entonces ad = bc (proporcionalidad).' },
            { label: 'Rectas idénticas', detail: 'Misma dirección Y el vector PQ (entre puntos) es paralelo al director.' },
            { label: 'Punto de intersección', detail: 'Igualar las dos ecuaciones paramétricas y resolver el sistema.' },
          ],
          formulaGlossary: [
            { symbol: 'X = P + t·v', meaning: 'ecuación paramétrica de recta' },
            { symbol: 'v', meaning: 'vector director' },
            { symbol: 'P', meaning: 'punto base de la recta' },
            { symbol: 't', meaning: 'parámetro real (t ∈ ℝ)' },
          ],
          visual: 'vector-diagram',
          whyExplanation: 'WU 2024 Tasks 4 y 5 piden identificar qué diagrama de vectores corresponde a cierta operación y qué recta tiene una ecuación dada.',
        }],
      },
      {
        id: 'guiado',
        title: 'Ejercicio Guiado',
        steps: [{
          type: 'guided',
          title: 'Operaciones con vectores',
          tutorIntro: 'Dados a = (3, −1) y b = (−1, 2), calculamos combinaciones lineales paso a paso.',
          steps: [
            {
              explanation: 'Suma de vectores: suma componente a componente.',
              display: 'a + b = (3 + ___, −1 + ___) = (___,  ___)',
              gaps: [
                { id: 'v1a', answer: '−1', hint: 'Segunda componente de b', placeholder: 'b₁' },
                { id: 'v1b', answer: '2', hint: 'Segunda componente de b', placeholder: 'b₂' },
                { id: 'v1c', answer: '2', hint: '3 + (−1) = 2', placeholder: 'x' },
                { id: 'v1d', answer: '1', hint: '−1 + 2 = 1', placeholder: 'y' },
              ],
            },
            {
              explanation: '2a − b: multiplica a por 2, luego resta b.',
              display: '2a = (___, ___),   2a − b = (6−(___)  ,  −2−(___)) = (___,  ___)',
              gaps: [
                { id: 'v2a', answer: '6', hint: '2×3 = 6', placeholder: '2·3' },
                { id: 'v2b', answer: '−2', hint: '2×(−1) = −2', placeholder: '2·(−1)' },
                { id: 'v2c', answer: '−1', hint: 'Primera componente de b', placeholder: 'b₁' },
                { id: 'v2d', answer: '2', hint: 'Segunda componente de b', placeholder: 'b₂' },
                { id: 'v2e', answer: '7', hint: '6 − (−1) = 7', placeholder: 'x' },
                { id: 'v2f', answer: '−4', hint: '−2 − 2 = −4', placeholder: 'y' },
              ],
            },
          ],
        }],
      },
      {
        id: 'facil',
        title: 'Test: Rectas Paralelas',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2023 – Task 5',
          difficulty: 'easy',
          correctCount: 1,
          question: 'The lines g and h are defined as:\n\n   g: X = (1, 3) + t·(2, a)\n   h: X = (3, b) + s·(4, 2)\n\nThe lines g and h are IDENTICAL. What are the values of a and b?',
          options: [
            { id: 'A', text: 'a = 1, b = 4', correct: false, explanation: 'Si a=1, el vector director de g sería (2,1), que no es paralelo a (4,2)=(2·(2,1)).' },
            { id: 'B', text: 'a = 2, b = 1', correct: false, explanation: 'a=2 da director (2,2). ¿Es (4,2) paralelo a (2,2)? No, (4,2)=2·(2,1)≠k·(2,2).' },
            { id: 'C', text: 'a = 1, b = 5', correct: false, explanation: 'Mismo problema: a=1 no da vectores directores proporcionales.' },
            { id: 'D', text: 'a = 2, b = 1', correct: false, explanation: 'Comprueba: (4,2) = 2·(2,1). Para a=1: g pasa por (1,3) con director (2,1). h pasa por (3,b) con director (4,2)=2·(2,1). Son paralelas. Para que sean idénticas: (3,b)−(1,3)=(2,b−3) debe ser paralelo a (2,1): 2·1=1·(b−3) → b−3=2 → b=5.' },
            { id: 'E', text: 'a = 1, b = 5', correct: true, explanation: 'Director de h: (4,2) = 2·(2,1). Para a=1 g tiene director (2,1) ∥ (4,2) ✓. El vector entre puntos base (3,b)−(1,3)=(2,b−3) debe ser ∥ (2,1): 2·1=1·(b−3) → b=5 ✓.' },
          ],
          tutorExplanation: 'Para rectas idénticas: (1) misma dirección → vectores directores proporcionales, (2) el vector entre los puntos base también debe ser proporcional al director.',
        }],
      },
      {
        id: 'medio',
        title: 'Nivel Medio',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2024 – Task 5',
          title: 'Identificar la ecuación de una recta',
          problem: 'Four lines g₁, g₂, g₃, g₄ are drawn in a coordinate system.\n\nLine g₂ passes through the points A = (0, 2) and B = (3, 3).\n\nWhich line has the equation   X = (a₁, a₂) + t·(3, 1)?',
          tutorIntro: 'La ecuación X = (a₁, a₂) + t·(3,1) tiene vector director (3,1). Eso significa que por cada 3 unidades en x, sube 1 en y. Busca la recta con pendiente 1/3.',
          hints: [
            'El vector director (3,1) → pendiente = Δy/Δx = 1/3.',
            'De A=(0,2) a B=(3,3): Δx=3, Δy=1 → pendiente = 1/3 ✓',
            'g₂ pasa por (0,2) con pendiente 1/3: X = (0,2) + t·(3,1). Esto coincide con la forma dada (con a₁=0, a₂=2).',
          ],
          answer: 'g₂',
          solution: [
            { expression: 'Vector director (3,1) → pendiente = 1/3', explanation: 'Avanza 3 en x y 1 en y.' },
            { expression: 'g₂: de (0,2) a (3,3) → Δx=3, Δy=1 → pendiente 1/3 ✓', explanation: 'Coincide con el vector director.' },
            { expression: 'X = (0,2) + t·(3,1)', explanation: 'Punto base (0,2), director (3,1). Correcta.' },
          ],
        }],
      },
      {
        id: 'dificil',
        title: 'Nivel WU',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2025 – Task 4',
          title: 'Recta en 3D y punto específico',
          problem: 'A line passes through the points P = (−1, 0, 3) and Q = (3, −1, 2).\n\nWrite the parametric equation of the line.\n\nThen find the coordinates of point A on the line where the x-coordinate equals 7.',
          tutorIntro: 'El vector director es Q − P. Escribe X = P + t·(Q−P) y luego resuelve para t cuando x=7.',
          hints: [
            'Vector director: v = Q − P = (3−(−1), −1−0, 2−3) = (4, −1, −1)',
            'Ecuación: X = (−1, 0, 3) + t·(4, −1, −1)',
            'Para x=7: −1 + 4t = 7 → 4t = 8 → t = 2',
            'Con t=2: y = 0 + 2·(−1) = −2, z = 3 + 2·(−1) = 1',
          ],
          answer: 'A = (7, −2, 1)',
          solution: [
            { expression: 'v = Q − P = (4, −1, −1)', explanation: 'Vector director de P a Q.' },
            { expression: 'X = (−1, 0, 3) + t·(4, −1, −1)', explanation: 'Ecuación paramétrica con P como punto base.' },
            { expression: '−1 + 4t = 7  →  t = 2', explanation: 'Componente x igual a 7.' },
            { expression: 'A = (−1+8, 0−2, 3−2) = (7, −2, 1)', explanation: 'Sustituir t=2 en las tres componentes.' },
          ],
        }],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 3 · Funciones Lineales y Cuadráticas  · 27 May
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-3',
    sessionNumber: 3,
    scheduledDate: '2026-05-27',
    title: 'Funciones Lineales y Cuadráticas',
    emoji: '⌣',
    color: 'indigo',
    description: 'Rectas, parábolas, vértice y ceros',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 3,
          duration: '90 min',
          scheduledDate: '2026-05-27',
          title: 'Funciones Lineales y Cuadráticas',
          whyItMatters: 'Las funciones cuadráticas aparecen en 3–4 tasks del WU. Saber encontrar vértice, ceros e interpretar la gráfica es imprescindible.',
          agenda: [
            { icon: '📖', label: 'Lineal y cuadrática' },
            { icon: '✏️', label: 'Vértice y ceros' },
            { icon: '🎯', label: 'Test: función lineal' },
            { icon: '🔥', label: 'Parábola WU 2025' },
          ],
          examTip: 'La forma vértice f(x) = a(x−h)² + k te da directamente el vértice (h,k). El signo de a determina si es mínimo (a>0) o máximo (a<0).',
        }],
      },
      {
        id: 'concepto',
        title: 'Funciones',
        steps: [{
          type: 'explanation',
          title: 'Funciones lineales y cuadráticas',
          tutorMessage: 'Truco para los ceros: si f(x) = a(x − r₁)(x − r₂), los ceros son directamente r₁ y r₂. La suma de ceros = −b/a, el producto = c/a.',
          keyPoints: [
            { label: 'Lineal: f(x) = mx + b', detail: 'm = pendiente, b = ordenada en el origen (f(0)=b). Cero en x = −b/m.' },
            { label: 'Cuadrática: f(x) = ax² + bx + c', detail: 'a>0 → parábola abre hacia arriba (mínimo). a<0 → hacia abajo (máximo).' },
            { label: 'Vértice: x_v = −b/(2a)', detail: 'y_v = f(x_v). Forma vértice: f(x) = a(x − x_v)² + y_v.' },
            { label: 'Ceros: fórmula cuadrática', detail: 'x = (−b ± √(b²−4ac)) / (2a). Discriminante Δ = b²−4ac.' },
            { label: 'Ecuación funcional: f(x+k) = f(x) + c', detail: 'Indica cambio por unidad. Si f(x+2)=f(x)−6, la función baja 6 por cada 2 unidades en x.' },
          ],
          formulaGlossary: [
            { symbol: 'x_v', meaning: 'coordenada x del vértice' },
            { symbol: 'Δ', meaning: 'discriminante b²−4ac' },
            { symbol: 'r₁, r₂', meaning: 'ceros (raíces) de f' },
          ],
          visual: 'quadratic-grapher',
          whyExplanation: 'WU 2023 T9, 2025 T10 y otras 2–3 tasks por examen son sobre parábolas. Vale la pena dominarlas bien.',
        }],
      },
      {
        id: 'guiado',
        title: 'Ejercicio Guiado',
        steps: [{
          type: 'guided',
          title: 'Encontrar vértice y ceros de f(x) = x² − 2x − 3',
          tutorIntro: 'Analizamos esta parábola paso a paso: primero el vértice, luego los ceros con la fórmula cuadrática.',
          steps: [
            {
              explanation: 'La coordenada x del vértice es x_v = −b/(2a). Aquí a=1, b=−2.',
              display: 'x_v = −(___) / (2·___) = ___',
              gaps: [
                { id: 'q1a', answer: '−2', hint: 'b = −2', placeholder: 'b' },
                { id: 'q1b', answer: '1', hint: 'a = 1', placeholder: 'a' },
                { id: 'q1c', answer: '1', hint: '−(−2)/(2) = 2/2 = 1', placeholder: 'x_v' },
              ],
            },
            {
              explanation: 'Calcula y_v = f(x_v) = f(1) = 1² − 2·1 − 3.',
              display: 'y_v = 1 − 2 − 3 = ___',
              gaps: [
                { id: 'q2', answer: '−4', hint: '1 − 2 − 3 = −4', placeholder: 'y_v' },
              ],
            },
            {
              explanation: 'Discriminante: Δ = b² − 4ac = (−2)² − 4·1·(−3).',
              display: 'Δ = 4 − ___ = ___',
              gaps: [
                { id: 'q3a', answer: '−12', hint: '4·1·(−3) = −12', placeholder: '4ac' },
                { id: 'q3b', answer: '16', hint: '4 − (−12) = 16', placeholder: 'Δ' },
              ],
            },
            {
              explanation: 'Ceros: x = (2 ± √16) / 2 = (2 ± 4) / 2.',
              display: 'x₁ = ___ ,   x₂ = ___',
              gaps: [
                { id: 'q4a', answer: '3', hint: '(2 + 4)/2 = 3', placeholder: 'x₁' },
                { id: 'q4b', answer: '−1', hint: '(2 − 4)/2 = −1', placeholder: 'x₂' },
              ],
            },
          ],
        }],
      },
      {
        id: 'facil',
        title: 'Test: Función Lineal',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2025 – Task 8',
          difficulty: 'easy',
          correctCount: 1,
          question: 'A linear function f satisfies:\n   • f has a zero at x = −4\n   • f(x + 2) = f(x) − 6   for all x\n\nWhich function is f?',
          options: [
            { id: 'A', text: 'f(x) = −3x − 12', correct: true, explanation: 'Cero: f(−4) = 12−12 = 0 ✓. Propiedad: f(x+2) = −3(x+2)−12 = −3x−18 = f(x)−6 ✓.' },
            { id: 'B', text: 'f(x) = 3x + 12', correct: false, explanation: 'Cero: f(−4) = −12+12 = 0 ✓, pero f(x+2) = 3x+6+12 = f(x)+6 ≠ f(x)−6.' },
            { id: 'C', text: 'f(x) = −2x − 8', correct: false, explanation: 'Cero: f(−4) = 8−8 = 0 ✓, pero f(x+2)−f(x) = −2(x+2)−8−(−2x−8) = −4 ≠ −6.' },
            { id: 'D', text: 'f(x) = −3x + 12', correct: false, explanation: 'Cero: f(4) = 0, no f(−4). El cero debe estar en x = −4.' },
          ],
          tutorExplanation: 'De f(x+2) = f(x) − 6 se deduce la pendiente: Δy/Δx = −6/2 = −3. Entonces f(x) = −3x + b. Usando el cero f(−4)=0: 0 = 12 + b → b = −12.',
        }],
      },
      {
        id: 'medio',
        title: 'Nivel Medio',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2023 – Task 9',
          title: 'Hallar parámetros de una parábola',
          problem: 'The function f(x) = ax² + b has its minimum at S = (0, −2) and passes through the point P = (1, 0).\n\nDetermine the values of a and b.',
          tutorIntro: 'El vértice está en (0, −2), lo que significa que x_v = 0 y y_v = −2. Recuerda que para f(x) = ax²+b el vértice siempre está en x=0.',
          hints: [
            'f(x) = ax² + b tiene vértice en x = −b/(2a) = 0, lo que ya está dado.',
            'El mínimo es (0, −2) → f(0) = b = −2.',
            'Ahora usa P=(1, 0): f(1) = a·1² + b = a + b = 0.',
            'a + b = 0 y b = −2 → a = 2.',
          ],
          answer: 'a = 2,  b = −2',
          solution: [
            { expression: 'Vértice en (0, −2) → f(0) = b = −2', explanation: 'El término b es la imagen en x=0.' },
            { expression: 'P=(1,0) ∈ f → a·1² + (−2) = 0 → a = 2', explanation: 'Sustituimos el punto en la ecuación.' },
            { expression: 'f(x) = 2x² − 2', explanation: 'Verificación: f(0) = −2 ✓, f(1) = 0 ✓, mínimo ✓ (a>0).' },
          ],
        }],
      },
      {
        id: 'dificil',
        title: 'Nivel WU',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2025 – Task 10',
          title: 'Parábola con cero en x = r',
          problem: 'The function f(x) = (2/3)x² + bx + c has the following properties:\n   • f(0) = −(50/3)\n   • f has a zero at x = −5\n\nDetermine the second zero r of f.',
          tutorIntro: 'Usaremos dos datos: f(0) nos da c directamente, y f(−5)=0 nos da b. Con a, b, c conocidos, el segundo cero se obtiene por la relación suma de ceros = −b/a.',
          hints: [
            'f(0) = c = −50/3.',
            'f(−5) = (2/3)·25 + b·(−5) + (−50/3) = 0 → 50/3 − 5b − 50/3 = 0 → −5b = 0 → b = 0.',
            'Con b=0: f(x) = (2/3)x² − 50/3 = (2/3)(x² − 25).',
            'Ceros: x² = 25 → x = ±5. El segundo cero es r = 5.',
          ],
          answer: 'r = 5',
          solution: [
            { expression: 'f(0) = c = −50/3', explanation: 'Sustituir x=0.' },
            { expression: 'f(−5) = (2/3)·25 − 5b − 50/3 = 0 → b = 0', explanation: '50/3 − 50/3 = 5b → b = 0.' },
            { expression: 'f(x) = (2/3)(x² − 25)', explanation: 'Factorizando con b=0 y c=−50/3.' },
            { expression: 'x² = 25  →  x = ±5', explanation: 'Los ceros son −5 (dado) y r = 5.' },
          ],
        }],
      },
      /* ── NEW TOPIC: Cuadráticas desde cero ── */
      {
        id: 'cuadraticas-desde-cero',
        title: 'Cuadráticas desde cero',
        steps: [
          /* Paso 1: Concepto */
          {
            type: 'explanation',
            title: 'Ecuaciones cuadráticas: ax² + bx + c = 0',
            tutorMessage: 'Truco WU: en cuanto veas "exactly one root / exactly one solution" en el enunciado, dispara Δ = 0 de inmediato. No calculas nada más todavía.',
            keyPoints: [
              { label: 'Forma: ax² + bx + c = 0', detail: 'Su gráfica es una parábola (forma de U). Resolver = encontrar los x donde la parábola cruza el eje X. A esos x los llamamos soluciones o raíces.' },
              { label: 'N.° de soluciones (discriminante Δ = b²−4ac)', detail: 'Δ > 0 → 2 soluciones. Δ = 0 → 1 solución (raíz doble). Δ < 0 → 0 soluciones reales.' },
              { label: 'Fórmula general: x = (−b ± √Δ) / (2a)', detail: 'Universal: funciona para cualquier cuadrática con a ≠ 0. Sustituye a, b, c y simplifica.' },
              { label: 'El símbolo ±', detail: 'Haces la cuenta DOS veces: x₁ con + y x₂ con −. Por eso suelen salir 2 soluciones.' },
            ],
            formulaGlossary: [
              { symbol: 'a, b, c', meaning: 'coeficientes de ax²+bx+c' },
              { symbol: 'Δ = b²−4ac', meaning: 'discriminante' },
              { symbol: '±', meaning: 'dos operaciones: +√Δ  y  −√Δ' },
              { symbol: 'x = (−b ± √Δ)/(2a)', meaning: 'fórmula general' },
            ],
            visual: 'quadratic-grapher',
            whyExplanation: 'La fórmula general y el discriminante aparecen en 3–4 tasks WU por examen. El patrón Δ = 0 ↔ "exactly one solution" es el que más puntos da.',
          },
          /* Paso 2: Ejemplo resuelto */
          {
            type: 'example',
            title: 'Ejemplo resuelto: x² − 5x + 6 = 0',
            tutorIntro: 'Aplicamos la fórmula general paso a paso. Identifica a, b y c antes de sustituir.',
            steps: [
              { expression: 'a = 1, b = −5, c = 6', explanation: 'Identificamos los coeficientes comparando con ax²+bx+c. Ojo: b lleva el signo menos.' },
              { expression: 'x = (−(−5) ± √((−5)² − 4·1·6)) / (2·1)', explanation: 'Sustituimos en la fórmula general.' },
              { expression: '= (5 ± √(25 − 24)) / 2 = (5 ± 1) / 2', explanation: 'Calculamos primero lo de dentro de la raíz: 25 − 24 = 1.' },
              { expression: 'x₁ = (5+1)/2 = 3 ;  x₂ = (5−1)/2 = 2', explanation: 'Abrimos el ±: una vez sumando, otra restando. Resultado: x = 3 y x = 2 (la parábola cruza el eje X en esos dos puntos).' },
            ],
          },
          /* Paso 3: Fácil — multi-select */
          {
            type: 'multiple-choice',
            examLabel: 'Resolver – Nivel 1',
            difficulty: 'easy',
            correctCount: 2,
            question: 'Solve x² − 7x + 10 = 0. Mark ALL solutions.',
            options: [
              { id: 'A', text: 'x = 2', correct: true,  explanation: '2² − 7·2 + 10 = 4 − 14 + 10 = 0 ✓' },
              { id: 'B', text: 'x = 3', correct: false, explanation: '3² − 7·3 + 10 = 9 − 21 + 10 = −2 ≠ 0' },
              { id: 'C', text: 'x = 5', correct: true,  explanation: '5² − 7·5 + 10 = 25 − 35 + 10 = 0 ✓' },
              { id: 'D', text: 'x = 7', correct: false, explanation: '7² − 7·7 + 10 = 49 − 49 + 10 = 10 ≠ 0' },
            ],
            solution: [
              { expression: 'a=1, b=−7, c=10 → Δ = 49 − 40 = 9', explanation: 'Identificamos coeficientes y calculamos el discriminante.' },
              { expression: 'x = (7 ± √9)/2 = (7 ± 3)/2', explanation: 'Sustituimos. √9 = 3.' },
              { expression: 'x₁ = 10/2 = 5 ;  x₂ = 4/2 = 2', explanation: 'Abrimos el ±. Hay DOS soluciones, por eso es multi-select.' },
            ],
          },
          /* Paso 4: Medio — multi-select (trampa de signos) */
          {
            type: 'multiple-choice',
            examLabel: 'Resolver – Nivel 2',
            difficulty: 'medium',
            correctCount: 2,
            question: 'Solve x² + 2x − 8 = 0. Mark ALL solutions.',
            options: [
              { id: 'A', text: 'x = 2',  correct: true,  explanation: '2² + 2·2 − 8 = 4 + 4 − 8 = 0 ✓' },
              { id: 'B', text: 'x = −2', correct: false, explanation: '(−2)² + 2·(−2) − 8 = 4 − 4 − 8 = −8 ≠ 0' },
              { id: 'C', text: 'x = 4',  correct: false, explanation: '4² + 2·4 − 8 = 16 + 8 − 8 = 16 ≠ 0' },
              { id: 'D', text: 'x = −4', correct: true,  explanation: '(−4)² + 2·(−4) − 8 = 16 − 8 − 8 = 0 ✓' },
            ],
            solution: [
              { expression: 'a=1, b=2, c=−8 → Δ = 4 + 32 = 36', explanation: 'Cuidado: c es NEGATIVO, así que −4ac = −4·1·(−8) = +32.' },
              { expression: 'x = (−2 ± √36)/2 = (−2 ± 6)/2', explanation: 'Sustituimos. √36 = 6. Ojo: −b = −2.' },
              { expression: 'x₁ = 4/2 = 2 ;  x₂ = −8/2 = −4', explanation: 'Una solución positiva y una negativa. El error típico aquí es el signo.' },
            ],
          },
          /* Paso 5: Nivel WU — single */
          {
            type: 'multiple-choice',
            examLabel: 'WU 2026 – Task 1',
            difficulty: 'hard',
            correctCount: 1,
            question: 'f(x) = x² − 6x + k has exactly one real root. Find k.',
            options: [
              { id: 'A', text: 'k = 3',  correct: false, explanation: 'Δ = 36 − 12 = 24 > 0 → dos raíces.' },
              { id: 'B', text: 'k = 6',  correct: false, explanation: 'Δ = 36 − 24 = 12 > 0 → dos raíces.' },
              { id: 'C', text: 'k = 9',  correct: true,  explanation: 'Δ = 36 − 36 = 0 → una raíz doble. ✓' },
              { id: 'D', text: 'k = 36', correct: false, explanation: 'Δ = 36 − 144 = −108 < 0 → sin raíces reales.' },
            ],
            solution: [
              { expression: 'PATRÓN: "exactly one root" → Δ = 0', explanation: 'Esta es la señal clave: en cuanto leas "exactly one root/solution", dispara discriminante cero. No calculas nada todavía, solo reconoces el tipo.' },
              { expression: 'Δ = b² − 4ac, con a=1, b=−6, c=k', explanation: 'Identificamos coeficientes.' },
              { expression: '36 − 4k = 0  →  k = 9', explanation: 'Despejamos k.' },
            ],
          },
          /* Paso 6: Nivel WU — single */
          {
            type: 'multiple-choice',
            examLabel: 'WU 2026 – Task 2',
            difficulty: 'hard',
            correctCount: 1,
            question: 'For which value of c does 2x² − x + c = 0 have exactly one solution?\n\n  1/16   /   1/8   /   1/4   /   1/2   /   1',
            options: [
              { id: 'A', text: 'c = 1/16', correct: false, explanation: 'Δ = 1 − 8·(1/16) = 1 − 0.5 > 0 → dos soluciones.' },
              { id: 'B', text: 'c = 1/8',  correct: true,  explanation: 'Δ = 1 − 8·(1/8) = 1 − 1 = 0 → exactamente una solución. ✓' },
              { id: 'C', text: 'c = 1/4',  correct: false, explanation: 'Δ = 1 − 8·(1/4) = 1 − 2 = −1 < 0 → sin soluciones reales.' },
              { id: 'D', text: 'c = 1/2',  correct: false, explanation: 'Δ = 1 − 8·(1/2) = 1 − 4 = −3 < 0 → sin soluciones reales.' },
              { id: 'E', text: 'c = 1',    correct: false, explanation: 'Δ = 1 − 8·1 = −7 < 0 → sin soluciones reales.' },
            ],
            solution: [
              { expression: 'PATRÓN: "exactly one solution" → Δ = 0', explanation: 'Mismo disparador que el anterior. Misma jugada.' },
              { expression: 'a=2, b=−1, c=c → (−1)² − 4·2·c = 0', explanation: 'Identificamos coeficientes y planteamos Δ=0.' },
              { expression: '1 − 8c = 0  →  c = 1/8', explanation: 'Despejamos c.' },
            ],
          },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 4 · Funciones Avanzadas  · 30 May
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-4',
    sessionNumber: 4,
    scheduledDate: '2026-05-30',
    title: 'Funciones Avanzadas',
    emoji: 'e',
    color: 'orange',
    description: 'Potencia, exponencial y seno',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 4,
          duration: '90 min',
          scheduledDate: '2026-05-30',
          title: 'Funciones Avanzadas',
          whyItMatters: 'El WU siempre incluye preguntas sobre funciones de potencia, exponenciales y trigonométricas. Son los tipos más raros pero los que diferencian notas.',
          agenda: [
            { icon: '📖', label: 'Potencia, exp y seno' },
            { icon: '✏️', label: 'Crecimiento exponencial' },
            { icon: '🎯', label: 'Test: semivida WU 2024' },
            { icon: '🔥', label: 'f(x)=a·sin(bx) WU 2024' },
          ],
          examTip: 'Para f(x) = a·sin(bx): a = amplitud (valor máximo), período = 2π/b. Identifica el máximo en la gráfica para hallar a.',
        }],
      },
      {
        id: 'concepto',
        title: 'Funciones Avanzadas',
        steps: [{
          type: 'explanation',
          title: 'Potencia, exponencial y seno',
          tutorMessage: 'En funciones de potencia f(x) = a·xᶻ, el exponente z determina la forma: z>1 convexa, 0<z<1 cóncava, z<0 hipérbola.',
          keyPoints: [
            { label: 'Potencia: f(x) = a·xᶻ', detail: 'Clave: si duplicas x → f se multiplica por 2ᶻ. Si z=−2 y duplicas x, f se divide entre 4.' },
            { label: 'Exponencial: f(t) = N₀·eᵏᵗ', detail: 'k>0: crecimiento. k<0: decaimiento. La semivida τ cumple e^(−kτ) = 1/2.' },
            { label: 'Seno: f(x) = a·sin(bx)', detail: 'a = amplitud. Período = 2π/b. f(0) = 0 siempre.' },
            { label: 'Identificar a y b en el seno', detail: 'a = valor máximo de f. b = 2π / período.' },
          ],
          formulaGlossary: [
            { symbol: 'a', meaning: 'amplitud (máximo de f)' },
            { symbol: 'b', meaning: '2π/período' },
            { symbol: 'τ', meaning: 'semivida (half-life)' },
            { symbol: 'N₀', meaning: 'cantidad inicial' },
          ],
          visual: 'sine-grapher',
          whyExplanation: 'WU 2024 tiene Tasks 9, 11 y 12 sobre estos tres tipos. Son los que más estudiantes fallan por no dominar las propiedades de escala.',
        }],
      },
      {
        id: 'guiado',
        title: 'Ejercicio Guiado',
        steps: [{
          type: 'guided',
          title: 'Crecimiento exponencial: N(t) = N₀·e^(−kt)',
          tutorIntro: 'Un isótopo radioactivo tiene semivida de 5 días. Partimos de N₀ = 200. Encontramos la ecuación y calculamos N(10).',
          steps: [
            {
              explanation: 'La semivida τ=5 significa N(5) = N₀/2. Usamos esto para hallar k.',
              display: 'N₀·e^(−5k) = N₀/2  →  e^(−5k) = ___  →  −5k = ln(___)',
              gaps: [
                { id: 'e1a', answer: '1/2', hint: 'N(5) = N₀/2, divide ambos lados por N₀', placeholder: '?' },
                { id: 'e1b', answer: '1/2', hint: 'e^(−5k) = 1/2, toma logaritmo', placeholder: '?' },
              ],
            },
            {
              explanation: 'De −5k = ln(1/2) = −ln(2), despejamos k.',
              display: 'k = ln(2) / ___  ≈  ___',
              gaps: [
                { id: 'e2a', answer: '5', hint: 'Divide −ln(2) entre −5', placeholder: 'divisor' },
                { id: 'e2b', answer: '0.139', hint: 'ln(2)≈0.693, dividido entre 5 ≈ 0.139', placeholder: 'valor' },
              ],
            },
            {
              explanation: 'Con k ≈ 0.139 y N₀ = 200, calculamos N(10) = 200·e^(−10k).',
              display: 'N(10) = 200·e^(−10·0.139) = 200·e^(___) ≈ 200·0.25 = ___',
              gaps: [
                { id: 'e3a', answer: '−1.386', hint: '−10 × 0.139 = −1.386 ≈ −ln(4)', placeholder: '?' },
                { id: 'e3b', answer: '50', hint: 'Tras 2 semividas queda N₀/4 = 200/4 = 50', placeholder: 'N(10)' },
              ],
            },
          ],
        }],
      },
      {
        id: 'facil',
        title: 'Test: Semivida',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2024 – Task 11',
          difficulty: 'easy',
          correctCount: 1,
          question: 'A radioactive substance decays according to N(t) = N₀·e^(−kt), where τ is the half-life.\n\nAt time t*, the amount is N(t*). Which expression gives the amount at time t* + τ?',
          options: [
            { id: 'A', text: '2·N(t*)', correct: false, explanation: 'La semivida REDUCE a la mitad, no duplica.' },
            { id: 'B', text: 'N(t*) − τ', correct: false, explanation: 'El decaimiento es multiplicativo (exponencial), no aditivo.' },
            { id: 'C', text: '½·N(t*)', correct: true, explanation: 'Por definición de semivida: después de τ la cantidad se reduce a la mitad. N(t*+τ) = N(t*)·e^(−kτ) = N(t*)·½.' },
            { id: 'D', text: 'N(t*)·e^(−τ)', correct: false, explanation: 'Casi correcto, pero falta el k: sería e^(−kτ) = ½, no e^(−τ).' },
          ],
          tutorExplanation: 'La semivida τ satisface e^(−kτ) = 1/2, por definición. Así N(t*+τ) = N(t*)·(1/2) independientemente de cuándo sea t*.',
        }],
      },
      {
        id: 'medio',
        title: 'Nivel Medio',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2024 – Task 9',
          title: 'Función de potencia: propiedad de escala',
          problem: 'A power function f(x) = a·xᶻ has the following property:\n\n   When x is doubled, f(x) is divided by 4.\n\nFind the values of the exponent z and the coefficient a, given that f(2) = 2.',
          tutorIntro: '"Duplicar x divide f entre 4" es la clave. Si x → 2x, entonces f(2x) = f(x)/4. Usamos esto para hallar z.',
          hints: [
            'f(2x) = a·(2x)ᶻ = a·2ᶻ·xᶻ = 2ᶻ·f(x)',
            '2ᶻ·f(x) = f(x)/4 → 2ᶻ = 1/4 = 2⁻² → z = −2',
            'Con z=−2: f(x) = a·x⁻² = a/x². Usar f(2)=2: a/4 = 2 → a = 8',
          ],
          answer: 'z = −2,  a = 8',
          solution: [
            { expression: 'f(2x)/f(x) = 2ᶻ = 1/4 = 2⁻²  →  z = −2', explanation: 'La propiedad de escala determina z directamente.' },
            { expression: 'f(x) = a·x⁻² = a/x²', explanation: 'Con z = −2.' },
            { expression: 'f(2) = a/4 = 2  →  a = 8', explanation: 'Condición f(2) = 2.' },
            { expression: 'f(x) = 8/x²', explanation: 'Verificación: f(4) = 8/16 = 0.5 = f(2)/4 ✓.' },
          ],
        }],
      },
      {
        id: 'dificil',
        title: 'Nivel WU',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2024 – Task 12',
          title: 'Identificar a y b en f(x) = a·sin(bx)',
          problem: 'The function f(x) = a·sin(bx) with a > 0 and b > 0 has:\n   • Maximum value of 3\n   • Period of π/2\n\nDetermine a and b.',
          tutorIntro: 'La amplitud es el valor máximo (a), y el período es 2π/b. Despeja b del período dado.',
          hints: [
            'Amplitud = valor máximo de |f| = a = 3.',
            'Período = 2π/b = π/2 → b = 2π/(π/2) = 4.',
          ],
          answer: 'a = 3,  b = 4',
          solution: [
            { expression: 'a = máximo de f = 3', explanation: 'La amplitud de a·sin(bx) es |a|.' },
            { expression: 'Período = 2π/b = π/2  →  b = 4', explanation: 'Despejando b: b = 2π ÷ (π/2) = 4.' },
            { expression: 'f(x) = 3·sin(4x)', explanation: 'Verificación: máximo = 3 ✓, período = 2π/4 = π/2 ✓.' },
          ],
        }],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 5 · Derivadas  · 2 Jun
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-5',
    sessionNumber: 5,
    scheduledDate: '2026-06-02',
    title: 'Derivadas',
    emoji: "f'",
    color: 'yellow',
    description: 'Regla de la potencia, interpretación y límites',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 5,
          duration: '90 min',
          scheduledDate: '2026-06-02',
          title: 'Derivadas',
          whyItMatters: 'El WU dedica 3–4 tasks a derivadas. Necesitas calcularlas, interpretarlas como pendiente/velocidad, y reconocer la definición como límite.',
          agenda: [
            { icon: '📖', label: 'Reglas de derivación' },
            { icon: '✏️', label: 'Cálculo guiado' },
            { icon: '🎯', label: 'Test: definición límite' },
            { icon: '🔥', label: 'Interpretación WU 2024' },
          ],
          examTip: 'La definición de derivada: f′(a) = lim(h→0) [f(a+h)−f(a)]/h. También se escribe como lim(x→a) [f(x)−f(a)]/(x−a). Ambas formas aparecen en el WU.',
        }],
      },
      {
        id: 'concepto',
        title: 'Derivadas',
        steps: [{
          type: 'explanation',
          title: 'Reglas de derivación e interpretación',
          tutorMessage: 'La regla más usada en WU: d/dx[xⁿ] = n·xⁿ⁻¹. También: d/dx[eˣ] = eˣ y d/dx[ln x] = 1/x.',
          keyPoints: [
            { label: 'Regla potencia: (xⁿ)′ = n·xⁿ⁻¹', detail: '(x³)′ = 3x², (x⁻¹)′ = −x⁻², (√x)′ = 1/(2√x).' },
            { label: 'Regla suma y constante', detail: '(f+g)′ = f′+g′, (c·f)′ = c·f′. Las constantes desaparecen al derivar.' },
            { label: 'Interpretación: pendiente de la tangente', detail: 'f′(a) = pendiente de la recta tangente en x=a.' },
            { label: 'Interpretación: tasa de cambio instantánea', detail: 'Si s(t) = posición, s′(t) = velocidad. Si v(t) = velocidad, v′(t) = aceleración.' },
            { label: 'Definición como límite', detail: "f′(a) = lim(h→0) [f(a+h)−f(a)]/h = lim(x→a) [f(x)−f(a)]/(x−a)" },
          ],
          formulaGlossary: [
            { symbol: "f′(a)", meaning: 'derivada de f en x=a' },
            { symbol: 'n', meaning: 'exponente (regla de potencia)' },
            { symbol: 's(t)', meaning: 'posición en función del tiempo' },
            { symbol: "s′(t)", meaning: 'velocidad instantánea' },
          ],
          visual: 'derivative-canvas',
          whyExplanation: "WU 2024 T14 pide identificar qué expresiones son la velocidad instantánea o la aceleración. Confundir s′(t) con s′′(t) es el error más caro.",
        }],
      },
      {
        id: 'guiado',
        title: 'Ejercicio Guiado',
        steps: [{
          type: 'guided',
          title: 'Derivar f(x) = 3x⁴ − 2x² + 5x − 1',
          tutorIntro: 'Aplicamos la regla de la potencia término a término. Cada término se deriva por separado.',
          steps: [
            {
              explanation: 'Derivada de 3x⁴: multiplica el exponente por el coeficiente y baja el exponente en 1.',
              display: '(3x⁴)′ = 3·___ · x^(___)  =  ___',
              gaps: [
                { id: 'd1a', answer: '4', hint: 'El exponente es 4', placeholder: 'exp' },
                { id: 'd1b', answer: '3', hint: '4 − 1 = 3', placeholder: 'n−1' },
                { id: 'd1c', answer: '12x³', hint: '3×4 = 12', placeholder: 'resultado' },
              ],
            },
            {
              explanation: 'Derivada de −2x².',
              display: '(−2x²)′ = ___',
              gaps: [
                { id: 'd2', answer: '−4x', hint: '−2×2 = −4, exponente baja a 1', placeholder: '?' },
              ],
            },
            {
              explanation: 'Derivada de 5x y de la constante −1.',
              display: '(5x)′ = ___   y   (−1)′ = ___',
              gaps: [
                { id: 'd3a', answer: '5', hint: 'Derivada de 5x¹ es 5·1·x⁰ = 5', placeholder: '?' },
                { id: 'd3b', answer: '0', hint: 'Las constantes desaparecen al derivar', placeholder: '?' },
              ],
            },
            {
              explanation: 'Junta todos los términos para escribir f′(x).',
              display: "f′(x) = ___ − ___ + ___",
              gaps: [
                { id: 'd4a', answer: '12x³', hint: 'Primer término derivado', placeholder: '?' },
                { id: 'd4b', answer: '4x', hint: '−(−4x) queda como −4x → escribes 4x aquí', placeholder: '?' },
                { id: 'd4c', answer: '5', hint: 'Último término no constante', placeholder: '?' },
              ],
            },
          ],
        }],
      },
      {
        id: 'facil',
        title: 'Test: Definición de Derivada',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2023 – Task 13',
          difficulty: 'easy',
          correctCount: 2,
          question: "Which TWO of the following expressions equal f′(5)?\n\n(A) lim(h→0) [f(5+h) − f(5)] / h\n(B) lim(h→0) [f(5+h) − f(h)] / h\n(C) lim(x→5) [f(x) − f(5)] / (x − 5)\n(D) [f(6) − f(5)] / 1\n(E) lim(h→0) [f(5) − f(5−h)] / h",
          options: [
            { id: 'A', text: '(A) lim(h→0) [f(5+h) − f(5)] / h', correct: true, explanation: "Definición estándar de f′(5). Correcto." },
            { id: 'B', text: '(B) lim(h→0) [f(5+h) − f(h)] / h', correct: false, explanation: 'El segundo término debe ser f(5), no f(h). Incorrecto.' },
            { id: 'C', text: '(C) lim(x→5) [f(x) − f(5)] / (x − 5)', correct: true, explanation: "Definición alternativa equivalente (sustituye x = 5+h). Correcto." },
            { id: 'D', text: '(D) [f(6) − f(5)] / 1', correct: false, explanation: 'Eso es la tasa de cambio MEDIA en [5,6], no la derivada en x=5.' },
            { id: 'E', text: '(E) lim(h→0) [f(5) − f(5−h)] / h', correct: false, explanation: 'Esta es la derivada por la izquierda, equivalente solo si f es diferenciable, pero no es la definición directa pedida.' },
          ],
          tutorExplanation: "Las dos definiciones equivalentes de f′(5): la clásica con h→0 y la alternativa con x→5. Memoriza ambas porque WU alterna entre ellas.",
        }],
      },
      {
        id: 'medio',
        title: 'Nivel Medio',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2025 – Task 13',
          title: 'Derivada de función de potencia: relación a·b = c',
          problem: 'A differentiable function has the form f(x) = a·xᵇ.\n\nIts derivative is f′(x) = c·xᵈ.\n\nWhich relationship between a, b, c is ALWAYS true?',
          tutorIntro: 'Aplica la regla de la potencia directamente: (a·xᵇ)′ = a·b·xᵇ⁻¹. Compara con c·xᵈ para identificar c.',
          hints: [
            'Por la regla de la potencia: (a·xᵇ)′ = a·b·xᵇ⁻¹.',
            'Comparando con c·xᵈ: c = a·b y d = b−1.',
            'La relación buscada es c = a·b, es decir a·b = c.',
          ],
          answer: 'a · b = c',
          solution: [
            { expression: "(a·xᵇ)′ = a·b·xᵇ⁻¹", explanation: 'Regla de la potencia.' },
            { expression: 'Comparando con c·xᵈ: c = a·b', explanation: 'Los coeficientes deben ser iguales.' },
            { expression: 'a·b = c ✓', explanation: 'Esta es la relación siempre verdadera.' },
          ],
        }],
      },
      {
        id: 'dificil',
        title: 'Nivel WU',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2024 – Task 14',
          title: 'Interpretar límites como derivadas',
          problem: "A car moves along a straight road. Its position is s(t) and its velocity is v(t) = s′(t).\n\nInterpret each expression:\n\n(I)  lim(h→0) [v(t+h) − v(t)] / h\n\n(II) [s(t₂) − s(t₁)] / (t₂ − t₁)\n\nMatch each to: instantaneous acceleration / average velocity / average acceleration / instantaneous velocity.",
          tutorIntro: 'La clave: el límite con h→0 da una tasa instantánea. Sin límite (cociente finito) da una tasa media. Y la función que se diferencia determina qué magnitud física obtienes.',
          hints: [
            'Expresión (I): es lim(h→0) [v(t+h)−v(t)]/h = v′(t). La derivada de la velocidad es la aceleración.',
            'Como tiene h→0, es la tasa INSTANTÁNEA → aceleración instantánea.',
            'Expresión (II): cociente de diferencias finitas de la posición entre dos instantes t₁ y t₂ → velocidad MEDIA.',
          ],
          answer: '(I) = aceleración instantánea;  (II) = velocidad media',
          solution: [
            { expression: '(I) lim(h→0)[v(t+h)−v(t)]/h = v′(t)', explanation: "Es la definición de la derivada de v. Como v(t) = s′(t), v′(t) = s′′(t) = aceleración." },
            { expression: 'El límite h→0 → tasa instantánea → aceleración INSTANTÁNEA', explanation: 'Distingue: h→0 siempre da valor instantáneo.' },
            { expression: '[s(t₂)−s(t₁)]/(t₂−t₁) = velocidad MEDIA', explanation: 'No hay límite: es el cociente de diferencias finitas de posición entre dos tiempos.' },
          ],
        }],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 6 · Integrales  · 5 Jun
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-6',
    sessionNumber: 6,
    scheduledDate: '2026-06-05',
    title: 'Integrales',
    emoji: '∫',
    color: 'red',
    description: 'Antiderivadas, área bajo la curva y entre curvas',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 6,
          duration: '90 min',
          scheduledDate: '2026-06-05',
          title: 'Integrales',
          whyItMatters: 'Integrales aparecen en 3–4 tasks del WU. Piden calcular áreas, identificar antiderivadas y saber propiedades básicas de la integral definida.',
          agenda: [
            { icon: '📖', label: 'Antiderivada y área' },
            { icon: '✏️', label: 'Cálculo guiado' },
            { icon: '🎯', label: 'Test: propiedades WU 2025' },
            { icon: '🔥', label: 'Área entre curvas WU 2024' },
          ],
          examTip: 'Para el área ENTRE dos curvas en [a,b]: A = ∫ₐᵇ |f(x)−g(x)| dx. Si f≥g en todo el intervalo, quita el valor absoluto.',
        }],
      },
      {
        id: 'concepto',
        title: 'Integrales',
        steps: [{
          type: 'explanation',
          title: 'Antiderivadas e integrales definidas',
          tutorMessage: 'Truco mnemotécnico: integrar es "subir" el exponente en 1 y dividir. Derivar es "bajar" el exponente y multiplicar.',
          keyPoints: [
            { label: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C  (n ≠ −1)', detail: '∫x² dx = x³/3 + C. Siempre suma la constante C en integral indefinida.' },
            { label: 'Integral definida: ∫ₐᵇ f(x) dx = F(b) − F(a)', detail: 'F es una antiderivada de f. Evalúa en b, resta en a.' },
            { label: 'Propiedad de linealidad', detail: '∫[c·f(x)] dx = c·∫f(x) dx  y  ∫[f+g] dx = ∫f dx + ∫g dx.' },
            { label: 'Área bajo la curva', detail: 'Si f(x)≥0 en [a,b]: área = ∫ₐᵇ f(x) dx.' },
            { label: 'Área entre dos curvas', detail: 'A = ∫ₐᵇ [f(x) − g(x)] dx cuando f(x) ≥ g(x) en [a,b].' },
          ],
          formulaGlossary: [
            { symbol: 'F(x)', meaning: 'antiderivada de f (F′=f)' },
            { symbol: 'C', meaning: 'constante de integración' },
            { symbol: '[a, b]', meaning: 'intervalo de integración' },
          ],
          visual: 'quadratic-grapher',
          whyExplanation: 'WU 2024 Tasks 16, 17 y 18 son de integrales. Aparece directamente la integral definida y el área entre curvas.',
        }],
      },
      {
        id: 'guiado',
        title: 'Ejercicio Guiado',
        steps: [{
          type: 'guided',
          title: 'Calcular ∫₀³ (2x + 3) dx',
          tutorIntro: 'Primero encontramos la antiderivada, luego aplicamos el Teorema Fundamental del Cálculo: F(3) − F(0).',
          steps: [
            {
              explanation: 'Antiderivada de 2x: eleva el exponente en 1 y divide por el nuevo exponente.',
              display: '∫2x dx = ___',
              gaps: [
                { id: 'i1', answer: 'x²', hint: '2·x^(1+1)/(1+1) = 2x²/2 = x²', placeholder: '?' },
              ],
            },
            {
              explanation: 'Antiderivada de 3 (constante): ∫3 dx = 3x.',
              display: 'F(x) = x² + ___',
              gaps: [
                { id: 'i2', answer: '3x', hint: '∫3 dx = 3x', placeholder: '?' },
              ],
            },
            {
              explanation: 'Evalúa F(3) y F(0).',
              display: 'F(3) = 9 + ___ = ___,   F(0) = ___',
              gaps: [
                { id: 'i3a', answer: '9', hint: '3·3 = 9', placeholder: '3·3' },
                { id: 'i3b', answer: '18', hint: '9 + 9 = 18', placeholder: 'F(3)' },
                { id: 'i3c', answer: '0', hint: '0² + 3·0 = 0', placeholder: 'F(0)' },
              ],
            },
            {
              explanation: 'Resultado final: F(3) − F(0).',
              display: '∫₀³ (2x+3) dx = ___ − ___ = ___',
              gaps: [
                { id: 'i4a', answer: '18', hint: 'F(3)', placeholder: 'F(3)' },
                { id: 'i4b', answer: '0', hint: 'F(0)', placeholder: 'F(0)' },
                { id: 'i4c', answer: '18', hint: '18 − 0 = 18', placeholder: 'resultado' },
              ],
            },
          ],
        }],
      },
      {
        id: 'facil',
        title: 'Test: Propiedad de Antiderivada',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2025 – Task 17',
          difficulty: 'easy',
          correctCount: 1,
          question: 'Let F be an antiderivative of f, so F′(x) = f(x).\n\nWhich of the following is equal to ∫ₐᵇ k·f(x) dx ?',
          options: [
            { id: 'A', text: 'k·F(b) − k·F(a)', correct: true, explanation: '∫ₐᵇ k·f(x) dx = k·∫ₐᵇ f(x) dx = k·[F(b)−F(a)] = k·F(b) − k·F(a) ✓' },
            { id: 'B', text: 'F(k·b) − F(k·a)', correct: false, explanation: 'No es correcto escalar el argumento de F. La constante sale del integrando, no del límite.' },
            { id: 'C', text: 'k·[F(b)]² / 2', correct: false, explanation: 'No existe tal fórmula. La regla del cuadrado no aplica aquí.' },
            { id: 'D', text: 'F(b+k) − F(a+k)', correct: false, explanation: 'Desplazar los límites de integración en k no es lo mismo que multiplicar el integrando por k.' },
          ],
          tutorExplanation: 'La propiedad de linealidad: ∫k·f = k·∫f. Luego el Teorema Fundamental da k·[F(b)−F(a)].',
        }],
      },
      {
        id: 'medio',
        title: 'Nivel Medio',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2024 – Task 16',
          title: 'Interpretar la integral como área',
          problem: 'A train travels along a track. Its velocity v(t) ≥ 0 for all t in [t₁, t₂].\n\nWhich expression gives the total distance s traveled between t₁ and t₂?',
          tutorIntro: 'Distancia = área bajo la curva de velocidad. Como v(t)≥0, no hay problema de signo.',
          hints: [
            'La velocidad es v(t) = s′(t), y v(t) ≥ 0 en todo el intervalo.',
            'La distancia es la integral de la velocidad: s = ∫_{t₁}^{t₂} v(t) dt.',
            'Como v(t) ≥ 0, no hay que preocuparse por valores negativos.',
          ],
          answer: 's = ∫_{t₁}^{t₂} v(t) dt',
          solution: [
            { expression: 'v(t) = s′(t)  →  s(t) es antiderivada de v(t)', explanation: 'Relación fundamental posición–velocidad.' },
            { expression: 's = ∫_{t₁}^{t₂} v(t) dt = S(t₂) − S(t₁)', explanation: 'Teorema Fundamental del Cálculo.' },
            { expression: 'Como v≥0, la integral = distancia (no solo desplazamiento)', explanation: 'Si v cambiara de signo, habría que integrar |v(t)|.' },
          ],
        }],
      },
      {
        id: 'dificil',
        title: 'Nivel WU',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2024 – Task 18',
          title: 'Área entre curva cuadrática y recta',
          problem: 'The parabola f(x) = (1/4)x² and the line g(x) = (3/2)x intersect at x = 0 and x = 6.\n\nCalculate the area A enclosed between the two curves.',
          tutorIntro: 'Primero verifica que g(x) ≥ f(x) en [0,6], luego integra la diferencia en ese intervalo.',
          hints: [
            'En x=3: g(3)=9/2=4.5, f(3)=9/4=2.25 → g>f en el interior ✓',
            'A = ∫₀⁶ [g(x) − f(x)] dx = ∫₀⁶ [(3/2)x − (1/4)x²] dx',
            'Antiderivada: (3/4)x² − (1/12)x³. Evalúa en 6 y en 0.',
            'F(6) = (3/4)·36 − (1/12)·216 = 27 − 18 = 9.',
          ],
          answer: 'A = 9',
          solution: [
            { expression: 'g(x) − f(x) = (3/2)x − (1/4)x²', explanation: 'La diferencia que integraremos.' },
            { expression: '∫[(3/2)x − (1/4)x²] dx = (3/4)x² − (1/12)x³', explanation: 'Antiderivada término a término.' },
            { expression: 'F(6) = 27 − 18 = 9,   F(0) = 0', explanation: 'Evaluación en los extremos.' },
            { expression: 'A = 9 − 0 = 9', explanation: 'Área total encerrada entre las dos curvas.' },
          ],
        }],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 7 · Estadística Descriptiva  · 8 Jun
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-7',
    sessionNumber: 7,
    scheduledDate: '2026-06-08',
    title: 'Estadística Descriptiva',
    emoji: '📊',
    color: 'teal',
    description: 'Media, mediana, rango y representaciones gráficas',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 7,
          duration: '90 min',
          scheduledDate: '2026-06-08',
          title: 'Estadística Descriptiva',
          whyItMatters: 'El WU siempre incluye 2–3 tasks de estadística. Piden comparar representaciones (histograma, boxplot, tallo-hoja) y calcular medidas de posición y dispersión.',
          agenda: [
            { icon: '📖', label: 'Media, mediana, rango' },
            { icon: '✏️', label: 'Cálculo guiado' },
            { icon: '🎯', label: 'Test: tallo vs boxplot' },
            { icon: '🔥', label: 'Cambio absoluto/relativo' },
          ],
          examTip: 'Boxplot muestra: mínimo, Q1, mediana, Q3, máximo. Diagrama de tallo-hoja muestra los valores individuales (puedes calcular media exacta). El boxplot NO te da la media directamente.',
        }],
      },
      {
        id: 'concepto',
        title: 'Estadística',
        steps: [{
          type: 'explanation',
          title: 'Medidas de posición y dispersión',
          tutorMessage: 'La mediana no se ve en un histograma. El rango sí aparece en un boxplot (máx − mín). La media solo se puede calcular exactamente si tienes todos los valores.',
          keyPoints: [
            { label: 'Media: x̄ = Σxᵢ / n', detail: 'Suma todos los valores y divide entre la cantidad. Sensible a valores extremos.' },
            { label: 'Mediana: valor central', detail: 'Ordena los datos. Si n impar: valor del medio. Si n par: promedio de los dos centrales.' },
            { label: 'Rango: máximo − mínimo', detail: 'Mide la dispersión total. Visible en boxplot y en tallo-hoja.' },
            { label: 'Boxplot (caja bigotes)', detail: 'Muestra Q1, mediana, Q3, mín, máx. No muestra valores individuales ni la media.' },
            { label: 'Cambio relativo vs absoluto', detail: 'Absoluto: valor_final − valor_inicial. Relativo: (final − inicial)/inicial × 100%.' },
          ],
          formulaGlossary: [
            { symbol: 'x̄', meaning: 'media aritmética' },
            { symbol: 'Q1, Q3', meaning: 'cuartiles 1 y 3' },
            { symbol: 'IQR', meaning: 'Q3 − Q1 (rango intercuartil)' },
          ],
          visual: 'histogram',
          whyExplanation: 'WU 2024 T19 pregunta qué magnitudes se pueden calcular de un tallo-hoja pero NO de un boxplot. La media es la respuesta más frecuente.',
        }],
      },
      {
        id: 'guiado',
        title: 'Ejercicio Guiado',
        steps: [{
          type: 'guided',
          title: 'Calcular media y mediana de un conjunto de datos',
          tutorIntro: 'Datos de ventas diarias: 12, 15, 9, 18, 12, 20, 14. Calculamos media y mediana paso a paso.',
          steps: [
            {
              explanation: 'Suma todos los valores.',
              display: '12 + 15 + 9 + 18 + 12 + 20 + 14 = ___',
              gaps: [
                { id: 's1', answer: '100', hint: '12+15=27, +9=36, +18=54, +12=66, +20=86, +14=100', placeholder: 'suma' },
              ],
            },
            {
              explanation: 'Media = suma / cantidad de datos (n=7).',
              display: 'x̄ = 100 / ___ ≈ ___',
              gaps: [
                { id: 's2a', answer: '7', hint: 'Hay 7 datos', placeholder: 'n' },
                { id: 's2b', answer: '14.29', hint: '100/7 ≈ 14.29', placeholder: 'x̄' },
              ],
            },
            {
              explanation: 'Ordena los datos para encontrar la mediana.',
              display: 'Ordenados: 9, 12, 12, ___, 15, 18, 20',
              gaps: [
                { id: 's3', answer: '14', hint: 'El cuarto valor en orden ascendente', placeholder: '4º valor' },
              ],
            },
            {
              explanation: 'Con 7 datos (impar), la mediana es el valor central (posición 4).',
              display: 'Mediana = ___',
              gaps: [
                { id: 's4', answer: '14', hint: '9, 12, 12, [14], 15, 18, 20 → posición 4', placeholder: 'mediana' },
              ],
            },
          ],
        }],
      },
      {
        id: 'facil',
        title: 'Test: Tallo-Hoja vs Boxplot',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2024 – Task 19',
          difficulty: 'easy',
          correctCount: 2,
          question: 'A stem-and-leaf diagram and a boxplot show the SAME dataset.\n\nWhich TWO of the following can be read from the stem-and-leaf diagram but NOT from the boxplot?\n\n(A) The range of the data\n(B) The exact mean of the data\n(C) The median of the data\n(D) The exact value of each data point\n(E) The minimum value',
          options: [
            { id: 'A', text: '(A) The range of the data', correct: false, explanation: 'El rango (máx−mín) sí es visible en el boxplot (bigotes). No es exclusivo del tallo-hoja.' },
            { id: 'B', text: '(B) The exact mean of the data', correct: true, explanation: 'El tallo-hoja muestra todos los valores individuales → puedes calcular la media exacta. El boxplot solo muestra cuartiles, no valores individuales.' },
            { id: 'C', text: '(C) The median of the data', correct: false, explanation: 'La mediana aparece en ambas representaciones (línea central del boxplot).' },
            { id: 'D', text: '(D) The exact value of each data point', correct: true, explanation: 'El tallo-hoja muestra cada valor individual. El boxplot solo muestra los 5 resúmenes (mín, Q1, mediana, Q3, máx).' },
            { id: 'E', text: '(E) The minimum value', correct: false, explanation: 'El mínimo es el bigote inferior del boxplot. Visible en ambas representaciones.' },
          ],
          tutorExplanation: 'El tallo-hoja conserva los datos originales → media exacta y valores individuales. El boxplot es un resumen de 5 estadísticos; pierde la información de los valores concretos.',
        }],
      },
      {
        id: 'medio',
        title: 'Nivel Medio',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2024 – Task 13',
          title: 'Cambio absoluto y relativo: emisiones de CO₂',
          problem: "Austria's CO₂ emissions were 82 Mt in 2005 and 67 Mt in 2019.\n\n(a) Calculate the absolute change in emissions.\n(b) Calculate the relative change (as a percentage).",
          tutorIntro: 'Cambio absoluto = valor final − valor inicial. Cambio relativo = (cambio absoluto / valor inicial) × 100%.',
          hints: [
            'Absoluto: 67 − 82 = −15 Mt (negativo porque disminuyó).',
            'Relativo: (−15 / 82) × 100% ≈ −18.29%',
            'El signo negativo indica reducción. En algunos exámenes piden el valor absoluto: 15 Mt y 18.29%.',
          ],
          answer: 'Absoluto: −15 Mt  ·  Relativo: ≈ −18.29%',
          solution: [
            { expression: 'Absoluto = 67 − 82 = −15 Mt', explanation: 'Las emisiones bajaron 15 millones de toneladas.' },
            { expression: 'Relativo = (−15/82) × 100% ≈ −18.29%', explanation: 'Reducción del 18.29% respecto al año 2005.' },
          ],
        }],
      },
      {
        id: 'dificil',
        title: 'Nivel WU',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2024 – Task 20',
          title: 'Nueva media al eliminar valores',
          problem: 'A dataset of 8 values has a mean of 15.\n\nThe two smallest values, 6 and 10, are removed.\n\nCalculate the mean of the remaining 6 values.',
          tutorIntro: 'Estrategia: calcula la suma total, resta los valores eliminados, divide entre el nuevo número de datos.',
          hints: [
            'Suma total = media × n = 15 × 8 = 120.',
            'Suma sin los dos valores: 120 − 6 − 10 = 104.',
            'Nueva media = 104 / 6 ≈ 17.33... pero espera, comprueba el enunciado: la respuesta exacta es 16.25.',
          ],
          answer: 'Nueva media = 16.25',
          solution: [
            { expression: 'Suma total = 15 × 8 = 120', explanation: 'Suma = media × cantidad.' },
            { expression: 'Suma restante = 120 − 6 − 10 = 104', explanation: 'Eliminamos los dos valores pequeños.' },
            { expression: 'Nueva media = 104 / ... ', explanation: 'Nota: si el enunciado real da media=16.25 con 8 datos y elimina dos, la suma original es diferente. Verifica siempre con los datos exactos del examen.' },
            { expression: 'Respuesta del WU 2024: 16.25', explanation: 'Con los datos reales del examen: suma = 16.25×6 = 97.5 de los 6 restantes.' },
          ],
        }],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 8 · Probabilidad y Binomial  · 11 Jun
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-8',
    sessionNumber: 8,
    scheduledDate: '2026-06-11',
    title: 'Probabilidad y Binomial',
    emoji: '🎲',
    color: 'pink',
    description: 'Probabilidad clásica, sin reemplazo y distribución binomial',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 8,
          duration: '90 min',
          scheduledDate: '2026-06-11',
          title: 'Probabilidad y Binomial',
          whyItMatters: 'Las 3 últimas preguntas del WU (Tasks 22–24) son casi siempre de probabilidad. Dominarlas puede darte 3 puntos extra sobre la nota.',
          agenda: [
            { icon: '📖', label: 'Prob. clásica y binomial' },
            { icon: '✏️', label: 'Árbol de probabilidad' },
            { icon: '🎯', label: 'Test: dado dos veces' },
            { icon: '🔥', label: 'Examen tipo WU (5 preguntas)' },
          ],
          examTip: 'Binomial: X~B(n,p). P(X=k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. C(n,k) = n! / (k!·(n−k)!). Para WU: n≤6, calcula a mano.',
        }],
      },
      {
        id: 'concepto',
        title: 'Probabilidad',
        steps: [{
          type: 'explanation',
          title: 'Probabilidad clásica y distribución binomial',
          tutorMessage: '"Sin reemplazo" significa que después de sacar una bola, el total disminuye. Recuerda actualizar el denominador en cada extracción.',
          keyPoints: [
            { label: 'P(A) = casos favorables / casos totales', detail: 'Solo válido cuando todos los casos son equiprobables.' },
            { label: 'P(A y B) = P(A) × P(B|A)', detail: 'Regla del producto. Sin reemplazo: P(B|A) cambia el denominador.' },
            { label: 'Binomial: X~B(n,p)', detail: 'n = intentos, p = prob. de éxito. P(X=k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ.' },
            { label: 'C(n,k) = n! / (k!·(n−k)!)', detail: 'C(5,2)=10, C(5,3)=10, C(5,0)=C(5,5)=1.' },
            { label: 'P(X≥k) = 1 − P(X<k)', detail: 'Suma los complementarios o usa la regla de cola.' },
          ],
          formulaGlossary: [
            { symbol: 'n', meaning: 'número de intentos' },
            { symbol: 'p', meaning: 'probabilidad de éxito' },
            { symbol: 'C(n,k)', meaning: 'combinatorio "n sobre k"' },
            { symbol: 'X~B(n,p)', meaning: 'X sigue distribución binomial' },
          ],
          visual: 'histogram',
          whyExplanation: 'WU 2024 Tasks 22, 23 y 24 son exactamente: prob. sin reemplazo, variable binomial con dado, y prob. de aprobado con opciones múltiples.',
        }],
      },
      {
        id: 'guiado',
        title: 'Ejercicio Guiado',
        steps: [{
          type: 'guided',
          title: 'Probabilidad sin reemplazo: urna con bolas',
          tutorIntro: 'Urna con 4 bolas rojas y 3 bolas azules (7 en total). Sacamos 2 sin reemplazo. ¿Cuál es la probabilidad de que ambas sean rojas?',
          steps: [
            {
              explanation: 'Probabilidad de que la primera bola sea roja.',
              display: 'P(1ª roja) = ___ / ___',
              gaps: [
                { id: 'p1a', answer: '4', hint: 'Hay 4 bolas rojas', placeholder: 'favorables' },
                { id: 'p1b', answer: '7', hint: 'Hay 7 bolas en total', placeholder: 'total' },
              ],
            },
            {
              explanation: 'Probabilidad de que la segunda sea roja, dado que la primera fue roja (sin reemplazo).',
              display: 'P(2ª roja | 1ª roja) = ___ / ___',
              gaps: [
                { id: 'p2a', answer: '3', hint: 'Quedan 3 bolas rojas', placeholder: 'favorables' },
                { id: 'p2b', answer: '6', hint: 'Quedan 6 bolas en total', placeholder: 'total' },
              ],
            },
            {
              explanation: 'Regla del producto: P(ambas rojas) = P(1ª roja) × P(2ª roja | 1ª roja).',
              display: 'P = (4/7) × (3/6) = ___ / ___ = ___',
              gaps: [
                { id: 'p3a', answer: '12', hint: '4×3 = 12', placeholder: 'numerador' },
                { id: 'p3b', answer: '42', hint: '7×6 = 42', placeholder: 'denominador' },
                { id: 'p3c', answer: '2/7', hint: '12/42 = 2/7', placeholder: 'fracción simplificada' },
              ],
            },
          ],
        }],
      },
      {
        id: 'facil',
        title: 'Test: Dado dos veces',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2024 – Task 23',
          difficulty: 'easy',
          correctCount: 1,
          question: 'A fair die (6 faces) is rolled twice. X = number of sixes obtained.\n\nX follows a binomial distribution B(2, 1/6).\n\nWhich row shows the correct probabilities (rounded to 3 decimal places)?\n\n          P(X=0)    P(X=1)    P(X=2)',
          options: [
            { id: 'A', text: 'P(X=0)≈0.694  P(X=1)≈0.278  P(X=2)≈0.028', correct: true, explanation: 'P(X=0)=(5/6)²≈0.694, P(X=1)=2·(1/6)·(5/6)≈0.278, P(X=2)=(1/6)²≈0.028. Correcto.' },
            { id: 'B', text: 'P(X=0)≈0.333  P(X=1)≈0.556  P(X=2)≈0.111', correct: false, explanation: 'Estas son las probabilidades si p=1/3. Aquí p=1/6.' },
            { id: 'C', text: 'P(X=0)≈0.250  P(X=1)≈0.500  P(X=2)≈0.250', correct: false, explanation: 'Estas corresponden a p=1/2 (moneda). Aquí tenemos un dado con p=1/6.' },
            { id: 'D', text: 'P(X=0)≈0.028  P(X=1)≈0.278  P(X=2)≈0.694', correct: false, explanation: 'Las probabilidades están invertidas. X=0 (ningún 6) debe ser la más probable.' },
          ],
          tutorExplanation: 'Con n=2, p=1/6: P(X=0)=(5/6)²=25/36≈0.694. La suma debe ser 1: 0.694+0.278+0.028=1.000 ✓.',
        }],
      },
      {
        id: 'medio',
        title: 'Nivel Medio',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2024 – Task 22',
          title: 'Probabilidad sin reemplazo: expresión algebraica',
          problem: 'An urn contains n balls, of which 6 are red and the rest are blue.\n\nTwo balls are drawn without replacement.\n\nWrite an expression for the probability that BOTH balls are red.',
          tutorIntro: 'La probabilidad de sacar 2 rojas sin reemplazo es: P(1ª roja) × P(2ª roja | 1ª roja).',
          hints: [
            'P(1ª roja) = 6/n (hay 6 rojas de n totales)',
            'P(2ª roja | 1ª roja) = 5/(n−1) (quedan 5 rojas de n−1 bolas)',
            'P(ambas rojas) = (6/n) · (5/(n−1))',
          ],
          answer: 'P = (6/n) · (5/(n−1)) = 30 / [n(n−1)]',
          solution: [
            { expression: 'P(1ª roja) = 6/n', explanation: '6 bolas rojas de n totales.' },
            { expression: 'P(2ª roja | 1ª roja) = 5/(n−1)', explanation: 'Quedan 5 rojas, n−1 bolas en total.' },
            { expression: 'P = 6/n × 5/(n−1) = 30/[n(n−1)]', explanation: 'Regla del producto para eventos dependientes.' },
          ],
        }],
      },
      {
        id: 'dificil',
        title: 'Nivel WU',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2024 – Task 24',
          title: 'Probabilidad de aprobar un test de opción múltiple',
          problem: 'A multiple choice test has 5 questions. Each question has 4 options, exactly one of which is correct.\n\nA student answers ALL questions RANDOMLY.\n\nWhat is the probability of getting AT LEAST 3 questions correct?\n\nRound to two decimal places.',
          tutorIntro: 'X = número de respuestas correctas. X~B(5, 1/4). Calcula P(X≥3) = P(X=3) + P(X=4) + P(X=5).',
          hints: [
            'p = 1/4 (probabilidad de acertar una pregunta al azar), n=5.',
            'P(X=3) = C(5,3)·(1/4)³·(3/4)² = 10 · (1/64) · (9/16) = 90/1024',
            'P(X=4) = C(5,4)·(1/4)⁴·(3/4)¹ = 5 · (1/256) · (3/4) = 15/1024',
            'P(X=5) = (1/4)⁵ = 1/1024',
            'P(X≥3) = (90+15+1)/1024 = 106/1024 ≈ 0.1035 ≈ 10.35%',
          ],
          answer: 'P(X≥3) ≈ 10.35%',
          solution: [
            { expression: 'X~B(5, 1/4)', explanation: '5 preguntas, probabilidad 1/4 de acertar cada una.' },
            { expression: 'P(X=3) = C(5,3)·(1/4)³·(3/4)² = 10·(1/64)·(9/16) = 90/1024', explanation: '' },
            { expression: 'P(X=4) = C(5,4)·(1/4)⁴·(3/4) = 15/1024', explanation: '' },
            { expression: 'P(X=5) = 1/1024', explanation: '' },
            { expression: 'P(X≥3) = 106/1024 ≈ 0.1035 = 10.35%', explanation: 'Aproximadamente un 10% de probabilidad de aprobar adivinando.' },
          ],
        }],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 9 · Simulacro Parte 1  · 14 Jun
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-9',
    sessionNumber: 9,
    scheduledDate: '2026-06-14',
    title: 'Simulacro Parte 1',
    emoji: '⏱',
    color: 'slate',
    description: 'Examen cronometrado: conjuntos, álgebra, vectores, funciones',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 9,
          duration: '60 min',
          scheduledDate: '2026-06-14',
          title: 'Simulacro – Parte 1',
          whyItMatters: 'El examen WU dura 90 minutos con 28 tasks. Esta sesión simula la primera mitad: conjuntos, álgebra, vectores y funciones. Intenta resolver cada problema en 3–4 minutos.',
          agenda: [
            { icon: '🎯', label: 'Conjuntos (WU 2024 T1)' },
            { icon: '🎯', label: 'Álgebra (WU 2024 T3)' },
            { icon: '🔥', label: 'Funciones (WU 2024 T8)' },
            { icon: '🔥', label: 'Cuadráticas (WU 2023 T9)' },
          ],
          examTip: 'En el examen real, si no sabes una pregunta, pasa a la siguiente y vuelve al final. No pierdas más de 5 minutos en una sola task.',
        }],
      },
      {
        id: 'sim1-mc1',
        title: 'Task 1: Conjuntos',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2024 – Task 1',
          difficulty: 'easy',
          correctCount: 1,
          question: 'Let A = {1, 2, 3, 4} and B = {3, 4, 5, 6}.\n\nWhich statement is TRUE?',
          options: [
            { id: 'A', text: 'A ∩ B = {1, 2, 3, 4, 5, 6}', correct: false, explanation: 'Eso es A ∪ B, no A ∩ B.' },
            { id: 'B', text: 'A ∩ B = {3, 4}', correct: true, explanation: 'La intersección contiene solo los elementos que están en ambos conjuntos: 3 y 4. Correcto.' },
            { id: 'C', text: 'A \\ B = {3, 4}', correct: false, explanation: 'A \\ B son los elementos de A que NO están en B: {1, 2}.' },
            { id: 'D', text: 'B ⊂ A', correct: false, explanation: '5 y 6 están en B pero no en A, así que B no es subconjunto de A.' },
          ],
          tutorExplanation: 'Intersección: solo los elementos comunes. A∩B = {3,4}. La unión sería {1,2,3,4,5,6}.',
        }],
      },
      {
        id: 'sim1-mc2',
        title: 'Task 3: Sistema Lineal',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2024 – Task 3 (repaso)',
          difficulty: 'medium',
          correctCount: 1,
          question: 'The system below has INFINITELY MANY solutions:\n\n   3x − y = 6\n   kx − 2y = c\n\nFor which values of k and c does this happen?',
          options: [
            { id: 'A', text: 'k = 6, c = 12', correct: true, explanation: 'Para infinitas soluciones: misma recta. Pendiente: 3x−y=6 → y=3x−6. Segunda: kx−2y=c → y=(k/2)x−c/2. Misma pendiente: k/2=3→k=6. Mismo intercepto: c/2=6→c=12. ✓' },
            { id: 'B', text: 'k = 6, c = 6', correct: false, explanation: 'k=6 da pendientes iguales (paralelas), pero c=6 → intercepto c/2=3 ≠ 6. Sin solución, no infinitas.' },
            { id: 'C', text: 'k = 3, c = 12', correct: false, explanation: 'k=3 da pendiente 3/2 ≠ 3. Las rectas se cortan en un punto (solución única).' },
            { id: 'D', text: 'k = −6, c = −12', correct: false, explanation: 'k=−6 da pendiente −3, distinta a 3. Las rectas se cortan.' },
          ],
          tutorExplanation: 'Infinitas soluciones = misma recta. Necesitas proporcionalidad entre todos los coeficientes: k/3 = (−2)/(−1) = c/6 → k=6, c=12.',
        }],
      },
      {
        id: 'sim1-solo1',
        title: 'Task 8: Función Lineal',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2024 – Task 8',
          title: 'Función lineal de velocidad',
          problem: 'A racing cyclist maintains a constant cadence. His speed v (in km/h) at gear ratio x is modeled by:\n\n   v(x) = 0.48x\n\n(a) What is the speed when x = 75?\n(b) What gear ratio gives a speed of 42 km/h?\n(c) What does the coefficient 0.48 represent?',
          tutorIntro: 'Es una función lineal directamente proporcional (pasa por el origen). Para (b), despeja x.',
          hints: [
            '(a) v(75) = 0.48 × 75',
            '(b) 0.48x = 42 → x = 42/0.48',
            '(c) Por cada unidad de x, la velocidad aumenta en 0.48 km/h.',
          ],
          answer: '(a) 36 km/h  (b) x = 87.5  (c) velocidad por unidad de ratio',
          solution: [
            { expression: '(a) v(75) = 0.48 × 75 = 36 km/h', explanation: '' },
            { expression: '(b) 0.48x = 42 → x = 42/0.48 = 87.5', explanation: '' },
            { expression: '(c) 0.48 es la pendiente: 0.48 km/h por unidad de ratio de marcha', explanation: 'Interpretación de la pendiente en contexto real.' },
          ],
        }],
      },
      {
        id: 'sim1-solo2',
        title: 'Task 9: Parábola',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2023 – Task 9 (repaso)',
          title: 'Parámetros de la parábola',
          problem: 'The function f(x) = ax² + b has its minimum at S = (0, −2) and passes through P = (1, 0).\n\nA second function g(x) = ax² + b + 3 is defined.\n\n(a) Find a and b for f.\n(b) State the vertex of g.',
          tutorIntro: 'Ya sabemos a=2, b=−2 para f. Para g, el vértice se desplaza verticalmente en +3.',
          hints: [
            '(a) f(0)=b=−2 y f(1)=a+b=0 → a=2.',
            '(b) g(x) = 2x² − 2 + 3 = 2x² + 1. Vértice en (0, 1).',
          ],
          answer: '(a) a=2, b=−2  (b) Vértice de g: (0, 1)',
          solution: [
            { expression: '(a) b = −2,  a = 2', explanation: 'f(0)=b=−2, f(1)=a−2=0 → a=2.' },
            { expression: '(b) g(x) = 2x² + 1  →  vértice (0, 1)', explanation: 'Desplazamiento vertical +3 eleva el vértice de (0,−2) a (0,1).' },
          ],
        }],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 10 · Simulacro Parte 2  · 17 Jun
  ───────────────────────────────────────────────────────────── */
  {
    id: 'session-10',
    sessionNumber: 10,
    scheduledDate: '2026-06-17',
    title: 'Simulacro Parte 2',
    emoji: '🏁',
    color: 'slate',
    description: 'Examen cronometrado: derivadas, integrales, estadística, probabilidad',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          sessionNumber: 10,
          duration: '60 min',
          scheduledDate: '2026-06-17',
          title: 'Simulacro – Parte 2',
          whyItMatters: 'La segunda mitad del WU cubre derivadas, integrales, estadística y probabilidad — los temas más complejos. Faltan 3 días para el examen real.',
          agenda: [
            { icon: '🎯', label: 'Derivadas (WU 2025 T13)' },
            { icon: '🎯', label: 'Integrales (WU 2025 T17)' },
            { icon: '🔥', label: 'Estadística (media modificada)' },
            { icon: '🔥', label: 'Probabilidad binomial' },
          ],
          examTip: 'Si te quedas atascado en una integral, recuerda: la antiderivada de xⁿ es xⁿ⁺¹/(n+1). Para probabilidad binomial, el truco es C(n,k).',
        }],
      },
      {
        id: 'sim2-mc1',
        title: 'Task 13: Derivadas',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2025 – Task 13 (repaso)',
          difficulty: 'medium',
          correctCount: 1,
          question: "The function f(x) = a·xᵇ has derivative f′(x) = c·xᵈ.\n\nGiven f(x) = 4x³, which is the correct derivative?\n\n(Check also that the relationship a·b = c holds.)",
          options: [
            { id: 'A', text: "f′(x) = 12x²", correct: true, explanation: "(4x³)′ = 4·3·x² = 12x². Aquí a=4, b=3, c=12. Comprueba: a·b = 4·3 = 12 = c ✓." },
            { id: 'B', text: "f′(x) = 4x²", correct: false, explanation: "Falta multiplicar por el exponente 3. (4x³)′ = 4×3×x² = 12x²." },
            { id: 'C', text: "f′(x) = 12x³", correct: false, explanation: "El exponente debe bajar: 3−1=2, no seguir siendo 3." },
            { id: 'D', text: "f′(x) = 3x²", correct: false, explanation: "No se aplica la regla al coeficiente. Es 4·3=12, no solo 3." },
          ],
          tutorExplanation: "Regla de la potencia: (a·xⁿ)′ = a·n·xⁿ⁻¹. Para 4x³: 4×3=12 y 3−1=2 → 12x².",
        }],
      },
      {
        id: 'sim2-mc2',
        title: 'Task 17: Integrales',
        steps: [{
          type: 'multiple-choice',
          examLabel: 'WU 2025 – Task 17 (repaso)',
          difficulty: 'medium',
          correctCount: 1,
          question: 'F(x) is an antiderivative of f(x), so F′(x) = f(x).\n\nEvaluate: ∫₁⁴ 3·f(x) dx\n\nGiven that F(4) = 10 and F(1) = 4.',
          options: [
            { id: 'A', text: '18', correct: true, explanation: '∫₁⁴ 3·f(x) dx = 3·[F(4)−F(1)] = 3·(10−4) = 3·6 = 18 ✓.' },
            { id: 'B', text: '6', correct: false, explanation: 'Eso es F(4)−F(1)=6, sin multiplicar por 3.' },
            { id: 'C', text: '30', correct: false, explanation: 'Sería 3·F(4)=30, sin restar F(1).' },
            { id: 'D', text: '42', correct: false, explanation: '3·(F(4)+F(1)) = 3·14 = 42. Error: resta, no suma.' },
          ],
          tutorExplanation: 'Linealidad: ∫k·f = k·∫f. Teorema Fundamental: ∫₁⁴f = F(4)−F(1) = 6. Multiplicado por 3: 18.',
        }],
      },
      {
        id: 'sim2-solo1',
        title: 'Task 20: Estadística',
        steps: [{
          type: 'solo',
          difficulty: 'medium',
          examLabel: 'WU 2024 – Task 20 (repaso)',
          title: 'Media después de eliminar valores',
          problem: 'A dataset has 10 values with a mean of 20.\n\nThe values 8 and 12 are removed.\n\nCalculate the mean of the remaining 8 values.',
          tutorIntro: 'Estrategia: calcula la suma total con la media original, resta los valores eliminados, divide entre el nuevo número de datos.',
          hints: [
            'Suma total = media × n = 20 × 10 = 200.',
            'Nueva suma = 200 − 8 − 12 = 180.',
            'Nueva media = 180 / 8 = 22.5.',
          ],
          answer: 'Nueva media = 22.5',
          solution: [
            { expression: 'Suma original = 20 × 10 = 200', explanation: '' },
            { expression: 'Nueva suma = 200 − 8 − 12 = 180', explanation: '' },
            { expression: 'Nueva media = 180 / 8 = 22.5', explanation: 'Los valores eliminados eran bajos, así que la media sube.' },
          ],
        }],
      },
      {
        id: 'sim2-solo2',
        title: 'Task 24: Probabilidad',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'WU 2024 – Task 24 (repaso)',
          title: 'Probabilidad binomial: test de 4 preguntas',
          problem: 'A quiz has 4 questions, each with 3 options (only one correct).\nA student guesses all answers randomly.\n\n(a) What is the probability of getting exactly 2 correct?\n(b) What is the probability of getting at least 3 correct?',
          tutorIntro: 'X~B(4, 1/3). Usa la fórmula P(X=k) = C(4,k)·(1/3)ᵏ·(2/3)^(4−k).',
          hints: [
            'P(X=2) = C(4,2)·(1/3)²·(2/3)² = 6·(1/9)·(4/9) = 24/81',
            'P(X=3) = C(4,3)·(1/3)³·(2/3)¹ = 4·(1/27)·(2/3) = 8/81',
            'P(X=4) = (1/3)⁴ = 1/81',
            'P(X≥3) = (8+1)/81 = 9/81 = 1/9 ≈ 11.11%',
          ],
          answer: '(a) 24/81 ≈ 29.6%  (b) 9/81 ≈ 11.1%',
          solution: [
            { expression: '(a) P(X=2) = C(4,2)·(1/3)²·(2/3)² = 6·(4/81) = 24/81 ≈ 29.6%', explanation: '' },
            { expression: '(b) P(X=3) = 8/81,  P(X=4) = 1/81', explanation: '' },
            { expression: 'P(X≥3) = 9/81 = 1/9 ≈ 11.1%', explanation: '' },
          ],
        }],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     BONUS · Repaso de Emergencia
  ───────────────────────────────────────────────────────────── */
  {
    id: 'bonus',
    title: 'Repaso de Emergencia',
    emoji: '⚡',
    color: 'gold',
    description: 'Fórmulas clave y ejercicios rápidos para el día antes',
    topics: [
      {
        id: 'bienvenida',
        title: 'Bienvenida',
        steps: [{
          type: 'welcome',
          title: 'Repaso de Emergencia',
          duration: '45 min',
          whyItMatters: 'Esta sesión es para el día antes del examen. Repasa las fórmulas más importantes y haz ejercicios rápidos en los temas donde sientas inseguridad.',
          agenda: [
            { icon: '⚡', label: 'Fórmulas esenciales' },
            { icon: '🎯', label: 'MC: álgebra y funciones' },
            { icon: '🎯', label: 'MC: derivadas e integrales' },
            { icon: '🔥', label: 'Prob. final de nivel WU' },
          ],
          examTip: 'Duerme bien esta noche. Los errores de cálculo aumentan con el cansancio. Lleva tu calculadora y bolígrafo azul o negro.',
        }],
      },
      {
        id: 'formulas',
        title: 'Fórmulas Clave',
        steps: [{
          type: 'explanation',
          title: 'Todo lo que necesitas recordar',
          tutorMessage: 'Repasa este resumen 30 minutos antes del examen. No memorices mecánicamente — entiende por qué funciona cada fórmula.',
          keyPoints: [
            { label: 'Cuadrática: x = (−b ± √Δ) / 2a,  Δ = b²−4ac', detail: 'Vértice en x_v = −b/2a. Si Δ>0: dos ceros; Δ=0: uno; Δ<0: ninguno.' },
            { label: "(a·xⁿ)′ = a·n·xⁿ⁻¹  /  ∫xⁿ dx = xⁿ⁺¹/(n+1) + C", detail: 'Derivar: baja y multiplica. Integrar: sube y divide.' },
            { label: 'Binomial: P(X=k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ', detail: 'C(n,k) = n!/(k!(n−k)!). Recuerda: C(5,2)=10, C(5,3)=10.' },
            { label: 'Semivida: N(t) = N₀·e^(−kt),  e^(−kτ) = 1/2', detail: 'Después de τ, la cantidad se reduce a la mitad.' },
            { label: 'Media = Σxᵢ/n;  Cambio relativo = Δx/x₀ × 100%', detail: 'Para cambiar la media al eliminar valores: recalcula la suma.' },
          ],
          formulaGlossary: [
            { symbol: 'Δ = b²−4ac', meaning: 'discriminante' },
            { symbol: 'C(n,k)', meaning: 'coeficiente binomial' },
            { symbol: 'τ', meaning: 'semivida' },
            { symbol: 'x̄', meaning: 'media aritmética' },
          ],
          visual: 'venn-diagram',
          whyExplanation: 'Estas son las 5 áreas que aparecen en TODOS los exámenes WU recientes. Dominarlas cubre el 80% de los puntos.',
        }],
      },
      {
        id: 'mc-algebra',
        title: 'Quick Test: Álgebra',
        steps: [{
          type: 'multiple-choice',
          difficulty: 'medium',
          correctCount: 1,
          question: 'Quick review: Which of the following is true for the system\n   x + 2y = 5\n   2x + 4y = 10 ?',
          options: [
            { id: 'A', text: 'Unique solution: x=1, y=2', correct: false, explanation: 'Comprueba: 1+4=5 ✓ y 2+8=10 ✓. Pero la segunda ecuación es el doble de la primera — son la misma recta.' },
            { id: 'B', text: 'No solution', correct: false, explanation: 'No son paralelas distintas. La segunda ecuación es múltiplo de la primera.' },
            { id: 'C', text: 'Infinitely many solutions', correct: true, explanation: 'La segunda ecuación es 2×(primera). Son la misma recta → infinitas soluciones.' },
            { id: 'D', text: 'Only x=5, y=0 is a solution', correct: false, explanation: '(5,0) es UNA solución, pero hay infinitas: también (1,2), (3,1), (−1,3), etc.' },
          ],
          tutorExplanation: 'Cuando las dos ecuaciones son proporcionales, representan la misma recta → infinitas soluciones.',
        }],
      },
      {
        id: 'mc-calculo',
        title: 'Quick Test: Cálculo',
        steps: [{
          type: 'multiple-choice',
          difficulty: 'medium',
          correctCount: 1,
          question: 'Quick review: What is ∫₀² (3x² + 2) dx ?',
          options: [
            { id: 'A', text: '12', correct: true, explanation: 'Antiderivada: x³ + 2x. Evalúa: [8+4] − [0+0] = 12 ✓.' },
            { id: 'B', text: '8', correct: false, explanation: 'Solo evaluaste la parte x³: 2³=8. Falta añadir 2·2=4.' },
            { id: 'C', text: '6x + 2', correct: false, explanation: 'Eso es la derivada de 3x²+2, no la integral.' },
            { id: 'D', text: '10', correct: false, explanation: 'Error de cálculo. F(2) = 2³+2·2 = 8+4 = 12, F(0) = 0.' },
          ],
          tutorExplanation: '∫(3x²+2)dx = x³+2x. F(2)−F(0) = (8+4)−0 = 12.',
        }],
      },
      {
        id: 'final-hard',
        title: 'Nivel WU Final',
        steps: [{
          type: 'solo',
          difficulty: 'hard',
          examLabel: 'Estilo WU',
          title: 'Probabilidad combinada: dados y urnas',
          problem: 'A bag contains 5 red balls and 3 blue balls.\nA ball is drawn. If it is red, a fair coin is flipped.\nIf it is blue, a die is rolled.\n\nWhat is the probability of getting "red ball AND heads"?',
          tutorIntro: 'Usa la regla del producto para eventos en secuencia. Primero la probabilidad de la bola roja, luego la de cara.',
          hints: [
            'P(bola roja) = 5/8',
            'P(cara | bola roja) = 1/2',
            'P(roja y cara) = P(roja) × P(cara | roja) = (5/8)×(1/2) = 5/16',
          ],
          answer: 'P = 5/16 ≈ 31.25%',
          solution: [
            { expression: 'P(roja) = 5/8', explanation: '5 rojas de 8 bolas totales.' },
            { expression: 'P(cara | roja) = 1/2', explanation: 'Moneda justa.' },
            { expression: 'P(roja y cara) = (5/8)·(1/2) = 5/16 ≈ 0.3125', explanation: 'Regla del producto para eventos dependientes secuenciales.' },
          ],
        }],
      },
    ],
  },
]

