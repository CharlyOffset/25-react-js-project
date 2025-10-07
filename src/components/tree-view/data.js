export const menus = [
  {
    
    label: "Home",
    to: "/",
  },
  {
    
    label: "Profile",
    to: "/profile",
    children: [
      {
        id : 1,
        label: "Details",
        to: "details",
        children: [
          {
            id : 1,
            label: "Location",
            to: "location",
            children: [
              {
                id : 1,
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
   
    label: "Settings",
    to: "/settings",
    children: [
      {
       id : 1,
        label: "Account",
        to: "account",
      },
      {
        id: 2,
        label: "Security",
        to: "security",
        children: [
          {
            id : 1,
            label: "Login",
            to: "login",
          },
          {
            
            label: "Register",
            to: "register",
            children : [
                {id : 1,
                    label : 'Random data',
                    to : ''
                }
            ]
          },
        ],
      },
    ],
  },
];

export default menus;