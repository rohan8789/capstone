Project Walk through:

1. We have 3 Dashboards: Public, NGO, Admin. Each Dashboard and its details persists on page reload.


   
   1.1 User Dashboard:
   ![Screenshot (151)](https://github.com/rohan8789/capstone/assets/74501400/fc4c6e8f-e2b8-41d1-a084-cccd85ebb6a6)


  
   1.2. NGO Dashboard:
   ![Screenshot (153)](https://github.com/rohan8789/capstone/assets/74501400/b1f4d1d7-1e19-45b6-9892-da3dc652257f)


  
   1.3. Admin Dashboard:
   ![Screenshot (152)](https://github.com/rohan8789/capstone/assets/74501400/8a85b7bd-7632-41fb-8dad-157ad5f95a1c)

   



2. User Login and Signup page with Validation:  
   2.1. Proper custom validation to restrict invalid input.
   2.2. Women/Girls less than 16 cannot register.  
   2.2. Data is sent to backend and further saved to database.  
   2.3. Used transactions to maintain consistency and atomicity of data in case when multipe query statements are involved.
   ![Screenshot (154)](https://github.com/rohan8789/capstone/assets/74501400/744c38ce-f837-4bf9-9bde-da0be6b8aae5)
   




4. lets first see user functionalities. User can login and explore all the training and internship programs provided by NGOs and government. They are redirected to a Trainee/Internship registration form when they explore. Registration form functionalities:  
   3.1. Again proper custom validation is applied.  
   3.2. Here user can upload their documents in image(jpg/jpeg/png) format. maximum size of 500kb is allowed.  
   3.3. After registration. the form details is sent to admin and user is redirected to "STATUS" page to see the status of their application.  
   3.4. The status remains pending until admin accepts the user form. Once, accepted it is dynamically updated.  
