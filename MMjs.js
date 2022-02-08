const animals = ['Dog', 'Chicken', 'Cat', 'Rooster', 'Elephant', 'Hippo', 'Velociraptor', 'Slug']
const geography = ['Bridge', 'Road', 'Channel', 'Aquaduct', 'River', 'Pacific Ocean', 'Danube']
const answers = ['To get to the other side', 'Because he was hungry', 'Why the hell do you care?', 'Its absolutely none of your business', 'Because we live in a free society']

const jokeGenerator = () => {
const species = animals[Math.floor(Math.random() * animals.length)];
const geog = geography[Math.floor(Math.random() * geography.length)];
const punchline = answers[Math.floor(Math.random() * answers.length)];
let result = 'Why did the ' + species + ' cross the ' + geog + '? ' + punchline
return document.getElementById("joke").innerText=result
}

