import { NavRoute } from "./types";

export const ProductsRoute: NavRoute = {
  path: "/products",
  to: "/products",
  label: "Products",
};

export const ContactsRoute: NavRoute = {
  path: "/contacts",
  to: "/contacts",
  label: "Contact Us",
};

export const ROUTES: NavRoute[] = [ProductsRoute, ContactsRoute];
