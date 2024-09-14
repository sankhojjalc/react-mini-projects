import { A } from "./a";
import { B } from "./b";
import { C } from "./c";
import { D } from "./d";
import { E } from "./e";
import { PageNotFound } from "./pageNotFound";

export const routePath = [
  {
    route: "/",
    component: A,
    protected: false,
  },
  {
    route: "/b",
    component: B,
    protected: false,
  },
  {
    route: "/c",
    component: C,
    protected: true,
  },
  {
    route: "/d",
    component: D,
    protected: true,
  },
  {
    route: "/e",
    component: E,
    protected: true,
  },
  {
    route: "/*",
    component: PageNotFound,
    isLoggedInRequired: false,
  },
];
