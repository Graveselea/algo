# Explication du projet “Algo” (FizzBuzz React)

## 1. Contexte & découverte de Fizz Buzz
Fizz Buzz est un exercice de programmation classique que je viens de découvrir avec ce test.
J’ai voulu en faire une version interactive pour démontrer mes compétences React.

## 2. Choix de la paramétrisation de N
Les instructions demandaient d’afficher les nombres de 1 à **N**, sans préciser comment définir **N** :
- J’ai donc ajouté un **champ input** contrôlé, initialisé à 100.
- L’utilisateur peut saisir n’importe quelle valeur **N**, et la liste se met à jour en temps réel.
- Cela rend le composant réutilisable et flexible, et montre ma capacité à enrichir un besoin minimal.

## 3. Pourquoi React ?
Le poste visé étant un rôle **Front-end React**, j’ai choisi :
1. **Create React App** (template TypeScript)  
2. Composants isolés :
   - `FizzBuzz` (logique d’affichage)
   - `NumberList` (boucle et rendu des éléments)
   - `InputN` (champ pour modifier **N**)
3. **Hooks React** :
   - `useState` pour gérer **N** et la liste des valeurs
   - `useEffect` pour recalculer la liste à chaque modification de **N**

## 4. Architecture du composant principal
```tsx
// FizzBuzz.tsx (extrait)
export default function FizzBuzz() {
  const [N, setN] = useState(100);
  const [values, setValues] = useState<(number | string)[]>([]);

  useEffect(() => {
    const result: (number | string)[] = [];
    for (let i = 1; i <= N; i++) {
      if (i % 15 === 0) result.push("FizzBuzz");
      else if (i % 3 === 0) result.push("Fizz");
      else if (i % 5 === 0) result.push("Buzz");
      else result.push(i);
    }
    setValues(result);
  }, [N]);

  return (
    <>
      <h1>FizzBuzz</h1>
      <input
        type="number"
        value={N}
        onChange={e => setN(Number(e.target.value) || 0)}
      />
      <ul id="numbers-list">
        {values.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </>
  );
}
```

## 5. Problèmes rencontrés & solutions
- **Mise à jour immédiate** à chaque frappe → parfois lourd  
  → Pour cette version simple, j’ai conservé la mise à jour instantanée, mais on peut ajouter un debounce si nécessaire.  
- **Validité de l’input** (valeurs négatives ou non numériques)  
  → Conversion sécurisée avec `Number(e.target.value) || 0`.  
- **Performances** si **N** très grand (>10 000)  
  → On pourrait limiter la valeur max ou paginer la liste.


