
const Templates =[
    {
        name: 'Creating articles using 5 W’s',
        dec: 'Generate text for a topic by answering all 5 W questions',
        category: 'Writing',
        icon: '',
        aiPrompt: "Generate an article by answering all 5 W questions (What, Who, Why, Where, When, and How) for the given topic",
        slug: 'generate-article-5w',
        form: [
            {
                label: 'Enter your topic title',
                field: 'input',
                name: 'topicTitle',
                required: true
            }
        ]
    }
    
]

export default  Templates;