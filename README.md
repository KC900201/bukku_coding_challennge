# Bukku Coding Assignment - Purchase and Sales Transaction Web App

This project is a solution attempt to the FrontEnd coding test of Bukku coding assignment. In this project, we are tasked to build an application to track purchase and sales transactions using any popular framework of choice and simultaneously calculate 
the cost for each sale recorded. It is expected for a full frontend implementation in this project.

## Description 

This is a mock application for users to log in as merchants or buyers to perform either a stock purchase or a shopping transaction. In this application, the user will either choose to log in as a `merchant` or a `buyer` on the landing page. 
If the user logs in as a `merchant`, he can perform a stock purchase by selecting one of the available items on the landing page. A shopping cart page will appear once the user clicks on the selected product and the user can choose the quantity of items to be purchased.
Once the user clicks on the `Checkout` button, the transaction is completed and a pop-up `message` will appear to signify the shipping process is ready to be processed. The user will be able to view the transaction record on the `Purchase History` page. If the user logs in as a `buyer`, he can perform a shopping transaction by following the same procedures and can view the sales transaction record on the `Sales History` page. However, when the user perform a sales transaction, the `sales price` is based on `Weighted Average Cost (WAC)` [calculation](https://corporatefinanceinstitute.com/resources/accounting/weighted-average-cost-method/). 

There are restrictions in performing the transaction:
 - User can only choose one product to purchase
 - Each transaction only has one product, but possible to have multiple items (quantity) for the product
 - There can only be one transaction on any given date, either sales OR purchase
 - Transactions can only be created but cannot be updated or deleted, meaning user cannot update or cancel the order after it is confirmed

## Screenshots
`WIP`

## Tech Stack
### Framework 
 - [Vite](https://vitejs.dev/)
### Programming language 
 - Front-end: React.js
 - Back-end: TypeScript
### CSS tools
 - [TailwindCSS](https://tailwindcss.com/)
### Test library
 - Jest
 - React-testing

## Installation

```bash
npm install
```

## Production build

```bash
npm run build
```

## Test case run (WIP)

```bash
npm run test
```

## Contribution

Pull requests are welcome. For any changes, kindly open an issue first to discuss what changes you would like to implement for code improvement.
