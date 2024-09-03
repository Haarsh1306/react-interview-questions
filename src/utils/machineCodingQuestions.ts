interface Prop {
    question: string;
    path: string;
    description: string;
}

const MachineCodingQuestions: Prop[] = [
    {
        question: "Design search functionality on input change",
        path: '/search',
        description: 'Implement a real-time search feature that filters results as the user types in the input field'
    },
    {
        question: "Design a Quiz App",
        path: '/quiz',
        description: 'Create an interactive quiz application with multiple-choice questions, scoring, and result display'
    },
    {
        question: "Design a Password Generator",
        path: '/password-generator',
        description: 'Develop a tool that generates secure, customizable passwords based on user-defined criteria'
    },
    {
        question: "Design a Stepper",
        path: '/stepper',
        description: 'Build a multi-step form or process with navigation controls and progress indication'
    },
    {
        question: "Design a Drag Notes",
        path: '/drag-notes',
        description: 'Create a drag-and-drop interface for organizing and rearranging note cards or sticky notes'
    },
    {
        question: "Design an Infinite Scroll",
        path: '/infinite-scroll',
        description: 'Implement a scrollable list or grid that continuously loads more content as the user scrolls down'
    },
    {
        question: "Design a Grid Light",
        path: '/grid-light',
        description: 'Develop an interactive grid of lights that can be toggled on and get toggled off in the reversed pattern they turned on' 
    },
];

export default MachineCodingQuestions;