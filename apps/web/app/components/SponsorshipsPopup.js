// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function SponsorshipsPopup(Props) {
  var isAdmin = Props.isAdmin;
  var sign = Props.sign;
  var visibilty = isAdmin ? "visible" : "invisible";
  return React.createElement("div", {
              className: "p-4 w-full bottom-0 md:bottom-5 absolute bg-extraDark md:rounded-xl md:m-4 shadow-2xl " + visibilty + ""
            }, React.createElement("div", {
                  className: "flex flex-row justify-between items-center gap-2"
                }, React.createElement("p", {
                      className: "text-white text-xl"
                    }, "This server is not setup to sponsor members!"), React.createElement("div", {
                      className: "flex flex-row items-center gap-4"
                    }, React.createElement("button", {
                          className: "bg-brightid p-3 rounded-xl text-xl font-semibold text-white",
                          type: "submit",
                          onClick: sign
                        }, "Setup Sponsorships"))));
}

var make = SponsorshipsPopup;

export {
  make ,
}
/* react Not a pure module */