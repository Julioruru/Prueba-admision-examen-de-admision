export const lessons = [
  /* ─────────────────────────────────────────────────────────────
     SESSION 1 · Conjuntos y Álgebra
  ───────────────────────────────────────────────────────────── */
  {
    id: 'conjuntos',
    sessionNumber: 1,
    scheduledDate: '2026-05-21',
    title: 'Conjuntos y Álgebra',
    emoji: '∪',
    color: 'emerald',
    description: 'Conjuntos numéricos, ecuaciones con porcentajes y sistemas sin solución',
    topics: [
      {
        id: 'conjuntos-numericos',
        title: 'Conjuntos Numéricos',
        steps: [
          {
            type: 'explanation',
            title: '¿Qué son los conjuntos numéricos?',
            tutorMessage: 'ℕ⊂ℤ⊂ℚ⊂ℝ: cada conjunto contiene al anterior. Un número natural también es entero, racional y real.',
            content: 'ℕ={0,1,2,3...} solo positivos sin decimales. ℤ añade negativos. ℚ añade fracciones. ℝ añade irracionales como √2 y π. Truco: si puedes escribirlo como a/b con a,b enteros, es racional.',
          },
          {
            type: 'example',
            tutorIntro: 'Voy a clasificar −√100, √(9/2) y π paso a paso.',
            steps: [
              { expression: '−√100 = −10 ∈ ℤ,ℚ,ℝ pero ∉ ℕ', explanation: '√100=10, con el negativo da −10. Es entero negativo.' },
              { expression: '√(9/2) = 3/√2 ∉ ℚ', explanation: 'No se puede escribir como fracción exacta de enteros. Es irracional.' },
              { expression: 'π ∉ ℚ, solo ∈ ℝ', explanation: 'π=3.14159... decimales infinitos no periódicos. Irracional.' },
            ],
          },
          {
            type: 'guided',
            title: 'Clasifica estos números',
            tutorIntro: 'Completa: ¿a qué conjuntos pertenece cada número?',
            steps: [
              {
                display: '−√100 = −10 ∈ ___ (el conjunto más pequeño posible)',
                gaps: [
                  { id: 'a', answer: 'ℤ', hint1: 'Es negativo, no puede ser ℕ', hint2: 'Los negativos entran en ℤ', hint3: 'ℤ={...−2,−1,0,1,2...}' },
                ],
              },
              {
                display: 'Toda fracción a/b con a,b∈ℤ pertenece a ___',
                gaps: [
                  { id: 'b', answer: 'ℚ', hint1: '¿Qué conjunto son las fracciones?', hint2: 'ℚ = {a/b | a,b∈ℤ, b≠0}', hint3: 'ℚ es el conjunto de los racionales' },
                ],
              },
            ],
          },
          {
            type: 'guided',
            title: 'Nivel medio: raíces y fracciones',
            tutorIntro: 'Estos son más parecidos al examen. Cuidado con las trampas.',
            steps: [
              {
                display: '√(9/4) = ___ ∈ ___ (usa √(a/b) = √a/√b)',
                gaps: [
                  { id: 'a', answer: '3/2', hint1: '√9=3, √4=2', hint2: '√(9/4)=3/2=1.5', hint3: '3/2' },
                  { id: 'b', answer: 'ℚ', hint1: '3/2 es fracción de enteros', hint2: 'a=3, b=2 → racional', hint3: 'ℚ' },
                ],
              },
              {
                display: '√(−9) ∈ ___ (cuidado)',
                gaps: [
                  { id: 'c', answer: 'ninguno', hint1: '¿Existe x∈ℝ con x²=−9?', hint2: 'No: x²≥0 siempre', hint3: 'ninguno — no existe en ℝ' },
                ],
              },
              {
                display: '−√(1/4) = ___ ∈ ___',
                gaps: [
                  { id: 'd', answer: '-1/2', hint1: '√(1/4)=1/2, con negativo=?', hint2: '−1/2', hint3: '-1/2' },
                  { id: 'e', answer: 'ℚ', hint1: '−1/2 es fracción de enteros', hint2: 'negativo pero fracción → ℚ, no ℤ', hint3: 'ℚ' },
                ],
              },
            ],
          },
          {
            type: 'solo',
            title: 'WU 2023 – Task 1',
            examQuestion: 'Which two statements are TRUE?\nA) √(9/2) is a rational number\nB) −√100 is an integer\nC) √15 is a terminating decimal\nD) Every rational number is also a real number\nE) √(−4) is a real number',
            answer: 'B and D',
            hints: [
              'Evalúa cada opción. Empieza con −√100.',
              '√100=10, entonces −√100=−10. ¿Es entero? Sí. ¿Y √(9/2)?',
              'B) −√100=−10 ∈ ℤ ✓. D) ℚ⊂ℝ siempre ✓. A) √(9/2)=irracional ✗. C) √15=irracional ✗. E) √(−4) no existe en ℝ ✗',
            ],
            solution: 'B) −√100=−10 es entero ✓\nD) Todo racional es real porque ℚ⊂ℝ ✓',
          },
          {
            type: 'summary',
            points: [
              'ℕ⊂ℤ⊂ℚ⊂ℝ: cada conjunto contiene al anterior',
              'Para clasificar: simplifica primero (√100=10), luego pregunta ¿es negativo? ¿es fracción? ¿es irracional?',
              '√número negativo → no existe en ℝ',
              'Todo número natural es también entero, racional y real',
            ],
          },
        ],
      },
      {
        id: 'ecuaciones-porcentaje',
        title: 'Ecuaciones con Porcentajes',
        steps: [
          {
            type: 'explanation',
            title: 'Traducir porcentajes a ecuaciones',
            tutorMessage: 'El truco es traducir palabras a símbolos: X% más = multiplicar por (1+X/100). X€ más = sumar X.',
            content: 'Ejemplo: m cuesta 80% más que a → m=1.8a → m/a=1.8. m cuesta 1.40€ más → m=a+1.40 → a=m−1.40. Una frase = una ecuación.',
          },
          {
            type: 'example',
            tutorIntro: 'Un hotel cuesta 50% más que un hostel, y también 30€ más. Escribo las ecuaciones.',
            steps: [
              { expression: 'hotel = 1.5·hostel', explanation: '50% más = multiplicar por 1.5' },
              { expression: 'hotel = hostel + 30', explanation: '30€ más = sumar 30' },
              { expression: '1.5·hostel = hostel+30 → hostel=60€', explanation: 'Combino las dos ecuaciones' },
            ],
          },
          {
            type: 'guided',
            tutorIntro: 'Peras cuestan p€/kg, manzanas a€/kg. Peras cuestan 30% más Y 0.90€ más.',
            steps: [
              {
                display: '30% más: p = ___ · a',
                gaps: [
                  { id: 'a', answer: '1.3', hint1: '30% más = 1+0.30 = ?', hint2: '1+0.3=1.3', hint3: '1.3' },
                ],
              },
              {
                display: '0.90€ más: a = p − ___',
                gaps: [
                  { id: 'b', answer: '0.90', hint1: 'p=a+0.90, despeja a', hint2: 'a=p−0.90', hint3: '0.90' },
                ],
              },
            ],
          },
          {
            type: 'guided',
            title: 'Nivel medio: identifica la ecuación correcta',
            tutorIntro: 'Como en el examen: varias opciones, solo algunas correctas.',
            steps: [
              {
                display: '"p cuesta 25% más que q". ¿Cuáles son correctas?\nA) p=0.25q  B) p=1.25q  C) p/q=1.25  D) q=p−0.25\nRespuesta: ___',
                gaps: [
                  { id: 'a', answer: 'B y C', hint1: '25% más = ×1.25. ¿Cuál opción tiene eso?', hint2: 'p=1.25q → también p/q=1.25. Son la misma relación.', hint3: 'B y C son correctas' },
                ],
              },
              {
                display: '"r cuesta 1.80€ más que s". ¿Cuáles son correctas?\nA) r=s·1.80  B) s=r−1.80  C) r−s=1.80  D) r/s=1.80\nRespuesta: ___',
                gaps: [
                  { id: 'b', answer: 'B y C', hint1: '1.80€ más → suma, no multiplica: r=s+1.80', hint2: 'De r=s+1.80: r−s=1.80 y s=r−1.80', hint3: 'B y C correctas' },
                ],
              },
            ],
          },
          {
            type: 'solo',
            title: 'WU 2024 – Task 2',
            examQuestion: 'A fruit seller sells apples (a €/kg) and apricots (m €/kg).\n• 1kg of apricots costs 80% more than apples.\n• 1kg of apricots costs 1.40€ more than apples.\n\nWhich TWO equations are correct?\nA) a·0.8=m\nB) a+1.8=m\nC) a=m−1.4\nD) a=m/1.4\nE) m/a=1.8',
            answer: 'C and E',
            hints: [
              'Traduce cada frase a una ecuación por separado.',
              '80% más → m=1.8a → m/a=1.8. 1.40€ más → m=a+1.40 → a=m−1.40.',
              'C) a=m−1.4 ✓. E) m/a=1.8 ✓',
            ],
            solution: 'C) a=m−1.4 porque m=a+1.40\nE) m/a=1.8 porque m=1.8a',
          },
          {
            type: 'summary',
            points: [
              '"X% más que Y" → multiplica Y por (1+X/100)',
              'Una frase = una ecuación',
              'Verifica sustituyendo números concretos',
              'En el examen: traduce cada opción y verifica rápido',
            ],
          },
        ],
      },
      {
        id: 'sistemas-sin-solucion',
        title: 'Sistemas sin Solución',
        steps: [
          {
            type: 'explanation',
            title: '¿Cuándo un sistema no tiene solución?',
            tutorMessage: 'Dos rectas no se cruzan cuando son paralelas: misma pendiente, diferente intercepto.',
            content: 'Sistema 2×2: sin solución cuando las rectas son paralelas. Método: despeja y en ambas y compara pendientes. Misma pendiente + distinto intercepto = sin solución.',
          },
          {
            type: 'example',
            tutorIntro: '¿Para qué valor de k no hay solución? I: x+2y=4 / II: kx+4y=3',
            steps: [
              { expression: 'Pendiente I: y=2−x/2 → pendiente=−1/2', explanation: 'Despejo y en la primera ecuación' },
              { expression: 'Pendiente II: y=(3−kx)/4 → pendiente=−k/4', explanation: 'Despejo y en la segunda' },
              { expression: '−1/2=−k/4 → k=2', explanation: 'Igualo pendientes → k=2 da rectas paralelas' },
            ],
          },
          {
            type: 'guided',
            tutorIntro: 'I: 2x−y=3 / II: ax+2y=c. Sin solución. Encuentra a.',
            steps: [
              {
                display: 'Pendiente I: y=2x−3 → pendiente=___',
                gaps: [
                  { id: 'a', answer: '2', hint1: 'coeficiente de x', hint2: 'y=2x−3, pendiente=2', hint3: '2' },
                ],
              },
              {
                display: 'Pendiente II: y=(c−ax)/2 → pendiente=___',
                gaps: [
                  { id: 'b', answer: '-a/2', hint1: 'despeja y: 2y=c−ax', hint2: 'pendiente=−a/2', hint3: '-a/2' },
                ],
              },
              {
                display: 'Igualo: 2=−a/2 → a=___',
                gaps: [
                  { id: 'c', answer: '-4', hint1: '2=−a/2, multiplica por −2', hint2: 'a=−4', hint3: '-4' },
                ],
              },
            ],
          },
          {
            type: 'guided',
            title: 'Nivel medio: sistema con dos parámetros',
            tutorIntro: 'Sistema: I: 2x−y=3 / II: ax+2y=c. Sin solución. Encuentra a y verifica c.',
            steps: [
              {
                display: 'Pendiente I: y=2x−3 → pendiente=___',
                gaps: [
                  { id: 'a', answer: '2', hint1: 'coeficiente de x', hint2: 'pendiente=2', hint3: '2' },
                ],
              },
              {
                display: 'Pendiente II: 2y=c−ax → y=c/2−(a/2)x → pendiente=___',
                gaps: [
                  { id: 'b', answer: '-a/2', hint1: 'coeficiente de x en y=c/2−(a/2)x', hint2: '−a/2', hint3: '-a/2' },
                ],
              },
              {
                display: 'Igualo: 2=−a/2 → a=___',
                gaps: [
                  { id: 'c', answer: '-4', hint1: '2=−a/2, multiplica ambos lados por −2', hint2: 'a=−4', hint3: '-4' },
                ],
              },
              {
                display: 'Con a=−4: intercepto II=c/2. Para paralelas (no idénticas): c/2≠−3 → c≠___',
                gaps: [
                  { id: 'd', answer: '-6', hint1: 'c/2≠−3 → c≠?', hint2: 'c≠2×(−3)=−6', hint3: '-6' },
                ],
              },
            ],
          },
          {
            type: 'solo',
            title: 'WU 2024 – Task 3',
            examQuestion: 'System of equations:\nI:  2x − y = 3\nII: ax + 2y = c\n\nThis system has NO solution.\nWrite down values of a and c.',
            answer: 'a=−4, c=0 (any c≠−6)',
            hints: [
              'Sin solución = rectas paralelas = misma pendiente, distinto intercepto.',
              'Pendiente I=2. Pendiente II=−a/2. Iguala: 2=−a/2.',
              'a=−4. Con a=−4, c puede ser cualquier valor excepto −6. Pon c=0.',
            ],
            solution: 'Pendiente I=2. Pendiente II=−a/2.\n2=−a/2 → a=−4.\nc puede ser cualquier valor excepto −6.\nRespuesta: a=−4, c=0',
          },
          {
            type: 'summary',
            points: [
              'Sin solución = rectas paralelas',
              'Método: despeja y, compara pendientes',
              'Misma pendiente + distinto intercepto = sin solución',
              'Misma pendiente + mismo intercepto = infinitas soluciones',
            ],
          },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     SESSION 2 · Vectores y Geometría
  ───────────────────────────────────────────────────────────── */
  {
    id: 'vectores',
    sessionNumber: 2,
    scheduledDate: '2026-05-24',
    title: 'Vectores y Geometría',
    emoji: '→',
    color: 'blue',
    description: 'Relaciones entre vectores, ecuación vectorial de rectas y rectas idénticas',
    topics: [
      {
        id: 'relaciones-vectores',
        title: 'Relaciones entre Vectores',
        steps: [
          {
            type: 'explanation',
            title: 'Paralelos, perpendiculares y escalados',
            tutorMessage: 'Paralelo: b=k·a. Perpendicular: a·b=0.',
            content: 'Paralelo: b=k·a para algún escalar k. Si k<0, sentidos opuestos.\nPerpendicular: a·b=a₁b₁+a₂b₂=0.\nEjemplo: a=(2,4), b=(1,2) → b=(1/2)·a → paralelos.',
          },
          {
            type: 'example',
            tutorIntro: 'a=(3,6), b=(2,4). Analizo su relación.',
            steps: [
              { expression: 'b=(2/3)·a porque (2/3)·(3,6)=(2,4)', explanation: 'b es múltiplo de a → paralelos' },
              { expression: 'a·b=3·2+6·4=30≠0', explanation: 'No perpendiculares (confirmado, son paralelos)' },
            ],
          },
          {
            type: 'guided',
            tutorIntro: 'a=(4,0), b=(0,3). Analiza.',
            steps: [
              {
                display: 'a·b = 4·___+0·___ = ___',
                gaps: [
                  { id: 'a', answer: '0', hint1: 'primer componente de b=(0,3)', hint2: '0', hint3: '0' },
                  { id: 'b', answer: '3', hint1: 'segundo componente de b=(0,3)', hint2: '3', hint3: '3' },
                  { id: 'c', answer: '0', hint1: '4·0+0·3=?', hint2: '0', hint3: '0' },
                ],
              },
              {
                display: 'Como a·b=0 son ___',
                gaps: [
                  { id: 'd', answer: 'perpendiculares', hint1: 'producto escalar=0 significa...', hint2: 'perpendiculares', hint3: 'perpendiculares' },
                ],
              },
            ],
          },
          {
            type: 'solo',
            title: 'WU 2024 – Task 4',
            examQuestion: 'Let a,b ∈ ℝ². Match each diagram to the correct statement:\nA:(a−b)⊥b  B:a·b=0  C:b=(3/2)a  D:a=−2b  E:(a−b)⊥a  F:b=(2/3)a\n\nDiagram 1: b same direction as a, b shorter\nDiagram 2: (a−b) perpendicular to b\nDiagram 3: a and b opposite directions, |a|=2|b|\nDiagram 4: a and b perpendicular',
            answer: 'D1→F, D2→A, D3→D, D4→B',
            hints: [
              'D1: b mismo sentido, más corto → b=fracción·a. ¿F(2/3) o C(3/2)?',
              'b=(2/3)a → b más corto ✓. b=(3/2)a → b más largo ✗. D1→F.',
              'D1→F, D2→A, D3→D (a=−2b opuestos), D4→B (perpendiculares)',
            ],
            solution: 'D1→F: b=(2/3)a\nD2→A: (a−b)⊥b\nD3→D: a=−2b\nD4→B: a·b=0',
          },
          {
            type: 'summary',
            points: [
              'Paralelo: b=k·a',
              'Perpendicular: a·b=0',
              'k>0 mismo sentido, k<0 opuesto',
              '|k|<1 b más corto, |k|>1 b más largo',
            ],
          },
        ],
      },
      {
        id: 'ecuacion-vectorial',
        title: 'Ecuación Vectorial de una Recta',
        steps: [
          {
            type: 'explanation',
            title: 'X=P+t·d: punto más dirección',
            tutorMessage: 'Una recta = un punto + una dirección. t mueve el punto por la recta.',
            content: 'X=(p₁,p₂)+t·(d₁,d₂)\nP=punto en la recta, d=dirección, t∈ℝ\nEjemplo: pasa por (1,2) dirección (3,1):\nt=0→(1,2), t=1→(4,3), t=−1→(−2,1)',
          },
          {
            type: 'example',
            tutorIntro: 'Recta por (0,1) dirección (2,1). Encuentro puntos.',
            steps: [
              { expression: 'X=(0,1)+t·(2,1)', explanation: 'Ecuación vectorial' },
              { expression: 't=0:(0,1). t=1:(2,2). t=2:(4,3)', explanation: 'Cada t da un punto' },
              { expression: 'Pendiente=1/2: sube 1 por cada 2', explanation: 'd₂/d₁=1/2' },
            ],
          },
          {
            type: 'guided',
            tutorIntro: 'Recta por (−1,0) dirección (3,1).',
            steps: [
              {
                display: 'X=(___, ___)+t·(___, ___)',
                gaps: [
                  { id: 'a', answer: '-1', hint1: 'punto de paso', hint2: '(−1,0)', hint3: '-1' },
                  { id: 'b', answer: '0', hint1: 'segundo componente del punto', hint2: '0', hint3: '0' },
                  { id: 'c', answer: '3', hint1: 'dirección', hint2: '(3,1)', hint3: '3' },
                  { id: 'd', answer: '1', hint1: 'segundo componente dirección', hint2: '1', hint3: '1' },
                ],
              },
              {
                display: 'Para t=2: (___, ___)',
                gaps: [
                  { id: 'e', answer: '5', hint1: '−1+2·3=?', hint2: '5', hint3: '5' },
                  { id: 'f', answer: '2', hint1: '0+2·1=?', hint2: '2', hint3: '2' },
                ],
              },
            ],
          },
          {
            type: 'solo',
            title: 'WU 2024 – Task 5',
            examQuestion: 'Six lines g1...g6 are shown (points have integer coordinates).\n\nWhich line has vector equation:\nX = (a1,a2) + t·(3,1)  with t∈ℝ, a1,a2∈ℤ ?',
            answer: 'g2',
            hints: [
              'Dirección (3,1): por cada 3 en x, sube 1 en y.',
              'Pendiente=1/3. Busca la recta con esa pendiente.',
              'g2 tiene pendiente 1/3 ✓',
            ],
            solution: 'Dirección (3,1) → pendiente=1/3\nBusco recta donde Δy/Δx=1/3\nEsa es g2.',
          },
          {
            type: 'summary',
            points: [
              'X=P+t·d: P punto, d dirección, t parámetro',
              'Pendiente=d₂/d₁',
              'Para verificar un punto: sustituye y resuelve t',
              'Múltiples d válidos: (3,1) y (6,2) dan la misma recta',
            ],
          },
        ],
      },
      {
        id: 'rectas-identicas',
        title: 'Rectas Idénticas',
        steps: [
          {
            type: 'explanation',
            title: '¿Cuándo dos rectas vectoriales son la misma?',
            tutorMessage: 'Idénticas = misma dirección + comparten un punto.',
            content: 'Condición 1: vectores dirección proporcionales (paralelos)\nCondición 2: un punto de una recta está en la otra\nSolo condición 1 → paralelas distintas\nAmbas condiciones → idénticas',
          },
          {
            type: 'example',
            tutorIntro: '¿Son idénticas g:X=(0,0)+t·(2,2) y h:X=(1,1)+s·(1,1)?',
            steps: [
              { expression: '(2,2)=2·(1,1) ✓', explanation: 'Direcciones proporcionales' },
              { expression: '(0,0)+t·(2,2)=(1,1) → t=0.5 ✓', explanation: '(1,1) está en g' },
              { expression: '→ IDÉNTICAS', explanation: 'Ambas condiciones cumplidas' },
            ],
          },
          {
            type: 'guided',
            tutorIntro: 'g:X=(1,0)+t·(1,1), h:X=(2,b)+s·(a,2). Idénticas. Encuentra a y b.',
            steps: [
              {
                display: '(a,2) proporcional a (1,1): a=___',
                gaps: [
                  { id: 'a', answer: '2', hint1: '(a,2)=k·(1,1) → 2=k → a=k=?', hint2: 'k=2, a=2', hint3: '2' },
                ],
              },
              {
                display: '(2,b) en g: 1+t=2→t=___, b=0+t=___',
                gaps: [
                  { id: 'b', answer: '1', hint1: '1+t=2', hint2: 't=1', hint3: '1' },
                  { id: 'c', answer: '1', hint1: 'b=0+1·1', hint2: 'b=1', hint3: '1' },
                ],
              },
            ],
          },
          {
            type: 'solo',
            title: 'WU 2023 – Task 5',
            examQuestion: 'Two lines:\ng: X=(1,0)+t·(1,1)\nh: X=(2,b)+s·(a,2)\n\nThe lines are identical.\nFind a and b.',
            answer: 'a=2, b=1',
            hints: [
              'Idénticas: misma dirección + punto compartido.',
              '(a,2) proporcional a (1,1) → a=2. Luego verifica si (2,b) está en g.',
              '1+t=2→t=1, b=0+1=1. Respuesta: a=2, b=1',
            ],
            solution: 'Paso 1: (a,2)=k·(1,1) → k=2 → a=2\nPaso 2: (1,0)+t·(1,1)=(2,b) → t=1 → b=1',
          },
          {
            type: 'summary',
            points: [
              'Idénticas: direcciones proporcionales + punto compartido',
              'Solo proporcionales → paralelas distintas',
              'Método: 1) proporcionalidad 2) sustituye punto',
              'Si hay solución para t → idénticas',
            ],
          },
        ],
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
          problem: 'A dataset of 10 values has a mean of 15.\n\nThe two smallest values, 8 and 12, are removed.\n\nCalculate the mean of the remaining 8 values.',
          tutorIntro: 'Estrategia: calcula la suma total, resta los valores eliminados, divide entre el nuevo número de datos.',
          hints: [
            'Suma total = media × n = 15 × 10 = 150.',
            'Suma sin los dos valores: 150 − 8 − 12 = 130.',
            'Nueva media = 130 / 8 = 16.25.',
          ],
          answer: 'Nueva media = 16.25',
          solution: [
            { expression: 'Suma total = 15 × 10 = 150', explanation: 'Suma = media × cantidad.' },
            { expression: 'Suma restante = 150 − 8 − 12 = 130', explanation: 'Eliminamos los dos valores pequeños.' },
            { expression: 'Nueva media = 130 / 8 = 16.25', explanation: 'Los valores eliminados son bajos, por eso la media sube de 15 a 16.25.' },
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

