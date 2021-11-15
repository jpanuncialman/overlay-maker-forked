// TODO:
// - Breakpoint customization
// - Advanced styles
//   - Border-radius for boxes
//   - Background image for boxes
//   - Box-shadow for boxes
// - Comment this config with instructions for users!

// IDEAS:
// - MySpace-style HTML/CSS injection inside bottom/side areas?
// - Rethink section backgrounds
//   - Sidebar background different from bottom?
//   - Bottom different from content area?

// LONG-TERM TODO:
// - Routing for different states
//   - Away
//   - 'Just Chatting'
// - GUI for config

// atomic design for component & subcomponent config:
// { style: {}, content: "" || [] }

const config = {
  general: {
    style: {
      backgroundImage: "url(/Desk.jpg)",
      backgroundSize: "cover"
    }
  },
  contentArea: {
    style: {
      backgroundColor: "black",
      height: 800,
      width: 1450,
      border: "7px solid #8a888b"
    }
  },
  bottomArea: {
    style: {
      backgroundColor: "#304142",
      width: 1450,
      height: 200,
      border: "7px double #8a888b",
      display: "flex",
      justifyContent: "flex-start"
    },
    content: [
      {
        style: {
          fontFamily: "Averia Libre, serif",
          marginLeft: "100px"
        },
        content: [
          {
            style: {
              fontSize: "55px"
            },
            text: "Hugo Demaire"
          },
          {
            style: {},
            text: "Ghostwriter Vtuber"
          }
        ]
      }
      // {
      //   style: {
      //     fontFamily: "Averia Libre, serif"
      //   },
      //   content: [
      //     {
      //       style: {},
      //       text: "Follow me on Twitter @hugodemaire"
      //     }
      //   ]
      // }
    ]
  },
  chatArea: {
    style: {
      backgroundColor: "#304142",
      height: 500,
      width: 300,
      border: "7px double #8a888b",
      fontFamily: "Averia Libre, serif"
    },
    content: "Chat"
  }
};

module.exports = config;
