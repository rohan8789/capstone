Project Walk through:

1. We have 3 Dashboards: Public, NGO, Admin. Respective routes are kept private until user is loggedIn. Each Dashboard and its details persists on page reload.


   
   1.1 User Dashboard:
   ![Screenshot (151)](https://github.com/rohan8789/capstone/assets/74501400/fc4c6e8f-e2b8-41d1-a084-cccd85ebb6a6)


  
   1.2. NGO Dashboard:
   ![Screenshot (153)](https://github.com/rohan8789/capstone/assets/74501400/b1f4d1d7-1e19-45b6-9892-da3dc652257f)


  
   1.3. Admin Dashboard:
   ![Screenshot (152)](https://github.com/rohan8789/capstone/assets/74501400/8a85b7bd-7632-41fb-8dad-157ad5f95a1c)

   



2. User Login and Signup page with Validation:  
   2.1. Proper custom validation to restrict invalid input.
   2.2. Women/Girls less than 16 cannot register.  
   2.3. Data is sent to backend and further saved to database.  
   2.4. Used transactions to maintain consistency and atomicity of data in case when multipe query statements are involved.
   ![Screenshot (154)](https://github.com/rohan8789/capstone/assets/74501400/744c38ce-f837-4bf9-9bde-da0be6b8aae5)
   




4. lets first see user functionalities.  
   3.1. Once user is loggedIn. he can explore user related private routes but cannot see admin routes. He can explore training and internship programs provided by NGOs and government. They are redirected to a Trainee/Internship registration form when they explore.  
   3.2. Again proper custom validation is applied.  
   3.3. Here user can upload their documents in image(jpg/jpeg/png) format. maximum size of 500kb is allowed.  
   3.4. After registration. the form details is sent to admin and user is redirected to "STATUS" page to see the status of their application.  
   3.5. The status remains pending until admin accepts the user form. Once, accepted it is dynamically updated.    
   (a). After user login    
   ![Screenshot (155)](https://github.com/rohan8789/capstone/assets/74501400/1c4076f6-777a-4101-b742-ebf8012633e8)
   (b). Registration form.    
   ![Screenshot (156)](https://github.com/rohan8789/capstone/assets/74501400/c6d050de-c5b5-44cf-82e5-86e1a79e3084)
   (c). After registration, redirected to status page. Here, details are present. Here status is pending which will remain pending until admin acccpts the request.  
   ![Screenshot (158)](https://github.com/rohan8789/capstone/assets/74501400/6406c406-42c6-4679-917e-6098e48da6b4)
   (d). On clicking on view, you can see form details. You will not see image because to upload image on render, it is required to give credit card details and payment to upload documents or image. Although, it works on localhost.
   
![Screenshot (159)](https://github.com/rohan8789/capstone/assets/74501400/274b6d7f-c3f5-4d52-a1e3-0691565352e1)


