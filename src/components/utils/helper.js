export const features = [
    {
      name: 'Validate OTP',
      routename: '/validate-otp',
    },
    {
      name: 'Auto Search',
      routename: '/auto-search',
    },
    {
      name: 'Nested Checkboxes',
      routename: '/checkboxes',
    },
    {
        name: 'Dynamic Counter with Start, Pause and Reset Button',
        routename: '/dynamic-counter',
    },
    {
        name: 'Chips Input',
        routename: '/chips-input',
    },
    {
        name: 'Progress Bar',
        routename: '/progress-bar',
    },
    {
        name: 'File Explorer',
        routename: '/file-explorer',
    },
];

export const autoSearchData = [
    { number: 1, title: "Consultation & Assessment", description: "Connect with our experts to assess your goals, career plans, and program options." },
    { number: 2, title: "University & Program Selection", description: "Get a curated list of programs that fit your profile and preferences.", active: true },
    { number: 3, title: "Document Preparation", description: "Receive guidance on creating transcripts, statements, and letters of recommendation." },
    { number: 4, title: "Application Submission", description: "Assistance with online applications and meeting deadlines." },
    { number: 5, title: "Test Preparation", description: "Resources and prep support for IELTS, TOEFL, GRE, and more." },
    { number: 6, title: "Financial Aid Support", description: "Help in finding and applying for scholarships, grants, and loans." },
    { number: 7, title: "Visa Application", description: "Step-by-step guidance through the visa application process." },
    { number: 8, title: "Pre-Departure Orientation", description: "Join sessions covering travel, accommodation, and local culture." },
    { number: 9, title: "Post-Arrival Support", description: "Support in settling in, finding services, and connecting with communities." }
];

export const checkBoxData = [
    {
        id: 1,
        name: 'Fruits',
        children: [
            {
                id: 2,
                name: 'Citrus',
                children: [
                    {
                        id: 3,
                        name: 'Orange',
                    },
                    {
                        id: 4,
                        name: 'Lemon',
                    },
                    {
                        id: 5,
                        name: 'Kiwi',
                    },
                ],
            },
            {
                id: 6,
                name: 'Berries',
                children:[
                    {
                        id: 7,
                        name:"Straberry",
                    },
                    {
                        id: 8,
                        name:"Blueberry",
                    }
                ]
            },
            {
                id:9,
                name: 'Tropical',
                children: [
                    {
                        id: 10,
                        name: 'Mango',
                    },
                    {
                        id: 11,
                        name: "Banana",
                    },
                ],
            },
            {
                id:12,
                name:'Apple',
            }
        ]
    }
];

export const folderStructure = [
    {
        id: 1,
        "name": "public",
        isFolder: true,
        "children":[
            {
                id: 2,
               "name":"index.html",
               isFolder: false, 
            },
            {
                id: 3,
                "name":"manifest.json",
                isFolder: false, 
            },
            {
                id: 4,
                "name":"robot.txt",
                isFolder: false, 
            }
        ]
    },
    {
        id: 5,
        "name":"src",
        isFolder: true,
        children: [
            {
                id: 6,
                name: "components",
                isFolder: true,
                children: [
                    {
                        id: 7,
                        name: "utils",
                        isFolder: true,
                        children:[
                            {
                                id: 8,
                                name: "healper.js",
                                isFolder: false
                            }
                        ]
                    },
                    {
                        id: 9,
                        name: "css",
                        isFolder: true,
                        children:[
                            {
                                id: 10,
                                name: "base.css",
                                isFolder: false
                            },
                            {
                                id: 11,
                                name: "reset.css",
                                isFolder: false
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 12,
        "name": "package.json",
        isFolder: false
    },
    {
        id: 13,
        "name": "package-lock.json",
        isFolder: false
    },
    {
        id: 14,
        "name": "README.md",
        isFolder: false
    },
]