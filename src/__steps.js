/** Basic Context API setup
 * 1. CONTEX API: share auth state with other components (across the application)
 * 2. create an UserContex
 * 3. ContexProvider with passed componenhts 
 * 4. set the UserContex in the index.js
 * 5. now to consume the context : export the AuthContext from UseContex
 * 6. now at header or anywhere else: UseContext hook  
 */

/**
 * Auth Integration 
 * 1. use getAuth by passing the app from firebase config 
 * 2. create a function named createUser to return createUserWithEmailAndPassword
 * 
 */