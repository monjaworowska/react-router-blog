import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home, { homePageDataLoader } from "./pages/Home";
import PostsLayout from "./layouts/PostsLayout";
import Posts, { postsLoader } from "./pages/Posts";
import Users, { usersLoader } from "./pages/Users";
import Help from "./pages/Help";
import Contact, { contactFormAction } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Post, { postLoader } from "./pages/Post";
import UserPosts, { userPostsLoader } from "./pages/UserPosts";
import PostsError from "./pages/errors/PostsErrors";
import HomeErrors from "./pages/errors/HomeErrors";
import UsersErrors from "./pages/errors/UsersErrors";
import AboutLayout from "./layouts/AboutLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<Home />}
        /*loader={() => postsLoader({ limit: 6 })}*/
        loader={homePageDataLoader}
        errorElement={<HomeErrors />}
      />
      <Route
        path="posts"
        element={<PostsLayout />}
        errorElement={<PostsError />}
      >
        <Route index element={<Posts />} loader={postsLoader} />
        <Route path=":id" element={<Post />} loader={postLoader} />
      </Route>
      <Route path="users" errorElement={<UsersErrors />}>
        <Route index element={<Users />} loader={usersLoader} />
        <Route
          path=":id/posts"
          element={<UserPosts />}
          loader={userPostsLoader}
        />
      </Route>
      <Route path="about" element={<AboutLayout />}>
        <Route path="faq" element={<Help />} />
        <Route
          path="contact"
          element={<Contact />}
          action={contactFormAction}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: "/react-router-blog" }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
