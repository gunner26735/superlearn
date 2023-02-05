## Inspiration

Time is money and we wanted to help students value their time and be habitual to learn daily and improve themselves at every second.

Many times we just buy a course , study for a while and then forget about the course, we wanted to solve this problem by helping the student to complete the course with a high pace and earn rewards on successful compilation.

We a re using superfluid so money will be deducted from students account in realtime for every second that he/she is holding the course.

## What it does

We have two types of users :

5ire chain contract deployed address : 0x72C86E4C9f5da968093f3bB23D9fD8d028B6B965

1> **Teacher**

 - Teacher can create his profile with all basic details like his profession, his university.

 - Teacher can start a course , upload videos which will stored on IPFS and under a same collection.

- eg:Teacher creates a course on Machine learning and will upload the recorded videos on our platform and we will store those videos on IPFS and store the CIDs on our smart contract which is deployed on 5ire chain.

- Teacher can live stream some modules of the course and can also mint those videos so that in future the students can see those live streams.

- Teacher will set subscription tiers for their courses which the students can buy.

  - Example : Buy course for 5 Days pay $5,For 15 Days pay $10,for 30 Days pay $25.

- Can create course certificates as SBTs and students can mint it upon completion.

- Teacher can send notifications about the course using Push Notifications.



 2> **Student**

 - Student can create a profile and browse courses.

- student can opt in courses and Teachers Push channel to receive notifications regarding the course.

- When student buys a course , a superfluid money stream will be started .

- When a money stream is started the money is deducted from student's account in realtime for every second. 

- Eg: student buys a course subscription of 15 days worth $10 ,so for every day money stream will be 1 day = 10/15 = $0.66 and for every second it will be $((0.66/24)/60)/60).

so if a student completes the course in 10 days then he/she have paid only 0.66*10 =6$ and hence will be saving $9 except for whole $15.

- If the student bets on himself that he will complete the course in 10 days then after completion he/she will get a 10% refund on the fees paid by him.

- Due to superfluid money stream ,he/she can close the money stream whenever he/she completes the course and thus saving the remaining money for the left days .

## How we built it

- We built the payment system using Superfluid, using IPFS for storing video lectures, React for frontend .

- For money streaming we first need to wrap tokens into supertokens and then start the money stream and we are batching both of this action and creating a single transaction to do both.

