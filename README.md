# 📘 JS-Fundamentals

A curated collection of beginner-friendly JavaScript scripts that demonstrate core programming concepts using clean syntax and strict constraints. Each file is designed to reinforce understanding of variables, loops, conditionals, argument handling, and basic input/output — perfect for foundational learning, technical interviews, or scripting practice.

---

## 📁 Project Structure

Each script is self-contained and executable via Node.js. Below is a breakdown of each file and its purpose:

### `0-javascript_is_amazing.js`

- Prints: `JavaScript is amazing`
- Uses a constant variable `myVar`
- Constraints: No `var`, only `console.log(...)`

---

### `1-multi_languages.js`

- Prints three lines:
  - `C is fun`
  - `Python is cool`
  - `JavaScript is amazing`
- Constraints: No `var`, only `console.log(...)`

---

### `2-arguments.js`

- Prints a message based on the number of arguments:
  - No arguments → `No argument`
  - One argument → `Argument found`
  - More than one → `Arguments found`
- Constraints: No `var`, uses `process.argv`

---

### `3-value_argument.js`

- Prints the first argument passed
- If none, prints: `No argument`
- Constraints: No `var`, no `.length`, only `console.log(...)`

---

### `4-concat.js`

- Prints two arguments in the format: `<arg1> is <arg2>`
- Example: `node 4-concat.js JavaScript amazing` → `JavaScript is amazing`
- Constraints: No `var`, only `console.log(...)`

---

### `5-to_integer.js`

- Converts the first argument to an integer
- Prints: `My number: <int>` or `Not a number`
- Constraints: No `var`, no `try/catch`, uses `parseInt()` and `isNaN()`

---

### `6-multi_languages_loop.js`

- Prints three lines using an array and a loop:
  - `C is fun`
  - `Python is cool`
  - `JavaScript is amazing`
- Constraints: No `var`, no `if/else`, only one `console.log(...)` per iteration

---

### `7-multi_c.js`

- Prints `"C is fun"` x times, where x is the first argument
- If invalid or missing → `Missing number of occurrences`
- Constraints: No `var`, only two `console.log(...)`, uses a loop

---

### `8-square.js`

- Prints a square of `X` characters, size based on first argument
- If invalid → `Missing size`
- Example: `node 8-square.js 3` → prints a 3×3 square of `X`
- Constraints: No `var`, uses a loop

---

### `9-add.js`

- Adds two integers passed as arguments
- Defines a function: `function add(a, b)`
- Prints the result or `NaN` if inputs are invalid
- Constraints: No `var`, only `console.log(...)`

---

## 🧪 How to Run

Each script is executed using Node.js:

```bash
node <filename.js> [arguments...]
```
