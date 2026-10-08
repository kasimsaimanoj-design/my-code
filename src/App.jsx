import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import "./App.css";

/* =========================================================
   STARTER PROBLEMS
   ========================================================= */

const starterProblems = [
  {
    id: 1,
    title: "Prime Number",
    description: "Check whether a number is prime or not.",
    difficulty: "Easy",
    isLearned: false,

    solutions: {
      C: {
        code: `#include <stdio.h>

int main() {
    int n, count = 0;

    printf("Enter the number: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        if (n % i == 0)
            count++;
    }

    if (count == 2)
        printf("Prime");
    else
        printf("NOT Prime");

    return 0;
}`,
        output: `Enter the number: 7
Prime`,
        notes: "Used a loop to count the factors of a number.",
      },

      Python: {
        code: `n = int(input("Enter the number: "))

count = 0

for i in range(1, n + 1):
    if n % i == 0:
        count += 1

if count == 2:
    print("Prime")
else:
    print("NOT Prime")`,
        output: `Enter the number: 7
Prime`,
        notes: "Used a loop to check the factors of a number.",
      },
    },
  },

  {
    id: 2,
    title: "Fibonacci Series",
    description: "Print the first N Fibonacci numbers.",
    difficulty: "Easy",
    isLearned: false,

    solutions: {
      C: {
        code: `#include <stdio.h>

int main() {
    int n, a = 0, b = 1, c;

    printf("Enter the number of terms: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("%d ", a);

        c = a + b;
        a = b;
        b = c;
    }

    return 0;
}`,
        output: `Enter the number of terms: 7
0 1 1 2 3 5 8`,
        notes: "Used three variables to generate the Fibonacci series.",
      },

      Python: {
        code: `n = int(input("Enter the number of terms: "))

a = 0
b = 1

for i in range(n):
    print(a, end=" ")

    c = a + b
    a = b
    b = c`,
        output: `Enter the number of terms: 7
0 1 1 2 3 5 8`,
        notes: "Used a loop and two variables to generate Fibonacci numbers.",
      },
    },
  },
];


/* =========================================================
   PRACTICE BY TOPIC
   ========================================================= */

const topicProblems = {
  "Basic Programs": [
    {
      title: "Hello World",
      description: "Write a program to print Hello World.",
      difficulty: "Easy",
    },
    {
      title: "Sum of Two Numbers",
      description: "Find the sum of two given numbers.",
      difficulty: "Easy",
    },
    {
      title: "Even or Odd",
      description: "Check whether a number is even or odd.",
      difficulty: "Easy",
    },
    {
      title: "Positive, Negative or Zero",
      description: "Check whether a number is positive, negative or zero.",
      difficulty: "Easy",
    },
    {
      title: "Largest of Three Numbers",
      description: "Find the largest among three numbers.",
      difficulty: "Easy",
    },
    {
      title: "Factorial of a Number",
      description: "Find the factorial of a given number.",
      difficulty: "Easy",
    },
    {
      title: "Prime Number",
      description: "Check whether a number is prime or not.",
      difficulty: "Easy",
    },
    {
      title: "Fibonacci Series",
      description: "Print the first N Fibonacci numbers.",
      difficulty: "Easy",
    },
    {
      title: "Reverse a Number",
      description: "Reverse the digits of a given number.",
      difficulty: "Easy",
    },
    {
      title: "Palindrome Number",
      description: "Check whether a number is a palindrome.",
      difficulty: "Easy",
    },
    {
      title: "Sum of Digits",
      description: "Find the sum of all digits of a number.",
      difficulty: "Easy",
    },
    {
      title: "Armstrong Number",
      description: "Check whether a number is an Armstrong number.",
      difficulty: "Easy",
    },
    {
      title: "GCD of Two Numbers",
      description: "Find the greatest common divisor of two numbers.",
      difficulty: "Medium",
    },
    {
      title: "LCM of Two Numbers",
      description: "Find the least common multiple of two numbers.",
      difficulty: "Medium",
    },
    {
      title: "Perfect Number",
      description: "Check whether a number is a perfect number.",
      difficulty: "Medium",
    },
  ],

  Arrays: [
    {
      title: "Find Largest Element",
      description: "Find the largest element in an array.",
      difficulty: "Easy",
    },
    {
      title: "Find Smallest Element",
      description: "Find the smallest element in an array.",
      difficulty: "Easy",
    },
    {
      title: "Sum of Array Elements",
      description: "Calculate the sum of all elements in an array.",
      difficulty: "Easy",
    },
    {
      title: "Reverse an Array",
      description: "Reverse all elements of an array.",
      difficulty: "Easy",
    },
    {
      title: "Count Even and Odd",
      description: "Count even and odd elements in an array.",
      difficulty: "Easy",
    },
    {
      title: "Find Second Largest",
      description: "Find the second largest element in an array.",
      difficulty: "Medium",
    },
    {
      title: "Remove Duplicates",
      description: "Remove duplicate elements from an array.",
      difficulty: "Medium",
    },
    {
      title: "Frequency of Elements",
      description: "Find the frequency of each element in an array.",
      difficulty: "Medium",
    },
    {
      title: "Move Zeros to End",
      description: "Move all zeros to the end of an array.",
      difficulty: "Medium",
    },
    {
      title: "Rotate an Array",
      description: "Rotate an array by a given number of positions.",
      difficulty: "Medium",
    },
  ],

  Strings: [
    {
      title: "Reverse a String",
      description: "Reverse the characters of a string.",
      difficulty: "Easy",
    },
    {
      title: "Palindrome String",
      description: "Check whether a string is a palindrome.",
      difficulty: "Easy",
    },
    {
      title: "Count Vowels",
      description: "Count the number of vowels in a string.",
      difficulty: "Easy",
    },
    {
      title: "Count Characters",
      description: "Count the characters in a string.",
      difficulty: "Easy",
    },
    {
      title: "Convert Case",
      description: "Convert lowercase characters to uppercase and vice versa.",
      difficulty: "Easy",
    },
    {
      title: "Remove Spaces",
      description: "Remove all spaces from a string.",
      difficulty: "Easy",
    },
    {
      title: "Check Anagram",
      description: "Check whether two strings are anagrams.",
      difficulty: "Medium",
    },
    {
      title: "First Non-Repeating Character",
      description: "Find the first character that does not repeat.",
      difficulty: "Medium",
    },
    {
      title: "Character Frequency",
      description: "Find the frequency of each character.",
      difficulty: "Medium",
    },
  ],

  Loops: [
    {
      title: "Print Numbers 1 to N",
      description: "Print numbers from 1 to N using a loop.",
      difficulty: "Easy",
    },
    {
      title: "Print Even Numbers",
      description: "Print all even numbers from 1 to N.",
      difficulty: "Easy",
    },
    {
      title: "Print Odd Numbers",
      description: "Print all odd numbers from 1 to N.",
      difficulty: "Easy",
    },
    {
      title: "Multiplication Table",
      description: "Print the multiplication table of a number.",
      difficulty: "Easy",
    },
    {
      title: "Sum of N Numbers",
      description: "Find the sum of numbers from 1 to N.",
      difficulty: "Easy",
    },
    {
      title: "Count Digits",
      description: "Count the number of digits in a number using a loop.",
      difficulty: "Easy",
    },
    {
      title: "Number Pattern",
      description: "Print a simple number pattern using nested loops.",
      difficulty: "Easy",
    },
    {
      title: "Star Pattern",
      description: "Print different star patterns using nested loops.",
      difficulty: "Easy",
    },
    {
      title: "Prime Numbers in Range",
      description: "Print all prime numbers between two numbers.",
      difficulty: "Medium",
    },
    {
      title: "Fibonacci Using Loop",
      description: "Generate Fibonacci numbers using iteration.",
      difficulty: "Easy",
    },
  ],
};


/* =========================================================
   APP
   ========================================================= */

function App() {
  const [problems, setProblems] = useState(starterProblems);
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authMode, setAuthMode] = useState("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [authBusy, setAuthBusy] = useState(false);

  const [selectedProblem, setSelectedProblem] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState("C");

  const [selectedTopic, setSelectedTopic] = useState(null);

  const [showAddProblem, setShowAddProblem] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    difficulty: "Easy",

    cCode: "",
    cOutput: "",
    cNotes: "",

    pythonCode: "",
    pythonOutput: "",
    pythonNotes: "",
  });


  /* =========================================================
     AUTHENTICATION AND DATABASE LOADING
     ========================================================= */

  useEffect(() => {
    let mounted = true;

    const loadSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (!mounted) return;

      if (error) {
        setAuthMessage(error.message);
      }
      setAuthUser(data?.session?.user ?? null);
      setAuthLoading(false);
    };

    loadSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (mounted) {
          setAuthUser(session?.user ?? null);
          setAuthLoading(false);
        }
      }
    );

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadProblems = async () => {
      if (!authUser) {
        setProblems(starterProblems);
        return;
      }

      const { data, error } = await supabase
        .from("mycode_problems")
        .select("*")
        .eq("user_id", authUser.id)
        .order("created_at", { ascending: true });

      if (cancelled) return;

      if (error) {
        setAuthMessage(`Could not load saved problems: ${error.message}`);
        return;
      }

      const savedProblems = (data ?? []).map((row) => ({
        id: row.id,
        title: row.title,
        description: row.description,
        difficulty: row.difficulty,
        isLearned: row.is_learned,
        solutions: row.solutions ?? {},
      }));

      setProblems([...starterProblems, ...savedProblems]);
    };

    loadProblems();

    return () => {
      cancelled = true;
    };
  }, [authUser]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthMessage("");

    if (!authEmail.trim() || !authPassword) {
      setAuthMessage("Enter your email and password.");
      return;
    }

    setAuthBusy(true);
    try {
      if (authMode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email: authEmail.trim(),
          password: authPassword,
        });
        if (error) throw error;

        if (data.session) {
          setAuthMessage("Account created successfully.");
        } else {
          setAuthMessage("Account created. Check your email to confirm it, then log in.");
          setAuthMode("login");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: authEmail.trim(),
          password: authPassword,
        });
        if (error) throw error;
        setAuthMessage("");
      }
    } catch (error) {
      setAuthMessage(error.message || "Authentication failed. Please try again.");
    } finally {
      setAuthBusy(false);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) setAuthMessage(error.message);
    setSelectedProblem(null);
    setSelectedTopic(null);
  };

  /* =========================================================
     OPEN PROBLEM
     ========================================================= */

  const openProblem = (problem) => {
    setSelectedProblem(problem);
    setSelectedLanguage("C");
  };


  /* =========================================================
     CLOSE PROBLEM
     ========================================================= */

  const closeProblem = () => {
    setSelectedProblem(null);
  };


  /* =========================================================
     FORM INPUT
     ========================================================= */

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  /* =========================================================
     CHATGPT
     ========================================================= */

  const learnWithChatGPT = () => {
    const solution =
      selectedProblem.solutions?.[selectedLanguage] ?? {
        code: selectedLanguage === "C" ? "// C solution not added yet." : "# Python solution not added yet.",
        output: "No output added.",
        notes: "No notes added.",
      };

    const prompt = `I am practicing coding and I want to re-learn this problem.

Problem: ${selectedProblem.title}

Description: ${selectedProblem.description}

Language: ${selectedLanguage}

My Code:
${solution.code}

Please explain this problem in easy English.

Explain:
1. What the problem is asking
2. The logic step by step
3. My code line by line
4. Any mistakes in my code
5. A simple way to remember this concept
6. Give me a small example

I am a beginner, so keep the explanation simple.`;

    const chatGPTUrl =
      "https://chatgpt.com/?q=" +
      encodeURIComponent(prompt);

    window.open(chatGPTUrl, "_blank");
  };


  /* =========================================================
     SAVE NEW PROBLEM
     ========================================================= */

  const saveProblem = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Please enter the problem name.");
      return;
    }

    if (!authUser) {
      alert("Please log in before saving a problem.");
      return;
    }

    const newProblem = {
      title: form.title.trim(),

      description:
        form.description || "No description added.",

      difficulty: form.difficulty,

      isLearned: true,

      solutions: {
        C: {
          code:
            form.cCode ||
            "// C solution not added yet.",

          output:
            form.cOutput ||
            "No output added.",

          notes:
            form.cNotes ||
            "No notes added.",
        },

        Python: {
          code:
            form.pythonCode ||
            "# Python solution not added yet.",

          output:
            form.pythonOutput ||
            "No output added.",

          notes:
            form.pythonNotes ||
            "No notes added.",
        },
      },
    };

    const databaseProblem = {
      user_id: authUser.id,
      title: newProblem.title,
      description: newProblem.description,
      difficulty: newProblem.difficulty,
      is_learned: newProblem.isLearned,
      solutions: newProblem.solutions,
    };

    const { data, error } = await supabase
      .from("mycode_problems")
      .insert(databaseProblem)
      .select()
      .single();

    if (error) {
      alert(`Could not save problem: ${error.message}`);
      return;
    }

    const savedProblem = {
      id: data.id,
      title: data.title,
      description: data.description,
      difficulty: data.difficulty,
      isLearned: data.is_learned,
      solutions: data.solutions ?? {},
    };

    setProblems((currentProblems) => [...currentProblems, savedProblem]);

    setForm({
      title: "",
      description: "",
      difficulty: "Easy",

      cCode: "",
      cOutput: "",
      cNotes: "",

      pythonCode: "",
      pythonOutput: "",
      pythonNotes: "",
    });

    setShowAddProblem(false);
  };


  /* =========================================================
     LOGIN / SIGN UP SCREEN
     ========================================================= */

  if (authLoading) {
    return (
      <div className="app auth-screen">
        <div className="auth-card">
          <div className="brand auth-brand">
            <div className="brand-icon">&lt;/&gt;</div>
            <span>MyCode</span>
          </div>
          <p>Connecting to your account...</p>
        </div>
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="app auth-screen">
        <form className="auth-card" onSubmit={handleAuth}>
          <div className="brand auth-brand">
            <div className="brand-icon">&lt;/&gt;</div>
            <span>MyCode</span>
          </div>
          <h1>{authMode === "login" ? "Welcome back" : "Create your account"}</h1>
          <p>
            {authMode === "login"
              ? "Log in to access your saved coding problems."
              : "Sign up to save your coding practice securely."}
          </p>

          <label htmlFor="auth-email">Email</label>
          <input
            id="auth-email"
            type="email"
            autoComplete="email"
            value={authEmail}
            onChange={(e) => setAuthEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            type="password"
            autoComplete={authMode === "login" ? "current-password" : "new-password"}
            value={authPassword}
            onChange={(e) => setAuthPassword(e.target.value)}
            placeholder="At least 6 characters"
            minLength={6}
            required
          />

          {authMessage && <p className="auth-message">{authMessage}</p>}

          <button className="save-button auth-submit" type="submit" disabled={authBusy}>
            {authBusy
              ? "Please wait..."
              : authMode === "login"
                ? "Log In"
                : "Create Account"}
          </button>

          <p className="auth-switch">
            {authMode === "login" ? "New to MyCode?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setAuthMode(authMode === "login" ? "signup" : "login");
                setAuthMessage("");
              }}
            >
              {authMode === "login" ? "Sign Up" : "Log In"}
            </button>
          </p>
        </form>
      </div>
    );
  }

  /* =========================================================
     PROBLEM DETAILS PAGE
     ========================================================= */

  if (selectedProblem) {
    const solution =
      selectedProblem.solutions[selectedLanguage];

    return (
      <div className="app">

        <header className="navbar">

          <div
            className="brand"
            onClick={closeProblem}
          >
            <div className="brand-icon">
              &lt;/&gt;
            </div>

            <span>MyCode</span>
          </div>


          <nav>

            <button onClick={closeProblem}>
              Problems
            </button>

            <button>
              Progress
            </button>

            <button>
              Notes
            </button>

          </nav>


          <button className="profile logout-button" onClick={handleLogout} title={authUser.email}>
            Log out
          </button>

        </header>


        <main className="details-container">

          <button
            className="back-link"
            onClick={closeProblem}
          >
            ← Back to Problems
          </button>


          <div className="details-heading">

            <div className="heading-row">

              <h1>
                {selectedProblem.title}
              </h1>

              <span className="difficulty-badge">
                {selectedProblem.difficulty}
              </span>

            </div>

            <p>
              {selectedProblem.description}
            </p>

          </div>


          <div className="language-bar">

            <span className="language-label">
              Language
            </span>


            <div className="language-buttons">

              <button
                className={
                  selectedLanguage === "C"
                    ? "language-button selected"
                    : "language-button"
                }
                onClick={() =>
                  setSelectedLanguage("C")
                }
              >
                C
              </button>


              <button
                className={
                  selectedLanguage === "Python"
                    ? "language-button selected"
                    : "language-button"
                }
                onClick={() =>
                  setSelectedLanguage("Python")
                }
              >
                Python
              </button>

            </div>

          </div>


          {/* CHATGPT */}

          <div className="chatgpt-help">

            <div>

              <strong>
                Need help with this problem?
              </strong>

              <p>
                Re-learn the concept, understand your code, or ask for hints.
              </p>

            </div>


            <button
              className="chatgpt-button"
              onClick={learnWithChatGPT}
            >
              ✦ Re-learn with ChatGPT
            </button>

          </div>


          {/* CODE */}

          <section className="code-section">

            <div className="section-title">

              <h2>
                Your Code
              </h2>

              <span>
                {selectedLanguage}
              </span>

            </div>


            <pre className="code-editor">
              <code>
                {solution.code}
              </code>
            </pre>

          </section>


          {/* OUTPUT */}

          <section className="info-section">

            <h2>
              Output
            </h2>

            <pre className="output-box">
              {solution.output}
            </pre>

          </section>


          {/* NOTES */}

          <section className="info-section">

            <h2>
              Notes
            </h2>

            <p className="notes-text">
              {solution.notes}
            </p>

          </section>

        </main>

      </div>
    );
  }


  /* =========================================================
     TOPIC PROBLEM LIST
     ========================================================= */

  if (selectedTopic) {
    return (
      <div className="app">

        <header className="navbar">

          <div
            className="brand"
            onClick={() => setSelectedTopic(null)}
          >
            <div className="brand-icon">
              &lt;/&gt;
            </div>

            <span>
              MyCode
            </span>
          </div>


          <nav>

            <button
              onClick={() => setSelectedTopic(null)}
            >
              Problems
            </button>

            <button>
              Progress
            </button>

            <button>
              Notes
            </button>

          </nav>


          <button className="profile logout-button" onClick={handleLogout} title={authUser.email}>
            Log out
          </button>

        </header>


        <main className="dashboard">

          <button
            className="back-link"
            onClick={() => setSelectedTopic(null)}
          >
            ← Back to Topics
          </button>


          <section className="problems-section">

            <div className="section-heading">

              <div>

                <h2>
                  {selectedTopic}
                </h2>

                <p>
                  Beginner to interview-level problems
                </p>

              </div>

            </div>


            <div className="problem-list">

              {topicProblems[selectedTopic].map(
                (problem, index) => (

                  <div
                    className="problem-card"
                    key={index}
                  >

                    <div className="problem-main">

                      <div className="problem-check">
                        ✓
                      </div>


                      <div>

                        <h3>
                          {problem.title}
                        </h3>

                        <p>
                          {problem.description}
                        </p>

                      </div>

                    </div>


                    <div className="problem-meta">

                      <span className="difficulty-badge">
                        {problem.difficulty}
                      </span>

                      <span className="arrow">
                        →
                      </span>

                    </div>

                  </div>

                )
              )}

            </div>

          </section>

        </main>

      </div>
    );
  }


  /* =========================================================
     DASHBOARD
     ========================================================= */

  const cCount = problems.length;

  const pythonCount = problems.length;

  const learnedProblems =
    problems.filter(
      (problem) => problem.isLearned
    );


  return (
    <div className="app">

      {/* NAVBAR */}

      <header className="navbar">

        <div className="brand">

          <div className="brand-icon">
            &lt;/&gt;
          </div>

          <span>
            MyCode
          </span>

        </div>


        <nav>

          <button className="active-nav">
            Problems
          </button>

          <button>
            Progress
          </button>

          <button>
            Notes
          </button>

        </nav>


        <button className="profile logout-button" onClick={handleLogout} title={authUser.email}>
          Log out
        </button>

      </header>


      <main className="dashboard">

        {/* WELCOME */}

        <section className="welcome-section">

          <div>

            <h1>
              Welcome back 👋
            </h1>

            <p>
              Keep practicing and build your coding skills.
            </p>

          </div>


          <button
            className="add-button"
            onClick={() =>
              setShowAddProblem(true)
            }
          >
            + Add Problem
          </button>

        </section>


        {/* STATS */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-symbol purple">
              ✓
            </div>

            <div>

              <strong>
                {problems.length}
              </strong>

              <span>
                Problems
              </span>

            </div>

          </div>


          <div className="stat-card">

            <div className="stat-symbol blue">
              C
            </div>

            <div>

              <strong>
                {cCount}
              </strong>

              <span>
                C Solutions
              </span>

            </div>

          </div>


          <div className="stat-card">

            <div className="stat-symbol green">
              Py
            </div>

            <div>

              <strong>
                {pythonCount}
              </strong>

              <span>
                Python Solutions
              </span>

            </div>

          </div>


          <div className="stat-card">

            <div className="stat-symbol orange">
              🔥
            </div>

            <div>

              <strong>
                1
              </strong>

              <span>
                Day Streak
              </span>

            </div>

          </div>

        </section>


        {/* MY PROBLEMS */}

        <section className="problems-section">

          <div className="section-heading">

            <div>

              <h2>
                My Problems
              </h2>

              <p>
                Your saved coding problems
              </p>

            </div>


            <button
              className="small-add-button"
              onClick={() =>
                setShowAddProblem(true)
              }
            >
              + Add Problem
            </button>

          </div>


          <div className="problem-list">

            {problems.map((problem) => (

              <div
                className="problem-card"
                key={problem.id}
                onClick={() =>
                  openProblem(problem)
                }
              >

                <div className="problem-main">

                  <div className="problem-check">
                    ✓
                  </div>


                  <div>

                    <h3>
                      {problem.title}
                    </h3>

                    <p>
                      {problem.description}
                    </p>

                  </div>

                </div>


                <div className="problem-meta">

                  <div className="language-tags">

                    <span className="language-tag c-tag">
                      C
                    </span>

                    <span className="language-tag python-tag">
                      Python
                    </span>

                  </div>


                  <span className="difficulty-badge">
                    {problem.difficulty}
                  </span>


                  <span className="arrow">
                    →
                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* PRACTICE BY TOPIC */}

        <section className="topics-section">

          <div className="section-heading">

            <div>

              <h2>
                Practice by Topic
              </h2>

              <p>
                Improve your fundamentals
              </p>

            </div>

          </div>


          <div className="topics-grid">

            {/* BASIC */}

            <div
              className="topic-card"
              onClick={() =>
                setSelectedTopic("Basic Programs")
              }
            >

              <div>
                🔢
              </div>

              <h3>
                Basic Programs
              </h3>

              <p>
                {topicProblems["Basic Programs"].length} problems
              </p>

            </div>


            {/* ARRAYS */}

            <div
              className="topic-card"
              onClick={() =>
                setSelectedTopic("Arrays")
              }
            >

              <div>
                📦
              </div>

              <h3>
                Arrays
              </h3>

              <p>
                {topicProblems["Arrays"].length} problems
              </p>

            </div>


            {/* STRINGS */}

            <div
              className="topic-card"
              onClick={() =>
                setSelectedTopic("Strings")
              }
            >

              <div>
                🔤
              </div>

              <h3>
                Strings
              </h3>

              <p>
                {topicProblems["Strings"].length} problems
              </p>

            </div>


            {/* LOOPS */}

            <div
              className="topic-card"
              onClick={() =>
                setSelectedTopic("Loops")
              }
            >

              <div>
                🔁
              </div>

              <h3>
                Loops
              </h3>

              <p>
                {topicProblems["Loops"].length} problems
              </p>

            </div>

          </div>

        </section>


        {/* LEARNED PROBLEMS */}

        <section className="problems-section learned-section">

          <div className="section-heading">

            <div>

              <h2>
                Learned Problems
              </h2>

              <p>
                Problems you have added and learned
              </p>

            </div>

          </div>


          <div className="problem-list">

            {learnedProblems.length === 0 ? (

              <p className="empty-learned">
                No learned problems yet. Add your first problem above!
              </p>

            ) : (

              learnedProblems.map((problem) => (

                <div
                  className="problem-card"
                  key={problem.id}
                  onClick={() =>
                    openProblem(problem)
                  }
                >

                  <div className="problem-main">

                    <div className="problem-check">
                      ✓
                    </div>


                    <div>

                      <h3>
                        {problem.title}
                      </h3>

                      <p>
                        {problem.description}
                      </p>

                    </div>

                  </div>


                  <div className="problem-meta">

                    <div className="language-tags">

                      <span className="language-tag c-tag">
                        C
                      </span>

                      <span className="language-tag python-tag">
                        Python
                      </span>

                    </div>


                    <span className="difficulty-badge">
                      {problem.difficulty}
                    </span>


                    <span className="arrow">
                      →
                    </span>

                  </div>

                </div>

              ))

            )}

          </div>

        </section>

      </main>


      {/* =====================================================
          ADD PROBLEM MODAL
          ===================================================== */}

      {showAddProblem && (

        <div
          className="modal-background"
          onClick={() =>
            setShowAddProblem(false)
          }
        >

          <div
            className="add-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-top">

              <div>

                <h2>
                  Add Problem
                </h2>

                <p>
                  Add your C and Python solutions.
                </p>

              </div>


              <button
                className="close-modal"
                onClick={() =>
                  setShowAddProblem(false)
                }
              >
                ×
              </button>

            </div>


            <form onSubmit={saveProblem}>

              {/* NAME */}

              <div className="form-group">

                <label>
                  Problem Name
                </label>

                <input
                  name="title"
                  value={form.title}
                  onChange={handleInput}
                  placeholder="e.g. Reverse a Number"
                />

              </div>


              {/* DESCRIPTION */}

              <div className="form-group">

                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleInput}
                  placeholder="Describe the problem..."
                  rows="3"
                />

              </div>


              {/* DIFFICULTY */}

              <div className="form-group">

                <label>
                  Difficulty
                </label>

                <select
                  name="difficulty"
                  value={form.difficulty}
                  onChange={handleInput}
                >

                  <option>
                    Easy
                  </option>

                  <option>
                    Medium
                  </option>

                  <option>
                    Hard
                  </option>

                </select>

              </div>


              {/* C */}

              <div className="solution-heading">

                <span className="solution-dot c-dot"></span>

                <h3>
                  C Solution
                </h3>

              </div>


              <div className="form-group">

                <label>
                  C Code
                </label>

                <textarea
                  className="code-textarea"
                  name="cCode"
                  value={form.cCode}
                  onChange={handleInput}
                  placeholder="Enter your C code..."
                  rows="8"
                />

              </div>


              <div className="form-group">

                <label>
                  C Output
                </label>

                <textarea
                  name="cOutput"
                  value={form.cOutput}
                  onChange={handleInput}
                  placeholder="Enter C output..."
                  rows="3"
                />

              </div>


              <div className="form-group">

                <label>
                  C Notes
                </label>

                <textarea
                  name="cNotes"
                  value={form.cNotes}
                  onChange={handleInput}
                  placeholder="Notes about your C solution..."
                  rows="2"
                />

              </div>


              {/* PYTHON */}

              <div className="solution-heading">

                <span className="solution-dot python-dot"></span>

                <h3>
                  Python Solution
                </h3>

              </div>


              <div className="form-group">

                <label>
                  Python Code
                </label>

                <textarea
                  className="code-textarea"
                  name="pythonCode"
                  value={form.pythonCode}
                  onChange={handleInput}
                  placeholder="Enter your Python code..."
                  rows="8"
                />

              </div>


              <div className="form-group">

                <label>
                  Python Output
                </label>

                <textarea
                  name="pythonOutput"
                  value={form.pythonOutput}
                  onChange={handleInput}
                  placeholder="Enter Python output..."
                  rows="3"
                />

              </div>


              <div className="form-group">

                <label>
                  Python Notes
                </label>

                <textarea
                  name="pythonNotes"
                  value={form.pythonNotes}
                  onChange={handleInput}
                  placeholder="Notes about your Python solution..."
                  rows="2"
                />

              </div>


              {/* ACTIONS */}

              <div className="modal-actions">

                <button
                  type="button"
                  className="cancel-button"
                  onClick={() =>
                    setShowAddProblem(false)
                  }
                >
                  Cancel
                </button>


                <button
                  type="submit"
                  className="save-button"
                >
                  Save Problem
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;