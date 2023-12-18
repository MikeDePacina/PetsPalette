### About
A twitter like app where people must sign in via AWS Cognito to like and upload posts of max length of 500 characters

### Technologies used
- Front-end: Vue, Vue-router, Pinia(to keep track of authentication)
- Backend/API: Spring Boot, Spring Security, Lombok, JPA, Hibernate, MYSQL connector
- Other: MYSQL, Docker, AWS EC2, AWS Cognito, AWS Lambda, AWS SQS
- NGINX to serve as a reverse proxy to redirect EC2 instances IP port 443 and 80 to 5173 for Vue app and 8080 for Spring Boot API
- Certbot to simplify and automate assigning SSL cert to domain using let's encrypt


### Architecture in AWS

  ![pets-palette-architecture in AWS](https://github.com/MikeDePacina/PetsPalette/assets/67354407/8f6a90e0-e963-4d18-b76c-88528277accc)


### Auth flow

![pets-palette-auth-flow](https://github.com/MikeDePacina/PetsPalette/assets/67354407/fde0e936-3211-4ee9-b3a8-18a9132ad80f)

### SQS and Lambda Integration

![sqs and lambda integration](https://github.com/MikeDePacina/PetsPalette/assets/67354407/7046689f-1bb4-4f55-93ae-07ef8486a267)
