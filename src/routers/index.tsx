import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import Loadable from "../components/Loadable";
const Authlayout = Loadable(lazy(() => import("../layouts/authlayout")));
const MainLayout = Loadable(lazy(() => import("../layouts/mainlayout")));
const LoginPage = Loadable(lazy(() => import("../pages/authentication/login")));
const Regiter = Loadable(
  lazy(() => import("../pages/authentication/register"))
);
const HomePage = Loadable(lazy(() => import("../pages/home")));
const FlowerShopPage = Loadable(lazy(() => import("../pages/flower")));
const DrinkShopPage = Loadable(lazy(() => import("../pages/drink")));
const WorkshopPage = Loadable(lazy(() => import("../pages/workshop")));
const FeedbackPage = Loadable(lazy(() => import("../pages/feedback")));
const AboutPage = Loadable(lazy(() => import("../pages/about")));
const ContactForm = Loadable(lazy(() => import("../pages/contact")));
const BlogPage = Loadable(lazy(() => import("../pages/blog")));
const BlogPostDetail = Loadable(lazy(() => import("../pages/blog/BlogDetail")));
const PaymentForm = Loadable(lazy(() => import("../pages/payment")));
const FlowerDetailPage = Loadable(
  lazy(() => import("../pages/flower/FlowerDetail"))
);
const DrinkDetailPage = Loadable(
  lazy(() => import("../pages/drink/DrinkDetail"))
);

const AuthenticationRouter = {
  path: "/auth",
  element: <Authlayout />,
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <Regiter />,
    },
  ],
};

const MainRouter = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "flower",
      element: <FlowerShopPage />,
    },
    {
      path: "flower/detail",
      element: <FlowerDetailPage />,
    },
    {
      path: "drink",
      element: <DrinkShopPage />,
    },
    {
      path: "drink/detail",
      element: <DrinkDetailPage />,
    },
    {
      path: "workshop",
      element: <WorkshopPage />,
    },
    {
      path: "feedback",
      element: <FeedbackPage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "contact",
      element: <ContactForm />,
    },
    {
      path: "blog",
      element: <BlogPage />,
    },
    {
      path: "blog/detail",
      element: <BlogPostDetail />,
    },
    {
      path: "payment",
      element: <PaymentForm />,
    },
  ],
};

export default function ThemeRoutes() {
  return useRoutes([MainRouter, AuthenticationRouter]);
}
