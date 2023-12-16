const { NlpManager } = require('node-nlp');
const express = require('express');
const path = require('path');

const app = express();

const manager = new NlpManager({ languages: ['en'] });

// Add documents
manager.addDocument('en', 'hello', 'greeting');
manager.addDocument('en', 'hi', 'greeting');
manager.addDocument('en', 'hey', 'greeting');
manager.addDocument('en', 'hey you', 'greeting');
manager.addDocument('en', 'good morning', 'greeting');
manager.addDocument('en', 'good afternoon', 'greeting');
manager.addDocument('en', 'good day', 'greeting');
manager.addDocument('en', 'yo', 'greeting');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'good bye for now', 'greetings.bye');
// Home workout queries
manager.addDocument('en', 'What home workout plans do you offer?', 'homeWorkout.plans');
manager.addDocument('en', 'Can you recommend a home workout for weight loss?', 'homeWorkout.weightLoss');
manager.addDocument('en', 'What is the best home workout for muscle gain?', 'homeWorkout.muscleGain');
manager.addDocument('en', 'Tell me about your home workout routines', 'homeWorkout.routines');
manager.addDocument('en', 'Do you provide guided home workout videos?', 'homeWorkout.videos');
manager.addDocument('en', 'What is the duration of your home workout programs?', 'homeWorkout.duration');
manager.addDocument('en', 'How often should I do home workouts?', 'homeWorkout.frequency');
manager.addDocument('en', 'Can you suggest a beginner-friendly home workout?', 'homeWorkout.beginner');

// Diet-related questions for home workouts
manager.addDocument('en', 'What diet should I follow for home workouts?', 'homeDiet.recommendation');
manager.addDocument('en', 'Do you provide nutritional guidance for home workouts?', 'homeDiet.nutritionalGuidance');
manager.addDocument('en', 'Should I take supplements for home workouts?', 'homeDiet.supplements');
manager.addDocument('en', 'What is the best meal before a home workout?', 'homeDiet.preWorkoutMeal');
manager.addDocument('en', 'How many calories should I consume for home workouts?', 'homeDiet.calories');
manager.addDocument('en', 'How to stay motivated during home workouts?', 'homeWorkout.motivation');
manager.addDocument('en', 'Tell me about your home workout challenges', 'homeWorkout.challenges');
manager.addDocument('en', 'What equipment do I need for home workouts?', 'homeWorkout.equipment');
manager.addDocument('en', 'How to cool down after a home workout?', 'homeWorkout.coolDown');
manager.addDocument('en', 'Can I do home workouts if I have limited space?', 'homeWorkout.limitedSpace');
manager.addDocument('en', 'What is the importance of stretching in home workouts?', 'homeWorkout.stretching');

// Additional Diet-related questions for home workouts
manager.addDocument('en', 'Is intermittent fasting suitable for home workouts?', 'homeDiet.intermittentFasting');
manager.addDocument('en', 'How to manage diet for weight loss during home workouts?', 'homeDiet.weightLossManagement');
manager.addDocument('en', 'What snacks are good for post-home workout recovery?', 'homeDiet.postWorkoutSnacks');
manager.addDocument('en', 'Are there vegetarian/vegan diet options for home workouts?', 'homeDiet.vegetarianVeganOptions');
manager.addDocument('en', 'How to handle cravings during a home workout program?', 'homeDiet.cravingsManagement');
manager.addDocument('en', 'What are some high protein vegetarian options?', 'diet.high_protein_vegetarian');
manager.addDocument('en', 'Tell me about vegetarian sources of protein', 'diet.high_protein_vegetarian');
manager.addDocument('en', 'What are good sources of high protein for vegetarians?', 'diet.high_protein_vegetarian');

manager.addDocument('en', 'Give me examples of high carb foods', 'diet.high_carb');
manager.addDocument('en', 'What are good sources of carbohydrates?', 'diet.high_carb');
manager.addDocument('en', 'Tell me about foods that are rich in carbohydrates', 'diet.high_carb');

manager.addDocument('en', 'What are some vegetarian options for a high carb diet?', 'diet.high_carb_vegetarian');
manager.addDocument('en', 'Give me examples of high carb vegetarian foods', 'diet.high_carb_vegetarian');
manager.addDocument('en', 'Tell me about vegetarian sources of carbohydrates', 'diet.high_carb_vegetarian');
// Add documents for diet guidance
manager.addDocument('en', 'Guide me on diets', 'diet.guide');
manager.addDocument('en', 'Give me a diet plan', 'diet.guide');
manager.addDocument('en', 'Help with meal planning', 'diet.guide');
manager.addDocument('en', 'Provide a personalized diet recommendation', 'diet.guide');
manager.addDocument('en', 'Suggest a diet for me', 'diet.guide');
// Add answers
manager.addAnswer('en', 'greeting', 'Hey!');
manager.addAnswer('en', 'greeting', 'Hey!');
manager.addAnswer('en', 'greeting', 'Hello there');
manager.addAnswer('en', 'greeting', 'Hi');
manager.addAnswer('en', 'greeting', 'Yo whatsup');
manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'See you soon!');
// Home workout responses
manager.addAnswer('en', 'homeWorkout.plans', 'We offer various home workout plans designed for different fitness goals.');
manager.addAnswer('en', 'homeWorkout.weightLoss', 'For weight loss, try our high-intensity interval training (HIIT) home workouts.');
manager.addAnswer('en', 'homeWorkout.muscleGain', 'To gain muscle at home, focus on bodyweight exercises and resistance training.');
manager.addAnswer('en', 'homeWorkout.routines', 'Our home workout routines cover a range of exercises targeting different muscle groups.');
manager.addAnswer('en', 'homeWorkout.videos', 'Yes, we provide guided home workout videos to help you with your exercises.');
manager.addAnswer('en', 'homeWorkout.duration', 'The duration of our home workout programs varies. Check our website for specific details.');
manager.addAnswer('en', 'homeWorkout.frequency', 'We recommend doing home workouts 3-5 times a week, depending on your fitness level.');
manager.addAnswer('en', 'homeWorkout.beginner', 'For beginners, start with short and simple home workouts. Focus on proper form and consistency.');

// Diet-related responses for home workouts
manager.addAnswer('en', 'homeDiet.recommendation', 'Follow a balanced diet with adequate protein, carbs, and healthy fats for your home workouts.');
manager.addAnswer('en', 'homeDiet.nutritionalGuidance', 'Our nutritional guidance includes tips on healthy eating habits to complement your home workouts.');
manager.addAnswer('en', 'homeDiet.supplements', 'While not required, supplements can be considered. Consult with a healthcare professional for personalized advice.');
manager.addAnswer('en', 'homeDiet.preWorkoutMeal', 'Have a light meal with carbs and protein about 1-2 hours before your home workout for sustained energy.');
manager.addAnswer('en', 'homeDiet.calories', 'Caloric needs vary. Consider your fitness goals and consult with a nutritionist for personalized caloric intake.');
// Additional Home workout responses
manager.addAnswer('en', 'homeWorkout.motivation', 'Staying motivated is essential. Set realistic goals, track progress, and vary your home workouts to keep things interesting.');
manager.addAnswer('en', 'homeWorkout.challenges', 'Participate in our home workout challenges to add excitement to your fitness routine and win rewards.');
manager.addAnswer('en', 'homeWorkout.equipment', 'Most of our home workouts require minimal equipment such as resistance bands or dumbbells. You can also do bodyweight exercises.');
manager.addAnswer('en', 'homeWorkout.coolDown', 'After a home workout, perform gentle stretches to cool down and improve flexibility. Hydrate and rest as needed.');
manager.addAnswer('en', 'homeWorkout.limitedSpace', 'Yes, you can still do effective home workouts in limited space. Focus on bodyweight exercises and use compact equipment.');
manager.addAnswer('en', 'homeWorkout.stretching', 'Stretching is crucial for flexibility and preventing injuries. Include dynamic stretches before and static stretches after your home workouts.');

// Additional Diet-related responses for home workouts
manager.addAnswer('en', 'homeDiet.intermittentFasting', 'Intermittent fasting can be compatible with home workouts. Consult with a nutritionist to adapt it to your fitness goals.');
manager.addAnswer('en', 'homeDiet.weightLossManagement', 'For weight loss during home workouts, focus on a balanced diet, portion control, and staying hydrated.');
manager.addAnswer('en', 'homeDiet.postWorkoutSnacks', 'Opt for snacks with a balance of protein and carbs for post-home workout recovery. Examples include yogurt with fruit or a protein smoothie.');
manager.addAnswer('en', 'homeDiet.vegetarianVeganOptions', 'We offer vegetarian and vegan diet options to support your home workouts. Explore plant-based protein sources and balanced meals.');
manager.addAnswer('en', 'homeDiet.cravingsManagement', 'Manage cravings during home workouts by choosing healthier alternatives, staying hydrated, and addressing emotional eating with mindfulness.');
manager.addAnswer('en', 'diet.high_protein_vegetarian', 'Some high protein vegetarian options include tofu, lentils, chickpeas, quinoa, and Greek yogurt.');
manager.addAnswer('en', 'diet.high_protein_vegetarian', 'Vegetarian sources of protein include beans, legumes, nuts, seeds, and plant-based protein powders.');

manager.addAnswer('en', 'diet.high_carb', 'Good sources of carbohydrates include whole grains, fruits, vegetables, and legumes.');
manager.addAnswer('en', 'diet.high_carb', 'Carbohydrate-rich foods include brown rice, sweet potatoes, oats, and bananas.');

manager.addAnswer('en', 'diet.high_carb_vegetarian', 'Vegetarian options for a high carb diet include pasta, rice, potatoes, and whole grain bread.');
manager.addAnswer('en', 'diet.high_carb_vegetarian', 'You can get carbohydrates from vegetarian sources like quinoa, beans, lentils, and whole wheat products.');

// Add answers for diet guidance
manager.addAnswer('en', 'diet.guide', 'Sure! I can help you with that. To provide personalized diet advice, could you please share some information about your dietary preferences, goals, and any dietary restrictions you may have?');
manager.addAnswer('en', 'diet.guide', 'Absolutely! I can assist you with a diet plan. Before we proceed, could you let me know your dietary preferences, goals, and any specific requirements you have?');
manager.addAnswer('en', 'diet.guide', 'Certainly! Let me guide you on creating a personalized diet plan. To get started, could you share some details about your dietary preferences, goals, and any restrictions you may have?');

// Train model with use of promise
(async () => {
    try {
        await manager.train();
        manager.save();
    } catch (error) {
        console.error('Error during training:', error);
    }
})();

// Serve the static files in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/bot', async (req, res) => {
    try {
        const response = await manager.process('en', req.query.message);
        res.send(response.answer || 'Please rephrase');
    } catch (error) {
        console.error('Error processing message:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
