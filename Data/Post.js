import USER from "./User";

export const POST=[
    {
        imageurl:require("../Components/Assets/Stories/me.jpg"),
        name:USER[0].user,
        likes:7850,
        caption:"testing my App",
        profile: USER[0].image,
        comments:[
            {
                user:"Rahul",
                comment:"Accha hai Bhai",
            },
            {
                user:"Paro",
                comment:"Kaha Gaye Ho?",
            }
        ],
    },


    {
        imageurl:require("../Components/Assets/Stories/Bhaiya.jpg"),
        name:USER[1].user,
        likes:8850,
        caption:"testing my App",
        profile: USER[1].image,
        comments:[
            {
                user:"Mohit",
                comment:"Accha hai Bhai",
            },
            {
                user:"Parul",
                comment:"Kaha Gaye Ho?",
            }
        ],
    },



    {
        imageurl:require("../Components/Assets/Stories/Nityam.jpg"),
        name:USER[2].user,
        likes:9850,
        caption:"testing my App",
        profile: USER[2].image,
        comments:[
            {
                user:"Rahul",
                comment:"Accha hai Bhai",
            },
            {
                user:"Palak",
                comment:"Kaha Gaye Ho?",
            }
        ],
    },


    {
        imageurl:require("../Components/Assets/Stories/Ankush.jpg"),
        name:USER[3].user,
        likes:850,
        caption:"testing my App",
        profile: USER[3].image,
        comments:[
            {
                user:"Rahul",
                comment:"Accha hai Bhai",
            },
            {
                user:"Paro",
                comment:"Kaha Gaye Ho?",
            }
        ],
    },


    {
        imageurl:require("../Components/Assets/Stories/Papa.jpg"),
        name:USER[4].user,
        likes:10850,
        caption:"testing my App",
        profile: USER[4].image,
        comments:[
            {
                user:"Rishi",
                comment:"Accha hai Bhai",
            },
            {
                user:"Pradip",
                comment:"Smart Boy",
            }
        ],
    },



]