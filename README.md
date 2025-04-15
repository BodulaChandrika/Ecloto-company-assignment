                                                      Shopping Cart App


Deliverables:

●	Record your entire screen from the time you’re reading this document to the time you have completed the code and upload it to google drive and share the link to that for us to review. You shouldn’t make any changes to the codebase after you have stopped recording the screen.

●	A README file with instructions on how to run the project.

Objective:
   
Create a simple React application that allows users to add products to a shopping cart, update quantities, and track their progress towards earning a free gift.

Requirements:

1.	Display Products:
○	Use the given PRODUCTS constant to render a list of products.
○	Each product should have a quantity selector with + and - buttons and an "Add to Cart" button.
2.	Shopping Cart:
○	Display the cart below the products.
○	Allow users to update product quantities in the cart.
○	Allow users to remove products from the cart.
3.	Free Gift Rule:
○	If the cart subtotal reaches THRESHOLD (1000), add the FREE_GIFT product automatically.
○	Show a progress bar above the cart indicating how much more needs to be added before the free gift is unlocked.
○	Ensure only one free gift is added, and it cannot be removed manually.
○	Make sure the cart gift item is removed if the cart value goes below the Threshold value
4.	State Management:
○	Use React’s built-in state management (useState, useEffect).
○	Maintain separate states for products and cart.
5.	User Experience:
○	Show a message when the free gift is added.
○	Ensure smooth interactions for adding/removing items.
________________________________________
 
Restrictions 
-	Use of AI tools like ChatGPT and Gemni are strictly prohibited. 
-	Use of google is allowed, but copying and pasting code isn’t. 
-	You can’t copy and paste code from your own personal projects as well. 
-	Use of external packages/libraries are also not allowed. You can use Next.js if you want to initialise the project, but nothing more than that. 

Code for Data (CodePen):

const PRODUCTS = [
 
  { id: 1, name: "Laptop", price: 500 },
  
  { id: 2, name: "Smartphone", price: 300 },
 
  { id: 3, name: "Headphones", price: 100 },
  
  { id: 4, name: "Smartwatch", price: 150 },

];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };

const THRESHOLD = 1000;

Notes:

●	Implement the missing features like the quantity selector, cart updates, and free gift logic.

●	You can use any styling approach (CSS, styled-components, Tailwind, etc.).

●	Feel free to add more UI enhancements for a better user experience.
 

Designs
-	Empty state
 
![image](https://github.com/user-attachments/assets/25afa7b8-afa7-4281-a33c-b50b8513281d)

 

-	When a product is added to cart
 ![image](https://github.com/user-attachments/assets/5f9314ec-7d75-44f4-baaf-4c54420a1371)

 
-	When the free gift is applied
 
 ![image](https://github.com/user-attachments/assets/cd9487e3-1452-4f8b-aaa2-06e1242536c4)

