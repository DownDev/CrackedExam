const ANSWERS = [
  {
    question_id: 60,
    question_title:
      "Przedstawiony fragment programu w języku C# generuje hasło. Wskaż zdanie PRAWDZIWE określające własność tego hasła:",
    answer: "B. Może zawierać małe i wielkie litery oraz cyfry.",
  },
  {
    question_id: 4851,
    question_title: "Jakie są główne zalety korzystania z ReactJS?",
    answer: "B. Szybkość i wydajność aplikacji",
  },
  {
    question_id: 4893,
    question_title: "Jakie są zalety i wady używania Redux w ReactJS?",
    answer:
      "D. Zaleta: Łatwe zarządzanie stanem aplikacji. Wada: Zwiększona złożoność kodu.",
  },
  {
    question_id: 4908,
    question_title: "Jakie są podstawowe operacje na plikach CSV w Pythonie?",
    answer: "D. Otwieranie, czytanie, zapisywanie i zamknięcie pliku",
  },
  {
    question_id: 4987,
    question_title: "Jak zarządzać błędami w ReactJS?",
    answer: "A. Przez użycie metody errorBoundary",
  },
  {
    question_id: 4561,
    question_title:
      "Jaką jedną z podstawowych metod w JavaScript po stronie klienta służy do wyświetlania informacji na stronie internetowej?",
    answer: "A. alert()",
  },
  {
    question_id: 4731,
    question_title: "Jaką gaśnicą należy ugasić pożar stanowiska?",
    answer: "B. Gaśnicą typu ABC",
  },
  {
    question_id: 72,
    question_title:
      "Zastosowanie modyfikatora abstract w definicji metody klasy oznacza, że",
    answer: "D. klasa ta jest bazowa dla innych klas",
  },
  {
    question_id: 196,
    question_title:
      "Co należy użyć, gdy wzorzec nawigacji wymaga w aplikacji menu wysuwanego?",
    answer: "A. FlyoutItem",
  },
  {
    question_id: 210,
    question_title: "Co to jest PHISHING?",
    answer:
      "D. Jest to metoda wyłudzania poufnych informacji, takich jak login i hasło do banku, czy numer karty kredytowej.",
  },
  {
    question_id: 4525,
    question_title:
      "Jaka funkcja sprawi, że do KAŻDEGO elementu z osobna zostanie zastosowane to działanie?",
    answer: "C. .map",
  },
  {
    question_id: 4647,
    question_title: "Co to jest Solid w programowaniu?",
    answer: "D. Typ danych w języku JavaScript",
  },
  {
    question_id: 4817,
    question_title: "Jakie są metody zabezpieczania kodu w Pythonie?",
    answer: "D. Używanie wirtualnych środowisk (virtual environments)",
  },
  {
    question_id: 4907,
    question_title: "Jakie są różnice między props a state w ReactJS?",
    answer:
      "C. Props są przekazywane z góry w dół komponentów, a state jest zarządzane wewnątrz komponentu.",
  },
  {
    question_id: 4925,
    question_title: "Jakie są najczęstsze błędy w ReactJS?",
    answer: "B. Bezpośrednie modyfikowanie stanu",
  },
  {
    question_id: 4619,
    question_title:
      "Jakie języki programowania można użyć do tworzenia aplikacji mobilnych na system IOS?",
    answer: "A. Swift i Objective-C",
  },
  {
    question_id: 152,
    question_title: "Przedstawiona pętla wykorzystuje obiekt random do",
    answer: "C. pojedynczego wylosowania znaki z podanej puli znaków",
  },
  {
    question_id: 160,
    question_title: "Wskaż kod funkcjonalnie równorzędny przedstawionemu",
    answer: "B. Kod 2",
  },
  {
    question_id: 4671,
    question_title: "Czym  jest sortowanie bąbelkowe?",
    answer:
      "A. Algorytm sortowania porównujący sąsiednie elementy i zamieniający je, jeśli są w złej kolejności.",
  },
  {
    question_id: 4674,
    question_title:
      "Chcemy zliczać wywołania funkcji w programie napisanym w C++. W tym celu deklarujemy zmienną w sposób:",
    answer: "D. static int counter;",
  },
  {
    question_id: 4832,
    question_title: "Jakie są funkcje w module 'random'?",
    answer: "C. random() - zwraca losową liczbę z przedziału [0.0, 1.0)",
  },
  {
    question_id: 7,
    question_title:
      "Mechanizm obietnic (ang. promises) w języku JavaScript ma na celu",
    answer: "D. obsłużyć funkcjonalność związaną z kodem asynchronicznym.",
  },
  {
    question_id: 8,
    question_title:
      "Zapisane w kodzie szesnastkowym składowe RGB koloru #AA41FF po przekształceniu do kodu dziesiętnego wynoszą kolejno",
    answer: "D. 170, 65, 255",
  },
  {
    question_id: 26,
    question_title:
      "Która struktura danych może być zaimplementowana przy wykorzystaniu jedynie wymienionych metod?",
    answer: "B. stos.",
  },
  {
    question_id: 68,
    question_title:
      "Reguła zaangażowania i konsekwencji jako jedna z reguł wywierania wpływu wiąże się",
    answer: "C. z doprowadzeniem spraw do końca",
  },
  {
    question_id: 71,
    question_title: "Przedstawiony symbol przedstawia",
    answer: "B. domenę publiczną",
  },
  {
    question_id: 76,
    question_title:
      "Przedstawiona deklaracja zmiennych zapisanych językiem JAVA obejmuje",
    answer:
      "C. jedną zmienną typu napisowego, dwie typu całkowitego, jedną znakowego i jedną logiczną",
  },
  {
    question_id: 111,
    question_title:
      "Poprawna definicja konstruktora przedstawionej klasy w języku C++ może wyglądać jak w",
    answer: "A. Deklaracji 1",
  },
  {
    question_id: 145,
    question_title: "Frameworki/biblioteki typowe dla aplikacji webowych to",
    answer: "C. ASP.NET Core, Django, Angular, React.js, Node.js",
  },
  {
    question_id: 194,
    question_title:
      "Które z poniższych słów kluczowych w C# służy do tworzenia instancji obiektu?",
    answer: "C. new",
  },
  {
    question_id: 204,
    question_title: "Jaka jest domyślna metoda do renderowania list w React",
    answer: "C. Array.map()",
  },
  {
    question_id: 4568,
    question_title:
      "Co robi osoba, która analizuje wymagania klienta i tworzy zgodny z nimi projekt?",
    answer: "B. Analityk biznesowy",
  },
  {
    question_id: 4574,
    question_title: "Jak działa useRef() w ReactJS?",
    answer: "B. Służy do tworzenia referencji do elementów DOM w komponencie",
  },
  {
    question_id: 4591,
    question_title: "Jak zadeklarować zmienną w Pythonie?",
    answer: "D. a) Przypisując wartość do nazwy zmiennej, np. x = 5",
  },
  {
    question_id: 4644,
    question_title:
      "Jak zainicjować konwersję napisu na typ zmiennoprzecinkowy w Java?",
    answer: "B. Double.parseDouble()",
  },
  {
    question_id: 4660,
    question_title:
      "Które z poniższych zagadnień w Pythonie jest trudniejsze do zrozumienia: dekoratory czy metody magiczne?",
    answer: "C. Dekoratory",
  },
  {
    question_id: 4672,
    question_title: "Jak zdefiniować formularz w React.js?",
    answer: "A. Za pomocą komponentu  i przypisania mu odpowiednich atrybutów.",
  },
  {
    question_id: 4705,
    question_title: "Która z nazw nie jest nazwą kompilatora języka C++?",
    answer: "C. Code::Blocks",
  },
  {
    question_id: 4714,
    question_title: "Do czego służą React portale?",
    answer: "D. Do renderowania elementów poza hierarchią DOM rodzica.",
  },
  {
    question_id: 4723,
    question_title: "Jakie są zalety korzystania z frameworka Kivy?",
    answer:
      "A. Możliwość tworzenia aplikacji na wiele platform (np. Android, iOS, Windows)",
  },
  {
    question_id: 4726,
    question_title: "Który z języków nie jest językiem obiektowym?",
    answer: "C",
  },
  {
    question_id: 4732,
    question_title:
      "Jakie są długotrwałe skutki pozostawania w jednej pozycji przy biurku?",
    answer: "A. Bóle kręgosłupa",
  },
  {
    question_id: 4797,
    question_title: "Co to jest metoda 'add()' w Pythonie?",
    answer: "B. Metoda dodająca nowy element do zbioru",
  },
  {
    question_id: 4846,
    question_title: "Jakie są podstawy testowania w Pythonie?",
    answer: "C. B. Wykorzystanie asercji do sprawdzania warunków",
  },
  {
    question_id: 4862,
    question_title: "Jakie są zasady zarządzania stanem w ReactJS?",
    answer: "C. Zastosowanie zarządzania stanem za pomocą Redux",
  },
  {
    question_id: 4944,
    question_title: "Jakie algorytmy hashingowe są dostępne w Pythonie?",
    answer: "D. MD5, SHA-1, SHA-256, SHA-512",
  },
  {
    question_id: 5008,
    question_title: "Jak działa Reflection w Javie?",
    answer:
      "C. Umożliwia dostęp i manipulację elementami klasy w czasie wykonania",
  },
  {
    question_id: 5020,
    question_title: "Jak dodać i używać RecyclerView w Androidzie?",
    answer:
      "B. RecyclerView jest dodawany do layoutu poprzez użycie elementu  w pliku XML i następnie referencjonowanie go w kodzie Java.",
  },
  {
    question_id: 5032,
    question_title: "Jak zaimplementować Google Maps w Androidzie?",
    answer: "B. Korzystając z Google Maps SDK for Android",
  },
  {
    question_id: 5049,
    question_title: "Co to jest useEffect Hook w React?",
    answer:
      "D. Hook w React, który pozwala na wykonywanie efektów ubocznych w komponencie funkcyjnym.",
  },
  {
    question_id: 4977,
    question_title: "Jakie są mechanizmy optymalizacji aplikacji React?",
    answer: "A. Memoizacja, Lazy Loading, Code Splitting",
  },
  {
    question_id: 5071,
    question_title: "Jak działa obiekt Handler w Androidzie?",
    answer:
      "A. Handler umożliwia zarządzanie wątkami, pozwalając na komunikację między wątkami w aplikacji.",
  },
  {
    question_id: 5091,
    question_title: "Jakie są typowe problemy w pracy z ReactJS?",
    answer: "C. Trudności z zarządzaniem stanem aplikacji",
  },
  {
    question_id: 17,
    question_title:
      "Przedstawione oznaczenie praw Creative Commons, pozwala na darmowe korzystanie z utworu:",
    answer: "B. w celu zmiany lub remiksowania",
  },
  {
    question_id: 37,
    question_title:
      "Programista może zastosować framework Angular w celu implementacji aplikacji:",
    answer: "C. typu front-end",
  },
  {
    question_id: 44,
    question_title:
      "Modyfikator dostępu poprzedzający definicję metody Dodaj() zdefiniowanej w klasie Kalkulator powoduje, że:",
    answer:
      "D. jest ona dostępna wewnątrz klasy oraz wewnątrz klas dziedziczących po klasie Kalkulator",
  },
  {
    question_id: 50,
    question_title:
      "Pierwotnym przeznaczeniem środowisk IDE o nazwach: IntelliJ IDEA, Eclipse, NetBeans jest programowania w języku:",
    answer: "D. Java",
  },
  {
    question_id: 82,
    question_title:
      "Programista chce dobrać najszybciej działający algorytm przetwarzania danych w swojej aplikacji. Na podstawie przedstawionej w tabeli złożoności obliczeniowej, należy wybrać algorytm numer",
    answer: "4",
  },
  {
    question_id: 115,
    question_title:
      "Co stanie się po wykonaniu przedstawionego fragmentu kodu napisanego w języku C++?",
    answer: "D. do tablicy liczby, na jej końcu, dodawane są kolejne wartości",
  },
  {
    question_id: 128,
    question_title:
      "Jedną z możliwości testów funkcjonalnych wykonywanych na aplikacji webowej jest sprawdzenie",
    answer: "D. poprawności wyświetlanych elementów aplikacji",
  },
  {
    question_id: 215,
    question_title:
      "Której komendy użyjemy w pierwszej kolejności podczas tworzenia ReactApp",
    answer: "D. npm install -g create-react-app",
  },
  {
    question_id: 4523,
    question_title: "Jakie rozszerzenie ma ten plilk?",
    answer: "C. .scss",
  },
  {
    question_id: 4531,
    question_title:
      "Które z poniższych poleceń instaluje pakiety Express, MySQL i CORS w projekcie Node.js?",
    answer: "B. npm install express mysql cors",
  },
  {
    question_id: 4550,
    question_title: "Jak działa Toast w kontekście (Java)?",
    answer:
      "A. Komunikatem wyświetlanym w postaci krótkiego wizualnego powiadomienia dla użytkownika.",
  },
  {
    question_id: 4581,
    question_title:
      "Jak nazywa się podstawowa klasa w języku JAVA, która zawiera metodę main()?",
    answer: "A. Main",
  },
  {
    question_id: 4611,
    question_title:
      "Jaką popularną chorobą cierpią często programiści pracujący przy komputerze przez długie godziny?",
    answer: "D. Zespół cieśni nadgarstka",
  },
  {
    question_id: 4659,
    question_title: "Jakie jest znaczenie skrótu PHP?",
    answer: "B. Hypertext Preprocessor",
  },
  {
    question_id: 4665,
    question_title: "Jak deklarować zmienną w języku Java?",
    answer: "C. int x = 5;",
  },
  {
    question_id: 4696,
    question_title: "Na jakim porcie działa mongoDB?",
    answer: "C. 27017",
  },
  {
    question_id: 4700,
    question_title:
      "Które z poniższych jest przykładem języka programowania obiektowego?",
    answer: "B. Java",
  },
  {
    question_id: 4719,
    question_title: "Co ile powinno robić się przerwę od komputera?",
    answer: "B. Co 20-30 minut",
  },
  {
    question_id: 4724,
    question_title: "W jaki sposób przekazać dane do komponentów REACT?",
    answer: "C. Przez props (właściwości)",
  },
  {
    question_id: 4745,
    question_title: "Jak zadeklarować stan w React przy użyciu hooka useState?",
    answer: "B. const [state, setState] = useState(initialState)",
  },
  {
    question_id: 4916,
    question_title: "Jakie są zalety i wady używania TypeScript z ReactJS?",
    answer:
      "B. Zwiększona czytelność kodu i możliwość wykrywania błędów na etapie kompilacji.",
  },
  {
    question_id: 4924,
    question_title: "Jak parsować JSON w Pythonie?",
    answer: "A. Za pomocą funkcji json.loads()",
  },
  {
    question_id: 5025,
    question_title: "Co to jest context API w React?",
    answer:
      "C. Mechanizm w React umożliwiający przekazywanie danych do komponentów bezpośrednio, omijając konieczność przekazywania props przez wszystkie pośrednie komponenty.",
  },
  {
    question_id: 5051,
    question_title: "Co to jest Jetpack Compose i jak zacząć go używać?",
    answer:
      "C. Jetpack Compose to deklaratywny framework do tworzenia interfejsów użytkownika w aplikacjach Android. Aby zacząć korzystać z Jetpack Compose, należy dodać odpowiednie zależności do pliku build.gradle.",
  },
  {
    question_id: 22,
    question_title:
      "Metoda poszukiwań w tablicach posortowanych, która polega na podzieleniu tablicy na kilka bloków i wyszukaniu liniowym tylko w tym bloku, w którym docelowy element może się znajdować, w języku angielskim nosi nazwę",
    answer: "D. Jump search.",
  },
  {
    question_id: 41,
    question_title:
      "Przedstawiony diagram Gantta dotyczy projektu informatycznego. Zakładając, że każdy członek zespołu ma wystarczające umiejętności, aby wykonać każde z zadań oraz do każdego z zadań można przydzielić tylko jedną osobę, która poświęca na zadanie cały dzień pracy, to minimalnie zespół musi liczyć:",
    answer: "D. 2 osoby",
  },
  {
    question_id: 46,
    question_title:
      "W którym modelu Cyklu Życia Projektu Informatycznego występuje etap analizy ryzyka?",
    answer: "A. W spiralnym.",
  },
  {
    question_id: 51,
    question_title:
      "Która z cech przycisków typu Radio-button wyspecyfikowanych w prezentowanym fragmencie dokumentacji jest prawdziwa?",
    answer: "C. Właściwość labelPosition przyjmuje jedną z dwóch wartości.",
  },
  {
    question_id: 58,
    question_title:
      "Założenie programowania obiektowego polegające na ukrywaniu składowych klasy tak, aby były one dostępne tylko metodom tej klasy lub funkcjom zaprzyjaźnionym, to",
    answer: "D. hermetyzacja.",
  },
  {
    question_id: 77,
    question_title:
      "Z przedstawionej definicji pola licznik można wywnioskować, że",
    answer:
      "B. aktualna wartość pola jest wspólna dla wszystkich instancji klasy",
  },
  {
    question_id: 80,
    question_title:
      "Z przedstawionego fragmentu kodu można wywnioskować, że element o nazwie rysunek jest",
    answer: "C. metodą klasy",
  },
  {
    question_id: 96,
    question_title:
      "Co można obliczyć za pomocą przedstawionego algorytmu działającego na liczbach całkowitych dodatnich?",
    answer: "B. liczbę cyfr we wczytanej liczbie",
  },
  {
    question_id: 108,
    question_title:
      "W wyniku wykonania przedstawionego kodu w konsoli wyświetlona zostanie liczba",
    answer: "B. 115",
  },
  {
    question_id: 118,
    question_title: "Przedstawiona dokumentacja opisuje algorytm sortowania",
    answer: "D. bąbelkowe",
  },
  {
    question_id: 122,
    question_title:
      "W wyniku wykonania przedstawionego kodu napisanego w języku C++ w konsoli zostanie wyświetlony ciąg liczb",
    answer: "D. 2 3 4 5 6",
  },
  {
    question_id: 132,
    question_title:
      "Co zostanie zapisane w etykiecie label po wykonaniu przedstawionego kodu, uruchomionego po kliknięciu w przycisk okna aplikacji?",
    answer: "A. suma liczb parzystych z przedziału od 0 do 100",
  },
  {
    question_id: 159,
    question_title: "Dla podanego algorytmu złożoność obliczeniowa jest równa",
    answer: "B. O(n)",
  },
  {
    question_id: 171,
    question_title: "Oznaczeniem komentarza wieloliniowego w języku Java jest",
    answer: "A. /* ... */",
  },
  {
    question_id: 179,
    question_title:
      "Aby zadeklarować pole, które będzie pełniło funkcję licznika instancji klasy, należy definicję takiego pola poprzedzić słowem kluczowym",
    answer: "B. static",
  },
  {
    question_id: 180,
    question_title:
      "Jeżeli w aplikacji występuje błąd działania, a programista musi sprawdzić wartości przechowywane w zmiennych, w danym momencie uruchomienia aplikacji, to należy do tego celu wykorzystać",
    answer: "C. debugger",
  },
  {
    question_id: 202,
    question_title:
      "Który z podanych frameworków nie wspiera server side rendering",
    answer: "B. Svelte",
  },
  {
    question_id: 4521,
    question_title: 'Co to jest "React"?',
    answer:
      "C. Biblioteka JavaScript służąca do budowania interfejsu użytkownika",
  },
  {
    question_id: 4529,
    question_title:
      "Która z poniższych opcji w Android Studio jest odpowiedzialna za uruchamianie aplikacji na emulatorze lub urządzeniu fizycznym?",
    answer: "C. Run / Debug",
  },
  {
    question_id: 4535,
    question_title:
      "Jaki skutek wywoła polecenie npm start w projekcie Node.js?",
    answer:
      'A. Uruchamia skrypt zdefiniowany w sekcji "start" w pliku package.json',
  },
  {
    question_id: 4536,
    question_title:
      "Jaki skutek wywoła użycie app.use(express.json()); w aplikacji Express.js?",
    answer:
      "A. Pozwala aplikacji parsować przychodzące dane w formacie JSON w treści żądania",
  },
  {
    question_id: 4555,
    question_title: "Jak zdefiniować tablicę dynamiczną w JAVA?",
    answer: "B. ArrayList lista = new ArrayList();",
  },
  {
    question_id: 4558,
    question_title:
      "Co robi metoda setContentView() w Android Studio używana w języku JAVA?",
    answer: "B. Ustawia layout interfejsu użytkownika dla danej aktywności.",
  },
  {
    question_id: 4559,
    question_title:
      "Jaką jedną z podstawowych metod w JavaScript służącą do wyświetlania informacji w konsoli?",
    answer: "A. console.log()",
  },
  {
    question_id: 4560,
    question_title:
      "Jaką metodę w JavaScript wykorzystuje się do dokładnego porównania dwóch wartości (zarówno wartości, jak i typu danych)?",
    answer: "B. === Operator",
  },
  {
    question_id: 4584,
    question_title:
      "Jakie jest słowo kluczowe w języku JAVA używane do deklaracji zmiennej, która nie może zmieniać swojej wartości?",
    answer: "A. final",
  },
  {
    question_id: 4592,
    question_title: "Jak zdefiniować pustą funkcję w Pythonie?",
    answer: "A. def funkcja(): pass",
  },
  {
    question_id: 4617,
    question_title: "Co to jest zespół cieśni nadgarstka?",
    answer: "C. Choroba polegająca na ucisku nerwu pośrodkowego w nadgarstku",
  },
  {
    question_id: 4634,
    question_title: "Co to jest Hook useState w React?",
    answer: "B. Hook służący do przechowywania stanu w komponencie funkcyjnym.",
  },
  {
    question_id: 4645,
    question_title: "Jak definiować tablice w języku JavaScript?",
    answer: "A. let tablica = []",
  },
  {
    question_id: 4651,
    question_title: "Co to jest CORS?",
    answer:
      "C. Mechanizm zabezpieczający przed atakami typu Cross-Origin Resource Sharing",
  },
  {
    question_id: 4652,
    question_title: "Jak sprawdzić długość listy w Pythonie?",
    answer: "B. len(lista)",
  },
  {
    question_id: 4699,
    question_title: "Jaki jest przykład skryptu JavaScript?",
    answer: "B. alert('Witaj, świecie!');",
  },
  {
    question_id: 4702,
    question_title:
      "Które z poniższych twierdzeń dotyczących języka Kotlin jest prawdziwe?",
    answer:
      "B. Kotlin jest językiem programowania stworzonym przez firmę JetBrains.",
  },
  {
    question_id: 4720,
    question_title:
      "Jakie są zagrożenia wynikające z niewłaściwego przechowywania danych?",
    answer: "C. Naruszenie prywatności",
  },
  {
    question_id: 4730,
    question_title: "Jak wyśrodkować obiekty w relative layout Android Studio?",
    answer: "B. Ustawiając atrybut layout_centerInParent na true dla obiektu",
  },
  {
    question_id: 4738,
    question_title: "Co to jest PocketBase?",
    answer: "C. Biblioteka JavaScript do budowania interfejsów użytkownika",
  },
  {
    question_id: 4754,
    question_title: "Jakiego języka używa Tauri dla back-endu?",
    answer: "D. Rust",
  },
  {
    question_id: 4766,
    question_title:
      "Dlaczego snapshot testing może być przydatny w testowaniu komponentów React?",
    answer: "C. Pomaga wykrywać nieoczekiwane zmiany w strukturze komponentów.",
  },
  {
    question_id: 4782,
    question_title: "Co to jest metoda 'strip()' w Pythonie?",
    answer: "A. Metoda usuwająca białe znaki z początku i końca ciągu znaków.",
  },
  {
    question_id: 4788,
    question_title: "Jak usunąć element z listy w Pythonie?",
    answer: "A. del",
  },
  {
    question_id: 4793,
    question_title: "Jak dodać element do słownika w języku Python?",
    answer: "D. Korzystając z operatora []",
  },
  {
    question_id: 4809,
    question_title: "Co to jest metoda '__next__' w Pythonie?",
    answer: "C. Metoda służąca do pobierania kolejnego elementu z iteratora.",
  },
  {
    question_id: 4812,
    question_title: "Jakie są ograniczenia rekurencji w Pythonie?",
    answer: "D. Maksymalna głębokość rekurencji",
  },
  {
    question_id: 4813,
    question_title:
      "Jakie są zasady używania słowa kluczowego 'global' w języku JavaScript?",
    answer:
      "D. Deklaracja zmiennej z użyciem 'global' powoduje, że zmienna jest dostępna globalnie",
  },
  {
    question_id: 4822,
    question_title: "Co to jest 'os' w Pythonie?",
    answer: "C. Moduł do interakcji z systemem operacyjnym",
  },
  {
    question_id: 4837,
    question_title: "Jakie są podstawy używania 'matplotlib'?",
    answer: "D. Tworzenie wykresów i wizualizacji danych",
  },
  {
    question_id: 4858,
    question_title: "Co to jest 'fastapi' w Pythonie?",
    answer: "B. Framework do tworzenia aplikacji webowych z API w Pythonie",
  },
  {
    question_id: 4860,
    question_title: "Co to jest useEffect w ReactJS?",
    answer:
      "A. Hook służący do zarządzania efektami ubocznymi w komponentach funkcyjnych",
  },
  {
    question_id: 4897,
    question_title: "Co to jest MobX?",
    answer: "A. Biblioteka do zarządzania stanem aplikacji w języku JavaScript",
  },
  {
    question_id: 4903,
    question_title: "Co to jest React.memo?",
    answer:
      "B. Funkcja w React umożliwiająca optymalizację renderowania komponentów poprzez zapamiętywanie wyników renderowania dla określonych propertisów.",
  },
  {
    question_id: 4910,
    question_title: "Co to jest Suspense w ReactJS?",
    answer:
      "B. Mechanizm pozwalający na obsługę opóźnionego ładowania danych i komponentów",
  },
  {
    question_id: 4932,
    question_title: "Co to jest Babel w kontekście ReactJS?",
    answer: "C. Babel to narzędzie do kompilacji kodu JavaScript.",
  },
  {
    question_id: 4957,
    question_title: "Co to jest 'ssl' w Pythonie?",
    answer: "D. Biblioteka standardowa Pythona do obsługi protokołu SSL/TLS",
  },
  {
    question_id: 4967,
    question_title: "Jak zaimplementować konstruktor w Javie?",
    answer:
      "D. Poprzez zdefiniowanie metody o nazwie takiej samej jak nazwa klasy.",
  },
  {
    question_id: 4973,
    question_title: "Jak działa lifecycle componentów w React?",
    answer:
      "C. componentDidMount() jest wywoływane zaraz po tym, jak komponent został zamontowany",
  },
  {
    question_id: 4978,
    question_title: "Jak porównać dwa obiekty w Javie?",
    answer: "C. Za pomocą metody equals(), która porównuje zawartość obiektów",
  },
  {
    question_id: 4988,
    question_title: "Jakie są różnice między ArrayList a LinkedList w Javie?",
    answer:
      "B. ArrayList przechowuje elementy w tablicy, a LinkedList przechowuje elementy w formie listy dwukierunkowej.",
  },
  {
    question_id: 4995,
    question_title: "Jakie są podstawy testowania komponentów w ReactJS?",
    answer:
      "B. Testowanie jednostkowe, testowanie integracyjne, testowanie końcowe, testowanie wydajnościowe",
  },
  {
    question_id: 4996,
    question_title: "Jak obsługiwać wyjątki Checked i Unchecked w Javie?",
    answer:
      "A. Korzystając z bloku try-catch dla Checked i bloku try-catch lub nie obsługując dla Unchecked",
  },
  {
    question_id: 5010,
    question_title: "Jak zaimplementować wzorzec Observer w Javie?",
    answer:
      "A. Klasa obserwatora powinna implementować interfejs Observer i zaimplementować metodę update().",
  },
  {
    question_id: 5012,
    question_title:
      "Jakie są podstawowe operacje na bazach danych SQLite w Androidzie?",
    answer:
      "B. Dodawanie (INSERT), Odczytywanie (SELECT), Aktualizacja (UPDATE), Usuwanie (DELETE)",
  },
  {
    question_id: 5015,
    question_title: "Co to jest useContext API?",
    answer:
      "C. Hook w React pozwalający na odczytanie wartości kontekstu bez konieczności korzystania z Consumer",
  },
  {
    question_id: 5019,
    question_title: "Jakie są techniki optymalizacji renderowania w ReactJS?",
    answer: "C. Użycie shouldComponentUpdate lub React.memo",
  },
  {
    question_id: 5026,
    question_title:
      "Jakie są podstawy pracy z bazą danych SQLite w Androidzie?",
    answer:
      "D. Tworzenie i aktualizacja bazy danych, wykonywanie zapytań SQL, obsługa transakcji",
  },
  {
    question_id: 5028,
    question_title:
      "Jak używać SharedPreferences do przechowywania danych w Androidzie?",
    answer: "C. Zapisując dane w formie klucz-wartość",
  },
  {
    question_id: 5050,
    question_title: "Jak używać DataBinding w Androidzie?",
    answer:
      "B. Poprzez dodanie elementu  w pliku XML i ustawienie odpowiednich atrybutów.",
  },
  {
    question_id: 5054,
    question_title: "Co to jest Suspense i jak używać go w React?",
    answer:
      "B. Suspense to komponent w React umożliwiający obsługę opóźnień ładowania danych lub komponentów.",
  },
  {
    question_id: 5055,
    question_title: "Jak skonfigurować proguard w Androidzie?",
    answer: "B. Dodając linijkę 'minifyEnabled true' do pliku build.gradle",
  },
  {
    question_id: 5056,
    question_title: "Jakie są zasady tworzenia komponentów w React?",
    answer: "D. Komponenty powinny być tworzone jako funkcje lub klasy",
  },
  {
    question_id: 5065,
    question_title: "Co to jest hydrate w React?",
    answer:
      "B. Funkcja, która renderuje komponenty React do istniejącego elementu DOM, zachowując jego stan.",
  },
  {
    question_id: 5084,
    question_title: "Co to jest ContentProvider w Androidzie i jak go używać?",
    answer:
      "C. ContentProvider to komponent Androida służący do udostępniania danych aplikacji innym aplikacjom. Aby korzystać z danych przechowywanych w ContentProviderze, należy korzystać z interfejsu ContentResolver.",
  },
  {
    question_id: 5087,
    question_title: "Jakie są najlepsze praktyki w pracy z hookami w ReactJS?",
    answer: "C. Zachowywanie zależności hooków w odpowiedniej kolejności",
  },
  {
    question_id: 5088,
    question_title: "Jak zrealizować testy UI z JUnit w Androidzie?",
    answer: "B. Korzystając z frameworka Espresso",
  },
  {
    question_id: 49,
    question_title:
      "Stosowanie wzorca Obserwator w programowaniu aplikacji WEB ma na celu:",
    answer: "B. powiadamianie obiektów o zmianie stanu innych obiektów",
  },
  {
    question_id: 70,
    question_title:
      "Narzędziem dedykowanym do implementacji aplikacji w środowisku WPf (ang. Windows Presentation Foundation) jest",
    answer: "A. Visual Studio",
  },
  {
    question_id: 75,
    question_title: "Wskaż niestabilny algorytm sortowania",
    answer: "C. sortowanie szybkie",
  },
  {
    question_id: 151,
    question_title:
      "Aby programować aplikacje desktopowe za pomocą języka Java można wybrać środowisko",
    answer: "A. NetBeans",
  },
  {
    question_id: 164,
    question_title: "Sumą liczb binarnych 1101 i 1001 jest",
    answer: "D. 10110",
  },
  {
    question_id: 169,
    question_title:
      'Błąd kompilacji "incompatible types" może zostać wygenerowany, gdy',
    answer:
      "A. funkcja przyjmuje jako argument całkowitą, a wywołana została z napisem jako parametr",
  },
  {
    question_id: 193,
    question_title:
      "Który modyfikator dostępu w C# sprawia, że pole lub metoda są dostępne tylko wewnątrz klasy, w której zostały zdefiniowane?",
    answer: "C. private",
  },
  {
    question_id: 4563,
    question_title:
      "Która z poniższych metod jest jedną z podstawowych metod w JavaScript po stronie klienta?",
    answer: "C. addEventListener",
  },
  {
    question_id: 4643,
    question_title:
      "Jakie typy numeryczne może przyjąć EditText w Android Studio?",
    answer: "A. Liczbowy całkowity",
  },
  {
    question_id: 4698,
    question_title: "Jakie są zalety korzystania z React Native?",
    answer:
      "D. Możliwość tworzenia aplikacji na wiele platform za pomocą jednego kodu",
  },
  {
    question_id: 4771,
    question_title: "Co to jest klasy w Pythonie?",
    answer: "C. Klasy to obiekty w Pythonie",
  },
  {
    question_id: 4780,
    question_title: "Jakie są metody manipulacji łańcuchami w Pythonie?",
    answer: "B. split(), join(), replace(), capitalize()",
  },
  {
    question_id: 5099,
    question_title: "Czym jest React Fiber?",
    answer:
      "C. Nowym mechanizmem odświeżania i renderowania komponentów w React",
  },
  {
    question_id: 20,
    question_title:
      "Rezultatem wykonania przedstawionego fragmentu kodu jest wypisanie liczb z przedziału od 2 do 20, które są",
    answer: "C. pierwsze.",
  },
  {
    question_id: 40,
    question_title:
      "Na dwóch przykładach przedstawiono mechanizm o nazwie Binding. Ma on na celu",
    answer:
      "D. wiązanie właściwości (property) elementu interfejsu użytkownika z danymi bądź właściwością innego obiektu.",
  },
  {
    question_id: 4922,
    question_title: "Co to jest 'xml' w Pythonie?",
    answer:
      "D. Jest to język znaczników do reprezentacji danych w formie hierarchicznej.",
  },
  {
    question_id: 9,
    question_title:
      "Oznaczeniem komentarza jednoliniowego w języku Python jest:",
    answer: "#",
  },
  {
    question_id: 11,
    question_title: "Co można powiedzieć o metodach klasy Point?",
    answer: "A. Są przeładowane (przeciążone).",
  },
  {
    question_id: 13,
    question_title:
      "Utworzenie procedury składowej o nazwie dodajUsera w MS SQL rozpoczyna się od poleceń",
    answer: "B. create procedure dodajUsera",
  },
  {
    question_id: 16,
    question_title:
      "Rekomendacje standardu WCAG 2.0 związane z percepcją dotyczą:",
    answer: "A. przedstawienia komponentów interfejsu użytkownika",
  },
  {
    question_id: 18,
    question_title: "W metodach klasy GoldCustomer są widoczne jedynie pola",
    answer: "C. GoldPoints, Name, Id",
  },
  {
    question_id: 23,
    question_title:
      "Na przedstawionych funkcjonalnie równoważnych sobie kodach źródłowych w wyniku wykonania operacji w zmiennej b zostanie zapisana wartość:",
    answer: "5",
  },
  {
    question_id: 28,
    question_title: "Przedstawiona metoda jest implementacją algorytmu",
    answer: "D. odwracającego napis.",
  },
  {
    question_id: 54,
    question_title:
      "Obsługę wyjątku, który wygenerowała aplikacja należy zdefiniować w sekcji",
    answer: "A. catch",
  },
  {
    question_id: 57,
    question_title:
      "Aplikacja mobilna wyświetla listę, której każdy z elementów może być dotknięty palcem, aby wyświetlić jego szczegóły. Zdarzenie odpowiadające tej akcji to",
    answer: "C. tapped.",
  },
  {
    question_id: 63,
    question_title:
      "Z tabeli przedstawiającej złożoność obliczeniową algorytmów sortowania na dowolnym, dużym, zbiorze wejściowym (ponad 100 elementów) wynika, że najszybszą metodą jest algorytm sortowania:",
    answer: "C. przez zliczanie",
  },
  {
    question_id: 86,
    question_title:
      "Z której kolekcji należy skorzystać, aby przechowywać dane związane z elementem interfejsu użytkownika tak, aby element był ten informowany przez kolekcję o dodaniu, usunięciu lub zmianie jej elementu",
    answer: "A. ObservableCollection",
  },
  {
    question_id: 101,
    question_title:
      "Który typ testów może być opisany przedstawionym scenariuszem",
    answer: "D. testy funkcjonalne",
  },
  {
    question_id: 103,
    question_title:
      "Aby zaimplementować w aplikacji jednokierunkową funkcję skrótu tzw. funkcję haszującą można posłużyć się algorytmem",
    answer: "D. MD5",
  },
  {
    question_id: 113,
    question_title:
      "W programie napisanym w języku C++ należy utworzyć zmienną, która przechowa liczbę rzeczywistą. Określ typ tej zmiennej",
    answer: "B. double",
  },
  {
    question_id: 120,
    question_title: "Który blok kodu zawiera przykład użycia rekurencji?",
    answer: "A. Blok 1",
  },
  {
    question_id: 130,
    question_title:
      "Jaki będzie efekt działania przedstawionych dwóch równoważnych funkcjonalnie fragmentów kodu źródłowego?",
    answer: 'B. wyświetlony na stronie tekst w nagłówku: "Egzamin zawodowy"',
  },
  {
    question_id: 140,
    question_title: "Framework to",
    answer:
      "A. platforma programistyczna dostarczająca pewne komponenty i narzucająca pewien szkielet lub metodykę tworzenia aplikacji",
  },
  {
    question_id: 141,
    question_title: "Diagram Gantta jest stosowany w celu",
    answer: "C. planowania i zarządzania projektem",
  },
  {
    question_id: 165,
    question_title: "Wskaż cechę charakterystyczną dla metody abstrakcyjnej",
    answer: "C. nie jest zaimplementowana w klasie bazowej",
  },
  {
    question_id: 166,
    question_title:
      "Błędy interpretracji kodu wytworzonego za pomocą środowiska React.js lub Angular można śledzić przy pomocy",
    answer: "B. konsoli przeglądarki internetowej",
  },
  {
    question_id: 181,
    question_title: "Która lista typów obejmuje jedynie typy złożone?",
    answer: "C. class, struct, union",
  },
  {
    question_id: 187,
    question_title:
      'Na przedstawionych rysunkach znajduje się okno aplikacji w stanie początkowym oraz po wypełnieniu danych. Zakładając, że pole "Dostępne środki" jest przeznaczone do wprowadzania wartości typu rzeczywistego, wskaż składowe struktury, które optymalnie pasują do tych danych',
    answer: "B. Kod 2",
  },
  {
    question_id: 4519,
    question_title:
      "Który z layoutów w Xamarin.Forms umożliwia nam zawijanie elementów podrzędnych jeśli jest ich zbyt wiele?",
    answer: "C. FlexLayout",
  },
  {
    question_id: 4527,
    question_title:
      "Który hook w react mozna wykorzystac do wykonania kodu tylko przy pierwszaym renderowania strony",
    answer: "C. useEffect",
  },
  {
    question_id: 4532,
    question_title: "Czym jest Nodemon w ekosystemie Node.js?",
    answer:
      "A. Pakiet npm umożliwiający automatyczne restartowanie aplikacji po zmianach w kodzie",
  },
  {
    question_id: 4553,
    question_title: "Do czego służy FrameLayout w Androidzie?",
    answer: "A. Do przechowywania jednego widoku na ekranie",
  },
  {
    question_id: 4572,
    question_title: "Co to jest useEffect() w ReactJS?",
    answer:
      "A. Hook, który umożliwia wykonywanie efektów ubocznych w komponencie funkcyjnym",
  },
  {
    question_id: 4575,
    question_title: "Jak działa: onFocus={handleFocus} w ReactJS?",
    answer: "B. Uruchamia funkcję handleFocus, gdy element otrzymuje focus",
  },
  {
    question_id: 4578,
    question_title:
      "Co robią kolejne metody .then(response => response.json()) .then(data => console.log(data)); w Promise w JavaScript?",
    answer:
      "D. Pobierają dane z odpowiedzi serwera w formacie JSON i wyświetlają je w konsoli.",
  },
  {
    question_id: 4579,
    question_title:
      "Który z poniższych języków programowania posługuje się typem wskaźnikowym? Przykład użycia: int* wsk;",
    answer: "A. C++",
  },
  {
    question_id: 4594,
    question_title:
      "Jak zadeklarować zmienną w JavaScript zgodnie ze składnią ES6?",
    answer: "B. let myVar = 10;",
  },
  {
    question_id: 4599,
    question_title:
      "Która z poniższych metodologii zarządzania projektami skupia się na elastyczności i adaptacji do zmian w trakcie realizacji projektu?",
    answer: "C. Metodyka Scrum",
  },
  {
    question_id: 4600,
    question_title:
      "Jakie są główne założenia metodyki zarządzania projektami Sprint?",
    answer:
      "A. Iteracyjne i inkrementalne dostarczanie wartości, zespół samodzielny i samoorganizujący się, inspekcja i adaptacja",
  },
  {
    question_id: 4612,
    question_title: "Co to jest 'use state' w React?",
    answer: "D. Hook używany do przechowywania stanu w komponencie funkcyjnym",
  },
  {
    question_id: 4635,
    question_title: "Jakie wady ma React?",
    answer:
      "C. Może powodować problemy z wydajnością w przypadku dużych i złożonych aplikacji",
  },
  {
    question_id: 4638,
    question_title: "Co to jest 'Primary key' w bazie danych?",
    answer: "B. Unikalny identyfikator rekordu w tabeli.",
  },
  {
    question_id: 4650,
    question_title:
      "Jakie jest znaczenie słowa kluczowego 'def' w języku Python?",
    answer: "D. Oznacza definicję funkcji",
  },
  {
    question_id: 4656,
    question_title:
      "Jakie narzędzia można wykorzystać do testowania aplikacji w React?",
    answer: "B. Jest, Enzyme, Mocha",
  },
  {
    question_id: 4662,
    question_title: "Jakie preprocesory ma CSS?",
    answer: "B. Sass, Less, Stylus",
  },
  {
    question_id: 4666,
    question_title: "Jak rozpocząć sesję w PHP?",
    answer: "D. session_start()",
  },
  {
    question_id: 4694,
    question_title:
      "Nuxt.js to framework do tworzenia aplikacji webowych oparty na jakiej bibliotece?",
    answer: "B. Vue.js",
  },
  {
    question_id: 4697,
    question_title: "Do czego służy useEffect w React?",
    answer: "B. Do obsługi efektów ubocznych w komponentach funkcyjnych",
  },
  {
    question_id: 4706,
    question_title:
      "Jak nazywa się framework JavaScript wykorzystywany do tworzenia aplikacji mobilnych w React Native?",
    answer: "A. React Native CLI",
  },
  {
    question_id: 4747,
    question_title: "Jakich bibliotek używa się do tworzenia PWA?",
    answer: "B. React, Angular, Vue.js",
  },
  {
    question_id: 4763,
    question_title:
      "Jakie są różnice pomiędzy bibliotekami Enzyme, a React Testing Library podczas testowania komponentów React?",
    answer:
      "A. React Testing Library skupia się na zachowaniu użytkownika, a Enzyme pozwala na szczegółowe manipulowanie komponentami.",
  },
  {
    question_id: 4765,
    question_title: "Jakie są różnice między Python 2 a Python 3?",
    answer:
      "D. Python 2 obsługuje Unicode domyślnie, a w Python 3 jest to standard",
  },
  {
    question_id: 4790,
    question_title: "Jakie są metody manipulacji słownikami w Pythonie?",
    answer: "D. a) keys(), values(), items()",
  },
  {
    question_id: 4796,
    question_title:
      "Jakie są podstawowe operacje na zbiorach (set) w Pythonie?",
    answer:
      "C. Dodawanie elementu do zbioru, usuwanie elementu ze zbioru, sprawdzanie czy element należy do zbioru, operacje na zbiorach (np. suma, przecięcie, różnica)",
  },
  {
    question_id: 4807,
    question_title:
      "Jakie są najlepsze praktyki podczas testowania komponentów React? Podaj 2 przykłady. ",
    answer:
      "B. 1. Skupianie się na zachowaniu użytkownika.  2. Unikanie testowania implementacji wewnętrznej komponentów.",
  },
  {
    question_id: 4814,
    question_title: "Co to jest funkcja 'eval()' w Pythonie?",
    answer:
      "B. Funkcja służąca do wykonania podanego wyrażenia jako kod Pythona.",
  },
  {
    question_id: 4816,
    question_title: "Czym jest bezpieczeństwo kodu w Pythonie?",
    answer: "B. Zapobieganiem wykonywaniu złośliwego kodu",
  },
  {
    question_id: 4825,
    question_title: "Co to jest moduł 'shutil' w Pythonie?",
    answer: "D. A. Moduł do operacji na plikach i katalogach",
  },
  {
    question_id: 4843,
    question_title: "Co to jest 'tensorflow' w Pythonie?",
    answer:
      "C. Biblioteka do uczenia maszynowego i tworzenia sieci neuronowych",
  },
  {
    question_id: 4849,
    question_title: "Co to jest ReactJS?",
    answer: "C. Biblioteka JavaScript do budowania interfejsów użytkownika.",
  },
  {
    question_id: 4867,
    question_title: "Czym jest framework 'FastAPI'?",
    answer:
      "D. FastAPI to framework do tworzenia API w języku Python, który cechuje się wysoką wydajnością i prostotą użycia.",
  },
  {
    question_id: 4880,
    question_title: "Czym jest 'NoSQL' w Pythonie?",
    answer: "B. Bazą danych nie-relacyjną",
  },
  {
    question_id: 4901,
    question_title: "Jakie są różnice między Redux a React Context?",
    answer:
      "D. Redux jest biblioteką zarządzania stanem aplikacji, podczas gdy React Context jest API do przekazywania danych globalnych w aplikacji React.",
  },
  {
    question_id: 4902,
    question_title: "Co to jest metoda 'write()' w Pythonie?",
    answer: "C. Metoda służąca do zapisywania danych do pliku tekstowego.",
  },
  {
    question_id: 4915,
    question_title: "Co to jest 'beautifulsoup' w Pythonie?",
    answer:
      "B. Biblioteka do parsowania i przetwarzania danych z dokumentów HTML i XML.",
  },
  {
    question_id: 4933,
    question_title:
      "Jakie są zasady bezpieczeństwa aplikacji webowych w Pythonie?",
    answer: "D. Unikanie wstrzykiwania SQL",
  },
  {
    question_id: 4954,
    question_title: "Jakie są różnice między ReactJS a VueJS?",
    answer:
      "C. ReactJS korzysta z JSX do tworzenia interfejsu użytkownika, podczas gdy VueJS używa szablonów HTML z dyrektywami.",
  },
  {
    question_id: 4958,
    question_title: "Czym są controlled i uncontrolled components w React?",
    answer:
      "B. Controlled components to komponenty, których stan jest zarządzany przez React, natomiast uncontrolled components mają swój własny stan.",
  },
  {
    question_id: 4983,
    question_title: "Co to jest lazy loading w React?",
    answer:
      "A. Mechanizm pozwalający dynamicznie ładować komponenty tylko wtedy, gdy są one potrzebne",
  },
  {
    question_id: 5001,
    question_title: "Jak używać Snapshot testing w ReactJS?",
    answer:
      "C. Snapshot testing służy do porównywania zrzutów (snapshots) wygenerowanych przez React z oczekiwanymi zrzutami, co pozwala wykryć zmiany w renderowaniu komponentów.",
  },
  {
    question_id: 5004,
    question_title: "Jak zrealizować wzorzec Singleton w Javie?",
    answer:
      "D. Poprzez prywatne pole statyczne przechowujące jedyną instancję klasy oraz prywatny konstruktor.",
  },
  {
    question_id: 5006,
    question_title: "Jak zaimplementować wzorzec fabryki (Factory) w Javie?",
    answer: "A. Użycie interfejsu z metodą fabrykującą",
  },
  {
    question_id: 5018,
    question_title: "Co to jest Service i jak go używać w Androidzie?",
    answer:
      "B. Service to komponent Androida, który działa w tle i nie ma interfejsu użytkownika.",
  },
  {
    question_id: 5024,
    question_title: "Co to jest ViewHolder w kontekście RecyclerView?",
    answer:
      "A. ViewHolder przechowuje odwołania do elementów interfejsu użytkownika dla każdego elementu listy w RecyclerView.",
  },
  {
    question_id: 5027,
    question_title: "Co to jest useCallback w React?",
    answer: "A. Hook Reacta, który zwraca funkcję callback z pamięcią",
  },
  {
    question_id: 5048,
    question_title: "Co to jest LiveData i jak go używać w Androidzie?",
    answer:
      "A. LiveData to klasa w Androidzie używana do przechowywania danych obserwowanych przez UI. Można go używać w połączeniu z ViewModel, aby zapewnić reaktywne zachowanie interfejsu użytkownika.",
  },
  {
    question_id: 5058,
    question_title: "Co to jest error boundaries?",
    answer:
      "C. Mechanizm w React umożliwiający przechwytywanie błędów podczas renderowania komponentów i ich dzieci, aby zapobiec awarii całej aplikacji.",
  },
  {
    question_id: 5081,
    question_title:
      "Co to jest Retrofit i jak działa w aplikacjach Androidowych?",
    answer:
      "D. Biblioteka do wykonywania zapytań sieciowych w aplikacjach Androidowych",
  },
  {
    question_id: 5089,
    question_title: "Co to jest useLayoutEffect w React?",
    answer:
      "C. Hook w React umożliwiający wykonywanie efektów ubocznych synchronicznie z przeprowadzaniem zmian w interfejsie użytkownika.",
  },
  {
    question_id: 5090,
    question_title:
      "Co to jest Hilt i jak go skonfigurować w projekcie Androidowym?",
    answer:
      "A. Hilt to framework do wstrzykiwania zależności stworzony przez Google. Konfiguracja Hilt w projekcie Androidowym polega na dodaniu odpowiednich adnotacji i interfejsów.",
  },
  {
    question_id: 5093,
    question_title:
      "Jakie są podstawowe zasady korzystania z Firebase Cloud Messaging w Androidzie?",
    answer:
      "C. W celu odbierania powiadomień push w aplikacji Androidowej, należy zaimplementować odpowiedni serwis do obsługi wiadomości FCM.",
  },
  {
    question_id: 56,
    question_title:
      "Która metodyka zarządzania projektem jest optymalna, gdy zakres projektu w początkowej fazie nie jest do końca znany, wymagania mogą ulec zmianie w trakcie trwania projektu oraz mogą pojawić się nowe wymagania?",
    answer: "C. Agile",
  },
  {
    question_id: 92,
    question_title: "Dziedziczenie jest stosowane, gdy istnieje potrzeba",
    answer: "B. definicji klasy bardziej specjalistycznej niż już zdefiniowana",
  },
  {
    question_id: 109,
    question_title: "Klasa w programowaniu obiektowym to",
    answer: "D. typ danych",
  },
  {
    question_id: 123,
    question_title: "Do form przekazu werbalnego należy",
    answer: "A. mówienie",
  },
  {
    question_id: 153,
    question_title: "Ryzykiem zawodowym nazywa się",
    answer:
      "D. prawdopodobieństwo wystąpienia niepożądanych zdarzeń związanych z wykonywaną pracą, powodujących straty, w szczególności wystąpienia u pracowników niekorzystnych skutków zdrowotnych",
  },
  {
    question_id: 170,
    question_title:
      "Programista aplikacji mobilnych chce przekwalifikować się na pracownika Full-Stack Developer. Wskaż kurs, który powinien wybrać, aby było to możliwe",
    answer: "C. Complete JavaScript React, SQL, Node.js Cource",
  },
  {
    question_id: 174,
    question_title:
      "Projektując aplikację zorientowaną obiektowo należy założyć, że program będzie sterowany za pomocą",
    answer: "D. zbioru instancji klas współpracujących ze sobą",
  },
  {
    question_id: 183,
    question_title:
      'Wewnątrz klasy pracownik zdefiniowano przedstawione metody. Do której z nich można zgodnie z jej przeznaczeniem dopisać element diagnostyczny o treści: cout << "Obiekt został usunięty";?',
    answer: "C. ~pracownik",
  },
  {
    question_id: 3841,
    question_title:
      "W języku PHP zapisano fragment kodu. Plik cookie stworzony tym poleceniem",
    answer: "A. zostanie usunięty po jednym dniu od jego utworzenia",
  },
  {
    question_id: 4526,
    question_title: "Jakie funkcje dodaje SASSS?",
    answer: "B. Zmienne , zagnieżdzanie , mixiny",
  },
  {
    question_id: 4549,
    question_title: "Co to jest test A/B w marketingu internetowym?",
    answer:
      "D. Metoda porównywania dwóch wersji strony internetowej w celu określenia, która działa lepiej",
  },
  {
    question_id: 4556,
    question_title: "Jak zdefiniować tablicę statyczną w JAVA?",
    answer: "C. int[] tablica = new int[5];",
  },
  {
    question_id: 4582,
    question_title: "Jaka jest podstawowa struktura programu w języku JAVA?",
    answer: "B. Klasa publiczna z metodą main",
  },
  {
    question_id: 4604,
    question_title:
      "Co to jest tzw. 'backdoor' w kontekście cyberbezpieczeństwa?",
    answer:
      "A. Ukryte oprogramowanie umożliwiające dostęp do systemu bez autoryzacji",
  },
  {
    question_id: 4631,
    question_title: "Jak definiować stałe w języku JavaScript?",
    answer: "D. Kluczowe słowo const",
  },
  {
    question_id: 4637,
    question_title: "Co to jest UseRef w React?",
    answer:
      "A. Hook React pozwalający na dostęp do referencji do elementu DOM lub komponentu",
  },
  {
    question_id: 4680,
    question_title:
      "Jakie rozszerzenie pliku jest typowe dla aplikacji napisanych w języku Java?",
    answer: "B. .jar",
  },
  {
    question_id: 4715,
    question_title: "Co oznacza skrót IDE?",
    answer: "D. Integrated Development Environment",
  },
  {
    question_id: 4741,
    question_title: "Co oznacza skrót PWA w kontekście aplikacji webowych?",
    answer: "B. Progressive Web App",
  },
  {
    question_id: 4757,
    question_title:
      "Co oznacza znacznik width=&#34;match_parent &#34;w Android Studio?",
    answer: "D. Element zajmie całą dostępną przestrzeń w danym kontenerze.",
  },
  {
    question_id: 4805,
    question_title: "Jakie są zasady iteracji po obiektach w Pythonie?",
    answer: "B. Można użyć pętli for lub while",
  },
  {
    question_id: 4818,
    question_title: "Co to jest kodowanie w Pythonie?",
    answer:
      "B. Proces tworzenia programów komputerowych za pomocą języka Python",
  },
  {
    question_id: 4819,
    question_title: "Czym jest kodowanie w UTF-8?",
    answer:
      "D. Kodowanie znaków Unicode zmiennodługościowe, gdzie pojedynczy znak może być reprezentowany przez 1-4 bajty.",
  },
  {
    question_id: 4870,
    question_title: "Co to jest React Router?",
    answer:
      "D. Biblioteka do nawigacji w aplikacjach React, umożliwiająca dynamiczne zmiany adresów URL bez przeładowywania strony",
  },
  {
    question_id: 4882,
    question_title:
      "Jakie są różnice między komponentami funkcjonalnymi a klasowymi w React?",
    answer:
      "C. Komponenty funkcjonalne nie posiadają stanu, a komponenty klasowe mogą mieć stan.",
  },
  {
    question_id: 4883,
    question_title: "Jakie są różnice między SQL i NoSQL?",
    answer:
      "B. SQL jest relacyjną bazą danych, podczas gdy NoSQL jest nierelacyjną bazą danych.",
  },
  {
    question_id: 4952,
    question_title: "Czym jest 'JWT' w Pythonie?",
    answer: "A. Biblioteką do obsługi tokenów JWT",
  },
  {
    question_id: 4963,
    question_title: "Co oznacza skrót 'C#' w języku programowania?",
    answer: "D. a) C Sharp",
  },
  {
    question_id: 4986,
    question_title: "Co to jest HashMap i jak jej używać w Javie?",
    answer:
      "D. HashMap jest strukturą danych do przechowywania par klucz-wartość. Aby używać HashMap w Javie, należy utworzyć nowy obiekt HashMap, dodać elementy za pomocą metody put(key, value) oraz odczytywać elementy za pomocą metody get(key).",
  },
  {
    question_id: 4992,
    question_title: "Jak implementować synchronizację w Javie?",
    answer: "D. Korzystając z bloków synchronized",
  },
  {
    question_id: 4997,
    question_title: "Co to jest enzyme w kontekście testowania ReactJS?",
    answer: "B. Biblioteka do testowania komponentów React",
  },
  {
    question_id: 5017,
    question_title: "Czym jest statyczne generowanie treści w React?",
    answer:
      "C. Procesem generowania treści podczas budowania aplikacji, a nie w trakcie jej działania.",
  },
  {
    question_id: 5039,
    question_title: "Jakie są różnice między Apollo Client a Relay w ReactJS?",
    answer:
      "B. Apollo Client jest bardziej elastyczny i łatwiejszy w użyciu, podczas gdy Relay oferuje lepszą optymalizację i wydajność.",
  },
  {
    question_id: 5076,
    question_title: "Jak działa event delegation w ReactJS?",
    answer:
      "D. Delegacja zdarzeń polega na przypisywaniu jednego obsługiwacza zdarzeń do wielu elementów potomnych za pomocą jednego obsługiwacza na elemencie nadrzędnym.",
  },
  {
    question_id: 5077,
    question_title: "Jak używać TabLayout w Androidzie?",
    answer:
      "A. Dodając TabLayout do pliku XML layoutu i łącząc go z ViewPager w kodzie Java.",
  },
  {
    question_id: 5079,
    question_title: "Jak zaimplementować Navigation Drawer w Androidzie?",
    answer: "A. Korzystając z klasy DrawerLayout i NavigationView",
  },
  {
    question_id: 48,
    question_title:
      "Który z wymienionych algorytmów działających na tablicy jednowymiarowej ma złożoność obliczeniową O(n2)?",
    answer: "C. Sortowanie bąbelkowe.",
  },
  {
    question_id: 116,
    question_title:
      "Na rysunku przedstawiony jest fragment schematu blokowego pewnego algorytmu. Ile razy zostanie sprawdzony warunek n<7?",
    answer: "6",
  },
  {
    question_id: 127,
    question_title: "Framework Angular został napisany w języku",
    answer: "C. Typescript",
  },
  {
    question_id: 163,
    question_title: "Systemem kontroli wersji jest",
    answer: "C. Git",
  },
  {
    question_id: 182,
    question_title:
      "Liczba 1AF zapisana kodem szesnastkowym po przeliczeniu na kod dziesiętny wynosi",
    answer: "A. 431",
  },
  {
    question_id: 185,
    question_title:
      "Szablon MojaTablica implementuje funkcjonalność tablicy o indeksach różnego typu i elementach różnego typu.Na podstawie przedstawionego kodu,który wykorzystuje szablon do inicjacji tablicy asocjacyjnej wskaż definicję wykorzystującą szablon do utworzenia tablicy,w której indeksami są liczby całkowite a elementy napisy",
    answer: "C. MojaTablica tab2 = new MojaTablica();",
  },
  {
    question_id: 4517,
    question_title: "Co zwraca useAsync?",
    answer: "A. data, error",
  },
  {
    question_id: 4601,
    question_title:
      "Która z poniższych metodyk zarządzania projektami jest uważana za Agile?",
    answer: "D. Scrum",
  },
  {
    question_id: 4642,
    question_title:
      "Jakie języki programowania można użyć do tworzenia aplikacji na iPhone 'a?",
    answer: "C. Swift i Objective-C",
  },
  {
    question_id: 4789,
    question_title: "Co to jest metoda 'pop()' w Pythonie?",
    answer:
      "B. Metoda usuwająca i zwracająca element z listy na podstawie indeksu",
  },
  {
    question_id: 4820,
    question_title: "Co to jest kontekst menedżera w Pythonie?",
    answer:
      "C. Kontekst menedżera w Pythonie to mechanizm zarządzania zasobami, który automatycznie zarządza otwarciem i zamknięciem zasobów, takich jak pliki.",
  },
  {
    question_id: 4845,
    question_title: "Co to jest 'unittest ' w Pythonie?",
    answer: "C. Biblioteka do testowania jednostkowego w Pythonie",
  },
  {
    question_id: 4889,
    question_title: "Jakie są podstawowe operacje na bazach danych w Pythonie?",
    answer: "B. a) Tworzenie, odczytywanie, aktualizacja, usuwanie (CRUD)",
  },
  {
    question_id: 4947,
    question_title: "Co to jest Next.js i jak współpracuje z ReactJS?",
    answer:
      "A. Next.js to framework do budowania aplikacji internetowych opartych na ReactJS, który zapewnia dodatkowe funkcjonalności jak server-side rendering i static site generation.",
  },
  {
    question_id: 5038,
    question_title: "Jak używać Firebase Realtime Database w Androidzie?",
    answer:
      "A. Korzystając z Firebase SDK i implementując odpowiednie metody do odczytu i zapisu danych.",
  },
  {
    question_id: 135,
    question_title:
      "Jaki ciąg tekstowy zostanie wyświetlony po wykonaniu jednego z przedstawionych kodów?",
    answer: "4",
  },
  {
    question_id: 4661,
    question_title: "Co to jest Django?",
    answer: "B. Framework do tworzenia aplikacji webowych w języku Python",
  },
  {
    question_id: 4701,
    question_title:
      "Jak Pan Jezus powiedział 'Błogosławieni ubodzy w duchu,albowiem do nich należy królestwo niebieskie '?",
    answer: "C.  Na górze przemówienia",
  },
  {
    question_id: 4850,
    question_title: "Co to jest 'coverage ' w Pythonie?",
    answer: "C. Opcja 1: Biblioteka służąca do analizy pokrycia kodu testami",
  },
  {
    question_id: 4982,
    question_title: "Co to jest blok finally i jak go używać?",
    answer:
      "D. Blok finally jest blokiem kodu, który zawsze zostanie wykonany, niezależnie od tego czy wystąpił wyjątek czy nie.",
  },
  {
    question_id: 5016,
    question_title: "Jak utworzyć i zaimplementować Intent w Androidzie?",
    answer: "C. Przez konstruktor Intent()",
  },
  {
    question_id: 5069,
    question_title: "Jak działa routing w ReactJS?",
    answer:
      "C. ReactJS wykorzystuje bibliotekę React Router do obsługi routingu.",
  },
  {
    question_id: 4762,
    question_title: "Co zawiera plik index.js w aplikacji React?",
    answer:
      "A. Główny punkt wejścia do aplikacji, gdzie renderowany jest główny komponent",
  },
  {
    question_id: 4834,
    question_title: "Co to jest 'pandas ' w Pythonie?",
    answer: "B. Biblioteka do manipulacji i analizy danych",
  },
  {
    question_id: 4931,
    question_title:
      "Jakie są zasady manipulacji plikami tekstowymi w Pythonie?",
    answer: "B. Otwarcie pliku, odczytanie/zapisanie danych, zamknięcie pliku",
  },
  {
    question_id: 4960,
    question_title: "Co to jest Redux-Saga?",
    answer:
      "B. Biblioteka do zarządzania stanem aplikacji w React z wykorzystaniem generatorów funkcji.",
  },
  {
    question_id: 4761,
    question_title: "czym jest ReactJS i do czego służy?",
    answer:
      "B. React to framework służący do tworzenia aplikacji webowych opartych na strukturze komponentów.",
  },
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("ANSWERS", (result) => {
    if (!result.ANSWERS) {
      chrome.storage.local.set({ ANSWERS }, () => {
        console.log("Initial ANSWERS saved to storage.");
      });
    }
  });
});
