# Calculadora de Tinta Electron

This project is a desktop application built using Electron and React. It serves as an ink calculator that allows users to input dimensions and calculate the amount of ink required for printing.

## Project Structure

```
calculadoraTinta-electron
├── public
│   └── index.html          # Main HTML file for the Electron application
├── src
│   ├── App.jsx             # Main React component for the ink calculator
│   ├── App.css             # Styles for the React application
│   ├── index.js            # Entry point for the React application
│   └── electron
│       └── main.js         # Main process for the Electron application
├── package.json            # Configuration file for npm
├── .gitignore              # Specifies files to ignore by Git
└── README.md               # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd calculadoraTinta-electron
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the application, run the following command:
```
npm start
```

This will launch the Electron application, and you will be able to use the ink calculator.

## Usage

1. Enter the width and height in centimeters.
2. Input the percentage of ink and the tiraje (number of copies).
3. Click on the "Calcular" button to see the results in a modal.

## License

This project is licensed under the MIT License.